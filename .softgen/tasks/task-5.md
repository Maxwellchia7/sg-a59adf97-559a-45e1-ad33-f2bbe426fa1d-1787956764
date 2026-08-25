---
title: Shopping Cart & Checkout
status: todo
priority: high
type: feature
tags: [cart, checkout]
created_by: agent
created_at: 2026-08-25T14:56:18Z
position: 5
---

## Notes
Cart functionality: view items, update quantities, remove items, see totals, proceed to checkout form (contact info, shipping, payment placeholder).

## Checklist
- [ ] Create cart context: add/remove/update items, persist to localStorage
- [ ] Create cart.tsx page: cart items list, quantity controls, subtotal/shipping/total
- [ ] Create CartItem component: product thumbnail, name, price, qty controls, remove button
- [ ] Create checkout.tsx: multi-step form (contact, shipping address, payment placeholder)
- [ ] Add cart dropdown in navigation: mini cart preview
- [ ] Implement WhatsApp checkout option: "Complete Order via WhatsApp" button

## Acceptance
- Cart persists across page reloads
- Quantity changes update totals correctly
- Checkout form validates required fields, WhatsApp button opens pre-filled message