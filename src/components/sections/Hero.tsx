import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Volume2, VolumeX } from 'lucide-react';
import { gsap } from 'gsap';
import { Button } from '../ui/Button';
import { personalInfo } from '../../data/personal';
import { ThreeBackground } from '../effects/ThreeBackground';
import { soundManager } from '../../utils/soundEffects';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [isSoundEnabled, setIsSoundEnabled] = React.useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title letters with more dramatic effect
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current.children,
          { y: 100, opacity: 0, rotationX: -90 },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1.2,
            stagger: 0.08,
            ease: 'power3.out',
            delay: 0.5
          }
        );
      }

      // Animate subtitle with wave effect
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            delay: 1.5
          }
        );
      }

      // Enhanced floating animation
      gsap.to('.floating-element', {
        y: -30,
        rotation: 360,
        duration: 4,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.8
      });

      // Animate skills summary
      gsap.fromTo(
        '.skill-tag',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 2
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    soundManager.playClickSound();
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const newState = soundManager.toggleSound();
    setIsSoundEnabled(newState);
    soundManager.playClickSound();
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 3D Background */}
      <ThreeBackground />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-full blur-xl" />
        <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-primary-500/20 rounded-full blur-xl" />
        <div className="floating-element absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl" />
      </div>

      {/* Sound Toggle */}
      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5 }}
        onClick={toggleSound}
        className="absolute top-8 right-8 z-50 p-3 rounded-full glass hover:bg-white/10 transition-all duration-300"
      >
        {isSoundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </motion.button>

      <div className="container-custom section-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary-400 text-lg font-medium"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            {personalInfo.name.split('').map((letter, index) => (
              <span key={index} className="inline-block">
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>

          {/* Title */}
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl md:text-4xl font-semibold gradient-text"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            {personalInfo.subtitle}
          </p>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {personalInfo.skillsSummary.map((skill, index) => (
              <span
                key={index}
                className="skill-tag px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 hover:text-white transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4, type: 'spring' }}
            className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full"
          >
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">{personalInfo.availability.status}</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button
              size="lg"
              icon={<Mail size={20} />}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<Download size={20} />}
              onClick={() => window.open(personalInfo.resume, '_blank')}
            >
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};