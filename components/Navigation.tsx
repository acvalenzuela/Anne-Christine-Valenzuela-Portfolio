import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <Link href="/" className="logo">
          Portfolio
        </Link>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
