import { useEffect, useMemo, useState } from 'react';

const translations = {
  en: {
    nav: {
      explore: 'Explore',
      features: 'Features',
      dashboard: 'Dashboard',
      profile: 'Profile',
      logout: 'Logout',
      login: 'Login'
    },
    titles: {
      home: 'Where Research Meets Collaboration',
      dashboard: 'Research Dashboard',
      project: 'Project Workspace',
      explore: 'Explore Collaborations',
      profile: 'Profile',
      login: 'Sign In',
      default: 'Smart Research Collaboration Tool'
    },
    buttons: {
      startCollaborating: 'Start Collaborating',
      goToDashboard: 'Go to Dashboard'
    },
    tabs: {
      overview: 'Overview',
      notes: 'Notes',
      discussion: 'Discussion',
      files: 'Files'
    },
    notifications: {
      themeSwitch: 'Switched to {mode} mode',
      languageChange: 'Language changed to {lang}'
    }
  },
  es: {
    nav: {
      explore: 'Explorar',
      features: 'Características',
      dashboard: 'Panel',
      profile: 'Perfil',
      logout: 'Cerrar Sesión',
      login: 'Iniciar Sesión'
    },
    titles: {
      home: 'Donde la Investigación se Encuentra con la Colaboración',
      dashboard: 'Panel de Investigación',
      project: 'Espacio de Proyecto',
      explore: 'Explorar Colaboraciones',
      profile: 'Perfil',
      login: 'Iniciar Sesión',
      default: 'Herramienta de Colaboración de Investigación Inteligente'
    },
    buttons: {
      startCollaborating: 'Comenzar a Colaborar',
      goToDashboard: 'Ir al Panel'
    },
    tabs: {
      overview: 'Resumen',
      notes: 'Notas',
      discussion: 'Discusión',
      files: 'Archivos'
    },
    notifications: {
      themeSwitch: 'Cambiado a modo {mode}',
      languageChange: 'Idioma cambiado a {lang}'
    }
  },
  fr: {
    nav: {
      explore: 'Explorer',
      features: 'Fonctionnalités',
      dashboard: 'Tableau de bord',
      profile: 'Profil',
      logout: 'Déconnexion',
      login: 'Connexion'
    },
    titles: {
      home: 'Où la Recherche Rencontre la Collaboration',
      dashboard: 'Tableau de Bord de Recherche',
      project: 'Espace Projet',
      explore: 'Explorer les Collaborations',
      profile: 'Profil',
      login: 'Se Connecter',
      default: 'Outil Intelligent de Collaboration de Recherche'
    },
    buttons: {
      startCollaborating: 'Commencer à Collaborer',
      goToDashboard: 'Aller au Tableau de Bord'
    },
    tabs: {
      overview: 'Aperçu',
      notes: 'Notes',
      discussion: 'Discussion',
      files: 'Fichiers'
    },
    notifications: {
      themeSwitch: 'Passé en mode {mode}',
      languageChange: 'Langue changée en {lang}'
    }
  },
  nl: {
    nav: {
      explore: 'Ontdekken',
      features: 'Functies',
      dashboard: 'Dashboard',
      profile: 'Profiel',
      logout: 'Uitloggen',
      login: 'Inloggen'
    },
    titles: {
      home: 'Waar Onderzoek en Samenwerking Samenkomen',
      dashboard: 'Onderzoek Dashboard',
      project: 'Project Werkruimte',
      explore: 'Verken Samenwerkingen',
      profile: 'Profiel',
      login: 'Inloggen',
      default: 'Slimme Tool Voor Onderzoekssamenwerking'
    },
    buttons: {
      startCollaborating: 'Begin Met Samenwerken',
      goToDashboard: 'Ga naar Dashboard'
    },
    tabs: {
      overview: 'Overzicht',
      notes: 'Notities',
      discussion: 'Discussie',
      files: 'Bestanden'
    },
    notifications: {
      themeSwitch: 'Overgeschakeld naar {mode} modus',
      languageChange: 'Taal gewijzigd naar {lang}'
    }
  },
  hi: {
    nav: {
      explore: 'खोजें',
      features: 'विशेषताएं',
      dashboard: 'डैशबोर्ड',
      profile: 'प्रोफ़ाइल',
      logout: 'लॉग आउट',
      login: 'लॉग इन'
    },
    titles: {
      home: 'जहां शोध और सहयोग मिलते हैं',
      dashboard: 'शोध डैशबोर्ड',
      project: 'प्रोजेक्ट कार्यक्षेत्र',
      explore: 'सहयोग खोजें',
      profile: 'प्रोफ़ाइल',
      login: 'साइन इन करें',
      default: 'स्मार्ट रिसर्च सहयोग उपकरण'
    },
    buttons: {
      startCollaborating: 'सहयोग शुरू करें',
      goToDashboard: 'डैशबोर्ड पर जाएं'
    },
    tabs: {
      overview: 'अवलोकन',
      notes: 'नोट्स',
      discussion: 'चर्चा',
      files: 'फ़ाइलें'
    },
    notifications: {
      themeSwitch: '{mode} मोड में स्विच किया गया',
      languageChange: 'भाषा बदलकर {lang} कर दी गई'
    }
  }
};

const navItems = [
  { label: 'Explore', key: 'explore' },
  { label: 'Features', key: 'home' },
];

const featureCards = [
  {
    title: 'AI Insights',
    description: 'Context-aware suggestions and reference prompts for every research thread.',
  },
  {
    title: 'Idea Evolution Tracking',
    description: 'Visual progress on concepts, versions, and collaborative milestones.',
  },
  {
    title: 'Cross-Institution Collaboration',
    description: 'Secure shared workspaces for teams, advisors, and external partners.',
  },
];

const testimonials = [
  {
    name: 'Mia Tran',
    role: 'PhD Candidate, Cognitive Science',
    quote: 'The workspace helped our team align faster and turn notes into publications.',
  },
  {
    name: 'Jordan Kim',
    role: 'Lab Coordinator, Materials Lab',
    quote: 'Everything feels intentionally designed for research workflows.',
  },
];

const projectCards = [
  {
    title: 'NeuroAI Impact Study',
    description: 'Collaborate on emerging neural model ethics across universities.',
    contributors: ['Azra', 'Cam', 'Leo'],
  },
  {
    title: 'Sustainable Data Networks',
    description: 'Map resource flows and draft cross-campus collaboration frameworks.',
    contributors: ['Nina', 'Eli'],
  },
  {
    title: 'Behavioral Economics Lab',
    description: 'Synthesizing findings and building idea scaffolds together.',
    contributors: ['Sam', 'Priya', 'Noah'],
  },
];

const exploreProjects = [
  {
    title: 'Hybrid Learning Analytics',
    description: 'A shared space for research on student engagement signals.',
    tags: ['Education', 'Data'],
    contributors: 12,
  },
  {
    title: 'Climate Resilience Modeling',
    description: 'Open collaboration on supply-chain and community risk models.',
    tags: ['Environment', 'Policy'],
    contributors: 8,
  },
  {
    title: 'Digital Health Ethics',
    description: 'Connect on evolving standards and experimental workflows.',
    tags: ['Health', 'Design'],
    contributors: 7,
  },
];

const skills = ['Literature Review', 'Qualitative Analysis', 'Technical Writing', 'Data Visualization'];

const timelineNodes = [
  { version: 'v1', label: 'Initial hypothesis sketch', details: 'Drafted the core research question and shared a lightweight outline.' },
  { version: 'v2', label: 'Data collection framework', details: 'Added observational metrics and structured the sample requirements.' },
  { version: 'v3', label: 'Draft review session', details: 'Recorded feedback, refined methodology, and assigned new tasks.' },
];

const aiInsights = [
  'Consider adding references to recent review articles.',
  'A similar study exists in cognitive ergonomics; compare its methodology.',
  'Highlight the interdisciplinary impact in your next summary.',
];

const activityItems = [
  { label: 'Updated the project brief', time: '2h ago' },
  { label: 'Added a new collaborator', time: 'Yesterday' },
  { label: 'Marked milestones for review', time: '2 days ago' },
];

const tabs = ['overview', 'notes', 'discussion', 'files'];

const paperRecommendations = [
  { title: 'Quantum ML: A Unified Approach', authors: 'Smith et al.', year: 2024, relevance: 95 },
  { title: 'Neural Networks in Climate Modeling', authors: 'Patel, Kumar', year: 2024, relevance: 92 },
  { title: 'Ethical AI Frameworks', authors: 'Chen & Lee', year: 2023, relevance: 88 },
];

const researchMetrics = [
  { label: 'H-Index', value: '12', change: '+2', trend: 'up' },
  { label: 'Citations', value: '248', change: '+15', trend: 'up' },
  { label: 'Papers This Year', value: '5', change: '+1', trend: 'up' },
  { label: 'Collaboration Score', value: '94%', change: '+8%', trend: 'up' },
];

const collaborationLeaderboard = [
  { rank: 1, name: 'Dr. Sarah Chen', contributions: 342, institution: 'MIT' },
  { rank: 2, name: 'Prof. James Miller', contributions: 298, institution: 'Stanford' },
  { rank: 3, name: 'Dr. Amina Patel', contributions: 267, institution: 'Cambridge' },
  { rank: 4, name: 'Dr. Marcus Johnson', contributions: 245, institution: 'Oxford' },
];

const fundingOpportunities = [
  { title: 'NSF Graduate Research', amount: '$34,000/year', deadline: 'May 15' },
  { title: 'EU Research Grants', amount: '€50,000', deadline: 'June 1' },
  { title: 'Industry Innovation Fund', amount: '$100,000', deadline: 'May 30' },
];

const peerReviewQueue = [
  { title: 'AI Ethics in Healthcare', author: 'Dr. White', daysLeft: 5, complexity: 'High' },
  { title: 'Climate Data Analysis', author: 'Prof. Green', daysLeft: 3, complexity: 'Medium' },
  { title: 'Quantum Computing Basics', author: 'Dr. Blue', daysLeft: 7, complexity: 'Low' },
];

function App() {
  const [view, setView] = useState('home');
  const [pageLoading, setPageLoading] = useState(false);
  const [projectTab, setProjectTab] = useState('overview');
  const [selectedTimeline, setSelectedTimeline] = useState(timelineNodes[1]);
  const [focusMode, setFocusMode] = useState(false);
  const [filter, setFilter] = useState('Trending');
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem('isLoggedIn');
    return saved ? JSON.parse(saved) : false;
  });
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });
  const [showAIChat, setShowAIChat] = useState(false);
  const [dashboardTab, setDashboardTab] = useState('overview');
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('projects');
    return saved ? JSON.parse(saved) : projectCards;
  });
  const [aiChatHistory, setAiChatHistory] = useState(() => {
    const saved = localStorage.getItem('aiChatHistory');
    return saved ? JSON.parse(saved) : [
      { type: 'ai', message: 'Hello! I\'m your AI research assistant. How can I help you today? I can assist with literature review, data analysis, methodology consultation, and more.', timestamp: new Date().toISOString() },
      { type: 'user', message: 'Can you summarize the recent papers on AI ethics?', timestamp: new Date().toISOString() },
      { type: 'ai', message: 'I\'ve analyzed 47 papers from 2024-2025. Key themes include: fairness in AI systems (23 papers), accountability frameworks (18 papers), and bias mitigation (12 papers). Would you like a detailed summary of any specific area?', timestamp: new Date().toISOString() }
    ];
  });
  const [notifications, setNotifications] = useState([]);
  const [showNotification, setShowNotification] = useState(null);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'en';
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('aiChatHistory', JSON.stringify(aiChatHistory));
  }, [aiChatHistory]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Theme and language toggle functions
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    const t = translations[language];
    addNotification(t.notifications.themeSwitch.replace('{mode}', newTheme === 'dark' ? t.nav.explore : 'claro'));
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    const langMap = { en: 'English', es: 'Español', fr: 'Français', nl: 'Nederlands', hi: 'हिंदी' };
    const langName = langMap[newLanguage] || newLanguage;
    addNotification(translations[newLanguage].notifications.languageChange.replace('{lang}', langName));
  };

  // Enhanced notification system
  const addNotification = (message, type = 'success') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type, timestamp: new Date() }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  // Enhanced AI chat functionality
  const sendAIMessage = (message) => {
    const userMessage = { type: 'user', message, timestamp: new Date().toISOString() };
    setAiChatHistory(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on your research interests, I recommend exploring recent publications in Nature Machine Intelligence.",
        "I've analyzed your current project structure. Consider adding a methodology section with more detailed statistical analysis.",
        "Your literature review could benefit from including recent meta-analyses on this topic.",
        "I suggest collaborating with researchers from Stanford's AI Ethics Lab for this project.",
        "The data visualization in your current approach could be enhanced with interactive charts."
      ];
      const aiResponse = {
        type: 'ai',
        message: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toISOString()
      };
      setAiChatHistory(prev => [...prev, aiResponse]);
    }, 1000 + Math.random() * 2000);
  };

  // Project management functions
  const createProject = (projectData) => {
    const newProject = {
      id: Date.now(),
      ...projectData,
      contributors: [],
      createdAt: new Date().toISOString(),
      status: 'active'
    };
    setProjects(prev => [...prev, newProject]);
    addNotification(`Project "${projectData.title}" created successfully!`);
    return newProject;
  };

  const updateProject = (projectId, updates) => {
    setProjects(prev => prev.map(project =>
      project.id === projectId ? { ...project, ...updates } : project
    ));
    addNotification('Project updated successfully!');
  };

  const deleteProject = (projectId) => {
    setProjects(prev => prev.filter(project => project.id !== projectId));
    addNotification('Project deleted successfully!');
  };

  useEffect(() => {
    setPageLoading(true);
    const timeout = window.setTimeout(() => setPageLoading(false), 220);
    return () => window.clearTimeout(timeout);
  }, [view]);

  const pageTitle = useMemo(() => {
    const t = translations[language];
    switch (view) {
      case 'dashboard':
        return t.titles.dashboard;
      case 'project':
        return t.titles.project;
      case 'explore':
        return t.titles.explore;
      case 'profile':
        return t.titles.profile;
      case 'login':
        return t.titles.login;
      default:
        return t.titles.default;
    }
  }, [view, language]);

  const getNavItems = () => {
    const t = translations[language];
    const baseItems = [
      { label: t.nav.explore, key: 'explore' },
      { label: t.nav.features, key: 'home' },
    ];

    if (isLoggedIn) {
      return [
        ...baseItems,
        { label: t.nav.dashboard, key: 'dashboard' },
        { label: t.nav.profile, key: 'profile' },
        { label: t.nav.logout, key: 'logout' },
      ];
    } else {
      return [
        ...baseItems,
        { label: t.nav.login, key: 'login' },
      ];
    }
  };

  const renderMain = () => {
    // If not logged in and trying to access protected views, show login
    if (!isLoggedIn && ['dashboard', 'project', 'profile'].includes(view)) {
      return <LoginPage onLogin={(userData) => {
        setIsLoggedIn(true);
        setUser(userData);
        setView('dashboard');
      }} />;
    }

    switch (view) {
      case 'dashboard':
        return <DashboardPage />;
      case 'project':
        return (
          <ProjectPage
            projectTab={projectTab}
            setProjectTab={setProjectTab}
            selectedTimeline={selectedTimeline}
            setSelectedTimeline={setSelectedTimeline}
            focusMode={focusMode}
            setFocusMode={setFocusMode}
            addNotification={addNotification}
          />
        );
      case 'explore':
        return <ExplorePage filter={filter} setFilter={setFilter} />;
      case 'profile':
        return <ProfilePage user={user} />;
      case 'login':
        return <LoginPage onLogin={(userData) => {
          setIsLoggedIn(true);
          setUser(userData);
          setView('dashboard');
        }} />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary text-text-primary overflow-x-hidden cyber-grid-bg ${theme === 'dark' ? '' : 'light-theme'}`}>
      <div className="absolute inset-x-0 -top-24 h-72 bg-gradient-to-r from-neon-cyan/20 via-neon-orange/20 to-neon-pink/20 pointer-events-none blur-3xl" />
      <div className="relative z-10 px-4 py-5 sm:px-6 lg:px-8">
        <header className="mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-3xl glass-effect px-5 py-4 shadow-neon backdrop-blur-xl border border-glass-border">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-orange text-white shadow-lg shadow-neon-orange/40 animate-pulse-neon">
              <span className="text-lg font-bold">SR</span>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight text-text-primary">Smart Research</p>
              <p className="text-xs text-neon-cyan">Collaboration tool</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            {getNavItems().map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  if (item.key === 'logout') {
                    setIsLoggedIn(false);
                    setUser(null);
                    setView('home');
                  } else if (item.key === 'login') {
                    setView('login');
                  } else {
                    setView(item.key);
                  }
                }}
                className="text-sm font-medium text-text-secondary transition hover:text-neon-cyan hover:text-glow"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="rounded-2xl glass-effect px-3 py-2 text-sm font-medium text-text-primary bg-glass-bg border border-glass-border focus:border-neon-cyan/50 focus:outline-none transition cursor-pointer"
              >
                <option value="en" className={`${theme === 'dark' ? 'bg-dark-800' : 'bg-bg-secondary'} text-text-primary`}>🇺🇸 EN</option>
                <option value="es" className={`${theme === 'dark' ? 'bg-dark-800' : 'bg-bg-secondary'} text-text-primary`}>🇪🇸 ES</option>
                <option value="fr" className={`${theme === 'dark' ? 'bg-dark-800' : 'bg-bg-secondary'} text-text-primary`}>🇫🇷 FR</option>
                <option value="nl" className={`${theme === 'dark' ? 'bg-dark-800' : 'bg-bg-secondary'} text-text-primary`}>🇳🇱 NL</option>
                <option value="hi" className={`${theme === 'dark' ? 'bg-dark-800' : 'bg-bg-secondary'} text-text-primary`}>🇮🇳 HI</option>
              </select>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-2xl glass-effect p-2 text-text-primary transition hover:bg-glass-bg border border-glass-border hover:scale-105 transform"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => {
                if (isLoggedIn) {
                  setView('dashboard');
                } else {
                  setView('login');
                }
              }}
              className="rounded-full glass-effect px-4 py-2 text-sm font-medium text-text-primary transition hover:bg-neon-green/20 hover:shadow-neon-green border border-glass-border"
            >
              {isLoggedIn ? translations[language].buttons.goToDashboard : translations[language].buttons.startCollaborating}
            </button>
          </div>
        </header>
      </div>

      <main className="relative z-10 mx-auto mt-10 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-neon-cyan">{pageTitle}</p>
            <h1 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl text-glow">
              {view === 'home' ? translations[language].titles.home : pageTitle}
            </h1>
          </div>
          <div className="hidden items-center gap-3 rounded-3xl glass-effect px-4 py-3 shadow-neon backdrop-blur-xl border border-glass-border sm:flex">
            <span className="rounded-full bg-neon-cyan/20 px-3 py-1 text-xs font-semibold text-neon-cyan border border-neon-cyan/30">AI-Powered</span>
            <span className="text-sm text-text-secondary">Futuristic workflows</span>
          </div>
        </div>

        {pageLoading ? (
          <div className="overflow-hidden rounded-[32px] glass-effect p-10 shadow-neon border border-glass-border">
            <div className="flex flex-col gap-5">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="h-14 rounded-3xl bg-gradient-to-r from-glass-bg to-glass-bg/50 shadow-inner animate-shimmer" />
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-fadeIn">{renderMain()}</div>
        )}
      </main>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-[32px] glass-effect p-8 shadow-neon backdrop-blur-xl border border-white/10 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-neon-green/20 px-4 py-2 text-sm font-semibold text-neon-green ring-1 ring-neon-green/30 animate-pulse-neon">
              🚀 Next-Gen Research Platform
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl text-glow">
              A futuristic workspace for research collaboration.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-white/80">
              Harness AI-powered insights and immersive interfaces to accelerate your research breakthroughs.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-neon-cyan to-neon-green px-6 py-3 text-base font-semibold text-white transition hover:shadow-neon-green animate-pulse-neon">
                Start Collaborating
              </button>
              <button className="inline-flex items-center justify-center rounded-3xl glass-effect px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10 border border-white/10">
                Explore Features
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-neon-cyan/10 via-neon-orange/10 to-neon-pink/10 p-8 shadow-neon backdrop-blur-xl border border-white/10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-neon-cyan/20 blur-3xl animate-pulse" />
            <div className="absolute -left-12 bottom-10 h-36 w-36 rounded-full bg-neon-purple/20 blur-3xl animate-pulse" />
            <div className="relative rounded-[30px] glass-effect p-6 shadow-xl backdrop-blur-xl border border-white/10">
              <div className="flex items-center justify-between">
                <span className="inline-flex rounded-2xl bg-neon-green/20 px-3 py-1 text-xs font-semibold text-neon-green border border-neon-green/30">Live AI Flow</span>
                <span className="text-xs font-semibold text-neon-cyan">v2.0</span>
              </div>
              <div className="mt-8 space-y-4">
                <div className="rounded-3xl glass-effect p-5 shadow-sm border border-white/10">
                  <p className="text-sm font-semibold text-white">Neural Insights</p>
                  <p className="mt-2 text-sm text-white/70">Real-time AI suggestions and automated research workflows.</p>
                </div>
                <div className="rounded-3xl glass-effect p-5 shadow-sm border border-white/10">
                  <p className="text-sm font-semibold text-white">Holographic Timeline</p>
                  <p className="mt-2 text-sm text-white/70">3D visualization of research progress and milestones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {featureCards.map((feature, index) => (
          <article key={feature.title} className="group rounded-[28px] glass-effect p-8 shadow-neon transition hover:-translate-y-1 hover:shadow-neon-cyan border border-white/10 hover:border-neon-cyan/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-orange to-neon-pink text-white shadow-lg animate-pulse-neon">
              {index === 0 ? '🧠' : index === 1 ? '📊' : '🌐'}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/80">{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-[32px] border border-slate-200/70 bg-white p-8 shadow-soft sm:p-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neon-cyan">Testimonials</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">Trusted by research teams in the future.</h3>
          </div>
          <button className="rounded-3xl bg-gradient-to-r from-neon-purple to-neon-pink px-5 py-3 text-sm font-semibold text-white transition hover:shadow-neon-purple animate-pulse-neon">
            View Success Stories
          </button>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[28px] glass-effect p-6 border border-white/10">
              <p className="text-lg leading-8 text-white/80">"{item.quote}"</p>
              <p className="mt-5 font-semibold text-white">{item.name}</p>
              <p className="text-sm text-neon-cyan">{item.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cool Features: AI Paper Recommender */}
      <section className="rounded-[32px] glass-effect p-8 shadow-neon border border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">📚</span>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neon-green">Smart Discovery</p>
            <h3 className="text-2xl font-semibold text-white text-glow">AI-Powered Paper Recommender</h3>
          </div>
        </div>
        <p className="text-white/80 mb-6">Our neural network analyzes your research to suggest the most relevant papers from millions of sources.</p>
        <div className="grid gap-4 lg:grid-cols-3">
          {paperRecommendations.map((paper, idx) => (
            <div key={idx} className="rounded-3xl glass-effect p-5 border border-white/10 hover:border-neon-green/30 transition">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-semibold text-neon-green">Relevance: {paper.relevance}%</span>
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="font-semibold text-white text-sm mb-2">{paper.title}</h4>
              <p className="text-xs text-white/60">{paper.authors} • {paper.year}</p>
              <button className="mt-4 w-full rounded-2xl glass-effect px-3 py-2 text-xs font-semibold text-neon-green transition hover:bg-neon-green/10 border border-neon-green/30">
                Save & Read
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Cool Features: Citation Network */}
      <section className="rounded-[32px] glass-effect p-8 shadow-neon border border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🔗</span>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan">Network Analysis</p>
            <h3 className="text-2xl font-semibold text-white text-glow">Citation Network Visualizer</h3>
          </div>
        </div>
        <p className="text-white/80 mb-6">See how your research connects to other work. Visualize citation networks and discover collaborators.</p>
        <div className="grid gap-4 lg:grid-cols-4">
          {[
            { metric: 'Network Nodes', value: '1,247', icon: '🔵' },
            { metric: 'Active Connections', value: '3,421', icon: '🔗' },
            { metric: 'Citation Depth', value: '8 levels', icon: '📊' },
            { metric: 'Collaboration Links', value: '156', icon: '🤝' },
          ].map((item) => (
            <div key={item.metric} className="rounded-3xl glass-effect p-5 border border-white/10 text-center">
              <span className="text-3xl mb-2 block">{item.icon}</span>
              <p className="text-xs text-white/60 uppercase mb-2">{item.metric}</p>
              <p className="text-2xl font-bold text-neon-cyan text-glow">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cool Features: Research Impact Calculator */}
      <section className="rounded-[32px] glass-effect p-8 shadow-neon border border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">📈</span>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neon-orange">Analytics</p>
            <h3 className="text-2xl font-semibold text-white text-glow">Research Impact Metrics</h3>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl glass-effect p-6 border border-white/10">
            <h4 className="font-semibold text-white mb-4">Your Research Profile</h4>
            {researchMetrics.map((metric) => (
              <div key={metric.label} className="mb-4 pb-4 border-b border-white/10 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/70">{metric.label}</span>
                  <span className={`text-xs font-semibold ${metric.trend === 'up' ? 'text-neon-green' : 'text-neon-red'}`}>
                    {metric.change} {metric.trend === 'up' ? '↗' : '↘'}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-neon-cyan to-neon-green" style={{width: metric.value.replace(/[^0-9]/g, '') + '%'}}></div>
                </div>
                <p className="text-lg font-bold text-white mt-2">{metric.value}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl glass-effect p-6 border border-white/10 flex flex-col justify-between">
            <div>
              <h4 className="font-semibold text-white mb-4">Impact Score</h4>
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8"/>
                    <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient)" strokeWidth="8" strokeDasharray="212 282" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00d4ff"/>
                        <stop offset="100%" stopColor="#ec4899"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-neon-cyan">7.8</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/70 text-center">Top 15% of researchers in your field</p>
            </div>
            <button className="w-full rounded-2xl bg-gradient-to-r from-neon-purple to-neon-pink px-4 py-3 text-sm font-semibold text-white transition hover:shadow-neon-pink animate-pulse-neon">
              View Detailed Analytics
            </button>
          </div>
        </div>
      </section>

      {/* Cool Features: Real-time Collaboration */}
      <section className="rounded-[32px] glass-effect p-8 shadow-neon border border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">👥</span>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neon-pink">Community</p>
            <h3 className="text-2xl font-semibold text-white text-glow">Global Collaboration Leaderboard</h3>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm text-white/60 font-semibold">Rank</th>
                <th className="text-left py-3 px-4 text-sm text-white/60 font-semibold">Researcher</th>
                <th className="text-left py-3 px-4 text-sm text-white/60 font-semibold">Institution</th>
                <th className="text-right py-3 px-4 text-sm text-white/60 font-semibold">Contributions</th>
              </tr>
            </thead>
            <tbody>
              {collaborationLeaderboard.map((researcher) => (
                <tr key={researcher.rank} className="border-b border-white/10 hover:bg-white/5 transition">
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${
                      researcher.rank === 1 ? 'bg-yellow-500/20 text-yellow-400' :
                      researcher.rank === 2 ? 'bg-gray-400/20 text-gray-300' :
                      researcher.rank === 3 ? 'bg-orange-500/20 text-orange-400' :
                      'bg-white/10 text-white'
                    }`}>
                      {researcher.rank}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-white font-medium">{researcher.name}</td>
                  <td className="py-4 px-4 text-white/70">{researcher.institution}</td>
                  <td className="py-4 px-4 text-right">
                    <span className="inline-block rounded-full bg-neon-green/20 px-3 py-1 text-sm font-semibold text-neon-green">
                      {researcher.contributions}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function DashboardPage() {
  const [sidebarSection, setSidebarSection] = useState('dashboard');
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [newProjectData, setNewProjectData] = useState({ title: '', description: '' });

  const handleSidebarClick = (section) => {
    setSidebarSection(section);
    addNotification(`Navigated to ${section}`);
  };

  const handleCreateProject = () => {
    if (newProjectData.title && newProjectData.description) {
      createProject(newProjectData);
      setNewProjectData({ title: '', description: '' });
      setShowCreateProject(false);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <aside className="space-y-6 rounded-[32px] glass-effect p-6 shadow-neon border border-white/10 h-fit sticky top-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.24em] text-neon-cyan">Neural Hub</p>
          <h2 className="text-2xl font-semibold text-white text-glow">Command Center</h2>
        </div>
        <nav className="space-y-2">
          {[
            { name: 'Dashboard', icon: '📊', color: 'neon-cyan' },
            { name: 'Projects', icon: '🚀', color: 'neon-purple' },
            { name: 'AI Assistant', icon: '🤖', color: 'neon-green' },
            { name: 'Messages', icon: '💬', color: 'neon-pink' },
            { name: 'Analytics', icon: '📈', color: 'neon-orange' },
            { name: 'Settings', icon: '⚙️', color: 'neon-cyan' }
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => handleSidebarClick(item.name)}
              className={`flex w-full items-center justify-between rounded-3xl glass-effect px-4 py-3 text-left text-sm font-medium transition border ${
                sidebarSection === item.name
                  ? `bg-${item.color}/20 border-${item.color}/50 text-white shadow-lg`
                  : 'text-white hover:bg-white/10 hover:shadow-neon border-white/10'
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                {item.name}
              </span>
              <span className="text-xs text-white/60">{sidebarSection === item.name ? '✓' : '↗'}</span>
            </button>
          ))}
        </nav>

        <div className="rounded-3xl glass-effect p-4 border border-white/10">
          <h3 className="text-sm font-semibold text-white mb-3">System Status</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/70">AI Engine</span>
              <span className="text-xs text-neon-green animate-pulse">Online</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/70">Neural Net</span>
              <span className="text-xs text-neon-cyan animate-pulse">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/70">Data Sync</span>
              <span className="text-xs text-neon-purple animate-pulse">Syncing</span>
            </div>
          </div>
        </div>
      </aside>

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <aside className="space-y-6 rounded-[32px] glass-effect p-6 shadow-neon border border-white/10 h-fit sticky top-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.24em] text-neon-cyan">Neural Hub</p>
          <h2 className="text-2xl font-semibold text-white text-glow">Command Center</h2>
        </div>
        <nav className="space-y-2">
          {[
            { name: 'Dashboard', icon: '📊', color: 'neon-cyan' },
            { name: 'Projects', icon: '🚀', color: 'neon-purple' },
            { name: 'AI Assistant', icon: '🤖', color: 'neon-green' },
            { name: 'Messages', icon: '💬', color: 'neon-pink' },
            { name: 'Analytics', icon: '📈', color: 'neon-orange' },
            { name: 'Settings', icon: '⚙️', color: 'neon-cyan' }
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => handleSidebarClick(item.name)}
              className={`flex w-full items-center justify-between rounded-3xl glass-effect px-4 py-3 text-left text-sm font-medium transition border ${
                sidebarSection === item.name
                  ? `bg-${item.color}/20 border-${item.color}/50 text-white shadow-lg`
                  : 'text-white hover:bg-white/10 hover:shadow-neon border-white/10'
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                {item.name}
              </span>
              <span className="text-xs text-white/60">{sidebarSection === item.name ? '✓' : '↗'}</span>
            </button>
          ))}
        </nav>

        <div className="rounded-3xl glass-effect p-4 border border-white/10">
          <h3 className="text-sm font-semibold text-white mb-3">System Status</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/70">AI Engine</span>
              <span className="text-xs text-neon-green animate-pulse">Online</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/70">Neural Net</span>
              <span className="text-xs text-neon-cyan animate-pulse">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/70">Data Sync</span>
              <span className="text-xs text-neon-purple animate-pulse">Syncing</span>
            </div>
          </div>
        </div>
      </aside>

      <section className="space-y-6">
        {/* Enhanced Stats Grid */}
        <div className="grid gap-6 rounded-[32px] glass-effect p-6 shadow-neon border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl glass-effect p-5 transition hover:-translate-y-1 hover:shadow-neon-cyan border border-white/10">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/70">Active Projects</p>
              <span className="text-2xl">🚀</span>
            </div>
            <p className="mt-4 text-3xl font-semibold text-neon-cyan text-glow">7</p>
            <p className="text-xs text-neon-cyan mt-1">+2 from last week</p>
          </div>
          <div className="rounded-3xl glass-effect p-5 transition hover:-translate-y-1 hover:shadow-neon-purple border border-white/10">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/70">AI Insights</p>
              <span className="text-2xl">🧠</span>
            </div>
            <p className="mt-4 text-3xl font-semibold text-neon-purple text-glow">23</p>
            <p className="text-xs text-neon-pink mt-1">Generated today</p>
          </div>
          <div className="rounded-3xl glass-effect p-5 transition hover:-translate-y-1 hover:shadow-neon-green border border-white/10">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/70">Collaborators</p>
              <span className="text-2xl">👥</span>
            </div>
            <p className="mt-4 text-3xl font-semibold text-neon-green text-glow">12</p>
            <p className="text-xs text-neon-cyan mt-1">Active this month</p>
          </div>
          <div className="rounded-3xl glass-effect p-5 transition hover:-translate-y-1 hover:shadow-neon-pink border border-white/10">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/70">Publications</p>
              <span className="text-2xl">📄</span>
            </div>
            <p className="mt-4 text-3xl font-semibold text-neon-pink text-glow">3</p>
            <p className="text-xs text-neon-orange mt-1">Ready for review</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Welcome Section with AI Assistant */}
          <div className="rounded-[32px] glass-effect p-6 shadow-neon border border-white/10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan">AI Command Center</p>
                <h3 className="mt-2 text-xl font-semibold text-white text-glow">Welcome back, Researcher 👋</h3>
                <p className="text-sm text-white/70 mt-1">Your AI assistant has analyzed 5 new research papers today</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowAIChat(!showAIChat)}
                  className="rounded-3xl bg-gradient-to-r from-neon-cyan to-neon-green px-4 py-2 text-sm font-semibold text-white transition hover:shadow-neon-cyan animate-pulse-neon hover:scale-105 transform"
                >
                  Ask AI Assistant
                </button>
                <button
                  onClick={() => setShowCreateProject(true)}
                  className="rounded-3xl glass-effect px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 border border-white/10 hover:scale-105 transform"
                >
                  + New Project
                </button>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {projects.slice(0, 3).map((item, index) => (
                <div key={item.id || item.title} className="rounded-3xl glass-effect p-5 transition hover:-translate-y-1 hover:shadow-neon border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg">{['🔬', '📊', '🌐'][index]}</span>
                    <span className="text-xs text-neon-green">Active</span>
                  </div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm text-white/70">{item.description}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {(item.contributors || []).slice(0, 3).map((_, i) => (
                        <div key={i} className="h-6 w-6 rounded-full bg-gradient-to-r from-neon-cyan to-neon-green border-2 border-dark-800"></div>
                      ))}
                    </div>
                    <span className="text-xs text-white/60">+{(item.contributors || []).length} members</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Activity and AI Insights Grid */}
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-[32px] glass-effect p-6 shadow-neon border border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white text-glow">Neural Activity Feed</h3>
                <span className="rounded-full bg-neon-green/20 px-3 py-1 text-xs font-semibold text-neon-green border border-neon-green/30 animate-pulse">Live</span>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  { action: 'AI generated 3 new research hypotheses', time: '2m ago', type: 'ai' },
                  { action: 'New collaborator joined NeuroAI project', time: '15m ago', type: 'user' },
                  { action: 'Data analysis completed for Climate Study', time: '1h ago', type: 'system' },
                  { action: 'Literature review updated with 5 new papers', time: '2h ago', type: 'ai' },
                  { action: 'Team milestone achieved: Phase 1 complete', time: '3h ago', type: 'achievement' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 rounded-3xl glass-effect p-4 border border-white/10 hover:border-white/20 transition">
                    <div className={`h-3 w-3 rounded-full animate-pulse ${
                      item.type === 'ai' ? 'bg-neon-cyan' :
                      item.type === 'user' ? 'bg-neon-green' :
                      item.type === 'system' ? 'bg-neon-purple' :
                      'bg-neon-pink'
                    }`} />
                    <div className="flex-1">
                      <p className="font-medium text-white text-sm">{item.action}</p>
                      <p className="text-sm text-white/60">{item.time}</p>
                    </div>
                    <span className="text-xs text-white/40">#{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* AI Insights Panel */}
              <div className="rounded-[32px] glass-effect p-6 shadow-neon border border-white/10">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.32em] text-neon-cyan">AI Insights</p>
                    <h3 className="mt-3 text-lg font-semibold text-white text-glow">Smart Suggestions</h3>
                  </div>
                  <span className="rounded-full bg-neon-purple/20 px-3 py-1 text-xs font-semibold text-neon-purple border border-neon-purple/30">AI</span>
                </div>
                <div className="mt-5 space-y-4">
                  {[
                    'Consider integrating quantum computing methods in your neural network research',
                    'Cross-reference with recent Nature publication on AI ethics frameworks',
                    'Optimize data preprocessing pipeline for 40% faster analysis',
                    'Explore collaboration with Stanford AI lab for joint publication'
                  ].map((hint, index) => (
                    <div key={index} className="rounded-3xl glass-effect p-4 text-sm text-white/80 border border-white/10 hover:border-neon-orange/30 transition">
                      <div className="flex items-start gap-3">
                        <span className="text-neon-orange mt-0.5">💡</span>
                        <span>{hint}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="rounded-[32px] glass-effect p-6 shadow-neon border border-white/10">
                <h3 className="text-lg font-semibold text-white text-glow mb-4">Quick Actions</h3>
                <div className="grid gap-3">
                  {[
                    { label: 'Start New Project', icon: '➕', color: 'neon-cyan' },
                    { label: 'Invite Collaborator', icon: '👥', color: 'neon-green' },
                    { label: 'Run AI Analysis', icon: '🤖', color: 'neon-purple' },
                    { label: 'Export Data', icon: '📤', color: 'neon-pink' }
                  ].map((action) => (
                    <button 
                      key={action.label}
                      onClick={() => {
                        addNotification(`${action.label} initiated`);
                      }}
                      className={`w-full rounded-3xl glass-effect p-3 text-left transition border hover:bg-${action.color}/10 hover:border-${action.color}/30 border-white/10 cursor-pointer transform hover:scale-105`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{action.icon}</span>
                        <span className="text-sm font-medium text-white">{action.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* New Dashboard Section: Funding Opportunities */}
          <div className="rounded-[32px] glass-effect p-6 shadow-neon border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">Funding Opportunities</h3>
                  <p className="text-xs text-white/60">Tailored for your research profile</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  addNotification('Browsing all funding opportunities...');
                }}
                className="rounded-2xl glass-effect px-3 py-2 text-xs font-semibold text-neon-green transition hover:bg-neon-green/10 border border-neon-green/30 hover:scale-105 transform"
              >
                Browse All
              </button>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {fundingOpportunities.map((opportunity, idx) => (
                <div key={idx} className="rounded-3xl glass-effect p-5 border border-white/10 hover:border-neon-green/30 transition">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">🏆</span>
                    <span className="text-xs font-semibold text-neon-orange rounded-full bg-neon-orange/10 px-2 py-1">
                      Deadline: {opportunity.deadline}
                    </span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">{opportunity.title}</h4>
                  <p className="text-2xl font-bold text-neon-green mb-3">{opportunity.amount}</p>
                  <button 
                    onClick={() => {
                      addNotification(`Application submitted for ${opportunity.title}!`);
                    }}
                    className="w-full rounded-2xl glass-effect px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10 border border-white/20 hover:scale-105 transform"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* New Dashboard Section: Peer Review Queue */}
          <div className="rounded-[32px] glass-effect p-6 shadow-neon border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">Peer Review Queue</h3>
                  <p className="text-xs text-white/60">{peerReviewQueue.length} papers waiting for your review</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  addNotification('Peer review session started!');
                }}
                className="rounded-2xl bg-gradient-to-r from-neon-purple to-neon-pink px-3 py-2 text-xs font-semibold text-white transition hover:shadow-neon-purple hover:scale-105 transform"
              >
                Start Reviewing
              </button>
            </div>
            <div className="space-y-3">
              {peerReviewQueue.map((review, idx) => (
                <div key={idx} className="rounded-3xl glass-effect p-5 border border-white/10 hover:border-neon-purple/30 transition flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">{review.title}</h4>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-white/60">by {review.author}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        review.complexity === 'High' ? 'bg-neon-red/20 text-neon-red' :
                        review.complexity === 'Medium' ? 'bg-neon-orange/20 text-neon-orange' :
                        'bg-neon-green/20 text-neon-green'
                      }`}>
                        {review.complexity} Complexity
                      </span>
                      <span className="text-neon-cyan">{review.daysLeft} days left</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      addNotification(`Review opened: ${review.title}`);
                    }}
                    className="text-neon-purple hover:text-neon-pink transition ml-4 hover:scale-125 transform"
                  >
                    →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* New Dashboard Section: Research Recommendations */}
          <div className="rounded-[32px] glass-effect p-6 shadow-neon border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">AI Research Assistant</h3>
                  <p className="text-xs text-white/60">Smart recommendations based on your work</p>
                </div>
              </div>
              <button 
                onClick={() => setShowAIChat(!showAIChat)}
                className="rounded-2xl glass-effect px-3 py-2 text-xs font-semibold text-neon-cyan transition hover:bg-neon-cyan/10 border border-neon-cyan/30 hover:scale-105 transform"
              >
                Chat with AI
              </button>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-3xl glass-effect p-5 border border-white/10">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-xl">🤖</span>
                  <div>
                    <p className="text-sm font-semibold text-white">Next Steps Suggested</p>
                    <p className="text-xs text-white/60">Based on your latest uploads</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="text-sm text-white/80">• Conduct additional statistical analysis on dataset 3</li>
                  <li className="text-sm text-white/80">• Update methodology section with recent framework</li>
                  <li className="text-sm text-white/80">• Schedule collaboration meeting with team</li>
                </ul>
              </div>
              <div className="rounded-3xl glass-effect p-5 border border-white/10">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-xl">📊</span>
                  <div>
                    <p className="text-sm font-semibold text-white">Productivity Insights</p>
                    <p className="text-xs text-white/60">This week's performance</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">Writing Rate</span>
                    <span className="text-sm font-semibold text-neon-green">+23%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">Collaboration Activity</span>
                    <span className="text-sm font-semibold text-neon-cyan">+12%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">Review Completion</span>
                    <span className="text-sm font-semibold text-neon-purple">94%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Dashboard Section: Published & Submitted */}
          <div className="rounded-[32px] glass-effect p-6 shadow-neon border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">📚</span>
              <div>
                <h3 className="text-xl font-semibold text-white">Publication Timeline</h3>
                <p className="text-xs text-white/60">Track your research journey</p>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-4">
              {[
                { status: 'Draft', count: 3, icon: '📝', color: 'neon-gray' },
                { status: 'Under Review', count: 2, icon: '👁️', color: 'neon-orange' },
                { status: 'Accepted', count: 5, icon: '✅', color: 'neon-green' },
                { status: 'Published', count: 8, icon: '🏆', color: 'neon-cyan' },
              ].map((item) => (
                <div key={item.status} className="rounded-3xl glass-effect p-5 text-center border border-white/10 hover:border-neon-cyan/30 transition">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <p className="text-xs text-white/60 uppercase mb-2">{item.status}</p>
                  <p className="text-2xl font-bold text-neon-cyan">{item.count}</p>
                  <button 
                    onClick={() => {
                      addNotification(`Viewing all ${item.status} publications...`);
                    }}
                    className="w-full mt-4 rounded-2xl glass-effect px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10 border border-white/20 hover:scale-105 transform"
                  >
                    View All
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>

      {/* Enhanced Notification System */}
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`fixed bottom-8 right-8 rounded-3xl glass-effect p-4 border shadow-neon animate-slide-in max-w-sm z-40 ${theme === 'dark' ? '' : 'light-notification'} ${
            notification.type === 'success' ? 'border-neon-green/30 shadow-neon-green' :
            notification.type === 'error' ? 'border-neon-red/30 shadow-neon-red' :
            'border-neon-cyan/30 shadow-neon-cyan'
          }`}
          style={{ bottom: `${8 + (notifications.length - notifications.indexOf(notification) - 1) * 80}px` }}
        >
          <div className="flex items-center gap-3">
            <span className="text-lg">
              {notification.type === 'success' ? '✅' :
               notification.type === 'error' ? '❌' : '✨'}
            </span>
            <p className="text-sm text-text-primary font-medium">{notification.message}</p>
            <button
              onClick={() => setNotifications(prev => prev.filter(n => n.id !== notification.id))}
              className="text-text-secondary hover:text-text-primary transition ml-2"
            >
              ✕
            </button>
          </div>
        </div>
      ))}

      {/* AI Chat Modal */}
      {showAIChat && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-2xl rounded-[40px] glass-effect p-8 shadow-neon border border-white/10 animate-slide-in">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan">AI Assistant</p>
                <h3 className="text-2xl font-semibold text-white text-glow mt-2">Research Companion</h3>
              </div>
              <button 
                onClick={() => setShowAIChat(false)}
                className="text-white/60 hover:text-white transition text-2xl w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Chat History */}
            <div className="mb-6 space-y-4 max-h-64 overflow-y-auto">
              {aiChatHistory.map((msg, index) => (
                <div key={index} className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : ''}`}>
                  {msg.type === 'ai' && <span className="text-2xl flex-shrink-0">🤖</span>}
                  <div className={`rounded-3xl p-4 border flex-1 max-w-xs ${
                    msg.type === 'ai'
                      ? 'bg-neon-cyan/10 border-neon-cyan/30'
                      : 'bg-neon-green/20 border-neon-green/30'
                  }`}>
                    <p className="text-sm text-white">{msg.message}</p>
                  </div>
                  {msg.type === 'user' && <span className="text-2xl flex-shrink-0">👤</span>}
                </div>
              ))}
            </div>

            {/* Quick Suggestions */}
            <div className="mb-6 grid gap-2 sm:grid-cols-2">
              <button
                onClick={() => sendAIMessage('Please analyze my current research data')}
                className="rounded-2xl glass-effect p-3 text-left text-xs font-medium text-white transition hover:bg-neon-cyan/10 border border-white/10 hover:border-neon-cyan/30 hover:scale-105 transform"
              >
                📊 Analyze my data
              </button>
              <button
                onClick={() => sendAIMessage('Help me with a literature review')}
                className="rounded-2xl glass-effect p-3 text-left text-xs font-medium text-white transition hover:bg-neon-green/10 border border-white/10 hover:border-neon-green/30 hover:scale-105 transform"
              >
                📚 Literature review
              </button>
              <button
                onClick={() => sendAIMessage('Create data visualizations for my results')}
                className="rounded-2xl glass-effect p-3 text-left text-xs font-medium text-white transition hover:bg-neon-purple/10 border border-white/10 hover:border-neon-purple/30 hover:scale-105 transform"
              >
                📈 Visualize results
              </button>
              <button
                onClick={() => sendAIMessage('Review my research methodology')}
                className="rounded-2xl glass-effect p-3 text-left text-xs font-medium text-white transition hover:bg-neon-pink/10 border border-white/10 hover:border-neon-pink/30 hover:scale-105 transform"
              >
                ✅ Review methods
              </button>
            </div>

            {/* Input Area */}
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ask anything about your research..."
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && e.target.value.trim()) {
                    sendAIMessage(e.target.value);
                    e.target.value = '';
                  }
                }}
                className="flex-1 rounded-2xl glass-effect px-4 py-3 text-sm text-white placeholder-white/50 border border-white/10 focus:outline-none focus:border-neon-cyan/50 bg-white/5"
              />
              <button
                onClick={() => {
                  const input = document.querySelector('input[placeholder="Ask anything about your research..."]');
                  if (input && input.value.trim()) {
                    sendAIMessage(input.value);
                    input.value = '';
                  }
                }}
                className="rounded-2xl bg-gradient-to-r from-neon-cyan to-neon-green px-4 py-3 text-white font-semibold transition hover:shadow-neon-cyan hover:scale-105 transform"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Project Modal */}
      {showCreateProject && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-md rounded-[40px] glass-effect p-8 shadow-neon border border-white/10 animate-slide-in">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan">Create Project</p>
                <h3 className="text-2xl font-semibold text-white text-glow mt-2">New Research Initiative</h3>
              </div>
              <button
                onClick={() => setShowCreateProject(false)}
                className="text-white/60 hover:text-white transition text-2xl w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Project Title</label>
                <input
                  type="text"
                  value={newProjectData.title}
                  onChange={(e) => setNewProjectData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter project title..."
                  className="w-full rounded-2xl glass-effect px-4 py-3 text-sm text-white placeholder-white/50 border border-white/10 focus:outline-none focus:border-neon-cyan/50 bg-white/5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Description</label>
                <textarea
                  value={newProjectData.description}
                  onChange={(e) => setNewProjectData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe your research project..."
                  rows={4}
                  className="w-full rounded-2xl glass-effect px-4 py-3 text-sm text-white placeholder-white/50 border border-white/10 focus:outline-none focus:border-neon-cyan/50 bg-white/5 resize-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowCreateProject(false)}
                  className="flex-1 rounded-2xl glass-effect px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10 border border-white/10"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateProject}
                  disabled={!newProjectData.title || !newProjectData.description}
                  className="flex-1 rounded-2xl bg-gradient-to-r from-neon-cyan to-neon-green px-4 py-3 text-sm font-semibold text-white transition hover:shadow-neon-cyan disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transform"
                >
                  Create Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectPage({ projectTab, setProjectTab, selectedTimeline, setSelectedTimeline, focusMode, setFocusMode, addNotification }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.9fr_1fr]">
      <div className="space-y-6 rounded-[36px] border border-slate-200/80 bg-white p-8 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.36em] text-brand-600">Project Workspace</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">AI Ethics Literature Review</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Data Ethics', 'Review', 'Team'].map((tag) => (
                <span key={tag} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => setFocusMode(true)}
            className="inline-flex items-center justify-center rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Enter Focus Mode
          </button>
        </div>
        <div className="rounded-[32px] glass-effect p-4 ring-1 ring-white/10 sm:p-5 shadow-neon border border-white/10">
          <div className="flex flex-wrap items-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setProjectTab(tab);
                  addNotification(`Switched to ${tab} tab`);
                }}
                className={`relative rounded-3xl px-6 py-3 text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  projectTab === tab
                    ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-white shadow-neon-cyan border border-neon-cyan/50'
                    : 'text-white/70 hover:text-white glass-effect border border-white/10 hover:border-neon-cyan/30 hover:shadow-neon-cyan/20'
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab === 'overview' && '📊'}
                  {tab === 'notes' && '📝'}
                  {tab === 'discussion' && '💬'}
                  {tab === 'files' && '📁'}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </span>
                {projectTab === tab && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {projectTab === 'overview' && (
          <div className="space-y-6 animate-slide-in">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
              <div className="space-y-4 rounded-[32px] glass-effect p-6 shadow-neon border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white text-glow">Neural Evolution Timeline</h3>
                    <p className="text-sm leading-7 text-white/70">Track changes with AI-powered progression analysis</p>
                  </div>
                  <button
                    onClick={() => addNotification('AI analyzing timeline patterns...')}
                    className="rounded-2xl glass-effect px-3 py-2 text-xs font-semibold text-neon-cyan transition hover:bg-neon-cyan/10 border border-neon-cyan/30"
                  >
                    🤖 Analyze
                  </button>
                </div>
                <div className="mt-6 space-y-5">
                  {timelineNodes.map((node, index) => (
                    <button
                      key={node.version}
                      onClick={() => {
                        setSelectedTimeline(node);
                        addNotification(`Selected timeline: ${node.label}`);
                      }}
                      className={`group flex items-start gap-4 rounded-3xl glass-effect p-5 text-left transition-all duration-300 hover:scale-102 border ${
                        selectedTimeline.version === node.version
                          ? 'border-neon-cyan/50 bg-neon-cyan/10 shadow-neon-cyan'
                          : 'border-white/10 hover:border-neon-cyan/30 hover:shadow-neon-cyan/20'
                      }`}
                    >
                      <div className={`mt-1 h-4 w-4 rounded-full transition-all duration-300 ${
                        selectedTimeline.version === node.version
                          ? 'bg-neon-cyan shadow-neon-cyan animate-pulse'
                          : 'bg-white/50 group-hover:bg-neon-cyan/70'
                      }`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-white">{node.version} — {node.label}</p>
                          <span className="text-xs text-white/50">{index + 1}/{timelineNodes.length}</span>
                        </div>
                        <p className="mt-2 text-sm text-white/70">Review the changes and next action items for this milestone.</p>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-xs px-2 py-1 rounded-full bg-neon-green/20 text-neon-green">Completed</span>
                          <span className="text-xs text-white/50">AI Confidence: 94%</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="rounded-[32px] glass-effect p-6 shadow-neon border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm uppercase tracking-[0.32em] text-neon-cyan">Selected Milestone</p>
                  <span className="text-xs px-2 py-1 rounded-full bg-neon-purple/20 text-neon-purple">Active</span>
                </div>
                <h3 className="text-xl font-semibold text-white text-glow">{selectedTimeline.label}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{selectedTimeline.details}</p>
                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl glass-effect p-4 border border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">Progress</span>
                      <span className="text-sm font-semibold text-neon-green">87%</span>
                    </div>
                    <div className="mt-2 w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-neon-cyan to-neon-green h-2 rounded-full" style={{width: '87%'}}></div>
                    </div>
                  </div>
                  <div className="rounded-2xl glass-effect p-4 border border-white/10">
                    <p className="text-sm font-semibold text-white">Next Actions</p>
                    <ul className="mt-2 space-y-1 text-sm text-white/70">
                      <li>• Update methodology section</li>
                      <li>• Review data analysis results</li>
                      <li>• Schedule team feedback session</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {projectTab === 'notes' && (
          <div className="space-y-6 animate-slide-in">
            <div className="rounded-[32px] glass-effect p-6 shadow-neon border border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-neon-cyan">Neural Notes</p>
                  <h3 className="mt-2 text-xl font-semibold text-white text-glow">AI-Powered Research Journal</h3>
                  <p className="text-sm text-white/70">Smart suggestions and auto-organization</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => addNotification('AI analyzing your notes for insights...')}
                    className="rounded-3xl glass-effect px-3 py-2 text-sm font-semibold text-neon-purple transition hover:bg-neon-purple/10 border border-neon-purple/30 hover:scale-105 transform"
                  >
                    🤖 Analyze
                  </button>
                  <button
                    onClick={() => addNotification('New note created. Start writing!')}
                    className="rounded-3xl bg-gradient-to-r from-neon-cyan to-neon-green px-4 py-2 text-sm font-semibold text-white transition hover:shadow-neon-cyan hover:scale-105 transform"
                  >
                    ➕ Add Note
                  </button>
                </div>
              </div>
              <div className="mt-6 rounded-[30px] glass-effect p-5 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📝</span>
                    <span className="text-sm font-medium text-white">Live Editor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-neon-green/20 text-neon-green">Auto-save</span>
                    <span className="text-xs text-white/50">Word count: 247</span>
                  </div>
                </div>
                <div className="prose prose-slate max-w-none text-sm leading-7 text-white/90">
                  <p contentEditable className="min-h-[240px] outline-none text-white placeholder-white/50">
                    Start writing your note here. Highlight key observations or draft your discussion points in a clean research flow.
                    <br /><br />
                    <strong>Key Findings:</strong><br />
                    • Recent studies show promising results in neural network optimization<br />
                    • Cross-validation results indicate 94% accuracy improvement<br />
                    • Next steps: Implement A/B testing framework
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    <button className="text-xs px-3 py-1 rounded-full glass-effect text-white/70 hover:text-white border border-white/20">Format</button>
                    <button className="text-xs px-3 py-1 rounded-full glass-effect text-white/70 hover:text-white border border-white/20">Insert Link</button>
                    <button className="text-xs px-3 py-1 rounded-full glass-effect text-white/70 hover:text-white border border-white/20">Add Image</button>
                  </div>
                  <button
                    onClick={() => addNotification('Note saved successfully!')}
                    className="text-xs px-3 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan hover:bg-neon-cyan/30"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[30px] glass-effect p-5 shadow-neon border border-neon-cyan/20 hover:border-neon-cyan/40 transition">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan">AI Highlight</p>
                  <span className="text-lg">💡</span>
                </div>
                <p className="text-sm text-white/90">Focus on the question: how does this literature connect to our hypothesis?</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-neon-orange/20 text-neon-orange">Priority</span>
                  <span className="text-xs text-white/50">AI generated</span>
                </div>
              </div>
              <div className="rounded-[30px] glass-effect p-5 shadow-neon border border-neon-purple/20 hover:border-neon-purple/40 transition">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-neon-purple">Smart Tip</p>
                  <span className="text-lg">🎯</span>
                </div>
                <p className="text-sm text-white/90">Use this space for quick annotations and collaborative prompts.</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-neon-green/20 text-neon-green">Productive</span>
                  <span className="text-xs text-white/50">Research pattern</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {projectTab === 'discussion' && (
          <div className="space-y-6 animate-slide-in">
            <div className="rounded-[32px] glass-effect p-6 shadow-neon border border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-neon-orange">Neural Discussion</p>
                  <h3 className="mt-2 text-xl font-semibold text-white text-glow">Collaborative Research Forum</h3>
                  <p className="text-sm text-white/70">Real-time AI-moderated conversations</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => addNotification('AI summarizing discussion threads...')}
                    className="rounded-3xl glass-effect px-3 py-2 text-sm font-semibold text-neon-orange transition hover:bg-neon-orange/10 border border-neon-orange/30 hover:scale-105 transform"
                  >
                    🤖 Summarize
                  </button>
                  <button
                    onClick={() => addNotification('New discussion thread started!')}
                    className="rounded-3xl bg-gradient-to-r from-neon-orange to-neon-pink px-4 py-2 text-sm font-semibold text-white transition hover:shadow-neon-orange hover:scale-105 transform"
                  >
                    ➕ New Thread
                  </button>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-[30px] glass-effect p-5 border border-white/10 hover:border-neon-cyan/30 transition">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue flex items-center justify-center text-sm font-semibold text-white shadow-neon">
                      DR
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-white">Dr. Sarah Chen</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-neon-green/20 text-neon-green">Online</span>
                        <span className="text-xs text-white/50">2h ago</span>
                      </div>
                      <p className="text-sm text-white/90 leading-6">
                        Great progress on the methodology section! The statistical approach looks solid. One suggestion: have you considered using Bayesian inference for the uncertainty quantification?
                      </p>
                      <div className="mt-3 flex items-center gap-4">
                        <button className="text-xs px-3 py-1 rounded-full glass-effect text-white/70 hover:text-neon-cyan border border-white/20 hover:border-neon-cyan/50">👍 12</button>
                        <button className="text-xs px-3 py-1 rounded-full glass-effect text-white/70 hover:text-neon-cyan border border-white/20 hover:border-neon-cyan/50">💬 Reply</button>
                        <button className="text-xs px-3 py-1 rounded-full glass-effect text-white/70 hover:text-neon-cyan border border-white/20 hover:border-neon-cyan/50">🔗 Share</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[30px] glass-effect p-5 border border-white/10 hover:border-neon-purple/30 transition">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink flex items-center justify-center text-sm font-semibold text-white shadow-neon">
                      ML
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-white">Prof. Michael Liu</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-neon-orange/20 text-neon-orange">Expert</span>
                        <span className="text-xs text-white/50">4h ago</span>
                      </div>
                      <p className="text-sm text-white/90 leading-6">
                        Excellent point about Bayesian methods! I've attached a recent paper that demonstrates this approach in similar research contexts. The confidence intervals are much more informative.
                      </p>
                      <div className="mt-3 flex items-center gap-4">
                        <button className="text-xs px-3 py-1 rounded-full glass-effect text-white/70 hover:text-neon-purple border border-white/20 hover:border-neon-purple/50">👍 8</button>
                        <button className="text-xs px-3 py-1 rounded-full glass-effect text-white/70 hover:text-neon-purple border border-white/20 hover:border-neon-purple/50">💬 Reply</button>
                        <button className="text-xs px-3 py-1 rounded-full glass-effect text-white/70 hover:text-neon-purple border border-white/20 hover:border-neon-purple/50">📎 Paper.pdf</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[30px] glass-effect p-5 border border-white/10 hover:border-neon-green/30 transition">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-neon-green to-neon-cyan flex items-center justify-center text-sm font-semibold text-white shadow-neon">
                      AI
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-white">AI Research Assistant</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan">Bot</span>
                        <span className="text-xs text-white/50">1h ago</span>
                      </div>
                      <p className="text-sm text-white/90 leading-6">
                        Based on the discussion, I recommend exploring PyMC3 for Bayesian inference implementation. The library provides excellent documentation and community support for research applications.
                      </p>
                      <div className="mt-3 flex items-center gap-4">
                        <button className="text-xs px-3 py-1 rounded-full glass-effect text-white/70 hover:text-neon-green border border-white/20 hover:border-neon-green/50">👍 15</button>
                        <button className="text-xs px-3 py-1 rounded-full glass-effect text-white/70 hover:text-neon-green border border-white/20 hover:border-neon-green/50">💬 Reply</button>
                        <button className="text-xs px-3 py-1 rounded-full glass-effect text-white/70 hover:text-neon-green border border-white/20 hover:border-neon-green/50">🔗 PyMC3 Docs</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-[30px] glass-effect p-5 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">💬</span>
                  <span className="text-sm font-medium text-white">Quick Reply</span>
                </div>
                <textarea
                  placeholder="Share your thoughts on this discussion..."
                  className="w-full min-h-[80px] rounded-2xl glass-effect p-4 text-sm text-white placeholder-white/50 outline-none border border-white/20 focus:border-neon-cyan/50 transition"
                />
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    <button className="text-xs px-3 py-1 rounded-full glass-effect text-white/70 hover:text-white border border-white/20">@ Mention</button>
                    <button className="text-xs px-3 py-1 rounded-full glass-effect text-white/70 hover:text-white border border-white/20"># Tag</button>
                  </div>
                  <button
                    onClick={() => addNotification('Reply posted successfully!')}
                    className="text-xs px-4 py-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-white hover:shadow-neon-cyan"
                  >
                    Post Reply
                  </button>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[30px] glass-effect p-5 shadow-neon border border-neon-cyan/20 hover:border-neon-cyan/40 transition">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan">Active Threads</p>
                  <span className="text-lg">🔥</span>
                </div>
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-xs text-white/70">Discussions this week</p>
              </div>
              <div className="rounded-[30px] glass-effect p-5 shadow-neon border border-neon-purple/20 hover:border-neon-purple/40 transition">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-neon-purple">Contributors</p>
                  <span className="text-lg">👥</span>
                </div>
                <p className="text-2xl font-bold text-white">8</p>
                <p className="text-xs text-white/70">Active researchers</p>
              </div>
              <div className="rounded-[30px] glass-effect p-5 shadow-neon border border-neon-orange/20 hover:border-neon-orange/40 transition">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-neon-orange">AI Insights</p>
                  <span className="text-lg">🤖</span>
                </div>
                <p className="text-2xl font-bold text-white">24</p>
                <p className="text-xs text-white/70">Generated suggestions</p>
              </div>
            </div>
          </div>
        )}

        {projectTab === 'files' && (
          <div className="space-y-6 animate-slide-in">
            <div className="rounded-[32px] glass-effect p-6 shadow-neon border border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-neon-pink">Quantum Files</p>
                  <h3 className="mt-2 text-xl font-semibold text-white text-glow">Research Asset Manager</h3>
                  <p className="text-sm text-white/70">AI-powered file organization and analysis</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => addNotification('AI analyzing file relationships...')}
                    className="rounded-3xl glass-effect px-3 py-2 text-sm font-semibold text-neon-pink transition hover:bg-neon-pink/10 border border-neon-pink/30 hover:scale-105 transform"
                  >
                    🤖 Analyze
                  </button>
                  <button
                    onClick={() => addNotification('Upload dialog opened. Select your file.')}
                    className="rounded-3xl bg-gradient-to-r from-neon-pink to-neon-purple px-4 py-2 text-sm font-semibold text-white transition hover:shadow-neon-pink hover:scale-105 transform"
                  >
                    ➕ Upload File
                  </button>
                </div>
              </div>
              <div className="mt-6 rounded-[28px] glass-effect border-2 border-dashed border-neon-cyan/30 p-8 text-center transition hover:border-neon-cyan/50">
                <div className="space-y-4">
                  <span className="text-4xl">📁</span>
                  <div>
                    <p className="text-lg font-semibold text-white">Drop files here or click to browse</p>
                    <p className="text-sm text-white/60">Supports PDF, DOCX, XLSX, images, and more</p>
                  </div>
                  <div className="flex justify-center gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan">Auto-tagged</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-neon-green/20 text-neon-green">Version control</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple">AI insights</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: 'Project notes.pdf', type: 'PDF', size: '2.4 MB', icon: '📄', color: 'neon-cyan', status: 'Analyzed' },
                { name: 'Literature matrix.xlsx', type: 'Excel', size: '1.8 MB', icon: '📊', color: 'neon-green', status: 'Processing' },
                { name: 'Design brief.docx', type: 'Word', size: '856 KB', icon: '📝', color: 'neon-purple', status: 'Ready' },
                { name: 'Dataset analysis.py', type: 'Python', size: '45 KB', icon: '🐍', color: 'neon-orange', status: 'Optimized' },
                { name: 'Research images.zip', type: 'Archive', size: '12.3 MB', icon: '🖼️', color: 'neon-pink', status: 'Extracted' },
                { name: 'Presentation.pptx', type: 'PowerPoint', size: '5.2 MB', icon: '📊', color: 'neon-blue', status: 'Reviewed' }
              ].map((file) => (
                <div key={file.name} className="rounded-[30px] glass-effect p-5 shadow-neon border border-white/10 hover:border-neon-cyan/30 transition hover:scale-105 transform">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{file.icon}</span>
                      <div>
                        <p className="font-semibold text-white text-sm">{file.name}</p>
                        <p className="text-xs text-white/60">{file.type} • {file.size}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-xs px-2 py-1 rounded-full bg-${file.color}/20 text-${file.color}`}>{file.status}</span>
                      <button className="text-white/60 hover:text-white transition">⋮</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <button className="text-xs px-2 py-1 rounded-full glass-effect text-white/70 hover:text-neon-cyan border border-white/20">👁️ View</button>
                      <button className="text-xs px-2 py-1 rounded-full glass-effect text-white/70 hover:text-neon-green border border-white/20">⬇️ Download</button>
                      <button className="text-xs px-2 py-1 rounded-full glass-effect text-white/70 hover:text-neon-purple border border-white/20">🔗 Share</button>
                    </div>
                    <div className="text-xs text-white/50">2h ago</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-4">
              <div className="rounded-[30px] glass-effect p-5 shadow-neon border border-neon-cyan/20 hover:border-neon-cyan/40 transition">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan">Total Files</p>
                  <span className="text-lg">📁</span>
                </div>
                <p className="text-2xl font-bold text-white">47</p>
                <p className="text-xs text-white/70">Across all projects</p>
              </div>
              <div className="rounded-[30px] glass-effect p-5 shadow-neon border border-neon-green/20 hover:border-neon-green/40 transition">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-neon-green">Storage Used</p>
                  <span className="text-lg">💾</span>
                </div>
                <p className="text-2xl font-bold text-white">2.4GB</p>
                <p className="text-xs text-white/70">Of 10GB available</p>
              </div>
              <div className="rounded-[30px] glass-effect p-5 shadow-neon border border-neon-purple/20 hover:border-neon-purple/40 transition">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-neon-purple">AI Processed</p>
                  <span className="text-lg">🤖</span>
                </div>
                <p className="text-2xl font-bold text-white">89%</p>
                <p className="text-xs text-white/70">Files analyzed</p>
              </div>
              <div className="rounded-[30px] glass-effect p-5 shadow-neon border border-neon-orange/20 hover:border-neon-orange/40 transition">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-neon-orange">Shared Links</p>
                  <span className="text-lg">🔗</span>
                </div>
                <p className="text-2xl font-bold text-white">23</p>
                <p className="text-xs text-white/70">Active shares</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <aside className="space-y-6">
        <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-soft">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Insight panel</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-950">AI insight panel</h3>
            </div>
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">Suggest</span>
          </div>
          <div className="mt-5 space-y-4">
            {aiInsights.map((hint) => (
              <div key={hint} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                {hint}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-soft">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Status</p>
          <div className="mt-4 space-y-4">
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-950">Team engagement</p>
              <p className="mt-2 text-sm text-slate-500">5 collaborators actively reviewing.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-950">Next checkpoint</p>
              <p className="mt-2 text-sm text-slate-500">Draft review scheduled in 2 days.</p>
            </div>
          </div>
        </div>
      </aside>

      {focusMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-6">
          <div className="relative w-full max-w-5xl rounded-[36px] bg-slate-950 p-8 shadow-soft">
            <button
              onClick={() => setFocusMode(false)}
              className="absolute right-6 top-6 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Close
            </button>
            <div className="rounded-[32px] bg-slate-900 p-8 shadow-2xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Focus mode</p>
                  <h3 className="mt-2 text-3xl font-semibold text-white">Distraction-free writing</h3>
                </div>
                <span className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white">Live</span>
              </div>
              <div className="mt-8 rounded-[30px] border border-slate-800 bg-slate-950 p-8 text-white">
                <p className="mb-4 text-sm uppercase tracking-[0.32em] text-slate-500">Editor</p>
                <div contentEditable className="min-h-[320px] outline-none text-lg leading-8 text-slate-100">
                  Write the next section of your research note here. Keep the prose crisp and the analysis sharp.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ExplorePage({ filter, setFilter }) {
  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:w-2/3">
            <label className="sr-only" htmlFor="project-search">
              Search projects
            </label>
            <input
              id="project-search"
              type="search"
              placeholder="Search domains, keywords, or teams"
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {['Trending', 'Recent'].map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`rounded-3xl px-4 py-2 text-sm font-semibold transition ${filter === option ? 'bg-brand-600 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {exploreProjects.map((project) => (
          <article key={project.title} className="group rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
              <span className="rounded-3xl bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{project.contributors} contributors</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  {tag}
                </span>
              ))}
            </div>
            <button className="mt-6 inline-flex items-center justify-center rounded-3xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
              Join project
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

function ProfilePage({ user }) {
  const profileData = user || {
    name: 'Amina Patel',
    email: 'amina.patel@research.edu',
    institution: 'Global Research Institute',
    role: 'Research Lead & Collaborator'
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6 rounded-[36px] border border-slate-200/80 bg-white p-8 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Profile</p>
            <h2 className="text-3xl font-semibold text-slate-950">{profileData.name}</h2>
            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
              Doctoral researcher focused on collaborative workflows and experiment design. Passionate about turning complex ideas into concise impact.
            </p>
          </div>
          <button className="rounded-3xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
            Edit profile
          </button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Institution</p>
            <p className="mt-4 text-lg font-semibold text-slate-950">{profileData.institution}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Role</p>
            <p className="mt-4 text-lg font-semibold text-slate-950">{profileData.role}</p>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-soft">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="rounded-3xl bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-950">Contributions</h3>
              <p className="mt-2 text-sm text-slate-500">Recent achievements across projects and research notes.</p>
            </div>
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">Active</span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-medium text-slate-900">Published comprehensive review</p>
              <p className="mt-2 text-sm text-slate-500">Guided the team through citation analysis and timeline planning.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-medium text-slate-900">Launched interdisciplinary workshop</p>
              <p className="mt-2 text-sm text-slate-500">Built a shared agenda and participant follow-ups.</p>
            </div>
          </div>
        </div>
      </div>
      <aside className="space-y-6">
        <div className="rounded-[36px] border border-slate-200/80 bg-white p-6 shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Contribution heatmap</p>
          <div className="mt-6 grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }).map((_, index) => {
              const intensity = Math.floor(Math.random() * 4) + 1;
              const shades = ['bg-slate-100', 'bg-brand-100', 'bg-brand-200', 'bg-brand-500'];
              return <span key={index} className={`h-8 w-8 rounded-xl ${shades[intensity - 1]} transition hover:scale-110`} />;
            })}
          </div>
          <p className="mt-5 text-sm text-slate-500">A quick glance at activity and collaboration frequency over the past month.</p>
        </div>
        <div className="rounded-[36px] border border-slate-200/80 bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-slate-950">Profile strength</h3>
          <div className="mt-4 rounded-3xl bg-slate-50 p-4">
            <div className="h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-3/4 rounded-full bg-brand-500" />
            </div>
            <p className="mt-3 text-sm text-slate-500">Your collaboration presence is strong — keep sharing updates and timelines.</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock login - in real app, this would validate credentials
      const userData = {
        name: 'Amina Patel',
        email: email,
        institution: 'Global Research Institute',
        role: 'Research Lead & Collaborator'
      };
      onLogin(userData);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500 to-violet-500 shadow-lg shadow-brand-200/40">
            <span className="text-2xl font-bold text-white">SR</span>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Sign in to your research collaboration account
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-brand-600 hover:text-brand-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative flex w-full justify-center rounded-2xl bg-gradient-to-r from-brand-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:from-brand-700 hover:to-violet-700 focus:outline-none focus:ring-4 focus:ring-brand-100 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  Signing in...
                </div>
              ) : (
                'Sign in'
              )}
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-slate-50 px-2 text-slate-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-slate-600">
          Don't have an account?{' '}
          <a href="#" className="font-medium text-brand-600 hover:text-brand-500">
            Sign up for free
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
