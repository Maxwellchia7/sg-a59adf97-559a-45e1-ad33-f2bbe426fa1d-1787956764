---
title: Product Catalog & Filtering
status: todo
priority: high
type: feature
tags: [products, catalog]
created_by: agent
created_at: 2026-08-25T14:56:18Z
position: 3
---

## Notes
Main shop page: product grid with sidebar filters (brand, price range, category), sort options, search integration. 20-30 initial products across brands.

## Checklist
- [ ] Create shop.tsx page: layout with sidebar + grid
- [ ] Create ProductCard: image, name, brand, price, "Add to Cart", hover lift effect
- [ ] Create FilterSidebar: brand checkboxes, price range slider, category select
- [ ] Implement filter logic: client-side filtering state
- [ ] Add sort dropdown: price low-high, high-low, newest
- [ ] Create product data: 20-30 watches (Rolex Submariner, Patek Philippe Nautilus, AP Royal Oak, Omega Speedmaster, Cartier Santos variants)

## Acceptance
- Shop page shows full product grid, filters work (narrow results)
- Sort changes product order correctly
- Product cards show correct info, cart buttons functional