
const Experience = () => {
  const experiences = [
    {
      title: 'Senior DevOps Engineer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Leading DevOps initiatives for cloud-native applications, implementing GitOps workflows, and managing Kubernetes clusters at scale.',
      achievements: [
        'Reduced deployment time by 75% through automated CI/CD pipelines',
        'Implemented monitoring solutions resulting in 99.9% uptime',
        'Led migration to microservices architecture on AWS',
      ],
    },
    {
      title: 'DevOps Engineer',
      company: 'CloudTech Inc.',
      period: '2020 - 2022',
      description: 'Designed and maintained infrastructure for multi-tenant SaaS applications, focusing on security and scalability.',
      achievements: [
        'Automated infrastructure provisioning using Terraform',
        'Implemented comprehensive backup and disaster recovery solutions',
        'Reduced infrastructure costs by 40% through optimization',
      ],
    },
    {
      title: 'System Administrator',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      description: 'Managed Linux servers and network infrastructure, introduced containerization and configuration management.',
      achievements: [
        'Migrated legacy applications to containerized environment',
        'Implemented centralized logging and monitoring systems',
        'Established security best practices and compliance procedures',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building robust infrastructure and streamlining operations across various organizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-32 bg-gradient-to-b from-blue-400 to-blue-200"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              
              {/* Content */}
              <div className="ml-16 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 glass-effect">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 font-medium mt-2 md:mt-0">{exp.period}</span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
