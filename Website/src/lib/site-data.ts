export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type Metric = {
  label: string;
  value: string;
  hint?: string;
};

export type Designer = {
  slug: string;
  name: string;
  location: string;
  specialty: string;
  budget: string;
  rating: string;
  reviewCount: number;
  image: string;
  bio: string;
  styles: string[];
  stats: Metric[];
  process: string[];
  faq: Array<{ question: string; answer: string }>;
  featuredProjectSlugs: string[];
};

export type Project = {
  slug: string;
  title: string;
  designerSlug: string;
  location: string;
  year: string;
  image: string;
  summary: string;
  tags: string[];
  narrativeSections: Array<{ heading: string; body: string }>;
  relatedProductSlugs: string[];
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  image: string;
  excerpt: string;
  paragraphs: string[];
  references: string[];
};

export type EventListing = {
  slug: string;
  title: string;
  host: string;
  format: string;
  date: string;
  location: string;
  image: string;
  excerpt: string;
  agenda: string[];
};

export type Product = {
  slug: string;
  title: string;
  category: string;
  priceLabel: string;
  commerceMode: "add-to-cart" | "visit-store";
  image: string;
  excerpt: string;
  features: string[];
};

export type WorkspaceCard = {
  label: string;
  value: string;
  note: string;
};

export type WorkspaceItem = {
  title: string;
  meta: string;
  status: string;
  detail: string;
  action: string;
};

export type WorkspaceContent = {
  eyebrow: string;
  title: string;
  description: string;
  summaryCards: WorkspaceCard[];
  listTitle: string;
  items: WorkspaceItem[];
  sidePanelTitle: string;
  sidePanelItems: string[];
  stateTitle: string;
  stateDescription: string;
  stateActionLabel: string;
  stateActionHref: string;
};

export type AuthContent = {
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
  primaryLabel: string;
  helper: string;
  altLabel: string;
  altHref: string;
};

export const publicNav: NavItem[] = [
  { label: "Designers", href: "/designers" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Events", href: "/events" },
  { label: "Shop", href: "/shop" },
];

export const footerGroups: Array<{ title: string; links: NavItem[] }> = [
  {
    title: "Discover",
    links: [
      { label: "Find Designers", href: "/designers" },
      { label: "Featured Projects", href: "/#projects" },
      { label: "AI Guide", href: "/chat-assistant" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Events", href: "/events" },
      { label: "Help", href: "/help" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Policies", href: "/policies/privacy" },
    ],
  },
];

export const homeProofMetrics: Metric[] = [
  { label: "Curated studios", value: "180+", hint: "Editorially reviewed profiles" },
  { label: "Project stories", value: "640", hint: "Image-led case studies" },
  { label: "Average response", value: "< 18 hrs", hint: "For active lead surfaces" },
];

export const designers: Designer[] = [
  {
    slug: "maeve-studio",
    name: "Maeve Studio",
    location: "Chicago, IL",
    specialty: "Warm minimal residential interiors",
    budget: "$25k-$90k",
    rating: "4.9",
    reviewCount: 28,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    bio:
      "Maeve Studio blends gallery calm with practical family living, focusing on layered neutrals, sculptural lighting, and highly usable room flow.",
    styles: ["Warm Minimal", "Soft Contemporary", "Natural Materials"],
    stats: [
      { label: "Projects delivered", value: "46", hint: "City apartments and townhomes" },
      { label: "Consultation fit", value: "Remote + onsite", hint: "Midwest service area" },
      { label: "Repeat clients", value: "61%", hint: "Measured across the last 24 months" },
    ],
    process: [
      "Discovery call focused on room priorities, constraints, and visual references.",
      "A concept phase that pairs palette, layout, and material direction before sourcing.",
      "Procurement and styling guidance that keeps the final space coherent but livable.",
    ],
    faq: [
      {
        question: "Do you take virtual-only projects?",
        answer: "Yes. Virtual consultations and phased room plans are available for smaller refresh projects.",
      },
      {
        question: "What project size is the best fit?",
        answer: "The studio is strongest on full-room or multi-room residential work where the palette and joinery can be coordinated together.",
      },
    ],
    featuredProjectSlugs: ["harbor-loft-restoration", "oak-terrace-family-suite"],
  },
  {
    slug: "atelier-rue",
    name: "Atelier Rue",
    location: "Brooklyn, NY",
    specialty: "Boutique hospitality and compact urban homes",
    budget: "$40k-$150k",
    rating: "4.8",
    reviewCount: 19,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    bio:
      "Atelier Rue works with bold contrast, vintage accents, and spatial compression strategies that make smaller footprints feel tailored instead of crowded.",
    styles: ["Modern Vintage", "Parisian Contrast", "Boutique Hospitality"],
    stats: [
      { label: "Lead response", value: "Same day", hint: "Average weekday reply time" },
      { label: "Signature sectors", value: "Homes + guest spaces", hint: "Residential and hospitality" },
      { label: "Featured reviews", value: "12", hint: "Editorially selected excerpts" },
    ],
    process: [
      "Visual audit and style alignment with reference imagery and usage constraints.",
      "Space planning and millwork intent before decorative specification.",
      "Procurement path that balances statement pieces with durable essentials.",
    ],
    faq: [
      {
        question: "Can you work with existing furniture?",
        answer: "Yes. Reuse strategy is part of the concept pass when legacy pieces have emotional or material value.",
      },
      {
        question: "Do you support hospitality launches?",
        answer: "Yes. The studio supports guest-facing spaces that need editorial character and durable spec choices.",
      },
    ],
    featuredProjectSlugs: ["terracotta-courtyard-suite"],
  },
  {
    slug: "north-column",
    name: "North Column",
    location: "Seattle, WA",
    specialty: "Pacific modern renovations with architectural restraint",
    budget: "$60k-$220k",
    rating: "5.0",
    reviewCount: 11,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    bio:
      "North Column specializes in renovation-heavy homes where cabinetry, circulation, and daylight need to feel resolved before decoration begins.",
    styles: ["Architectural", "Pacific Modern", "Textured Neutral"],
    stats: [
      { label: "Renovation focus", value: "Whole-home", hint: "Kitchen, bath, and structural refresh work" },
      { label: "Design reviews", value: "Weekly", hint: "Structured milestone cadence" },
      { label: "Builder partners", value: "8", hint: "Regional collaborators" },
    ],
    process: [
      "Kickoff workshop aligning budget posture, scope tolerance, and lived routines.",
      "Architectural concept development covering layout, material rhythm, and lighting.",
      "Execution support with builder-facing documentation and install sequencing.",
    ],
    faq: [
      {
        question: "Are kitchens and baths your core work?",
        answer: "Yes. Renovation-heavy scope is a primary focus, especially when multiple zones need to connect visually.",
      },
      {
        question: "How early should I engage?",
        answer: "Before contractor pricing is ideal so layout and material intent are not compressed into change orders.",
      },
    ],
    featuredProjectSlugs: ["cedar-peak-kitchen"],
  },
];

export const projects: Project[] = [
  {
    slug: "harbor-loft-restoration",
    title: "Harbor Loft Restoration",
    designerSlug: "maeve-studio",
    location: "Chicago, IL",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    summary:
      "A warehouse loft softened with linen tones, sculptural oak joinery, and low-glare lighting that keeps the double-height shell feeling intimate.",
    tags: ["Loft", "Open Plan", "Custom Oak", "Soft Lighting"],
    narrativeSections: [
      {
        heading: "Reframing scale",
        body: "The living zone was anchored with low, generous forms so the original industrial envelope felt grounded instead of cavernous.",
      },
      {
        heading: "Material restraint",
        body: "Only a few materials repeat throughout the home: honed stone, brushed oak, boucle upholstery, and matte plaster paint.",
      },
    ],
    relatedProductSlugs: ["travertine-pedestal-table", "linen-channel-sofa"],
  },
  {
    slug: "oak-terrace-family-suite",
    title: "Oak Terrace Family Suite",
    designerSlug: "maeve-studio",
    location: "Evanston, IL",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    summary:
      "A layered primary suite balancing family-proof practicality with upholstered warmth, concealed storage, and quiet tonal contrast.",
    tags: ["Primary Suite", "Soft Storage", "Family Home"],
    narrativeSections: [
      {
        heading: "Concealed utility",
        body: "Wardrobe planning, lighting scenes, and bedside charging were integrated so daily routines could disappear into the architecture.",
      },
      {
        heading: "Quiet contrast",
        body: "A restrained palette of oat, walnut, and charcoal grounds the room without flattening it into monochrome.",
      },
    ],
    relatedProductSlugs: ["linen-channel-sofa"],
  },
  {
    slug: "terracotta-courtyard-suite",
    title: "Terracotta Courtyard Suite",
    designerSlug: "atelier-rue",
    location: "Brooklyn, NY",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
    summary:
      "A compact hospitality suite using rust plaster, mirrored recesses, and precise lighting to create boutique drama in a limited footprint.",
    tags: ["Hospitality", "Terracotta", "Compact Luxury"],
    narrativeSections: [
      {
        heading: "Guest-first drama",
        body: "The arrival view uses warm plaster and reflective trim to create instant atmosphere without relying on clutter or novelty.",
      },
      {
        heading: "Storage without visual noise",
        body: "Essential functions were tucked behind paneled walls so the room could read as a composed suite rather than a utility checklist.",
      },
    ],
    relatedProductSlugs: ["arched-brass-floor-lamp"],
  },
  {
    slug: "cedar-peak-kitchen",
    title: "Cedar Peak Kitchen",
    designerSlug: "north-column",
    location: "Seattle, WA",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
    summary:
      "A daylight-focused renovation with cedar detailing, ribbed glass, and a heavy-use island built for long family routines.",
    tags: ["Kitchen", "Renovation", "Cedar", "Daylight"],
    narrativeSections: [
      {
        heading: "Daylight choreography",
        body: "Opaque walls were removed strategically so the kitchen could borrow light from adjacent zones without sacrificing storage.",
      },
      {
        heading: "Builder-facing clarity",
        body: "Cabinet tolerances and fixture zones were resolved early to preserve the detailing that gives the room its architectural calm.",
      },
    ],
    relatedProductSlugs: ["travertine-pedestal-table"],
  },
];

export const articles: Article[] = [
  {
    slug: "small-space-material-layering",
    title: "How To Layer Materials In Small Spaces Without Visual Noise",
    category: "Guides",
    readingTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "A practical framework for mixing stone, fabric, timber, and metal so compact rooms still feel edited and premium.",
    paragraphs: [
      "Small spaces rarely need more products. They need fewer, better relationships between materials.",
      "Start with one anchoring surface, one supporting wood tone, and one accent metal. Then repeat each with discipline so the room reads as intentional.",
      "Soft goods should echo structure, not compete with it. Upholstery, curtains, and rugs can absorb contrast so cabinetry and lighting retain clarity.",
    ],
    references: ["Designer curation", "Project case studies", "Material comparison guide"],
  },
  {
    slug: "consultation-readiness-checklist",
    title: "A Better Consultation-Readiness Checklist For First-Time Clients",
    category: "Planning",
    readingTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "The questions and reference material that help a consultation become a real scope discussion instead of a generic moodboard exchange.",
    paragraphs: [
      "Useful consultations start with constraints, not aesthetics alone.",
      "Bring dimensions, timing, budget comfort, and a sense of how the room needs to work at its most stressful moments.",
      "Reference images matter most when you can explain what you respond to in each one: light, layout, texture, calm, or contrast.",
    ],
    references: ["Inquiry preparation", "Scope framing", "Budget signaling"],
  },
  {
    slug: "editorial-styling-for-lived-in-homes",
    title: "Editorial Styling That Still Works For Real Life",
    category: "Inspiration",
    readingTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Why the best styled rooms still respect charging cables, toy storage, and late-night lighting instead of hiding them from the camera.",
    paragraphs: [
      "Editorial rooms earn trust when they reveal how daily life is supported rather than erased.",
      "A durable room can still feel styled when utility is resolved as part of the composition.",
      "Lighting, storage, and repeatable surfaces are what let a room keep its shape after the shoot is over.",
    ],
    references: ["Lifestyle merchandising", "Storage planning", "Lighting scenes"],
  },
];

export const events: EventListing[] = [
  {
    slug: "lighting-for-layered-living",
    title: "Lighting For Layered Living",
    host: "Maeve Studio",
    format: "In-person workshop",
    date: "May 18, 2026",
    location: "Chicago, IL",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "A workshop on balancing decorative fixtures, task lighting, and evening atmosphere without over-lighting a room.",
    agenda: [
      "Fixture hierarchy and room-by-room use cases",
      "Dimmer strategy and color temperature basics",
      "Specifying sculptural fixtures without losing function",
    ],
  },
  {
    slug: "renovation-scope-lab",
    title: "Renovation Scope Lab",
    host: "North Column",
    format: "Virtual session",
    date: "June 02, 2026",
    location: "Online",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "A step-by-step session for homeowners who need to organize scope, budget, and consultant timing before major renovation work begins.",
    agenda: [
      "Prioritizing scope under budget pressure",
      "Sequencing contractor, designer, and procurement inputs",
      "Risk flags that should be surfaced before pricing",
    ],
  },
];

export const products: Product[] = [
  {
    slug: "travertine-pedestal-table",
    title: "Travertine Pedestal Table",
    category: "Accent Furniture",
    priceLabel: "$1,280",
    commerceMode: "add-to-cart",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "A softly honed pedestal table that works as a sculptural anchor beside low lounge seating or in a quiet reading corner.",
    features: ["Sealed natural stone", "Rounded plinth base", "Best for indoor residential use"],
  },
  {
    slug: "linen-channel-sofa",
    title: "Linen Channel Sofa",
    category: "Seating",
    priceLabel: "Visit designer store",
    commerceMode: "visit-store",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "A relaxed profile sofa with channel stitching and performance linen selected for neutral interiors that still need depth.",
    features: ["Performance fabric", "Deep seat", "Custom finish options"],
  },
  {
    slug: "arched-brass-floor-lamp",
    title: "Arched Brass Floor Lamp",
    category: "Lighting",
    priceLabel: "$940",
    commerceMode: "add-to-cart",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "A brushed brass arc lamp with a linen shade that creates a soft focal pool over lounge seating or a reading nook.",
    features: ["Brushed brass finish", "Linen diffuser", "Dimmer compatible"],
  },
];

export const assistantPrompts = [
  "Find designers for a warm minimal apartment refresh under $90k.",
  "Show me a project that mixes natural oak with sculptural lighting.",
  "I need help preparing for a first consultation and defining scope.",
];

export const policyPages = {
  privacy: {
    title: "Privacy Overview",
    intro:
      "This contract-safe frontend does not implement live data retention, but it reserves a readable structure for privacy commitments, support paths, and user expectations.",
    sections: [
      "What account and inquiry data may be collected once backend contracts are approved.",
      "How AI guidance remains separate from protected client and designer records.",
      "How users can reach support for deletion, correction, or trust concerns.",
    ],
  },
  terms: {
    title: "Terms Of Use",
    intro:
      "Platform usage, listing behavior, and moderation enforcement remain subject to later legal and security planning, but the document structure is reserved here.",
    sections: [
      "Marketplace and content participation expectations.",
      "Boundaries for reviews, messaging, and event participation.",
      "Support, dispute, and moderation escalation paths.",
    ],
  },
  trust: {
    title: "Trust And Moderation",
    intro:
      "Trust-sensitive workflows are deferred to later planning phases, but the frontend already preserves a public explanation surface for review and intervention expectations.",
    sections: [
      "How public reporting and moderation intake are introduced.",
      "How review publication may involve moderation delay.",
      "How users are routed to support when a public record becomes unavailable.",
    ],
  },
} as const;

export const authContent: Record<"sign-in" | "sign-up", AuthContent> = {
  "sign-in": {
    eyebrow: "Return To Your Workspace",
    title: "Pick up the conversation, booking, or shortlist you already started.",
    description:
      "Authentication wiring is intentionally deferred, but this screen preserves the approved split layout, interruption recovery, and role-aware messaging.",
    benefits: [
      "Resume saved designers and inquiry drafts",
      "Track booking and message status in one place",
      "Move into client or designer flows without losing context",
    ],
    primaryLabel: "Continue To Sign In",
    helper: "Returning from a protected action? Your origin intent should be restored after authentication is approved.",
    altLabel: "Create an account",
    altHref: "/auth/sign-up",
  },
  "sign-up": {
    eyebrow: "Join The Platform",
    title: "Start as a client or move into designer onboarding with a clear first step.",
    description:
      "The backend identity model is not frozen yet, so this route focuses on role clarity, benefit framing, and safe progression rather than provider wiring.",
    benefits: [
      "Client pathways for saving, messaging, and review eligibility",
      "Designer pathways for profile setup and portfolio readiness",
      "Account recovery and support links preserved for later auth binding",
    ],
    primaryLabel: "Continue To Sign Up",
    helper: "Role verification and provider-specific flows will be connected after backend and security planning are complete.",
    altLabel: "Already have an account? Sign in",
    altHref: "/auth/sign-in",
  },
};

export const workspaceNav = {
  client: [
    { label: "Dashboard", href: "/client/dashboard" },
    { label: "Saved", href: "/client/saved-designers" },
    { label: "Inquiries", href: "/client/inquiries" },
    { label: "Bookings", href: "/client/bookings" },
    { label: "Messages", href: "/client/messages" },
    { label: "Reviews", href: "/client/reviews" },
    { label: "Settings", href: "/client/settings" },
  ],
  designer: [
    { label: "Dashboard", href: "/designer/dashboard" },
    { label: "Profile", href: "/designer/profile" },
    { label: "Portfolio", href: "/designer/portfolio" },
    { label: "Inquiries", href: "/designer/inquiries" },
    { label: "Bookings", href: "/designer/bookings" },
    { label: "Messages", href: "/designer/messages" },
    { label: "Content", href: "/designer/content" },
    { label: "Events", href: "/designer/events" },
    { label: "Shop", href: "/designer/shop" },
    { label: "Settings", href: "/designer/settings" },
  ],
  admin: [
    { label: "Overview", href: "/admin" },
    { label: "Users", href: "/admin/users" },
    { label: "Designers", href: "/admin/designers" },
    { label: "Reviews", href: "/admin/reviews" },
    { label: "Content", href: "/admin/content" },
    { label: "Events", href: "/admin/events" },
    { label: "Shop", href: "/admin/shop" },
    { label: "Reports", href: "/admin/reports" },
    { label: "Support", href: "/admin/support" },
    { label: "Settings", href: "/admin/settings" },
  ],
} as const;

export const workspaceContent: {
  client: Record<string, WorkspaceContent>;
  designer: Record<string, WorkspaceContent>;
  admin: Record<string, WorkspaceContent>;
} = {
  client: {
    dashboard: {
      eyebrow: "Client Workspace",
      title: "A calm overview of active designer relationships and next steps.",
      description:
        "This dashboard preserves summary-first status visibility while backend messaging, booking, and review contracts remain deferred.",
      summaryCards: [
        { label: "Saved designers", value: "08", note: "Ready for comparison or outreach" },
        { label: "Open inquiries", value: "03", note: "Waiting on reply or next action" },
        { label: "Upcoming bookings", value: "01", note: "Consultation scheduled this week" },
        { label: "Eligible reviews", value: "02", note: "Pending trust-rule binding" },
      ],
      listTitle: "Priority actions",
      items: [
        {
          title: "Warm-minimal shortlist review",
          meta: "Updated today",
          status: "Compare",
          detail: "Three saved designers now share overlapping style and budget signals. Narrow by project type before outreach.",
          action: "Open saved designers",
        },
        {
          title: "Consultation intake follow-up",
          meta: "For Maeve Studio",
          status: "Prepare",
          detail: "Bring dimensions, budget comfort, and reference images to keep the conversation scope-specific.",
          action: "Review checklist",
        },
      ],
      sidePanelTitle: "Contract-safe notes",
      sidePanelItems: [
        "Unread logic, notifications, and interruption recovery remain backend-owned.",
        "Protected actions are described clearly instead of being wired to a provider.",
        "Queue counts remain illustrative until live contracts are frozen.",
      ],
      stateTitle: "Dashboard empty state",
      stateDescription: "If a new client has no saved designers or inquiries yet, the correct recovery path is back to discovery, not a dead-end workspace.",
      stateActionLabel: "Browse designers",
      stateActionHref: "/designers",
    },
    "saved-designers": {
      eyebrow: "Saved Intent",
      title: "Comparison-friendly designer saves with clear next actions.",
      description: "Saved persistence is deferred, but the screen preserves the list behavior, trust cues, and fast path into inquiry or booking entry.",
      summaryCards: [
        { label: "Active shortlist", value: "03", note: "High fit candidates" },
        { label: "Needs review", value: "02", note: "Budget or location mismatch to clarify" },
        { label: "AI suggestions", value: "05", note: "Related studios based on style" },
        { label: "Ready to contact", value: "02", note: "Strong fit and availability" },
      ],
      listTitle: "Saved designers",
      items: designers.map((designer) => ({
        title: designer.name,
        meta: `${designer.location} • ${designer.budget}`,
        status: "Saved",
        detail: `${designer.specialty}. Trust placeholders stay visible even before review and booking APIs are frozen.`,
        action: "View profile",
      })),
      sidePanelTitle: "How this list behaves",
      sidePanelItems: [
        "Removal and compare actions are safe UI placeholders until persistence is approved.",
        "Primary action prioritizes profile evaluation over premature form submission.",
        "AI guidance remains supportive and never implies protected record access.",
      ],
      stateTitle: "No saves yet",
      stateDescription: "The approved recovery path is back to discovery with filter resets and AI prompt suggestions.",
      stateActionLabel: "Find designers",
      stateActionHref: "/designers",
    },
    inquiries: {
      eyebrow: "Inquiry Queue",
      title: "Every inquiry keeps a readable status, latest activity, and next action.",
      description: "Inquiry states mirror the shared contract without inventing transport, notification, or mutation behavior.",
      summaryCards: [
        { label: "Submitted", value: "02", note: "Initial outreach sent" },
        { label: "Acknowledged", value: "01", note: "Designer has replied" },
        { label: "In discussion", value: "01", note: "Scope and timing being refined" },
        { label: "Closed", value: "00", note: "No closed paths shown yet" },
      ],
      listTitle: "Inquiry activity",
      items: [
        {
          title: "Maeve Studio living + dining refresh",
          meta: "Submitted yesterday",
          status: "Acknowledged",
          detail: "Next step is to move into message context once the conversation contract is bound.",
          action: "Open context",
        },
        {
          title: "North Column kitchen renovation",
          meta: "Submitted 4 days ago",
          status: "In discussion",
          detail: "Budget tolerance and contractor timing were surfaced early, which is the intended contract-safe UX posture.",
          action: "Review summary",
        },
      ],
      sidePanelTitle: "State boundaries",
      sidePanelItems: [
        "Only canonical inquiry states are shown.",
        "No backend error reasons are fabricated beyond safe categories.",
        "Permission fallback points users toward support or discovery rather than disabled dead ends.",
      ],
      stateTitle: "Queue recovery",
      stateDescription: "A first-time empty inquiry queue should explain what action creates an inquiry instead of suggesting a broken feed.",
      stateActionLabel: "Start discovery",
      stateActionHref: "/designers",
    },
    bookings: {
      eyebrow: "Booking Progress",
      title: "Upcoming and past consultation intent stays legible even before scheduling contracts exist.",
      description: "This route holds the status timeline and next-action emphasis while calendar and reschedule rules remain deferred.",
      summaryCards: [
        { label: "Requested", value: "02", note: "Awaiting confirmation" },
        { label: "Confirmed", value: "01", note: "Ready for consultation" },
        { label: "Completed", value: "00", note: "Review eligibility later" },
        { label: "Needs action", value: "01", note: "Time window to confirm" },
      ],
      listTitle: "Booking timeline",
      items: [
        {
          title: "Maeve Studio consultation",
          meta: "Thursday at 3:00 PM",
          status: "Confirmed",
          detail: "Summary context stays visible even without live calendar binding so the user knows what happens next.",
          action: "Review details",
        },
        {
          title: "North Column renovation consult",
          meta: "Pending time confirmation",
          status: "Pending",
          detail: "Reschedule and cancel affordances remain explanatory placeholders until rules are approved.",
          action: "See status",
        },
      ],
      sidePanelTitle: "Why this stays passive",
      sidePanelItems: [
        "Calendar integration and deposits are explicitly deferred.",
        "State transitions follow the shared contract only.",
        "No unsupported booking aliases or side flows are introduced.",
      ],
      stateTitle: "No bookings yet",
      stateDescription: "The empty state should guide users back to designer discovery or inquiry, not imply missing records.",
      stateActionLabel: "Open inquiries",
      stateActionHref: "/client/inquiries",
    },
    messages: {
      eyebrow: "Messages",
      title: "Conversation-first layout with room for context cards and clear fallbacks.",
      description: "Realtime delivery is deferred, so the UI preserves thread structure and refresh tolerance without overpromising live sync.",
      summaryCards: [
        { label: "Open threads", value: "03", note: "Across active inquiries and bookings" },
        { label: "Awaiting reply", value: "01", note: "Designer response pending" },
        { label: "Needs client input", value: "02", note: "Material or timing clarification" },
        { label: "Flagged", value: "00", note: "Trust escalation deferred" },
      ],
      listTitle: "Thread previews",
      items: [
        {
          title: "Maeve Studio",
          meta: "Last message 2 hours ago",
          status: "Awaiting client",
          detail: "Thread preview keeps the latest message and safe next action visible without relying on websocket infrastructure.",
          action: "Open thread",
        },
        {
          title: "North Column",
          meta: "Last message yesterday",
          status: "Awaiting designer",
          detail: "Conversation context remains readable even if launch posture is polling rather than realtime.",
          action: "Review thread",
        },
      ],
      sidePanelTitle: "Messaging constraints",
      sidePanelItems: [
        "Protected record access remains guarded at the shell level.",
        "Unread counts and notifications are placeholders until backend posture is frozen.",
        "Flagging and moderation intervention remain later-phase concerns.",
      ],
      stateTitle: "No threads yet",
      stateDescription: "The recovery path leads back to inquiries or discovery because messages should never appear as a disconnected empty inbox.",
      stateActionLabel: "Open inquiry queue",
      stateActionHref: "/client/inquiries",
    },
    reviews: {
      eyebrow: "Review Eligibility",
      title: "Review prompts, drafts, and published references stay clearly separated.",
      description: "Eligibility and moderation rules are deferred, so the UI distinguishes readiness from publication without fabricating workflow details.",
      summaryCards: [
        { label: "Eligible soon", value: "02", note: "Awaiting trust confirmation" },
        { label: "Drafts", value: "01", note: "Local draft state only" },
        { label: "Under review", value: "00", note: "Moderation queue deferred" },
        { label: "Published", value: "03", note: "Public references from prior engagements" },
      ],
      listTitle: "Review states",
      items: [
        {
          title: "Maeve Studio consultation",
          meta: "Eligible after completion verification",
          status: "Pending eligibility",
          detail: "The interface explains the dependency instead of inviting premature submission.",
          action: "See requirements",
        },
        {
          title: "North Column renovation consult",
          meta: "Draft stored locally",
          status: "Draft",
          detail: "Local-only wording is explicit so the interface never implies a saved server mutation.",
          action: "Open draft",
        },
      ],
      sidePanelTitle: "Trust alignment",
      sidePanelItems: [
        "Publication can be delayed for moderation.",
        "Eligibility is tied to real engagement rules not yet finalized.",
        "Dispute messaging remains a future trust surface.",
      ],
      stateTitle: "No review actions yet",
      stateDescription: "The empty state should explain timing and trust gates, not hide the feature entirely.",
      stateActionLabel: "Return to dashboard",
      stateActionHref: "/client/dashboard",
    },
    settings: {
      eyebrow: "Client Settings",
      title: "Profile basics, notification posture, and support links stay clear and low-stress.",
      description: "This page deliberately avoids overloading the user with auth-provider specifics that have not been approved yet.",
      summaryCards: [
        { label: "Profile visibility", value: "Private", note: "Protected account surface" },
        { label: "Notifications", value: "Digest + urgent", note: "Illustrative preference only" },
        { label: "Saved preferences", value: "Style + budget", note: "Used for guidance surfaces" },
        { label: "Support paths", value: "3", note: "Help, contact, trust" },
      ],
      listTitle: "Settings sections",
      items: [
        {
          title: "Profile basics",
          meta: "Name, location, communication preferences",
          status: "Available",
          detail: "The surface preserves section hierarchy without binding to account APIs.",
          action: "Review section",
        },
        {
          title: "Notification posture",
          meta: "Digest, inquiry, and booking updates",
          status: "Planned",
          detail: "Notification delivery mechanisms remain intentionally deferred.",
          action: "See notes",
        },
      ],
      sidePanelTitle: "Safe defaults",
      sidePanelItems: [
        "Privacy and trust routes are always discoverable.",
        "No irreversible actions are exposed as icon-only affordances.",
        "Support language stays concrete and non-technical.",
      ],
      stateTitle: "Permission-safe fallback",
      stateDescription: "If an account loses access, the next route should be a clear sign-in or help path instead of a silent failure.",
      stateActionLabel: "Open help",
      stateActionHref: "/help",
    },
  },
  designer: {
    dashboard: {
      eyebrow: "Designer Workspace",
      title: "Profile quality, incoming leads, and publishing readiness in one view.",
      description: "This dashboard keeps completeness and response speed visible without depending on live mutations or analytics backends.",
      summaryCards: [
        { label: "Profile completeness", value: "82%", note: "Bio, service area, and FAQ nearly ready" },
        { label: "New leads", value: "04", note: "Need same-day triage" },
        { label: "Upcoming consults", value: "02", note: "Booking states still passive" },
        { label: "Draft projects", value: "03", note: "Awaiting publish review" },
      ],
      listTitle: "Priority work",
      items: [
        {
          title: "Complete service area section",
          meta: "Profile module",
          status: "Review needed",
          detail: "The profile shell keeps missing-publication cues visible without blocking the rest of the workspace.",
          action: "Open profile",
        },
        {
          title: "Respond to new warm-minimal lead",
          meta: "Lead received 3 hours ago",
          status: "High priority",
          detail: "Lead response remains a primary action in both desktop and mobile shell variants.",
          action: "Open inquiries",
        },
      ],
      sidePanelTitle: "What remains deferred",
      sidePanelItems: [
        "Autosave, submission, and verification workflows remain backend-owned.",
        "Metrics are illustrative until analytics posture is approved.",
        "Publishing gates follow the shared state model only.",
      ],
      stateTitle: "Zero-lead fallback",
      stateDescription: "A quiet week should route the designer toward profile completeness and public proof, not a discouraging dead end.",
      stateActionLabel: "Review portfolio",
      stateActionHref: "/designer/portfolio",
    },
    profile: {
      eyebrow: "Public Presence",
      title: "Editable profile sections paired with a live-readiness summary.",
      description: "The UI distinguishes local editing intent from published status while avoiding invented submission behavior.",
      summaryCards: [
        { label: "Bio + voice", value: "Done", note: "Public narrative is in place" },
        { label: "Service fit", value: "Needs update", note: "Area and budget cues missing" },
        { label: "Trust proof", value: "Partial", note: "Verification policy deferred" },
        { label: "FAQ coverage", value: "2 of 4", note: "Common client questions remain" },
      ],
      listTitle: "Profile sections",
      items: [
        {
          title: "Service summary",
          meta: "Budget, service area, project focus",
          status: "Incomplete",
          detail: "The completeness panel exists to improve public confidence without becoming punitive clutter.",
          action: "Edit section",
        },
        {
          title: "Trust cues",
          meta: "Verification, response cadence, review posture",
          status: "Awaiting contract",
          detail: "Verification and moderation rules will bind later, so the UI reserves the slots and explains why.",
          action: "See notes",
        },
      ],
      sidePanelTitle: "Preview behavior",
      sidePanelItems: [
        "Preview remains clearly labeled as local until saved.",
        "Publishing states mirror the shared contract exactly.",
        "No one-off badge systems are introduced outside the token set.",
      ],
      stateTitle: "Profile hidden fallback",
      stateDescription: "When a profile cannot be published yet, the UI should surface concrete readiness gaps instead of a vague disabled screen.",
      stateActionLabel: "Return to dashboard",
      stateActionHref: "/designer/dashboard",
    },
    portfolio: {
      eyebrow: "Portfolio Management",
      title: "Draft and published project states remain visually and semantically distinct.",
      description: "Project management stays editing-oriented while avoiding backend-dependent reorder or publish flows that are not yet frozen.",
      summaryCards: [
        { label: "Published", value: "06", note: "Public case studies live" },
        { label: "Drafts", value: "03", note: "Need narrative and image review" },
        { label: "Ready for review", value: "01", note: "Waiting on proof check" },
        { label: "Archived", value: "02", note: "Retained for history" },
      ],
      listTitle: "Project list",
      items: projects.map((project) => ({
        title: project.title,
        meta: `${project.location} • ${project.year}`,
        status: "Published",
        detail: `${project.summary} This screen keeps draft and published states distinct without implying live reorder APIs.`,
        action: "Open preview",
      })),
      sidePanelTitle: "Management rules",
      sidePanelItems: [
        "Create and edit actions remain primary on mobile without crowding the tab bar.",
        "Draft autosave is not implied as a server feature.",
        "Image quality and aspect ratio remain explicit review criteria.",
      ],
      stateTitle: "Portfolio empty state",
      stateDescription: "A new designer should get guidance toward the first case study structure instead of a blank upload wall.",
      stateActionLabel: "Open dashboard",
      stateActionHref: "/designer/dashboard",
    },
    inquiries: {
      eyebrow: "Lead Queue",
      title: "Lead response stays front and center across desktop and mobile shells.",
      description: "Inquiry and booking timelines are adjacent but separate, matching the shared contracts without merging them into one activity feed.",
      summaryCards: [
        { label: "New", value: "04", note: "Need quick triage" },
        { label: "Acknowledged", value: "03", note: "Conversation started" },
        { label: "Blocked", value: "00", note: "Trust gating deferred" },
        { label: "Converted", value: "01", note: "Moved toward consultation" },
      ],
      listTitle: "Lead status",
      items: [
        {
          title: "Family suite refresh",
          meta: "Chicago • $70k posture",
          status: "New",
          detail: "Lead cards preserve context, urgency, and the next best action without needing a live CRM backend.",
          action: "Acknowledge lead",
        },
        {
          title: "Kitchen renovation consult",
          meta: "Seattle • contractor not selected",
          status: "In discussion",
          detail: "Timeline cues help the designer understand whether the lead is scoped enough for scheduling.",
          action: "Review details",
        },
      ],
      sidePanelTitle: "Response posture",
      sidePanelItems: [
        "Lead-response actions should never be buried behind multiple mobile menus.",
        "Neutral placeholders are preferred over misleading disabled mutations.",
        "Messaging handoff remains explicit.",
      ],
      stateTitle: "No new leads",
      stateDescription: "The recovery path shifts attention to profile readiness, content quality, and public proof rather than an empty operational shell.",
      stateActionLabel: "Improve profile",
      stateActionHref: "/designer/profile",
    },
    bookings: {
      eyebrow: "Consultation Timeline",
      title: "Booking progression remains distinct from inquiry and messaging views.",
      description: "This route presents timeline context and next-action emphasis while scheduling logic remains intentionally passive.",
      summaryCards: [
        { label: "Requested", value: "02", note: "Awaiting decision" },
        { label: "Confirmed", value: "02", note: "Upcoming consults" },
        { label: "Completed", value: "01", note: "Potential review trigger later" },
        { label: "Reschedule risk", value: "01", note: "Needs response" },
      ],
      listTitle: "Consultation states",
      items: [
        {
          title: "Maeve Studio kickoff",
          meta: "Thursday • 45 minutes",
          status: "Confirmed",
          detail: "Status timeline cards preserve context and action clarity even before calendars or reminders are wired.",
          action: "Review booking",
        },
        {
          title: "Project scope call",
          meta: "Time change requested",
          status: "Pending confirmation",
          detail: "The UI signals urgency without inventing automation or notification guarantees.",
          action: "See request",
        },
      ],
      sidePanelTitle: "Scheduling boundaries",
      sidePanelItems: [
        "Reschedule and cancel logic remain backend-dependent.",
        "Booking stays separate from lead qualification.",
        "No calendar integrations are implied yet.",
      ],
      stateTitle: "No consultations scheduled",
      stateDescription: "The empty state should guide the designer back toward inquiry response rather than hiding the booking surface.",
      stateActionLabel: "Open inquiries",
      stateActionHref: "/designer/inquiries",
    },
    messages: {
      eyebrow: "Designer Messages",
      title: "Unread grouping and context cards keep communication actionable.",
      description: "The interface preserves communication-first priorities while staying tolerant of polling or manual refresh launch posture.",
      summaryCards: [
        { label: "Unread", value: "05", note: "Across open threads" },
        { label: "Awaiting client", value: "02", note: "Decision or files needed" },
        { label: "Awaiting designer", value: "03", note: "Response due" },
        { label: "Flagged", value: "00", note: "Moderation controls deferred" },
      ],
      listTitle: "Thread queue",
      items: [
        {
          title: "Warm minimal apartment refresh",
          meta: "Last message 25 minutes ago",
          status: "Unread",
          detail: "Threads keep budget and project-type context visible so replies remain grounded.",
          action: "Open message",
        },
        {
          title: "Kitchen renovation scope",
          meta: "Awaiting client assets",
          status: "Awaiting client",
          detail: "The communication surface prioritizes response speed without losing narrative context.",
          action: "Review thread",
        },
      ],
      sidePanelTitle: "Communication rules",
      sidePanelItems: [
        "Unread logic remains provisional until backend contracts freeze.",
        "Context cards reduce thread ambiguity on dense mobile views.",
        "High-risk actions remain text-labeled.",
      ],
      stateTitle: "Messaging empty state",
      stateDescription: "A new designer should be guided toward leads or profile readiness, not a dead-end inbox.",
      stateActionLabel: "Return to dashboard",
      stateActionHref: "/designer/dashboard",
    },
    content: {
      eyebrow: "Editorial Content",
      title: "List-detail publishing surfaces without invented CMS contracts.",
      description: "Content management remains structured and reusable while server-side publication flows are intentionally deferred.",
      summaryCards: [
        { label: "Draft articles", value: "02", note: "Awaiting review" },
        { label: "Scheduled", value: "01", note: "Publish timing deferred" },
        { label: "Published", value: "04", note: "Live editorial pieces" },
        { label: "Repurposable", value: "03", note: "Can become event or shop support" },
      ],
      listTitle: "Content entries",
      items: articles.map((article) => ({
        title: article.title,
        meta: `${article.category} • ${article.readingTime}`,
        status: "Draft",
        detail: `${article.excerpt} The structure uses shared editorial patterns instead of bespoke composer screens.`,
        action: "Open editor",
      })),
      sidePanelTitle: "Publishing posture",
      sidePanelItems: [
        "Publication states follow the shared contract.",
        "Rich text transport and authoring integrations are deferred.",
        "Preview remains local unless saved later.",
      ],
      stateTitle: "No content yet",
      stateDescription: "The correct empty state explains what a strong first article or guide should include.",
      stateActionLabel: "Review examples",
      stateActionHref: "/blog",
    },
    events: {
      eyebrow: "Event Management",
      title: "Event lists and setup paths stay aligned with the public events surface.",
      description: "Registration and notification infrastructure are deferred, so the page focuses on lifecycle visibility and clean event composition.",
      summaryCards: [
        { label: "Draft", value: "01", note: "Needs host details" },
        { label: "Scheduled", value: "02", note: "Public soon" },
        { label: "Live", value: "01", note: "Registration CTA visible" },
        { label: "Completed", value: "03", note: "Can feed reviews later" },
      ],
      listTitle: "Event queue",
      items: events.map((event) => ({
        title: event.title,
        meta: `${event.format} • ${event.date}`,
        status: "Scheduled",
        detail: `${event.excerpt} Host and agenda data remain visible even before registration flows are bound.`,
        action: "Open event",
      })),
      sidePanelTitle: "Event constraints",
      sidePanelItems: [
        "Registration models remain unresolved.",
        "Contact-host fallback is preserved.",
        "Event lifecycle states stay canonical.",
      ],
      stateTitle: "No upcoming events",
      stateDescription: "The workspace should suggest content repurposing or future workshop planning rather than ending in blank space.",
      stateActionLabel: "Open content",
      stateActionHref: "/designer/content",
    },
    shop: {
      eyebrow: "Product Management",
      title: "Product and storefront management that tolerates either direct checkout or outbound-store posture.",
      description: "Commerce remains conditional, so the structure avoids locking the product team into one checkout model too early.",
      summaryCards: [
        { label: "Active products", value: "07", note: "Visible in public shop" },
        { label: "Unavailable", value: "02", note: "Temporarily off sale" },
        { label: "Outbound mode", value: "03", note: "Visit-store posture" },
        { label: "Direct mode", value: "04", note: "Add-to-cart posture" },
      ],
      listTitle: "Product listings",
      items: products.map((product) => ({
        title: product.title,
        meta: `${product.category} • ${product.priceLabel}`,
        status: product.commerceMode === "add-to-cart" ? "Direct" : "Outbound",
        detail: `${product.excerpt} The UI preserves mode-specific CTA space without changing the page structure.`,
        action: "Open listing",
      })),
      sidePanelTitle: "Commerce safeguards",
      sidePanelItems: [
        "Taxes, refunds, and fulfillment are not implied yet.",
        "CTA labels adapt to the chosen commerce mode.",
        "Inventory states remain canonical and simple.",
      ],
      stateTitle: "No products yet",
      stateDescription: "If a designer has not enabled shop items, the route should still explain the option without forcing a marketplace pattern.",
      stateActionLabel: "View public shop",
      stateActionHref: "/shop",
    },
    settings: {
      eyebrow: "Designer Settings",
      title: "Account, notification, and trust cues presented without operational clutter.",
      description: "The screen preserves verification and support framing while backend and security rules remain deferred.",
      summaryCards: [
        { label: "Verification posture", value: "Pending", note: "Trust docs to follow" },
        { label: "Notification mix", value: "Lead + digest", note: "Illustrative preferences" },
        { label: "Support links", value: "Always visible", note: "Never buried" },
        { label: "Profile sync", value: "Manual", note: "No autosave implied" },
      ],
      listTitle: "Settings modules",
      items: [
        {
          title: "Account posture",
          meta: "Contact and firm details",
          status: "Available",
          detail: "The screen avoids provider-specific complexity that belongs to later implementation phases.",
          action: "Review settings",
        },
        {
          title: "Trust signals",
          meta: "Verification and moderation cues",
          status: "Awaiting rules",
          detail: "Reserved slots preserve structure without inventing policy details.",
          action: "See trust notes",
        },
      ],
      sidePanelTitle: "Settings behavior",
      sidePanelItems: [
        "Help and trust routes remain persistent.",
        "Risky actions require clear labels.",
        "Verification messaging stays factual and non-speculative.",
      ],
      stateTitle: "Need assistance?",
      stateDescription: "Support and trust routes should be reachable directly from settings even before full backend support tooling exists.",
      stateActionLabel: "Open contact",
      stateActionHref: "/contact",
    },
  },
  admin: {
    dashboard: {
      eyebrow: "Governance Overview",
      title: "High-density moderation context with explicit urgency and reversibility.",
      description: "Admin routes stay desktop-first and information-dense while destructive workflows remain clearly confirmed and not yet wired.",
      summaryCards: [
        { label: "Urgent reports", value: "04", note: "Require same-day review" },
        { label: "Review queue", value: "12", note: "Eligibility and moderation pending" },
        { label: "Profile checks", value: "07", note: "Designer visibility review" },
        { label: "Support tickets", value: "05", note: "Needs operator routing" },
      ],
      listTitle: "Operational priorities",
      items: [
        {
          title: "Reported review cluster",
          meta: "Trust-sensitive",
          status: "Urgent",
          detail: "Evidence context must be visible before any reversible action can be taken.",
          action: "Open queue",
        },
        {
          title: "Designer publication check",
          meta: "Visibility gating",
          status: "Review",
          detail: "Admin tools may intervene, but they do not redefine source ownership of profile records.",
          action: "Inspect record",
        },
      ],
      sidePanelTitle: "Admin constraints",
      sidePanelItems: [
        "Mobile support is limited and not the primary moderation surface.",
        "Actions remain descriptive until backend governance tooling exists.",
        "Status chips stay consistent across moderation domains.",
      ],
      stateTitle: "Healthy queue state",
      stateDescription: "An empty moderation queue should communicate system health and review posture, not generic emptiness.",
      stateActionLabel: "Open support queue",
      stateActionHref: "/admin/support",
    },
    users: {
      eyebrow: "User Review",
      title: "User lookup, filters, and reversible intervention entry points.",
      description: "This route protects density and clarity without inventing operational capabilities beyond the shared contract.",
      summaryCards: [
        { label: "Active clients", value: "1.2k", note: "Illustrative count" },
        { label: "Restricted", value: "06", note: "Needs trust follow-up" },
        { label: "Pending checks", value: "09", note: "Identity-related" },
        { label: "Support-linked", value: "11", note: "Attached to open issues" },
      ],
      listTitle: "User records",
      items: [
        {
          title: "Client review eligibility dispute",
          meta: "Opened today",
          status: "Needs evidence",
          detail: "Support and trust context should be visible before any action is suggested.",
          action: "Review case",
        },
        {
          title: "Restricted messaging account",
          meta: "Awaiting policy decision",
          status: "Escalated",
          detail: "The UI keeps intervention text-labeled and auditable rather than immediate and ambiguous.",
          action: "Open record",
        },
      ],
      sidePanelTitle: "Control posture",
      sidePanelItems: [
        "Admin capability must stay separate from end-user surfaces.",
        "Evidence comes before intervention.",
        "Reversibility remains explicit in the UI.",
      ],
      stateTitle: "No user issues",
      stateDescription: "When no issues are active, the route should still surface lookup and audit readiness rather than an empty table.",
      stateActionLabel: "Return to overview",
      stateActionHref: "/admin",
    },
    designers: {
      eyebrow: "Designer Governance",
      title: "Visibility, verification, and public-surface quality checks.",
      description: "The page emphasizes evidence and reversible governance over decorative composition.",
      summaryCards: [
        { label: "Pending verification", value: "05", note: "Policy-driven" },
        { label: "Review needed", value: "08", note: "Profile or project concerns" },
        { label: "Suspended", value: "01", note: "High-risk case" },
        { label: "Healthy", value: "142", note: "No active issues" },
      ],
      listTitle: "Designer checks",
      items: [
        {
          title: "Profile proof completeness review",
          meta: "Missing service-area clarity",
          status: "Review needed",
          detail: "Visibility checks are presented as structured governance work, not ad-hoc admin judgment.",
          action: "Inspect profile",
        },
        {
          title: "Verification evidence pending",
          meta: "New studio onboarding",
          status: "Pending",
          detail: "Verification language remains neutral and operational, not punitive.",
          action: "Open review",
        },
      ],
      sidePanelTitle: "Governance expectations",
      sidePanelItems: [
        "Admin surfaces isolate platform-wide controls.",
        "Trust interventions must be auditable later.",
        "Public route availability and governance remain separate concerns.",
      ],
      stateTitle: "No active designer issues",
      stateDescription: "Queue health should still be visible when no designers require intervention.",
      stateActionLabel: "Open overview",
      stateActionHref: "/admin",
    },
    reviews: {
      eyebrow: "Review Moderation",
      title: "Moderation queue with clear evidence context and publication posture.",
      description: "Review publication rules remain deferred, but the UI already distinguishes drafts, moderation, and published references.",
      summaryCards: [
        { label: "Submitted", value: "12", note: "Awaiting review" },
        { label: "Under review", value: "04", note: "Moderator context open" },
        { label: "Published", value: "126", note: "Visible publicly" },
        { label: "Removed", value: "03", note: "Retained for audit later" },
      ],
      listTitle: "Moderation queue",
      items: [
        {
          title: "Review eligibility mismatch",
          meta: "Client claims completed consultation",
          status: "Needs verification",
          detail: "The UI avoids implying moderation certainty when trust rules have not been fully bound yet.",
          action: "Inspect evidence",
        },
        {
          title: "Tone escalation report",
          meta: "Public excerpt flagged",
          status: "Under review",
          detail: "Action language remains reversible and context-rich.",
          action: "Open moderation card",
        },
      ],
      sidePanelTitle: "Review rules",
      sidePanelItems: [
        "Publication can be delayed.",
        "Evidence context is mandatory before action.",
        "Status chips stay aligned with the shared lifecycle model.",
      ],
      stateTitle: "No reviews waiting",
      stateDescription: "Empty state should indicate queue health and moderation readiness, not a blank governance screen.",
      stateActionLabel: "Return to overview",
      stateActionHref: "/admin",
    },
    content: {
      eyebrow: "Content Governance",
      title: "Editorial review with fast scan, evidence, and support routing.",
      description: "Public content quality checks remain consistent with the public blog and help surfaces without inventing CMS internals.",
      summaryCards: [
        { label: "Flagged content", value: "03", note: "Requires review" },
        { label: "Scheduled", value: "07", note: "Editorial calendar" },
        { label: "Published", value: "38", note: "Visible publicly" },
        { label: "Archived", value: "09", note: "Retained for reference" },
      ],
      listTitle: "Content queue",
      items: articles.map((article) => ({
        title: article.title,
        meta: `${article.category} • ${article.readingTime}`,
        status: "Published",
        detail: `${article.excerpt} The moderation posture stays content-first and reversible.`,
        action: "Open entry",
      })),
      sidePanelTitle: "Editorial notes",
      sidePanelItems: [
        "Utility and editorial surfaces should never become unstyled dumps.",
        "Moderation uses evidence-first cards.",
        "Admin layouts stay data-first rather than promotional.",
      ],
      stateTitle: "Queue clear",
      stateDescription: "A clear content queue should still expose health, coverage, and audit paths.",
      stateActionLabel: "Open overview",
      stateActionHref: "/admin",
    },
    events: {
      eyebrow: "Event Governance",
      title: "Event review surfaces with host context and reversible actions.",
      description: "Event moderation remains explicit about host, format, and status without inventing registration or refund operations.",
      summaryCards: [
        { label: "Pending review", value: "02", note: "Host details incomplete" },
        { label: "Scheduled", value: "05", note: "Ready for listing" },
        { label: "Canceled", value: "01", note: "User communication later" },
        { label: "Completed", value: "14", note: "Historical" },
      ],
      listTitle: "Event review list",
      items: events.map((event) => ({
        title: event.title,
        meta: `${event.host} • ${event.date}`,
        status: "Scheduled",
        detail: `${event.excerpt} The governance view keeps evidence and host context visible together.`,
        action: "Open review",
      })),
      sidePanelTitle: "Event moderation posture",
      sidePanelItems: [
        "Host context stays visible with every record.",
        "Registration model is not assumed.",
        "Destructive actions must confirm context.",
      ],
      stateTitle: "No event issues",
      stateDescription: "Empty state should indicate operational health and where to find upcoming scheduled listings.",
      stateActionLabel: "Open overview",
      stateActionHref: "/admin",
    },
    shop: {
      eyebrow: "Commerce Governance",
      title: "Product oversight that works whether commerce is direct or outbound.",
      description: "This route avoids hardcoding a single commerce model while still giving operators a clear review surface.",
      summaryCards: [
        { label: "Active", value: "42", note: "Visible on public shop" },
        { label: "Unavailable", value: "06", note: "Temporarily paused" },
        { label: "Outbound", value: "18", note: "External store links" },
        { label: "Direct", value: "24", note: "Cart-ready posture later" },
      ],
      listTitle: "Product oversight",
      items: products.map((product) => ({
        title: product.title,
        meta: `${product.category} • ${product.priceLabel}`,
        status: product.commerceMode === "add-to-cart" ? "Direct" : "Outbound",
        detail: `${product.excerpt} Governance remains mode-aware without rewriting page structure.`,
        action: "Review listing",
      })),
      sidePanelTitle: "Commerce constraints",
      sidePanelItems: [
        "Refund and fulfillment operations remain deferred.",
        "Storefront policy must stay explicit.",
        "Action language depends on commerce mode.",
      ],
      stateTitle: "No commerce issues",
      stateDescription: "The queue should still communicate storefront health when no product records need intervention.",
      stateActionLabel: "Open overview",
      stateActionHref: "/admin",
    },
    reports: {
      eyebrow: "Issue Reports",
      title: "Severity-driven issue intake with workflow ownership cues.",
      description: "Report handling remains evidence-first and does not silently collapse into generic support tickets.",
      summaryCards: [
        { label: "Critical", value: "01", note: "Needs immediate review" },
        { label: "High", value: "03", note: "Trust or safety concern" },
        { label: "Medium", value: "07", note: "Needs triage" },
        { label: "Assigned", value: "05", note: "Operator ownership noted" },
      ],
      listTitle: "Report queue",
      items: [
        {
          title: "Suspicious review pattern",
          meta: "Cross-listing anomaly",
          status: "High",
          detail: "Severity indicators remain scannable and never icon-only.",
          action: "Open report",
        },
        {
          title: "Misleading product listing",
          meta: "Commerce concern",
          status: "Medium",
          detail: "Reports route toward evidence and support context rather than immediate irreversible action.",
          action: "Inspect listing",
        },
      ],
      sidePanelTitle: "Report handling",
      sidePanelItems: [
        "Workflow ownership should be visible.",
        "Severity and evidence travel together.",
        "Escalation posture remains explicit.",
      ],
      stateTitle: "No active reports",
      stateDescription: "A healthy queue should still communicate alert readiness and where high-risk signals would appear.",
      stateActionLabel: "Return to overview",
      stateActionHref: "/admin",
    },
    support: {
      eyebrow: "Support Queue",
      title: "Operational support with clear routing and context preservation.",
      description: "Support remains distinct from moderation while still allowing trust-sensitive escalation later.",
      summaryCards: [
        { label: "Open cases", value: "05", note: "Awaiting response" },
        { label: "Escalated", value: "02", note: "Needs trust input" },
        { label: "Resolved today", value: "09", note: "Illustrative metric" },
        { label: "Needs owner", value: "01", note: "Unassigned" },
      ],
      listTitle: "Support items",
      items: [
        {
          title: "Client can’t locate inquiry history",
          meta: "Account surface issue",
          status: "Open",
          detail: "Support queues keep account, trust, and route context together for fast triage.",
          action: "Open case",
        },
        {
          title: "Designer onboarding question",
          meta: "Verification + publishing",
          status: "Escalated",
          detail: "Escalation remains visible without turning support into a shadow moderation console.",
          action: "Review request",
        },
      ],
      sidePanelTitle: "Support rules",
      sidePanelItems: [
        "Issue ownership should stay visible.",
        "Trust escalations remain distinct from generic support.",
        "Context summary appears before action.",
      ],
      stateTitle: "Queue healthy",
      stateDescription: "When support volume is low, the route should still surface escalation paths and operational readiness.",
      stateActionLabel: "Return to overview",
      stateActionHref: "/admin/dashboard",
    },
    settings: {
      eyebrow: "Admin Settings",
      title: "Platform configuration summaries with restrained, text-labeled controls.",
      description: "This route preserves layout and access separation without implying live platform mutations.",
      summaryCards: [
        { label: "Route controls", value: "Public + admin", note: "Summarized only" },
        { label: "Trust posture", value: "Policy pending", note: "Security phase later" },
        { label: "Operational links", value: "Centralized", note: "Support and governance aligned" },
        { label: "Audit readiness", value: "Planned", note: "Backed by later security work" },
      ],
      listTitle: "Configuration areas",
      items: [
        {
          title: "Platform route posture",
          meta: "Public and internal surfaces",
          status: "Summary",
          detail: "Settings remain a summary surface until operational contracts and permissions are finalized.",
          action: "Review summary",
        },
        {
          title: "Moderation defaults",
          meta: "Trust-sensitive",
          status: "Deferred",
          detail: "Trust settings are intentionally deferred to security and backend planning.",
          action: "See notes",
        },
      ],
      sidePanelTitle: "Settings safeguards",
      sidePanelItems: [
        "Admin-only controls stay isolated.",
        "Destructive actions require confirmation context.",
        "Platform-wide controls remain summary-first until approved.",
      ],
      stateTitle: "Need a system view?",
      stateDescription: "This route should still orient operators even when no configuration mutations are currently available.",
      stateActionLabel: "Open overview",
      stateActionHref: "/admin/dashboard",
    },
  },
};

export const designerBySlug = Object.fromEntries(
  designers.map((designer) => [designer.slug, designer]),
) as Record<string, Designer>;

export const projectBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
) as Record<string, Project>;

export const articleBySlug = Object.fromEntries(
  articles.map((article) => [article.slug, article]),
) as Record<string, Article>;

export const eventBySlug = Object.fromEntries(
  events.map((event) => [event.slug, event]),
) as Record<string, EventListing>;

export const productBySlug = Object.fromEntries(
  products.map((product) => [product.slug, product]),
) as Record<string, Product>;

export function getDesignerProjects(designerSlug: string) {
  return projects.filter((project) => project.designerSlug === designerSlug);
}

export function getRelatedDesigners(currentSlug: string) {
  return designers.filter((designer) => designer.slug !== currentSlug).slice(0, 2);
}