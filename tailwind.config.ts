
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				luxury: {
					50: '#f9f7f2',
					100: '#f2ede0',
					200: '#e7dbc2',
					300: '#d9c39d',
					400: '#caa976',
					500: '#bf955a',
					600: '#ab7d4b',
					700: '#8e623f',
					800: '#755138',
					900: '#624433',
					950: '#352218',
				},
				forest: {
					50: '#f0f7f0',
					100: '#dceadd',
					200: '#bdd5bf',
					300: '#94b898',
					400: '#729a77',
					500: '#527a5a',
					600: '#3f6246',
					700: '#345039',
					800: '#2b4030',
					900: '#25352a',
					950: '#121d15',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
				display: ['Cormorant Garamond', 'serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			keyframes: {
				"accordion-down": {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				"accordion-up": {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(20px)' }
				},
				'slide-in': {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'zoom-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(203, 169, 118, 0.3), 0 0 10px rgba(203, 169, 118, 0.2)', 
						opacity: '0.8' 
					},
					'50%': { 
						boxShadow: '0 0 20px rgba(203, 169, 118, 0.5), 0 0 30px rgba(203, 169, 118, 0.3)', 
						opacity: '1' 
					}
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'fade-out': 'fade-out 0.7s ease-out forwards',
				'slide-in': 'slide-in 0.8s ease-out forwards',
				'zoom-in': 'zoom-in 0.7s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'shimmer': 'shimmer 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite'
			},
			backgroundImage: {
				'gold-gradient': 'linear-gradient(135deg, #d0b371 0%, #f2e2c0 50%, #d0b371 100%)',
				'luxury-gradient': 'linear-gradient(to right, #d0b371, #f2e2c0, #d0b371)',
				'dark-gradient': 'linear-gradient(to bottom, rgba(21, 21, 21, 0), rgba(21, 21, 21, 0.7))',
				'texture': "url('/lovable-uploads/2e0d9d70-9600-4f1e-ad1f-00b255b9bd6c.png')",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
