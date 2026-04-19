function About({ setPage }) {
  const features = [
    { icon: '🔧', title: 'Build Recommendations', desc: 'Rekomendasi item build lengkap untuk setiap hero, disusun berdasarkan meta dan win rate tertinggi.' },
    { icon: '📖', title: 'Hero Lore', desc: 'Cerita latar belakang setiap hero, menggali kisah dan motivasi karakter di Land of Dawn.' },
    { icon: '🎮', title: 'Gameplay Video', desc: 'Video gameplay dari YouTube untuk setiap hero agar kamu bisa belajar mekanik langsung dari ahlinya.' },
    { icon: '📊', title: 'Tier List', desc: 'Peringkat hero berdasarkan kekuatan di meta saat ini, diperbarui setiap patch.' },
    { icon: '🔍', title: 'Filter & Search', desc: 'Cari dan filter hero berdasarkan role, tier, dan nama dengan cepat dan mudah.' },
    { icon: '💡', title: 'Tips & Counter', desc: 'Tips pro player, hero counter, dan sinergy team untuk memaksimalkan potensi hero pilihanmu.' },
  ];



  const handleNav = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const roles = [...new Set(heroesData.map(h => h.role))];

  return React.createElement('div', { className: 'about-page' },
    React.createElement('div', { className: 'page-header' },
      React.createElement('div', { className: 'container' },
        React.createElement('h1', { className: 'section-title' }, 'Tentang ML Guide'),
        React.createElement('p', { className: 'page-subtitle' }, 'Website panduan hero Mobile Legends terlengkap untuk komunitas Indonesia')
      )
    ),

    React.createElement('div', { className: 'container' },

      // About Hero
      React.createElement('div', { className: 'about-hero' },
        React.createElement('div', { className: 'about-hero-text' },
          React.createElement('h2', null, 'Apa itu ML Guide?'),
          React.createElement('p', null,
            React.createElement('strong', null, 'ML Guide'),
            ' adalah website panduan komprehensif untuk game Mobile Legends: Bang Bang. Website ini hadir sebagai referensi terpercaya bagi para pemain dari pemula hingga player berpengalaman yang ingin meningkatkan kemampuan bermain mereka.'
          ),
          React.createElement('p', null,
            'Di sini kamu bisa menemukan rekomendasi build terbaik, lore setiap hero, video gameplay, tier list meta terkini, serta tips dan trik dari perspektif pro player.'
          ),
          React.createElement('div', { className: 'about-stats' },
            [
              { num: heroesData.length, label: 'Hero' },
              { num: roles.length, label: 'Role' },
              { num: heroesData.length * 6, label: 'Item Build' },
              { num: heroesData.length, label: 'Video' },
            ].map((s, i) =>
              React.createElement('div', { key: i, className: 'astat' },
                React.createElement('span', { className: 'astat-num' }, s.num),
                React.createElement('span', { className: 'astat-label' }, s.label)
              )
            )
          )
        ),

        React.createElement('div', { className: 'about-hero-visual' },
          React.createElement('div', { className: 'about-logo-big' },
            React.createElement('span', null, '⚔️'),
            React.createElement('div', null,
              React.createElement('span', { className: 'big-ml' }, 'ML'),
              React.createElement('span', { className: 'big-guide' }, 'GUIDE')
            )
          ),
          React.createElement('p', { className: 'about-tagline' }, '"From Bronze to Mythic"')
        )
      ),

      // Features
      React.createElement('div', { className: 'about-section' },
        React.createElement('h2', { className: 'section-title' }, '✨ Fitur Unggulan'),
        React.createElement('div', { className: 'features-grid' },
          features.map((f, i) =>
            React.createElement('div', {
              key: i,
              className: 'feature-card',
              style: { animationDelay: (i * 0.08) + 's' }
            },
              React.createElement('div', { className: 'feature-icon' }, f.icon),
              React.createElement('h3', { className: 'feature-title' }, f.title),
              React.createElement('p', { className: 'feature-desc' }, f.desc)
            )
          )
        )
      ),

      // CTA
      React.createElement('div', { className: 'about-cta' },
        React.createElement('h2', null, 'Mulai Eksplorasi Sekarang!'),
        React.createElement('p', null, 'Temukan hero terbaik yang cocok dengan gaya bermainmu'),
        React.createElement('div', { className: 'about-cta-btns' },
          React.createElement('span', {
            className: 'btn btn-primary',
            onClick: () => handleNav('heroes'),
            style: { cursor: 'pointer' }
          }, '🗡️ Jelajahi Hero'),
          React.createElement('span', {
            className: 'btn btn-outline',
            onClick: () => handleNav('tierlist'),
            style: { cursor: 'pointer' }
          }, '📊 Tier List')
        )
      )
    )
  );
}