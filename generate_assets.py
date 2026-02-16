from PIL import Image, ImageDraw, ImageFilter
import random

def create_gradient(width, height, color1, color2, opacity=255):
    """Creates a vertical gradient image."""
    base = Image.new('RGBA', (width, height), color1)
    top = Image.new('RGBA', (width, height), color2)
    mask = Image.new('L', (width, height))
    mask_data = []
    for y in range(height):
        for x in range(width):
            mask_data.append(int(255 * (y / height)))
    mask.putdata(mask_data)
    base.paste(top, (0, 0), mask)
    
    # Apply global opacity if needed
    if opacity < 255:
        alpha = base.split()[3]
        alpha = alpha.point(lambda p: p * opacity / 255)
        base.putalpha(alpha)
        
    return base

def add_glass_noise(image, intensity=10):
    """Adds subtle noise to mimic frosted glass texture."""
    width, height = image.size
    pixels = image.load()
    
    # Check if image is RGB or RGBA
    is_rgba = image.mode == 'RGBA'
    
    for y in range(height):
        for x in range(width):
            noise = random.randint(-intensity, intensity)
            
            if is_rgba:
                r, g, b, a = pixels[x, y]
                pixels[x, y] = (
                    max(0, min(255, r + noise)),
                    max(0, min(255, g + noise)),
                    max(0, min(255, b + noise)),
                    a
                )
            else:
                r, g, b = pixels[x, y]
                pixels[x, y] = (
                    max(0, min(255, r + noise)),
                    max(0, min(255, g + noise)),
                    max(0, min(255, b + noise))
                )
    return image

print("Generating Glassmorphism assets...")

# 1. FRAME (Dark Deep Blue Gradient + Noise)
# This is the window border.
frame = create_gradient(1920, 200, (10, 25, 47, 255), (23, 37, 84, 255))
frame = add_glass_noise(frame, intensity=15)
frame.save("frame.png")
print("- frame.png created")

# 2. TOOLBAR (Lighter, Semi-Transparent Blue)
# This overlays the frame for the active tab/search bar.
toolbar = create_gradient(1920, 200, (59, 130, 246, 180), (147, 197, 253, 150), opacity=200)
toolbar = toolbar.filter(ImageFilter.GaussianBlur(1)) # Slight blur for softness
toolbar.save("toolbar.png")
print("- toolbar.png created")

# 3. NTP BACKGROUND (Complex Radial Glow)
# The wallpaper for the New Tab Page.
ntp = Image.new('RGB', (1920, 1080), (15, 23, 42))
draw = ImageDraw.Draw(ntp)

# Create a "glow" in the center
center_x, center_y = 960, 540
max_radius = 1300
for r in range(max_radius, 0, -5):
    # Fade from dark blue to lighter cyan/blue
    ratio = 1 - (r / max_radius)
    red = int(15 + ratio * (50))
    green = int(23 + ratio * (100))
    blue = int(42 + ratio * (180))
    draw.ellipse((center_x - r, center_y - r*0.8, center_x + r, center_y + r*0.8), fill=(red, green, blue))

# Add final glass texture noise
ntp = add_glass_noise(ntp, intensity=5)
ntp.save("ntp_background.png")
print("- ntp_background.png created")

print("Done! You can now load the theme folder in Chrome.")
