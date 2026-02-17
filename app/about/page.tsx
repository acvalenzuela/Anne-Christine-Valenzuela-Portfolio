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
              <h3>Hello!</h3>
              <p>
                I'm a third-year Business Information Technology student making an exciting career transition 
                from Early Childhood Education and Customer Service to technology. Born and raised in the 
                Philippines, I'm inspired by the crystal-clear aquamarine waters and vibrant culture that 
                define our beautiful islands.
              </p>
              <p>
                My unique background brings valuable perspective to tech—education taught me clear communication 
                and user-centered design, while customer service gave me deep empathy for user needs. These 
                experiences, combined with my technical studies, help me approach development with creativity 
                and a focus on solutions that truly serve users.
              </p>
              <p>
                I'm passionate about building modern, responsive web applications and I'm really enjoying 
                vibe coding. When I'm not studying or coding, you'll find me exploring new technologies, 
                working on personal projects, or enjoying the beautiful beaches of the Philippines—always 
                finding inspiration in the world around me.
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
