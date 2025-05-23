
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Kubernetes Cluster Automation',
      description: 'Complete automation solution for deploying and managing production-ready Kubernetes clusters with monitoring, logging, and security configurations.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop',
      technologies: ['Kubernetes', 'Terraform', 'Helm', 'Prometheus', 'Grafana'],
      github: '#',
      live: '#',
    },
    {
      title: 'CI/CD Pipeline Template',
      description: 'Reusable GitLab CI/CD pipeline templates for microservices deployment with automated testing, security scanning, and multi-environment deployment.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=300&fit=crop',
      technologies: ['GitLab CI', 'Docker', 'SonarQube', 'Trivy', 'AWS ECS'],
      github: '#',
      live: '#',
    },
    {
      title: 'Infrastructure as Code Framework',
      description: 'Modular Terraform framework for provisioning cloud infrastructure across multiple providers with best practices and security controls.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      technologies: ['Terraform', 'AWS', 'Azure', 'Terragrunt', 'Ansible'],
      github: '#',
      live: '#',
    },
    {
      title: 'Monitoring Stack Setup',
      description: 'Comprehensive monitoring and alerting solution using Prometheus, Grafana, and ELK stack with custom dashboards and alert rules.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      technologies: ['Prometheus', 'Grafana', 'Elasticsearch', 'Kibana', 'AlertManager'],
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing automation solutions and infrastructure projects that demonstrate DevOps best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 glass-effect"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
