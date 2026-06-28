# AI Image Generation Prompts for PotolokBel Premium

This document contains professional prompts for generating high-quality interior and technical images for the PotolokBel website using AI tools like **Recraft.ai**, **Leonardo.ai**, or **Midjourney**.

## Recommended Tool: Recraft.ai
- **Model:** Recraft V3
- **Style:** `Realistic image` or `Interior`
- **Aspect Ratio:** `16:9` (Hero), `4:3` (Portfolio)
- **Detail level:** 100%

---

## 1. Hero Image (Main Page)
**Goal:** Establish luxury, space, and premium feel.
> **Prompt:**
> Ultra-realistic interior photography of a luxury spacious living room with a premium stretch ceiling. The ceiling is perfectly flat matte white with a black shadow gap (EuroKraab) around the perimeter. Warm ambient lighting from hidden sources. Minimalist modern furniture in graphite and ivory colors. Brass accents on lamps and decor. High ceilings, 8k resolution, architectural magazine style, soft natural light.

## 2. Technical Detail: Shadow Profile (Теневой профиль)
**Goal:** Show technical perfection and modern aesthetics.
> **Prompt:**
> Close-up architectural shot of a ceiling corner. Perfect junction between a white matte stretch ceiling and a dark graphite wall. Minimalist 6mm shadow gap (shadow profile) creating a floating effect. Sharp lines, flawless finish, premium materials, cinematic lighting, macro photography, industrial design.

## 3. Technical Detail: Light Lines (Световые линии)
**Goal:** Showcase modern lighting solutions.
> **Prompt:**
> Interior detail shot of a modern ceiling with integrated linear LED lights. Minimalist recessed light lines forming a geometric pattern. White satin ceiling texture, soft diffused glow, professional interior photography, architectural lighting design, neutral color palette (white, grey, brass).

## 4. Portfolio: Luxury Bedroom
**Goal:** Cozy and premium atmosphere for residential projects.
> **Prompt:**
> High-end bedroom interior, premium white satin stretch ceiling with a perimeter floating effect and warm LED backlight. Comfortable luxury bed, soft textures, ivory and beige tones, graphite accents. Elegant atmosphere, photo-realistic, soft focus background, shot on 35mm lens.

## 5. Portfolio: Modern Kitchen
**Goal:** Technology and cleanliness.
> **Prompt:**
> Modern minimalist kitchen interior with a premium glossy white stretch ceiling. Recessed spotlights, clean lines, high-end appliances, marble countertops, ivory and graphite color scheme. Sharp focus, professional architectural photography, 8k.

---

## Export Guidelines & Sizes

For a premium experience, especially with the scroll-zoom animations on the site, use the following export settings:

### 1. Hero & Background Images
*   **Target Size:** 3840 x 2160 px (4K)
*   **Why:** The site uses a **3x zoom animation** on the Hero section. A high-resolution image ensures the texture remains sharp as the user scrolls.
*   **Format:** Export as High-Quality JPG or PNG, then convert to **WebP** for the website.

### 2. Portfolio & General Interiors
*   **Target Size:** 2560 x 1440 px (2K) or 1920 x 1080 px (FHD)
*   **Why:** These images have a subtle 1.2x zoom. 2K resolution is the "sweet spot" for retina displays.

### 3. Technical Macro Shots (Details)
*   **Target Size:** 1920 x 1080 px or 1080 x 1080 px (if used in square cards)
*   **Why:** These are usually displayed in smaller containers, so standard HD is sufficient.

### 4. Technical Recommendation
*   **Compression:** Aim for a final WebP file size of **< 500KB** for Hero images and **< 200KB** for portfolio items to maintain fast loading speeds.
*   **Aspect Ratio:** Always stick to **16:9** for full-screen backgrounds.

---

## Advanced Technical Catalog (Premium Systems)
These prompts use specific architectural terminology to mimic top-tier ceiling installations and professional photography.

### 1. EuroKraab Shadow Gap (Теневой зазор)
**Goal:** Perfect shadow line between wall and ceiling.
> **Prompt:**
> Professional architectural photography of a EuroKraab shadow gap system. A perfect 6mm dark matte black shadow line separates a flawless white matte stretch ceiling from a graphite textured wall. Zero-gap finish, sharp 90-degree corners, architectural detail, minimalist aesthetic, cinematic soft lighting, shot on Sony A7R IV, 8k.

### 2. SLOTT Light Lines (Световые линии)
**Goal:** Built-in lighting without diffusers (clean look).
> **Prompt:**
> High-end interior detail of SLOTT 40 light lines integrated into a white satin stretch ceiling. Deep recessed black tracks with sharp edges, powerful architectural light, no visible diffusers, geometric minimalist design. Premium materials, flawless execution, high contrast, professional lighting design.

### 3. Magnetic Track Systems (Магнитные треки)
**Goal:** Versatile modern lighting in the ceiling.
> **Prompt:**
> Interior shot focusing on a magnetic track lighting system recessed into a white matte stretch ceiling. Slim black tracks with various spot lights and linear modules. Modern luxury apartment, premium ceiling finish, soft ambient light combined with directional spots, architectural photography style, 8k.

### 4. Floating Ceiling (Парящий потолок)
**Goal:** Halo effect around the room.
> **Prompt:**
> Wide shot of a luxury bedroom featuring a floating stretch ceiling system. Soft diffused LED halo light glowing from the perimeter gap. Elegant warm lighting, premium textures, ivory and brass accents, calm atmosphere, professional interior design photography.

---

## Hyper-Realism (Reference-Based)
Use these for maximum realism (Flux.1 / Midjourney style). These are tuned to look like real iPhone/Pro-camera photos of actual installations, not 3D renders.

### 1. Modern Track System (Kitchen/Living)
**Based on references:** Black magnetic tracks, sharp geometric lines, matte white ceiling.
> **Prompt:**
> A real smartphone photo of a high-end kitchen ceiling. White matte stretch ceiling with integrated black magnetic track lighting system forming a rectangular shape. Professional installation, sharp shadow gap profile around the perimeter. Natural daylight from a nearby window, realistic soft shadows, slightly grainy texture like a real photo, not a render. No CGI look, 8k.

### 2. Technical Detail: Recessed Lighting
**Based on references:** Slott lines, built-in spots, perfect corners.
> **Prompt:**
> Close-up wide-angle shot of a ceiling corner. Flawless white satin stretch ceiling with a recessed black SLOTT light line and built-in circular spots. Realistic reflections on the ceiling surface, slight natural imperfections in the wall texture. High contrast between black tracks and white ceiling, architectural detail, shot on iPhone 15 Pro, natural indoor lighting.

### 3. Decorative Lighting (Starry Sky / Backlight)
**Based on references:** Fiber optic "starry sky" or perimeter LED glow.
> **Prompt:**
> Real photo of a ceiling with a "starry sky" effect. Fiber optic lights integrated into a dark stretch ceiling, soft ambient glow from the perimeter. Real room environment, slightly blurred furniture at the bottom. Authentic evening atmosphere, long exposure photography feel, realistic light bloom.

---

## Technical Performance Settings
- **Flux.1:** Use `Guidance: 3.5`, `Steps: 30` for best results.
- **Midjourney:** Add `--style raw` to the end of your prompt to avoid the "AI art" look.
- **Image-to-Image:** If using a reference photo, set `Image Strength` to **0.3 - 0.5** to keep the structure but improve the quality.

---

## Troubleshooting: Avoiding Collages/Grids
If the AI generates 4-5 small photos in one image instead of one big shot:

1.  **Modify your prompt:** Add `single shot, one camera angle, wide view` to the beginning of the prompt.
2.  **Use the Negative Prompt:** This is the most effective way to stop grids.
3.  **Check Recraft Settings:** Ensure you haven't selected a "Set" or "Icon Pack" style by mistake. Stick to `Realistic Image`.

## Negative Prompt (Recommended)
Use these to avoid common AI artifacts and grids:
**Negative Prompt:** `collage, grid, split screen, multiple views, mosaic, set of images, frame, saturated, cartoon, low quality, messy wires, distorted, yellow light, watermark, text, grainy, blurry, unrealistic reflections`
