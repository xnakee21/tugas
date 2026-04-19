function BuildItem({ item, index }) {
  const itemIcons = {
    "Attack": "⚔️", "Magic": "✨", "Defense": "🛡️",
    "Lifesteal": "💉", "Penetration": "🔱", "Hybrid": "⚡"
  };

  return React.createElement('div', {
    className: 'build-item',
    style: { animationDelay: (index * 0.1) + 's' }
  },
    React.createElement('div', { className: 'build-item-icon' },
      React.createElement('span', null, itemIcons[item.type] || '⚔️')
    ),
    React.createElement('div', { className: 'build-item-info' },
      React.createElement('h4', { className: 'build-item-name' }, item.name),
      React.createElement('p', { className: 'build-item-desc' }, item.desc)
    ),
    React.createElement('div', { className: 'build-item-type' },
      React.createElement('span', { className: 'build-type-badge' }, item.type)
    )
  );
}