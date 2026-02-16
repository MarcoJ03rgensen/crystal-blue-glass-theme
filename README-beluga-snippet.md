
## Beluga extensions

This repo includes optional MV3 extensions:

- [`beluga-newtab/`](beluga-newtab/): replaces New Tab with an animated beluga swimming inside a top blue band.
- [`beluga-overlay/`](beluga-overlay/): injects a small beluga overlay that swims across the top of normal webpages.

Note: Chrome does not support SVG files for extension icons declared in the manifest, so `beluga-overlay/` uses a GitHub Action to rasterize `whale.svg` into PNGs automatically.
