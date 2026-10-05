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
