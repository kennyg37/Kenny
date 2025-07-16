import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Award, Briefcase, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { Card } from '../ui/Card';
import { personalInfo } from '../../data/personal';
import { education } from '../../data/education';
import { experience } from '../../data/experience';
import { soundManager } from '../../utils/soundEffects';

interface ExpandableCardProps {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies?: string[];
  type?: string;
  icon: React.ReactNode;
  color: string;
  index: number;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  subtitle,
  period,
  location,
  description,
  achievements,
  technologies,
  type,
  icon,
  color,
  index
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    soundManager.playClickSound();
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="relative overflow-hidden group cursor-pointer" onClick={handleToggle}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-purple-500/5"
          initial={{ x: "-100%" }}
          whileHover={{ x: "0%" }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="relative z-10">
          <div className="flex items-start space-x-4">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div 
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}
                style={{ background: color }}
              >
                {icon}
              </div>
            </motion.div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {title}
                  </h4>
                  <p className="text-primary-400 font-medium mb-2">
                    {subtitle}
                  </p>
                  <div className="flex items-center text-gray-400 text-sm mb-3 flex-wrap gap-2">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {location}
                    </div>
                    {type && (
                      <span className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded text-xs">
                        {type}
                      </span>
                    )}
                  </div>
                </div>
                
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </motion.div>
              </div>
              
              <motion.p 
                className="text-gray-300 text-sm mb-3"
                animate={{ opacity: isExpanded ? 1 : 0.8 }}
              >
                {description}
              </motion.p>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <div className="space-y-2">
                      <h5 className="text-sm font-medium text-white flex items-center">
                        <Star size={16} className="mr-2 text-primary-400" />
                        Key Achievements
                      </h5>
                      {achievements.map((achievement, i) => (
                        <motion.div 
                          key={i} 
                          className="flex items-center text-sm text-gray-400"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2" />
                          {achievement}
                        </motion.div>
                      ))}
                    </div>
                    
                    {technologies && technologies.length > 0 && (
                      <div>
                        <h5 className="text-sm font-medium text-white mb-2">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {technologies.map((tech, i) => (
                            <motion.span
                              key={tech}
                              className="px-2 py-1 bg-dark-700 text-gray-300 rounded text-xs hover:bg-primary-500/20 hover:text-primary-400 transition-colors"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
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
            <Award className="text-6xl text-primary-400 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {personalInfo.bio}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="mr-3 text-primary-400" size={28} />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <ExpandableCard
                  key={edu.id}
                  title={`${edu.degree} in ${edu.field}`}
                  subtitle={edu.institution}
                  period={`${edu.startDate} - ${edu.endDate}`}
                  location={edu.location}
                  description={edu.description}
                  achievements={edu.achievements}
                  icon={<Award size={24} className="text-white" />}
                  color="bg-gradient-to-r from-primary-500 to-purple-500"
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Briefcase className="mr-3 text-primary-400" size={28} />
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <ExpandableCard
                  key={exp.id}
                  title={exp.position}
                  subtitle={exp.company}
                  period={`${exp.startDate} - ${exp.endDate}`}
                  location={exp.location}
                  description={exp.description}
                  achievements={exp.achievements}
                  technologies={exp.technologies}
                  type={exp.type}
                  icon={<Briefcase size={24} className="text-white" />}
                  color="bg-gradient-to-r from-purple-500 to-pink-500"
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};