import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Server, Smartphone, Palette, Settings, Zap } from 'lucide-react';
import { Card } from '../ui/Card';
import { skills, tools, skillCategories } from '../../data/skills';
import { soundManager } from '../../utils/soundEffects';

const categoryIcons = {
  Frontend: Code,
  Backend: Server,
  Database: Database,
  DevOps: Settings,
  Mobile: Smartphone,
  Design: Palette,
  Other: Code
};

const SkillBar: React.FC<{ skill: typeof skills[0]; delay: number }> = ({ skill, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="mb-6 group"
      onMouseEnter={() => {
        setIsHovered(true);
        soundManager.playHoverSound();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-3">
          <motion.div 
            className="flex items-center justify-center w-8 h-8"
            animate={{ 
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 360 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {skill.logo ? (
              <img 
                src={skill.logo} 
                alt={`${skill.name} logo`}
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  // Fallback to emoji if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
            ) : null}
            <span 
              className={`text-2xl ${skill.logo ? 'hidden' : 'block'}`}
              style={{ display: skill.logo ? 'none' : 'block' }}
            >
              {skill.icon}
            </span>
          </motion.div>
          <div>
            <h4 className="text-white font-medium">{skill.name}</h4>
            <p className="text-gray-400 text-sm">{skill.yearsOfExperience} years experience</p>
          </div>
        </div>
        <motion.span 
          className="text-primary-400 font-semibold"
          animate={{ scale: isHovered ? 1.1 : 1 }}
        >
          {skill.proficiency}%
        </motion.span>
      </div>
      <div className="w-full bg-dark-700 rounded-full h-3 relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
          className="h-3 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: isHovered ? "100%" : "-100%" }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </div>
      <motion.p 
        className="text-gray-400 text-sm mt-2"
        animate={{ opacity: isHovered ? 1 : 0.7 }}
      >
        {skill.description}
      </motion.p>
    </motion.div>
  );
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const handleCategoryChange = (category: string) => {
    soundManager.playClickSound();
    setActiveCategory(category);
  };

  return (
    <section id="skills" className="section-padding bg-dark-800/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-6"
          >
            <Zap className="text-6xl text-primary-400 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Zap className="mr-3 text-primary-400" />
                  {activeCategory === 'All' ? 'All Skills' : `${activeCategory} Skills`}
                </h3>
                <div className="space-y-6">
                  {filteredSkills.map((skill, index) => (
                    <SkillBar key={skill.id} skill={skill} delay={index * 0.1} />
                  ))}
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Skills by Category Overview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <h3 className="text-2xl font-bold text-white mb-6">Skills Overview</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
                  const Icon = categoryIcons[category as keyof typeof categoryIcons];
                  const avgProficiency = Math.round(
                    categorySkills.reduce((sum, skill) => sum + skill.proficiency, 0) / categorySkills.length
                  );
                  
                  return (
                    <motion.div
                      key={category}
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 glass rounded-lg cursor-pointer group"
                      onClick={() => handleCategoryChange(category)}
                      onMouseEnter={() => soundManager.playHoverSound()}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Icon size={24} className="text-primary-400" />
                        </motion.div>
                        <div>
                          <h4 className="text-white font-medium">{category}</h4>
                          <p className="text-gray-400 text-sm">{categorySkills.length} skills</p>
                        </div>
                      </div>
                      <div className="w-full bg-dark-700 rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-purple-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${avgProficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                      <p className="text-primary-400 text-sm mt-2 font-medium">{avgProficiency}% avg</p>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  transition: { type: "spring", stiffness: 400 }
                }}
                onMouseEnter={() => soundManager.playHoverSound()}
                className="glass p-4 rounded-lg text-center group cursor-pointer relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-purple-500/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <motion.div 
                    className="flex items-center justify-center mb-2"
                    animate={{ 
                      y: [0, -5, 0],
                      transition: { duration: 2, repeat: Infinity, delay: index * 0.2 }
                    }}
                  >
                    {tool.logo ? (
                      <img 
                        src={tool.logo} 
                        alt={`${tool.name} logo`}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          // Fallback to emoji if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'block';
                        }}
                      />
                    ) : null}
                    <span 
                      className={`text-2xl ${tool.logo ? 'hidden' : 'block'}`}
                      style={{ display: tool.logo ? 'none' : 'block' }}
                    >
                      {tool.icon}
                    </span>
                  </motion.div>
                  <h4 className="text-white font-medium text-sm">{tool.name}</h4>
                  <p className="text-gray-400 text-xs mt-1">{tool.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};