function HeroCard({ hero, index, setPage, setSelectedHero }) {
  const roleClass = 'role-' + hero.role.toLowerCase();
  const tierClass = 'tier-' + hero.tier.toLowerCase();
  const diffMap = { 'Easy': 1, 'Medium': 2, 'Hard': 3, 'Very Hard': 4, 'Extreme': 5 };
  const stars = diffMap[hero.difficulty] || 1;

  const handleClick = () => {
    setSelectedHero(hero);
    setPage('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return React.createElement('div', {
    className: 'hero-card',
    onClick: handleClick,
    style: { animationDelay: (index * 0.07) + 's' }
  },
    React.createElement('div', { className: 'hero-card-inner' },
      React.createElement('div', { className: 'hero-card-image' },
        React.createElement('img', {
          src: hero.avatar, alt: hero.name,
          onError: (e) => {
            e.target.src = 'https://ui-avatars.com/api/?name=' + hero.name + '&background=0c1028&color=00d4ff&size=200&bold=true';
          }
        }),
        React.createElement('div', { className: 'hero-card-overlay' },
          React.createElement('span', { className: 'badge ' + tierClass }, 'Tier ' + hero.tier)
        )
      ),
      React.createElement('div', { className: 'hero-card-body' },
        React.createElement('h3', { className: 'hero-name' }, hero.name),
        React.createElement('div', { className: 'hero-meta' },
          React.createElement('span', { className: 'badge ' + roleClass }, hero.role)
        ),
        React.createElement('div', { className: 'hero-specialty' },
          React.createElement('span', { className: 'specialty-label' }, 'Specialty: '),
          React.createElement('span', { className: 'specialty-value' }, hero.specialty)
        ),
        React.createElement('div', { className: 'hero-difficulty' },
          React.createElement('span', { className: 'difficulty-label' }, 'Difficulty: '),
          React.createElement('div', { className: 'difficulty-stars' },
            [1,2,3,4,5].map(s =>
              React.createElement('span', { key: s, className: 'star ' + (s <= stars ? 'filled' : '') }, '★')
            )
          )
        )
      ),
      React.createElement('div', { className: 'hero-card-footer' },
        React.createElement('span', { className: 'view-detail' }, 'Lihat Detail'),
        React.createElement('div', { className: 'card-arrow' }, '›')
      )
    )
  );
}