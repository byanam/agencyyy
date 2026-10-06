# Architecture Diagram

```
[ Window Viewport ]
       │
       ▼
 [ HTML Page ]
   ├── Preloader (#loaderScreen)
   │     └── Smooth SVG circle stroke + favicon
   ├── Navigation (#nav)
   │     └── Responsive glassmorphism pill
   ├── Stage Wrapper (#wrap, Height: 3p)
   │     ├── Copy 0 (0..p): Upward buffer
   │     ├── Copy 1 (p..2p): Primary stage (starts here)
   │     └── Copy 2 (2p..3p): Downward buffer
   └── Receipt Modal (#rcModal)
         └── Contact form dialog with live ticker
```
