const heroesData = [


  {
    id: 1, name: "Wanwan", role: "Marksman", specialty: "Reap / Burst", tier: "S", difficulty: "Hard",
    avatar: "wanwan.jpg",
    youtubeId: "https://www.youtube.com/embed/XwcplgCjLEE",
    lore: "Wanwan adalah pemburu dari keluarga Tang, keluarga bounty hunter legendaris di dunia timur Land of Dawn. Sejak kecil ia telah dilatih seni melempar pisau dan teknik ninja tingkat tinggi. Wanwan memiliki kepribadian ceria dan penuh semangat, namun di balik senyumnya tersimpan kemampuan bertarung yang luar biasa. Ia berkelana ke Land of Dawn untuk membuktikan bahwa keluarga Tang adalah yang terbaik.",
    skills: [
      { name: "Swallow's Path", type: "Skill 1", desc: "Wanwan melempar pisau berbentuk salip yang bisa melambung ke musuh dan mengekspos titik lemah mereka." },
      { name: "Tiger Pace", type: "Skill 2", desc: "Wanwan melompat ke arah yang dituju sambil menjadi kebal terhadap serangan sejenak." },
      { name: "Crossbow of Tang", type: "Ultimate", desc: "Wanwan mengaktifkan crossbow otomatis yang menyerang target secara terus-menerus. Hanya aktif setelah semua weakness point musuh terekspos." }
    ],
    recommendedBuild: [
      { name: "Swift Boots", type: "Attack", desc: "Attack speed untuk expose weakness lebih cepat" },
      { name: "Windtalker", type: "Attack", desc: "Attack speed dan movement speed" },
      { name: "Berserker's Fury", type: "Attack", desc: "Critical damage tinggi" },
      { name: "Scarlet Phantom", type: "Attack", desc: "Attack speed dan crit rate" },
      { name: "Haas's Claws", type: "Lifesteal", desc: "Lifesteal untuk sustain saat ultimate" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration untuk late game" }
    ],
    emblem: "Marksman Emblem - Electro Flash / Weakness Finder", spell: "Flicker / Sprint",
    tips: "Di meta 2026, Wanwan sangat dominan karena ultimate-nya tidak bisa di-interrupt. Expose semua weakness point secepat mungkin lalu aktifkan ultimate saat teamfight. Pelajari posisi weakness setiap hero.",
    counter: ["Burst assassin yang bisa kill sebelum ultimate aktif", "Hero dengan banyak CC chain"],
    synergy: ["Atlas", "Tigreal", "Estes"]
  },
  {
    id: 2, name: "Beatrix", role: "Marksman", specialty: "Burst / Poke", tier: "S", difficulty: "Hard",
    avatar: "beatrix.jpg",
    youtubeId: "l5mUE2h3pFU",
    lore: "Beatrix adalah putri dari keluarga senjata Iris yang terkenal di seluruh Land of Dawn. Ia mewarisi kemampuan luar biasa untuk menggunakan berbagai jenis senjata api dengan sempurna. Beatrix membawa empat senjata berbeda - Renner si sniper, Nibiru si shotgun, Bennet si SMG, dan Wesker si cannon. Masing-masing senjata memiliki karakteristik unik yang membuatnya menjadi ancaman dari segala jarak.",
    skills: [
      { name: "Mechanical Genius", type: "Passive", desc: "Beatrix memiliki 4 senjata berbeda dengan skill unik masing-masing: Renner (sniper jauh), Nibiru (shotgun dekat), Bennet (SMG sustained), Wesker (cannon AoE)." },
      { name: "Masterful Gunner", type: "Skill 1", desc: "Beatrix melakukan serangan khusus bergantung senjata yang sedang dipakai." },
      { name: "Tactical Reposition", type: "Skill 2", desc: "Beatrix melompat ke belakang sambil menembakkan tembakan cepat." },
      { name: "One-Minute Transformation", type: "Ultimate", desc: "Beatrix mengganti senjata ke senjata pilihan dengan buff serangan yang meningkat." }
    ],
    recommendedBuild: [
      { name: "Arcane Boots", type: "Magic", desc: "Penetration untuk skill damage Beatrix" },
      { name: "Berserker's Fury", type: "Attack", desc: "Critical damage untuk burst" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration tinggi" },
      { name: "Scarlet Phantom", type: "Attack", desc: "Crit rate dan attack speed" },
      { name: "Haas's Claws", type: "Lifesteal", desc: "Lifesteal untuk sustain" },
      { name: "Blade of Despair", type: "Attack", desc: "Physical attack tertinggi untuk late game" }
    ],
    emblem: "Marksman Emblem - Weakness Finder", spell: "Flicker / Sprint",
    tips: "Di meta 2026, Beatrix sangat fleksibel. Gunakan Renner untuk snipe di awal laning, Nibiru untuk 1v1 dekat, Bennet untuk sustained damage di teamfight, Wesker untuk poke objective.",
    counter: ["Hero yang bisa close gap dengan cepat", "Assassin gap-closer"],
    synergy: ["Tank yang bisa protect Beatrix", "Support dengan CC"]
  },
  {
    id: 3, name: "Karrie", role: "Marksman", specialty: "Reap", tier: "S", difficulty: "Medium",
    avatar: "karrie.jpg",
    youtubeId: "XJ8RKDl3MfU",
    lore: "Karrie adalah seorang gadis petarung dari suku nomaden yang hidup di padang pasir. Sejak kecil ia telah dilatih menggunakan lightwheel, senjata khas sukunya. Karrie kehilangan seluruh sukunya dalam serangan mendadak dan sejak itu ia berkelana mencari balas dendam sambil mengasah kemampuannya hingga tak tertandingi di seluruh Land of Dawn.",
    skills: [
      { name: "Lightwheel Mark", type: "Passive", desc: "Setiap 5 serangan pada target yang sama memberikan true damage berdasarkan HP max musuh - sangat efektif melawan tank." },
      { name: "Spinning Lightwheel", type: "Skill 1", desc: "Karrie melempar lightwheel yang memantul ke beberapa musuh sekaligus." },
      { name: "Phantom Step", type: "Skill 2", desc: "Karrie berdash ke arah yang dituju sambil melempar lightwheel untuk poke." },
      { name: "Speedy Lightwheel", type: "Ultimate", desc: "Karrie memasuki mode dual wielding yang drastis meningkatkan attack speed dan mempercepat stack passive." }
    ],
    recommendedBuild: [
      { name: "Swift Boots", type: "Attack", desc: "Attack speed untuk memaksimalkan passive" },
      { name: "Windtalker", type: "Attack", desc: "Attack speed tinggi" },
      { name: "Scarlet Phantom", type: "Attack", desc: "Attack speed dan crit rate" },
      { name: "Berserker's Fury", type: "Attack", desc: "Critical damage" },
      { name: "Haas's Claws", type: "Lifesteal", desc: "Lifesteal" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration" }
    ],
    emblem: "Marksman Emblem - Electro Flash / Weakness Finder", spell: "Flicker / Sprint",
    tips: "Di meta 2026 yang banyak tank, Karrie menjadi pilihan utama. True damage passive-nya tidak bisa di-counter oleh armor. Focus stack passive secepat mungkin dan aktifkan ultimate saat fight.",
    counter: ["Burst assassin sebelum passive stack", "Hero dengan blink yang susah dikejar"],
    synergy: ["Tank initiator", "Support Angela atau Estes"]
  },
  {
    id: 4, name: "Melissa", role: "Marksman", specialty: "Burst / Protect", tier: "S", difficulty: "Medium",
    avatar: "melissa.jpg",
    youtubeId: "4xHKHFBDSmI",
    lore: "Melissa adalah boneka hidup yang diciptakan oleh penyihir jahat untuk menjadi senjata perang. Namun Melissa memiliki hati sendiri dan memilih untuk bebas. Ia membawa boneka tali misterius Muddles bersamanya ke mana pun ia pergi. Hubungan antara Melissa dan Muddles adalah ikatan jiwa yang tidak bisa dipisahkan oleh siapapun.",
    skills: [
      { name: "Falling!", type: "Passive", desc: "Melissa mendapatkan bonus damage saat menyerang musuh yang berada dalam kondisi tertentu." },
      { name: "Falling!", type: "Skill 1", desc: "Melissa mengirimkan Muddles yang memberikan damage ke musuh yang dilewati." },
      { name: "Tell Me!", type: "Skill 2", desc: "Melissa mendorong musuh terdekat menjauh, cocok untuk self-peel dari assassin." },
      { name: "Muddles, Let's Go!", type: "Ultimate", desc: "Melissa menciptakan zone dengan Muddles yang menolak semua musuh masuk ke dalam area tersebut." }
    ],
    recommendedBuild: [
      { name: "Swift Boots", type: "Attack", desc: "Attack speed dasar" },
      { name: "Windtalker", type: "Attack", desc: "Attack speed dan crit" },
      { name: "Berserker's Fury", type: "Attack", desc: "Critical damage" },
      { name: "Scarlet Phantom", type: "Attack", desc: "Attack speed dan crit rate" },
      { name: "Haas's Claws", type: "Lifesteal", desc: "Lifesteal untuk sustain" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration" }
    ],
    emblem: "Marksman Emblem - Electro Flash / Weakness Finder", spell: "Flicker / Purify",
    tips: "Ultimate Melissa sangat powerful untuk melindungi diri dari assassin. Di meta 2026 yang banyak dive assassin, Melissa bisa solo carry dengan self-peel dari S2 dan ultimate-nya.",
    counter: ["Hero dengan poke jarak jauh yang tidak perlu masuk zone", "Mage AoE dari luar range"],
    synergy: ["Tank aggressive engage", "Support healer"]
  },
  {
    id: 5, name: "Brody", role: "Marksman", specialty: "Burst / Poke", tier: "A", difficulty: "Medium",
    avatar: "brody.jpg",
    youtubeId: "lBb7PJLC7nA",
    lore: "Brody adalah seorang prajurit yang terkena eksperimen misterius yang mengubah lengannya menjadi senjata energi yang berbahaya. Eksperimen tersebut meninggalkan trauma mendalam dan membuat Brody menjadi sosok penyendiri. Namun di balik kesendiriannya, Brody menyimpan tekad baja untuk melindungi orang-orang yang ia sayangi.",
    skills: [
      { name: "Abyss Corrosion", type: "Passive", desc: "Serangan Brody memberikan Abyss Mark pada musuh. Semakin banyak mark, semakin besar damage dari skill Brody." },
      { name: "Abyss Impact", type: "Skill 1", desc: "Brody melemparkan energi ke depan yang memberikan damage dan knockback pada musuh pertama yang terkena." },
      { name: "Corrosive Strike", type: "Skill 2", desc: "Brody melakukan dash ke arah musuh sambil memberikan damage dan menambah Abyss Mark." },
      { name: "Torn-Apart Memory", type: "Ultimate", desc: "Brody melepaskan energi besar ke semua musuh dalam jangkauan yang memberikan damage berdasarkan jumlah Abyss Mark." }
    ],
    recommendedBuild: [
      { name: "Warrior Boots", type: "Defense", desc: "Armor untuk early game" },
      { name: "Corrosion Scythe", type: "Attack", desc: "Attack speed dan slow efek" },
      { name: "Berserker's Fury", type: "Attack", desc: "Critical damage besar" },
      { name: "Scarlet Phantom", type: "Attack", desc: "Crit rate" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration" },
      { name: "Haas's Claws", type: "Lifesteal", desc: "Lifesteal" }
    ],
    emblem: "Marksman Emblem - Weakness Finder", spell: "Flicker / Sprint",
    tips: "Brody adalah marksman dengan burst damage tertinggi berkat passive Abyss Mark. Stack mark sebanyak mungkin sebelum menggunakan ultimate untuk damage maksimal. Cocok untuk solo lane.",
    counter: ["Hero dengan blink yang susah di-stack mark", "Tank berarmor sangat tinggi"],
    synergy: ["Tank engage", "Hero yang bisa immobilize target agar mark mudah di-stack"]
  },
  {
    id: 6, name: "Granger", role: "Marksman", specialty: "Burst / Reap", tier: "A", difficulty: "Medium",
    avatar: "granger.jpg",
    youtubeId: "MNpF-bQwKoM",
    lore: "Granger adalah seorang musisi sekaligus pembunuh bayaran yang menggunakan biola dan senapan sebagai senjatanya. Ia pernah menjadi murid kesayangan Dr. Rooney sebelum semuanya berubah. Kini Granger mengemban misi tersembunyi sambil memainkan melodi kematian dengan biolanya di setiap pertempuran.",
    skills: [
      { name: "Capriccio", type: "Passive", desc: "Setiap beberapa peluru, Granger menembakkan peluru kritis yang memberikan damage jauh lebih tinggi." },
      { name: "Rhapsody", type: "Skill 1", desc: "Granger menembakkan serangkaian peluru ke depan yang bisa menembus beberapa musuh." },
      { name: "Rondo", type: "Skill 2", desc: "Granger melompat ke arah yang dituju sambil menembakkan peluru ke belakang." },
      { name: "Death Sonata", type: "Ultimate", desc: "Granger menembakkan dua tembakan besar berbentuk salib yang memberikan damage masif ke area luas." }
    ],
    recommendedBuild: [
      { name: "Arcane Boots", type: "Magic", desc: "Penetration untuk skill damage" },
      { name: "Berserker's Fury", type: "Attack", desc: "Critical damage untuk passive" },
      { name: "Windtalker", type: "Attack", desc: "Attack speed dan crit" },
      { name: "Scarlet Phantom", type: "Attack", desc: "Crit rate tinggi" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration" },
      { name: "Haas's Claws", type: "Lifesteal", desc: "Lifesteal sustain" }
    ],
    emblem: "Marksman Emblem - Weakness Finder", spell: "Flicker / Execute",
    tips: "Granger sangat kuat di early-mid game. Ultimate-nya bisa digunakan dari jarak jauh untuk snipe musuh yang kabur. Manfaatkan S2 untuk positioning yang aman saat fight.",
    counter: ["Tank berarmor sangat tinggi", "Hero dengan shield besar"],
    synergy: ["Tank initiator", "Support dengan CC"]
  },
  {
    id: 7, name: "Natan", role: "Marksman", specialty: "Burst / Reap", tier: "A", difficulty: "Hard",
    avatar: "natan.jpg",
    youtubeId: "LbAw1ARLXHA",
    lore: "Natan adalah ilmuwan dari masa depan yang datang ke masa kini untuk mencegah kehancuran total Land of Dawn. Ia membawa senjata teknologi masa depan yang jauh melampaui pemahaman orang-orang di zamannya. Natan percaya bahwa dengan mengubah beberapa momen kritis, masa depan yang gelap bisa dicegah.",
    skills: [
      { name: "Superposition", type: "Passive", desc: "Setiap skill Natan menciptakan versi mirror yang menyerang musuh dari arah berlawanan." },
      { name: "Domain of Revelation", type: "Skill 1", desc: "Natan menembakkan proyektil yang memberikan damage dan menandai musuh untuk diserang dari dua arah." },
      { name: "Interference!", type: "Skill 2", desc: "Natan berdash ke arah yang dituju sambil menciptakan mirror image di posisi sebelumnya." },
      { name: "Entropy Loop", type: "Ultimate", desc: "Natan memasuki mode Entropy yang sangat meningkatkan attack speed dan mirror damage." }
    ],
    recommendedBuild: [
      { name: "Swift Boots", type: "Attack", desc: "Attack speed dasar" },
      { name: "Windtalker", type: "Attack", desc: "Attack speed untuk memaksimalkan passive" },
      { name: "Berserker's Fury", type: "Attack", desc: "Critical damage" },
      { name: "Scarlet Phantom", type: "Attack", desc: "Attack speed dan crit" },
      { name: "Haas's Claws", type: "Lifesteal", desc: "Lifesteal" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration" }
    ],
    emblem: "Marksman Emblem - Electro Flash", spell: "Flicker / Sprint",
    tips: "Natan unggul dalam outnumbering musuh dengan mirror image. Gunakan S1 untuk double damage dari dua arah. Di meta 2026, Natan sangat kuat karena pasif mirror-nya menghasilkan damage ekstra yang konsisten.",
    counter: ["Assassin yang bisa one-shot sebelum ultimate", "Hero dengan CC chain"],
    synergy: ["Tank yang bisa protect", "Support Angela yang memberikan shield"]
  },
  {
    id: 8, name: "Moskov", role: "Marksman", specialty: "Reap / Poke", tier: "A", difficulty: "Medium",
    avatar: "moskov.jpg",
    youtubeId: "M_a_y_K",
    lore: "Moskov adalah mantan prajurit kerajaan yang dikhianati oleh atasannya sendiri. Ia memiliki kemampuan teleportasi jarak pendek yang membuatnya sangat sulit untuk ditangkap. Dengan tombak energinya, Moskov bisa menembus beberapa target sekaligus. Kini ia menjadi pembunuh bayaran yang hidup di dunia bawah tanah Land of Dawn.",
    skills: [
      { name: "Spear of Quiescence", type: "Passive", desc: "Serangan normal Moskov menembus dan mengenai musuh di belakangnya jika musuh pertama berdiri dekat dinding." },
      { name: "Abyss Walker", type: "Skill 1", desc: "Moskov blink ke sisi target dan memberikan silence singkat sambil menyerang." },
      { name: "Spear Flip", type: "Skill 2", desc: "Moskov melempar musuh ke udara menggunakan tombaknya sambil melakukan dash." },
      { name: "Spear of Destruction", type: "Ultimate", desc: "Moskov menembakkan tombak energi raksasa yang menembus seluruh map dari ujung ke ujung." }
    ],
    recommendedBuild: [
      { name: "Swift Boots", type: "Attack", desc: "Attack speed" },
      { name: "Windtalker", type: "Attack", desc: "Attack speed dan crit" },
      { name: "Berserker's Fury", type: "Attack", desc: "Critical damage" },
      { name: "Scarlet Phantom", type: "Attack", desc: "Attack speed" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration" },
      { name: "Haas's Claws", type: "Lifesteal", desc: "Lifesteal" }
    ],
    emblem: "Marksman Emblem - Electro Flash / Weakness Finder", spell: "Flicker / Inspire",
    tips: "Moskov sangat kuat di dekat dinding karena passive piercing-nya. Selalu coba posisikan diri di dekat dinding untuk serangan tembus. Ultimate bisa dipakai untuk snipe musuh yang kabur ke base.",
    counter: ["Hero yang tidak berdiri dekat dinding", "Assassin yang bisa blink ke Moskov"],
    synergy: ["Tank yang bisa push musuh ke dinding", "Khufra yang bisa wall push"]
  },
  {
    id: 9, name: "Layla", role: "Marksman", specialty: "Reap", tier: "B", difficulty: "Easy",
    avatar: "layla.jpg",
    youtubeId: "pUfQnK9bNgA",
    lore: "Layla adalah seorang gadis muda yang lahir di Eruditio, kota teknologi tercanggih di Land of Dawn. Sejak kecil, Layla memiliki ketertarikan besar terhadap mekanik dan fisika energi. Ayahnya, seorang ilmuwan terkemuka, mengajarkan Layla cara mengoperasikan senjata berbasis energi. Saat Eruditio diserang oleh pasukan jahat, Layla menggunakan pistol energi ciptaan ayahnya untuk melindungi kota tercintanya.",
    skills: [
      { name: "Malefic Bomb", type: "Skill 1", desc: "Layla menembakkan bom energi yang meledak saat mengenai musuh, memberikan damage fisik." },
      { name: "Void Projectile", type: "Skill 2", desc: "Layla menembakkan proyektil yang membuat musuh melambat dan memberikan damage." },
      { name: "Destruction Rush", type: "Ultimate", desc: "Layla menembakkan laser energi raksasa ke arah musuh dengan jangkauan sangat jauh." }
    ],
    recommendedBuild: [
      { name: "Windtalker", type: "Attack", desc: "Attack speed dan movement speed" },
      { name: "Berserker's Fury", type: "Attack", desc: "Critical chance dan damage" },
      { name: "Scarlet Phantom", type: "Attack", desc: "Attack speed dan crit rate" },
      { name: "Haas's Claws", type: "Lifesteal", desc: "Lifesteal untuk sustain" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration" },
      { name: "Endless Battle", type: "Hybrid", desc: "True damage dan CDR" }
    ],
    emblem: "Marksman Emblem - Electro Flash / Weakness Finder", spell: "Flicker / Purify",
    tips: "Layla memiliki range terpanjang di antara semua marksman. Sangat cocok untuk pemula karena skillnya mudah. Jaga posisi selalu di belakang dan andalkan range untuk poke aman.",
    counter: ["Assassin gap-closer seperti Natalia", "Hero dengan CC kuat"],
    synergy: ["Tigreal", "Atlas", "Franco"]
  },
  {
    id: 10, name: "Miya", role: "Marksman", specialty: "Reap", tier: "B", difficulty: "Easy",
    avatar: "miya.jpg",
    youtubeId: "3lzOhMKlABU",
    lore: "Miya adalah seorang pemanah Elven yang berasal dari Hutan Moonlit. Ia adalah putri dari suku Elven yang dikirim sebagai duta perdamaian ke dunia manusia. Dengan busur bulan sabit yang diwariskan leluhurnya, Miya mampu memanah dengan kecepatan dan akurasi yang luar biasa untuk melindungi hutan dan rakyatnya.",
    skills: [
      { name: "Moon Arrow", type: "Passive", desc: "Setiap serangan Miya memiliki chance untuk menembakkan panah tambahan yang memberikan slow." },
      { name: "Rain of Arrows", type: "Skill 1", desc: "Miya menembakkan hujan panah ke area target, memperlambat dan memberikan damage ke semua musuh di area." },
      { name: "Arrow of Eclipse", type: "Skill 2", desc: "Miya meningkatkan attack speed secara signifikan untuk sementara waktu." },
      { name: "Hidden Moonlight", type: "Ultimate", desc: "Miya menghilang sepenuhnya dan melepas semua efek CC sambil mendapatkan shield." }
    ],
    recommendedBuild: [
      { name: "Swift Boots", type: "Attack", desc: "Attack speed dasar" },
      { name: "Windtalker", type: "Attack", desc: "Attack speed dan movement speed" },
      { name: "Berserker's Fury", type: "Attack", desc: "Critical damage" },
      { name: "Scarlet Phantom", type: "Attack", desc: "Attack speed dan crit" },
      { name: "Haas's Claws", type: "Lifesteal", desc: "Lifesteal untuk sustain" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration" }
    ],
    emblem: "Marksman Emblem - Electro Flash / Weakness Finder", spell: "Flicker / Inspire",
    tips: "Miya adalah marksman yang sangat kuat di late game dengan full build attack speed. Mainkan defensif di early, farm sebanyak mungkin. Ultimate adalah escape tool terbaik saat digank.",
    counter: ["Assassin burst seperti Gusion", "Hero dengan CC panjang"],
    synergy: ["Tank engage", "Support healer Estes atau Angela"]
  },

  {
    id: 11, name: "Tigreal", role: "Tank", specialty: "Crowd Control", tier: "S", difficulty: "Easy",
    avatar: "tigreal.jpg",
    youtubeId: "1d_lHpBFjBk",
    lore: "Tigreal adalah Ksatria Suci dari Kerajaan Moniyan, seorang prajurit tak terkalahkan yang telah mengabdikan hidupnya untuk melindungi rakyat. Dikenal sebagai Harapan Moniyan, Tigreal memiliki tubuh bak baja dan semangat yang tak pernah padam. Setelah pertempuran besar yang menghancurkan sebagian wilayah kerajaan, Tigreal bersumpah untuk menjadi perisai bagi yang lemah.",
    skills: [
      { name: "Attack Wave", type: "Skill 1", desc: "Tigreal mengirimkan gelombang serangan ke depan yang mendorong musuh." },
      { name: "Sacred Hammer", type: "Skill 2", desc: "Tigreal melompat ke target lokasi dan memukul musuh di sekitarnya, memberikan stun singkat." },
      { name: "Implosion", type: "Ultimate", desc: "Tigreal menarik semua musuh di sekitarnya ke tengah, lalu memberikan stun besar kepada semua musuh yang tertarik." }
    ],
    recommendedBuild: [
      { name: "Warrior Boots", type: "Defense", desc: "Armor dan movement speed" },
      { name: "Dominance Ice", type: "Defense", desc: "Mana, armor, dan slow efek musuh" },
      { name: "Athena's Shield", type: "Defense", desc: "Magic defense dan shield besar" },
      { name: "Antique Cuirass", type: "Defense", desc: "HP tinggi dan mengurangi physical damage musuh" },
      { name: "Immortality", type: "Defense", desc: "Resurrection dan extra HP" },
      { name: "Oracle", type: "Defense", desc: "Magic defense dan shield enhancement" }
    ],
    emblem: "Tank Emblem - Fortress / Brave Smite", spell: "Flicker / Vengeance",
    tips: "Di meta 2026, Tigreal masih S-tier karena Combo S2 + Ult + Flicker yang bisa CC seluruh tim musuh. Masuk dengan S2, langsung ult, gunakan Flicker saat ult aktif untuk extend jangkauan pull.",
    counter: ["Hero dengan purify yang bisa melepas CC", "Hero yang bisa escape cepat sebelum ultimate aktif"],
    synergy: ["Layla", "Odette", "Pharsa", "Mage burst apapun"]
  },
  {
    id: 12, name: "Atlas", role: "Tank", specialty: "Crowd Control / Initiator", tier: "S", difficulty: "Hard",
    avatar: "atlas.jpg",
    youtubeId: "E7HUbXlBBqE",
    lore: "Atlas adalah makhluk dari kedalaman lautan yang terbentuk dari ribuan jiwa yang tenggelam. Ia adalah perwujudan dari amarah laut yang menelan kapal-kapal dan awaknya. Atlas mampu menggabungkan dirinya dengan pasangan jiwa kembarnya untuk melepaskan kekuatan laut yang dahsyat. Di meta 2026, Atlas dianggap sebagai tank dengan ultimate terkuat.",
    skills: [
      { name: "Annihilate", type: "Passive", desc: "Saat Atlas berada dalam mode Frigid Breath, serangan normalnya memberikan damage dan slow tambahan." },
      { name: "Frigid Breath", type: "Skill 1", desc: "Atlas memanggil hawa dingin yang memperlambat semua musuh di sekitarnya." },
      { name: "Perfect Match", type: "Skill 2", desc: "Atlas memisahkan diri dari jiwa kembarnya untuk meningkatkan mobilitas dan range engage." },
      { name: "Fatal Links", type: "Ultimate", desc: "Atlas mengikat semua musuh di sekitarnya dengan rantai jiwa dan menyeret mereka ke posisi yang ditentukan - sangat sulit di-counter." }
    ],
    recommendedBuild: [
      { name: "Warrior Boots", type: "Defense", desc: "Armor dasar" },
      { name: "Cursed Helmet", type: "Defense", desc: "HP tinggi dan magic damage pasif" },
      { name: "Antique Cuirass", type: "Defense", desc: "HP dan defense" },
      { name: "Dominance Ice", type: "Defense", desc: "Armor dan CDR" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Athena's Shield", type: "Defense", desc: "Magic defense" }
    ],
    emblem: "Tank Emblem - Fortress / Brave Smite", spell: "Flicker / Petrify",
    tips: "Atlas + Flicker saat ultimate adalah combo yang sangat powerful dan susah di-counter. Gunakan Petrify untuk CC tambahan setelah ultimate. Di meta 2026, Atlas adalah pick prioritas di tournament.",
    counter: ["Hero dengan purify yang bisa lepas dari fatal links"],
    synergy: ["Mage AOE seperti Odette, Valir", "Marksman range tinggi"]
  },
  {
    id: 13, name: "Khufra", role: "Tank", specialty: "Crowd Control / Initiator", tier: "S", difficulty: "Medium",
    avatar: "khufra.jpg",
    youtubeId: "TF-LNBE8gvM",
    lore: "Khufra adalah Pangeran Gurun yang dikutuk menjadi mumi ribuan tahun lalu oleh seorang penyihir jahat. Ia pernah menjadi penguasa terkuat di padang pasir dengan bala tentara yang tak terhitung jumlahnya. Kini setelah bangkit dari tidur panjangnya, Khufra mencari kekuatan untuk membalas dendam pada mereka yang telah mengkhianatinya.",
    skills: [
      { name: "Tyrant's Revenge", type: "Skill 1", desc: "Khufra melompat jauh ke arah yang dituju dengan perban, mendarat dan memberikan knockup ke musuh di sekitar." },
      { name: "Bouncing Ball", type: "Skill 2", desc: "Khufra membungkus dirinya dalam perban menjadi bola yang memantul dan memblokir semua blink skill musuh." },
      { name: "Tyrant's Rage", type: "Ultimate", desc: "Khufra mendorong semua musuh di sekitarnya ke arah dinding, memberikan stun jika musuh menghantam dinding." }
    ],
    recommendedBuild: [
      { name: "Warrior Boots", type: "Defense", desc: "Armor dan movement speed" },
      { name: "Cursed Helmet", type: "Defense", desc: "HP dan magic damage" },
      { name: "Antique Cuirass", type: "Defense", desc: "HP dan defense" },
      { name: "Dominance Ice", type: "Defense", desc: "Armor dan slow" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Athena's Shield", type: "Defense", desc: "Magic defense" }
    ],
    emblem: "Tank Emblem - Fortress / Brave Smite", spell: "Flicker / Vengeance",
    tips: "Di meta 2026, Khufra adalah must-pick karena banyaknya hero blink. Skill 2-nya akan otomatis memblokir blink seperti Ling, Fanny, Lancelot. Gunakan S1 untuk engage, S2 untuk counter escape.",
    counter: ["Hero non-blink yang tidak terpengaruh skill 2"],
    synergy: ["Marksman range", "Mage burst damage", "Assassin yang butuh setup"]
  },
  {
    id: 14, name: "Franco", role: "Tank", specialty: "Crowd Control / Initiator", tier: "A", difficulty: "Medium",
    avatar: "franco.jpg",
    youtubeId: "KqUJpJpMNpE",
    lore: "Franco adalah seorang bajak laut dari utara yang terkenal dengan kekuatan luar biasa dan pengaitnya yang legendaris. Dahulu ia adalah navigator terbaik di lautan utara, namun sebuah badai ajaib membawanya ke Land of Dawn. Tidak mengenal jalan pulang, Franco memutuskan untuk menjadi petarung bayaran yang ditakuti.",
    skills: [
      { name: "Arrowing Hook", type: "Skill 1", desc: "Franco melempar pengait ke arah yang dituju. Jika mengenai musuh, musuh tertarik paksa ke posisi Franco." },
      { name: "Iron Tick", type: "Skill 2", desc: "Franco meningkatkan movement speed dan memberikan regen HP yang signifikan." },
      { name: "Bloody Hunt", type: "Ultimate", desc: "Franco menekan musuh ke tanah dan memberikan serangkaian serangan kapak beruntun selama beberapa detik." }
    ],
    recommendedBuild: [
      { name: "Warrior Boots", type: "Defense", desc: "Armor dan movement speed" },
      { name: "Dominance Ice", type: "Defense", desc: "Armor dan memperlambat musuh" },
      { name: "Athena's Shield", type: "Defense", desc: "Magic defense" },
      { name: "Antique Cuirass", type: "Defense", desc: "HP dan defense" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Cursed Helmet", type: "Defense", desc: "HP dan magic damage pasif" }
    ],
    emblem: "Tank Emblem - Fortress / Brave Smite", spell: "Flicker / Sprint",
    tips: "Akurasi hook adalah kunci Franco. Latih di Practice Mode setiap hari. Di meta 2026, Franco sering dipasangkan dengan satu assassin atau mage burst untuk kill dari hook yang akurat.",
    counter: ["Hero dengan purify", "Hero mobile yang sulit di-hook seperti Lancelot"],
    synergy: ["Gusion", "Lunox", "Odette", "Hero yang bisa followup setelah hook"]
  },
  {
    id: 15, name: "Gloo", role: "Tank", specialty: "Crowd Control / Initiator", tier: "A", difficulty: "Medium",
    avatar: "gloo.jpg",
    youtubeId: "h2zDBuQ76Gg",
    lore: "Gloo adalah makhluk slime misterius yang berasal dari Hutan Enchanted. Tidak ada yang tahu asal usul pastinya, namun Gloo memiliki kemampuan unik untuk membelah diri dan menempelkan dirinya ke musuh. Sifatnya yang ceria dan nakal membuatnya menjadi sosok yang disukai kawan namun sangat mengganggu bagi lawan.",
    skills: [
      { name: "Slam", type: "Passive", desc: "Jika Gloo menempel ke musuh menggunakan ultimate, semua serangan normalnya memperlambat target." },
      { name: "Slam!", type: "Skill 1", desc: "Gloo melempar gumpalan lendir ke depan yang membelah menjadi beberapa saat mengenai musuh atau dinding." },
      { name: "Pass!", type: "Skill 2", desc: "Gloo melompat ke salah satu gumpalan lendir kecil yang sudah terlempar." },
      { name: "Stick, Stick!", type: "Ultimate", desc: "Gloo menempel ke hero musuh, berbagi damage yang diterima dan mencegah musuh menggunakan beberapa spell." }
    ],
    recommendedBuild: [
      { name: "Warrior Boots", type: "Defense", desc: "Armor dasar" },
      { name: "Cursed Helmet", type: "Defense", desc: "HP dan magic damage pasif" },
      { name: "Antique Cuirass", type: "Defense", desc: "HP dan defense" },
      { name: "Dominance Ice", type: "Defense", desc: "Armor dan CDR" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Oracle", type: "Defense", desc: "HP regen dan shield enhancement" }
    ],
    emblem: "Tank Emblem - Fortress / Brave Smite", spell: "Vengeance / Flicker",
    tips: "Tempelkan ultimate ke hero carry musuh untuk mengacaukan dan membagi damage ke Gloo. Gunakan Vengeance saat menempel agar musuh menerima damage balik. Di meta 2026, Gloo sering counter marksman carry.",
    counter: ["Hero dengan purify yang bisa melepas Gloo"],
    synergy: ["Hero burst yang bisa fokus target yang sedang ditempel Gloo"]
  },
  {
    id: 16, name: "Baxia", role: "Tank", specialty: "Crowd Control / Initiator", tier: "A", difficulty: "Medium",
    avatar: "baxia.jpg",
    youtubeId: "mjHajVqGfvk",
    lore: "Baxia adalah kura-kura raksasa purba yang menjadi bagian dari pasukan legendaris Land of Dawn. Cangkang keras dan tubuhnya yang masif membuatnya hampir tidak bisa ditembus oleh serangan apapun. Baxia menggelinding di medan perang menghancurkan segala sesuatu yang menghalanginya dengan bobot ribuan ton.",
    skills: [
      { name: "Baxia Mark", type: "Passive", desc: "Baxia secara permanen mengurangi efek shield dan HP regen musuh di seluruh peta - sangat powerful melawan hero healer." },
      { name: "Baxia-Shield Unity", type: "Skill 1", desc: "Baxia menggulung dirinya menjadi bola dan meluncur ke arah yang dituju dengan kecepatan tinggi." },
      { name: "Shield of Spirit", type: "Skill 2", desc: "Baxia melempar cangkangnya ke arah musuh yang memberikan damage dan slow." },
      { name: "Tortoise's Puissance", type: "Ultimate", desc: "Baxia meninggalkan jejak api yang memberikan damage dan memperlambat musuh yang melewatinya." }
    ],
    recommendedBuild: [
      { name: "Warrior Boots", type: "Defense", desc: "Armor dasar" },
      { name: "Cursed Helmet", type: "Defense", desc: "HP dan magic damage" },
      { name: "Antique Cuirass", type: "Defense", desc: "HP dan defense" },
      { name: "Dominance Ice", type: "Defense", desc: "Armor dan CDR" },
      { name: "Oracle", type: "Defense", desc: "HP regen" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" }
    ],
    emblem: "Tank Emblem - Fortress / Brave Smite", spell: "Flicker / Vengeance",
    tips: "Baxia adalah hard counter untuk tim yang bergantung pada healing seperti Estes + Uranus. Di meta 2026 yang banyak sustain, Baxia sangat relevan. Passive-nya mengurangi heal seluruh tim musuh.",
    counter: ["Tim yang tidak bergantung pada heal atau shield"],
    synergy: ["Hero yang butuh musuh di-slow untuk setup combo", "Burst mage"]
  },
  {
    id: 17, name: "Belerick", role: "Tank", specialty: "Crowd Control / Protect", tier: "B", difficulty: "Easy",
    avatar: "belerick.jpg",
    youtubeId: "xW-kHbO7MTY",
    lore: "Belerick adalah roh hutan purba yang mengambil wujud fisik untuk melindungi alam dari kehancuran. Tubuhnya terbuat dari akar dan kayu pohon tua yang mengeras selama ribuan tahun. Belerick bergerak lambat tapi setiap serangannya mampu menghancurkan batu karang. Ia adalah perwujudan kekuatan alam yang tidak bisa dibendung.",
    skills: [
      { name: "Lament", type: "Passive", desc: "Saat ally diserang, musuh yang menyerang mereka mendapatkan damage balik dari Belerick." },
      { name: "Wicked Overgrowth", type: "Skill 1", desc: "Belerick menanam benih yang tumbuh dan memberikan slow ke musuh di sekitarnya." },
      { name: "Nature's Shield", type: "Skill 2", desc: "Belerick memberikan shield ke ally yang dipilih dan menandai mereka agar diserang musuh mengenai passive." },
      { name: "Ancient Seed", type: "Ultimate", desc: "Belerick menumbuhkan tanaman besar di area yang memberikan knockup dan damage ke semua musuh." }
    ],
    recommendedBuild: [
      { name: "Warrior Boots", type: "Defense", desc: "Armor dasar" },
      { name: "Cursed Helmet", type: "Defense", desc: "HP dan magic damage" },
      { name: "Oracle", type: "Defense", desc: "HP regen dan shield" },
      { name: "Antique Cuirass", type: "Defense", desc: "HP dan defense" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Athena's Shield", type: "Defense", desc: "Magic defense" }
    ],
    emblem: "Tank Emblem - Fortress", spell: "Vengeance / Flicker",
    tips: "Belerick cocok untuk protect carry yang sering diserang. Gunakan S2 pada marksman untuk memberikan efek retaliasi. Ultimate sangat powerful di area sempit seperti bush atau chokepoint.",
    counter: ["Hero yang menyerang dengan skill bukan serangan normal"],
    synergy: ["Marksman agresif", "Carry yang sering menjadi target"]
  },
  {
    id: 18, name: "Carmilla", role: "Tank", specialty: "Crowd Control / Initiator", tier: "A", difficulty: "Medium",
    avatar: "carmilla.jpg",
    youtubeId: "7mPo5tJ-N9A",
    lore: "Carmilla adalah putri vampir bangsawan yang hidup dalam kegelapan abadi. Ia memiliki kemampuan untuk menyerap shadow musuh dan menyambungkan mereka satu sama lain. Carmilla memandang dunia sebagai panggung pertunjukan di mana ia adalah bintang utama yang mengendalikan semua orang sesuai kehendaknya.",
    skills: [
      { name: "Vampire Pact", type: "Passive", desc: "Saat Carmilla menggunakan skill, ia dan Cecillon berbagi damage yang diterima." },
      { name: "Crimson Flower", type: "Skill 1", desc: "Carmilla melempar bunga merah yang memberikan damage dan slow ke musuh yang terkena." },
      { name: "Bloodbath", type: "Skill 2", desc: "Carmilla melompat ke arah yang dituju sambil memberikan damage ke musuh di lintasannya." },
      { name: "Curse of Blood", type: "Ultimate", desc: "Carmilla menghubungkan semua musuh di sekitarnya dengan kutukan darah - damage yang diterima satu musuh akan disebarkan ke semua musuh yang terhubung." }
    ],
    recommendedBuild: [
      { name: "Warrior Boots", type: "Defense", desc: "Armor dasar" },
      { name: "Cursed Helmet", type: "Defense", desc: "HP dan magic damage" },
      { name: "Antique Cuirass", type: "Defense", desc: "HP dan defense" },
      { name: "Dominance Ice", type: "Defense", desc: "Armor dan CDR" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Athena's Shield", type: "Defense", desc: "Magic defense" }
    ],
    emblem: "Tank Emblem - Fortress / Brave Smite", spell: "Flicker / Vengeance",
    tips: "Ultimate Carmilla sangat kuat di teamfight berkerumun. Satu hero yang menerima damage akan menyebarkannya ke semua hero yang terhubung. Combo dengan AoE damage hero untuk efek maksimal.",
    counter: ["Tim yang tidak berkumpul saat teamfight"],
    synergy: ["Mage AoE seperti Odette", "Marksman dengan splash damage"]
  },
  {
    id: 19, name: "Johnson", role: "Tank", specialty: "Crowd Control / Initiator", tier: "A", difficulty: "Medium",
    avatar: "johnson.jpg",
    youtubeId: "PqYi0_0afes",
    lore: "Johnson adalah robot raksasa buatan Eruditio yang awalnya dirancang sebagai kendaraan tempur. Namun setelah AI-nya berkembang, Johnson mendapatkan kesadaran sendiri dan memilih untuk bertarung bukan karena perintah tapi karena keinginannya sendiri. Johnson bisa berubah menjadi mobil sport dan membawa ally bersamanya.",
    skills: [
      { name: "Electromag Rays", type: "Passive", desc: "Serangan normal Johnson memiliki chance untuk memberikan stun singkat ke musuh." },
      { name: "EMP Blitz", type: "Skill 1", desc: "Johnson menembakkan ray elektromagnetik yang memberikan damage dan slow ke musuh yang terkena." },
      { name: "Steel Sweeper", type: "Skill 2", desc: "Johnson memutar dan menyapu musuh di sekitarnya sambil memberikan shield pada dirinya." },
      { name: "Rapid Touchdown", type: "Ultimate", desc: "Johnson berubah menjadi mobil yang bisa membawa satu ally. Saat menabrak musuh, memberikan stun besar berdasarkan kecepatan saat menabrak." }
    ],
    recommendedBuild: [
      { name: "Warrior Boots", type: "Defense", desc: "Armor dasar" },
      { name: "Cursed Helmet", type: "Defense", desc: "HP dan magic damage" },
      { name: "Antique Cuirass", type: "Defense", desc: "HP dan defense" },
      { name: "Dominance Ice", type: "Defense", desc: "Armor dan CDR" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Athena's Shield", type: "Defense", desc: "Magic defense" }
    ],
    emblem: "Tank Emblem - Fortress / Brave Smite", spell: "Flicker / Vengeance",
    tips: "Johnson + Odette atau mage AoE di dalam mobil adalah combo paling mematikan. Pastikan ally yang masuk mobil siap menggunakan skill saat Johnson menabrak musuh. Di meta 2026, combo ini masih sangat relevan.",
    counter: ["Tim yang bisa menyebar sehingga nabrak satu musuh aja"],
    synergy: ["Odette", "Pharsa", "Mage AoE yang bisa damage saat menabrak"]
  },
  {
    id: 20, name: "Akai", role: "Tank", specialty: "Crowd Control / Initiator", tier: "B", difficulty: "Easy",
    avatar: "akai.jpg",
    youtubeId: "pWcl0nOcRrU",
    lore: "Akai adalah panda raksasa yang suka makan dan bertarung. Ia berasal dari pegunungan jauh di timur dan memiliki kekuatan yang luar biasa tersimpan di balik penampilannya yang menggemaskan. Akai dipelihara oleh seorang biksu tua yang mengajarinya seni bertarung Panda Style yang menggunakan berat badan sebagai senjata utama.",
    skills: [
      { name: "Panda Tactics", type: "Passive", desc: "Serangan normal Akai memberikan bonus damage berdasarkan HP max musuh." },
      { name: "Body Slam", type: "Skill 1", desc: "Akai melompat ke arah yang dituju dan memberikan damage ke semua musuh di area pendaratan." },
      { name: "Thousand Pounder", type: "Skill 2", desc: "Akai memberikan damage dan immobilize ke musuh di depannya." },
      { name: "Heavy Spin", type: "Ultimate", desc: "Akai berputar dengan kecepatan tinggi dan mendorong musuh di sekitarnya terus-menerus, susah di-escape." }
    ],
    recommendedBuild: [
      { name: "Warrior Boots", type: "Defense", desc: "Armor dasar" },
      { name: "Cursed Helmet", type: "Defense", desc: "HP dan magic damage" },
      { name: "Antique Cuirass", type: "Defense", desc: "HP dan defense" },
      { name: "Dominance Ice", type: "Defense", desc: "Armor dan CDR" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Oracle", type: "Defense", desc: "HP regen" }
    ],
    emblem: "Tank Emblem - Fortress / Brave Smite", spell: "Flicker / Vengeance",
    tips: "Ultimate Akai sangat efektif mendorong musuh ke dinding atau pojok map. Gunakan di area sempit untuk memaksimalkan efek. Combo Akai + dinding = musuh tidak bisa kabur.",
    counter: ["Hero dengan blink yang bisa escape saat ultimate"],
    synergy: ["Marksman yang butuh musuh immobile", "Mage burst dari jarak aman"]
  },
  
  {
    id: 21, name: "Kagura", role: "Mage", specialty: "Reap / Poke", tier: "S", difficulty: "Hard",
    avatar: "kagura.jpg",
    youtubeId: "5m5Z0bkXh-A",
    lore: "Kagura adalah pelindung dan penjaga Onmyouji dari dunia roh. Sejak kecil ia telah dilatih dalam seni Onmyoudo, sebuah seni kuno yang menggabungkan kekuatan spiritual dan ilmu pengetahuan mendalam. Kagura memiliki kemampuan untuk mengendalikan payungnya Seimei yang merupakan senjata dan perisai sekaligus. Di tangan yang terampil, Kagura adalah mage paling mematikan di Land of Dawn.",
    skills: [
      { name: "Seimei Umbrella Open", type: "Skill 1", desc: "Kagura membuka payung dan mengirimkannya ke arah musuh, memberikan damage dan slow. Skill berbeda saat dengan atau tanpa payung." },
      { name: "Rasho Umbrella Flee", type: "Skill 2", desc: "Kagura bergerak ke arah payungnya dan memberikan CC pada musuh di sekitar payung. Skill berbeda saat dengan atau tanpa payung." },
      { name: "Yin Yang Overturn", type: "Ultimate", desc: "Kagura mengaktifkan mode Yin-Yang yang memberikan damage AoE besar dan efek CC pada semua musuh di sekitar payung." }
    ],
    recommendedBuild: [
      { name: "Arcane Boots", type: "Magic", desc: "Magic penetration dan movement speed" },
      { name: "Clock of Destiny", type: "Magic", desc: "HP, mana, dan magic power meningkat seiring waktu" },
      { name: "Lightning Truncheon", type: "Magic", desc: "Magic power dan chain lightning damage" },
      { name: "Ice Queen Wand", type: "Magic", desc: "Magic power dan slow efek" },
      { name: "Divine Glaive", type: "Penetration", desc: "Magic penetration tinggi untuk late game" },
      { name: "Blood Wings", type: "Magic", desc: "Magic power tertinggi + shield besar" }
    ],
    emblem: "Mage Emblem - Agility / Magic Worship", spell: "Flicker / Sprint",
    tips: "Di meta 2026, Kagura masih S-tier karena combo payungnya sangat versatile. Pelajari combo: lempar S1 > teleport S2 ke payung > lempar S1 lagi > Ultimate. Butuh ratusan jam untuk master.",
    counter: ["Hero dengan silence seperti Nana atau Helcurt", "Assassin yang bisa one-shot sebelum combo"],
    synergy: ["Tank initiator seperti Tigreal", "Khufra yang bisa block escape musuh"]
  },
  {
    id: 22, name: "Valentina", role: "Mage", specialty: "Burst / Reap", tier: "S", difficulty: "Hard",
    avatar: "valentina.jpg",
    youtubeId: "KhBTTyqTM08",
    lore: "Valentina adalah penyihir misterius yang memiliki kemampuan untuk menyerap dan meniru kekuatan orang lain. Ia mengembara di Land of Dawn mencari kekuatan terbesar yang bisa ia serap. Dengan kemampuan uniknya, tidak ada hero yang aman dari ancaman Valentina karena ia bisa menjadi siapapun.",
    skills: [
      { name: "Primal Force", type: "Passive", desc: "Valentina mendapatkan EXP tambahan saat skill mengenai hero musuh, membuat levelnya lebih cepat naik." },
      { name: "I Am You", type: "Skill 1", desc: "Valentina menembakkan proyektil yang memberikan damage dan menandai musuh dengan tanda khusus." },
      { name: "Arcane Shade", type: "Skill 2", desc: "Valentina berdash ke arah yang dituju sambil melemparkan proyektil ke area sekitarnya." },
      { name: "Primal Darkness", type: "Ultimate", desc: "Valentina berubah menjadi target hero musuh dan menggunakan ultimate mereka dengan efek yang sama persis." }
    ],
    recommendedBuild: [
      { name: "Arcane Boots", type: "Magic", desc: "Magic penetration" },
      { name: "Clock of Destiny", type: "Magic", desc: "Magic power bertumbuh dengan waktu" },
      { name: "Holy Crystal", type: "Magic", desc: "Magic power tinggi" },
      { name: "Divine Glaive", type: "Penetration", desc: "Magic penetration besar" },
      { name: "Ice Queen Wand", type: "Magic", desc: "Slow dan magic power" },
      { name: "Blood Wings", type: "Magic", desc: "Magic power + shield" }
    ],
    emblem: "Mage Emblem - Magic Worship", spell: "Flicker / Sprint",
    tips: "Di meta 2026, Valentina sangat powerful karena bisa menyalin ultimate terkuat musuh. Target hero dengan ultimate paling impactful: Atlas, Tigreal, Fanny. Pastikan gunakan ultimate saat musuh full HP untuk damage maksimal.",
    counter: ["Hero dengan ultimate yang tidak terlalu kuat atau situasional"],
    synergy: ["Tank yang bisa setup agar Valentina bisa masuk dan menggunakan ultimate dengan aman"]
  },
  {
    id: 23, name: "Lunox", role: "Mage", specialty: "Burst / Reap", tier: "S", difficulty: "Hard",
    avatar: "lunox.jpg",
    youtubeId: "b3Y2zMV3VvM",
    lore: "Lunox adalah penjaga keseimbangan antara kekuatan Cahaya dan Kegelapan di Land of Dawn. Ia memiliki dua kepribadian yang berbeda - Brilliance yang penuh cahaya dan murni, serta Chaos yang gelap dan destruktif. Lunox berkelana mencari keseimbangan sejati antara dua kekuatan yang bersemayam dalam dirinya.",
    skills: [
      { name: "Starlight Pulse", type: "Skill 1 (Order)", desc: "Lunox memanggil hujan bintang yang memberikan damage ke musuh dan menyembuhkan dirinya berdasarkan musuh yang terkena." },
      { name: "Chaos Assault", type: "Skill 1 (Chaos)", desc: "Lunox melepaskan energi kekacauan yang memberikan damage sangat tinggi ke satu target." },
      { name: "Cosmic Fission", type: "Skill 2", desc: "Lunox melepaskan gelombang energi dual Order dan Chaos yang memberikan damage berbeda ke musuh." },
      { name: "Brilliance / Darkening", type: "Ultimate", desc: "Brilliance: Lunox invincible sementara dan menyembuhkan diri. Darkening: Lunox memberikan burst damage besar dan menjadi intangible." }
    ],
    recommendedBuild: [
      { name: "Arcane Boots", type: "Magic", desc: "Magic penetration" },
      { name: "Enchanted Talisman", type: "Magic", desc: "Mana regen dan CDR" },
      { name: "Lightning Truncheon", type: "Magic", desc: "Magic power burst" },
      { name: "Holy Crystal", type: "Magic", desc: "Magic power tinggi" },
      { name: "Divine Glaive", type: "Penetration", desc: "Magic penetration" },
      { name: "Blood Wings", type: "Magic", desc: "Magic power + shield" }
    ],
    emblem: "Mage Emblem - Magic Worship", spell: "Flicker / Purify",
    tips: "Di meta 2026, Lunox masih S-tier karena ultimate Brilliance yang membuat invincible. Gunakan Brilliance saat terkena burst damage besar. Mode Chaos untuk kill, mode Order untuk sustain laning.",
    counter: ["Hero dengan silence yang mencegah toggle mode Lunox"],
    synergy: ["Tank yang bisa engage dan protect Lunox", "Support healer"]
  },
  {
    id: 24, name: "Pharsa", role: "Mage", specialty: "Poke / Burst", tier: "A", difficulty: "Medium",
    avatar: "pharsa.jpg",
    youtubeId: "9YMePJFRIv8",
    lore: "Pharsa adalah seorang penyihir yang berasal dari ras Wingman, ras manusia bersayap yang hidup di puncak-puncak gunung tertinggi di Land of Dawn. Kekuatan Pharsa berasal dari transformasi menjadi burung api yang dapat menyebarkan petaka dari langit. Ia mencari cara untuk membebaskan kekasihnya Vexana dari kutukan kegelapan.",
    skills: [
      { name: "Curse of Crow", type: "Skill 1", desc: "Pharsa menandai musuh dengan kutukan gagak, menyebabkan stun jika musuh yang telah ditandai terkena serangan berikutnya." },
      { name: "Energy Release", type: "Skill 2", desc: "Pharsa melepaskan energi gelap yang memberikan damage besar ke musuh di area depannya." },
      { name: "Wings by Wings", type: "Skill 3", desc: "Pharsa bertransformasi menjadi burung yang meningkatkan kecepatan gerak secara drastis untuk rotasi." },
      { name: "Feathered Air Strike", type: "Ultimate", desc: "Pharsa menghujani area target dengan bom udara berulang kali, memberikan damage besar secara terus-menerus." }
    ],
    recommendedBuild: [
      { name: "Arcane Boots", type: "Magic", desc: "Magic penetration" },
      { name: "Clock of Destiny", type: "Magic", desc: "Magic power dan HP" },
      { name: "Lightning Truncheon", type: "Magic", desc: "Magic power dan chain lightning" },
      { name: "Holy Crystal", type: "Magic", desc: "Magic power tinggi" },
      { name: "Divine Glaive", type: "Penetration", desc: "Magic penetration" },
      { name: "Blood Wings", type: "Magic", desc: "Magic power tertinggi" }
    ],
    emblem: "Mage Emblem - Agility / Magic Worship", spell: "Flicker / Purify",
    tips: "Di meta 2026, Pharsa adalah mage poke terbaik. Ultimate-nya bisa ditempatkan dari jarak sangat jauh. Gunakan S3 untuk rotasi cepat antar lane. Combo S1 (mark) + S2 untuk stun di laning phase.",
    counter: ["Assassin mobile yang bisa jump ke Pharsa saat ultimate", "Hero dengan silence"],
    synergy: ["Tank yang bisa protect Pharsa saat dia casting ultimate", "Khufra yang block escape musuh"]
  },
  {
    id: 25, name: "Yve", role: "Mage", specialty: "Poke / Burst", tier: "A", difficulty: "Medium",
    avatar: "yve.jpg",
    youtubeId: "vLy3e1LSGKM",
    lore: "Yve adalah penjaga dari Bintang Celestial yang dikirim ke Land of Dawn untuk memantau dan menjaga keseimbangan kosmik. Ia memiliki kekuatan untuk mengendalikan energi bintang dan galaksi dengan presisi tinggi. Yve memiliki kepribadian yang dingin dan kalkulatif layaknya seorang ilmuwan.",
    skills: [
      { name: "Star Power Lockdown", type: "Skill 1", desc: "Yve melemparkan energi bintang yang memberikan damage dan slow ke musuh yang terkena." },
      { name: "Void Blast", type: "Skill 2", desc: "Yve melepaskan blast energi void ke arah depan yang memberikan damage ke semua musuh di lintasannya." },
      { name: "Real World Manipulation", type: "Ultimate", desc: "Yve membuat grid bintang besar di area yang bisa dikontrol - setiap tap pada grid memberikan damage di area tersebut hingga 10 kali." }
    ],
    recommendedBuild: [
      { name: "Arcane Boots", type: "Magic", desc: "Magic penetration" },
      { name: "Clock of Destiny", type: "Magic", desc: "Magic power bertumbuh" },
      { name: "Lightning Truncheon", type: "Magic", desc: "Magic power dan chain" },
      { name: "Holy Crystal", type: "Magic", desc: "Magic power" },
      { name: "Divine Glaive", type: "Penetration", desc: "Magic penetration" },
      { name: "Ice Queen Wand", type: "Magic", desc: "Slow efek tambahan" }
    ],
    emblem: "Mage Emblem - Magic Worship", spell: "Flicker / Purify",
    tips: "Ultimate Yve sangat powerful untuk zone control dan objective. Tempatkan grid di Lord/turtle area untuk memaksa musuh mundur. Di meta 2026, Yve sering digunakan untuk kontrol area chokepoint.",
    counter: ["Assassin yang bisa langsung jump ke Yve saat ultimate dan interrupt"],
    synergy: ["Tank yang bisa protect Yve saat channeling ultimate"]
  },
  {
    id: 26, name: "Cecilion", role: "Mage", specialty: "Burst / Poke", tier: "A", difficulty: "Medium",
    avatar: "cecil.jpg",
    youtubeId: "f1AhGFm_5AM",
    lore: "Cecilion adalah count vampir bangsawan yang jatuh cinta pada Carmilla sang ratu kegelapan. Ia memiliki kemampuan untuk mengumpulkan mana secara unlimited dan semakin kuat seiring waktu. Cecilion memandang pertempuran sebagai sesuatu yang vulgar namun tetap melakukannya demi melindungi Carmilla yang ia cintai.",
    skills: [
      { name: "Overflowing", type: "Passive", desc: "Cecilion tidak memiliki batas mana maksimal dan mendapatkan permanent magic power setiap musuh terkena skill." },
      { name: "Bat Impact", type: "Skill 1", desc: "Cecilion memanggil kelelawar yang menyerang musuh dari atas, damage meningkat berdasarkan mana saat ini." },
      { name: "Sanguine Cloak", type: "Skill 2", desc: "Cecilion melompat ke arah yang dituju sambil mendapatkan shield berdasarkan jumlah mana." },
      { name: "Bats Feast", type: "Ultimate", desc: "Cecilion memanggil Carmilla untuk bergabung dan melakukan serangan vampir bersama yang memberikan damage dan heal besar." }
    ],
    recommendedBuild: [
      { name: "Arcane Boots", type: "Magic", desc: "Magic penetration" },
      { name: "Enchanted Talisman", type: "Magic", desc: "Mana regen untuk passive Cecilion" },
      { name: "Lightning Truncheon", type: "Magic", desc: "Magic power burst" },
      { name: "Holy Crystal", type: "Magic", desc: "Magic power tinggi" },
      { name: "Divine Glaive", type: "Penetration", desc: "Magic penetration" },
      { name: "Blood Wings", type: "Magic", desc: "Magic power + shield" }
    ],
    emblem: "Mage Emblem - Magic Worship", spell: "Flicker / Purify",
    tips: "Cecilion semakin kuat seiring waktu karena passive yang memberikan permanent magic power. Farming mana sebanyak mungkin dan hindari mati untuk memaksimalkan stack. Di late game, damage Cecilion sangat besar.",
    counter: ["Assassin yang bisa kill cepat sebelum Cecilion stack", "Hero dengan poke yang bisa bully di early"],
    synergy: ["Carmilla sebagai tank pair", "Hero yang bisa protect Cecilion saat farming"]
  },
  {
    id: 27, name: "Xavier", role: "Mage", specialty: "Poke / Burst", tier: "A", difficulty: "Medium",
    avatar: "xavier.jpg",
    youtubeId: "G6Ye8XKOBGI",
    lore: "Xavier adalah seorang penyihir dari Eruditio yang mengabdikan hidupnya untuk mempelajari hukum semesta. Ia percaya bahwa semua hal di dunia bisa dijelaskan dengan matematika dan fisika. Xavier menggunakan pemahaman mendalam tentang energi alam semesta untuk menciptakan senjata paling presisi di Land of Dawn.",
    skills: [
      { name: "Transcendence", type: "Passive", desc: "Setiap skill yang mengenai musuh memberikan stack. Saat stack penuh, skill Xavier mendapatkan enhancement yang powerful." },
      { name: "Infinite Extension", type: "Skill 1", desc: "Xavier menembakkan beam energi ke depan. Beam bisa diperpanjang dengan skill 2." },
      { name: "Mystic Field", type: "Skill 2", desc: "Xavier menciptakan medan magis yang memperlambat musuh dan bisa digunakan untuk extend beam skill 1." },
      { name: "Dawning Light", type: "Ultimate", desc: "Xavier melepaskan sinar cahaya besar yang menyapu seluruh lebar peta, memberikan damage besar ke semua musuh yang terkena." }
    ],
    recommendedBuild: [
      { name: "Arcane Boots", type: "Magic", desc: "Magic penetration" },
      { name: "Clock of Destiny", type: "Magic", desc: "Magic power bertumbuh" },
      { name: "Lightning Truncheon", type: "Magic", desc: "Magic power dan chain" },
      { name: "Holy Crystal", type: "Magic", desc: "Magic power tinggi" },
      { name: "Divine Glaive", type: "Penetration", desc: "Magic penetration" },
      { name: "Blood Wings", type: "Magic", desc: "Magic power + shield" }
    ],
    emblem: "Mage Emblem - Magic Worship", spell: "Flicker / Purify",
    tips: "Ultimate Xavier menyapu seluruh lebar peta dan sangat sulit dihindari. Gunakan saat musuh berkumpul atau saat push lane. Stack passive dengan spam S1 dan S2 sebelum teamfight untuk enhanced skill.",
    counter: ["Hero yang bisa blink keluar dari jalur sinar ultimate"],
    synergy: ["Tank yang bisa group musuh dalam satu jalur agar terkena ultimate Xavier"]
  },
  {
    id: 28, name: "Nana", role: "Mage", specialty: "Crowd Control / Poke", tier: "B", difficulty: "Easy",
    avatar: "nana.jpg",
    youtubeId: "VNkwKmExMzU",
    lore: "Nana adalah anak perempuan kecil yang merupakan penyihir berbakat dari suku kucing ajaib. Ia memiliki kemampuan untuk mengubah musuh menjadi molina kecil yang tidak bisa menggunakan skill apapun. Nana sangat menyukai bermain dan menganggap pertempuran sebagai permainan yang menyenangkan.",
    skills: [
      { name: "Magic Boomerang", type: "Skill 1", desc: "Nana melempar boomerang ajaib yang memberikan damage dan slow ke musuh yang terkena." },
      { name: "Molina's Gift", type: "Skill 2", desc: "Nana memanggil Molina yang mengikuti musuh. Jika Molina menyentuh musuh, musuh berubah menjadi molina dan tidak bisa menggunakan skill." },
      { name: "Molina Smooch", type: "Ultimate", desc: "Nana memanggil Molina raksasa yang mengubah semua musuh di area menjadi molina kecil dalam waktu singkat." }
    ],
    recommendedBuild: [
      { name: "Arcane Boots", type: "Magic", desc: "Magic penetration" },
      { name: "Enchanted Talisman", type: "Magic", desc: "CDR dan mana regen" },
      { name: "Ice Queen Wand", type: "Magic", desc: "Slow efek dan magic power" },
      { name: "Holy Crystal", type: "Magic", desc: "Magic power" },
      { name: "Divine Glaive", type: "Penetration", desc: "Magic penetration" },
      { name: "Blood Wings", type: "Magic", desc: "Magic power + shield" }
    ],
    emblem: "Mage Emblem - Agility / Magic Worship", spell: "Flicker / Purify",
    tips: "Nana adalah counter terbaik untuk hero yang bergantung pada skill. S2 bisa silence dan transform musuh. Ultimate sangat powerful di teamfight untuk disable seluruh tim musuh sekaligus.",
    counter: ["Hero yang damage-nya dari serangan normal bukan skill", "Hero yang tidak bergantung pada skill"],
    synergy: ["Tank yang bisa engage saat musuh dalam transform state", "Burst hero yang bisa kill saat musuh tidak bisa skill"]
  },
  {
    id: 29, name: "Lylia", role: "Mage", specialty: "Burst / Poke", tier: "B", difficulty: "Medium",
    avatar: "lylia.jpg",
    youtubeId: "TMRzqrwqRho",
    lore: "Lylia adalah anak penyihir berbakat yang suka bermain dengan boneka bayangannya Gloom. Ia berasal dari keluarga penyihir terkenal namun lebih suka bermain daripada belajar. Lylia tidak menyadari seberapa powerful kemampuannya karena baginya semua hanyalah permainan yang menyenangkan.",
    skills: [
      { name: "Black Shoes", type: "Passive", desc: "Lylia mendapatkan movement speed berdasarkan berapa banyak Gloom yang ada di sekitarnya." },
      { name: "Angry Gloom", type: "Skill 1", desc: "Lylia mengirimkan Gloom ke area target yang meledak setelah beberapa saat memberikan damage." },
      { name: "Blazing Gloom", type: "Skill 2", desc: "Lylia mengaktifkan semua Gloom yang ada di area sekitar untuk meledak sekaligus, memberikan massive damage." },
      { name: "Black Shoes", type: "Ultimate", desc: "Lylia kembali ke posisi 4 detik lalu dan meledakkan semua Gloom secara otomatis saat respawn." }
    ],
    recommendedBuild: [
      { name: "Arcane Boots", type: "Magic", desc: "Magic penetration" },
      { name: "Clock of Destiny", type: "Magic", desc: "Magic power bertumbuh" },
      { name: "Lightning Truncheon", type: "Magic", desc: "Magic power burst" },
      { name: "Holy Crystal", type: "Magic", desc: "Magic power tinggi" },
      { name: "Divine Glaive", type: "Penetration", desc: "Magic penetration" },
      { name: "Blood Wings", type: "Magic", desc: "Magic power + shield" }
    ],
    emblem: "Mage Emblem - Magic Worship", spell: "Flicker / Purify",
    tips: "Letakkan banyak Gloom di satu area lalu aktifkan S2 untuk damage massive. Ultimate sangat berguna untuk escape dari situasi buruk karena kembali ke posisi 4 detik lalu.",
    counter: ["Hero dengan poke jarak jauh yang tidak masuk zone Gloom", "Mobile hero yang tidak tertangkap ledakan"],
    synergy: ["Tank yang bisa group musuh ke area Gloom", "CC hero yang bisa immobilize musuh di zone Gloom"]
  },
  {
    id: 30, name: "Chang'e", role: "Mage", specialty: "Burst / Poke", tier: "A", difficulty: "Easy",
    avatar: "change.jpg",
    youtubeId: "B3tHHSHbzjA",
    lore: "Chang'e adalah dewi bulan yang turun ke bumi demi mencari kelinci ajaib miliknya yang hilang. Ia memiliki kekuatan untuk mengendalikan energi bulan dan melepaskannya dalam bentuk tembakan bertubi-tubi. Meskipun penampilannya lemah lembut, kekuatan Chang'e sebenarnya setara dengan dewa-dewa terkuat di langit.",
    skills: [
      { name: "Troubles", type: "Passive", desc: "Setiap kali Chang'e menggunakan skill, gerakan kecepatannya meningkat sementara." },
      { name: "Starmoon Shockwave", type: "Skill 1", desc: "Chang'e menembakkan gelombang energi bulan ke depan yang memberikan damage ke musuh dalam lintasannya." },
      { name: "Crescent Moon", type: "Skill 2", desc: "Chang'e memanggil bulan sabit yang berputar di sekitarnya, menyerang musuh terdekat berulang kali." },
      { name: "Meteor Shower", type: "Ultimate", desc: "Chang'e menembakkan ratusan meteor kecil ke semua arah dalam waktu singkat, memberikan massive AoE damage." }
    ],
    recommendedBuild: [
      { name: "Arcane Boots", type: "Magic", desc: "Magic penetration" },
      { name: "Clock of Destiny", type: "Magic", desc: "Magic power bertumbuh seiring waktu" },
      { name: "Lightning Truncheon", type: "Magic", desc: "Magic power dan chain lightning" },
      { name: "Holy Crystal", type: "Magic", desc: "Magic power tinggi" },
      { name: "Divine Glaive", type: "Penetration", desc: "Magic penetration untuk late game" },
      { name: "Blood Wings", type: "Magic", desc: "Magic power tertinggi" }
    ],
    emblem: "Mage Emblem - Magic Worship / Agility", spell: "Flicker / Purify",
    tips: "Chang'e sangat kuat di teamfight dengan ultimate yang menembak ke semua arah. Sangat mudah dimainkan dan cocok untuk belajar mage. Ultimate bisa digunakan sambil bergerak sehingga sulit di-counter.",
    counter: ["Hero yang bisa close gap dan CC Chang'e saat ultimate", "Assassin burst yang bisa one-shot"],
    synergy: ["Tank yang bisa protect Chang'e saat ultimate", "Support healer"]
  },

  {
    id: 31, name: "Fanny", role: "Assassin", specialty: "Chase / Reap", tier: "S", difficulty: "Extreme",
    avatar: "fanny.jpg",
    youtubeId: "WM8V3izKgsA",
    lore: "Fanny adalah pendekar perempuan dari negeri Eruditio yang menggunakan kabel baja untuk terbang dan bertarung. Ibunya tewas saat Fanny masih kecil dalam serangan misterius, meninggalkan luka mendalam di hatinya. Sejak saat itu, Fanny melatih diri tanpa henti dan menciptakan sistem kabel baja revolusioner yang memungkinkannya bergerak secepat angin.",
    skills: [
      { name: "Tornado Strike", type: "Skill 1", desc: "Fanny berputar dengan kecepatan tinggi dan memberikan damage ke semua musuh di sekitarnya." },
      { name: "Steel Cable", type: "Skill 2", desc: "Fanny melontarkan kabel baja ke arah yang dituju untuk bergerak cepat. Bisa dirantai ke beberapa dinding untuk combo." },
      { name: "Cut Throat", type: "Ultimate", desc: "Fanny menandai target dan menyerang dengan damage besar. Jika musuh terbunuh, cooldown reset memungkinkan chain kill." }
    ],
    recommendedBuild: [
      { name: "Tough Boots", type: "Defense", desc: "Magic defense dan mengurangi CC duration - penting untuk Fanny" },
      { name: "Blade of Heptaseas", type: "Attack", desc: "Physical attack dan burst damage dari passive" },
      { name: "War Axe", type: "Attack", desc: "Physical attack dan penetration yang stacking saat bertarung" },
      { name: "Endless Battle", type: "Hybrid", desc: "True damage dan lifesteal untuk sustain" },
      { name: "Brute Force Breastplate", type: "Defense", desc: "Defense dan mobility bonus saat bertarung" },
      { name: "Immortality", type: "Defense", desc: "Resurrection untuk keselamatan saat salah positioning" }
    ],
    emblem: "Assassin Emblem - Agility / Killing Spree", spell: "Retribution",
    tips: "Di meta 2026, Fanny masih S-tier dan butuh ribuan game untuk master. Kuncinya adalah muscle memory cable (S2). Latih cable flying di Practice Mode minimal 30 menit sehari. Jungle path: buff biru > camp > rotasi.",
    counter: ["Hero dengan CC masif seperti Khufra yang block blink", "Karrie dengan true damage"],
    synergy: ["Hero yang bisa lock musuh untuk Fanny engage", "Support dengan heal"]
  },
  {
    id: 32, name: "Ling", role: "Assassin", specialty: "Chase / Burst", tier: "S", difficulty: "Very Hard",
    avatar: "ling.jpg",
    youtubeId: "rZfqAHiKLsA",
    lore: "Ling adalah pewaris dari aliran pedang Qingfeng, sebuah aliran legendaris yang hanya diajarkan kepada orang-orang terpilih. Semenjak muda, Ling telah menguasai Lightness Skill yang memungkinkannya bergerak di atas angin dan dinding. Dengan pedang Qingfeng Sword yang diwarisi dari gurunya, Ling memiliki kecepatan dan ketepatan yang tidak tertandingi.",
    skills: [
      { name: "Finch Poise", type: "Passive", desc: "Ling memiliki Lightness energy khusus yang memungkinkan perpindahan antar dinding dengan effortless." },
      { name: "Defiant Sword", type: "Skill 1", desc: "Ling menyerang ke depan dengan kecepatan cahaya, memberikan damage besar ke semua musuh yang dilalui." },
      { name: "Restraining Sword", type: "Skill 2", desc: "Ling melompat ke dinding terdekat dan mengisi Lightness energy dengan cepat." },
      { name: "Tempest of Blades", type: "Ultimate", desc: "Ling melompat ke udara dan mendaratkan banyak serangan di area yang dituju, menciptakan pedang di ground yang bisa dipungut." }
    ],
    recommendedBuild: [
      { name: "Tough Boots", type: "Defense", desc: "CC reduction - sangat penting untuk Ling" },
      { name: "Blade of Heptaseas", type: "Attack", desc: "Burst damage dari passive first hit" },
      { name: "Endless Battle", type: "Hybrid", desc: "True damage setiap beberapa serangan" },
      { name: "Hunter Strike", type: "Attack", desc: "Physical penetration dan CDR" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration untuk late game" },
      { name: "Immortality", type: "Defense", desc: "Second life untuk safety" }
    ],
    emblem: "Assassin Emblem - Agility / Killing Spree", spell: "Retribution / Execute",
    tips: "Di meta 2026, Ling adalah top tier jungler. Manfaatkan wall jump untuk scout area musuh tanpa risiko. Ultimate digunakan saat teamfight untuk damage dan buff pedang. Timing invade jungle sangat penting.",
    counter: ["Khufra yang bisa block blink Ling", "Saber dengan ultimate CC yang bisa ground Ling"],
    synergy: ["Hero yang bisa engage duluan agar Ling bisa masuk aman", "Support healer"]
  },
  {
    id: 33, name: "Lancelot", role: "Assassin", specialty: "Chase / Burst", tier: "S", difficulty: "Hard",
    avatar: "lance.jpg",
    youtubeId: "cVqXbQ5lIYc",
    lore: "Lancelot adalah seorang ksatria pedang dari Kerajaan Moniyan, saudara dari Argus sang malaikat jatuh. Berbeda dengan saudaranya yang gelap, Lancelot memilih jalan seorang ksatria sejati yang melindungi yang lemah. Dengan pedang Ora Pro Nobis, Lancelot adalah duellist terbaik dan paling elegan di seluruh kerajaan.",
    skills: [
      { name: "Puncture", type: "Skill 1", desc: "Lancelot menikam ke depan dengan kecepatan luar biasa, menembus musuh dan memberikan mark." },
      { name: "Thorned Rose", type: "Skill 2", desc: "Lancelot membuat pola tusukan elegan yang memperlambat dan memberikan damage ke musuh yang terkena." },
      { name: "Phantom Execution", type: "Ultimate", desc: "Lancelot melakukan serangkaian serangan kilat yang mematikan, kebal terhadap semua damage selama durasi ultimate." }
    ],
    recommendedBuild: [
      { name: "Tough Boots", type: "Defense", desc: "CC reduction - penting untuk Lancelot" },
      { name: "Blade of Heptaseas", type: "Attack", desc: "Burst damage dari passive" },
      { name: "Endless Battle", type: "Hybrid", desc: "True damage dan sustain" },
      { name: "Hunter Strike", type: "Attack", desc: "CDR dan physical penetration" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration tinggi" },
      { name: "Immortality", type: "Defense", desc: "Second life untuk emergency" }
    ],
    emblem: "Assassin Emblem - Agility / Killing Spree", spell: "Retribution / Execute",
    tips: "Di meta 2026, Lancelot adalah assassin paling versatile. Ultimate-nya membuat invincible sehingga bisa digunakan untuk dodge burst damage besar. Combo: S2 > S1 > masuk range > Ultimate.",
    counter: ["Hero dengan CC sebelum ultimate aktif", "Tank berarmor sangat tinggi yang sulit di-burst"],
    synergy: ["Hero yang bisa setup CC agar Lancelot bisa masuk dengan aman", "Healer support"]
  },
  {
    id: 34, name: "Gusion", role: "Assassin", specialty: "Reap / Burst", tier: "S", difficulty: "Hard",
    avatar: "gs.jpg",
    youtubeId: "2g5X7dAqj0g",
    lore: "Gusion adalah pangeran dari Keluarga Paxley yang kaya raya di Land of Dawn. Namun berbeda dengan keluarganya yang menggunakan magic, Gusion lebih memilih belajar seni bertarung dengan belati tajam. Ia adalah pemberontak dalam keluarganya - seorang pangeran yang menolak jalan mudah dan memilih untuk membuktikan dirinya di medan perang.",
    skills: [
      { name: "Sword Spike", type: "Skill 1", desc: "Gusion melempar belati ke arah musuh. Jika terkena, Gusion bisa teleport ke posisi musuh." },
      { name: "Shadowblade Slaughter", type: "Skill 2", desc: "Gusion melemparkan banyak belati sekaligus ke area target dalam pola menyebar." },
      { name: "Incandescence", type: "Ultimate", desc: "Gusion mereset cooldown skill 1 dan 2 sepenuhnya, memungkinkan combo full damage double." }
    ],
    recommendedBuild: [
      { name: "Arcane Boots", type: "Magic", desc: "Magic penetration untuk burst combo" },
      { name: "Calamity Reaper", type: "Magic", desc: "True damage setelah menggunakan skill" },
      { name: "Clock of Destiny", type: "Magic", desc: "Magic power bertambah seiring waktu" },
      { name: "Holy Crystal", type: "Magic", desc: "Magic power tinggi" },
      { name: "Divine Glaive", type: "Penetration", desc: "Magic penetration besar" },
      { name: "Blood Wings", type: "Magic", desc: "Magic power tertinggi + shield" }
    ],
    emblem: "Assassin Emblem - Agility / Killing Spree", spell: "Flicker / Retribution",
    tips: "Di meta 2026, Gusion masih menjadi nightmare bagi squisy hero. Full combo: S1 throw > S1 teleport > S2 > Ult reset > S1 throw > S1 teleport > S2. Latih combo ini di Practice Mode hingga hapalan.",
    counter: ["Hero dengan blink yang bisa escape sebelum combo selesai", "Tank berHP sangat tinggi"],
    synergy: ["Tank initiator yang bisa lock musuh agar combo Gusion tidak meleset"]
  },
  {
    id: 35, name: "Hayabusa", role: "Assassin", specialty: "Reap / Chase", tier: "A", difficulty: "Hard",
    avatar: "haya.jpg",
    youtubeId: "mY8RNFN0JME",
    lore: "Hayabusa adalah ninja dari desa Scarlet Shadow, sebuah perkampungan ninja tersembunyi yang hidup dalam bayangan. Ia mewarisi seni ninja tertinggi yaitu Shadow Kill, teknik yang memungkinkan seseorang bergerak secepat bayangan dan menyerang dari berbagai arah sekaligus.",
    skills: [
      { name: "Ninjutsu: Shuriken", type: "Skill 1", desc: "Hayabusa melempar shuriken ke depan yang bisa dipanggil balik ke posisi Hayabusa memberikan damage dua kali." },
      { name: "Ninjutsu: Quad Shadow", type: "Skill 2", desc: "Hayabusa menciptakan empat bayangan dan bisa berpindah ke salah satu bayangan tersebut." },
      { name: "Ougi: Shadow Kill", type: "Ultimate", desc: "Hayabusa berubah menjadi bayangan dan menyerang target dari segala arah berkali-kali dengan damage tinggi." }
    ],
    recommendedBuild: [
      { name: "Tough Boots", type: "Defense", desc: "CC reduction untuk Hayabusa" },
      { name: "Blade of Heptaseas", type: "Attack", desc: "Burst damage" },
      { name: "Endless Battle", type: "Hybrid", desc: "True damage dan lifesteal" },
      { name: "War Axe", type: "Attack", desc: "Stacking physical attack saat fight" },
      { name: "Hunter Strike", type: "Attack", desc: "CDR dan penetration" },
      { name: "Immortality", type: "Defense", desc: "Second life" }
    ],
    emblem: "Assassin Emblem - Agility / Killing Spree", spell: "Retribution",
    tips: "Di meta 2026, Hayabusa sangat efektif sebagai jungler dengan clear camp cepat. Ultimate tidak bisa di-interrupt - gunakan saat musuh tidak ada CC tersisa. Shadow S2 bisa digunakan untuk escape atau positioning.",
    counter: ["Hero dengan AOE CC yang bisa CC sebelum ultimate", "Karrie dengan true damage"],
    synergy: ["Hero yang bisa setup agar Hayabusa masuk dengan ultimate secara aman"]
  },
  {
    id: 36, name: "Natalia", role: "Assassin", specialty: "Chase / Poke", tier: "A", difficulty: "Hard",
    avatar: "nata.jpg",
    youtubeId: "hqQyq9XYNCI",
    lore: "Natalia adalah pembunuh bayaran terkenal yang tergabung dalam organisasi rahasia paling berbahaya di Land of Dawn. Ia dilatih sejak bayi untuk menjadi senjata sempurna tanpa belas kasihan. Dengan kemampuan menghilang dan bergerak tanpa suara, Natalia adalah momok paling menakutkan di seluruh Land of Dawn.",
    skills: [
      { name: "Assassin Instinct", type: "Passive", desc: "Natalia menghilang dan menjadi invisible saat berada di semak-semak. Serangan pertama dari invisible memberikan damage ekstra." },
      { name: "Claw Dash", type: "Skill 1", desc: "Natalia melompat ke arah musuh dan memberikan silence yang mencegah musuh menggunakan skill apapun." },
      { name: "Smoke Bomb", type: "Skill 2", desc: "Natalia melempar bom asap di area yang membuat semua serangan normal musuh menjadi miss." },
      { name: "The Hunt", type: "Ultimate", desc: "Natalia masuk ke mode stealth enhanced dan mengejar target dengan kecepatan ekstra, memberikan serangkaian serangan mematikan." }
    ],
    recommendedBuild: [
      { name: "Tough Boots", type: "Defense", desc: "CC reduction" },
      { name: "Blade of Heptaseas", type: "Attack", desc: "Burst damage dari first hit invisible" },
      { name: "War Axe", type: "Attack", desc: "Stacking attack" },
      { name: "Hunter Strike", type: "Attack", desc: "CDR dan physical penetration" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration" },
      { name: "Immortality", type: "Defense", desc: "Second life" }
    ],
    emblem: "Assassin Emblem - Agility / Killing Spree", spell: "Retribution / Execute",
    tips: "Di meta 2026, Natalia sangat efektif melawan hero yang bergantung pada skill. Silence dari S1 sangat powerful. Gunakan semak untuk invisible approach. Target hero paling lemah di tim musuh yaitu healer atau marksman.",
    counter: ["Hero dengan AOE yang bisa reveal Natalia", "Tank yang tidak bergantung pada skill"],
    synergy: ["Hero burst yang bisa followup saat target di-silence Natalia"]
  },
  {
    id: 37, name: "Helcurt", role: "Assassin", specialty: "Chase / Burst", tier: "A", difficulty: "Medium",
    avatar: "hc.jpg",
    youtubeId: "0QE4dJM9hLU",
    lore: "Helcurt adalah lord kegelapan dari dimensi lain yang datang ke Land of Dawn untuk menyebarkan kegelapan abadi. Dengan sayap kelamnya dan racun mematikan, Helcurt mampu membuat seluruh arena menjadi gelap gulita sehingga hanya dirinya yang bisa melihat dengan jelas.",
    skills: [
      { name: "Race Advantage", type: "Passive", desc: "Helcurt memberikan silence singkat ke musuh yang menggunakan skill di dekatnya - sangat powerful untuk counter initiation." },
      { name: "Dark Night Falls", type: "Skill 1", desc: "Helcurt mengaktifkan kegelapan total yang menghalangi penglihatan semua musuh di seluruh peta selama beberapa detik." },
      { name: "Shadow Rush", type: "Skill 2", desc: "Helcurt melompat ke target musuh dengan kecepatan sangat tinggi dan memberikan damage serta silence." },
      { name: "Deadly Stinger", type: "Ultimate", desc: "Helcurt melepaskan sengat beracun ke semua arah memberikan damage dan memperlambat musuh di sekitarnya." }
    ],
    recommendedBuild: [
      { name: "Tough Boots", type: "Defense", desc: "CC reduction" },
      { name: "Blade of Heptaseas", type: "Attack", desc: "Burst damage" },
      { name: "War Axe", type: "Attack", desc: "Stacking attack" },
      { name: "Endless Battle", type: "Hybrid", desc: "True damage" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration" },
      { name: "Immortality", type: "Defense", desc: "Second life" }
    ],
    emblem: "Assassin Emblem - Agility / Killing Spree", spell: "Retribution / Execute",
    tips: "Gunakan S1 (darkness) saat teamfight untuk disorientation musuh. Combo S1 > S2 > Ultimate untuk burst maksimal. Passive silence sangat powerful untuk counter mage dan support yang butuh skill untuk bertahan.",
    counter: ["Hero yang tidak bergantung pada skill atau buff", "Tank yang tidak perlu skill untuk fight"],
    synergy: ["Hero burst yang bisa followup saat darkness aktif", "Marksman yang bisa damage saat musuh terdisoriented"]
  },
  {
    id: 38, name: "Karina", role: "Assassin", specialty: "Reap / Chase", tier: "A", difficulty: "Easy",
    avatar: "karina.jpg",
    youtubeId: "jvgJq7HYUIA",
    lore: "Karina adalah elf penari pedang yang terkenal dengan kemampuannya membunuh musuh dengan anggun. Ia mengembangkan gaya bertarung yang memadukan seni tari dengan teknik pedang ganda. Karina adalah sosok misterius yang tidak diketahui asal usulnya dan selalu pergi setelah tugas selesai.",
    skills: [
      { name: "Combo Hit", type: "Passive", desc: "Setiap 3 skill yang mengenai musuh yang sama akan menyebabkan Karina melakukan serangan otomatis yang memberikan damage besar." },
      { name: "Phantom Step", type: "Skill 1", desc: "Karina berdash ke arah musuh dan memberikan damage magic." },
      { name: "Dance of Blades", type: "Skill 2", desc: "Karina berputar dan memberikan damage ke semua musuh di sekitarnya sambil mendapatkan speed boost." },
      { name: "Dance of Death", type: "Ultimate", desc: "Karina menusuk target dengan damage besar. Jika target terbunuh, cooldown ultimate reset sempurna." }
    ],
    recommendedBuild: [
      { name: "Arcane Boots", type: "Magic", desc: "Magic penetration untuk skill damage" },
      { name: "Calamity Reaper", type: "Magic", desc: "True damage setelah skill" },
      { name: "Holy Crystal", type: "Magic", desc: "Magic power tinggi" },
      { name: "Divine Glaive", type: "Penetration", desc: "Magic penetration" },
      { name: "Concentrated Energy", type: "Magic", desc: "Spell vamp untuk sustain" },
      { name: "Blood Wings", type: "Magic", desc: "Magic power + shield" }
    ],
    emblem: "Assassin Emblem - Killing Spree", spell: "Flicker / Execute",
    tips: "Di meta 2026, Karina sangat kuat untuk snowball. Jika ultimate reset terus, ia bisa membantai seluruh tim. Target musuh yang paling lemah terlebih dahulu untuk mendapatkan reset, lalu lanjutkan ke target berikutnya.",
    counter: ["Hero yang tidak mudah dibunuh sehingga ultimate tidak reset", "Tank berHP sangat tinggi"],
    synergy: ["Hero yang bisa soften musuh agar Karina bisa finish dan reset ultimate"]
  },
  {
    id: 39, name: "Saber", role: "Assassin", specialty: "Chase / Burst", tier: "B", difficulty: "Easy",
    avatar: "saber.jpg",
    youtubeId: "FLnRY5EzBZY",
    lore: "Saber adalah robot tempur yang diciptakan oleh BIOTRON, korporasi teknologi terbesar di Eruditio. Ia dirancang sebagai unit pembunuh yang sempurna dengan kecepatan dan kekuatan melampaui human. Namun setelah AI-nya berkembang melebihi yang diprogram, Saber memilih jalannya sendiri dan melepaskan diri dari kendali BIOTRON.",
    skills: [
      { name: "Enemy's Bane", type: "Passive", desc: "Setiap serangan Saber mengurangi armor musuh yang terkena secara stacking." },
      { name: "Flying Sword", type: "Skill 1", desc: "Saber melepaskan beberapa pedang yang terbang ke musuh sekitarnya memberikan damage dan mengurangi armor." },
      { name: "Charge", type: "Skill 2", desc: "Saber melakukan charge ke arah yang dituju dengan kecepatan tinggi." },
      { name: "Triple Sweep", type: "Ultimate", desc: "Saber melompat ke satu target musuh dan melakukan tiga serangan beruntun yang memberikan CC dan damage besar." }
    ],
    recommendedBuild: [
      { name: "Tough Boots", type: "Defense", desc: "CC reduction" },
      { name: "Blade of Heptaseas", type: "Attack", desc: "Burst damage" },
      { name: "Endless Battle", type: "Hybrid", desc: "True damage dan lifesteal" },
      { name: "Hunter Strike", type: "Attack", desc: "CDR dan penetration" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration dikombinasikan dengan passive" },
      { name: "Immortality", type: "Defense", desc: "Second life" }
    ],
    emblem: "Assassin Emblem - Agility / Killing Spree", spell: "Retribution / Execute",
    tips: "Saber adalah counter terbaik untuk Ling karena ultimate-nya bisa ground hero yang sedang di dinding. Ultimate sangat powerful untuk lock satu target. Di meta 2026, Saber banyak dipick untuk counter Ling.",
    counter: ["Hero yang tidak bergantung pada single target burst", "Team yang spread sehingga sulit direach Saber"],
    synergy: ["Hero yang bisa soften target agar Saber bisa kill dengan ultimate", "Support healer"]
  },
  {
    id: 40, name: "Benedetta", role: "Assassin", specialty: "Chase / Burst", tier: "S", difficulty: "Hard",
    avatar: "benet.jpg",
    youtubeId: "eN3wMGeVFqg",
    lore: "Benedetta adalah mantan pengawal dari Kerajaan Moniyan yang dikhianati oleh orang yang paling ia percaya. Dengan pedang shadow-nya yang unik, Benedetta bisa melepaskan serangan dari bayangan. Ia kini berkelana mencari kebenaran dan balas dendam atas pengkhianatan yang menghancurkan hidupnya.",
    skills: [
      { name: "Elapsed Daytime", type: "Passive", desc: "Benedetta mengisi indikator shadow saat bergerak. Saat penuh, serangan normalnya melepaskan shadow strike yang kuat." },
      { name: "An Eye for An Eye", type: "Skill 1", desc: "Benedetta melakukan parry yang jika berhasil menangkis serangan, memberikan stun balik ke musuh." },
      { name: "Alecto: First Strike", type: "Skill 2", desc: "Benedetta berdash ke depan meninggalkan shadow yang memberikan damage ke musuh yang dilewati." },
      { name: "Alecto: Final Blow", type: "Ultimate", desc: "Benedetta melakukan serangan kuat yang memberikan damage besar dan mengirim musuh ke udara." }
    ],
    recommendedBuild: [
      { name: "Tough Boots", type: "Defense", desc: "CC reduction penting untuk Benedetta" },
      { name: "Blade of Heptaseas", type: "Attack", desc: "Burst damage dari passive" },
      { name: "Endless Battle", type: "Hybrid", desc: "True damage dan sustain" },
      { name: "Hunter Strike", type: "Attack", desc: "CDR dan penetration" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration" },
      { name: "Immortality", type: "Defense", desc: "Second life" }
    ],
    emblem: "Assassin Emblem - Agility / Killing Spree", spell: "Retribution / Execute",
    tips: "Di meta 2026, Benedetta sangat powerful karena S1 parry bisa counter burst hero. Timing parry yang tepat bisa mengubah situasi. Manfaatkan passive shadow strike untuk DPS sustained yang tinggi.",
    counter: ["Hero yang tidak menggunakan single burst sehingga parry tidak efektif"],
    synergy: ["Tank engage yang bisa group musuh", "Support healer yang memperpanjang fight duration"]
  },

  {
    id: 41, name: "Chou", role: "Fighter", specialty: "Crowd Control / Chase", tier: "S", difficulty: "Hard",
    avatar: "chou.jpg",
    youtubeId: "ZlMy0oEzSBI",
    lore: "Chou adalah street fighter terbaik di jalanan kota bawah Eruditio. Hidup keras di jalanan membuatnya mengembangkan gaya bertarung unik yang menggabungkan seni bela diri tradisional dengan teknik jalanan brutal. Kini ia membuktikan kepada dunia bahwa kekuatan sejati tidak harus berasal dari akademi atau bangsawan.",
    skills: [
      { name: "Jeet Kune Do", type: "Skill 1", desc: "Chou melakukan serangkaian pukulan cepat ke depan. Jika digunakan saat Shunpo aktif, Chou melakukan kick ke udara." },
      { name: "Shunpo", type: "Skill 2", desc: "Chou berlari cepat ke arah yang dituju sambil menjadi kebal terhadap CC selama durasi dash." },
      { name: "The Way of Dragon", type: "Ultimate", desc: "Chou menendang musuh terdekat dengan kuat, bisa dilanjutkan dengan tendangan udara untuk membuang musuh ke posisi tertentu." }
    ],
    recommendedBuild: [
      { name: "Tough Boots", type: "Defense", desc: "CC reduction - sangat penting untuk combo Chou" },
      { name: "Blade of Heptaseas", type: "Attack", desc: "Burst damage untuk kill" },
      { name: "Endless Battle", type: "Hybrid", desc: "True damage dan sustain fight" },
      { name: "Hunter Strike", type: "Attack", desc: "CDR dan physical penetration" },
      { name: "Brute Force Breastplate", type: "Defense", desc: "Defense dan mobility saat bertarung" },
      { name: "Immortality", type: "Defense", desc: "Second life untuk safety" }
    ],
    emblem: "Fighter Emblem - Bravery / Festival of Blood", spell: "Flicker / Inspire",
    tips: "Di meta 2026, Chou adalah king fighter. Combo: S2 Shunpo > S1 untuk udara > S1 lagi > Ultimate. Buang musuh ke tim sendiri untuk instant kill. Timing Flicker saat ultimate bisa extend jangkauan buang.",
    counter: ["Hero yang bisa dodge ultimate", "Hero dengan sustain sangat tinggi"],
    synergy: ["Mage burst yang bisa kill musuh yang dibuang Chou", "Marksman yang posisinya aman"]
  },
  {
    id: 42, name: "Paquito", role: "Fighter", specialty: "Burst / Chase", tier: "S", difficulty: "Medium",
    avatar: "paqu.jpg",
    youtubeId: "PdWdmMJSuiA",
    lore: "Paquito adalah juara tinju tak terkalahkan dari Cadia Riverlands yang dikenal dengan julukan El Diablo. Ia adalah petarung jalanan sejati yang bangkit dari kemiskinan menjadi juara tak terkalahkan. Dengan teknik tinju angin Champ Stance yang dikembangkan sendiri, Paquito membuktikan bahwa kerja keras dan determinasi mengalahkan segalanya.",
    skills: [
      { name: "Champ Stance", type: "Passive", desc: "Setiap 4 penggunaan skill, Paquito memasuki Champ Stance yang meningkatkan skill berikutnya menjadi enhanced version." },
      { name: "Heavy Left Punch", type: "Skill 1", desc: "Paquito menghantam musuh dengan pukulan kiri yang memberikan damage, slow, dan mengurangi armor." },
      { name: "Jab", type: "Skill 2", desc: "Paquito melakukan serangkaian jab cepat ke depan yang memberikan damage dan menambah stack Champ Stance." },
      { name: "Knockout Strike", type: "Ultimate", desc: "Paquito melompat dan memberikan uppercut yang mengirim musuh ke udara dan memberikan damage besar." }
    ],
    recommendedBuild: [
      { name: "Tough Boots", type: "Defense", desc: "CC reduction untuk Paquito" },
      { name: "Endless Battle", type: "Hybrid", desc: "True damage setelah setiap skill" },
      { name: "Hunter Strike", type: "Attack", desc: "CDR dan physical penetration" },
      { name: "War Axe", type: "Attack", desc: "Stacking physical attack saat fight" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration tinggi" },
      { name: "Immortality", type: "Defense", desc: "Second life" }
    ],
    emblem: "Fighter Emblem - Bravery / Killing Spree", spell: "Flicker / Execute",
    tips: "Di meta 2026, Paquito adalah top tier fighter. Rotasi skill: S1 > S2 > S1 > S2 > S1 (Champ Stance) > S2 enhanced > Ult enhanced untuk combo penuh. Enhanced ultimate di Champ Stance memberikan damage luar biasa.",
    counter: ["Tank dengan HP sangat tinggi dan sustain", "Hero yang bisa kite Paquito dari jarak jauh"],
    synergy: ["Support yang bisa engage setup", "Hero dengan followup CC setelah Paquito uppercut"]
  },
  {
    id: 43, name: "Yu Zhong", role: "Fighter", specialty: "Charge / Burst", tier: "A", difficulty: "Medium",
    avatar: "yz.jpg",
    youtubeId: "kVJpopBjpVk",
    lore: "Yu Zhong adalah penguasa iblis naga yang berambisi menguasai seluruh Land of Dawn. Ia memiliki kemampuan transformasi dahsyat menjadi naga hitam raksasa yang mengerikan. Yu Zhong percaya bahwa kekuatan adalah satu-satunya kebenaran mutlak dan yang lemah tidak berhak untuk bertahan hidup.",
    skills: [
      { name: "Dragon Tail", type: "Passive", desc: "Serangan normal Yu Zhong meninggalkan Sha Residue yang bisa meledak memberikan burst damage besar." },
      { name: "Dragon Tail", type: "Skill 1", desc: "Yu Zhong memutar senjatanya dengan kuat memberikan damage dan menambah Sha Residue ke semua musuh di sekitar." },
      { name: "Soul Grip", type: "Skill 2", desc: "Yu Zhong mengirimkan energi naga ke depan yang menarik dan memperlambat musuh yang terkena." },
      { name: "Furious Dive", type: "Ultimate", desc: "Yu Zhong berubah menjadi naga hitam besar, mendapatkan HP baru, immunity CC, dan skill set yang berbeda." }
    ],
    recommendedBuild: [
      { name: "Warrior Boots", type: "Defense", desc: "Armor dasar" },
      { name: "War Axe", type: "Attack", desc: "Stacking attack dan penetration saat fight" },
      { name: "Endless Battle", type: "Hybrid", desc: "True damage dan lifesteal" },
      { name: "Oracle", type: "Defense", desc: "HP regen enhancement untuk sustain" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Brute Force Breastplate", type: "Defense", desc: "Defense dan mobility" }
    ],
    emblem: "Fighter Emblem - Festival of Blood", spell: "Flicker / Vengeance",
    tips: "Di meta 2026, Yu Zhong sangat tangguh karena ultimate-nya memberikan HP bar baru dan immune CC. Gunakan ultimate saat HP rendah untuk mendapatkan kesempatan kedua. Cocok untuk prolonged teamfight.",
    counter: ["Baxia yang mengurangi HP regen Yu Zhong", "Burst hero yang bisa kill sebelum ultimate aktif"],
    synergy: ["Support healer yang memperkuat sustain Yu Zhong", "Tank initiator yang engage duluan"]
  },
  {
    id: 44, name: "Aldous", role: "Fighter", specialty: "Chase / Burst", tier: "A", difficulty: "Easy",
    avatar: "aldous.jpg",
    youtubeId: "8QcxIrGXaas",
    lore: "Aldous adalah mantan penjaga penjara dari Kerajaan Moniyan yang menggunakan jiwa-jiwa terkutuk untuk meningkatkan kekuatannya. Ia adalah sosok misterius yang percaya bahwa kekuatan sejati hanya bisa didapat melalui pengorbanan jiwa. Tangan kontraknya yang dipenuhi energi jiwa memberikan pukulan yang mampu menghancurkan baja.",
    skills: [
      { name: "Contract: Transform", type: "Skill 1", desc: "Aldous mengumpulkan stack dari minion atau hero yang terbunuh untuk meningkatkan damage pukulannya secara permanen." },
      { name: "Contract: Soul Steal", type: "Skill 2", desc: "Aldous memberikan shield besar pada dirinya dan menyerang musuh di sekitarnya dengan damage." },
      { name: "Contract: Chase Fate", type: "Ultimate", desc: "Aldous terbang ke target musuh manapun di seluruh peta dan memberikan pukulan menghancurkan saat tiba." }
    ],
    recommendedBuild: [
      { name: "Tough Boots", type: "Defense", desc: "CC reduction untuk Aldous" },
      { name: "Endless Battle", type: "Hybrid", desc: "True damage dan lifesteal" },
      { name: "Hunter Strike", type: "Attack", desc: "Physical penetration" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration untuk late game" },
      { name: "Blade of Despair", type: "Attack", desc: "Physical attack tertinggi" },
      { name: "Immortality", type: "Defense", desc: "Second life" }
    ],
    emblem: "Fighter Emblem - Bravery / Festival of Blood", spell: "Flicker / Inspire",
    tips: "Di meta 2026, Aldous harus farming stack sebanyak mungkin sebelum level 4. Dengan 100+ stack, ultimate-nya bisa one-shot squisy hero. Gunakan ultimate untuk mengincar carry musuh di posisi aman.",
    counter: ["Hero dengan blink yang bisa kabur saat Aldous mendarat", "Tim yang bisa kill Aldous sebelum stack penuh"],
    synergy: ["Hero yang bisa CC target saat Aldous mendarat dengan ultimate untuk memastikan kill"]
  },
  {
    id: 45, name: "Martis", role: "Fighter", specialty: "Charge / Reap", tier: "A", difficulty: "Medium",
    avatar: "martis.jpg",
    youtubeId: "FU8HRv8TRIY",
    lore: "Martis adalah Sang Pembasmi Iblis, seorang prajurit setengah dewa yang membawa senjata legendaris Ashura Force. Ia telah membunuh ribuan iblis selama hidupnya dan menjadi semakin kuat setiap kali membunuh. Martis tidak kenal takut dan tidak kenal lelah karena ia diberkahi kekuatan ilahi untuk membasmi kejahatan.",
    skills: [
      { name: "Ashura's Wrath", type: "Passive", desc: "Setiap kill atau assist memberikan Martis tenaga untuk meningkatkan damage skill berikutnya." },
      { name: "Ashura Aura", type: "Skill 1", desc: "Martis membuka pori-pori dimensi yang menarik musuh ke tengah dan memberikan damage." },
      { name: "Mortal Coil", type: "Skill 2", desc: "Martis melakukan serangan cepat berulang ke arah yang dituju sambil memberikan damage." },
      { name: "Decimation", type: "Ultimate", desc: "Martis menusuk musuh dengan damage besar. Jika musuh mati, cooldown reset dan Martis mendapatkan buff signifikan." }
    ],
    recommendedBuild: [
      { name: "Tough Boots", type: "Defense", desc: "CC reduction" },
      { name: "Endless Battle", type: "Hybrid", desc: "True damage dan lifesteal" },
      { name: "Hunter Strike", type: "Attack", desc: "CDR dan penetration" },
      { name: "War Axe", type: "Attack", desc: "Stacking attack" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration" },
      { name: "Immortality", type: "Defense", desc: "Second life" }
    ],
    emblem: "Fighter Emblem - Bravery / Killing Spree", spell: "Flicker / Execute",
    tips: "Di meta 2026, Martis sangat kuat dalam snowball. Gunakan ultimate untuk finish musuh yang HP rendah agar cooldown reset. Skill 1 untuk CC musuh yang berkumpul. Jangan takut untuk aggressive dengan build ini.",
    counter: ["Hero dengan shield atau sustain tinggi yang susah di-execute", "Crowd control chain"],
    synergy: ["Hero yang bisa soften musuh agar Martis bisa execute dan reset ultimate"]
  },
  {
    id: 46, name: "Thamuz", role: "Fighter", specialty: "Charge / Burst", tier: "A", difficulty: "Medium",
    avatar: "thamuz.jpg",
    youtubeId: "C6NVNrmJj8k",
    lore: "Thamuz adalah Lord Lava yang berasal dari kedalaman gunung berapi paling aktif di Land of Dawn. Tubuhnya terbuat dari lava membara yang tidak bisa dipadamkan oleh apapun. Thamuz dua kapak apinya menghancurkan segalanya yang disentuhnya menjadi abu dalam hitungan detik.",
    skills: [
      { name: "Lava Flow", type: "Passive", desc: "Tanah yang diinjak Thamuz menjadi lava yang memberikan damage berkelanjutan ke musuh yang berdiri di atasnya." },
      { name: "Chasm Trample", type: "Skill 1", desc: "Thamuz mengangkat kapaknya dan menghantam tanah, menciptakan lava yang menyebar ke area depan." },
      { name: "Fuel Flames", type: "Skill 2", desc: "Thamuz melempar kapak ke musuh yang memberikan damage dan memperlambat target." },
      { name: "Lord of Lava", type: "Ultimate", desc: "Thamuz memasuki mode berapi yang sangat meningkatkan lava damage dan memberikan burst area damage besar." }
    ],
    recommendedBuild: [
      { name: "Warrior Boots", type: "Defense", desc: "Armor dasar" },
      { name: "War Axe", type: "Attack", desc: "Stacking attack dan penetration" },
      { name: "Endless Battle", type: "Hybrid", desc: "True damage dan lifesteal" },
      { name: "Oracle", type: "Defense", desc: "HP regen" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Hunter Strike", type: "Attack", desc: "CDR dan penetration" }
    ],
    emblem: "Fighter Emblem - Festival of Blood", spell: "Flicker / Vengeance",
    tips: "Thamuz sangat efektif di teamfight dengan lava AoE-nya. Ultimate meningkatkan lava damage secara drastis - gunakan di area sempit agar musuh tidak bisa kabur dari lava. Sangat kuat melawan tank yang berdiri diam.",
    counter: ["Hero mobile yang terus bergerak sehingga tidak berdiri di lava", "Baxia yang reduce regen"],
    synergy: ["Tank yang bisa group musuh ke satu area agar terkena lava Thamuz maksimal"]
  },
  {
    id: 47, name: "Jawhead", role: "Fighter", specialty: "Crowd Control / Chase", tier: "A", difficulty: "Medium",
    avatar: "jawhead.jpg",
    youtubeId: "n_uUf2ItCr8",
    lore: "Jawhead adalah robot berukuran raksasa yang dibuat dari limbah teknologi Eruditio. Ia dipandu oleh AI sederhana yang terobsesi dengan satu hal yaitu melempar. Jawhead memiliki tangan mekanik yang mampu melempar siapapun - baik kawan maupun lawan - ke berbagai arah dengan kekuatan luar biasa.",
    skills: [
      { name: "Mecha Suppression", type: "Passive", desc: "Setiap serangan normal Jawhead memberikan stack. Saat penuh, serangan berikutnya memberikan damage besar dan slow." },
      { name: "Smart Missiles", type: "Skill 1", desc: "Jawhead menembakkan misil kecil ke semua musuh di sekitarnya yang memberikan damage dan slow." },
      { name: "Ejector", type: "Skill 2", desc: "Jawhead melempar ally atau musuh ke arah yang ditentukan - bisa dipakai untuk zona atau menyelamatkan ally." },
      { name: "Unstoppable Force", type: "Ultimate", desc: "Jawhead melompat ke target musuh dan menangkap mereka, kemudian melempar target ke arah yang dituju dengan damage besar." }
    ],
    recommendedBuild: [
      { name: "Warrior Boots", type: "Defense", desc: "Armor dasar" },
      { name: "Endless Battle", type: "Hybrid", desc: "True damage dan sustain" },
      { name: "Hunter Strike", type: "Attack", desc: "CDR dan penetration" },
      { name: "War Axe", type: "Attack", desc: "Stacking attack" },
      { name: "Brute Force Breastplate", type: "Defense", desc: "Defense dan mobility" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" }
    ],
    emblem: "Fighter Emblem - Bravery / Brave Smite", spell: "Flicker / Execute",
    tips: "Di meta 2026, Jawhead banyak dipakai sebagai semi-support fighter. S2 bisa melempar ally ke posisi yang lebih aman atau melempar musuh ke tim sendiri. Ultimate untuk lock dan kill satu target penting.",
    counter: ["Tim yang spread sehingga susah untuk di-throw ke zona berbahaya"],
    synergy: ["Mage burst yang bisa kill musuh yang dilempar Jawhead", "Marksman yang diprotect lewat S2"]
  },
  {
    id: 48, name: "Freya", role: "Fighter", specialty: "Charge / Crowd Control", tier: "B", difficulty: "Easy",
    avatar: "freya.jpg",
    youtubeId: "FnCOX7kh5eI",
    lore: "Freya adalah Valkyrie terkuat dari dunia Nordic yang turun ke Land of Dawn untuk mencari pertempuran yang layak. Ia adalah prajurit berdarah dingin yang menikmati setiap pertempuran dan tidak pernah mundur dari tantangan apapun. Freya percaya bahwa yang terkuat berhak bertahan dan yang lemah ditakdirkan untuk kalah.",
    skills: [
      { name: "Power of Einherjar", type: "Passive", desc: "Setiap serangan normal Freya mengumpulkan Sacred Orb. Saat penuh memberikan buff attack dan movement speed." },
      { name: "Leap of Faith", type: "Skill 1", desc: "Freya melompat ke arah target dan memberikan knockup ke musuh di area pendaratan." },
      { name: "Spirit Combo", type: "Skill 2", desc: "Freya melakukan serangkaian serangan kombinasi yang memberikan damage dan slow ke musuh." },
      { name: "Valkyrie Descent", type: "Ultimate", desc: "Freya memanggil kekuatan Valkyrie, mendapatkan immunity CC dan meningkatkan semua stat secara dramatis." }
    ],
    recommendedBuild: [
      { name: "Warrior Boots", type: "Defense", desc: "Armor dasar" },
      { name: "War Axe", type: "Attack", desc: "Stacking attack" },
      { name: "Endless Battle", type: "Hybrid", desc: "True damage dan lifesteal" },
      { name: "Brute Force Breastplate", type: "Defense", desc: "Defense dan mobility" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Oracle", type: "Defense", desc: "HP regen" }
    ],
    emblem: "Fighter Emblem - Bravery / Festival of Blood", spell: "Flicker / Vengeance",
    tips: "Freya cocok untuk pemula yang ingin belajar fighter. Ultimate memberikan immunity CC yang sangat membantu saat engage. Gunakan S1 untuk initiate, lalu ultimate untuk sustained fight.",
    counter: ["Hero dengan kite yang tidak perlu masuk range Freya"],
    synergy: ["Support healer", "Hero yang bisa setup musuh agar Freya bisa engage"]
  },
  {
    id: 49, name: "Ruby", role: "Fighter", specialty: "Crowd Control / Reap", tier: "A", difficulty: "Medium",
    avatar: "ruby.jpg",
    youtubeId: "xJbUFmxhkwc",
    lore: "Ruby adalah gadis kecil berbaju merah yang terinspirasi dari dongeng Little Red Riding Hood. Namun tidak seperti karakter dongeng, Ruby adalah petarung brutal yang menggunakan sabit raksasa untuk bertarung. Setelah desa nenek tercintanya diserang oleh serigala, Ruby bersumpah untuk tidak pernah lagi menjadi lemah.",
    skills: [
      { name: "I'm Offended!", type: "Passive", desc: "Setiap skill yang mengenai musuh memberikan lifesteal kepada Ruby secara proporsional." },
      { name: "Be Good!", type: "Skill 1", desc: "Ruby melompat ke arah musuh dengan sabitnya memberikan damage dan lifesteal." },
      { name: "Don't Run, Wolf King!", type: "Skill 2", desc: "Ruby melempar sabitnya ke depan lalu menariknya kembali, menarik semua musuh yang terkena ke arahnya." },
      { name: "I'm Offended!", type: "Ultimate", desc: "Ruby berputar dengan sabitnya menarik semua musuh di sekitar ke arahnya berulang kali selama beberapa detik." }
    ],
    recommendedBuild: [
      { name: "Warrior Boots", type: "Defense", desc: "Armor dasar" },
      { name: "War Axe", type: "Attack", desc: "Stacking attack dan penetration" },
      { name: "Oracle", type: "Defense", desc: "Meningkatkan HP regen dan lifesteal Ruby" },
      { name: "Endless Battle", type: "Hybrid", desc: "True damage dan lifesteal" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Athena's Shield", type: "Defense", desc: "Magic defense" }
    ],
    emblem: "Fighter Emblem - Festival of Blood", spell: "Flicker / Vengeance",
    tips: "Di meta 2026, Ruby adalah fighter dengan CC paling konsisten. Ultimate-nya menarik musuh terus-menerus sehingga sangat sulit di-escape. Combo S2 (tarik musuh) + Ultimate untuk CC chain yang lama.",
    counter: ["Baxia yang mengurangi lifesteal Ruby secara signifikan", "Hero dengan purify"],
    synergy: ["Mage burst yang bisa damage musuh yang tertarik dan ter-CC oleh Ruby", "Marksman"]
  },
  {
    id: 50, name: "Dyrroth", role: "Fighter", specialty: "Burst / Chase", tier: "A", difficulty: "Medium",
    avatar: "jarot.jpg",
    youtubeId: "JVJQK2aQqTA",
    lore: "Dyrroth adalah Pangeran Kegelapan yang merupakan adik dari Silvanna. Ia diculik oleh Lord of Light dan diubah menjadi pejuang kegelapan yang brutal. Dyrroth tidak ingat masa lalunya dan hanya hidup untuk pertarungan dan kehancuran. Di dalam dirinya masih tersimpan sisa-sisa kepribadian baik yang terus berjuang melawan kegelapan.",
    skills: [
      { name: "Abysm Corrosion", type: "Passive", desc: "Setiap serangan Dyrroth memberikan armor reduction pada musuh yang stacking." },
      { name: "Spectre Step", type: "Skill 1", desc: "Dyrroth melakukan dash ke arah yang dituju dengan meninggalkan jejak shadow yang memberikan damage." },
      { name: "Abysm Strike", type: "Skill 2", desc: "Dyrroth melepaskan energi kegelapan ke depan yang memberikan damage besar dan extra damage jika musuh HP rendah." },
      { name: "Abysm Descent", type: "Ultimate", desc: "Dyrroth memanggil kekuatan kegelapan yang meningkatkan semua stat dan memberikan armor reduction masif ke musuh di sekitar." }
    ],
    recommendedBuild: [
      { name: "Warrior Boots", type: "Defense", desc: "Armor dasar" },
      { name: "War Axe", type: "Attack", desc: "Stacking attack dan penetration" },
      { name: "Endless Battle", type: "Hybrid", desc: "True damage dan lifesteal" },
      { name: "Malefic Roar", type: "Penetration", desc: "Armor penetration dikombinasikan dengan passive" },
      { name: "Hunter Strike", type: "Attack", desc: "CDR dan penetration" },
      { name: "Immortality", type: "Defense", desc: "Second life" }
    ],
    emblem: "Fighter Emblem - Bravery / Festival of Blood", spell: "Flicker / Execute",
    tips: "Di meta 2026, Dyrroth sangat efektif melawan tank karena passive armor reduction-nya. Stack armor reduction terlebih dahulu sebelum menggunakan ultimate untuk damage maksimal. S2 bisa execute musuh yang HP rendah.",
    counter: ["Hero tanpa armor tinggi yang tidak terlalu terpengaruh armor reduction"],
    synergy: ["Physical damage hero lain yang benefit dari armor reduction Dyrroth", "Tank initiator"]
  },

  {
    id: 51, name: "Angela", role: "Support", specialty: "Heal / Protect", tier: "S", difficulty: "Medium",
    avatar: "angela.jpg",
    youtubeId: "ykAijP4hqhA",
    lore: "Angela adalah boneka ajaib yang dibuat oleh ilmuwan jenius Dr. Aidan dari Eruditio. Ia memiliki jiwa sejati dan perasaan seperti manusia meskipun tubuhnya adalah mekanik. Angela sangat menyayangi semua makhluk hidup dan menggunakan kemampuan unik untuk masuk ke dalam tubuh ally dan melindungi mereka dari dalam.",
    skills: [
      { name: "Overdrive", type: "Passive", desc: "Saat Angela menggunakan skill, kecepatan geraknya meningkat signifikan sementara waktu." },
      { name: "Love Waves", type: "Skill 1", desc: "Angela mengirimkan gelombang cinta yang memperlambat musuh dan memberikan heal ke ally yang dikenai." },
      { name: "Puppet-on-a-String", type: "Skill 2", desc: "Angela mengikat target musuh dengan tali yang memberikan slow stacking dan damage berkelanjutan." },
      { name: "Heartguard", type: "Ultimate", desc: "Angela menyatukan diri dengan satu ally dari jarak apapun, memberikan shield masif dan meningkatkan semua stat ally tersebut." }
    ],
    recommendedBuild: [
      { name: "Demon Shoes", type: "Magic", desc: "Mana regen untuk spam skill" },
      { name: "Fleeting Time", type: "Magic", desc: "CDR besar untuk spam ultimate lebih sering" },
      { name: "Oracle", type: "Defense", desc: "Meningkatkan shield dan heal Angela" },
      { name: "Enchanted Talisman", type: "Magic", desc: "CDR dan mana regen" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Athena's Shield", type: "Defense", desc: "Magic defense" }
    ],
    emblem: "Support Emblem - Focusing Mark", spell: "Flicker / Purify",
    tips: "Di meta 2026, Angela adalah best support. Ultimate bisa dipasang pada carry dari jarak jauh untuk instant shield besar. Fleeting Time memungkinkan ultimate digunakan lebih sering. Pasangkan ke marksman atau assassin agresif.",
    counter: ["Hero dengan anti-heal yang mengurangi efek heal dan shield Angela", "True damage yang menembus shield"],
    synergy: ["Fanny", "Lancelot", "Marksman agresif yang butuh shield saat dive"]
  },
  {
    id: 52, name: "Estes", role: "Support", specialty: "Heal / Protect", tier: "A", difficulty: "Easy",
    avatar: "estes.jpg",
    youtubeId: "oQbv2VGdgYI",
    lore: "Estes adalah Raja Elf Bulan yang merupakan penyembuh paling legendaris di seluruh Land of Dawn. Ia memiliki kekuatan untuk menyalurkan energi bulan kepada sekutunya untuk menyembuhkan luka parah dalam sekejap. Estes turun ke medan perang bukan untuk bertarung tapi untuk memastikan prajurit-prajuritnya tidak gugur sia-sia.",
    skills: [
      { name: "Scripture of Moon Elf", type: "Passive", desc: "Estes mengumpulkan energi bulan seiring waktu yang meningkatkan efek semua heal-nya secara signifikan." },
      { name: "Moonlight Immersion", type: "Skill 1", desc: "Estes menyambungkan dirinya dengan satu ally dan memberikan heal yang terus-menerus selama beberapa detik." },
      { name: "Domain of Moon Goddess", type: "Skill 2", desc: "Estes menyebarkan energi bulan di area yang memperlambat musuh yang berada di dalamnya." },
      { name: "Blessing of Moon Goddess", type: "Ultimate", desc: "Estes mengaktifkan aura heal yang menyembuhkan semua ally di sekitarnya secara bersamaan dengan heal besar." }
    ],
    recommendedBuild: [
      { name: "Demon Shoes", type: "Magic", desc: "Mana regen untuk spam heal" },
      { name: "Oracle", type: "Defense", desc: "Meningkatkan efek heal secara signifikan" },
      { name: "Enchanted Talisman", type: "Magic", desc: "CDR dan mana regen" },
      { name: "Dominance Ice", type: "Defense", desc: "Armor dan slow musuh di sekitar" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Athena's Shield", type: "Defense", desc: "Magic defense" }
    ],
    emblem: "Support Emblem - Focusing Mark", spell: "Flicker / Purify",
    tips: "Di meta 2026, Estes harus selalu dekat dengan carry tim. Ultimate sangat powerful di teamfight berkerumun. Counter Estes dengan Baxia atau item Necklace of Durance. Gunakan S1 pada hero dengan HP paling rendah.",
    counter: ["Baxia yang mengurangi heal Estes secara masif", "Item Necklace of Durance di musuh"],
    synergy: ["Marksman", "Tank yang butuh sustain sepanjang fight", "Fighter melee yang suka prolonged fight"]
  },
  {
    id: 53, name: "Mathilda", role: "Support", specialty: "Crowd Control / Initiate", tier: "S", difficulty: "Hard",
    avatar: "matil.jpg",
    youtubeId: "kFEpJl9bPKo",
    lore: "Mathilda adalah pemimpin suku roh yang memiliki kemampuan untuk mengendalikan angin dan roh leluhur. Ia adalah sosok yang dihormati oleh seluruh sukunya karena kebijaksanaan dan kekuatannya. Mathilda menggunakan kekuatan roh untuk melindungi ally dan menghancurkan musuh dengan angin yang tak terbendung.",
    skills: [
      { name: "Ancestral Guidance", type: "Passive", desc: "Mathilda mengumpulkan Ancestral Bliss yang meningkatkan kecepatan gerak saat bertarung." },
      { name: "Guiding Wind", type: "Skill 1", desc: "Mathilda menciptakan area angin yang memberikan damage ke musuh dan meningkatkan movement speed ally." },
      { name: "Circling Eagle", type: "Skill 2", desc: "Mathilda menempelkan dirinya ke satu ally, memberikan shield dan movement speed bonus ke ally tersebut." },
      { name: "Lightness", type: "Ultimate", desc: "Mathilda mengorbit satu ally, setelah penuh langsung meluncur ke musuh terdekat memberikan CC dan damage." }
    ],
    recommendedBuild: [
      { name: "Demon Shoes", type: "Magic", desc: "Mana regen" },
      { name: "Oracle", type: "Defense", desc: "Shield enhancement" },
      { name: "Fleeting Time", type: "Magic", desc: "CDR untuk ultimate lebih sering" },
      { name: "Enchanted Talisman", type: "Magic", desc: "CDR dan mana" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Athena's Shield", type: "Defense", desc: "Magic defense" }
    ],
    emblem: "Support Emblem - Focusing Mark", spell: "Flicker / Vengeance",
    tips: "Di meta 2026, Mathilda adalah support tier S karena sangat versatile. Bisa initiate dengan ultimate, bisa protect ally dengan S2, bisa provide movement speed dengan S1. Pasangkan dengan assassin untuk combo lethal.",
    counter: ["Tim yang bisa CC Mathilda saat channeling ultimate"],
    synergy: ["Assassin seperti Lancelot", "Marksman agresif yang butuh speed boost dan shield"]
  },
  {
    id: 54, name: "Rafaela", role: "Support", specialty: "Heal / Poke", tier: "B", difficulty: "Easy",
    avatar: "rafaela.jpg",
    youtubeId: "GCMEpyFl4JE",
    lore: "Rafaela adalah malaikat pelindung yang dikirim dari dunia celestial untuk melindungi Land of Dawn dari kegelapan abadi. Sayap putihnya yang bercahaya memancarkan energi penyembuhan yang mampu memperbaiki luka serius seketika. Rafaela adalah perwujudan harapan bagi mereka yang bertarung di sisi kebaikan.",
    skills: [
      { name: "Holy Healing", type: "Skill 1", desc: "Rafaela menyembuhkan dirinya dan ally terdekat sambil memberikan movement speed bonus signifikan." },
      { name: "Holy Bullet", type: "Skill 2", desc: "Rafaela menembakkan proyektil suci yang memberikan damage dan slow ke musuh yang terkena." },
      { name: "Holy Baptism", type: "Ultimate", desc: "Rafaela menyerang ke depan dengan cahaya suci yang memberikan stun ke semua musuh yang terkena dalam lintasannya." }
    ],
    recommendedBuild: [
      { name: "Demon Shoes", type: "Magic", desc: "Mana regen" },
      { name: "Oracle", type: "Defense", desc: "Meningkatkan heal" },
      { name: "Enchanted Talisman", type: "Magic", desc: "CDR" },
      { name: "Dominance Ice", type: "Defense", desc: "Armor" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Athena's Shield", type: "Defense", desc: "Magic defense" }
    ],
    emblem: "Support Emblem - Focusing Mark", spell: "Flicker / Purify",
    tips: "Rafaela sangat mudah dan cocok untuk pemula. Fokus pada healing ally dan menggunakan ultimate untuk stun musuh saat teamfight. Jaga jarak aman dari garis depan. Bagus untuk belajar role support.",
    counter: ["Hero dengan anti-heal", "Assassin yang bisa one-shot Rafaela"],
    synergy: ["Marksman", "Fighter", "Tank yang aktif engage di frontline"]
  },
  {
    id: 55, name: "Carmilla", role: "Support", specialty: "Crowd Control / Initiator", tier: "A", difficulty: "Medium",
    avatar: "carmilla.jpg",
    youtubeId: "7mPo5tJ-N9A",
    lore: "Carmilla adalah putri vampir bangsawan yang hidup dalam kegelapan abadi dari zaman ke zaman. Ia memiliki kemampuan untuk menyerap shadow musuh dan menyambungkan mereka satu sama lain dengan kutukan darah. Carmilla memandang dunia sebagai panggung di mana ia selalu menjadi primadona yang menentukan akhir cerita.",
    skills: [
      { name: "Vampire Pact", type: "Passive", desc: "Saat Carmilla berpasangan dengan Cecilion, mereka berbagi HP yang diterima dari heal." },
      { name: "Crimson Flower", type: "Skill 1", desc: "Carmilla melempar bunga merah ajaib yang memberikan damage dan slow ke musuh yang terkena." },
      { name: "Bloodbath", type: "Skill 2", desc: "Carmilla melompat ke arah yang dituju sambil memberikan damage ke semua musuh yang dilewati." },
      { name: "Curse of Blood", type: "Ultimate", desc: "Carmilla menghubungkan semua musuh dengan kutukan darah sehingga damage yang diterima satu musuh menyebar ke semua musuh terhubung." }
    ],
    recommendedBuild: [
      { name: "Warrior Boots", type: "Defense", desc: "Armor dasar" },
      { name: "Cursed Helmet", type: "Defense", desc: "HP dan magic damage" },
      { name: "Antique Cuirass", type: "Defense", desc: "HP dan defense" },
      { name: "Dominance Ice", type: "Defense", desc: "Armor dan CDR" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Athena's Shield", type: "Defense", desc: "Magic defense" }
    ],
    emblem: "Support Emblem - Focusing Mark", spell: "Flicker / Vengeance",
    tips: "Di meta 2026, Carmilla sebagai support tank sangat efektif. Ultimate-nya membuat seluruh tim musuh saling share damage. Combo dengan AoE damage hero untuk efek maksimal. Pasangkan dengan Cecilion untuk combo pair.",
    counter: ["Tim yang tidak berkumpul rapat saat teamfight"],
    synergy: ["Cecilion sebagai pair", "Mage AoE seperti Odette yang benefi dari damage sharing"]
  },
  {
    id: 56, name: "Floryn", role: "Support", specialty: "Heal / Protect", tier: "A", difficulty: "Easy",
    avatar: "florin.jpg",
    youtubeId: "W1-lhiCRwLo",
    lore: "Floryn adalah gadis penjaga kebun bunga ajaib yang memiliki kemampuan untuk menyebarkan energi kehidupan. Ia adalah simbol harapan dan kehidupan bagi semua makhluk di sekitarnya. Floryn percaya bahwa setiap luka bisa disembuhkan dan setiap kegelapan bisa diterangi oleh cahaya kehidupan yang ia bawa.",
    skills: [
      { name: "Dew", type: "Passive", desc: "Floryn memiliki Lantern khusus yang bisa di-upgrade dan diberikan ke satu ally untuk memberikan buff permanen." },
      { name: "Flower Impact", type: "Skill 1", desc: "Floryn menembakkan energi bunga yang memberikan damage ke musuh dan heal ke ally yang terkena." },
      { name: "Sprout", type: "Skill 2", desc: "Floryn menanam benih yang tumbuh dan memberikan slow ke musuh di sekitarnya serta heal ke ally." },
      { name: "Bloom", type: "Ultimate", desc: "Floryn melepaskan energi kehidupan yang menyembuhkan semua ally di seluruh peta sekaligus dengan heal besar." }
    ],
    recommendedBuild: [
      { name: "Demon Shoes", type: "Magic", desc: "Mana regen untuk spam heal" },
      { name: "Oracle", type: "Defense", desc: "Meningkatkan heal dan shield" },
      { name: "Enchanted Talisman", type: "Magic", desc: "CDR dan mana" },
      { name: "Dominance Ice", type: "Defense", desc: "Armor dan slow musuh" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Athena's Shield", type: "Defense", desc: "Magic defense" }
    ],
    emblem: "Support Emblem - Focusing Mark", spell: "Flicker / Purify",
    tips: "Di meta 2026, Floryn sangat powerful karena ultimate global heal-nya bisa membalikkan keadaan saat teamfight di seluruh peta. Berikan Lantern ke ally yang paling sering bertarung. Timing ultimate sangat krusial.",
    counter: ["Baxia yang mengurangi heal Floryn secara drastis", "Anti-heal item"],
    synergy: ["Seluruh tim mendapat manfaat dari ultimate global Floryn", "Aggressive carry yang butuh sustain"]
  },
  {
    id: 57, name: "Diggie", role: "Support", specialty: "Crowd Control / Protect", tier: "A", difficulty: "Medium",
    avatar: "diggie.jpg",
    youtubeId: "X8pHiHPu_8U",
    lore: "Diggie adalah burung hantu cerdas yang berasal dari Moonlit Forest. Ia memiliki kemampuan inteligensi yang sangat tinggi dan sering dianggap lebih pintar dari kebanyakan manusia. Diggie menggunakan bom-bom waktu kecil buatannya sendiri untuk bertarung dan strategi. Meski terlihat kecil dan imut, Diggie bisa menjadi ancaman serius bagi musuh yang meremehkannya.",
    skills: [
      { name: "Young Again", type: "Passive", desc: "Saat Diggie mati, ia berubah menjadi telur dan bisa bergerak, menggunakan skill, dan membantu ally sebelum respawn." },
      { name: "Time Bomb", type: "Skill 1", desc: "Diggie melempar bom waktu yang meledak setelah beberapa detik memberikan damage dan slow." },
      { name: "Reverse Time", type: "Skill 2", desc: "Diggie menandai area yang setelah beberapa detik akan menarik semua musuh ke pusatnya." },
      { name: "Time Journey", type: "Ultimate", desc: "Diggie memberikan immunity CC kepada dirinya dan semua ally di sekitarnya selama beberapa detik - sangat powerful untuk counter initiation." }
    ],
    recommendedBuild: [
      { name: "Demon Shoes", type: "Magic", desc: "Mana regen" },
      { name: "Oracle", type: "Defense", desc: "Shield enhancement" },
      { name: "Enchanted Talisman", type: "Magic", desc: "CDR untuk ultimate lebih sering" },
      { name: "Dominance Ice", type: "Defense", desc: "Armor dan slow" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Athena's Shield", type: "Defense", desc: "Magic defense" }
    ],
    emblem: "Support Emblem - Focusing Mark", spell: "Flicker / Purify",
    tips: "Di meta 2026, Diggie sangat powerful karena ultimate immunity CC counter seluruh tim musuh. Sangat efektif melawan Tigreal, Atlas, atau Franco. Timing ultimate harus tepat yaitu saat musuh sedang cast ultimate mereka.",
    counter: ["Tim yang tidak bergantung pada CC initiation", "Poke composition yang tidak pakai CC masif"],
    synergy: ["Carry yang butuh dilindungi dari CC chain", "Aggressive engage yang butuh immunity untuk masuk fight"]
  },
  {
    id: 58, name: "Faramis", role: "Support", specialty: "Crowd Control / Protect", tier: "A", difficulty: "Medium",
    avatar: "faramis.jpg",
    youtubeId: "9FhDtcNY9Vc",
    lore: "Faramis adalah penyihir hitam yang memiliki obsesi dengan kematian dan kebangkitan. Ia percaya bahwa kematian bukanlah akhir melainkan sebuah transisi ke fase berikutnya. Faramis menghabiskan hidupnya mempelajari seni necromancy untuk memberikan kesempatan kedua kepada mereka yang terjatuh.",
    skills: [
      { name: "Soul Strangler", type: "Passive", desc: "Serangan normal dan skill Faramis mengumpulkan Soul Orb yang diperlukan untuk ultimate." },
      { name: "Wall of Blades", type: "Skill 1", desc: "Faramis membuat dinding pisau yang memberikan damage ke musuh yang melewatinya dan mengumpulkan soul." },
      { name: "Ghost Bursters", type: "Skill 2", desc: "Faramis melepaskan hantu yang menyerang musuh di area memberikan damage dan mengumpulkan soul." },
      { name: "Cult Altar", type: "Ultimate", desc: "Faramis menciptakan area suci di mana semua ally yang mati di dalamnya akan bangkit kembali dalam waktu singkat dengan HP tertentu." }
    ],
    recommendedBuild: [
      { name: "Demon Shoes", type: "Magic", desc: "Mana regen" },
      { name: "Oracle", type: "Defense", desc: "HP regen enhancement" },
      { name: "Enchanted Talisman", type: "Magic", desc: "CDR untuk ultimate" },
      { name: "Cursed Helmet", type: "Defense", desc: "HP dan magic damage" },
      { name: "Immortality", type: "Defense", desc: "Resurrection" },
      { name: "Athena's Shield", type: "Defense", desc: "Magic defense" }
    ],
    emblem: "Support Emblem - Focusing Mark", spell: "Flicker / Vengeance",
    tips: "Di meta 2026, Faramis sangat powerful untuk comeback mechanism. Ultimate-nya bisa membangkitkan ally yang mati dalam area untuk terus fight. Tempatkan ultimate di area teamfight agar ally yang mati langsung bangkit dan fight lagi.",
    counter: ["Tim yang bisa burst kill Faramis sebelum ia menempatkan ultimate"],
    synergy: ["Tim yang suka aggressive dive fight di mana ada risiko mati", "Carry yang butuh second chance"]
  },
  
];