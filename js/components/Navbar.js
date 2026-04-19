function Navbar({ currentPage, setPage }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { page: 'home', label: 'Home' },
    { page: 'heroes', label: 'Heroes' },
    { page: 'tierlist', label: 'Tier List' },
    { page: 'compare', label: 'Compare' },
    { page: 'draft', label: 'Draft Pick' },
    { page: 'patch', label: 'Patch Notes' },
    { page: 'about', label: 'About' },
  ];

  const handleNav = (page) => {
    setPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return React.createElement('nav', { className: 'navbar ' + (scrolled ? 'scrolled' : '') },
    React.createElement('div', { className: 'navbar-container' },
      React.createElement('div', { className: 'navbar-logo', onClick: () => handleNav('home') },
        React.createElement('span', { className: 'logo-icon' }, '⚔️'),
        React.createElement('div', { className: 'logo-text' },
          React.createElement('span', { className: 'logo-ml' }, 'ML'),
          React.createElement('span', { className: 'logo-guide' }, 'Guide')
        )
      ),
      React.createElement('ul', { className: 'navbar-links ' + (menuOpen ? 'open' : '') },
        navLinks.map(link =>
          React.createElement('li', { key: link.page },
            React.createElement('span', {
              className: 'nav-link ' + (currentPage === link.page ? 'active' : ''),
              onClick: () => handleNav(link.page),
              style: { cursor: 'pointer' }
            }, link.label)
          )
        )
      ),
      React.createElement('div', { className: 'navbar-right' },
        React.createElement('span', { className: 'btn-nav', onClick: () => handleNav('draft') }, '⚔ Draft'),
        React.createElement('button', {
          className: 'hamburger ' + (menuOpen ? 'open' : ''),
          onClick: () => setMenuOpen(!menuOpen)
        },
          React.createElement('span'), React.createElement('span'), React.createElement('span')
        )
      )
    )
  );
}