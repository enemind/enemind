# Enemind - Product Website

A modern, high-performance product website built with Next.js, React, and Tailwind CSS.

## Features

- ✨ Modern, responsive design
- 🚀 Lightning-fast performance
- 📱 Mobile-optimized
- 🎨 Beautiful UI with glass-morphism effects
- 📊 Integrated analytics section
- 💳 Pricing comparison
- 🎬 Smooth animations
- ♿ Accessible components

## Tech Stack

- **Framework**: Next.js 14
- **React**: 18.2
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **TypeScript**: For type safety

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/enemind/enemind.git
cd enemind
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Build
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Linting
```bash
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features section
│   ├── Pricing.tsx         # Pricing section
│   ├── Testimonials.tsx    # Testimonials section
│   ├── CTA.tsx             # Call-to-action section
│   └── Footer.tsx          # Footer
```

## Customization

### Colors
Edit the theme colors in `tailwind.config.js`

### Content
Modify component content directly in the respective files under `src/components/`

## Performance

- ⚡ Optimized images with Next.js Image component
- 🔄 Static site generation where applicable
- 📦 Code splitting and lazy loading
- 🎯 Core Web Vitals optimized

## SEO

- Metadata configured in `layout.tsx`
- Semantic HTML structure
- Open Graph tags ready
- Mobile-first approach

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Render

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License

## Support

For support, email hello@enemind.com or open an issue in the repository.

## Roadmap

- [ ] Blog integration
- [ ] Interactive demo section
- [ ] Customer case studies
- [ ] Newsletter signup
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
