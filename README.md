# Beluga — Chrome Theme

A deep-ocean Chrome theme with an animated beluga whale swimming through your new tab page.

![Theme Preview](https://img.shields.io/badge/Chrome-Theme-blue?style=for-the-badge&logo=googlechrome)
[![Generate Assets](https://github.com/MarcoJ03rgensen/beluga-chrome-theme/actions/workflows/generate-assets.yml/badge.svg)](https://github.com/MarcoJ03rgensen/beluga-chrome-theme/actions/workflows/generate-assets.yml)

## What It Is

Beluga is a **complete Chrome theme** — not just a skin, not just an overlay. The beluga whale *is* the theme. Every new tab opens into a living deep-ocean scene with:

- 🐋 **Animated beluga** swimming across the viewport with organic body undulation, fin movement, and tail swing
- 🌊 **Living ocean** with volumetric light rays, caustic patterns, and rising bubbles
- 🫧 **Depth layering** — a distant companion beluga adds parallax and atmosphere
- 🕐 **Clock & Search** — full new tab functionality with Google search, customizable shortcuts
- 🎨 **Deep blue chrome** — matching frame, toolbar, and omnibox colors

## Features

- **Manifest V3** — fully compatible with modern Chrome
- **Custom New Tab** — replaces the default new tab with the animated ocean scene
- **Theme Colors** — deep blue frame, toolbar, and UI elements that match the ocean
- **Intro Animation** — the beluga swims in from the left on first load
- **Customizable Shortcuts** — add, edit, and remove your bookmarks
- **Locale-Aware Search** — auto-detects your country for the correct Google domain
- **Automated Asset Generation** — GitHub Actions generates frame/toolbar PNGs

## Installation

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/MarcoJ03rgensen/beluga-chrome-theme.git
   ```

2. Open Chrome → `chrome://extensions/`

3. Enable **Developer mode** (toggle in top-right)

4. Click **Load unpacked**

5. Select the `beluga-chrome-theme` folder

6. The theme applies immediately — open a new tab to see the beluga swim.

## Project Structure

```
beluga-chrome-theme/
├── manifest.json          ← Unified theme + new tab extension
├── belugaswim.html        ← The new tab page (the theme)
├── newtab.css             ← Ocean, beluga, and UI styling
├── newtab.js              ← Clock, search, shortcuts, bubbles
├── frame.png              ← Browser frame gradient
├── toolbar.png            ← Toolbar glass overlay
├── whale.svg              ← Beluga SVG source
├── generate_assets.py     ← Auto-generates frame/toolbar PNGs
└── beluga-overlay/        ← Optional: companion overlay extension
```

## Optional: Beluga Overlay Extension

The `beluga-overlay/` directory contains a standalone content-script extension that makes a small beluga swim across the top of *every* webpage. Load it separately if you want the beluga everywhere, not just on new tabs.

## Customization

### Colors
Edit RGB values in `manifest.json` under `theme.colors`.

### Ocean Gradient
Modify the CSS variables in `newtab.css`:
```css
--ocean-surface: #006994;
--ocean-top: #004d7a;
--ocean-mid: #00334e;
--ocean-bottom: #001328;
--ocean-abyss: #000a14;
```

### Frame/Toolbar Assets
Modify `generate_assets.py` and push — GitHub Actions regenerates the PNGs.

## Browser Compatibility

- Google Chrome 88+
- Microsoft Edge 88+
- Brave Browser 1.20+
- Other Chromium-based browsers with theme support

## License

MIT License — Feel free to modify and redistribute.
