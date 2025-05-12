#!/bin/bash

# Script to set up the project with npm

# Remove bun.lock if it exists
if [ -f bun.lock ]; then
  echo "Removing bun.lock file..."
  rm bun.lock
fi

# Install dependencies with npm
echo "Installing dependencies with npm..."
npm install --legacy-peer-deps

# Run a test build with SSL verification disabled
echo "Running a test build with SSL verification disabled..."
export NODE_TLS_REJECT_UNAUTHORIZED=0
npm run build
unset NODE_TLS_REJECT_UNAUTHORIZED

echo "Setup complete! Your project is now ready for Netlify deployment."
echo "See netlify-deploy.md for deployment instructions."