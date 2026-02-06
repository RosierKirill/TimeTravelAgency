export interface Destination {
  id: string;
  title: string;
  era: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  duration: number;
  image: string;
  highlights: string[];
  safetyNotes: string[];
  activities: string[];
  theme: {
    color: string;
    gradient: string;
  };
}

export const destinations: Destination[] = [
  {
    id: 'paris-1889',
    title: 'Paris 1889',
    era: 'Belle Époque',
    shortDesc: 'Expérimentez la magie de l\'Exposition Universelle et la tour Eiffel emblématique',
    fullDesc: `Immergez-vous dans la Belle Époque de Paris 1889. Découvrez l'achèvement de la tour révolutionnaire de Gustave Eiffel lors de l'Exposition Universelle. Promenez-vous dans les cabarets du Moulin Rouge, explorez la renaissance artistique de Montmartre, et expérimentez l'âge d'or de la culture parisienne avec un art, une musique et une sophistication sans précédent.`,
    price: 45000,
    duration: 7,
    image: '/images/paris.png',
    highlights: [
      'Assister à la cérémonie d\'ouverture de l\'Exposition Universelle',
      'Dîner dans des restaurants Belle Époque d\'une élégance intemporelle',
      'Assister à des représentations au Moulin Rouge et à l\'Opéra Garnier',
    ],
    safetyNotes: [
      'Vêtements d\'époque fournis',
      'Champ de stabilisation temporelle actif 24h/24',
      'Point d\'extraction d\'urgence aux Champs-Élysées',
    ],
    activities: [
      'Visiter des monuments',
      'Explorer des ateliers d\'art',
      'Exploration urbaine',
    ],
    theme: {
      color: 'from-amber-400 to-yellow-600',
      gradient: 'from-amber-900/20 to-transparent',
    },
  },
  {
    id: 'cretaceous',
    title: 'Ère Crétacée',
    era: '-65 millions d\'années',
    shortDesc: 'Rencontrez les dinosaures majestueux dans leur habitat préhistorique naturel',
    fullDesc: `Remontez 65 millions d'années dans la période crétacée à son apogée. Découvrez les dinosaures colossaux parcourant les jungles luxuriantes, observez les troupeaux de Triceratops, les Vélociraptors dans leur écosystème, et le puissant T-Rex dans toute sa splendeur. C'est l'âge des géants—expérimentez la Terre comme l'humanité moderne ne l'a jamais connue.`,
    price: 125000,
    duration: 5,
    image: '/images/cretacé.png',
    highlights: [
      'Observer le T-Rex et le Triceratops dans leur habitat naturel',
      'Explorer la jungle préhistorique bioluminescente',
      'Assister à l\'activité volcanique et aux écosystèmes anciens',
    ],
    safetyNotes: [
      'Guide armé obligatoire à tout moment',
      'Blindage temporel avancé requis',
      'Condition physique : niveau extrême recommandé',
    ],
    activities: [
      'Observer la faune sauvage',
      'Aventure et exploration',
      'Immersion dans la nature',
    ],
    theme: {
      color: 'from-green-600 to-emerald-800',
      gradient: 'from-green-900/20 to-transparent',
    },
  },
  {
    id: 'florence-1504',
    title: 'Florence 1504',
    era: 'Renaissance',
    shortDesc: 'Assistez au dévoilement du David de Michelangelo et à l\'apogée de l\'art de la Renaissance',
    fullDesc: `Entrez dans la Florence de la Renaissance à son apogée. Assistez au légendaire dévoilement du David de Michelangelo en 1504—l'un des événements artistiques les plus importants de l'histoire. Rencontrez des maîtres artisans, visitez les studios de Léonard de Vinci, assistez à des réunions somptueuses de la cour des Médicis, et expérimentez la naissance de l'art moderne au milieu des palais décorés de fresques et des merveilles de marbre.`,
    price: 55000,
    duration: 6,
    image: '/images/florence.png',
    highlights: [
      'Assister à la cérémonie de dévoilement du David',
      'Visiter les studios des maîtres artistes et sculpteurs',
      'Assister aux réceptions de la cour de la Renaissance et aux banquets',
    ],
    safetyNotes: [
      'Formation à l\'étiquette de la Renaissance incluse',
      'Costumes d\'époque et équipement d\'immersion culturelle fournis',
      'Équipe médicale en attente pour l\'adaptation temporelle',
    ],
    activities: [
      'Visiter des monuments',
      'Explorer des ateliers d\'art',
      'Musées et architecture',
    ],
    theme: {
      color: 'from-purple-500 to-pink-600',
      gradient: 'from-purple-900/20 to-transparent',
    },
  },
];
