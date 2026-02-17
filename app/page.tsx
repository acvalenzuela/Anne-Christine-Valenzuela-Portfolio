import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to My Portfolio</h1>
            <p>Building digital experiences inspired by the aquamarine shores of the Philippines</p>
            <Link href="/projects" className="cta-button">
              View My Work
            </Link>
          </div>
        </section>

        <section>
          <h2 className="section-title">About Me</h2>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
              I'm a career changer passionate about creating meaningful connections and experiences 
              through digital technology. Inspired by the crystal-clear aquamarine waters and vibrant 
              culture of the Philippines, I bring that same warmth, attention to detail, and commitment 
              to excellence to every project I work on. My journey from education and customer service 
              to technology has taught me the value of empathy, clear communication, and user-centered 
              design—principles that guide everything I create.
            </p>
            <Link href="/about" className="cta-button" style={{ marginTop: '2rem', display: 'inline-block' }}>
              Learn More About Me
            </Link>
          </div>
        </section>

        <section style={{ background: 'rgba(127, 255, 212, 0.1)', borderRadius: '20px', margin: '2rem auto' }}>
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>FridgeMate App</h3>
              <p>A low-code mobile application designed in Figma focused on food and household management. The app helps users track items in their fridge, reduce food waste, and manage household inventory efficiently.</p>
              <div className="project-tags">
                <span className="tag">Figma</span>
                <span className="tag">Mobile App</span>
                <span className="tag">Low-Code</span>
                <span className="tag">UX Design</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Service Design for Laurea JobFest</h3>
              <p>A team project completed in school to improve and redesign the concept of the Laurea JobFest to best serve students' needs. The project focused on enhancing communication, marketing, and overall user experience of the career event.</p>
              <div className="project-tags">
                <span className="tag">Service Design</span>
                <span className="tag">UX Research</span>
                <span className="tag">Team Project</span>
                <span className="tag">Event Design</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Power BI Reports</h3>
              <p>Data visualization and reporting projects created using Power BI to transform raw data into meaningful insights and interactive dashboards.</p>
              <div className="project-tags">
                <span className="tag">Power BI</span>
                <span className="tag">Data Visualization</span>
                <span className="tag">Reporting</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/projects" className="cta-button">
              See All Projects
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
