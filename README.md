# Jawad Asghar Portfolio - Next.js Version

This is a Next.js version of my portfolio website showcasing my work as a designer and developer.

## Features

- Modern Next.js 14 with App Router
- Responsive design with Tailwind CSS
- Portfolio sections: About, Experience, Skills, Projects
- Project categories: Web, Design, WordPress
- Design subcategories: Logos, Illustrations, UI
- Mobile-friendly navigation
- Social media links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── components/          # React components
├── about/              # About page
├── experience/         # Experience page
├── contact/            # Contact page
├── skills/             # Skills page
├── projects/           # Projects pages
│   ├── web/           # Web projects
│   ├── design/        # Design projects
│   │   ├── logos/     # Logo designs
│   │   ├── illustrations/ # Illustrations
│   │   └── ui/        # UI designs
│   └── wordpress/     # WordPress projects
├── globals.css         # Global styles
├── layout.tsx          # Root layout
└── page.tsx            # Home page
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- React Icons

## Deployment

This project can be deployed to Vercel, Netlify, or any other platform that supports Next.js.

## License

This project is private and for personal use.
