# Portfolio Website

A beautiful personal portfolio website inspired by the aquamarine beaches of the Philippines.

## Features

- 🏠 **Home Page** - Welcome section with hero banner and featured projects preview
- 👤 **About Page** - Personal information, skills, and background
- 💼 **Projects Page** - Showcase of your work and projects
- 📧 **Contact Page** - Contact form to get in touch

## Design Theme

The website features a Philippines-inspired aquamarine beach theme with:
- Aquamarine color palette (#7FFFD4, #40E0D0, #00CED1)
- Ocean blue accents (#008B8B, #006666)
- Smooth gradients and modern UI elements
- Responsive design for all devices

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

- Update personal information in `/app/about/page.tsx`
- Add your projects in `/app/projects/page.tsx`
- Modify colors and styling in `/app/globals.css`
- Update metadata in `/app/layout.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and name your project: **Anne Christine Valenzuela's Portfolio**

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub:
```bash
git remote add origin <your-github-repo-url>
git push -u origin master
```

2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Configure project name as: **Anne Christine Valenzuela's Portfolio**
6. Vercel will automatically detect Next.js and deploy

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- CSS (Custom properties for theming)

---

Made with ❤️ inspired by the beautiful beaches of the Philippines
