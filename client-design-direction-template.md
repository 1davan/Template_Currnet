# Client Design Direction - [CLIENT NAME]

**Project**: [Project Name]  
**Date**: [Date]  
**Chosen Variant**: [Variant # and Name]  
**Design System**: [Reference to design-template.json]

---

## 🎯 SELECTED VARIANT ANALYSIS

### **Chosen Variant Overview**
- **Variant Number**: [e.g., Variant 3]
- **Variant Name**: [e.g., "Professional Trust Builder"]
- **Hero Personality**: [Bold/Dramatic, Minimal/Clean, Playful/Creative, Professional/Trustworthy]
- **Overall Feel**: [Brief description of the chosen direction]

### **Key Visual Elements**
- **Layout Approach**: [e.g., Split layout, Centered, Asymmetrical grid]
- **Image Treatment**: [e.g., Full background, Side placement, Grid arrangement, Minimal]
- **Typography Style**: [e.g., Bold headers, Clean minimal, Creative hierarchy]
- **Color Dominance**: [e.g., Primary-heavy, Neutral-focused, Accent-driven]

---

## 🎨 COMPONENT PATTERN ANALYSIS

### **Component 1: [Component Name]**
```html
<!-- Paste the exact HTML structure here -->
```

**Pattern Analysis:**
- **Layout Structure**: [How it's organized]
- **Color Usage**: [Which colors and how]
- **Typography Hierarchy**: [Header sizes, body text treatment]
- **Spacing System**: [Margins, padding patterns]
- **Interactive Elements**: [Buttons, hover states, animations]

### **Component 2: [Component Name]**
```html
<!-- Paste the exact HTML structure here -->
```

**Pattern Analysis:**
- **Layout Structure**: [How it's organized]
- **Color Usage**: [Which colors and how]
- **Typography Hierarchy**: [Header sizes, body text treatment]
- **Spacing System**: [Margins, padding patterns]
- **Interactive Elements**: [Buttons, hover states, animations]

### **Component 3: [Component Name]**
```html
<!-- Paste the exact HTML structure here -->
```

**Pattern Analysis:**
- **Layout Structure**: [How it's organized]
- **Color Usage**: [Which colors and how]
- **Typography Hierarchy**: [Header sizes, body text treatment]
- **Spacing System**: [Margins, padding patterns]
- **Interactive Elements**: [Buttons, hover states, animations]

---

## 🎨 DESIGN SYSTEM EXTENSIONS

### **Semantic Token Extensions**
Based on the chosen variant, extend the base design system:

```json
{
  "client-specific": {
    "hero-bg": "var(--primary-500)",
    "card-elevation": "var(--shadow-card)",
    "accent-highlight": "var(--secondary-500)",
    "text-primary": "var(--neutral-900)",
    "text-secondary": "var(--neutral-600)"
  }
}
```

### **Component Variant Patterns**
- **Card Style**: [e.g., Floating, Elevated, Minimal, Creative borders]
- **Button Treatment**: [e.g., Primary style, Secondary style, Ghost style]
- **Image Integration**: [e.g., Full-width, Side placement, Grid, Minimal]
- **Section Spacing**: [e.g., Generous, Compact, Varied rhythm]

---

## 🎭 INTERACTION DESIGN SYSTEM

### **Personality-Based Interactions**
Based on the hero personality from colour-template.md:

**Hero Feel → Site Interactions:**
- **Chosen Personality**: [Bold/Dramatic, Minimal/Clean, Playful/Creative, Professional/Trustworthy]
- **Hover Effects**: [Specific hover patterns from the variant]
- **Animation Timing**: [e.g., 0.3s ease, 0.2s quick, 0.5s dramatic]
- **Movement Style**: [e.g., Subtle lift, Bold scale, Creative bounce]

### **Micro-Interaction Guidelines**
- **Button Hover**: [Specific hover state from variant]
- **Card Interactions**: [How cards respond to hover]
- **Image Effects**: [Any image hover or loading effects]
- **Form Elements**: [Input focus states, validation styling]

---

## 📐 LAYOUT & SPACING PRINCIPLES

### **Spacing System**
- **Section Padding**: [e.g., py-16, py-20, py-24]
- **Component Margins**: [e.g., mb-8, mb-12, mb-16]
- **Grid Gaps**: [e.g., gap-6, gap-8, gap-12]
- **Content Width**: [e.g., max-w-7xl, max-w-6xl, max-w-5xl]

### **Layout Patterns**
- **Container Approach**: [e.g., Centered, Full-width, Asymmetrical]
- **Grid Systems**: [e.g., 2-column, 3-column, Mixed layouts]
- **Content Flow**: [e.g., Top-to-bottom, Left-to-right, Creative flow]

---

## 🖼️ IMAGE INTEGRATION PATTERNS

### **Image Treatment Rules**
- **Hero Images**: [How hero images are handled]
- **Component Images**: [Image placement in components]
- **Image Sizing**: [Aspect ratios, sizing patterns]
- **Image Effects**: [Overlays, filters, hover effects]

### **Image Hierarchy**
- **Primary Images**: [Most important image placements]
- **Secondary Images**: [Supporting image usage]
- **Accent Images**: [Decorative or subtle image usage]

---

## 🎨 COLOR APPLICATION RULES

### **Primary Color Usage**
- **When to Use**: [Specific contexts for primary color]
- **Application**: [Backgrounds, text, borders, accents]
- **Variations**: [Light, base, dark usage]

### **Secondary Color Usage**
- **When to Use**: [Specific contexts for secondary color]
- **Application**: [CTAs, highlights, alerts]
- **Variations**: [Light, base, dark usage]

### **Neutral Color Usage**
- **Backgrounds**: [When to use light vs dark backgrounds]
- **Text Hierarchy**: [Primary, secondary, muted text usage]
- **Borders & Dividers**: [Subtle definition usage]

---

## ✅ IMPLEMENTATION GUIDELINES

### **DO's - Patterns to Repeat**
- [ ] Use [specific pattern] for [specific context]
- [ ] Apply [specific color] for [specific elements]
- [ ] Maintain [specific spacing] for [specific components]
- [ ] Follow [specific interaction] for [specific elements]

### **DON'Ts - Patterns to Avoid**
- [ ] Don't use [specific pattern] as it conflicts with chosen direction
- [ ] Avoid [specific color combination] as it breaks the hierarchy
- [ ] Don't apply [specific spacing] as it disrupts the rhythm
- [ ] Avoid [specific interaction] as it doesn't match the personality

### **Scaling Rules for Other Sections**
- **Hero Sections**: [How to adapt the chosen hero pattern]
- **Feature Sections**: [How to create feature sections in this style]
- **Process Sections**: [How to build process sections]
- **Testimonial Sections**: [How to style testimonials]
- **Contact Sections**: [How to handle contact forms]

---

## 🔄 ADAPTATION FRAMEWORK

### **Section Type Adaptations**
- **PAS Sections**: [How to adapt the chosen patterns for Problem-Agitate-Solution]
- **Feature Sections**: [How to showcase features in this style]
- **Process Sections**: [How to display processes]
- **Social Proof**: [How to integrate testimonials and logos]
- **CTA Sections**: [How to create compelling calls-to-action]

### **Content Type Adaptations**
- **Text-Heavy Sections**: [How to handle content-heavy areas]
- **Image-Heavy Sections**: [How to balance multiple images]
- **Mixed Content**: [How to combine text, images, and interactive elements]
- **Form Sections**: [How to style forms and inputs]

---

## 📱 RESPONSIVE CONSIDERATIONS

### **Mobile Adaptations**
- **Layout Changes**: [How layouts adapt on mobile]
- **Typography Scaling**: [How text sizes adjust]
- **Image Handling**: [How images respond to smaller screens]
- **Interaction Changes**: [How interactions adapt for touch]

### **Tablet Adaptations**
- **Grid Adjustments**: [How grids change on tablets]
- **Spacing Modifications**: [How spacing adapts]
- **Component Sizing**: [How components scale]

---

## 🎯 QUALITY CHECKLIST

### **Design Consistency**
- [ ] All sections follow the chosen variant's visual language
- [ ] Color usage matches the established patterns
- [ ] Typography hierarchy is consistent throughout
- [ ] Spacing system is applied uniformly
- [ ] Interactive elements follow the personality guidelines

### **Technical Standards**
- [ ] Follows Rule 10 (Semantic Tokens) for color usage
- [ ] Follows Rule 07 (Modern Cards) for card patterns
- [ ] Follows Rule 05 (Visual Variety) while maintaining consistency
- [ ] Follows Rule 08 (Creative Breakthrough) energy
- [ ] Maintains accessibility standards (Rule 03)

---

## 📝 NOTES & ITERATIONS

### **Client Feedback**
- [Any client feedback or requested changes]
- [Iterations made based on feedback]
- [Final approved direction]

### **Design Decisions**
- [Any design decisions made during implementation]
- [Rationale for specific choices]
- [Alternative approaches considered]

---

## 🔗 REFERENCE FILES

- **Color System**: `colour-template.md` (customized for client)
- **Design Tokens**: `design-template.json` (updated with client colors)
- **Chosen Variant HTML**: [Link to or reference the chosen variant file]
- **Cursor Rules**: `.cursor-rules/` (for quality standards)

---

**Last Updated**: [Date]  
**Next Review**: [Date]  
**Status**: [Active/Complete/In Review]
