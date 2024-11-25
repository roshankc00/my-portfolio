import React from 'react';
import { 
  SiNestjs, 
  SiPrisma, 
  SiJest, 
  SiGithub, 
  SiGraphql, 
  SiGithubactions,
  SiRedis,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiMapbox,
  SiSocketdotio,
  SiTypescript
} from 'react-icons/si';
import { FaMicrochip, FaStore, FaGraduationCap, FaVideo, FaCreditCard, FaBook, FaUserShield, FaChalkboardTeacher, FaUniversity, FaAws, FaNetworkWired, FaCloud, FaDatabase, FaServer, FaTools, FaShieldAlt, FaTable, FaExternalLinkAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Backend {
  aws: string[];
  cache: string[];
  api: string[];
  database: string[];
  entities: string[];
  security: string[];
}

interface Management {
  courses: string[];
  rbac: string[];
  instructor: string[];
  institute: string[];
}

interface Project {
  title: string;
  description: string;
  technologies: Array<{
    name: string;
    icon: JSX.Element;
  }>;
  features: string[];
  githubLink?: string;
  components?: string[];
  highlights?: string[];
  management?: Management;
  backend?: Backend;
  website?: string;
  image?: string;
}

const Projects: React.FC = () => {
  const renderManagementSection = (management: Management) => {
    return (
      <div className="mb-8">
        <h4 className="font-semibold text-xl mb-6 text-gray-900">Management Systems</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h5 className="font-semibold text-lg mb-3 text-blue-600 flex items-center gap-2">
              <FaBook className="text-blue-500" /> Course Management
            </h5>
            <ul className="space-y-2">
              {management.courses.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h5 className="font-semibold text-lg mb-3 text-purple-600 flex items-center gap-2">
              <FaUserShield className="text-purple-500" /> Access Control
            </h5>
            <ul className="space-y-2">
              {management.rbac.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h5 className="font-semibold text-lg mb-3 text-green-600 flex items-center gap-2">
              <FaChalkboardTeacher className="text-green-500" /> Instructor Portal
            </h5>
            <ul className="space-y-2">
              {management.instructor.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h5 className="font-semibold text-lg mb-3 text-orange-600 flex items-center gap-2">
              <FaUniversity className="text-orange-500" /> Institute Management
            </h5>
            <ul className="space-y-2">
              {management.institute.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const renderBackendSection = (backend: Backend) => {
    return (
      <div className="mb-8">
        <h4 className="font-semibold text-xl mb-6 text-gray-900">Backend Infrastructure</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h5 className="font-semibold text-lg mb-3 text-blue-600 flex items-center gap-2">
              <FaDatabase className="text-blue-500" /> Database Architecture
            </h5>
            <ul className="space-y-2">
              {backend.database.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h5 className="font-semibold text-lg mb-3 text-purple-600 flex items-center gap-2">
              <FaTable className="text-purple-500" /> Entity Management
            </h5>
            <ul className="space-y-2">
              {backend.entities.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h5 className="font-semibold text-lg mb-3 text-orange-600 flex items-center gap-2">
              <FaCloud className="text-orange-500" /> AWS Services
            </h5>
            <ul className="space-y-2">
              {backend.aws.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h5 className="font-semibold text-lg mb-3 text-red-600 flex items-center gap-2">
              <FaDatabase className="text-red-500" /> Caching System
            </h5>
            <ul className="space-y-2">
              {backend.cache.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h5 className="font-semibold text-lg mb-3 text-green-600 flex items-center gap-2">
              <FaServer className="text-green-500" /> API Architecture
            </h5>
            <ul className="space-y-2">
              {backend.api.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h5 className="font-semibold text-lg mb-3 text-gray-600 flex items-center gap-2">
              <FaShieldAlt className="text-gray-500" /> Security
            </h5>
            <ul className="space-y-2">
              {backend.security.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const projects: Project[] = [
    {
      title: "FiveOne Dating App",
      description: "A unique dating app that matches five male users with one female user in real-time chat rooms, featuring advanced matchmaking algorithms and WebSocket-based communication.",
      image: "/projects/fiveone.png", 
      website: "https://fiveone.app/",
      technologies: [
        { name: "NestJS", icon: <SiNestjs className="text-red-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "WebSocket", icon: <SiSocketdotio className="text-blue-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
        { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      ],
      features: [
        "Real-time matchmaking system connecting 5 male users with 1 female user",
        "Advanced WebSocket architecture for instant messaging and live updates",
        "Role-based chat room management with special privileges for female users",
        "Efficient MongoDB database design for user profiles and chat history",
        "Redis-based caching for optimized performance",
        "Scalable backend supporting thousands of concurrent users"
      ]
    },
    {
      title: 'Digital Class LMS Platform',
      description: 'A comprehensive Learning Management System similar to Udemy, built with NestJS and AWS services. Features include course management, video streaming, and real-time notifications.',
      technologies: [
        { name: 'NestJS', icon: <SiNestjs className="text-red-600" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
        { name: 'Redis', icon: <SiRedis className="text-red-500" /> },
        { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
        { name: 'TypeORM', icon: <FaDatabase className="text-blue-500" /> }
      ],
      features: [
        'Course creation and management',
        'Video content streaming',
        'Payment processing integration',
        'User authentication & roles',
        'Progress tracking system',
        'Real-time notifications',
        'Search and filtering',
        'Rating and review system'
      ],
      highlights: [
        'Deployed on AWS using ECR/ECS',
        'Message queuing with SQS & BullMQ',
        'Real-time updates with Pub/Sub',
        'Scalable video streaming',
        'Advanced caching with Redis',
        'Complex database schema with TypeORM',
        'Load balanced with EC2'
      ],
      website: 'https://edigitalclass.com/'
    },
    {
      title: 'Laliguras Hiking Platform',
      description: 'A comprehensive hiking platform where users can book tour guides, lodges, and explore hiking locations through interactive maps.',
      technologies: [
        { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
        { name: 'Express.js', icon: <SiExpress className="text-white" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        { name: 'Mapbox', icon: <SiMapbox className="text-blue-400" /> }
      ],
      features: [
        'Interactive map visualization',
        'Tour guide booking system',
        'Lodge reservation',
        'Real-time availability tracking',
        'User reviews and ratings',
        'Detailed hiking trail information',
        'Weather updates integration',
        'Secure payment processing'
      ],
      highlights: [
        'Implemented interactive maps with Mapbox',
        'Built booking management system',
        'Designed responsive UI with Next.js',
        'Created RESTful API with Express',
        'Integrated secure payment gateway',
        'Implemented user authentication',
        'Optimized for mobile devices'
      ],
      website: 'https://www.laliguras.de/'
    },
    {
      title: 'Chatter App Backend',
      description: 'A real-time chat and video call application backend built with NestJS, featuring WebSocket communication, video call functionality, and message queuing.',
      technologies: [
        { name: 'NestJS', icon: <SiNestjs className="text-red-600" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
        { name: 'Redis', icon: <SiRedis className="text-red-500" /> },
        { name: 'WebSocket', icon: <FaNetworkWired className="text-green-500" /> },
        { name: 'BullMQ', icon: <FaServer className="text-yellow-500" /> }
      ],
      features: [
        'Real-time chat with WebSocket',
        'Video call integration',
        'Message queuing with BullMQ',
        'User presence tracking',
        'Message persistence',
        'File sharing capabilities',
        'User authentication & authorization',
        'Real-time notifications'
      ],
      highlights: [
        'Implemented WebSocket for real-time messaging',
        'Integrated video call functionality',
        'Built message queuing system with BullMQ',
        'Designed efficient database schema',
        'Implemented Redis for caching and real-time features',
        'Created robust user authentication system',
        'Optimized performance with caching strategies'
      ],
      githubLink: 'https://github.com/roshankc00/Chatter-app-backend'
    },
    {
      title: 'Food Delivery System Microservice',
      description: 'A comprehensive food delivery system built with microservices architecture using TCP communication between components.',
      technologies: [
        { name: 'NestJS', icon: <SiNestjs className="text-red-600" /> },
        { name: 'Prisma', icon: <SiPrisma className="text-blue-600" /> },
        { name: 'Jest', icon: <SiJest className="text-red-700" /> },
      ],
      features: [
        'Authentication Service',
        'Notification System',
        'Food Management',
        'Order Processing',
        'Shopping Cart',
      ],
      components: [
        'Auth Service',
        'Notification Service',
        'Food Service',
        'Order Service',
        'Cart Service'
      ],
      githubLink: 'https://github.com/roshankc00/Food_delivery_syste'
    },
    {
      title: 'Mero Bazar - E-commerce CMS',
      description: 'A sophisticated multi-vendor e-commerce CMS platform built with modern technologies. Features comprehensive product management, user tracking, and sales analytics.',
      technologies: [
        { name: 'NestJS', icon: <SiNestjs className="text-red-600" /> },
        { name: 'GraphQL', icon: <SiGraphql className="text-pink-600" /> },
        { name: 'Prisma', icon: <SiPrisma className="text-blue-600" /> },
      ],
      features: [
        'Multi-vendor Support',
        'User Authentication & Authorization',
        'Product Management System',
        'Shopping Cart & Wishlist',
        'Order Tracking System',
        'Sales Analytics Dashboard',
        'User Activity Tracking',
        'Store Management',
        'GraphQL API Integration'
      ],
      githubLink: 'https://github.com/roshankc00/Mero-Baza'
    }
  ];

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-300">Showcasing my backend development expertise</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 200}
              className="bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <div className="flex gap-2">
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <SiGithub className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-3 mb-4">
                {project.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center bg-gray-700 px-3 py-1 rounded-full"
                  >
                    <span className="mr-2">{tech.icon}</span>
                    <span className="text-gray-300 text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
