function TierList({ setPage, setSelectedHero }) {
  const tierConfig = {
    S: { label: 'S', desc: 'Meta Saat Ini — Hero terkuat', color: '#ff6b35', bg: 'rgba(255,107,53,0.08)', border: 'rgba(255,107,53,0.25)' },
    A: { label: 'A', desc: 'Pilihan Kuat — Sangat efektif', color: '#f7b731', bg: 'rgba(247,183,49,0.08)', border: 'rgba(247,183,49,0.25)' },
    B: { label: 'B', desc: 'Solid — Pilihan bagus', color: '#26de81', bg: 'rgba(38,222,129,0.08)', border: 'rgba(38,222,129,0.25)' },
    C: { label: 'C', desc: 'Situasional', color: '#4a9eff', bg: 'rgba(74,158,255,0.08)', border: 'rgba(74,158,255,0.25)' },
  };

  const tiers = ['S', 'A', 'B', 'C'];

  const handleHero = (hero) => {
    setSelectedHero(hero);
    setPage('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return React.createElement('div', { className: 'tierlist-page' },
    React.createElement('div', { className: 'page-header' },
      React.createElement('div', { className: 'container' },
        React.createElement('h1', { className: 'section-title' }, '📊 Tier List'),
        React.createElement('p', { className: 'page-subtitle' }, 'Peringkat hero berdasarkan kekuatan di meta saat ini')
      )
    ),

    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'tier-note' },
        React.createElement('span', { className: 'note-icon' }, 'ℹ️'),
        React.createElement('p', null, 'Tier list ini berdasarkan win rate, pick rate, dan performa di ranked game. Meta bisa berubah setiap patch!')
      ),

      React.createElement('div', { className: 'tier-table' },
        tiers.map(tier => {
          const config = tierConfig[tier];
          const tierHeroes = heroesData.filter(h => h.tier === tier);

          return React.createElement('div', {
            key: tier,
            className: 'tier-row',
            style: {
              '--tier-color': config.color,
              '--tier-bg': config.bg,
              '--tier-border': config.border
            }
          },
            React.createElement('div', { className: 'tier-label-col' },
              React.createElement('div', { className: 'tier-badge-big' }, tier),
              React.createElement('p', { className: 'tier-row-desc' }, config.desc)
            ),

            React.createElement('div', { className: 'tier-heroes-col' },
              tierHeroes.length > 0
                ? tierHeroes.map(hero =>
                    React.createElement('div', {
                      key: hero.id,
                      className: 'tier-hero-item',
                      onClick: () => handleHero(hero),
                      style: { cursor: 'pointer' }
                    },
                      React.createElement('div', { className: 'tier-hero-img' },
                        React.createElement('img', {
                          src: hero.avatar,
                          alt: hero.name,
                          onError: (e) => {
                            e.target.src = 'https://ui-avatars.com/api/?name=' + hero.name + '&background=141828&color=4a9eff&size=80';
                          }
                        })
                      ),
                      React.createElement('div', { className: 'tier-hero-info' },
                        React.createElement('p', { className: 'tier-hero-name' }, hero.name),
                        React.createElement('span', { className: 'badge role-' + hero.role.toLowerCase() }, hero.role)
                      )
                    )
                  )
                : React.createElement('p', { className: 'no-hero-tier' }, 'Belum ada hero di tier ini')
            )
          );
        })
      ),

      // Legend
      React.createElement('div', { className: 'tier-legend' },
        React.createElement('h3', { className: 'legend-title' }, '📌 Keterangan'),
        React.createElement('div', { className: 'legend-grid' },
          Object.entries(tierConfig).map(([tier, config]) =>
            React.createElement('div', {
              key: tier,
              className: 'legend-item',
              style: { '--tier-color': config.color }
            },
              React.createElement('span', { className: 'legend-tier' }, tier),
              React.createElement('span', { className: 'legend-desc' }, config.desc)
            )
          )
        )
      )
    )
  );
}