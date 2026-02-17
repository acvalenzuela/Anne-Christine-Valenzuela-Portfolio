import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const projects = [
  {
    title: 'FridgeMate App',
    description: 'A low-code mobile application designed in Figma focused on food and household management. The app helps users track items in their fridge, reduce food waste, and manage household inventory efficiently.',
    tags: ['Figma', 'Mobile App', 'Low-Code', 'UX Design'],
  },
  {
    title: 'My Spot Mobile App',
    description: 'A collaborative team project where I developed login and signup pages using Firebase Authentication. This project taught me valuable lessons about Git workflow, branch merging, and team collaboration. I worked alongside teammates to implement input validation, error handling, and successfully deployed the app to Netlify.',
    tags: ['Firebase', 'Authentication', 'Git', 'Netlify', 'Team Collaboration'],
  },
  {
    title: 'Power BI Reports',
    description: 'Data visualization and reporting projects created using Power BI to transform raw data into meaningful insights and interactive dashboards.',
    tags: ['Power BI', 'Data Visualization', 'Reporting'],
  },
  {
    title: 'Service Design Portfolio',
    description: 'A team project completed in school to improve and redesign the concept of the Laurea JobFest to best serve students\' needs. The project focused on enhancing communication, marketing, and overall user experience of the career event.',
    tags: ['Service Design', 'UX Research', 'Team Project', 'Event Design'],
  },
];

export default function Projects() {
  return (
    <>
      <Navigation />
      <main>
        <section className="hero" style={{ padding: '4rem 2rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>My Projects</h1>
          <p style={{ fontSize: '1.3rem' }}>A collection of my work and creations</p>
        </section>

        <section>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
