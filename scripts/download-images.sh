#!/bin/bash

# Create directories
mkdir -p public/images/{hero,services,testimonials,gallery}

# Download hero image
curl -o public/images/hero/hero-bg.jpg "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80"

# Download service images
curl -o public/images/services/service1.jpg "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80"
curl -o public/images/services/service2.jpg "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80"
curl -o public/images/services/service3.jpg "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80"

# Download testimonial images
curl -o public/images/testimonials/client1.jpg "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
curl -o public/images/testimonials/client2.jpg "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
curl -o public/images/testimonials/client3.jpg "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80"

# Download gallery images
curl -o public/images/gallery/video1.jpg "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80"
curl -o public/images/gallery/video2.jpg "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80"
curl -o public/images/gallery/video3.jpg "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80"
curl -o public/images/gallery/video4.jpg "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80"

# Download signature experience image
curl -o public/images/signature-experience.jpg "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&q=80"

echo "Images downloaded successfully!" 