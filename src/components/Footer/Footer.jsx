import "./Footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <nav>
        <ul className="nav-list">
          <li>Whatsapp</li>
          <li>Instagram</li>
        </ul>
      </nav>
      <p className="copy-right">&copy; {year} My App. All rights reserved.</p>
    </footer>
  );
};
