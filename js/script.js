const topicsByCategory = {
  "Mind & Consciousness": [
    "Autism",
    "Mental Health",
    "Dopamine",
    "Consciousness",
    "Perception",
    "Attention",
    "Metacognition",
    "Intuition",
    "Memory",
    "Processing Delay"
  ],
  "Knowledge & Reason": [
    "Satisficing",
    "Applied Knowledge",
    "Epistemology",
    "Truth",
    "Skepticism",
    "Beliefs",
    "Logic",
    "Rationality",
    "Critical Thinking",
    "Heuristics",
    "Fallacies",
    "Statistics",
    "Curse of Knowledge",
    "Goodhart's Law"
  ],
  "Cognitive Biases": [
    "Confirmation Bias",
    "Cognitive Dissonance",
    "Motivated Reasoning",
    "Denial",
    "The Backfire Effect",
    "Apophenia (False Patterns)",
    "Dunning-Kruger Effect",
    "Fundamental Attribution Error",
    "Hindsight Bias",
    "Illusory Superiority",
    "Negativity Bias",
    "Optimism Bias",
    "The Planning Fallacy",
    "The Spotlight Effect",
    "Sunk Cost Fallacy",
    "Gambling & The Illusion of Control"
  ],
  "Psychology & Self": [
    "Self-Awareness",
    "Self-Sabotage",
    "Fear",
    "Pride",
    "Scars and Wounds",
    "Scars as Evidence",
    "Substances",
    "The Addict Archetype",
    "The Avoider Archetype",
    "The Rescuer Archetype",
    "The Victim Archetype",
    "Victim Mentality",
    "Violence"
  ],
  "Narcissism": [
    "Narcissism",
    "The Narcissist Filter",
    "The Narcissist's Playbook",
    "The Opposite of Narcissism",
    "Gray Rock & No Contact",
    "Triangulation"
  ],
  "Character & Resilience": [
    "Discipline",
    "Habits",
    "Consistency",
    "Courage",
    "Resilience",
    "Failure",
    "Success",
    "Improving",
    "Patience"
  ],
  "Productivity & Execution": [
    "Goal Setting",
    "Priorities",
    "Commitment",
    "Execution",
    "Focus & Concentration",
    "Productivity",
    "Procrastination",
    "Time",
    "Stop-Loss",
    "Speed and Direction",
    "Starting & Finishing",
    "Quitting",
    "Perfectionism",
    "Minimum Viable Day"
  ],
  "Mastery & Skill": [
    "Learning",
    "Education",
    "Reading",
    "Skill Development",
    "Mastery",
    "Fundamentals",
    "Leverage",
    "Creativity",
    "Ideas",
    "Inspiration",
    "Excellence",
    "Genius",
    "Artists",
    "A Finished Thing",
    "The Unfinished Project",
    "Manna Protocol",
    "Play / Unstructured Time"
  ],
  "Physical Health": [
    "Physical Fitness",
    "Sleep",
    "Stress"
  ],
  "Lifestyle": [
    "Lifestyle",
    "Travel and Adventure",
    "Minimalism"
  ],
  "Spaces & Wellness": [
    "Digital Wellness",
    "Sensory Sanctuary",
    "Living Space",
    "Home",
    "Environment",
    "Sustainability"
  ],
  "Relationships": [
    "Relationships",
    "Communication",
    "Conflict",
    "Forgiveness",
    "Envy",
    "Jealousy",
    "Friends",
    "Family",
    "Parenting",
    "Fatherhood",
    "Marriage",
    "Masculinity",
    "Community & Legacy",
    "Mentorship",
    "Networking",
    "Loneliness vs Solitude"
  ],
  "Life Stages": [
    "Growing Old",
    "Grief",
    "Pain",
    "The Past"
  ],
  "Ethics & Virtues": [
    "Ethics",
    "Morality",
    "Integrity & Reputation",
    "Responsibility",
    "Leadership",
    "Power",
    "Empathy",
    "Honesty",
    "Humility",
    "Respect",
    "Tolerance",
    "Loyalty",
    "Gratitude",
    "Generosity"
  ],
  "Spirituality & Religion": [
    "Spirituality",
    "Religion",
    "Faith",
    "Taoism",
    "Conformity",
    "Herds"
  ],
  "Society, Politics & Culture": [
    "Society",
    "Social Issues",
    "History",
    "Politics",
    "Democracy",
    "Bureaucracy",
    "Regulatory Capture",
    "The Iron Law of Oligarchy",
    "Class",
    "Inequality",
    "Justice",
    "Entertainment",
    "Consumerism"
  ],
  "Economics, Work & Finance": [
    "Business",
    "Career",
    "Hiring and Being Hired",
    "The Labor Market",
    "Investing",
    "Wealth",
    "Inflation",
    "Compound Interest"
  ],
  "Technology & Science": [
    "Artificial Intelligence",
    "Futurism",
    "Singularity",
    "Transhumanism",
    "Programming",
    "Algorithms",
    "C Programming Language",
    "Cryptography",
    "Torvalds",
    "Pure Mathematics",
    "Science"
  ],
  "Systems & Networks": [
    "Systems Thinking",
    "Cybernetics",
    "Emergence",
    "Complexity",
    "Networks",
    "Feedback",
    "Information Overload",
    "Intellectual Obesity",
    "Addiction to Knowledge",
    "Signaling vs Skill",
    "The Peter Principle",
    "Optimists",
    "Opportunities",
    "Luck vs Risk",
    "Long-Term Thinking",
    "Planning and Strategy"
  ],
  "Nietzsche": [
    "Amor Fati",
    "Will to Power",
    "Nihilism",
    "Ressentiment",
    "Will to Stupidity"
  ],
  "Stoicism": [
    "Stoicism",
    "Moderation",
    "Simplicity"
  ],
  "Existentialism": [
    "Existentialism",
    "Absurdism",
    "Freedom",
    "Purpose",
    "Life",
    "Solipsism"
  ],
  "Reality & Metaphysics": [
    "Determinism",
    "Simulation Theory",
    "Quantum Mechanics",
    "Chaos Theory",
    "Fractals",
    "Worldview",
    "The Map is Not the Territory",
    "Paradoxes"
  ]
};

function topicToFilename(topic) {
  return topic
    .toLowerCase()
    .replace(/ & /g, '-')
    .replace(/ /g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function generateNavigation() {
  const container = document.getElementById('navLinksContainer');
  if (!container) return;

  const path = window.location.pathname;
  const currentPage = path.split('/').pop().replace('.html', '');
  const isInTopicsDir = path.includes('/topics/');
  const linkPrefix = isInTopicsDir ? '' : 'topics/';

  let html = '';

  for (const [category, topics] of Object.entries(topicsByCategory)) {
    html += `<div class="nav-category-heading">${category}</div>`;

    for (const topic of topics) {
      const filename = topicToFilename(topic);
      const isActive = (currentPage === filename);
      html += `<a href="${linkPrefix}${filename}.html"
                class="nav-link${isActive ? ' active' : ''}">${topic}</a>`;
    }
  }

  container.innerHTML = html;
}

const navToggle = document.getElementById('navToggle');
const navClose = document.getElementById('navClose');
const sideNav = document.getElementById('sideNav');

if (navToggle && sideNav) {
  navToggle.addEventListener('click', () => {
    sideNav.classList.add('open');
  });
}

if (navClose && sideNav) {
  navClose.addEventListener('click', () => {
    sideNav.classList.remove('open');
  });
}

if (sideNav) {
  sideNav.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
      sideNav.classList.remove('open');
    }
  });
}

window.addEventListener('scroll', () => {
  const scrollIndicator = document.getElementById('scrollIndicator');
  if (!scrollIndicator) return;

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollIndicator.style.width = scrollPercent + '%';
});

document.addEventListener('DOMContentLoaded', () => {
  generateNavigation();
});
