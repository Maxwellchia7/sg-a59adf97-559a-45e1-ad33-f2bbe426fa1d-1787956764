---
title: Product Detail Pages
status: in_progress
priority: high
type: feature
tags: [products, detail]
created_by: agent
created_at: 2026-08-25T14:56:18Z
position: 4
---

## Notes
Individual product pages: large image gallery, specifications table, detailed description, quantity selector, add to cart, related products carousel.

## Checklist
- [ ] Create products/[id].tsx: dynamic route for product pages
- [ ] Create ImageGallery: main image + thumbnail strip, click to zoom
- [ ] Create ProductInfo: name, price, description, specs table (brand, model, case size, movement, material, water resistance)
- [ ] Add quantity selector and "Add to Cart" / "Buy Now" buttons
- [ ] Create RelatedProducts: horizontal scroll of 4-6 similar watches
- [ ] Add shipping/returns info accordion

## Acceptance
- Product page loads with correct data from URL parameter
- Image gallery shows multiple angles, thumbnails switch main image
- Add to cart updates cart count, related products clickable