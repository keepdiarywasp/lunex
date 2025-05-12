@echo off
echo Building Lunexa Clone project for Netlify deployment...
cd lunexa-clone
set NODE_TLS_REJECT_UNAUTHORIZED=0

:: Clean previous build output
if exist out rmdir /s /q out

:: Run the Netlify-specific build script
npm run build:netlify

:: Verify build output
echo.
echo Build process completed.
echo Verifying build output...

if exist out\index.html (
    echo ✅ Main index.html file found
) else (
    echo ❌ ERROR: index.html not found in build output
)

if exist out\_next\static\css (
    echo ✅ CSS files found
) else (
    echo ❌ ERROR: CSS files not found in build output
)

if exist out\_next\static\chunks (
    echo ✅ JavaScript chunks found
) else (
    echo ❌ ERROR: JavaScript chunks not found in build output
)

if exist out\_redirects (
    echo ✅ Netlify _redirects file found
) else (
    echo ❌ ERROR: _redirects file not found in build output
)

echo.
echo Build verification complete. Ready for deployment.
pause