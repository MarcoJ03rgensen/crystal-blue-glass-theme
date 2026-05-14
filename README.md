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

Because of a hard limitation in Google Chrome, **an extension cannot be both a Theme and a New Tab page at the same time**. If combined, Chrome will reject the theme colors. 

To get the full seamless ocean experience, you must load this project as **two separate items** in Chrome:

### Step 1: The New Tab Extension (The Ocean)

1. Open Chrome and go to `chrome://extensions/`
2. Turn on **Developer mode** (toggle in the top-right corner).
3. Click the **Load unpacked** button.
4. Select the main `beluga-chrome-theme/` folder.
*This replaces your new tab with the animated beluga ocean.*
5. If you want to change the color in the top bar, load beluga-browser-theme seperatly as well.

### Step 2: The Browser Theme (Tabs & Toolbar)

1. On the same `chrome://extensions/` page, click **Load unpacked** again.
2. This time, select the `beluga-chrome-theme/beluga-browser-theme/` folder.
*This applies the deep ocean blue to Chrome's tab bar, toolbar, and address bar so it blends perfectly into the new tab page.*

Once both are loaded, open a new tab — the browser frame and the page will seamlessly flow together.

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