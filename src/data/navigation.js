const homeItems = [
  {
    label: 'Landing',
    path: '/',
    summary: 'Return to the main CCC landing page.',
    parentLabel: 'Home',
    parentPath: '/',
  },
  {
    label: 'Become a Civil Citizen',
    path: '/become-a-civil-citizen',
    summary: 'A direct call to action for Canadians who want to actively help build CCC.',
    parentLabel: 'Home',
    parentPath: '/',
    featured: true,
  },
  {
    label: 'Latest Updates',
    path: '/news-updates',
    summary: 'See the newest announcements, policy updates, and campaign progress.',
    parentLabel: 'Home',
    parentPath: '/',
  },
]

export const aboutItems = [
  {
    label: 'About Overview',
    path: '/about',
    summary: 'A high-level introduction to the movement, its mission, and why it exists.',
    parentLabel: 'About',
    parentPath: '/',
    hideInNav: true,
  },
  {
    label: 'What is Civil Citizens Canada',
    path: '/about/what-is-civil-citizens-canada',
    summary: 'Explain what CCC is, who it serves, and the role it intends to play in Canada.',
    parentLabel: 'About',
    parentPath: '/about',
    hideInNav: true,
  },
  {
    label: 'Founding Principles',
    path: '/about/founding-principles',
    summary: 'Outline the core principles that guide the party and its policy approach.',
    parentLabel: 'About',
    parentPath: '/about',
  },
  {
    label: 'Why CCC Exists',
    path: '/about/why-ccc-exists',
    summary: 'Set out the political and civic case for why CCC is being built now.',
    parentLabel: 'About',
    parentPath: '/about',
    hideInNav: true,
  },
  {
    label: 'Leadership',
    path: '/about/leadership',
    summary: 'Meet the current public leadership profile and founding direction for CCC.',
    parentLabel: 'About',
    parentPath: '/about',
  },
  {
    label: 'Structure',
    path: '/about/structure',
    summary: 'Describe the organizational path from EDA to provincial to national structure.',
    parentLabel: 'About',
    parentPath: '/about',
    hideInNav: true,
  },
]

export const platformGroups = [
  {
    title: 'Economic Foundation',
    path: '/platform/economic-foundation',
    summary: 'Tax policy, growth, and a productive economy that rewards work and investment.',
    items: [
      {
        label: 'Tax Reform',
        path: '/platform/economic-foundation',
        summary: 'The live economic policy overview and tax reform foundation page.',
        parentLabel: 'Economic Foundation',
        parentPath: '/platform/economic-foundation',
      },
      {
        label: 'Small Business Growth',
        path: '/platform/economic-foundation/small-business-growth',
        summary: 'How CCC plans to simplify conditions for entrepreneurs and local employers.',
        parentLabel: 'Economic Foundation',
        parentPath: '/platform/economic-foundation',
      },
      {
        label: 'Canadian Industry',
        path: '/platform/economic-foundation/canadian-industry',
        summary: 'A placeholder for industrial development, productivity, and domestic capacity.',
        parentLabel: 'Economic Foundation',
        parentPath: '/platform/economic-foundation',
      },
      {
        label: 'Cost of Living',
        path: '/platform/economic-foundation/cost-of-living',
        summary: 'A placeholder for household affordability and pressure relief policy.',
        parentLabel: 'Economic Foundation',
        parentPath: '/platform/economic-foundation',
      },
    ],
  },
  {
    title: 'Technology & AI',
    path: '/platform/technology-ai',
    summary: 'A national approach to AI, automation, robotics, and citizen data rights.',
    items: [
      {
        label: 'AI Governance',
        path: '/platform/technology-ai/ai-governance',
        summary: 'Define policy guardrails, accountability, and national AI standards.',
        parentLabel: 'Technology & AI',
        parentPath: '/platform/technology-ai',
      },
      {
        label: 'Automation & Jobs',
        path: '/platform/technology-ai/automation-jobs',
        summary: 'Set out how workers and communities adapt as automation expands.',
        parentLabel: 'Technology & AI',
        parentPath: '/platform/technology-ai',
      },
      {
        label: 'Robotics Integration',
        path: '/platform/technology-ai/robotics-integration',
        summary: 'Describe where robotics should be encouraged across key Canadian sectors.',
        parentLabel: 'Technology & AI',
        parentPath: '/platform/technology-ai',
      },
      {
        label: 'Data Ownership',
        path: '/platform/technology-ai/data-ownership',
        summary: 'Establish who controls personal, civic, and commercial data in Canada.',
        parentLabel: 'Technology & AI',
        parentPath: '/platform/technology-ai',
      },
    ],
  },
  {
    title: 'Governance',
    path: '/platform/governance',
    summary: 'Structural tools for citizen feedback, transparent systems, and EDA-driven politics.',
    items: [
      {
        label: 'Continuous Citizen Input (Civil)',
        path: '/platform/governance/continuous-citizen-input',
        summary: 'Explain how citizens continuously shape the system instead of only voting periodically.',
        parentLabel: 'Governance',
        parentPath: '/platform/governance',
      },
      {
        label: 'Electoral District System (EDA)',
        path: '/platform/governance/electoral-district-system',
        summary: 'Describe the district-level operating model for organizing and representation.',
        parentLabel: 'Governance',
        parentPath: '/platform/governance',
      },
      {
        label: 'Transparency Systems',
        path: '/platform/governance/transparency-systems',
        summary: 'Outline reporting, decision visibility, and public accountability systems.',
        parentLabel: 'Governance',
        parentPath: '/platform/governance',
      },
    ],
  },
  {
    title: 'Immigration',
    path: '/platform/immigration',
    summary: 'Population planning, integration, and growth strategies aligned with national capacity.',
    items: [
      {
        label: 'Population Strategy',
        path: '/platform/immigration/population-strategy',
        summary: 'Define how population policy should align with housing, jobs, and infrastructure.',
        parentLabel: 'Immigration',
        parentPath: '/platform/immigration',
      },
      {
        label: 'Integration Model',
        path: '/platform/immigration/integration-model',
        summary: 'Set out practical integration expectations for strong communities and social cohesion.',
        parentLabel: 'Immigration',
        parentPath: '/platform/immigration',
      },
      {
        label: 'Regional Growth',
        path: '/platform/immigration/regional-growth',
        summary: 'Tie immigration and settlement policy to regional opportunity across Canada.',
        parentLabel: 'Immigration',
        parentPath: '/platform/immigration',
      },
    ],
  },
  {
    title: 'Agriculture & Food',
    path: '/platform/agriculture-food',
    summary: 'Domestic food production, greenhouse expansion, and long-term agricultural resilience.',
    items: [
      {
        label: 'Food Sovereignty',
        path: '/platform/agriculture-food/food-sovereignty',
        summary: 'Describe how Canada can secure more of its own food supply.',
        parentLabel: 'Agriculture & Food',
        parentPath: '/platform/agriculture-food',
      },
      {
        label: 'Greenhouse Expansion',
        path: '/platform/agriculture-food/greenhouse-expansion',
        summary: 'A placeholder for domestic greenhouse strategy and year-round production.',
        parentLabel: 'Agriculture & Food',
        parentPath: '/platform/agriculture-food',
      },
      {
        label: 'Canadian Farming',
        path: '/platform/agriculture-food/canadian-farming',
        summary: 'Support policy for farms, producers, and food infrastructure across the country.',
        parentLabel: 'Agriculture & Food',
        parentPath: '/platform/agriculture-food',
      },
    ],
  },
  {
    title: 'Energy & Infrastructure',
    path: '/platform/energy-infrastructure',
    summary: 'Energy independence and the hard infrastructure needed for national capacity.',
    items: [
      {
        label: 'Energy Independence',
        path: '/platform/energy-infrastructure/energy-independence',
        summary: 'A placeholder for domestic energy strategy and national self-reliance.',
        parentLabel: 'Energy & Infrastructure',
        parentPath: '/platform/energy-infrastructure',
      },
      {
        label: 'National Infrastructure',
        path: '/platform/energy-infrastructure/national-infrastructure',
        summary: 'Major transport, utility, and logistics systems required for national growth.',
        parentLabel: 'Energy & Infrastructure',
        parentPath: '/platform/energy-infrastructure',
      },
      {
        label: 'Digital Infrastructure',
        path: '/platform/energy-infrastructure/digital-infrastructure',
        summary: 'Connectivity, compute, and digital backbone policy for a modern state.',
        parentLabel: 'Energy & Infrastructure',
        parentPath: '/platform/energy-infrastructure',
      },
    ],
  },
  {
    title: 'Defense & Sovereignty',
    path: '/platform/defense-sovereignty',
    summary: 'Military readiness, cyber defense, and durable national sovereignty.',
    items: [
      {
        label: 'Military Doctrine',
        path: '/platform/defense-sovereignty/military-doctrine',
        summary: 'A placeholder for the strategic role of Canadian defense in the modern era.',
        parentLabel: 'Defense & Sovereignty',
        parentPath: '/platform/defense-sovereignty',
      },
      {
        label: 'Cybersecurity',
        path: '/platform/defense-sovereignty/cybersecurity',
        summary: 'National cyber resilience for citizens, institutions, and critical infrastructure.',
        parentLabel: 'Defense & Sovereignty',
        parentPath: '/platform/defense-sovereignty',
      },
      {
        label: 'National Resilience',
        path: '/platform/defense-sovereignty/national-resilience',
        summary: 'Preparedness planning for shocks, emergencies, and sovereign continuity.',
        parentLabel: 'Defense & Sovereignty',
        parentPath: '/platform/defense-sovereignty',
      },
    ],
  },
  {
    title: 'Family & Society',
    path: '/platform/family-society',
    summary: 'Family support, housing, and stronger community life across Canada.',
    items: [
      {
        label: 'Family Support',
        path: '/platform/family-society/family-support',
        summary: 'Policy for families, caregiving, and household stability.',
        parentLabel: 'Family & Society',
        parentPath: '/platform/family-society',
      },
      {
        label: 'Housing',
        path: '/platform/family-society/housing',
        summary: 'A placeholder for housing supply, affordability, and community planning.',
        parentLabel: 'Family & Society',
        parentPath: '/platform/family-society',
      },
      {
        label: 'Community Development',
        path: '/platform/family-society/community-development',
        summary: 'Support for strong local institutions, social trust, and civic renewal.',
        parentLabel: 'Family & Society',
        parentPath: '/platform/family-society',
      },
    ],
  },
]

export const systemItems = [
  {
    label: 'The Civil App Overview',
    path: '/the-civil-app',
    summary: 'Introduce Civil as the operating layer that keeps citizens continuously involved.',
    parentLabel: 'The Civil App',
    parentPath: '/',
    hideInNav: true,
  },
  {
    label: 'What is Civil',
    path: '/the-civil-app/what-is-civil',
    summary: 'Explain the core concept behind the Civil participation system.',
    parentLabel: 'The Civil App',
    parentPath: '/the-civil-app',
  },
  {
    label: 'How Citizens Participate',
    path: '/the-civil-app/how-citizens-participate',
    summary: 'Describe how people contribute input and decision weight inside the system.',
    parentLabel: 'The Civil App',
    parentPath: '/the-civil-app',
  },
  {
    label: 'Chambers of Citizens',
    path: '/the-civil-app/chambers-of-citizens',
    summary: 'Explain how local Electoral District chambers organize participation and coordination.',
    parentLabel: 'The Civil App',
    parentPath: '/the-civil-app',
  },
  {
    label: 'Economic Network',
    path: '/the-civil-app/economic-network',
    summary: 'Show how economic activity and incentives connect into Civil.',
    parentLabel: 'The Civil App',
    parentPath: '/the-civil-app',
  },
  {
    label: 'Governance Layer',
    path: '/the-civil-app/governance-layer',
    summary: 'Detail the governance mechanics that sit on top of citizen participation.',
    parentLabel: 'The Civil App',
    parentPath: '/the-civil-app',
  },
  {
    label: 'Civil Wallet',
    path: '/the-civil-app/civil-wallet',
    summary: 'A future-facing concept for identity, participation, and value exchange tools.',
    parentLabel: 'The Civil App',
    parentPath: '/the-civil-app',
  },
]

export const joinMovementItems = [
  {
    label: 'Get Involved Overview',
    path: '/get-involved',
    summary: 'See the local, district, and volunteer pathways into the movement.',
    parentLabel: 'Join Movement',
    parentPath: '/',
    hideInNav: true,
  },
  {
    label: 'Find Your Electoral District (EDA)',
    path: '/get-involved/find-your-eda',
    summary: 'A future lookup for the district structure that anchors local organizing.',
    parentLabel: 'Join Movement',
    parentPath: '/get-involved',
  },
  {
    label: 'Start a Local Chapter',
    path: '/get-involved/start-a-local-chapter',
    summary: 'Explain how supporters can begin building district-level presence.',
    parentLabel: 'Join Movement',
    parentPath: '/get-involved',
  },
  {
    label: 'Volunteer',
    path: '/get-involved/volunteer',
    summary: 'Outline volunteer roles, skills needed, and immediate ways to help.',
    parentLabel: 'Join Movement',
    parentPath: '/get-involved',
  },
  {
    label: 'Become a Candidate',
    path: '/get-involved/become-a-candidate',
    summary: 'A future pathway for prospective candidates and district leaders.',
    parentLabel: 'Join Movement',
    parentPath: '/get-involved',
  },
  {
    label: 'Events',
    path: '/get-involved/events',
    summary: 'A placeholder for rallies, chapter events, and public meetings.',
    parentLabel: 'Join Movement',
    parentPath: '/get-involved',
  },
]

const newsItems = [
  {
    label: 'News & Updates Overview',
    path: '/news-updates',
    summary: 'A central stream for campaign announcements, releases, and commentary.',
    parentLabel: 'News & Updates',
    parentPath: '/',
    hideInNav: true,
  },
  {
    label: 'Announcements',
    path: '/news-updates/announcements',
    summary: 'Short-form movement and organizational announcements.',
    parentLabel: 'News & Updates',
    parentPath: '/news-updates',
  },
  {
    label: 'Press Releases',
    path: '/news-updates/press-releases',
    summary: 'Formal public statements and media-facing releases.',
    parentLabel: 'News & Updates',
    parentPath: '/news-updates',
  },
  {
    label: 'Policy Updates',
    path: '/news-updates/policy-updates',
    summary: 'Track changes, additions, and refinements to the platform.',
    parentLabel: 'News & Updates',
    parentPath: '/news-updates',
  },
  {
    label: 'Blog / Articles',
    path: '/news-updates/blog',
    summary: 'Long-form writing, essays, and articles from the movement.',
    parentLabel: 'News & Updates',
    parentPath: '/news-updates',
  },
]

export const supportItems = [
  {
    label: 'Support CCC Overview',
    path: '/support-ccc',
    summary: 'See the ways supporters can fund or join the movement.',
    parentLabel: 'Support CCC',
    parentPath: '/',
    hideInNav: true,
  },
  {
    label: 'Donate',
    path: '/support-ccc/donate',
    summary: 'Direct financial support for Civil Citizens through the live donation page.',
    parentLabel: 'Support CCC',
    parentPath: '/support-ccc',
  },
  {
    label: 'Become a Member',
    path: '/become-a-civil-citizen',
    summary: 'Become a Civil Citizen through the Civil app and start formal participation.',
    parentLabel: 'Support CCC',
    parentPath: '/support-ccc',
  },
]

export const primaryNavigation = [
  {
    id: 'about',
    label: 'About',
    type: 'direct',
    path: '/about',
    items: aboutItems,
  },
  {
    id: 'platform',
    label: 'Platform',
    type: 'direct',
    path: '/platform',
    hideOverviewInNav: true,
    overview: {
      label: 'Platform Overview',
      path: '/platform',
      summary: 'The major policy areas CCC is developing into a national platform.',
      parentLabel: 'Platform',
      parentPath: '/',
    },
    groups: platformGroups,
  },
  {
    id: 'civil',
    label: 'The Civil App',
    type: 'direct',
    path: '/the-civil-app',
    items: systemItems,
  },
  {
    id: 'news',
    label: 'News & Updates',
    type: 'direct',
    path: '/news-updates',
    items: newsItems,
  },
  {
    id: 'support',
    label: 'Support CCC',
    type: 'direct',
    path: '/support-ccc',
    items: supportItems,
  },
]

function collectNavigationPages(sections) {
  const pages = []

  sections.forEach((section) => {
    if (section.overview) {
      pages.push(section.overview)
    }

    if (section.items) {
      pages.push(...section.items)
    }

    if (section.groups) {
      section.groups.forEach((group) => {
        pages.push({
          label: group.title,
          path: group.path,
          summary: group.summary,
          parentLabel: 'Platform',
          parentPath: '/platform',
        })
        pages.push(...group.items)
      })
    }
  })

  return pages
}

export const navigationPages = [...homeItems, ...joinMovementItems, ...collectNavigationPages(primaryNavigation)]

export const navigationLookup = navigationPages.reduce((lookup, page) => {
  lookup[page.path] = page
  return lookup
}, {})
