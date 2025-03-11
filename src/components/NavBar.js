const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-4 bg-background shadow">
      <div className="flex-shrink-0">
        <h1 className="text-xl font-bold">NIKORU.DEV</h1>
      </div>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-primary hover:text-gray-800">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-primary hover:text-gray-800">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="text-primary hover:text-gray-800">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
