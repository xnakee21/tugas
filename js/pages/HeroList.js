function HeroList({ setPage, setSelectedHero }) {
  const [search, setSearch] = React.useState('');
  const [selectedRole, setSelectedRole] = React.useState('All');
  const [selectedTier, setSelectedTier] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('name');

  const roles = ['All', 'Marksman', 'Tank', 'Mage', 'Assassin', 'Fighter', 'Support'];
  const tiers = ['All', 'S', 'A', 'B', 'C'];

  const filtered = React.useMemo(() => {
    let result = [...heroesData];
    if (search) {
      result = result.filter(h =>
        h.name.toLowerCase().includes(search.toLowerCase()) ||
        h.specialty.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (selectedRole !== 'All') result = result.filter(h => h.role === selectedRole);
    if (selectedTier !== 'All') result = result.filter(h => h.tier === selectedTier);
    if (sortBy === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === 'tier') {
      const tierOrder = { S: 0, A: 1, B: 2, C: 3 };
      result.sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier]);
    } else if (sortBy === 'difficulty') {
      const dOrder = { Easy: 1, Medium: 2, Hard: 3, 'Very Hard': 4, Extreme: 5 };
      result.sort((a, b) => dOrder[a.difficulty] - dOrder[b.difficulty]);
    }
    return result;
  }, [search, selectedRole, selectedTier, sortBy]);

  const resetFilters = () => {
    setSearch('');
    setSelectedRole('All');
    setSelectedTier('All');
  };

  const hasFilter = selectedRole !== 'All' || selectedTier !== 'All' || search;

  return React.createElement('div', { className: 'herolist-page' },
    React.createElement('div', { className: 'page-header' },
      React.createElement('div', { className: 'container' },
        React.createElement('h1', { className: 'section-title' }, '🗡️ Semua Hero'),
        React.createElement('p', { className: 'page-subtitle' }, 'Browse ' + heroesData.length + ' hero dengan build, lore, dan tips gameplay')
      )
    ),

    React.createElement('div', { className: 'container' },

      // Filter Panel
      React.createElement('div', { className: 'filter-panel' },
        React.createElement('div', { className: 'search-box' },
          React.createElement('span', { className: 'search-icon' }, '🔍'),
          React.createElement('input', {
            type: 'text',
            placeholder: 'Cari hero atau specialty...',
            value: search,
            onChange: (e) => setSearch(e.target.value),
            className: 'search-input'
          }),
          search && React.createElement('button', {
            className: 'clear-search',
            onClick: () => setSearch('')
          }, '✕')
        ),

        React.createElement('div', { className: 'filter-row' },
          React.createElement('div', { className: 'filter-group' },
            React.createElement('label', { className: 'filter-label' }, 'Role'),
            React.createElement('div', { className: 'filter-buttons' },
              roles.map(role =>
                React.createElement('button', {
                  key: role,
                  className: 'filter-btn ' + (selectedRole === role ? 'active' : ''),
                  onClick: () => setSelectedRole(role)
                }, role)
              )
            )
          ),

          React.createElement('div', { className: 'filter-group' },
            React.createElement('label', { className: 'filter-label' }, 'Tier'),
            React.createElement('div', { className: 'filter-buttons' },
              tiers.map(tier =>
                React.createElement('button', {
                  key: tier,
                  className: 'filter-btn ' + (selectedTier === tier ? 'active' : '') + (tier !== 'All' ? ' tier-btn-' + tier.toLowerCase() : ''),
                  onClick: () => setSelectedTier(tier)
                }, tier !== 'All' ? 'Tier ' + tier : tier)
              )
            )
          ),

          React.createElement('div', { className: 'filter-group filter-sort' },
            React.createElement('label', { className: 'filter-label' }, 'Sort'),
            React.createElement('select', {
              className: 'sort-select',
              value: sortBy,
              onChange: (e) => setSortBy(e.target.value)
            },
              React.createElement('option', { value: 'name' }, 'A–Z'),
              React.createElement('option', { value: 'tier' }, 'Tier Terbaik'),
              React.createElement('option', { value: 'difficulty' }, 'Termudah')
            )
          )
        )
      ),

      // Results info
      React.createElement('div', { className: 'results-info' },
        React.createElement('span', { className: 'results-count' }, filtered.length + ' hero ditemukan'),
        hasFilter && React.createElement('button', {
          className: 'reset-filters',
          onClick: resetFilters
        }, 'Reset Filter')
      ),

      // Grid
      filtered.length > 0
        ? React.createElement('div', { className: 'hero-grid-full' },
            filtered.map((hero, i) =>
              React.createElement(HeroCard, {
                key: hero.id,
                hero: hero,
                index: i,
                setPage: setPage,
                setSelectedHero: setSelectedHero
              })
            )
          )
        : React.createElement('div', { className: 'no-results' },
            React.createElement('span', { className: 'no-results-icon' }, '🔍'),
            React.createElement('h3', null, 'Tidak ada hero ditemukan'),
            React.createElement('p', null, 'Coba ubah filter atau kata kunci pencarian')
          )
    )
  );
}