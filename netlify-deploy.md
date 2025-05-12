# Netlify Deployment Guide

## Prerequisites

- Node.js installed (version 18 or higher recommended)
- npm installed
- Git repository with your project

## Setup Instructions

1. **Install dependencies**

```bash
npm install
```

2. **Test the build locally**

```bash
npm run build
```

This will create a static export in the `out` directory.

3. **Deploy to Netlify**

- Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
- Log in to Netlify and click "New site from Git"
- Connect to your Git provider and select your repository
- Netlify will automatically detect the settings from `netlify.toml`
- Click "Deploy site"

## Configuration Details

The project has been configured for Netlify with the following settings:

- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Node version**: 18
- **NPM flags**: `--legacy-peer-deps`

## Troubleshooting

- If you encounter dependency issues during build, try running `npm install --legacy-peer-deps` locally first
- For routing issues, check the `_redirects` file in the public directory
- If images aren't loading, verify the remote image patterns in `netlify.toml`
- If you encounter SSL certificate errors ("self-signed certificate in certificate chain"), use the updated setup scripts which temporarily disable SSL verification during build with `NODE_TLS_REJECT_UNAUTHORIZED=0`

## Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site locally.