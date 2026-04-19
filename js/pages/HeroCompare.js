// Laning winrate database berdasarkan role matchup & tier
const laningWR = {
    // [roleA vs roleB]: [winrateA, winrateB]
    "Marksman-Marksman": [50, 50],
    "Marksman-Tank": [58, 42],
    "Marksman-Mage": [52, 48],
    "Marksman-Assassin": [35, 65],
    "Marksman-Fighter": [45, 55],
    "Marksman-Support": [62, 38],
    "Tank-Tank": [50, 50],
    "Tank-Marksman": [42, 58],
    "Tank-Mage": [55, 45],
    "Tank-Assassin": [60, 40],
    "Tank-Fighter": [52, 48],
    "Tank-Support": [50, 50],
    "Mage-Mage": [50, 50],
    "Mage-Marksman": [48, 52],
    "Mage-Tank": [45, 55],
    "Mage-Assassin": [38, 62],
    "Mage-Fighter": [50, 50],
    "Mage-Support": [55, 45],
    "Assassin-Assassin": [50, 50],
    "Assassin-Marksman": [65, 35],
    "Assassin-Tank": [40, 60],
    "Assassin-Mage": [62, 38],
    "Assassin-Fighter": [48, 52],
    "Assassin-Support": [70, 30],
    "Fighter-Fighter": [50, 50],
    "Fighter-Marksman": [55, 45],
    "Fighter-Tank": [48, 52],
    "Fighter-Mage": [50, 50],
    "Fighter-Assassin": [52, 48],
    "Fighter-Support": [58, 42],
    "Support-Support": [50, 50],
    "Support-Marksman": [38, 62],
    "Support-Tank": [50, 50],
    "Support-Mage": [45, 55],
    "Support-Assassin": [30, 70],
    "Support-Fighter": [42, 58],
  };
  
  const tierBoost = { S: 6, A: 3, B: 0, C: -3 };
  
  function getLaningWR(heroA, heroB) {
    const key1 = heroA.role + '-' + heroB.role;
    const key2 = heroB.role + '-' + heroA.role;
    let base;
    if (laningWR[key1]) {
      base = [...laningWR[key1]];
    } else if (laningWR[key2]) {
      base = [laningWR[key2][1], laningWR[key2][0]];
    } else {
      base = [50, 50];
    }
  
    // Apply tier difference
    const boostA = tierBoost[heroA.tier] || 0;
    const boostB = tierBoost[heroB.tier] || 0;
    const diff = (boostA - boostB) * 0.5;
    let a = Math.min(80, Math.max(20, base[0] + diff));
    let b = 100 - a;
    return { a: Math.round(a), b: Math.round(b) };
  }
  
  function HeroCompare({ setPage, setSelectedHero }) {
    const [heroA, setHeroA] = React.useState(null);
    const [heroB, setHeroB] = React.useState(null);
    const [searchA, setSearchA] = React.useState('');
    const [searchB, setSearchB] = React.useState('');
    const [dropA, setDropA] = React.useState(false);
    const [dropB, setDropB] = React.useState(false);
  
    const filteredA = heroesData.filter(h =>
      h.name.toLowerCase().includes(searchA.toLowerCase()) && h.id !== (heroB ? heroB.id : -1)
    ).slice(0, 8);
    const filteredB = heroesData.filter(h =>
      h.name.toLowerCase().includes(searchB.toLowerCase()) && h.id !== (heroA ? heroA.id : -1)
    ).slice(0, 8);
  
    const diffMap = { Easy: 1, Medium: 2, Hard: 3, 'Very Hard': 4, Extreme: 5 };
    const tierNum = { S: 4, A: 3, B: 2, C: 1 };
    const laning = heroA && heroB ? getLaningWR(heroA, heroB) : null;
  
    const itemIcons = { Attack:'⚔️', Magic:'✨', Defense:'🛡️', Lifesteal:'💉', Penetration:'🔱', Hybrid:'⚡' };
  
    const HeroPicker = ({ hero, search, setSearch, drop, setDrop, filtered, onSelect, side }) =>
      React.createElement('div', { className: 'picker-wrap' },
        hero
          ? React.createElement('div', { className: 'picker-selected' },
              React.createElement('div', { className: 'picker-avatar-wrap' },
                React.createElement('img', { src: hero.avatar, alt: hero.name,
                  onError: (e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + hero.name + '&background=0c1028&color=00d4ff&size=300&bold=true'; }
                }),
                React.createElement('div', { className: 'picker-avatar-glow' })
              ),
              React.createElement('div', { className: 'picker-info' },
                React.createElement('div', { className: 'picker-badges' },
                  React.createElement('span', { className: 'badge role-' + hero.role.toLowerCase() }, hero.role),
                  React.createElement('span', { className: 'badge tier-' + hero.tier.toLowerCase() }, 'Tier ' + hero.tier)
                ),
                React.createElement('h3', { className: 'picker-name' }, hero.name),
                React.createElement('p', { className: 'picker-specialty' }, hero.specialty),
                React.createElement('button', { className: 'btn-change', onClick: () => { onSelect(null); setSearch(''); } }, '✕ Ganti Hero')
              )
            )
          : React.createElement('div', { className: 'picker-empty' },
              React.createElement('div', { className: 'picker-search-wrap' },
                React.createElement('span', { className: 'picker-search-icon' }, '🔍'),
                React.createElement('input', {
                  type: 'text', placeholder: 'Cari hero ' + side + '...',
                  value: search,
                  onChange: (e) => { setSearch(e.target.value); setDrop(true); },
                  onFocus: () => setDrop(true),
                  className: 'picker-input'
                })
              ),
              drop && search && filtered.length > 0 &&
                React.createElement('div', { className: 'picker-dropdown' },
                  filtered.map(h =>
                    React.createElement('div', { key: h.id, className: 'picker-option',
                      onClick: () => { onSelect(h); setSearch(''); setDrop(false); }
                    },
                      React.createElement('img', { src: h.avatar, alt: h.name,
                        onError: (e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + h.name + '&background=0c1028&color=00d4ff&size=40&bold=true'; }
                      }),
                      React.createElement('div', null,
                        React.createElement('p', { className: 'opt-name' }, h.name),
                        React.createElement('span', { className: 'badge role-' + h.role.toLowerCase() }, h.role)
                      )
                    )
                  )
                ),
              React.createElement('div', { className: 'picker-placeholder' },
                React.createElement('div', { className: 'placeholder-icon' }, '⚔'),
                React.createElement('p', null, 'Pilih Hero ' + side)
              )
            )
      );
  
    return React.createElement('div', { className: 'compare-page' },
      React.createElement('div', { className: 'page-header' },
        React.createElement('div', { className: 'container' },
          React.createElement('h1', { className: 'section-title' }, '⚔ Hero Compare'),
          React.createElement('p', { className: 'page-subtitle' }, 'Bandingkan dua hero — stats, build, skill, dan prediksi winrate laning 1v1')
        )
      ),
  
      React.createElement('div', { className: 'container' },
  
        React.createElement('div', { className: 'compare-pickers' },
          React.createElement(HeroPicker, { hero: heroA, search: searchA, setSearch: setSearchA, drop: dropA, setDrop: setDropA, filtered: filteredA, onSelect: setHeroA, side: 'A' }),
          React.createElement('div', { className: 'vs-badge' }, 'VS'),
          React.createElement(HeroPicker, { hero: heroB, search: searchB, setSearch: setSearchB, drop: dropB, setDrop: setDropB, filtered: filteredB, onSelect: setHeroB, side: 'B' })
        ),
  
        heroA && heroB ? React.createElement('div', { className: 'compare-result' },
  
          // WINRATE LANING — ditampilkan paling atas
          React.createElement('div', { className: 'compare-section compare-section-winrate' },
            React.createElement('h2', { className: 'compare-section-title' }, '📊 Prediksi Winrate Laning 1v1'),
            React.createElement('div', { className: 'laning-wr-card' },
              React.createElement('div', { className: 'lwr-heroes' },
                React.createElement('div', { className: 'lwr-hero' },
                  React.createElement('img', { src: heroA.avatar, alt: heroA.name,
                    onError: (e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + heroA.name + '&background=0c1028&color=00d4ff&size=80&bold=true'; }
                  }),
                  React.createElement('p', { className: 'lwr-name' }, heroA.name),
                  React.createElement('p', { className: 'lwr-pct lwr-pct-' + (laning.a >= laning.b ? 'win' : 'lose') }, laning.a + '%')
                ),
                React.createElement('div', { className: 'lwr-bar-wrap' },
                  React.createElement('div', { className: 'lwr-bar-track' },
                    React.createElement('div', { className: 'lwr-fill-a', style: { width: laning.a + '%' } }),
                    React.createElement('div', { className: 'lwr-fill-b', style: { width: laning.b + '%' } })
                  ),
                  React.createElement('div', { className: 'lwr-labels' },
                    React.createElement('span', null, heroA.name),
                    React.createElement('span', null, heroB.name)
                  )
                ),
                React.createElement('div', { className: 'lwr-hero' },
                  React.createElement('img', { src: heroB.avatar, alt: heroB.name,
                    onError: (e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + heroB.name + '&background=0c1028&color=00d4ff&size=80&bold=true'; }
                  }),
                  React.createElement('p', { className: 'lwr-name' }, heroB.name),
                  React.createElement('p', { className: 'lwr-pct lwr-pct-' + (laning.b >= laning.a ? 'win' : 'lose') }, laning.b + '%')
                )
              ),
              React.createElement('div', { className: 'lwr-analysis' },
                React.createElement('div', { className: 'lwr-analysis-item' },
                  React.createElement('span', { className: 'lwr-icon' }, '⚔'),
                  React.createElement('p', null,
                    React.createElement('strong', null, 'Matchup Role: '),
                    heroA.role + ' vs ' + heroB.role + ' — ' +
                    (laning.a > 55 ? heroA.name + ' unggul secara role matchup'
                    : laning.b > 55 ? heroB.name + ' unggul secara role matchup'
                    : 'Matchup seimbang, skill pemain sangat menentukan')
                  )
                ),
                React.createElement('div', { className: 'lwr-analysis-item' },
                  React.createElement('span', { className: 'lwr-icon' }, '◈'),
                  React.createElement('p', null,
                    React.createElement('strong', null, 'Tier Factor: '),
                    'Tier ' + heroA.tier + ' (' + heroA.name + ') vs Tier ' + heroB.tier + ' (' + heroB.name + ')' +
                    (heroA.tier === heroB.tier ? ' — Tier sama, bergantung pada skill individu'
                    : ' — Tier lebih tinggi memberikan keunggulan statistik')
                  )
                ),
                React.createElement('div', { className: 'lwr-analysis-item' },
                  React.createElement('span', { className: 'lwr-icon' }, '◆'),
                  React.createElement('p', null,
                    React.createElement('strong', null, 'Difficulty: '),
                    heroA.name + ' (' + heroA.difficulty + ') vs ' + heroB.name + ' (' + heroB.difficulty + ')' +
                    ' — Hero dengan difficulty lebih tinggi berpotensi lebih kuat jika dikuasai'
                  )
                )
              )
            )
          ),
  
          // STATS
          React.createElement('div', { className: 'compare-section' },
            React.createElement('h2', { className: 'compare-section-title' }, '◈ Perbandingan Stats'),
            React.createElement('div', { className: 'stats-compare' },
              [
                { label: 'Tier', valA: tierNum[heroA.tier], valB: tierNum[heroB.tier], dispA: 'Tier ' + heroA.tier, dispB: 'Tier ' + heroB.tier, bars: true },
                { label: 'Difficulty', valA: diffMap[heroA.difficulty], valB: diffMap[heroB.difficulty], dispA: heroA.difficulty, dispB: heroB.difficulty, bars: true, invert: true },
                { label: 'Skills', valA: heroA.skills.length, valB: heroB.skills.length, dispA: heroA.skills.length + ' Skills', dispB: heroB.skills.length + ' Skills', bars: true },
                { label: 'Build Items', valA: heroA.recommendedBuild.length, valB: heroB.recommendedBuild.length, dispA: heroA.recommendedBuild.length + ' Items', dispB: heroB.recommendedBuild.length + ' Items', bars: true }
              ].map((stat, i) => {
                const winA = stat.invert ? stat.valA <= stat.valB : stat.valA >= stat.valB;
                const winB = stat.invert ? stat.valB <= stat.valA : stat.valB >= stat.valA;
                const maxVal = Math.max(stat.valA, stat.valB);
                return React.createElement('div', { key: i, className: 'stat-compare-row' },
                  React.createElement('div', { className: 'stat-side ' + (winA ? 'winner' : '') },
                    React.createElement('span', { className: 'stat-value' }, stat.dispA),
                    React.createElement('div', { className: 'stat-bar-wrap' },
                      React.createElement('div', { className: 'stat-bar stat-bar-left ' + (winA ? 'bar-win' : ''), style: { width: Math.round((stat.valA / maxVal) * 100) + '%' } })
                    ),
                    winA && stat.valA !== stat.valB && React.createElement('span', { className: 'win-crown' }, '👑')
                  ),
                  React.createElement('div', { className: 'stat-label-center' }, stat.label),
                  React.createElement('div', { className: 'stat-side stat-side-right ' + (winB ? 'winner' : '') },
                    winB && stat.valB !== stat.valA && React.createElement('span', { className: 'win-crown' }, '👑'),
                    React.createElement('div', { className: 'stat-bar-wrap' },
                      React.createElement('div', { className: 'stat-bar stat-bar-right ' + (winB ? 'bar-win' : ''), style: { width: Math.round((stat.valB / maxVal) * 100) + '%' } })
                    ),
                    React.createElement('span', { className: 'stat-value' }, stat.dispB)
                  )
                );
              })
            )
          ),
  
          // BUILD
          React.createElement('div', { className: 'compare-section' },
            React.createElement('h2', { className: 'compare-section-title' }, '⚒ Perbandingan Build'),
            React.createElement('div', { className: 'build-compare' },
              React.createElement('div', { className: 'build-col' },
                heroA.recommendedBuild.map((item, i) =>
                  React.createElement('div', { key: i, className: 'build-compare-item' },
                    React.createElement('span', { className: 'bci-icon' }, itemIcons[item.type] || '⚔️'),
                    React.createElement('div', null,
                      React.createElement('p', { className: 'bci-name' }, item.name),
                      React.createElement('p', { className: 'bci-type' }, item.type)
                    )
                  )
                )
              ),
              React.createElement('div', { className: 'build-col' },
                heroB.recommendedBuild.map((item, i) =>
                  React.createElement('div', { key: i, className: 'build-compare-item build-compare-item-right' },
                    React.createElement('div', { style: { textAlign: 'right' } },
                      React.createElement('p', { className: 'bci-name' }, item.name),
                      React.createElement('p', { className: 'bci-type' }, item.type)
                    ),
                    React.createElement('span', { className: 'bci-icon' }, itemIcons[item.type] || '⚔️')
                  )
                )
              )
            )
          ),
  
          // SKILLS
          React.createElement('div', { className: 'compare-section' },
            React.createElement('h2', { className: 'compare-section-title' }, '⚡ Perbandingan Skill'),
            React.createElement('div', { className: 'skills-compare' },
              React.createElement('div', { className: 'skills-col' },
                heroA.skills.map((skill, i) =>
                  React.createElement('div', { key: i, className: 'skill-compare-item' },
                    React.createElement('span', { className: 'skill-tag' }, skill.type),
                    React.createElement('div', null,
                      React.createElement('p', { className: 'sc-name' }, skill.name),
                      React.createElement('p', { className: 'sc-desc' }, skill.desc)
                    )
                  )
                )
              ),
              React.createElement('div', { className: 'skills-col' },
                heroB.skills.map((skill, i) =>
                  React.createElement('div', { key: i, className: 'skill-compare-item skill-compare-right' },
                    React.createElement('div', { style: { textAlign: 'right' } },
                      React.createElement('p', { className: 'sc-name' }, skill.name),
                      React.createElement('p', { className: 'sc-desc' }, skill.desc)
                    ),
                    React.createElement('span', { className: 'skill-tag' }, skill.type)
                  )
                )
              )
            )
          ),
  
          // COUNTER & SYNERGY
          React.createElement('div', { className: 'compare-section' },
            React.createElement('h2', { className: 'compare-section-title' }, '◆ Counter & Synergy'),
            React.createElement('div', { className: 'cs-compare' },
              React.createElement('div', { className: 'cs-col' },
                React.createElement('div', { className: 'cs-card counter' },
                  React.createElement('h4', null, '✖ Counter ' + heroA.name),
                  React.createElement('ul', null, heroA.counter.map((c, i) => React.createElement('li', { key: i }, c)))
                ),
                React.createElement('div', { className: 'cs-card synergy' },
                  React.createElement('h4', null, '◈ Synergy ' + heroA.name),
                  React.createElement('ul', null, heroA.synergy.map((s, i) => React.createElement('li', { key: i }, s)))
                )
              ),
              React.createElement('div', { className: 'cs-col' },
                React.createElement('div', { className: 'cs-card counter' },
                  React.createElement('h4', null, '✖ Counter ' + heroB.name),
                  React.createElement('ul', null, heroB.counter.map((c, i) => React.createElement('li', { key: i }, c)))
                ),
                React.createElement('div', { className: 'cs-card synergy' },
                  React.createElement('h4', null, '◈ Synergy ' + heroB.name),
                  React.createElement('ul', null, heroB.synergy.map((s, i) => React.createElement('li', { key: i }, s)))
                )
              )
            )
          )
  
        ) : React.createElement('div', { className: 'compare-empty-state' },
            React.createElement('div', { className: 'empty-icon' }, '⚔'),
            React.createElement('h3', null, 'Pilih 2 Hero untuk Membandingkan'),
            React.createElement('p', null, 'Gunakan kolom pencarian di atas untuk memilih dua hero yang ingin dibandingkan')
          )
      )
    );
  }