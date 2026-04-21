# Public Content, Commerce, And Utility Pages

## Routes Covered

- `/blog`
- `/blog/:articleSlug`
- `/events`
- `/events/:eventSlug`
- `/shop`
- `/shop/:productSlug`
- `/chat-assistant`
- `/about`
- `/contact`
- `/help`
- `/policies/*`

## Blog Index

Goal:
- turn inspiration readers into designer discovery and repeat visits

Layout:
- editorial header, featured article, themed article rows, designer-linked reading paths

Acceptance criteria:
- article cards vary from designer cards and product cards
- topic navigation remains readable on mobile with horizontally scrollable labeled chips

## Blog Article

Goal:
- deliver readable long-form content with embedded discovery paths

Layout:
- narrow reading column, share/save rail, inline designer/project/product references, end-of-article recommendation block

Anti-pattern:
- article pages that look like catalog cards stretched into paragraphs

## Events Index And Detail

Goal:
- present events as educational or promotional opportunities and route to save/register/contact

Mobile detail behavior:
- sticky bottom action bar with `Save` and `Register` or `Contact Host`

## Shop Index And Product Detail

Goal:
- support product exploration without making the public experience feel like a generic marketplace clone

Shop index layout:
- editorial merchandising bands plus product grid and filter tools

Product detail layout:
- image gallery, product story, trust/reassurance cluster, related project references, action module

Conditional behavior:
- primary CTA supports either `Add to Cart` or `Visit Store` based on later commerce model

## AI Assistant Page

Goal:
- provide guided discovery, inspiration prompts, and fast route routing without implying private data access

Layout:
- conversational workspace, quick-prompt tiles, result cards, fallback help links

Acceptance criteria:
- example prompts are visually distinct from live conversation turns
- unsupported responses route to search/help instead of dead ends

## Utility Pages

About:
- brand mission, trust approach, how the platform works

Contact:
- support paths, not a catch-all dead-end form

Help:
- searchable help categories, account support, booking and trust FAQs

Policies:
- highly readable legal layout with anchored sections and print/share support

Common anti-patterns:
- reusing the home hero on article, event, and product pages
- treating utility pages as unstyled text dumps
