const draftData = {
    bans: { teamA: [], teamB: [] },
    picks: { teamA: [], teamB: [] }
  };
  
  function DraftPick({ setPage }) {
    const [phase, setPhase] = React.useState('setup'); // setup, draft, result
    const [teamAName, setTeamAName] = React.useState('Team Blue');
    const [teamBName, setTeamBName] = React.useState('Team Red');
    const [bansA, setBansA] = React.useState([]);
    const [bansB, setBansB] = React.useState([]);
    const [picksA, setPicksA] = React.useState([]);
    const [picksB, setPicksB] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [roleFilter, setRoleFilter] = React.useState('All');
    const [currentTurn, setCurrentTurn] = React.useState(0);
    const [hoveredHero, setHoveredHero] = React.useState(null);
  
    // Draft order: Ban3A Ban3B Ban3A Ban3B | Pick1A Pick2B Pick2A Pick2B Pick1A
    // Standard ML Draft: B B B B B B | P P P P P P P P P P
    const draftOrder = [
      { team: 'A', action: 'ban' },
      { team: 'B', action: 'ban' },
      { team: 'A', action: 'ban' },
      { team: 'B', action: 'ban' },
      { team: 'A', action: 'ban' },
      { team: 'B', action: 'ban' },
      { team: 'A', action: 'pick' },
      { team: 'B', action: 'pick' },
      { team: 'B', action: 'pick' },
      { team: 'A', action: 'pick' },
      { team: 'A', action: 'pick' },
      { team: 'B', action: 'pick' },
      { team: 'B', action: 'pick' },
      { team: 'A', action: 'pick' },
      { team: 'A', action: 'pick' },
      { team: 'B', action: 'pick' },
    ];
  
    const usedHeroes = [...bansA, ...bansB, ...picksA, ...picksB].map(h => h.id);
    const isDraftDone = currentTurn >= draftOrder.length;
    const currentStep = !isDraftDone ? draftOrder[currentTurn] : null;
  
    const roles = ['All', 'Marksman', 'Tank', 'Mage', 'Assassin', 'Fighter', 'Support'];
  
    const filteredHeroes = heroesData.filter(h => {
      const notUsed = !usedHeroes.includes(h.id);
      const matchRole = roleFilter === 'All' || h.role === roleFilter;
      const matchSearch = h.name.toLowerCase().includes(search.toLowerCase());
      return notUsed && matchRole && matchSearch;
    });
  
    const handleSelect = (hero) => {
      if (!currentStep || usedHeroes.includes(hero.id)) return;
      const { team, action } = currentStep;
      if (action === 'ban') {
        if (team === 'A') setBansA(prev => [...prev, hero]);
        else setBansB(prev => [...prev, hero]);
      } else {
        if (team === 'A') setPicksA(prev => [...prev, hero]);
        else setPicksB(prev => [...prev, hero]);
      }
      setCurrentTurn(prev => prev + 1);
      setSearch('');
    };
  
    const resetDraft = () => {
      setBansA([]); setBansB([]); setPicksA([]); setPicksB([]);
      setCurrentTurn(0); setSearch(''); setRoleFilter('All');
    };
  
    // Winrate calculation based on tier, role composition, and synergy
    const calcTeamScore = (picks) => {
      if (picks.length === 0) return 0;
      const tierScore = { S: 10, A: 8, B: 6, C: 4 };
      const roleBonus = (picks) => {
        const roles = picks.map(h => h.role);
        let bonus = 0;
        if (roles.includes('Tank')) bonus += 5;
        if (roles.includes('Support')) bonus += 4;
        if (roles.includes('Marksman')) bonus += 4;
        if (roles.filter(r => r === 'Assassin').length >= 2) bonus += 3;
        if (roles.filter(r => r === 'Mage').length >= 1) bonus += 3;
        const unique = new Set(roles).size;
        bonus += unique * 2;
        return bonus;
      };
      const base = picks.reduce((sum, h) => sum + (tierScore[h.tier] || 4), 0);
      return base + roleBonus(picks);
    };
  
    const getWinrate = (picksA, picksB) => {
      if (picksA.length === 0 && picksB.length === 0) return { a: 50, b: 50 };
      const scoreA = calcTeamScore(picksA);
      const scoreB = calcTeamScore(picksB);
      const total = scoreA + scoreB;
      if (total === 0) return { a: 50, b: 50 };
      const rawA = Math.round((scoreA / total) * 100);
      return { a: rawA, b: 100 - rawA };
    };
  
    const winrate = getWinrate(picksA, picksB);
  
    const roleIcon = { Marksman:'🏹', Tank:'🛡️', Mage:'🔮', Assassin:'🗡️', Fighter:'⚔️', Support:'💊' };
  
    // SETUP SCREEN
    if (phase === 'setup') {
      return React.createElement('div', { className: 'draft-page' },
        React.createElement('div', { className: 'page-header' },
          React.createElement('div', { className: 'container' },
            React.createElement('h1', { className: 'section-title' }, '⚔ Draft Pick'),
            React.createElement('p', { className: 'page-subtitle' }, 'Simulasi draft pick Mobile Legends — ban hero, pick team, dan lihat prediksi winrate')
          )
        ),
        React.createElement('div', { className: 'container' },
          React.createElement('div', { className: 'draft-setup' },
            React.createElement('div', { className: 'draft-setup-card' },
              React.createElement('div', { className: 'setup-vs' },
                React.createElement('div', { className: 'setup-team setup-team-a' },
                  React.createElement('div', { className: 'setup-team-icon' }, '🔵'),
                  React.createElement('label', null, 'Nama Team A'),
                  React.createElement('input', {
                    type: 'text', value: teamAName, maxLength: 20,
                    onChange: (e) => setTeamAName(e.target.value),
                    className: 'setup-input'
                  })
                ),
                React.createElement('div', { className: 'setup-vs-badge' }, 'VS'),
                React.createElement('div', { className: 'setup-team setup-team-b' },
                  React.createElement('div', { className: 'setup-team-icon' }, '🔴'),
                  React.createElement('label', null, 'Nama Team B'),
                  React.createElement('input', {
                    type: 'text', value: teamBName, maxLength: 20,
                    onChange: (e) => setTeamBName(e.target.value),
                    className: 'setup-input'
                  })
                )
              ),
              React.createElement('div', { className: 'setup-info' },
                React.createElement('h3', null, '◈ Format Draft'),
                React.createElement('div', { className: 'setup-format' },
                  [
                    { label: '6 Ban', desc: '3 per team, bergantian', icon: '🚫' },
                    { label: '10 Pick', desc: '5 per team, format snake', icon: '✅' },
                    { label: 'Prediksi', desc: 'Winrate otomatis dihitung', icon: '📊' },
                  ].map((item, i) =>
                    React.createElement('div', { key: i, className: 'setup-format-item' },
                      React.createElement('span', { className: 'sf-icon' }, item.icon),
                      React.createElement('div', null,
                        React.createElement('p', { className: 'sf-label' }, item.label),
                        React.createElement('p', { className: 'sf-desc' }, item.desc)
                      )
                    )
                  )
                )
              ),
              React.createElement('button', {
                className: 'btn btn-primary btn-start-draft',
                onClick: () => { resetDraft(); setPhase('draft'); }
              }, '⚔ Mulai Draft Pick')
            )
          )
        )
      );
    }
  
    // DRAFT SCREEN
    const TeamPanel = ({ team, name, bans, picks, isActive, color }) =>
      React.createElement('div', { className: 'team-panel team-panel-' + color },
        React.createElement('div', { className: 'tp-header' },
          React.createElement('span', { className: 'tp-dot tp-dot-' + color }),
          React.createElement('h3', { className: 'tp-name' }, name),
          isActive && currentStep && React.createElement('span', { className: 'tp-turn-badge ' + (currentStep.action === 'ban' ? 'turn-ban' : 'turn-pick') },
            currentStep.action === 'ban' ? '🚫 BAN' : '✅ PICK'
          )
        ),
        React.createElement('div', { className: 'tp-section' },
          React.createElement('p', { className: 'tp-label' }, '🚫 BANNED (' + bans.length + '/3)'),
          React.createElement('div', { className: 'tp-slots' },
            [0,1,2].map(i =>
              React.createElement('div', { key: i, className: 'tp-slot tp-slot-ban ' + (bans[i] ? 'filled' : 'empty') },
                bans[i]
                  ? React.createElement('img', { src: bans[i].avatar, alt: bans[i].name,
                      onError: (e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + bans[i].name + '&background=0c1028&color=ff2d55&size=60&bold=true'; }
                    })
                  : React.createElement('span', { className: 'slot-num' }, i + 1)
              )
            )
          )
        ),
        React.createElement('div', { className: 'tp-section' },
          React.createElement('p', { className: 'tp-label' }, '✅ PICKS (' + picks.length + '/5)'),
          React.createElement('div', { className: 'tp-picks' },
            [0,1,2,3,4].map(i =>
              React.createElement('div', { key: i, className: 'tp-pick-slot ' + (picks[i] ? 'filled' : 'empty') },
                picks[i]
                  ? React.createElement(React.Fragment, null,
                      React.createElement('img', { src: picks[i].avatar, alt: picks[i].name,
                        onError: (e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + picks[i].name + '&background=0c1028&color=00d4ff&size=80&bold=true'; }
                      }),
                      React.createElement('div', { className: 'pick-slot-info' },
                        React.createElement('p', { className: 'pick-slot-name' }, picks[i].name),
                        React.createElement('span', { className: 'badge role-' + picks[i].role.toLowerCase() }, picks[i].role)
                      )
                    )
                  : React.createElement('div', { className: 'empty-pick' },
                      React.createElement('span', null, i + 1)
                    )
              )
            )
          )
        ),
        isDraftDone && React.createElement('div', { className: 'winrate-display winrate-' + color },
          React.createElement('p', { className: 'wr-label' }, 'PREDIKSI WINRATE'),
          React.createElement('div', { className: 'wr-number' }, (color === 'blue' ? winrate.a : winrate.b) + '%'),
          React.createElement('div', { className: 'wr-bar-wrap' },
            React.createElement('div', {
              className: 'wr-bar wr-bar-' + color,
              style: { width: (color === 'blue' ? winrate.a : winrate.b) + '%' }
            })
          )
        )
      );
  
    return React.createElement('div', { className: 'draft-page' },
      React.createElement('div', { className: 'page-header' },
        React.createElement('div', { className: 'container' },
          React.createElement('div', { className: 'draft-page-header-row' },
            React.createElement('div', null,
              React.createElement('h1', { className: 'section-title' }, '⚔ Draft Pick'),
              React.createElement('p', { className: 'page-subtitle' }, isDraftDone ? 'Draft selesai — lihat prediksi winrate di bawah' : (currentStep ? (currentStep.team === 'A' ? teamAName : teamBName) + ' sedang ' + (currentStep.action === 'ban' ? 'BAN' : 'PICK') : ''))
            ),
            React.createElement('div', { className: 'draft-header-btns' },
              React.createElement('button', { className: 'btn-draft-reset', onClick: resetDraft }, '↺ Reset'),
              React.createElement('button', { className: 'btn-draft-back', onClick: () => { resetDraft(); setPhase('setup'); } }, '← Setup')
            )
          )
        )
      ),
  
      React.createElement('div', { className: 'container' },
        React.createElement('div', { className: 'draft-layout' },
  
          // Team A
          React.createElement(TeamPanel, {
            team: 'A', name: teamAName, bans: bansA, picks: picksA,
            isActive: currentStep && currentStep.team === 'A',
            color: 'blue'
          }),
  
          // Center — hero pool
          React.createElement('div', { className: 'draft-center' },
            !isDraftDone && currentStep && React.createElement('div', { className: 'draft-current-info ' + (currentStep.action === 'ban' ? 'info-ban' : 'info-pick') },
              React.createElement('span', { className: 'dci-icon' }, currentStep.action === 'ban' ? '🚫' : '✅'),
              React.createElement('div', null,
                React.createElement('p', { className: 'dci-team' }, currentStep.team === 'A' ? teamAName : teamBName),
                React.createElement('p', { className: 'dci-action' }, currentStep.action === 'ban' ? 'Pilih hero untuk di-BAN' : 'Pilih hero untuk di-PICK'),
                React.createElement('p', { className: 'dci-turn' }, 'Turn ' + (currentTurn + 1) + ' / ' + draftOrder.length)
              )
            ),
  
            isDraftDone && React.createElement('div', { className: 'draft-done-banner' },
              React.createElement('div', { className: 'ddb-title' }, '◈ Draft Selesai!'),
              React.createElement('div', { className: 'ddb-wr' },
                React.createElement('div', { className: 'ddb-wr-bar-wrap' },
                  React.createElement('div', { className: 'ddb-wr-blue', style: { width: winrate.a + '%' } },
                    winrate.a > 15 && React.createElement('span', null, teamAName + ' ' + winrate.a + '%')
                  ),
                  React.createElement('div', { className: 'ddb-wr-red', style: { width: winrate.b + '%' } },
                    winrate.b > 15 && React.createElement('span', null, winrate.b + '% ' + teamBName)
                  )
                ),
                React.createElement('p', { className: 'ddb-winner' },
                  winrate.a > winrate.b
                    ? '🏆 ' + teamAName + ' diprediksi menang!'
                    : winrate.b > winrate.a
                    ? '🏆 ' + teamBName + ' diprediksi menang!'
                    : '⚖ Kekuatan seimbang!'
                )
              )
            ),
  
            // Search & Filter
            !isDraftDone && React.createElement(React.Fragment, null,
              React.createElement('div', { className: 'pool-search' },
                React.createElement('span', null, '🔍'),
                React.createElement('input', {
                  type: 'text', placeholder: 'Cari hero...',
                  value: search, onChange: (e) => setSearch(e.target.value),
                  className: 'pool-search-input'
                })
              ),
              React.createElement('div', { className: 'pool-roles' },
                roles.map(r =>
                  React.createElement('button', {
                    key: r,
                    className: 'pool-role-btn ' + (roleFilter === r ? 'active' : ''),
                    onClick: () => setRoleFilter(r)
                  }, r === 'All' ? 'All' : (roleIcon[r] || '') + ' ' + r)
                )
              ),
              React.createElement('div', { className: 'hero-pool' },
                filteredHeroes.map(hero =>
                  React.createElement('div', {
                    key: hero.id,
                    className: 'pool-hero ' + (currentStep && currentStep.action === 'ban' ? 'pool-hero-ban' : 'pool-hero-pick'),
                    onClick: () => handleSelect(hero),
                    onMouseEnter: () => setHoveredHero(hero),
                    onMouseLeave: () => setHoveredHero(null),
                    title: hero.name
                  },
                    React.createElement('img', {
                      src: hero.avatar, alt: hero.name,
                      onError: (e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + hero.name + '&background=0c1028&color=00d4ff&size=60&bold=true'; }
                    }),
                    React.createElement('div', { className: 'pool-hero-overlay' },
                      React.createElement('span', { className: 'pool-hero-name' }, hero.name)
                    ),
                    React.createElement('span', { className: 'pool-tier-dot tier-dot-' + hero.tier.toLowerCase() })
                  )
                )
              )
            ),
  
            isDraftDone && React.createElement('div', { className: 'draft-actions' },
              React.createElement('button', { className: 'btn btn-primary', onClick: resetDraft }, '↺ Draft Ulang'),
              React.createElement('button', { className: 'btn btn-outline', onClick: () => { resetDraft(); setPhase('setup'); } }, '← Setup')
            )
          ),
  
          // Team B
          React.createElement(TeamPanel, {
            team: 'B', name: teamBName, bans: bansB, picks: picksB,
            isActive: currentStep && currentStep.team === 'B',
            color: 'red'
          })
        )
      )
    );
  }