// ============================================================
//  « POUR QUI ? » — 3 cartes de la page d'accueil
//  href / linkLabel : facultatif (lien « En savoir plus »).
//  mebp : true pour la carte MEBP® (accent bleu).
// ============================================================

export const audiences = [
  {
    title: 'Détente & shiatsu',
    text: 'Pour souffler, relâcher les tensions et retrouver le calme. Un vrai moment de respiration.',
    image: '/images/prestations/massage-bien-etre.webp',
    imageAlt: "Geste lent d'un massage bien-être",
    href: '/prestations/shiatsu',
    linkLabel: 'En savoir plus',
    mebp: false,
  },
  {
    title: 'Femme enceinte',
    text: "Un soin tout en douceur pour soulager le dos, alléger les jambes et s'apaiser.",
    image: '/images/prestations/femme-enceinte.webp',
    imageAlt: 'Soin doux pour femme enceinte',
    href: '/prestations#femme-enceinte',
    linkLabel: 'En savoir plus',
    mebp: false,
  },
  {
    title: 'Enfants — MEBP®',
    text: 'Massage certifié pensé pour le confort et l’apaisement des enfants à besoins particuliers.',
    image: '/images/prestations/mebp.webp',
    imageAlt: "Accompagnement d'un enfant en MEBP",
    href: '/prestations/mebp',
    linkLabel: 'En savoir plus',
    mebp: true,
  },
];
