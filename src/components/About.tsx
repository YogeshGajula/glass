
const About = () => {
  const skills = [
    { category: 'Cloud Platforms', items: ['AWS', 'Azure', 'GCP', 'DigitalOcean'] },
    { category: 'DevOps Tools', items: ['Docker', 'Kubernetes', 'Terraform', 'Ansible'] },
    { category: 'CI/CD', items: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps'] },
    { category: 'Monitoring', items: ['Prometheus', 'Grafana', 'ELK Stack', 'Nagios'] },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate DevOps Engineer with expertise in building scalable, reliable, and secure infrastructure solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">My Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              With over 5 years of experience in DevOps and cloud infrastructure, I specialize in automating deployment processes, 
              managing containerized applications, and implementing robust monitoring solutions. My passion lies in bridging the gap 
              between development and operations teams to deliver high-quality software efficiently.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I believe in the power of automation, infrastructure as code, and continuous improvement. Every challenge is an 
              opportunity to learn and grow, and I'm always excited to tackle complex problems with innovative solutions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 glass-effect">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Core Values</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Automation-first approach</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Security and compliance focus</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Continuous learning mindset</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Collaborative team player</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 glass-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-4">{skill.category}</h4>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600 text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
