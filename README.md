# Modern Portfolio Website

A stunning, modern portfolio website built with React, TypeScript, and cutting-edge web technologies. Features 3D animations, interactive elements, sound effects, and a professional design that showcases your skills and projects effectively.

## ✨ Features

### 🎨 Modern Design

- **Dark theme** with gradient accents
- **Glass morphism** effects throughout
- **Responsive design** for all devices
- **Smooth animations** and transitions

### 🎭 Advanced Animations

- **GSAP animations** for scroll-triggered effects
- **Framer Motion** for component animations
- **Three.js 3D background** with interactive particles
- **Parallax scrolling** effects

### 🔊 Interactive Elements

- **Sound effects** for buttons and interactions
- **Hover animations** with visual feedback
- **Modal dialogs** for project details
- **Expandable sections** for education and experience

### 📊 Dynamic Content

- **Data-driven** sections (skills, projects, experience)
- **Easy to update** via TypeScript files
- **Filterable portfolio** by category and status
- **Real-time statistics** and achievements

### 🛠 Technical Stack

- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Three.js** for 3D graphics
- **GSAP** for advanced animations
- **Framer Motion** for component animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── effects/          # Animation components
│   ├── layout/           # Header, Footer
│   ├── sections/         # Main page sections
│   └── ui/              # Reusable UI components
├── data/                # Content data files
├── utils/               # Utility functions
└── App.tsx             # Main application
```

## 🎯 Customization

### Personal Information

Edit `src/data/personal.ts` to update your information:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  // ... other fields
};
```

### Skills & Technologies

Update `src/data/skills.ts` to modify your skills:

```typescript
export const skills: Skill[] = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    proficiency: 95,
    // ... other fields
  },
];
```

### Projects

Modify `src/data/projects.ts` to add your projects:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    // ... other fields
  },
];
```

### Experience & Education

Update `src/data/experience.ts` and `src/data/education.ts` with your background.

## 🎨 Styling

The project uses Tailwind CSS with custom configuration. Key classes:

- `glass` - Glass morphism effect
- `gradient-text` - Gradient text effect
- `animate-on-scroll` - Scroll-triggered animations
- `section-padding` - Consistent section spacing

## 🔊 Sound Effects

The portfolio includes subtle sound effects for interactions:

- Button clicks
- Hover effects
- Success notifications

Toggle sound in the top-right corner of the hero section.

## 🌟 Key Features

### 3D Background

Interactive Three.js background with floating particles and geometric shapes that respond to mouse movement.

### Dynamic Portfolio

- Filter projects by category and status
- Detailed project modals with features, challenges, and solutions
- Impact metrics and team information

### Enhanced Animations

- Letter-by-letter text animations
- Staggered element reveals
- Smooth page transitions
- Parallax scrolling effects

### Professional Sections

- **Hero** - Animated introduction with 3D background
- **About** - Expandable education and experience cards
- **Skills** - Interactive skill bars with categories
- **Portfolio** - Filterable project showcase
- **Contact** - Professional contact form
- **Stats** - Animated statistics

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with one click

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

## 🎯 Performance Optimizations

- **Code splitting** with React.lazy()
- **Image optimization** with Vite
- **Tree shaking** for unused code
- **Lazy loading** for components
- **Optimized animations** with GSAP

## 🔧 Development Tips

### Adding New Sections

1. Create component in `src/components/sections/`
2. Add to `src/App.tsx`
3. Update navigation if needed

### Custom Animations

- Use GSAP for complex animations
- Framer Motion for component animations
- Three.js for 3D effects

### Styling Guidelines

- Use Tailwind utility classes
- Follow the glass morphism design pattern
- Maintain consistent spacing with `section-padding`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **GSAP** for powerful animations
- **Three.js** for 3D graphics
- **Framer Motion** for React animations
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons

---

Built with ❤️ using modern web technologies. Perfect for developers, designers, and creative professionals looking to showcase their work with style and sophistication.
