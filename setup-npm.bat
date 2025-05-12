@echo off
echo Setting up the project with npm...

:: Remove bun.lock if it exists
if exist bun.lock (
  echo Removing bun.lock file...
  del bun.lock
)

:: Install dependencies with npm
echo Installing dependencies with npm...
npm install --legacy-peer-deps

:: Run a test build with SSL verification disabled
echo Running a test build with SSL verification disabled...
set NODE_TLS_REJECT_UNAUTHORIZED=0
npm run build
set NODE_TLS_REJECT_UNAUTHORIZED=

echo.
echo Setup complete! Your project is now ready for Netlify deployment.
echo See netlify-deploy.md for deployment instructions.

pause