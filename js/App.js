function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [selectedHero, setSelectedHero] = React.useState(null);

  const setPage = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return React.createElement(Home, { setPage, setSelectedHero });
      case 'heroes': return React.createElement(HeroList, { setPage, setSelectedHero });
      case 'detail': return React.createElement(HeroDetail, { hero: selectedHero, setPage, setSelectedHero });
      case 'tierlist': return React.createElement(TierList, { setPage, setSelectedHero });
      case 'compare': return React.createElement(HeroCompare, { setPage, setSelectedHero });
      case 'patch': return React.createElement(PatchNotes, { setPage });
      case 'draft': return React.createElement(DraftPick, { setPage });
      case 'about': return React.createElement(About, { setPage });
      default: return React.createElement(Home, { setPage, setSelectedHero });
    }
  };

  return React.createElement('div', { className: 'app' },
    React.createElement('div', { className: 'star-field' }),
    React.createElement('div', { className: 'bg-grid' }),
    React.createElement('div', { className: 'scanline' }),
    React.createElement('div', { className: 'corner-deco corner-deco-tl' }),
    React.createElement('div', { className: 'corner-deco corner-deco-br' }),
    React.createElement('div', { className: 'magic-particles', id: 'particles' }),
    React.createElement(Navbar, { currentPage, setPage }),
    React.createElement('main', { className: 'main-content' }, renderPage()),
    React.createElement(Footer, { setPage })
  );
}

function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const colors = ['rgba(0,212,255,0.6)','rgba(196,75,255,0.5)','rgba(255,215,0,0.4)','rgba(0,255,136,0.4)','rgba(255,107,53,0.3)'];
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const dur = Math.random() * 20 + 15;
    const delay = Math.random() * 20;
    const left = Math.random() * 100;
    p.style.cssText = 'width:' + size + 'px;height:' + size + 'px;background:' + color + ';left:' + left + '%;animation-duration:' + dur + 's;animation-delay:-' + delay + 's;box-shadow:0 0 ' + (size * 3) + 'px ' + color + ';';
    container.appendChild(p);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
setTimeout(createParticles, 100);