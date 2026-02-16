# Crystal Blue Glass Theme

A deep blue glassmorphism Chrome theme with frosted gradients, glowing text, and subtle noise textures.

![Theme Preview](https://img.shields.io/badge/Chrome-Theme-blue?style=for-the-badge&logo=googlechrome)

## Features

- **Deep Blue Gradients**: Dark slate frame with lighter blue toolbar overlays
- **Frosted Glass Effect**: Subtle noise textures mimic real frosted glass
- **Radial Glow Background**: Centered glow effect on new tab pages
- **Glowing UI Elements**: Cyan-tinted buttons with high contrast white text
- **Manifest V3**: Compatible with modern Chrome versions

## Installation

### Step 1: Generate Assets

The theme requires three PNG image files. Generate them using the included Python script:

```bash
# Install Pillow if you don't have it
pip install Pillow

# Run the generator
python generate_assets.py
```

This creates:
- `frame.png` - Window border gradient (1920×200)
- `toolbar.png` - Semi-transparent toolbar overlay (1920×200)
- `ntp_background.png` - New tab page background with radial glow (1920×1080)

### Step 2: Load in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right corner)
3. Click **Load unpacked**
4. Select the folder containing `manifest.json` and the generated PNG files
5. The theme will apply immediately

## Customization

### Colors

Edit RGB values in `manifest.json` under `theme.colors`:

- `frame`: Main window border color
- `tab_text`: Active tab text color
- `bookmark_text`: Bookmark bar text color
- `omnibox_background`: Address bar background

### Gradients

Modify gradient colors in `generate_assets.py`:

```python
# Example: Change frame gradient
frame = create_gradient(1920, 200, (R1, G1, B1, 255), (R2, G2, B2, 255))
```

Rerun the script to regenerate the PNG files.

## Technical Details

- **Manifest Version**: 3 (required for Chrome as of 2024)
- **Color Format**: RGB arrays, optional alpha channel `[R, G, B, A]`
- **Tints**: HSL format `[hue, saturation, lightness]` for button colorization
- **Image Requirements**: PNG format, RGBA color space

## Browser Compatibility

- Google Chrome 88+
- Microsoft Edge 88+
- Brave Browser 1.20+
- Other Chromium-based browsers with theme support

## License

MIT License - Feel free to modify and redistribute.

## Credits

Theme design inspired by modern glassmorphism UI trends and Apple's translucent interface aesthetics.
