import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, Calendar, Award } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { projects, projectCategories } from '../../data/projects';

const ProjectCard: React.FC<{ project: typeof projects[0]; index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden group h-full">
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-lg mb-6">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.status === 'Completed' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : project.status === 'In Progress'
                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
            }`}>
              {project.status}
            </span>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <div className="bg-primary-500/20 text-primary-400 border border-primary-500/30 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                <Award size={12} className="mr-1" />
                Featured
              </div>
            </div>
          )}

          {/* Overlay Actions */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4"
              >
                {project.links.live && (
                  <Button
                    size="sm"
                    icon={<ExternalLink size={16} />}
                    onClick={() => window.open(project.links.live, '_blank')}
                  >
                    Live Demo
                  </Button>
                )}
                {project.links.github && (
                  <Button
                    variant="secondary"
                    size="sm"
                    icon={<Github size={16} />}
                    onClick={() => window.open(project.links.github, '_blank')}
                  >
                    Code
                  </Button>
                )}
                {project.links.demo && (
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<Play size={16} />}
                    onClick={() => window.open(project.links.demo, '_blank')}
                  >
                    Demo
                  </Button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Project Info */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
              {project.title}
            </h3>
            <span className="text-sm text-gray-400 bg-dark-700 px-2 py-1 rounded">
              {project.category}
            </span>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Date */}
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar size={16} className="mr-2" />
            {project.startDate} {project.endDate && `- ${project.endDate}`}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-primary-500/10 text-primary-400 border border-primary-500/20 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Achievements */}
          {project.achievements.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-300">Key Achievements:</h4>
              <div className="space-y-1">
                {project.achievements.slice(0, 2).map((achievement, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 flex-shrink-0" />
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent projects and the technologies I've worked with.
          </p>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="mr-3 text-primary-400" size={28} />
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectCategories.map((category) => (
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
              <span className="ml-2 text-sm opacity-70">
                ({category === 'All' ? projects.length : projects.filter(p => p.category === category).length})
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};