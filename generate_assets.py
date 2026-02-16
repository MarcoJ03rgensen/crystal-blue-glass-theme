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

def add_glass_noise(image, intensity=10, blur_radius=0):
    """Adds subtle noise to mimic frosted glass texture with optional blur."""
    width, height = image.size
    pixels = image.load()
    is_rgba = image.mode == 'RGBA'
    
    # Add noise
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
    
    # Apply blur for frosted glass effect
    if blur_radius > 0:
        image = image.filter(ImageFilter.GaussianBlur(blur_radius))
    
    return image

print("Generating Enhanced Glassmorphism assets...")

# 1. FRAME (Very Dark Blue Gradient + Noise)
# Deeper, richer blue - almost black at top
frame = create_gradient(1920, 200, (5, 10, 20, 255), (10, 20, 40, 255))
frame = add_glass_noise(frame, intensity=20, blur_radius=1.5)
frame.save("frame.png")
print("- frame.png created (darker gradient)")

# 2. TOOLBAR (Darker Semi-Transparent Blue with Heavy Blur)
# Much darker blue with more transparency and blur for true glassmorphism
toolbar = create_gradient(1920, 200, (15, 35, 65, 140), (25, 50, 85, 120), opacity=160)
toolbar = toolbar.filter(ImageFilter.GaussianBlur(3))  # Heavier blur for glass effect
toolbar = add_glass_noise(toolbar, intensity=12, blur_radius=0)
toolbar.save("toolbar.png")
print("- toolbar.png created (darker glass overlay)")

# 3. NTP BACKGROUND (Subtle Dark Blue Glow)
# Very dark base with minimal glow - sophisticated and moody
ntp = Image.new('RGB', (1920, 1080), (8, 12, 22))
draw = ImageDraw.Draw(ntp)

# Create a subtle "glow" in the center - much darker than before
center_x, center_y = 960, 540
max_radius = 1400
for r in range(max_radius, 0, -8):
    # Fade from dark to slightly lighter dark blue
    ratio = 1 - (r / max_radius)
    red = int(8 + ratio * (20))  # Max 28
    green = int(12 + ratio * (35))  # Max 47
    blue = int(22 + ratio * (60))  # Max 82
    draw.ellipse((center_x - r, center_y - r*0.7, center_x + r, center_y + r*0.7), fill=(red, green, blue))

# Add frosted glass texture
ntp = add_glass_noise(ntp, intensity=8, blur_radius=2)
ntp.save("ntp_background.png")
print("- ntp_background.png created (dark moody gradient)")

print("\nDone! Enhanced glassmorphism with darker blues.")
print("The theme now has a sophisticated, deep blue aesthetic.")
