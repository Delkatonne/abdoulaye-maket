// ===================================================================
// Abdoulaye Market — logique de la page Produits (produits.html)
//
// Le site est maintenant en pages séparées (index.html, produits.html,
// apropos.html, contact.html) : la navigation entre elles se fait avec
// de vrais liens <a href="...">. Ce script gère uniquement le passage
// "liste des catégories" <-> "détail d'une catégorie" sur produits.html.
//
// Toutes les images pointent vers le dossier /images.
// Remplace simplement les fichiers dans /images par tes propres photos
// en GARDANT EXACTEMENT LES MÊMES NOMS DE FICHIERS.
// Voir images/README.txt pour la liste complète des fichiers attendus.
// ===================================================================

// ===== Données des catégories de produits & services =====
const PRODUCTS = {
  iphones: {
    title: 'iPhones',
    icon: 'bi-apple',
    hero: 'cat-iphones',
    description: "Une sélection d'iPhones neufs et reconditionnés, importés directement et vérifiés avant la vente.",
    items: [
      { name: 'iPhone 15 Pro', desc: 'Neuf, débloqué', img: 'iphone15' },
      { name: 'iPhone 14', desc: 'Reconditionné', img: 'iphone14' },
      { name: 'iPhone 13', desc: 'Reconditionné, très bon état', img: 'iphone13' },
    ]
  },
  telephones: {
    title: 'Téléphones portables',
    icon: 'bi-phone',
    hero: 'cat-telephones',
    description: "Smartphones Android de plusieurs marques, pour tous les budgets.",
    items: [
      { name: 'Samsung Galaxy A54', desc: '128 Go, double SIM', img: 'samsunga54' },
      { name: 'Tecno Spark 20', desc: 'Grand écran, bonne autonomie', img: 'tecnospark' },
      { name: 'Infinix Hot 40', desc: 'Rapport qualité-prix', img: 'infinixhot' },
    ]
  },
  ordinateurs: {
    title: 'Ordinateurs',
    icon: 'bi-laptop',
    hero: 'cat-ordinateurs',
    description: "PC portables et Mac pour un usage bureautique, professionnel ou créatif.",
    items: [
      { name: 'MacBook Air M2', desc: '13", 8 Go RAM', img: 'macbook' },
      { name: 'Dell XPS 13', desc: 'Intel Core i7', img: 'dellxps' },
      { name: 'HP EliteBook', desc: 'Idéal bureautique', img: 'hpelitebook' },
    ]
  },
  solaire: {
    title: 'Panneaux solaires',
    icon: 'bi-sun',
    hero: 'cat-solaire',
    description: "Kits solaires et lampes pour une énergie fiable, même en cas de coupure.",
    items: [
      { name: 'Lampe 50W', desc: 'Panneau solaire portable', img: 'lampe50w' },
      { name: 'Kit solaire 100W', desc: 'Avec batterie', img: 'kitsolaire' },
      { name: 'Kit solaire 200W', desc: 'Pour usage domestique', img: 'kitsolaire200' },
    ]
  },
  photocopieuses: {
    title: 'Photocopieuses',
    icon: 'bi-printer',
    hero: 'cat-photocopieuses',
    description: "Photocopieurs professionnels et multifonctions pour bureaux et cybercafés.",
    items: [
      { name: 'Canon IR', desc: 'Photocopieur pro', img: 'canonir' },
      { name: 'HP LaserJet', desc: 'Multifonction', img: 'hplaserjet' },
      { name: 'Ricoh MP', desc: 'Grand volume', img: 'ricohmp' },
    ]
  },
  colliers: {
    title: 'Colliers',
    icon: 'bi-gem',
    hero: 'cat-colliers',
    description: "Bijoux et colliers tendances pour toutes les occasions.",
    items: [
      { name: 'Collier plaqué or', desc: 'Finition brillante', img: 'colliergold' },
      { name: 'Collier perles', desc: 'Style élégant', img: 'collierperles' },
      { name: 'Collier acier', desc: 'Résistant, hypoallergénique', img: 'collieracier' },
    ]
  },
  montres: {
    title: 'Montres',
    icon: 'bi-watch',
    hero: 'cat-montres',
    description: "Montres classiques et connectées, pour homme et femme.",
    items: [
      { name: 'Montre classique cuir', desc: 'Look intemporel', img: 'montrecuir' },
      { name: 'Montre connectée', desc: 'Suivi santé et notifications', img: 'montreconnectee' },
      { name: 'Montre acier', desc: 'Étanche, robuste', img: 'montreacier' },
    ]
  },
  vetements: {
    title: 'Vêtements',
    icon: 'bi-bag',
    hero: 'cat-vetements',
    description: "Vêtements homme et femme, du casual au formel.",
    items: [
      { name: 'Vêtements été', desc: 'Lots variés', img: 'vetementsete' },
      { name: 'Tenues formelles', desc: 'Homme / Femme', img: 'tenuesformelles' },
    ]
  },
  accessoires: {
    title: 'Accessoires',
    icon: 'bi-earbuds',
    hero: 'cat-accessoires',
    description: "Écouteurs, coques, chargeurs et autres accessoires du quotidien.",
    items: [
      { name: 'Écouteurs sans fil', desc: 'Bluetooth, longue autonomie', img: 'ecouteurs' },
      { name: 'Coques de protection', desc: 'Pour plusieurs modèles', img: 'coques' },
      { name: 'Chargeurs rapides', desc: 'Originaux & rapides', img: 'chargeurs' },
    ]
  }
};

const pages = {
  produits: document.getElementById('produits'),
  'produit-detail': document.getElementById('produit-detail')
};

function showPage(pageId) {
  Object.keys(pages).forEach(id => pages[id].classList.remove('active'));
  if (pages[pageId]) pages[pageId].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCategoriesGrid() {
  const grid = document.getElementById('categories-grid');
  grid.innerHTML = Object.keys(PRODUCTS).map(id => {
    const cat = PRODUCTS[id];
    return `
      <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition flex flex-col">
        <img src="images/${cat.hero}.jpg" alt="${cat.title}" class="w-full h-40 object-cover">
        <div class="p-5 flex flex-col flex-1">
          <div class="flex items-center gap-2 mb-2">
            <i class="bi ${cat.icon} text-navy text-xl"></i>
            <h3 class="font-semibold text-lg">${cat.title}</h3>
          </div>
          <p class="text-sm text-slate-500 mb-4 flex-1">${cat.description}</p>
          <button data-category="${id}" class="discover-btn self-start bg-navy text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-gold hover:text-navy transition">
            Découvrir
          </button>
        </div>
      </div>`;
  }).join('');

  grid.querySelectorAll('.discover-btn').forEach(btn => {
    btn.addEventListener('click', () => showProductDetail(btn.dataset.category));
  });
}

function showProductDetail(id) {
  const cat = PRODUCTS[id];
  if (!cat) return;

  document.getElementById('pd-hero').src = `images/${cat.hero}.jpg`;
  document.getElementById('pd-hero').alt = cat.title;
  document.getElementById('pd-icon').className = `bi ${cat.icon} text-gold text-3xl`;
  document.getElementById('pd-title').textContent = cat.title;
  document.getElementById('pd-desc').textContent = cat.description;

  document.getElementById('pd-items').innerHTML = cat.items.map(item => `
    <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition">
      <img src="images/${item.img}.jpg" alt="${item.name}" class="w-full h-28 object-cover">
      <div class="p-4 text-center">
        <h3 class="font-semibold">${item.name}</h3>
        <p class="text-sm text-slate-500">${item.desc}</p>
      </div>
    </div>`).join('');

  showPage('produit-detail');
}

document.getElementById('pd-back').addEventListener('click', () => showPage('produits'));

renderCategoriesGrid();
