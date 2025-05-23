
const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Tech University',
      period: '2017 - 2019',
      description: 'Specialized in Distributed Systems and Cloud Computing',
      courses: ['Cloud Architecture', 'System Design', 'Network Security', 'Database Systems'],
    },
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'Engineering College',
      period: '2013 - 2017',
      description: 'Focus on Software Engineering and System Administration',
      courses: ['Operating Systems', 'Computer Networks', 'Software Engineering', 'Data Structures'],
    },
  ];

  const certifications = [
    { name: 'AWS Certified DevOps Engineer Professional', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'Cloud Native Computing Foundation', year: '2022' },
    { name: 'HashiCorp Certified: Terraform Associate', issuer: 'HashiCorp', year: '2022' },
    { name: 'Docker Certified Associate', issuer: 'Docker Inc.', year: '2021' },
  ];

  return (
    <section id="education" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning through formal education and industry certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Academic Background</h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="mb-8 last:mb-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 glass-effect hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h4>
                <p className="text-blue-600 font-semibold mb-2">{edu.institution}</p>
                <p className="text-gray-500 mb-3">{edu.period}</p>
                <p className="text-gray-600 mb-4">{edu.description}</p>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Key Courses:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 glass-effect"
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{cert.name}</h4>
                  <p className="text-blue-600 font-semibold">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mt-1">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
