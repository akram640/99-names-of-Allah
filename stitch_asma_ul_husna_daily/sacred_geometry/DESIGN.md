---
name: Sacred Geometry
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#404944'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#707974'
  outline-variant: '#bfc9c3'
  surface-tint: '#2b6954'
  primary: '#003527'
  on-primary: '#ffffff'
  primary-container: '#064e3b'
  on-primary-container: '#80bea6'
  inverse-primary: '#95d3ba'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#003431'
  on-tertiary: '#ffffff'
  tertiary-container: '#004d49'
  on-tertiary-container: '#7abdb7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f0d6'
  primary-fixed-dim: '#95d3ba'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#0b513d'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#abefe8'
  tertiary-fixed-dim: '#8fd3cc'
  on-tertiary-fixed: '#00201e'
  on-tertiary-fixed-variant: '#00504b'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  arabic-display:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.6'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 64px
---

## Brand & Style
This design system is crafted to evoke a sense of spiritual tranquility, reverence, and intellectual clarity. It is designed for a modern audience seeking a connection to traditional Islamic knowledge through a clean, distraction-free interface.

The aesthetic blends **Minimalism** with **Cultural Heritage**. It prioritizes generous whitespace—akin to the margins of a well-preserved manuscript—allowing the typography and sacred names to breathe. Subtle geometric motifs, inspired by Islamic tiling and biomorphic patterns (arabesque), are used sparingly as decorative backgrounds or dividers to ground the experience in a rich historical context without overwhelming the user. The emotional response should be one of peace, focus, and timelessness.

## Colors
The palette is rooted in classical Islamic art. The primary **Deep Emerald Green** symbolizes life and paradise, used for main structural elements and primary actions. The background utilizes a **Soft Cream Parchment**, which reduces eye strain and provides a warmer, more organic feel than pure white.

**Refined Gold** is reserved for accents, highlights, and indicating excellence or completion. High contrast is maintained by using a near-black green for primary text, ensuring maximum legibility for both English transliterations and Arabic script.

## Typography
Typography is the centerpiece of this design system. We use a dual-font approach:
- **Playfair Display**: Used for headlines and Arabic script. Its high-contrast serifs and elegant curves reflect the calligraphic tradition of the Quran.
- **Inter**: Used for transliterations, English translations, and UI labels. It provides a clean, functional counterpoint to the decorative serif, ensuring that educational content is easy to digest.

Special attention is paid to the `arabic-display` role, which requires significant line height to accommodate diacritics without clipping.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to mimic the centered, focused nature of a book. Content is contained within a 1200px max-width, creating generous gutters that act as "white space" to promote focus. 

On mobile, the margins tighten to 16px to maximize the reading area. A vertical 8px rhythm is applied across all components to ensure a harmonious flow. Sections are separated by large gaps (`section-gap`) to prevent the interface from feeling cluttered, reinforcing the serene brand personality.

## Elevation & Depth
To maintain a minimalist aesthetic while providing a sense of tactility, the design system utilizes **Tonal Layers** and **Ambient Shadows**. 

Surfaces do not "float" high above the background; instead, they appear as slightly raised parchment cards. Shadows are extremely soft, using a hint of the primary emerald color in the shadow's tint (`rgba(6, 78, 59, 0.05)`) rather than pure grey. This creates a more integrated, organic depth. Subtle inner shadows may be used on input fields to suggest they are "recessed" into the parchment surface.

## Shapes
The shape language is defined by **Softened Geometry**. We avoid sharp, aggressive corners in favor of a `0.5rem` (8px) base radius. This level of roundedness feels approachable and organic, echoing the natural curves found in Islamic calligraphy. Large containers, such as name cards, use a more pronounced `1.5rem` (24px) radius to emphasize their importance and provide a friendly, safe visual environment.

## Components
### Buttons
- **Primary**: Solid Deep Emerald Green with white or cream text. Use 8px rounded corners.
- **Secondary**: Outlined in Gold with a 1px border.
- **Icon Buttons**: Use a soft cream circle with an Emerald icon for navigation.

### Cards
Cards should have a very subtle 1px border in a lighter shade of Emerald or Gold (`#D4AF37` at 20% opacity). Use the `rounded-xl` setting. Backgrounds should be slightly brighter than the main parchment color to create a "lifted" effect.

### Name Cards (Specialized)
The central component for displaying the 99 Names. These feature the Arabic name in `arabic-display` size, centered, with the Gold accent used for a decorative geometric border or a small "completion" star icon.

### Input Fields & Controls
Text inputs use a light cream background with a 1px Emerald border that thickens on focus. Checkboxes and radios use the Gold accent for the "checked" state to signify a "sacred" or "completed" action.

### Lists
Lists of names or attributes should use a "dot" separator inspired by Islamic manuscript ornaments (small gold diamonds or circles) rather than standard bullets.