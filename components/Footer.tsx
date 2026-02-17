export default function Footer() {
  return (
    <footer>
      <div style={{ marginBottom: '1rem' }}>
        <a 
          href="https://github.com/acvalenzuela" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-github-link"
        >
          GitHub: acvalenzuela
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Portfolio. Made with ❤️ inspired by the beautiful beaches of the Philippines.</p>
    </footer>
  );
}
