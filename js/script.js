// ======================================================
//  QUOTED – THEMATIC SIDEBAR & NAVIGATION
// ======================================================

/**
 * TOPICS BY CATEGORY
 * Each topic's placement is based on the actual content of its file.
 * To change a topic's category, simply move its string to another array.
 */
const topicsByCategory = {
  "Nietzsche": [
    "Amor Fati",
    "Will to Power",
    "Nihilism",
    "Ressentiment"
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
  "Consciousness & Mind": [
    "Consciousness",
    "Perception",
    "Attention",
    "Metacognition",
    "Intuition",
    "Memory",
    "Dopamine",
    "Processing Delay",
    "Mental Health",
    "Autism"
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
  ],
  "Knowledge & Reason": [
    "Epistemology",
    "Truth",
    "Skepticism",
    "Logic",
    "Rationality",
    "Critical Thinking",
    "Applied Knowledge",
    "Heuristics",
    "Fallacies",
    "Statistics",
    "Curse of Knowledge",
    "Goodhart's Law",
    "Satisficing"
  ],
  "Cognitive Biases": [
    "Confirmation Bias",
    "Cognitive Dissonance",
    "Motivated Reasoning",
    "Denial",
    "The Backfire Effect",
    "Beliefs",
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
    "Victim Mentality",
    "Narcissism",
    "The Narcissist Filter",
    "The Narcissist's Playbook",
    "The Opposite of Narcissism",
    "The Addict Archetype",
    "The Avoider Archetype",
    "The Rescuer Archetype",
    "The Victim Archetype",
    "Scars and Wounds",
    "Scars as Evidence",
    "Fear",
    "Pride",
    "Conformity",
    "Herds",
    "Will to Stupidity",
    "Substances",
    "Violence"
  ],
  "Growth & Discipline": [
    "Discipline",
    "Consistency",
    "Habits",
    "Courage",
    "Resilience",
    "Failure",
    "Success",
    "Improving",
    "Goal Setting",
    "Commitment",
    "Execution",
    "Patience",
    "Focus & Concentration",
    "Productivity",
    "Priorities",
    "Time",
    "Stop-Loss",
    "Speed and Direction",
    "Starting & Finishing",
    "Quitting",
    "Perfectionism",
    "Minimum Viable Day",
    "Procrastination"
  ],
  "Mastery & Skill": [
    "Mastery",
    "Skill Development",
    "Learning",
    "Education",
    "Reading",
    "Leverage",
    "Fundamentals",
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
  "Health & Body": [
    "Physical Fitness",
    "Sleep",
    "Stress",
    "Digital Wellness",
    "Sensory Sanctuary",
    "Minimalism",
    "Lifestyle",
    "Living Space",
    "Home",
    "Travel and Adventure",
    "Environment",
    "Sustainability"
  ],
  "Relationships": [
    "Relationships",
    "Communication",
    "Conflict",
    "Forgiveness",
    "Honesty",
    "Humility",
    "Empathy",
    "Envy",
    "Jealousy",
    "Respect",
    "Tolerance",
    "Loyalty",
    "Gratitude",
    "Generosity",
    "Community & Legacy",
    "Mentorship",
    "Networking",
    "Loneliness vs Solitude",
    "Gray Rock & No Contact",
    "Triangulation",
    "Friends",
    "Family",
    "Parenting",
    "Fatherhood",
    "Marriage",
    "Masculinity"
  ],
  "Life Stages": [
    "Growing Old",
    "Grief",
    "Pain",
    "The Past"
  ],
  "Society & Culture": [
    "Society",
    "History",
    "Politics",
    "Democracy",
    "Bureaucracy",
    "Regulatory Capture",
    "The Iron Law of Oligarchy",
    "Social Issues",
    "Class",
    "Inequality",
    "Justice",
    "Entertainment",
    "Consumerism",
    "Business",
    "Career",
    "Hiring and Being Hired",
    "The Labor Market",
    "Investing",
    "Wealth",
    "Inflation",
    "Compound Interest"
  ],
  "Ethics & Morality": [
    "Ethics",
    "Morality",
    "Integrity & Reputation",
    "Responsibility",
    "Leadership",
    "Power"
  ],
  "Spirituality & Religion": [
    "Spirituality",
    "Religion",
    "Faith",
    "Taoism"
  ],
  "Technology & Science": [
    "Artificial Intelligence",
    "Futurism",
    "Singularity",
    "Transhumanism",
    "Programming",
    "C Programming Language",
    "Algorithms",
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
  ]
};

/**
 * Convert a topic name to its corresponding filename.
 * (Matches your existing file naming convention.)
 */
function topicToFilename(topic) {
  return topic
    .toLowerCase()
    .replace(/ & /g, '-')
    .replace(/ /g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

/**
 * Build the thematic sidebar navigation.
 */
function generateNavigation() {
  const container = document.getElementById('navLinksContainer');
  if (!container) return;

  const path = window.location.pathname;
  const currentPage = path.split('/').pop().replace('.html', '');
  const isInTopicsDir = path.includes('/topics/');
  const linkPrefix = isInTopicsDir ? '' : 'topics/';

  let html = '';

  for (const [category, topics] of Object.entries(topicsByCategory)) {
    // Short, uppercase heading for each category
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

// ======================================================
//  MOBILE MENU TOGGLE (if your HTML uses these IDs)
// ======================================================
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

// Close sidebar when clicking a link (optional, for mobile)
if (sideNav) {
  sideNav.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
      sideNav.classList.remove('open');
    }
  });
}

// ======================================================
//  SCROLL INDICATOR (for the top progress bar)
// ======================================================
window.addEventListener('scroll', () => {
  const scrollIndicator = document.getElementById('scrollIndicator');
  if (!scrollIndicator) return;

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollIndicator.style.width = scrollPercent + '%';
});

// ======================================================
//  INITIALIZE ON PAGE LOAD
// ======================================================
document.addEventListener('DOMContentLoaded', () => {
  generateNavigation();
});
