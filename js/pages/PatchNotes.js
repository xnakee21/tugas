const patchData = [
    {
      version: "1.9.20",
      date: "Maret 2026",
      tag: "TERBARU",
      tagClass: "patch-tag-new",
      highlights: ["Valentina nerf besar", "Fanny buff cable energy", "Moskov silence buff", "Item Endless Battle adjust"],
      changes: [
        {
          category: "Hero Buff",
          categoryClass: "cat-buff",
          items: [
            { hero: "Fanny", type: "BUFF", desc: "Steel Cable (Skill 2): Energy cost saat mengenai dinding dikurangi 20 → 15. Memungkinkan combo cable lebih panjang dan lebih forgiving untuk pemain yang baru belajar." },
            { hero: "Layla", type: "BUFF", desc: "Destruction Rush (Ultimate): Damage meningkat dari 400-900 → 450-1050 pada semua level. Range ultimate meningkat 10% membuatnya semakin susah dihindari." },
            { hero: "Moskov", type: "BUFF", desc: "Abyss Walker (Skill 1): Silence duration meningkat 0.5s → 0.8s saat mengenai musuh di dekat dinding. Passive Spear of Quiescence: jarak pierce meningkat." },
            { hero: "Rafaela", type: "BUFF", desc: "Holy Healing (Skill 1): Heal base meningkat 15% pada semua level. Movement speed bonus meningkat dari 30% → 40%." },
            { hero: "Belerick", type: "BUFF", desc: "Nature's Shield (Skill 2): Shield amount meningkat 20%. Passive Lament: damage balik meningkat dari 30 → 40 per hit." }
          ]
        },
        {
          category: "Hero Nerf",
          categoryClass: "cat-nerf",
          items: [
            { hero: "Valentina", type: "NERF", desc: "Primal Darkness (Ultimate): Cooldown meningkat 40s → 52s. Durasi transform berkurang 1 detik. EXP dari passive Primal Force dikurangi 10% agar tidak terlalu cepat level up." },
            { hero: "Chou", type: "NERF", desc: "The Way of Dragon (Ultimate): Physical attack ratio dikurangi 5%. Cooldown meningkat 2 detik di semua level." },
            { hero: "Atlas", type: "NERF", desc: "Fatal Links (Ultimate): Chain range dikurangi 10%. Cooldown meningkat 60s → 65s. Tujuan untuk membuat positioning lebih penting." },
            { hero: "Benedetta", type: "NERF", desc: "Elapsed Daytime (Passive): Shadow strike damage dikurangi 8%. Alecto: Final Blow (Ultimate): Stun duration 1.2s → 1.0s." }
          ]
        },
        {
          category: "Item Adjustment",
          categoryClass: "cat-adjust",
          items: [
            { hero: "Endless Battle", type: "ADJUST", desc: "True damage dari passive dikurangi 60% → 55% physical attack. HP bonus meningkat 300 → 350. Cooldown passive 10s → 8s." },
            { hero: "Malefic Roar", type: "ADJUST", desc: "Armor penetration vs turret meningkat 40% → 45%. Physical attack meningkat 40 → 45." }
          ]
        }
      ]
    },
    {
      version: "1.9.18",
      date: "Februari 2026",
      tag: "SEBELUMNYA",
      tagClass: "patch-tag-stable",
      highlights: ["Khufra nerf dominance", "Angela buff global ult", "Karrie passive buff", "Ranked season baru"],
      changes: [
        {
          category: "Hero Buff",
          categoryClass: "cat-buff",
          items: [
            { hero: "Karrie", type: "BUFF", desc: "Lightwheel Mark (Passive): True damage stack dari 5 serangan → 4 serangan pada target yang sama. Peningkatan signifikan untuk burst damage di early-mid game." },
            { hero: "Angela", type: "BUFF", desc: "Heartguard (Ultimate): Cast range menjadi global (sebelumnya 1000 unit). Shield amount meningkat 20%. Angela kini bisa backup carry dari mana saja di peta." },
            { hero: "Pharsa", type: "BUFF", desc: "Feathered Air Strike (Ultimate): Jumlah serangan udara 6 → 8. Damage per serangan tetap namun total damage meningkat signifikan." },
            { hero: "Brody", type: "BUFF", desc: "Abyss Corrosion (Passive): Stack mark saat ini bisa bertahan 6s → 8s sebelum hilang. Lebih mudah untuk full stack sebelum ultimate." }
          ]
        },
        {
          category: "Hero Nerf",
          categoryClass: "cat-nerf",
          items: [
            { hero: "Khufra", type: "NERF", desc: "Bouncing Ball (Skill 2): Armor bonus saat rolling dikurangi 700 → 500 magic defense. Radius pantulan berkurang 10%. Masih kuat sebagai anti-blink tetapi lebih mudah dihentikan." },
            { hero: "Wanwan", type: "NERF", desc: "Crossbow of Tang (Ultimate): Attack speed bonus 500% → 450%. Durasi berkurang 0.5 detik. Tujuan untuk memberi musuh sedikit lebih banyak waktu untuk merespons." },
            { hero: "Paquito", type: "NERF", desc: "Champ Stance (Passive): Stack requirement 4 → 5 skill uses. Enhanced skill window berkurang 0.5 detik. Masih kuat tetapi membutuhkan rotasi yang lebih presisi." }
          ]
        },
        {
          category: "System Update",
          categoryClass: "cat-adjust",
          items: [
            { hero: "Ranked Season", type: "ADJUST", desc: "Season baru dimulai. Soft reset untuk semua rank. Mythic Glory diubah ke sistem Mythic Honor Points baru dengan reward eksklusif per milestone." },
            { hero: "Draft Pick", type: "ADJUST", desc: "Mode Draft Pick kini tersedia untuk Platinum ke atas (sebelumnya Diamond+). Boost popularitas mode kompetitif di mid-rank." }
          ]
        }
      ]
    },
    {
      version: "1.9.16",
      date: "Januari 2026",
      tag: "SEBELUMNYA",
      tagClass: "patch-tag-old",
      highlights: ["Tank buff besar", "Assassin nerf meta", "Oracle item rework", "Jungle objective update"],
      changes: [
        {
          category: "Hero Buff",
          categoryClass: "cat-buff",
          items: [
            { hero: "Tigreal", type: "BUFF", desc: "Implosion (Ultimate): Pull radius meningkat 15%. Stun duration saat musuh tertarik meningkat 0.5s. Combo S2+Ult+Flicker semakin devastatif." },
            { hero: "Franco", type: "BUFF", desc: "Iron Tick (Skill 2): HP regen 100 → 150 per detik. Movement speed bonus meningkat 5%. Cooldown berkurang 2 detik di semua level." },
            { hero: "Estes", type: "BUFF", desc: "Blessing of Moon Goddess (Ultimate): Heal per detik meningkat 20%. AOE radius melebar 15%. Scripture passive mengisi lebih cepat." },
            { hero: "Gloo", type: "BUFF", desc: "Stick Stick! (Ultimate): Gloo kini menyerap 15% damage yang diterima carry (sebelumnya tidak ada). Efek slow dari passive meningkat." }
          ]
        },
        {
          category: "Hero Nerf",
          categoryClass: "cat-nerf",
          items: [
            { hero: "Lancelot", type: "NERF", desc: "Phantom Execution (Ultimate): Invincibility duration 1.5s → 1.2s. Total damage berkurang 8%. Tujuan agar lebih mudah di-counter oleh CC yang tepat timing." },
            { hero: "Gusion", type: "NERF", desc: "Incandescence (Ultimate): Cooldown 30s → 36s. Jeda setelah reset skill 1 menjadi lebih panjang 0.2s. Masih kuat di tangan yang mahir." },
            { hero: "Ling", type: "NERF", desc: "Tempest of Blades (Ultimate): Zone area berkurang 10%. Pedang di ground bertahan 15s → 12s. Energi regen di dinding dikurangi 5% per jump." }
          ]
        },
        {
          category: "Item & Jungle",
          categoryClass: "cat-adjust",
          items: [
            { hero: "Oracle", type: "ADJUST", desc: "Shield dan HP regen bonus 25% → 30%. HP meningkat 50. Sangat menguntungkan support dan tank yang bergantung pada shield." },
            { hero: "Blade of Heptaseas", type: "ADJUST", desc: "Passive damage meningkat 240 → 280. Cooldown passive 5s → 4s. Semakin relevan untuk assassin yang butuh burst dari first hit." },
            { hero: "Turtle & Lord", type: "ADJUST", desc: "Turtle memberikan HP regen buff berdurasi lebih lama (30s → 45s). Lord kini bergerak 10% lebih cepat menuju base musuh." }
          ]
        }
      ]
    },
    {
      version: "1.9.14",
      date: "Desember 2025",
      tag: "SEBELUMNYA",
      tagClass: "patch-tag-old",
      highlights: ["Zhuxin hero baru", "Holiday event", "Kagura nerf besar", "Melissa buff zone"],
      changes: [
        {
          category: "New Hero",
          categoryClass: "cat-new",
          items: [
            { hero: "Zhuxin", type: "NEW", desc: "Hero Mage/Support baru dirilis. Kemampuan unik: dapat menanam bunga portal yang mengubah rute pergerakan. Passive memberikan heal AoE setiap beberapa detik. Langsung populer karena utility tinggi." },
            { hero: "Arlott", type: "REWORK", desc: "Arlott mendapat partial rework. Skill 1 baru: Demonic Slash memberikan dash pendek + mark. Ultimate sekarang bisa reset saat membunuh musuh yang ber-mark. Win rate meningkat 6% pasca rework." }
          ]
        },
        {
          category: "Hero Buff",
          categoryClass: "cat-buff",
          items: [
            { hero: "Natan", type: "BUFF", desc: "Superposition (Passive): Mirror image damage 40% → 50% dari serangan asli. Interference! (Skill 2): Cooldown dikurangi 2 detik." },
            { hero: "Melissa", type: "BUFF", desc: "Muddles Let Go! (Ultimate): Zone radius meningkat 15%. Damage ke musuh yang mencoba masuk zona meningkat 20%. Pick rate naik drastis pasca buff." }
          ]
        },
        {
          category: "Hero Nerf",
          categoryClass: "cat-nerf",
          items: [
            { hero: "Kagura", type: "NERF", desc: "Yin Yang Overturn (Ultimate): Cooldown 38s → 46s di semua level. Seimei Umbrella: slow duration dikurangi 0.3s. Masih S-tier tetapi tidak seoverpowered sebelumnya." },
            { hero: "Lunox", type: "NERF", desc: "Brilliance (Ultimate): Invincibility duration 2.5s → 2.0s. Darkening (Ultimate): Damage ratio dikurangi 5%. Kedua mode sedikit lebih terbatas." },
            { hero: "Claude", type: "NERF", desc: "Blazing Duet (Ultimate): Total peluru berkurang 10%. Movement speed saat ultimate berkurang 5%. Masih sangat kuat di teamfight terbuka." }
          ]
        }
      ]
    }
  ];
  
  function PatchNotes({ setPage }) {
    const [activeVersion, setActiveVersion] = React.useState(0);
    const patch = patchData[activeVersion];
  
    const typeStyle = {
      BUFF: { bg: 'rgba(0,255,136,0.1)', color: '#00ff88', border: 'rgba(0,255,136,0.3)' },
      NERF: { bg: 'rgba(255,45,85,0.1)', color: '#ff2d55', border: 'rgba(255,45,85,0.3)' },
      ADJUST: { bg: 'rgba(255,215,0,0.1)', color: '#ffd700', border: 'rgba(255,215,0,0.3)' },
      NEW: { bg: 'rgba(0,212,255,0.1)', color: '#00d4ff', border: 'rgba(0,212,255,0.3)' },
      REWORK: { bg: 'rgba(196,75,255,0.1)', color: '#c44bff', border: 'rgba(196,75,255,0.3)' }
    };
  
    return React.createElement('div', { className: 'patch-page' },
      React.createElement('div', { className: 'page-header' },
        React.createElement('div', { className: 'container' },
          React.createElement('h1', { className: 'section-title' }, '◈ Patch Notes'),
          React.createElement('p', { className: 'page-subtitle' }, 'Update terbaru dan riwayat perubahan hero, item, dan sistem Mobile Legends: Bang Bang')
        )
      ),
      React.createElement('div', { className: 'container' },
        React.createElement('div', { className: 'patch-layout' },
  
          React.createElement('aside', { className: 'patch-sidebar' },
            React.createElement('h3', { className: 'patch-sidebar-title' }, 'Versi Patch'),
            patchData.map((p, i) =>
              React.createElement('div', {
                key: i,
                className: 'patch-version-btn ' + (activeVersion === i ? 'active' : ''),
                onClick: () => setActiveVersion(i)
              },
                React.createElement('div', { className: 'pv-top' },
                  React.createElement('span', { className: 'pv-number' }, p.version),
                  React.createElement('span', { className: 'patch-tag ' + p.tagClass }, p.tag)
                ),
                React.createElement('span', { className: 'pv-date' }, p.date),
                React.createElement('div', { className: 'pv-highlights' },
                  p.highlights.slice(0, 2).map((h, j) =>
                    React.createElement('p', { key: j, className: 'pv-hl' }, h)
                  )
                )
              )
            )
          ),
  
          React.createElement('main', { className: 'patch-content' },
            React.createElement('div', { className: 'patch-header-card' },
              React.createElement('div', { className: 'patch-header-top' },
                React.createElement('div', null,
                  React.createElement('div', { className: 'patch-version-label' }, 'PATCH VERSION'),
                  React.createElement('h2', { className: 'patch-version-big' }, patch.version)
                ),
                React.createElement('div', { className: 'patch-meta' },
                  React.createElement('span', { className: 'patch-tag ' + patch.tagClass }, patch.tag),
                  React.createElement('span', { className: 'patch-date-big' }, patch.date)
                )
              ),
              React.createElement('div', { className: 'patch-highlights-list' },
                React.createElement('p', { className: 'ph-label' }, '◆ Highlights Utama'),
                React.createElement('div', { className: 'ph-items' },
                  patch.highlights.map((h, i) =>
                    React.createElement('span', { key: i, className: 'ph-item' }, h)
                  )
                )
              )
            ),
  
            patch.changes.map((cat, ci) =>
              React.createElement('div', { key: ci, className: 'patch-category' },
                React.createElement('h3', { className: 'patch-cat-title ' + cat.categoryClass }, cat.category),
                React.createElement('div', { className: 'patch-items' },
                  cat.items.map((item, ii) => {
                    const tc = typeStyle[item.type] || typeStyle.ADJUST;
                    return React.createElement('div', { key: ii, className: 'patch-item' },
                      React.createElement('div', { className: 'pi-header' },
                        React.createElement('span', { className: 'pi-hero-name' }, item.hero),
                        React.createElement('span', {
                          className: 'pi-type-badge',
                          style: { background: tc.bg, color: tc.color, border: '1px solid ' + tc.border }
                        }, item.type)
                      ),
                      React.createElement('p', { className: 'pi-desc' }, item.desc)
                    );
                  })
                )
              )
            )
          )
        )
      )
    );
  }