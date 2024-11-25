import React from 'react';
import { 
  SiMongodb, 
  SiExpress, 
  SiNodedotjs, 
  SiNestjs,
  SiGraphql,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSocketdotio,
  SiPostgresql,
  SiMysql
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-700" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
    { name: 'NestJS', icon: <SiNestjs className="text-red-600" /> },
    { name: 'GraphQL', icon: <SiGraphql className="text-pink-600" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
    { name: 'React', icon: <SiReact className="text-blue-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
    { name: 'Socket.io', icon: <SiSocketdotio className="text-black" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12" data-aos="fade-up">
          Technologies I Work With
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
              className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <span className="text-gray-300 text-sm text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
