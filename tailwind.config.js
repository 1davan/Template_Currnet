import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      fontFamily: {
        heading: ['Poppins', ...defaultTheme.fontFamily.sans],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // 2025 Semantic Design System - Following Rule 10
        primary: 'hsl(var(--primary) / <alpha-value>)',
        'primary-foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
        secondary: 'hsl(var(--secondary) / <alpha-value>)',
        'secondary-foreground': 'hsl(var(--secondary-foreground) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        'muted-foreground': 'hsl(var(--muted-foreground) / <alpha-value>)',
        card: 'hsl(var(--card) / <alpha-value>)',
        'card-foreground': 'hsl(var(--card-foreground) / <alpha-value>)',
        popover: 'hsl(var(--popover) / <alpha-value>)',
        'popover-foreground': 'hsl(var(--popover-foreground) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        success: 'hsl(var(--success) / <alpha-value>)',
        'success-foreground': 'hsl(var(--success-foreground) / <alpha-value>)',
        warning: 'hsl(var(--warning) / <alpha-value>)',
        'warning-foreground': 'hsl(var(--warning-foreground) / <alpha-value>)',
        destructive: 'hsl(var(--destructive) / <alpha-value>)',
        'destructive-foreground': 'hsl(var(--destructive-foreground) / <alpha-value>)',
        accent: 'hsl(var(--accent) / <alpha-value>)',
        'accent-foreground': 'hsl(var(--accent-foreground) / <alpha-value>)',
        
        // Creative Color System
        'creative-primary': 'hsl(var(--creative-primary) / <alpha-value>)',
        'creative-secondary': 'hsl(var(--creative-secondary) / <alpha-value>)',
        'creative-accent': 'hsl(var(--creative-accent) / <alpha-value>)',
        'creative-highlight': 'hsl(var(--creative-highlight) / <alpha-value>)',
        'creative-neutral': 'hsl(var(--creative-neutral) / <alpha-value>)',
      },
      boxShadow: {
        'slate-blue': '0 4px 15px -5px rgba(61, 90, 128, 0.4)',
        'slate-blue-hover': '0 7px 20px -5px rgba(61, 90, 128, 0.6)',
        'core-red': '0 4px 15px -5px rgba(158, 36, 16, 0.4)',
        'core-red-hover': '0 7px 20px -5px rgba(158, 36, 16, 0.5)',
        'card': '0 10px 30px rgba(0,0,0,0.08)',
        'elevation-1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        'elevation-2': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        'elevation-3': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        'elevation-4': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        'dramatic': '0 25px 50px rgba(0,0,0,0.4)',
        'floating': '0 20px 40px rgba(0,0,0,0.3)',
        'professional': '0 4px 12px rgba(0,0,0,0.1)',
        'trust': '0 2px 8px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}