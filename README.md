# Modern Portfolio Website

A stunning, modern portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features smooth animations, 3D effects, and a responsive design that showcases your skills and projects professionally.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Smooth Animations**: GSAP and Framer Motion for professional animations
- **3D Effects**: Three.js ready for 3D visualizations
- **Responsive Design**: Mobile-first approach with beautiful breakpoints
- **Dynamic Content**: All content loaded from TypeScript data files
- **Interactive Elements**: Particle background, hover effects, and micro-interactions
- **Performance Optimized**: Fast loading with code splitting and optimization
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Framer Motion
- **3D Graphics**: Three.js (ready to use)
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── layout/            # Layout components (Header, Footer)
│   ├── sections/          # Page sections (Hero, About, Skills, etc.)
│   └── effects/           # Visual effects (Particles, ScrollToTop)
├── data/                  # Data files for content management
│   ├── personal.ts        # Personal information
│   ├── skills.ts          # Skills and technologies
│   ├── experience.ts      # Work experience
│   ├── education.ts       # Education history
│   └── projects.ts        # Portfolio projects
└── styles/               # Global styles and Tailwind config
```

## 🎨 Customization

### Adding Your Information

1. **Personal Info**: Edit `src/data/personal.ts`
2. **Skills**: Update `src/data/skills.ts` with your technologies
3. **Experience**: Add your work history in `src/data/experience.ts`
4. **Education**: Update `src/data/education.ts`
5. **Projects**: Showcase your work in `src/data/projects.ts`

### Styling

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font imports in `src/index.css`
- **Animations**: Customize GSAP animations in component files
- **Layout**: Adjust spacing and layout in Tailwind classes

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## ⚡ Performance Features

- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Optimized images with proper loading
- **Animation Performance**: 60fps animations with hardware acceleration
- **Bundle Optimization**: Tree shaking and minification

## 🎯 SEO & Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader friendly
- Meta tags for social sharing

## 🔧 Development

### Adding New Sections

1. Create component in `src/components/sections/`
2. Add to main App component
3. Update navigation in Header component
4. Add corresponding data file if needed

### Custom Animations

```typescript
// Example GSAP animation
useEffect(() => {
  gsap.fromTo('.my-element', 
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1 }
  );
}, []);
```

### Adding 3D Elements

Three.js is included and ready to use:

```typescript
import * as THREE from 'three';
// Your 3D code here
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Built with ❤️ using React, TypeScript, and modern web technologies**