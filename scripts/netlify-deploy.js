// Script to prepare Netlify deployment with _redirects file and build verification
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Netlify deployment preparation...');

// Step 1: Verify the build output directory exists
const outputDir = path.join(__dirname, '../out');
if (!fs.existsSync(outputDir)) {
  console.error('❌ Error: Build output directory not found. Make sure the build completed successfully.');
  process.exit(1);
}

// Step 2: Ensure the _redirects file exists in public folder
const redirectsPath = path.join(__dirname, '../public/_redirects');
if (!fs.existsSync(redirectsPath)) {
  console.error('❌ Error: _redirects file not found in public directory');
  process.exit(1);
}

// Step 3: Copy the _redirects file to the output directory
const targetFile = path.join(outputDir, '_redirects');
try {
  // Copy the file manually to ensure it exists
  fs.copyFileSync(redirectsPath, targetFile);
  
  // Verify the file was copied successfully
  if (fs.existsSync(targetFile)) {
    const content = fs.readFileSync(targetFile, 'utf8');
    console.log('✅ Successfully copied _redirects file to output directory');
    console.log(`📋 Redirect rules: ${content.split('\n').length} rules configured`);
    
    // Verify redirect rules are properly formatted and have force parameter
    const lines = content.split('\n').filter(line => line.trim() !== '');
    const invalidRules = lines.filter(line => !line.includes(' ')).length;
    const forcedRules = lines.filter(line => line.includes('200!') || line.includes('force=true')).length;
    const spaRules = lines.filter(line => line.startsWith('/*')).length;
    
    if (invalidRules > 0) {
      console.log(`⚠️ Warning: Found ${invalidRules} potentially invalid redirect rules. Each rule should have at least a 'from' and 'to' path separated by space.`);
    }
    
    if (spaRules > 0 && forcedRules === 0) {
      console.log(`⚠️ Warning: SPA redirect rules found but none have force=true (200!). This may cause routing issues.`);
    } else if (forcedRules > 0) {
      console.log(`✅ Found ${forcedRules} redirect rules with force=true parameter for proper SPA routing`);
    }
  } else {
    throw new Error('_redirects file not found in output directory after copying');
  }
} catch (error) {
  console.error('❌ Error copying _redirects file:', error);
  process.exit(1);
}

// Step 4: Verify critical build artifacts exist
const requiredFiles = ['index.html', '_next'];
let missingFiles = [];

for (const file of requiredFiles) {
  const filePath = path.join(outputDir, file);
  if (!fs.existsSync(filePath)) {
    missingFiles.push(file);
  }
}

// Step 5: Check for font files to ensure proper loading
const fontDir = path.join(outputDir, '_next/static/media');
if (fs.existsSync(fontDir)) {
  const fontFiles = fs.readdirSync(fontDir).filter(file => 
    file.endsWith('.woff2') || file.endsWith('.woff') || file.endsWith('.ttf')
  );
  console.log(`✅ Found ${fontFiles.length} font files in the build output`);
} else {
  console.log('⚠️ Warning: Font directory not found. This might affect font loading on the site.');
}

if (missingFiles.length > 0) {
  console.error(`❌ Error: Missing critical build artifacts: ${missingFiles.join(', ')}`);
  process.exit(1);
}

// Step 6: Verify static assets (images, etc.)
const staticDir = path.join(outputDir, '_next/static/images');
if (fs.existsSync(staticDir)) {
  try {
    const imageFiles = fs.readdirSync(staticDir, { recursive: true });
    console.log(`✅ Found ${imageFiles.length} static image files in the build output`);
  } catch (error) {
    console.log(`⚠️ Warning: Could not read static images directory: ${error.message}`);
    console.log('   This won\'t block deployment, but you should check image loading on your site.');
  }
} else {
  console.log('ℹ️ No static images directory found. This is normal if your project doesn\'t use static images.');
}

// Step 7: Ensure proper caching headers and configuration files for optimal deployment
const configFiles = [
  { source: '../public/_headers', target: '_headers', name: 'caching and security headers', required: true },
  { source: '../public/_redirects', target: '_redirects', name: 'redirect rules', required: true },
  { source: '../netlify.toml', target: 'netlify.toml', name: 'Netlify configuration', required: true }
];

let configWarnings = 0;
for (const config of configFiles) {
  const sourcePath = path.join(__dirname, config.source);
  const targetPath = path.join(outputDir, config.target);
  
  if (fs.existsSync(sourcePath)) {
    try {
      // Create a backup of the file if it already exists in the output directory
      if (fs.existsSync(targetPath)) {
        const backupPath = `${targetPath}.backup`;
        fs.copyFileSync(targetPath, backupPath);
        console.log(`ℹ️ Created backup of existing ${config.name} file`);
      }
      
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✅ Successfully copied ${config.name} file to output directory`);
      
      // Verify file content for specific configurations
      if (config.target === '_headers') {
        const content = fs.readFileSync(targetPath, 'utf8');
        if (content.includes('Cache-Control') && content.includes('X-Content-Type-Options')) {
          console.log('✅ Verified caching and security headers are properly configured');
        } else {
          console.log('⚠️ Warning: _headers file may be missing important cache or security configurations');
          configWarnings++;
        }
      } else if (config.target === '_redirects') {
        // Verify _redirects file has been properly copied and has content
        const content = fs.readFileSync(targetPath, 'utf8');
        if (content.trim() === '') {
          console.log('⚠️ Warning: _redirects file is empty');
          configWarnings++;
        } else {
          // Check for force parameter in SPA routes
          const hasForceParameter = content.includes('200!') || content.includes('force=true');
          if (!hasForceParameter && content.includes('/*')) {
            console.log('⚠️ Warning: SPA redirect rules should use force=true (200!) for proper routing');
            configWarnings++;
          }
        }
      } else if (config.target === 'netlify.toml') {
        // Verify netlify.toml has been properly copied and has required configurations
        const content = fs.readFileSync(targetPath, 'utf8');
        if (!content.includes('[[redirects]]')) {
          console.log('⚠️ Warning: netlify.toml may be missing redirect configurations');
          configWarnings++;
        }
        
        // Check for force parameter in redirects
        if (!content.includes('force = true')) {
          console.log('⚠️ Warning: netlify.toml redirects should include force = true for SPA routing');
          configWarnings++;
        }
      }
    } catch (error) {
      console.log(`⚠️ Warning: Could not copy ${config.name} file: ${error.message}`);
      configWarnings++;
    }
  } else {
    console.log(`ℹ️ No ${config.name} file found at ${sourcePath}`);
    if (config.required) {
      console.log(`⚠️ Warning: Required ${config.name} file is missing. This may affect your Netlify deployment.`);
      configWarnings++;
    }
  }
}

// Step 8: Verify Netlify configuration is complete and valid
if (configWarnings > 0) {
  console.log(`⚠️ Warning: ${configWarnings} configuration issues were detected. Review the logs above for details.`);
  console.log('   These warnings won\'t block deployment but may affect site performance or functionality.');
} else {
  console.log('✅ All configuration files verified with no warnings');
}

// Step 9: Check for optimal build settings in netlify.toml
const netlifyTomlPath = path.join(outputDir, 'netlify.toml');
if (fs.existsSync(netlifyTomlPath)) {
  const tomlContent = fs.readFileSync(netlifyTomlPath, 'utf8');
  const optimizationChecks = [
    { feature: 'build.processing', description: 'asset optimization' },
    { feature: 'processing.css', description: 'CSS optimization' },
    { feature: 'processing.js', description: 'JavaScript optimization' },
    { feature: 'processing.images', description: 'image compression' },
    { feature: 'headers', description: 'custom headers' }
  ];
  
  const missingOptimizations = optimizationChecks.filter(check => !tomlContent.includes(check.feature));
  if (missingOptimizations.length > 0) {
    console.log('⚠️ Some recommended Netlify optimizations might be missing:');
    missingOptimizations.forEach(opt => console.log(`   - ${opt.description}`));
  } else {
    console.log('✅ Netlify configuration includes all recommended optimizations');
  }
  
  // Check for redirect force parameter
  if (tomlContent.includes('force = true')) {
    console.log('✅ Netlify redirects are configured with force=true for proper SPA routing');
  } else if (tomlContent.includes('force = false')) {
    console.log('⚠️ Warning: Netlify redirects have force=false which may cause routing issues in SPA');
  }
} else {
  console.log('⚠️ netlify.toml not found in output directory. Some Netlify features may not be configured.');
}

// Step 10: Final validation summary
const validationResults = {
  redirects: fs.existsSync(path.join(outputDir, '_redirects')),
  headers: fs.existsSync(path.join(outputDir, '_headers')),
  netlifyConfig: fs.existsSync(path.join(outputDir, 'netlify.toml')),
  buildArtifacts: missingFiles.length === 0,
  warnings: configWarnings
};

console.log('\n📋 Netlify Deployment Validation Summary:');
console.log(`- Redirect Rules: ${validationResults.redirects ? '✅ Present' : '❌ Missing'}`);
console.log(`- Caching/Security Headers: ${validationResults.headers ? '✅ Present' : '❌ Missing'}`);
console.log(`- Netlify Configuration: ${validationResults.netlifyConfig ? '✅ Present' : '❌ Missing'}`);
console.log(`- Build Artifacts: ${validationResults.buildArtifacts ? '✅ Complete' : '❌ Incomplete'}`);
console.log(`- Configuration Warnings: ${validationResults.warnings === 0 ? '✅ None' : `⚠️ ${validationResults.warnings} issue(s)`}`);

const isReadyForDeployment = validationResults.redirects && 
                            validationResults.headers && 
                            validationResults.netlifyConfig && 
                            validationResults.buildArtifacts;

if (isReadyForDeployment) {
  console.log('\n✅ Build verification complete');
  console.log('🎉 Netlify deployment preparation completed successfully!');
} else {
  console.log('\n⚠️ Build verification completed with issues that may affect deployment');
  console.log('🔍 Review the warnings above before deploying to Netlify');
}

console.log('\nDeployment Tips:');
console.log('- Verify your site after deployment to ensure all pages load correctly');
console.log('- Check that fonts and images are loading properly');
console.log('- Test all redirect rules defined in _redirects file');
console.log('- Confirm security headers are working using https://securityheaders.com');
console.log('- Verify caching behavior for static assets');
console.log('- Remember that Netlify automatically handles compression and CDN distribution');
console.log('- For SPA routing issues, ensure all redirects have force=true parameter');
console.log('- Check your Netlify deploy logs for any additional warnings or errors');