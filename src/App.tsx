import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, ChevronRight, Database, Brain, LineChart, BookOpen, Code2, FileSpreadsheet } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const skills = [
    { name: 'Python', icon: Code2, level: 90 },
    { name: 'SQL', icon: Database, level: 85 },
    { name: 'Machine Learning', icon: Brain, level: 90 },
    { name: 'Power BI', icon: LineChart, level: 85 },
    { name: 'Java', icon: Code2, level: 75 },
    { name: 'Excel', icon: FileSpreadsheet, level: 90 },
  ];

  const projects = [
    {
      title: 'Inventory Optimization',
      description: 'Developed a data-driven inventory management system using EDA, strategic analysis (ABC, HML), and ML models to predict stockouts. Implemented Linear Regression, Decision Tree, Random Forest, and XGBoost for forecasting. Used K-Means Clustering to group products and optimize stock levels. Provided insights for demand forecasting and procurement planning.',
      tech: ['Python', 'Machine Learning', 'Power BI', 'SQL'],
      link: 'https://github.com/lukman-17/Inventory-Analysis'
    },
    {
      title: 'Next Word Predictor',
      description: 'Next Word Predictor is an NLP model using TensorFlow, PyTorch, and GPT-2 for intelligent next-word prediction. A real-time Streamlit UI enables users to input text and receive accurate word suggestions, enhancing writing assistance, auto-completion, and language modeling applications efficiently.',
      tech: ['Python', 'TensorFlow', 'PyTorch', 'NLP','GPT-2'],
      link: 'https://github.com/lukman-17/Inventory-Analysis'
    },
    {
      title: 'Stock Analysis & Prediction',
      description: 'Fetched stock data using yfinance and performed EDA to analyze price variations. Applied time series models like SARIMA and LSTM to predict future stock prices. Evaluated model performance using RMSE and R-squared values. Provided insights into stock trends to support better investment decisions.',
      tech: ['Python', 'LSTM', 'Deep Learning', 'Data Visualization'],
      link: 'https://github.com/lukman-17/Inventory-Analysis'
    },
];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-800 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Lukman Qureshi</h1>
            <div className="flex space-x-6">
              <a href="#about" onClick={() => setActiveSection('about')} className={`hover:text-blue-400 transition ${activeSection === 'about' ? 'text-blue-400' : ''}`}>About</a>
              <a href="#experience" onClick={() => setActiveSection('experience')} className={`hover:text-blue-400 transition ${activeSection === 'experience' ? 'text-blue-400' : ''}`}>Experience</a>
              <a href="#projects" onClick={() => setActiveSection('projects')} className={`hover:text-blue-400 transition ${activeSection === 'projects' ? 'text-blue-400' : ''}`}>Projects</a>
              <a href="#skills" onClick={() => setActiveSection('skills')} className={`hover:text-blue-400 transition ${activeSection === 'skills' ? 'text-blue-400' : ''}`}>Skills</a>
              <a href="#contact" onClick={() => setActiveSection('contact')} className={`hover:text-blue-400 transition ${activeSection === 'contact' ? 'text-blue-400' : ''}`}>Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Data Analyst</h2>
                <p className="text-xl text-gray-300 mb-8">
                A data-driven professional with expertise in SQL, Power BI, and Machine Learning, leveraging AI techniques to extract insights, build predictive models, and enhance business intelligence. Skilled in data visualization, statistical analysis, and machine learning algorithms to optimize decision-making and improve operational efficiency. Experienced in transforming raw data into meaningful insights and deploying ML models to enhance business analytics.
                </p>
                <div className="flex space-x-4 mb-8">
                  <a href="https://github.com/lukman-17" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition">
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com/in/lukman-qureshi-6a276219b" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:QLUKMAN17@GMAIL.COM" className="text-gray-300 hover:text-blue-400 transition">
                    <Mail size={24} />
                  </a>
                </div>
                <button>
                    <a 
                      href="/Lukman Resume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition"
                    >
                      <Download size={20} />
                      <span>View Resume</span>
                    </a>
                </button>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Data Analysis"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">Experience</h2>
            <div className="space-y-8">
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Data Analyst</h3>
                <p className="text-gray-300 mb-2">TopNotch Technology, &nbsp;&nbsp;&nbsp; July 2024 - Present</p>
                <p className="text-gray-400">
    <ul>
        <li>Conducted data preparation, cleaning, and preprocessing for analytical projects.</li>
        <li>Performed exploratory data analysis (EDA) to uncover trends and insights.</li>
        <li>Built and optimized machine learning models to enhance data-driven decision-making.</li>
        <li>Developed interactive dashboards using Power BI for real-time data visualization.</li>
        <li>Utilized Python, SQL, and visualization libraries (Matplotlib, Seaborn) for analysis and reporting.</li>
    </ul>
</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Software Trainee</h3>
                <p className="text-gray-300 mb-2">UpRevol Technologies, &nbsp;&nbsp;&nbsp;Aug 2023 - Jan 2024</p>
                <p className="text-gray-400">
    <ul>
        <li>Developed and optimized web applications, gaining hands-on experience in software development.</li>
        <li>Worked on data-driven applications, integrating Python, SQL, and Power BI for business insights.</li>
        <li>Created interactive dashboards to improve business intelligence reporting.</li>
        <li>Assisted in full-stack development tasks, contributing to the design and functionality of applications.</li>
        <li>Strengthened knowledge of software development practices, debugging, and system optimization.</li>
    </ul>
</p>

              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition duration-300">
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-600 text-sm px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">Skills & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-6 h-6 mr-2 text-blue-400" />
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-blue-400 rounded-full h-2"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-300">
                  <ChevronRight className="w-5 h-5 text-blue-400" />
                  <span>Power BI Certification by PWC</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <ChevronRight className="w-5 h-5 text-blue-400" />
                  <span>HackerRank SQL Intermediate Certificate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">Contact Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Education</h3>
                    <p className="text-gray-300">B.Tech in CS-AI</p>
                    <p className="text-gray-400">Rajasthan Technical University, India</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Connect</h3>
                    <div className="space-y-3">
                      <a
                        href="mailto:QLUKMAN17@GMAIL.COM"
                        className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition"
                      >
                        <Mail size={20} />
                        <span>qlukman17@gmail.com</span>
                      </a>
                      <a
                        href="https://github.com/lukman-17"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition"
                      >
                        <Github size={20} />
                        <span>github.com/lukman-17</span>
                      </a>
                      <a
                        href="https://linkedin.com/in/lukman-qureshi-6a276219b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition"
                      >
                        <Linkedin size={20} />
                        <span>LinkedIn Profile</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Lukman Qureshi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;