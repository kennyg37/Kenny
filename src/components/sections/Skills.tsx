import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Server, Smartphone, Palette, Settings } from 'lucide-react';
import { Card } from '../ui/Card';
import { skills, tools, skillCategories } from '../../data/skills';

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{skill.icon}</span>
          <div>
            <h4 className="text-white font-medium">{skill.name}</h4>
            <p className="text-gray-400 text-sm">{skill.yearsOfExperience} years experience</p>
          </div>
        </div>
        <span className="text-primary-400 font-semibold">{skill.proficiency}%</span>
      </div>
      <div className="w-full bg-dark-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-purple-500"
        />
      </div>
      <p className="text-gray-400 text-sm mt-2">{skill.description}</p>
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

  return (
    <section id="skills" className="section-padding bg-dark-800/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
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
          {skillCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
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
                <h3 className="text-2xl font-bold text-white mb-6">
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
                      whileHover={{ scale: 1.05 }}
                      className="p-4 glass rounded-lg cursor-pointer"
                      onClick={() => setActiveCategory(category)}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <Icon size={24} className="text-primary-400" />
                        <div>
                          <h4 className="text-white font-medium">{category}</h4>
                          <p className="text-gray-400 text-sm">{categorySkills.length} skills</p>
                        </div>
                      </div>
                      <div className="w-full bg-dark-700 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-purple-500"
                          style={{ width: `${avgProficiency}%` }}
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
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass p-4 rounded-lg text-center group cursor-pointer"
              >
                <div className="text-3xl mb-2 group-hover:animate-bounce">
                  {tool.icon}
                </div>
                <h4 className="text-white font-medium text-sm">{tool.name}</h4>
                <p className="text-gray-400 text-xs mt-1">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};