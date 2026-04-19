function HeroDetail({ hero, setPage, setSelectedHero }) {
  const [activeTab, setActiveTab] = React.useState('build');
  if (!hero) { setPage('heroes'); return null; }

  const roleClass = 'role-' + hero.role.toLowerCase();
  const tierClass = 'tier-' + hero.tier.toLowerCase();
  const relatedHeroes = heroesData.filter(h => h.role === hero.role && h.id !== hero.id).slice(0, 4);
  const diffMap = { Easy: 1, Medium: 2, Hard: 3, 'Very Hard': 4, Extreme: 5 };
  const stars = diffMap[hero.difficulty] || 1;
  const tabs = [
    { id: 'build', label: '⚒ Build' },
    { id: 'lore', label: '◈ Lore' },
    { id: 'skills', label: '⚡ Skills' },
    { id: 'tips', label: '◆ Tips' },
  ];

  const handleRelated = (h) => { setSelectedHero(h); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return React.createElement('div', { className: 'hero-detail' },

    React.createElement('div', { className: 'hero-banner' },
      React.createElement('div', { className: 'hero-banner-bg' }),
      React.createElement('div', { className: 'container' },
        React.createElement('div', { className: 'hero-banner-content' },
          React.createElement('span', {
            className: 'back-btn', onClick: () => setPage('heroes'), style: { cursor: 'pointer' }
          }, '‹ Kembali ke Hero List'),
          React.createElement('div', { className: 'hero-profile' },
            React.createElement('div', { className: 'hero-avatar-wrap' },
              React.createElement('div', { className: 'hero-avatar-glow' }),
              React.createElement('img', {
                src: hero.avatar, alt: hero.name,
                onError: (e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + hero.name + '&background=0c1028&color=00d4ff&size=200&bold=true'; }
              }),
              React.createElement('div', { className: 'hero-avatar-frame' })
            ),
            React.createElement('div', { className: 'hero-profile-info' },
              React.createElement('div', { className: 'hero-badges-row' },
                React.createElement('span', { className: 'badge ' + roleClass }, hero.role),
                React.createElement('span', { className: 'badge ' + tierClass }, 'Tier ' + hero.tier)
              ),
              React.createElement('h1', { className: 'hero-detail-name' }, hero.name),
              React.createElement('p', { className: 'hero-detail-role' }, hero.specialty),
              React.createElement('div', { className: 'hero-info-grid' },
                React.createElement('div', { className: 'hero-info-item' },
                  React.createElement('span', { className: 'info-lbl' }, 'Difficulty'),
                  React.createElement('div', { className: 'diff-stars' },
                    [1,2,3,4,5].map(s =>
                      React.createElement('span', { key: s, className: 'star ' + (s <= stars ? 'filled' : '') }, '★')
                    ),
                    React.createElement('span', { className: 'diff-label' }, hero.difficulty)
                  )
                ),
                React.createElement('div', { className: 'hero-info-item' },
                  React.createElement('span', { className: 'info-lbl' }, 'Battle Spell'),
                  React.createElement('span', { className: 'info-val' }, hero.spell)
                ),
                React.createElement('div', { className: 'hero-info-item' },
                  React.createElement('span', { className: 'info-lbl' }, 'Emblem'),
                  React.createElement('span', { className: 'info-val', style: { fontSize: '0.8rem' } }, hero.emblem)
                )
              )
            )
          )
        )
      )
    ),

    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'detail-layout' },

        React.createElement('div', { className: 'detail-main' },
          React.createElement('div', { className: 'tab-nav' },
            tabs.map(tab =>
              React.createElement('button', {
                key: tab.id,
                className: 'tab-btn ' + (activeTab === tab.id ? 'active' : ''),
                onClick: () => setActiveTab(tab.id)
              }, tab.label)
            )
          ),

          activeTab === 'build' && React.createElement('div', { className: 'tab-content' },
            React.createElement('h2', { className: 'tab-section-title' }, 'Recommended Build'),
            React.createElement('p', { className: 'tab-desc' }, 'Build optimal untuk ' + hero.name + ' di meta 2026'),
            React.createElement('div', { className: 'build-grid' },
              hero.recommendedBuild.map((item, i) =>
                React.createElement(BuildItem, { key: i, item, index: i })
              )
            ),
            React.createElement('div', { className: 'build-extras' },
              React.createElement('div', { className: 'build-extra-card' },
                React.createElement('h3', null, '◈ Emblem'),
                React.createElement('p', null, hero.emblem)
              ),
              React.createElement('div', { className: 'build-extra-card' },
                React.createElement('h3', null, '⚡ Battle Spell'),
                React.createElement('p', null, hero.spell)
              )
            )
          ),

          activeTab === 'lore' && React.createElement('div', { className: 'tab-content' },
            React.createElement('h2', { className: 'tab-section-title' }, hero.name + ' — Lore'),
            React.createElement('div', { className: 'lore-content' },
              React.createElement('div', { className: 'lore-img-wrap' },
                React.createElement('img', {
                  src: hero.avatar, alt: hero.name, className: 'lore-img',
                  onError: (e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + hero.name + '&background=0c1028&color=00d4ff&size=400&bold=true'; }
                })
              ),
              React.createElement('blockquote', { className: 'lore-text' }, hero.lore)
            )
          ),

          activeTab === 'skills' && React.createElement('div', { className: 'tab-content' },
            React.createElement('h2', { className: 'tab-section-title' }, 'Skill Kit — ' + hero.name),
            React.createElement('div', { className: 'skills-list' },
              hero.skills.map((skill, i) =>
                React.createElement('div', {
                  key: i, className: 'skill-card',
                  style: { animationDelay: (i * 0.1) + 's' }
                },
                  React.createElement('span', { className: 'skill-type-tag' }, skill.type),
                  React.createElement('div', { className: 'skill-info' },
                    React.createElement('h3', { className: 'skill-name' }, skill.name),
                    React.createElement('p', { className: 'skill-desc' }, skill.desc)
                  )
                )
              )
            )
          ),

          activeTab === 'tips' && React.createElement('div', { className: 'tab-content' },
            React.createElement('h2', { className: 'tab-section-title' }, 'Tips & Strategi'),
            React.createElement('div', { className: 'tips-main' },
              React.createElement('span', { className: 'tips-icon' }, '◆'),
              React.createElement('p', { className: 'tips-text' }, hero.tips)
            ),
            React.createElement('div', { className: 'tips-grid' },
              React.createElement('div', { className: 'tips-card counter-card' },
                React.createElement('h3', null, '✖ Counter'),
                React.createElement('ul', null,
                  hero.counter.map((c, i) => React.createElement('li', { key: i }, c))
                )
              ),
              React.createElement('div', { className: 'tips-card synergy-card' },
                React.createElement('h3', null, '◈ Synergy'),
                React.createElement('ul', null,
                  hero.synergy.map((s, i) => React.createElement('li', { key: i }, s))
                )
              )
            )
          )
        ),

        React.createElement('div', { className: 'detail-sidebar' },
          React.createElement('div', { className: 'sidebar-card' },
            React.createElement('h3', { className: 'sidebar-title' }, '◆ Info Hero'),
            React.createElement('div', { className: 'info-list' },
              [
                { key: 'Role', val: React.createElement('span', { className: 'badge ' + roleClass }, hero.role) },
                { key: 'Tier', val: React.createElement('span', { className: 'badge ' + tierClass }, 'Tier ' + hero.tier) },
                { key: 'Difficulty', val: React.createElement('span', { className: 'info-val' }, hero.difficulty) },
                { key: 'Specialty', val: React.createElement('span', { className: 'info-val' }, hero.specialty) },
              ].map(row =>
                React.createElement('div', { key: row.key, className: 'info-row' },
                  React.createElement('span', { className: 'info-key' }, row.key),
                  row.val
                )
              )
            )
          ),

          relatedHeroes.length > 0 && React.createElement('div', { className: 'sidebar-card' },
            React.createElement('h3', { className: 'sidebar-title' }, '⚔ Hero Sejenis'),
            React.createElement('div', { className: 'related-heroes' },
              relatedHeroes.map(h =>
                React.createElement('div', {
                  key: h.id, className: 'related-hero',
                  onClick: () => handleRelated(h), style: { cursor: 'pointer' }
                },
                  React.createElement('img', {
                    src: h.avatar, alt: h.name,
                    onError: (e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + h.name + '&background=0c1028&color=00d4ff&size=60&bold=true'; }
                  }),
                  React.createElement('div', null,
                    React.createElement('p', { className: 'related-name' }, h.name),
                    React.createElement('span', { className: 'badge role-' + h.role.toLowerCase() }, h.role)
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}