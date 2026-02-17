import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Navigation />
      <main>
        <section className="hero" style={{ padding: '4rem 2rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Me</h1>
          <p style={{ fontSize: '1.3rem' }}>Get to know my journey and passion</p>
        </section>

        <section>
          <div className="about-content">
            <div>
              <div style={{ 
                width: '100%', 
                aspectRatio: '1', 
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                position: 'relative'
              }}>
                <Image
                  src="/images/profile.jpg"
                  alt="Profile photo"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                  priority
                />
              </div>
            </div>
            <div className="about-text">
              <h3>Hello! I'm a Career Changer</h3>
              <p>
                I'm a third-year Business Information Technology student, embarking on an exciting 
                career transition that brings together my diverse background in Early Childhood Education 
                and Customer Service with my passion for technology. Born and raised in the Philippines, 
                I've always been inspired by the natural beauty that surrounds us—from the crystal-clear 
                aquamarine waters to the vibrant culture that defines our identity.
              </p>
              <p>
                My journey into technology is unique—my experience in education taught me the importance 
                of clear communication and user-centered design, while my customer service background 
                instilled in me a deep understanding of user needs and problem-solving. These skills, 
                combined with my technical studies, allow me to approach development with empathy, 
                creativity, and a focus on creating solutions that truly serve users.
              </p>
              <p>
                As I continue to grow in the tech field, I'm passionate about building modern, 
                responsive web applications that not only look beautiful but also provide exceptional 
                user experiences. My diverse background gives me a unique perspective on how technology 
                can bridge gaps and create meaningful connections.
              </p>
              <p>
                When I'm not studying or vibe coding, you can find me exploring new technologies, working 
                on personal projects, or simply enjoying the beautiful beaches that the Philippines 
                has to offer—always finding inspiration in the world around me.
              </p>
              <h3 style={{ marginTop: '2rem' }}>Skills & Technologies</h3>
              <p style={{ fontStyle: 'italic', color: 'var(--text-light)', marginBottom: '1rem' }}>
                While my technical skills are still developing, I'm incredibly eager to learn and grow. 
                I'm actively building my foundation and excited to expand my knowledge in web development 
                and technology.
              </p>
              <div className="project-tags" style={{ marginTop: '1rem' }}>
                <span className="tag">Figma</span>
                <span className="tag">Canva</span>
                <span className="tag">Power BI</span>
                <span className="tag">GitHub</span>
                <span className="tag">MySQL</span>
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
