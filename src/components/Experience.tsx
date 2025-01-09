import React from "react";
import {
  FaBriefcase,
  FaCalendar,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const experiences = [
  {
    company: "Freelancer",
    location: "Kathmandu",
    position: "Full Stack Developer",
    period: "DEC, 2023 - Present",
    achievements: [
      "Built full stack Coupon store with modern tech stack",
      "Designed scalable PostgreSQL schema for efficient data retrieval and relationships",
      "Implemented advanced queries, improving filtering, sorting, and performance",
      "Deployed on Azure, ensuring scalability, high availability, and seamless integration",
      "Developed Jest test cases for code reliability, reducing production bugs",
      "Optimized frontend-backend communication with React Query for real-time updates and caching",
      "Built Learning Management System with comprehensive features",
      "Developed backend APIs with NestJS, single-handedly designing and documenting them",
      "Implemented custom streaming platform using AWS services for scalability",
      "Collaborated with mobile and frontend teams, ensuring seamless integration",
      "Deployed scalable WebSocket servers with AWS EC2 machine and GitHub Actions",
      "Integrated eSewa payment gateway for secure transactions",
    ],
    technologies: [
      "Next.js",
      "React",
      "NestJS",
      "PostgreSQL",
      "AWS",
      "Azure",
      "Jest",
    ],
  },
  {
    company: "FiveOne",
    location: "Kathmandu",
    position: "Backend Developer",
    period: "Aug, 2024 - Jan 2025",
    website: "https://fiveone.app/",
    achievements: [
      "Developed a matchmaking backend using NestJS and MongoDB to handle real-time user grouping, pairing, and chat management for a dating app",
      "Implemented dynamic group logic, managing chat rooms with five male users and one female, including features for user participation, kicking, and re-matching",
      "Built advanced pairing algorithms, ensuring one male and one female are matched from groups based on predefined rules and fallback mechanisms",
      "Designed and optimized WebSocket architecture using Socket.IO for real-time updates, ensuring seamless user interactions with low latency",
      "Implemented role-based user actions, enabling females to kick participants and trigger real-time group reshuffling and matchmaking events",
      "Integrated chat persistence with MongoDB, storing message history and chat metadata for post-session analysis and continuity",
      "Optimized database queries and WebSocket events to support thousands of simultaneous users, achieving high scalability and responsiveness",
    ],
    technologies: ["NestJS", "MongoDB", "WebSocket", "Socket.IO", "TypeScript"],
  },
  {
    company: "Saral-Lagani",
    location: "Kathmandu",
    position: "MERN Dev",
    period: "Nov, 2023 - Apr, 2024",
    website: "https://www.sarallagani.com/",
    achievements: [
      "Worked on different features of the stock management system",
      "Developed broker analytics website with Next.js",
      "Built cross-platform mobile application using React Native",
      "Implemented server-side functionality using Express.js",
      "Successfully migrated 70% of codebase from React.js to Next.js 14",
      "Developed promo-code influencer tracking system",
    ],
    technologies: ["Next.js", "React", "React Native", "Express.js", "SQL"],
  },

  {
    company: "Webx-Nepal",
    location: "Kathmandu",
    position: "Backend Intern",
    period: "Aug, 2023 - Nov, 2023",
    website: "https://webxnep.com/",
    achievements: [
      "Learned industry best practices and system architecture principles",
      "Worked with Express.js server development and implementation",
      "Gained hands-on experience with VPS deployment using Docker containers",
      "Mastered advanced MongoDB Aggregation pipelines",
      "Collaborated with senior developers on real-world projects",
      "Implemented data validation using Zod",
      "Worked with Redis for caching and performance optimization",
    ],
    technologies: [
      "Express.js",
      "TypeScript",
      "Redis",
      "MongoDB",
      "Zod",
      "Docker",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400">Building scalable solutions</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 200}
              className="bg-gray-900 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.position}
                  </h3>
                  <div className="flex items-center text-gray-400 mb-2">
                    <FaBriefcase className="mr-2" />
                    <span className="text-lg">{exp.company}</span>
                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="space-y-2 md:text-right mt-4 md:mt-0">
                  <div className="flex items-center text-gray-400">
                    <FaCalendar className="mr-2 md:order-1 md:ml-2 md:mr-0" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <FaMapMarkerAlt className="mr-2 md:order-1 md:ml-2 md:mr-0" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-3 text-gray-400">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
