# Prompt & Architecture Guide for Claude

Copy and paste the instructions below into Claude along with your `index.html` file (or upload `index.html` directly):

---

```markdown
Hi Claude,

Here is the complete source code for my portfolio website ("Legendary Agency"). 
I want you to help me make some layout and design changes to the Contact Us section.

### Website Architecture & Key Rules:
1. **Single-File Core**: The entire web app (HTML layout, CSS styling, and Vanilla JS interactions) lives inside `index.html`.
2. **Fixed-Canvas Scaling**: The website uses a fixed 1280px wide stage (`#stage`) that dynamically scales to any screen width using CSS transforms (`scale(s)`). All section elements inside `.stage` are positioned absolutely using pixel coordinates (`left` and `top`).
3. **Contact Us Section (Coordinates: ~4300px to ~5100px)**:
   - **Non-Negotiables**:
     - The `"Contact us"` title text MUST stay in `Instrument Serif`, font size `200px` (`.h200`), and horizontally centered on the 1280px stage (`left: 640px; transform: translateX(-50%); text-align: center;`).
   - **Glassmorphism Effect**: The navigation bar (`#nav`) has a frosted glass effect:
     ```css
     background: linear-gradient(135deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0.11) 100%);
     backdrop-filter: blur(22px) saturate(190%) contrast(105%);
     -webkit-backdrop-filter: blur(22px) saturate(190%) contrast(105%);
     border: 1px solid rgba(255, 255, 255, 0.36);
     box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.65), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.18), 0 10px 30px -4px rgba(0, 0, 30, 0.35), 0 4px 12px 0 rgba(0, 0, 0, 0.16);
     ```
     With a top reflection sheen (`::before` with gradient mask).
   - **Layout Goal**: The layout should feel like an award-winning boutique digital agency (inspired by Mobbin/Awwwards). Avoid generic "AI-generated" looks (no cheesy neon gradients or fake forms). Maintain human craft, refined typographic hierarchy, and clear direct contact avenues (Call, Email, Location).
```

---

### How to use this:
1. **Fastest Option (Direct Upload)**: Simply drag and drop [index.html](file:///Users/anamrazzaque/Downloads/Anyone%20can%20COOK/byanam-portfolio/index.html) into Claude.
2. **Clipboard**: The code of `index.html` has already been copied to your Mac clipboard using `pbcopy`. You can simply press **`Cmd + V`** directly in Claude.
