import "./Footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <nav>
        <ul className="nav-list">
          <li>
            <a 
              href="https://wa.me/5491157432611" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
          </li>
          <li>
            <a 
              href="https://www.instagram.com/facuanzo" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </nav>
      <p className="copy-right">&copy; {year} My App. All rights reserved.</p>
    </footer>
  );
};
