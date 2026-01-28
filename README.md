# Test Application

A Next.js application ready to be deployed to GitHub Pages.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

Build the static export:

```bash
npm run build
```

Preview the production build locally:

```bash
npx serve out
```

## Deployment to GitHub Pages

### Setup

1. **Configure basePath**:
   - Open `next.config.js`
   - Uncomment and update the `basePath` and `assetPrefix` with your GitHub repository name
   - For example, if your repo URL is `https://github.com/username/test-application`, set:
     ```js
     basePath: '/test-application',
     assetPrefix: '/test-application',
     ```

2. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

3. **Deploy**:
   - Push your code to the `main` branch
   - The GitHub Actions workflow will automatically build and deploy your site
   - After the workflow completes, your site will be available at:
     `https://<username>.github.io/<repo-name>/`

### Verification

After deployment, verify:

- ✅ GitHub Actions workflow completes successfully
- ✅ Site is accessible at the GitHub Pages URL
- ✅ Navigation between pages works correctly
- ✅ All assets (CSS, images) load properly

## Project Structure

```
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout
│       ├── page.tsx         # Home page
│       ├── about/
│       │   └── page.tsx    # About page
│       └── contact/
│           └── page.tsx    # Contact page
├── public/                  # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
└── package.json

```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
