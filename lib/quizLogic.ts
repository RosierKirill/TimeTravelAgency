export interface QuizAnswer {
  q1: string; // experience type
  q2: string; // time period
  q3: string; // preference
  q4: string; // activity
}

export interface QuizResult {
  destinationId: string;
  destinationTitle: string;
  explanation: string;
  matchPercentage: number;
}

const quizLogic: {
  [key: string]: string;
} = {
  'Cultural & artistic|Modern history (19th–20th)|Museums & architecture|Visiting monuments': 'paris-1889',
  'Cultural & artistic|Renaissance classicism|Museums & architecture|Exploring art workshops': 'florence-1504',
  'Adventure & nature|Ancient origins|Wild nature|Observing wildlife': 'cretaceous',
  'Elegance & refinement|Modern history (19th–20th)|Urban excitement|Visiting monuments': 'paris-1889',
  'Elegance & refinement|Renaissance classicism|Museums & architecture|Visiting monuments': 'florence-1504',
  'Adventure & nature|Ancient origins|Urban excitement|Exploring art workshops': 'cretaceous',
};

export function getRecommendation(answers: QuizAnswer): QuizResult {
  const key = `${answers.q1}|${answers.q2}|${answers.q3}|${answers.q4}`;
  let destinationId = quizLogic[key];

  // Fallback matching logic
  if (!destinationId) {
    if (
      answers.q1.includes('Cultural') ||
      answers.q2.includes('Renaissance')
    ) {
      destinationId = 'florence-1504';
    } else if (
      answers.q1.includes('Elegance') &&
      answers.q2.includes('Modern')
    ) {
      destinationId = 'paris-1889';
    } else if (answers.q1.includes('Adventure')) {
      destinationId = 'cretaceous';
    } else {
      // Random fallback
      const destinations = ['paris-1889', 'cretaceous', 'florence-1504'];
      destinationId = destinations[Math.floor(Math.random() * destinations.length)];
    }
  }

  const explanations: {
    [key: string]: { title: string; explanation: string; match: number };
  } = {
    'paris-1889': {
      title: 'Paris 1889 - Belle Époque',
      explanation:
        'Selon vos préférences pour le raffinement culturel et l\'exploration urbaine, Paris pendant la Belle Époque est parfait pour vous. Expérimentez l\'élégance de l\'Exposition Universelle, la scène artistique vibrante, et la société raffinée.',
      match: 92,
    },
    'cretaceous': {
      title: 'Ère Crétacée',
      explanation:
        'Votre esprit aventureux et votre amour de la nature font de l\'Ère Crétacée votre destination idéale. Rencontrez face à face les géants préhistoriques dans leur habitat naturel—l\'aventure ultime pour l\'explorateur audacieux.',
      match: 95,
    },
    'florence-1504': {
      title: 'Florence 1504 - Renaissance',
      explanation:
        'Votre appréciation de l\'art, de l\'architecture et de la maîtrise culturelle vous oriente vers la Florence de la Renaissance. Assistez au dévoilement du David de Michelangelo et expérimentez la naissance de l\'art moderne en direct.',
      match: 88,
    },
  };

  const result = explanations[destinationId] || explanations['paris-1889'];

  return {
    destinationId,
    destinationTitle: result.title,
    explanation: result.explanation,
    matchPercentage: result.match,
  };
}
