# Clasico Barbershop Website

A modern, responsive barbershop website built with Next.js, TypeScript, and Tailwind CSS. Features a beautiful design with smooth animations, booking functionality, and a complete service showcase.

## 🚀 Features

- **Modern Design**: Clean, professional design with luxury aesthetics
- **Responsive Layout**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Service Packages**: Three-tier pricing system (Silver, Gold, Platinum)
- **Gallery Section**: Showcase of barbershop work and environment
- **Customer Testimonials**: Social proof with star ratings
- **Booking System**: Calendly integration for easy appointment booking
- **Contact Information**: Complete business details and hours
- **SEO Optimized**: Proper meta tags and structured content

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Booking**: Calendly Integration

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd NEW-CLASICO-BARBERSHOP
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── Services.tsx    # Services and pricing
│       ├── Gallery.tsx     # Image gallery
│       ├── Testimonials.tsx # Customer reviews
│       ├── Booking.tsx     # Booking form
│       └── Footer.tsx      # Footer
public/
├── images/
│   ├── logo.png           # Main logo
│   ├── logo-white.png     # White logo for footer
│   ├── hero-bg.jpg        # Hero background
│   ├── gallery/           # Gallery images
│   ├── packages/          # Service package icons
│   └── testimonials/      # Customer photos
```

## 🎨 Design Features

### Color Scheme
- **Primary Gold**: #D4AF37 (luxury accent)
- **Secondary**: #F5F5F5 (light background)
- **Text**: Various grays for hierarchy

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Inter (body text)

### Animations
- Smooth scroll animations
- Hover effects on interactive elements
- Staggered animations for lists
- Fade-in animations on scroll

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Next.js Config
- Image optimization enabled
- SWC minification
- Custom webpack configuration
- TypeScript support

### Tailwind Config
- Custom color palette
- Custom font families
- Responsive utilities

## 📄 Pages & Sections

### Home Page
- **Hero Section**: Eye-catching banner with CTA
- **Services**: Three pricing packages with features
- **Gallery**: Image showcase with hover effects
- **Testimonials**: Customer reviews with ratings
- **Booking**: Appointment booking form
- **Footer**: Contact info and links

### Navigation
- Fixed navigation bar
- Mobile hamburger menu
- Smooth scroll to sections
- Dynamic background on scroll

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🔄 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  gold: '#D4AF37',
  accent: '#D4AF37',
  secondary: '#F5F5F5',
}
```

### Content
Update content in respective component files:
- Services pricing in `Services.tsx`
- Testimonials in `Testimonials.tsx`
- Contact info in `Footer.tsx`

### Images
Replace placeholder images in `public/images/` with actual photos:
- Logo files
- Hero background
- Gallery images
- Customer photos

## 📞 Contact & Support

For questions or support, please contact:
- Email: info@clasicobarbershop.com
- Phone: (555) 123-4567

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Built with ❤️ for Clasico Barbershop** 