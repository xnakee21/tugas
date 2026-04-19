function Footer({ setPage }) {
  const nav = (page) => { setPage(page); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return React.createElement('footer', { className: 'footer' },
    React.createElement('div', { className: 'footer-container' },
      React.createElement('div', { className: 'footer-grid' },
        React.createElement('div', { className: 'footer-brand' },
          React.createElement('div', { className: 'footer-logo' },
            React.createElement('span', { style: { fontSize: '1.8rem' } }, '⚔️'),
            React.createElement('div', null,
              React.createElement('span', { className: 'footer-logo-ml' }, 'ML'),
              React.createElement('span', { className: 'footer-logo-guide' }, 'GUIDE')
            )
          ),
          React.createElement('p', { className: 'footer-desc' }, 'Panduan hero Mobile Legends terlengkap — build, tier list, hero compare, draft pick, dan patch notes.')
        ),
        React.createElement('div', { className: 'footer-links-col' },
          React.createElement('h4', { className: 'footer-col-title' }, 'Navigasi'),
          React.createElement('ul', null,
            [['home','Home'],['heroes','Semua Hero'],['tierlist','Tier List'],['compare','Hero Compare'],['draft','Draft Pick'],['patch','Patch Notes'],['about','About']].map(([p,l]) =>
              React.createElement('li', { key: p }, React.createElement('span', { onClick: () => nav(p), style: { cursor:'pointer' } }, l))
            )
          )
        ),
        React.createElement('div', { className: 'footer-links-col' },
          React.createElement('h4', { className: 'footer-col-title' }, 'Role Hero'),
          React.createElement('ul', null,
            ['Marksman','Tank','Mage','Assassin','Fighter','Support'].map(r =>
              React.createElement('li', { key: r }, React.createElement('span', { onClick: () => nav('heroes'), style: { cursor:'pointer' } }, r))
            )
          )
        ),
        React.createElement('div', { className: 'footer-links-col' },
          React.createElement('h4', { className: 'footer-col-title' }, 'Info'),
          React.createElement('p', { className: 'footer-disclaimer' }, 'Website ini dibuat untuk keperluan edukasi Tugas Besar Pemrograman Web. Mobile Legends: Bang Bang adalah milik Moonton.')
        )
      ),
      React.createElement('div', { className: 'footer-bottom' },
        React.createElement('p', null, '© 2026 ML Guide — Tugas Besar Pemrograman Web | React JS')
      )
    )
  );
}