# Changelog

All notable changes to this portfolio project are documented in this file.

## [1.3.0] - 2026-10-06
### Added
- 4K photographic detail enhancement on services & process cloud (255d2) matching footer cloud quality
- Bulletproof audio system with WebAudio context unlock, user-gesture activation, and reliable sound toggle
- Loading screen: rotating white stroke ring around umbrella favicon with gradient background
- Square (butt) stroke cap on loader progress ring for sharp, modern look
- Smooth glassmorphic nav indicator that slides between sections without teleporting
- Inner shadow (shB filter) applied to "Ready to talk?" heading, matching section headings
- Purple gradient background extended edge-to-edge, eliminating black side bands

### Fixed
- Cloud title ("Projects", "Services & Process") drop animation glitch on fast scroll
- Music not playing: removed muted-fallback loop that locked audio into silent state
- Loading screen revealing elements one by one — preloader now covers all asset loading

### Changed
- Upgraded services & process cloud (255d2) from 3072 px to 3840 px (4K) with highlight pop
- Audio activation events restricted to true user gesture events (click, touch, keydown)
- Title drop animation duration reduced from 1100 ms to 600 ms for snappier reveal

## [1.2.0] - 2026-10-04
### Added
- 1:1 Figma hero section with multi-layered storm clouds, Instrument Serif typography, and debossed inner shadows.
- Modular architecture dividing styles, scripts, templates, and data into `src/`.
- Automated test suite covering math, collision physics, and particle lifecycles.
- CI/CD workflow for automated test and build validation.

### Changed
- Refactored monolithic index.html styles into 20+ specialized domain stylesheets.
- Modularized storm rain canvas simulation and canopy collision mathematics.

<!-- micro-improvement: perf: add font-display swap hint comment for Instrument Sans -->

<!-- micro-improvement: style: tighten loader ring transition from 0.1s to 0.08s for -->

<!-- micro-improvement: style: increase loader favicon drop-shadow spread for deeper -->

<!-- micro-improvement: perf: add contain:strict to loader-screen to isolate paint a -->

<!-- micro-improvement: style: soften loader-ring-bg track opacity from 0.18 to 0.15 -->

<!-- micro-improvement: a11y: add aria-live=polite to loader-screen so screen reader -->

<!-- micro-improvement: style: increase nav border opacity from 0.36 to 0.40 for cri -->

<!-- micro-improvement: style: tighten nav backdrop-filter blur from 22px to 20px fo -->

<!-- micro-improvement: style: raise nav indicator border-radius from 30px to 32px f -->

<!-- micro-improvement: style: reduce snd button margin-right from 6px to 4px for ti -->

<!-- micro-improvement: perf: add pointer-events:none to sr-only spans to avoid hit- -->

<!-- micro-improvement: style: increase .h200 heading letter-spacing from -6px to -5 -->

<!-- micro-improvement: style: add word-spacing:-2px to .h200 headings for tighter d -->

<!-- micro-improvement: a11y: add role=img and aria-hidden=true to all decorative cl -->

<!-- micro-improvement: perf: mark audio elements with crossorigin=anonymous for COR -->

<!-- micro-improvement: style: boost thunder audio volume from 0.70 to 0.72 for punc -->

<!-- micro-improvement: style: reduce bgMusic volume from 0.35 to 0.32 for better mu -->

<!-- micro-improvement: perf: add dns-prefetch link for fonts.googleapis.com alongsi -->

<!-- micro-improvement: style: increase loader-badge-wrap max-width from 82vmin to 8 -->

<!-- micro-improvement: style: add overflow:hidden to loader-screen to clip any over -->

<!-- micro-improvement: perf: set fetchpriority=high on thunder.mp3 preload to prior -->

<!-- micro-improvement: style: reduce nav gap from 6px to 5px for slightly tighter s -->

<!-- micro-improvement: style: add letter-spacing:-0.5px to nav anchor links for pre -->

<!-- micro-improvement: style: increase cta button border-radius from inheriting 30p -->

<!-- micro-improvement: style: reduce nav padding from 6px 8px to 5px 7px for compac -->

<!-- micro-improvement: perf: convert audio error handler to use loadeddata event fo -->

<!-- micro-improvement: style: add webkit-font-smoothing:antialiased globally for cr -->

<!-- micro-improvement: style: add moz-osx-font-smoothing:grayscale for consistent t -->

<!-- micro-improvement: perf: add will-change:opacity to .loader-screen.hidden for G -->

<!-- micro-improvement: style: reduce loader fade-out duration from 0.65s to 0.55s f -->

<!-- micro-improvement: style: add text-rendering:optimizeLegibility to heading sele -->
