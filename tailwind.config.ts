// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
	// Configure dark mode strategy if needed
	darkMode: ["class"],
	// Specify content files for Tailwind to scan
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "", // Optional: add a prefix if needed
	theme: {
		container: {
			center: true, // Center containers by default
			padding: '2rem', // Default padding for containers
			screens: {
				// Define screen sizes, 2xl for larger displays
				'2xl': '1400px'
			}
		},
		extend: {
			// Map custom CSS variables to Tailwind classes
			colors: {
				// Core Neutrals & Borders
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))', // Standard text on light backgrounds

				// Primary Brand Color (Azul Oscuro) and its foreground (White)
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))' // White text
				},

				// Accent Brand Color (Celeste Vibrante) and its foreground (White/Dark)
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))', // White text on accent
					'dark-foreground': 'hsl(var(--accent-dark-foreground))' // Dark text on lighter accent variants
				},

				// Secondary Neutrals (Grays)
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))' // Dark gray text
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))', // Light gray background
					foreground: 'hsl(var(--muted-foreground))' // Medium gray text
				},

				// Status/Other Colors
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},

				// Custom Surface Colors (Aligned with Brand Color Blocks)
				'surface-dark': 'hsl(var(--surface-dark))', // Should be primary color
				'surface-medium': 'hsl(var(--surface-medium))',
				'surface-light': 'hsl(var(--surface-light))', // Near white

				// Highlight Color (Amarillo)
				'highlight': 'hsl(var(--highlight))',

				// Sidebar Colors (Keep if relevant to your project)
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			// Border radius mapping
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			// Keyframe definitions (mirroring CSS for Tailwind animation utilities)
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				// Fade-in with subtle Y-translate (Adjust timing/translate here or in CSS class)
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				// Fade-in with scale and Y-translate
				'fade-in-scale': {
					'0%': { opacity: '0', transform: 'scale(0.95) translateY(20px)' },
					'100%': { opacity: '1', transform: 'scale(1) translateY(0)' }
				},
				// Slide-up from further below
				'slide-up': {
					'0%': { transform: 'translateY(100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
                 // Add other keyframes defined in index.css if you want to use them as Tailwind animation utilities
                 'draw-line': { from: { strokeDashoffset: '1000' }, to: { strokeDashoffset: '0' } },
                 'draw-line-delayed': { from: { strokeDashoffset: '1000' }, to: { strokeDashoffset: '0' } },
                 'draw-connection': { from: { strokeDashoffset: '1000' }, to: { strokeDashoffset: '0' } },
                 'build-up': { '0%': { opacity: '0', transform: 'translateY(20px) scale(0.8)' }, '100%': { opacity: '1', transform: 'translateY(0) scale(1)' } },
                 'counter-up': { '0%': { opacity: '0', transform: 'translateY(10px) scale(0.9)' }, '100%': { opacity: '1', transform: 'translateY(0) scale(1)' } },
                 'float': { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
                 'pulse-slow': { '0%, 100%': { opacity: '0.8', transform: 'scale(1)' }, '50%': { opacity: '1', transform: 'scale(1.05)' } },
                 'pulse': { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.5' } },
                 'bounce-slow': { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
			},
			// Animation utility classes (mapping keyframes to durations/easings)
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Example animations - use these classes in your components
				'fade-in': 'fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'fade-in-scale': 'fade-in-scale 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                 // Add other animations defined in index.css
                 'draw-line': 'draw-line 2s ease-out forwards',
                 'draw-line-delayed': 'draw-line-delayed 2s ease-out forwards',
                 'draw-connection': 'draw-connection 1s ease-out forwards',
                 'build-up': 'build-up 0.8s ease-out forwards',
                 'counter-up': 'counter-up 0.8s ease-out forwards',
                 'float': 'float 6s ease-in-out infinite',
                 'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
                 'pulse': 'pulse 1.5s ease-in-out infinite',
                 'bounce-slow': 'bounce-slow 3s infinite',
			},
			// Font Family configuration
			fontFamily: {
				// Define a custom CSS variable --font-sans that uses Montserrat
				'sans': ['Montserrat', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
			}
		}
	},
	// Include necessary plugins
	plugins: [require("tailwindcss-animate")],
} satisfies Config;