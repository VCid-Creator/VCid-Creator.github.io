// gitprofile.config.ts
// Portfolio: Vitor Hugo Cid — AI Workforce Transformation & People Strategy

const CONFIG = {
  github: {
    username: 'VCid-Creator', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * Deploy to https://VCid-Creator.github.io/
   * Repo: https://github.com/VCid-Creator/VCid-Creator.github.io
   */
  base: '/',
  projects: {
    github: {
      display: false, // Hidden — no public repos to auto-sync yet
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated',
        limit: 6,
        exclude: {
          forks: true,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'Frameworks & Strategic Work',
      // These are the portfolio items stakeholders actually care about.
      // Add/remove entries as you ship new work.
      projects: [
        {
          title: 'AI Workforce Transformation Readiness Framework',
          description:
            'Three-layer framework with four role pathways (Augment, Redesign, Sunset, Create) for enterprise-scale AI workforce transition. Authored methodology guiding Philips AI talent strategy.',
          imageUrl:
            'https://img.icons8.com/fluency/256/artificial-intelligence.png',
          link: 'https://github.com/VCid-Creator',
        },
        {
          title: 'AI Fluency Maturity Model for HRBPs',
          description:
            'Progressive capability model enabling HR Business Partners to evolve from AI-aware to AI-fluent strategic advisors. Designed for the Philips People Function AI Acceleration Core Team.',
          imageUrl:
            'https://img.icons8.com/fluency/256/combo-chart.png',
          link: 'https://github.com/VCid-Creator',
        },
        {
          title: 'Copilot Prompt Kit — Gamified HRBP Playbook',
          description:
            'Six-module gamified learning application with XP/badge system, 18 quiz questions, and real-world Copilot prompts for HR workflows. Built with Claude Code.',
          imageUrl:
            'https://img.icons8.com/fluency/256/controller.png',
          link: 'https://github.com/VCid-Creator',
        },
        {
          title: 'Agent + Human Workforce Strategy',
          description:
            'Strategic framework for hybrid AI agent and human workforce design. Defines governance models, task allocation logic, and organizational readiness criteria for agentic AI deployment.',
          imageUrl:
            'https://img.icons8.com/fluency/256/conference-call.png',
          link: 'https://github.com/VCid-Creator',
        },
      ],
    },
  },
  seo: {
    title: 'Vitor Hugo Cid — AI Workforce Transformation & People Strategy',
    description:
      'Head of People, Enterprise Informatics at Philips Healthcare. Designing the future of AI-augmented work through workforce transformation frameworks, HRBP capability models, and human-AI integration strategy.',
    imageURL: '',
  },
  social: {
    linkedin: 'cidvitor',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '', // Add your resume URL when ready; empty hides the button
  },
  skills: [
    'AI Workforce Strategy',
    'Organizational Transformation',
    'HRBP Excellence',
    'AI Fluency & Adoption',
    'Talent Strategy & EVP',
    'Change Architecture',
    'Framework Design',
    'Microsoft 365 & Copilot',
    'Power Automate',
    'Power BI',
    'Claude Code / AI Tooling',
    'People Analytics',
    'Workforce Planning',
    'Executive Advisory',
  ],
  experiences: [
    {
      company: 'Philips Healthcare',
      position: 'Head of People, Enterprise Informatics',
      from: 'January 2022',
      to: 'Present',
      companyLink: 'https://www.philips.com',
    },
    {
      company: 'Philips Healthcare',
      position: 'Senior HRBP Director',
      from: 'March 2019',
      to: 'December 2021',
      companyLink: 'https://www.philips.com',
    },
  ],
  certifications: [],
  educations: [],
  publications: [
    {
      title: 'AI Workforce Transformation Readiness Framework',
      conferenceName: '',
      journalName: 'Internal — Philips People Function',
      authors: 'Vitor Hugo Cid',
      link: '',
      description:
        'Three-layer, four-pathway methodology for assessing and executing AI-driven workforce transformation at enterprise scale. Adopted by Philips AI Acceleration Core Team.',
    },
  ],
  // Blog section — enable when you start publishing externally
  blog: {
    source: 'dev',
    username: '', // Empty hides blog section. Add your dev.to or medium username when ready.
    limit: 3,
  },
  googleAnalytics: {
    id: '', // Add GA4 tag (G-XXXXXXXXXX) to track portfolio engagement
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    // 'corporate' — clean, professional, enterprise-appropriate
    // Alternatives worth trying: 'nord' (calm blue), 'business' (muted pro), 'lofi' (minimal)
    defaultTheme: 'corporate',

    // Allow visitors to switch themes
    disableSwitch: false,

    // Respect system dark/light preference
    respectPrefersColorScheme: true,

    // Display the ring around avatar
    displayAvatarRing: true,

    // Curated subset — removed novelty themes, kept professional options
    themes: [
      'light',
      'dark',
      'corporate',
      'business',
      'nord',
      'lofi',
      'winter',
      'dim',
      'silk',
      'abyss',
    ],
  },

  footer: `AI-augmented work starts with people. Built with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and Claude Code.`,

  enablePWA: true,
};

export default CONFIG;
