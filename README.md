# Beluga — Chrome Theme

A Chrome extension that turns every new tab into a living deep-ocean scene with a pod of beluga whales swimming in the depths.

![Theme Preview](https://img.shields.io/badge/Chrome-Theme-blue?style=for-the-badge&logo=googlechrome)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

## What It Is

Beluga is a **custom new tab extension** — not just a color theme. The ocean *is* the page. Open a new tab and watch a pod of beluga whales glide past at different distances: one up close with full detail, and four more fading into the abyss behind it.

- 🐋 **Pod of 5 beluga whales** at different depths — each a different size, blur, speed, and opacity
- 🌊 **Living ocean** — volumetric light rays, caustic light patterns, and rising bubbles
- 🕐 **Clock** with live date in your locale
- 🔍 **Google search** with automatic locale-aware domain detection
- ⚡ **Favicon shortcuts** — real website icons, no emojis
- ✏️ **Customize shortcuts** — add, edit, or remove with live favicon previews
- 🎬 **Intro animation** — the beluga swims in from offscreen on first load

## Installation

Load both folders as unpacked Chrome extensions for the full experience:

### 1. New Tab (the ocean scene)

1. Go to `chrome://extensions/`
2. Enable **Developer mode** (top-right toggle)
3. Click **Load unpacked**
4. Select the root `beluga-chrome-theme/` folder

Open a new tab — the beluga swims immediately.

### 2. Browser Theme (tabs, toolbar, bookmarks bar)

1. Click **Load unpacked** again
2. Select `beluga-chrome-theme/beluga-browser-theme/`

This applies the deep-ocean dark blue to Chrome's tab bar, toolbar, and address bar.

> Chrome does not allow a theme and a custom new tab in the same extension — that's why they are two separate folders.

## File Structure

```
beluga-chrome-theme/
├── manifest.json              ← New tab extension manifest
├── belugaswim.html            ← The new tab page
├── newtab.css                 ← Ocean, beluga pod, and UI styles
├── newtab.js                  ← Clock, search, shortcuts, bubbles
├── icons/                     ← Extension icons (16px, 48px, 128px)
├── README.md
├── LICENSE
└── beluga-browser-theme/      ← Companion browser chrome theme
    ├── manifest.json
    ├── frame.png              ← Tab bar gradient
    └── toolbar.png            ← Toolbar glass overlay
```

## The Beluga Pod

Five whales swim at once, each at a different depth:

| Layer | Size | Blur | Opacity | Cycle |
|-------|------|------|---------|-------|
| Primary | 380px | none | 85% | 55s |
| Mid-distance | 220px | soft | 28% | 63s |
| Distant | 180px | light | 35% | 72s |
| Far | 140px | medium | 18% | 82s |
| Abyss | 100px | heavy | 10% | 95s |

Each swims independently with a different speed, direction, and vertical position — so the ocean always feels alive.

## Customizing Shortcuts

Click **Customize** in the bottom-left corner of any new tab. You can:
- Edit the name or URL of any shortcut
- See a live favicon preview as you type a URL
- Add new shortcuts or remove existing ones

Shortcuts are saved in `localStorage` and persist across sessions.

## Customizing the Ocean

Modify the CSS variables at the top of `newtab.css`:

```css
--ocean-surface: #006994;
--ocean-top:     #004d7a;
--ocean-mid:     #00334e;
--ocean-bottom:  #001328;
--ocean-abyss:   #000a14;
```

## Browser Compatibility

- Google Chrome 88+
- Microsoft Edge 88+
- Brave and other Chromium-based browsers

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)** license.

You are free to share and adapt this work for non-commercial purposes, provided you give appropriate credit.

[View full license →](LICENSE)