import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Award, Users, Clock, TrendingUp, Zap } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { projects, projectCategories, projectStatuses } from '../../data/projects';
import { soundManager } from '../../utils/soundEffects';

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  onViewDetails: (project: typeof projects[0]) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Planning':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => {
        setIsHovered(true);
        soundManager.playHoverSound();
      }}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <Card className="overflow-hidden h-full cursor-pointer relative">
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-lg mb-6">
          <motion.div
            className="w-full h-48 bg-gradient-to-br from-primary-500/20 to-purple-500/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {project.image ? (
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
            ) : null}
            <div className="w-full h-full flex items-center justify-center" style={{ display: project.image ? 'none' : 'flex' }}>
              <Zap className="text-6xl text-primary-400" />
            </div>
          </motion.div>
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-dark-700/80 text-gray-300 border border-gray-600/30">
              {project.year}
            </span>
          </div>

          {/* Overlay Actions */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4"
              >
                <Button
                  size="sm"
                  icon={<ExternalLink size={16} />}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (project.liveUrl) window.open(project.liveUrl, '_blank');
                  }}
                >
                  Live Demo
                </Button>
                {project.githubUrl && (
                  <Button
                    variant="secondary"
                    size="sm"
                    icon={<Github size={16} />}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, '_blank');
                    }}
                  >
                    Code
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

          {/* Project Meta */}
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <div className="flex items-center">
              <Users size={16} className="mr-1" />
              {project.teamSize || 'Solo'} devs
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              {project.duration}
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <motion.span
                key={tech}
                className="px-2 py-1 bg-primary-500/10 text-primary-400 border border-primary-500/20 rounded text-xs"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-dark-700 text-gray-400 rounded text-xs">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Impact */}
          <div className="flex items-center text-sm text-gray-400">
            <TrendingUp size={16} className="mr-2 text-primary-400" />
            <span className="line-clamp-2">{project.impact}</span>
          </div>

          {/* View Details Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="pt-2"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(project);
              }}
              className="w-full"
            >
              View Details
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

interface ProjectModalProps {
  project: typeof projects[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-dark-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                  <p className="text-gray-300">{project.longDescription}</p>
                </div>
                <Button variant="ghost" onClick={onClose} className="text-gray-400">
                  ×
                </Button>
              </div>

              {/* Project Image */}
              {project.image && (
                <div className="mb-6">
                  <img 
                    src={project.image} 
                    alt={`${project.title} screenshot`}
                    className="w-full h-64 object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* Project Details Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                    <div className="space-y-2">
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center text-gray-300"
                        >
                          <div className="w-2 h-2 bg-primary-400 rounded-full mr-3" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Challenges</h3>
                    <div className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center text-gray-300"
                        >
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                          {challenge}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Solutions</h3>
                    <div className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center text-gray-300"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                          {solution}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Project Info</h3>
                    <div className="space-y-3 text-gray-300">
                      <div className="flex justify-between">
                        <span>Role:</span>
                        <span className="text-white">{project.role}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Team Size:</span>
                        <span className="text-white">{project.teamSize || 'Solo'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="text-white">{project.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <span className="text-white">{project.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8 pt-6 border-t border-gray-700">
                {project.liveUrl && (
                  <Button
                    icon={<ExternalLink size={20} />}
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    View Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="secondary"
                    icon={<Github size={20} />}
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    View Code
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeStatus, setActiveStatus] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = projects.filter(project => {
    const categoryMatch = activeCategory === 'All' || project.category === activeCategory;
    const statusMatch = activeStatus === 'All' || project.status === activeStatus;
    return categoryMatch && statusMatch;
  });

  const handleCategoryChange = (category: string) => {
    soundManager.playClickSound();
    setActiveCategory(category);
  };

  const handleStatusChange = (status: string) => {
    soundManager.playClickSound();
    setActiveStatus(status);
  };

  const handleViewDetails = (project: typeof projects[0]) => {
    soundManager.playClickSound();
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
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
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent projects and the technologies I've worked with.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category, index) => (
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
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg'
                    : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex flex-wrap gap-2">
            {projectStatuses.map((status, index) => (
              <motion.button
                key={status}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + projectCategories.length) * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleStatusChange(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeStatus === status
                    ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg'
                    : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {status}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeStatus}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onViewDetails={handleViewDetails}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-lg">No projects found with the selected filters.</p>
          </motion.div>
        )}

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};