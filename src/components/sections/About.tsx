import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';
import { Card } from '../ui/Card';
import { personalInfo } from '../../data/personal';
import { education } from '../../data/education';
import { experience } from '../../data/experience';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
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
                <Card key={edu.id} className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Award size={24} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {edu.degree} in {edu.field}
                      </h4>
                      <p className="text-primary-400 font-medium mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center text-gray-400 text-sm mb-3">
                        <Calendar size={16} className="mr-2" />
                        {edu.startDate} - {edu.endDate}
                        <MapPin size={16} className="ml-4 mr-2" />
                        {edu.location}
                      </div>
                      {edu.gpa && (
                        <p className="text-sm text-gray-300 mb-3">GPA: {edu.gpa}</p>
                      )}
                      <p className="text-gray-300 text-sm mb-3">{edu.description}</p>
                      <div className="space-y-1">
                        {edu.achievements.slice(0, 3).map((achievement, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
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
                <Card key={exp.id} className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Briefcase size={24} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {exp.position}
                      </h4>
                      <p className="text-primary-400 font-medium mb-2">
                        {exp.company}
                      </p>
                      <div className="flex items-center text-gray-400 text-sm mb-3">
                        <Calendar size={16} className="mr-2" />
                        {exp.startDate} - {exp.endDate}
                        <MapPin size={16} className="ml-4 mr-2" />
                        {exp.location}
                        <span className="ml-4 px-2 py-1 bg-primary-500/20 text-primary-400 rounded text-xs">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{exp.description}</p>
                      <div className="space-y-1 mb-3">
                        {exp.achievements.slice(0, 3).map((achievement, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-dark-700 text-gray-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {exp.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-dark-700 text-gray-400 rounded text-xs">
                            +{exp.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};