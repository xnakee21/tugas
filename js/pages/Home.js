function Home({ setPage, setSelectedHero }) {
  const featuredHeroes = heroesData.filter(h => h.tier === 'S').slice(0, 4);
  const roles = [
    { name: 'Marksman', icon: '🏹', color: '#ffd700', desc: 'Damage Jarak Jauh' },
    { name: 'Tank', icon: '🛡️', color: '#00d4ff', desc: 'Pelindung Tim' },
    { name: 'Mage', icon: '🔮', color: '#c44bff', desc: 'Magic Burst' },
    { name: 'Assassin', icon: '🗡️', color: '#ff2d55', desc: 'Single Target Kill' },
    { name: 'Fighter', icon: '⚔️', color: '#ff6b35', desc: 'Sustain & Damage' },
    { name: 'Support', icon: '💊', color: '#00ff88', desc: 'Heal & Protect' },
  ];

  const nav = (page) => { setPage(page); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return React.createElement('div', { className: 'home' },

    React.createElement('section', { className: 'hero-section' },
      React.createElement('div', { className: 'hero-bg' },
        React.createElement('div', { className: 'hero-bg-grid' }),
        React.createElement('div', { className: 'hero-bg-glow' }),
        React.createElement('div', { className: 'hero-scan' })
      ),
      React.createElement('div', { className: 'container' },
        React.createElement('div', { className: 'hero-content' },
          React.createElement('div', { className: 'hero-eyebrow' },
            React.createElement('div', { className: 'eyebrow-dot' }),
            'Mobile Legends: Bang Bang'
          ),
          React.createElement('h1', { className: 'hero-title' },
            'Kuasai',
            React.createElement('span', { className: 'title-line2' }, ' Land of Dawn'),
            React.createElement('br'),
            'dengan Build Terbaik'
          ),
          React.createElement('p', { className: 'hero-subtitle' },
            'Panduan hero terlengkap — build optimal, lore mendalam, dan strategi dari para pro player. Mulai perjalananmu dari Bronze menuju Mythic.'
          ),
          React.createElement('div', { className: 'hero-cta' },
            React.createElement('span', { className: 'btn btn-primary', onClick: () => nav('heroes'), style: { cursor: 'pointer' } }, '⚔ Jelajahi Hero'),
            React.createElement('span', { className: 'btn btn-outline', onClick: () => nav('tierlist'), style: { cursor: 'pointer' } }, '◈ Tier List')
          ),
          React.createElement('div', { className: 'hero-stats-bar' },
            [
              { num: heroesData.length + '+', lbl: 'Hero' },
              { num: '6', lbl: 'Role' },
              { num: heroesData.length * 6 + '+', lbl: 'Item Build' },
              { num: (heroesData.length * 3) + '+', lbl: 'Tips Pro' },
            ].map((s, i) =>
              React.createElement('div', { key: i, className: 'hero-stat-pill' },
                React.createElement('span', { className: 'num' }, s.num),
                React.createElement('span', { className: 'lbl' }, s.lbl)
              )
            )
          )
        )
      ),
      React.createElement('div', { className: 'floating-heroes' },
        heroesData.slice(0, 6).map((hero, i) =>
          React.createElement('div', {
            key: hero.id,
            className: 'floating-hero',
            style: { '--delay': (i * 0.6) + 's', cursor: 'pointer' },
            onClick: () => { setSelectedHero(hero); nav('detail'); }
          },
            React.createElement('img', {
              src: hero.avatar, alt: hero.name,
              onError: (e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + hero.name + '&background=0c1028&color=00d4ff&size=90&bold=true'; }
            })
          )
        )
      )
    ),

    React.createElement('div', { className: 'stats-strip' },
      React.createElement('div', { className: 'stats-strip-inner' },
        [
          { num: heroesData.length + '+', lbl: 'Hero' },
          { num: '6', lbl: 'Role' },
          { num: heroesData.length * 6 + '+', lbl: 'Build Guide' },
          { num: (heroesData.length * 3) + '+', lbl: 'Tips Pro' },
          { num: '4', lbl: 'Tier' },
        ].map((s, i) =>
          React.createElement('div', { key: i, className: 'stat-box' },
            React.createElement('span', { className: 'stat-num' }, s.num),
            React.createElement('span', { className: 'stat-lbl' }, s.lbl)
          )
        )
      )
    ),

    React.createElement('section', { className: 'roles-section' },
      React.createElement('div', { className: 'container' },
        React.createElement('h2', { className: 'section-heading' },
          React.createElement('span', { className: 'accent' }, '◈ '),
          'Browse by Role'
        ),
        React.createElement('div', { className: 'roles-grid' },
          roles.map(role =>
            React.createElement('div', {
              key: role.name,
              className: 'role-card',
              style: { '--role-color': role.color, cursor: 'pointer' },
              onClick: () => nav('heroes')
            },
              React.createElement('div', { className: 'role-icon-wrap' }, role.icon),
              React.createElement('h3', { className: 'role-name' }, role.name),
              React.createElement('p', { className: 'role-desc' }, role.desc)
            )
          )
        )
      )
    ),

    React.createElement('section', { className: 'featured-section' },
      React.createElement('div', { className: 'container' },
        React.createElement('div', { className: 'section-header' },
          React.createElement('h2', { className: 'section-heading', style: { marginBottom: 0 } },
            React.createElement('span', { className: 'accent' }, '★ '),
            'Hero S-Tier'
          ),
          React.createElement('span', {
            className: 'see-all', onClick: () => nav('heroes'), style: { cursor: 'pointer' }
          }, 'Lihat Semua ›')
        ),
        React.createElement('div', { className: 'hero-grid' },
          featuredHeroes.map((hero, i) =>
            React.createElement(HeroCard, { key: hero.id, hero, index: i, setPage, setSelectedHero })
          )
        )
      )
    ),

    React.createElement('section', { className: 'cta-section' },
      React.createElement('div', { className: 'container' },
        React.createElement('div', { className: 'cta-banner' },
          React.createElement('div', { className: 'cta-bg-glow' }),
          React.createElement('div', { className: 'cta-content' },
            React.createElement('h2', null, 'Siap Naik Rank?'),
            React.createElement('p', null, 'Temukan hero yang cocok dengan gaya bermainmu dan raih Mythic!')
          ),
          React.createElement('span', { className: 'btn btn-primary', onClick: () => nav('tierlist'), style: { cursor: 'pointer' } }, '◈ Cek Tier List Meta')
        )
      )
    )
  );
}