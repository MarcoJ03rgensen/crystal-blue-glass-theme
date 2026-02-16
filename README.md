# Crystal Blue Glass Theme

A deep blue glassmorphism Chrome theme with frosted gradients, glowing text, and subtle noise textures.

![Theme Preview](https://img.shields.io/badge/Chrome-Theme-blue?style=for-the-badge&logo=googlechrome)
[![Generate Assets](https://github.com/MarcoJ03rgensen/crystal-blue-glass-theme/actions/workflows/generate-assets.yml/badge.svg)](https://github.com/MarcoJ03rgensen/crystal-blue-glass-theme/actions/workflows/generate-assets.yml)

## Features

- **Deep Blue Gradients**: Dark slate frame with lighter blue toolbar overlays
- **Frosted Glass Effect**: Subtle noise textures mimic real frosted glass
- **Radial Glow Background**: Centered glow effect on new tab pages
- **Glowing UI Elements**: Cyan-tinted buttons with high contrast white text
- **Manifest V3**: Compatible with modern Chrome versions
- **Automated Asset Generation**: GitHub Actions automatically generates PNG files

## Installation

### Quick Install (Recommended)

The PNG assets are automatically generated and included in the repository:

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/MarcoJ03rgensen/crystal-blue-glass-theme.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable **Developer mode** (toggle in top-right corner)

4. Click **Load unpacked**

5. Select the `crystal-blue-glass-theme` folder

6. The theme applies immediately!

### Manual Asset Generation (Optional)

If you want to regenerate the assets locally:

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

## How It Works

### Automated Asset Generation

This repository uses **GitHub Actions** to automatically generate the theme's PNG assets whenever `generate_assets.py` is modified:

- **Trigger**: Any push that changes `generate_assets.py`
- **Process**: Installs Python & Pillow → Runs generator → Commits PNGs
- **Result**: Fresh assets always available without manual builds

You can also trigger the workflow manually from the [Actions tab](https://github.com/MarcoJ03rgensen/crystal-blue-glass-theme/actions/workflows/generate-assets.yml).

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

Push your changes and GitHub Actions will automatically regenerate the PNGs!

## Technical Details

- **Manifest Version**: 3 (required for Chrome as of 2024)
- **Color Format**: RGB arrays, optional alpha channel `[R, G, B, A]`
- **Tints**: HSL format `[hue, saturation, lightness]` for button colorization
- **Image Requirements**: PNG format, RGBA color space
- **CI/CD**: GitHub Actions with Python 3.11 and Pillow

## Browser Compatibility

- Google Chrome 88+
- Microsoft Edge 88+
- Brave Browser 1.20+
- Other Chromium-based browsers with theme support

## License

MIT License - Feel free to modify and redistribute.

## Credits

Theme design inspired by modern glassmorphism UI trends and Apple's translucent interface aesthetics.
