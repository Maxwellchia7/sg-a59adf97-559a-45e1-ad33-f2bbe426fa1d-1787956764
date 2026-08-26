# IMAGE UPLOAD INSTRUCTIONS

The external Chrono24 image URLs return HTTP 403 Forbidden when embedded in the website due to hotlink protection.

Since you have permission from the business partners to use these assets, please upload authorized copies to the locations below.

## REQUIRED IMAGES

Upload the following images to `public/products/` directory:

### Product 1: Rolex Submariner Date 116610LN
**Source:** https://img.chrono24.com/images/uhren/47341084-b7kqv3516nbhysbzz2vadno6-Zoom.jpg
**Upload to:** `public/products/rolex-submariner-116610ln-main.jpg`

**Gallery images (7 additional angles):**
- https://img.chrono24.com/images/uhren/47341084-kg65ypo754crgir35uda4urn-Square480.jpg → `public/products/rolex-submariner-116610ln-2.jpg`
- https://img.chrono24.com/images/uhren/47341084-uwlougd82zhzxfib77yjbz0c-Square480.jpg → `public/products/rolex-submariner-116610ln-3.jpg`
- https://img.chrono24.com/images/uhren/47341084-yvzolgzs0tedgsik5r07xk5t-Square480.jpg → `public/products/rolex-submariner-116610ln-4.jpg`
- https://img.chrono24.com/images/uhren/47341084-d8zozdab5asoiu2aabm1e0xe-Square480.jpg → `public/products/rolex-submariner-116610ln-5.jpg`
- https://img.chrono24.com/images/uhren/47341084-uvhktxqc4bkhnzghgmf8z89r-Square480.jpg → `public/products/rolex-submariner-116610ln-6.jpg`
- https://img.chrono24.com/images/uhren/47341084-b7kqv3516nbhysbzz2vadno6-Square480.jpg → `public/products/rolex-submariner-116610ln-7.jpg`
- https://img.chrono24.com/images/uhren/47341084-cekfmwhjyn3daoa1oei5pflg-Square480.jpg → `public/products/rolex-submariner-116610ln-8.jpg`

### Product 2: Patek Philippe Nautilus 5711
**Source:** https://img.chrono24.com/images/uhren/44959116-6arwmxlm3bq1zf90l7e8k6ip-Square480.jpg
**Upload to:** `public/products/patek-nautilus-5711.jpg`

### Product 3: Audemars Piguet Royal Oak 15400ST
**Source:** https://img.chrono24.com/images/uhren/47607576-l1xoy1ukrsvgfukoo4a6iglx-Square480.jpg
**Upload to:** `public/products/ap-royaloak-15400st.jpg`

### Product 4: Omega Speedmaster
**Source:** https://img.chrono24.com/images/uhren/47607629-0fu20aouamcziahqwl9jkanb-Square480.jpg
**Upload to:** `public/products/omega-speedmaster.jpg`

### Product 5: Cartier Santos
**Source:** https://img.chrono24.com/images/uhren/41329565-yjt5gcqx6jo6il5elsuc8f9l-Square480.jpg
**Upload to:** `public/products/cartier-santos.jpg`

### Product 6: Rolex Daytona
**Source:** https://img.chrono24.com/images/uhren/r82r2z1a8vsn-3xvfxvze8ivg4y35pwzqbzdn-Square480.jpg
**Upload to:** `public/products/rolex-daytona-panda.jpg`

### Product 7: Patek Philippe Aquanaut
**Source:** https://img.chrono24.com/images/uhren/zm2dslrjglcv-90ncw2r794ke1zo12vd31yu7-Square480.jpg
**Upload to:** `public/products/patek-aquanaut.jpg`

### Product 8: Omega Seamaster
**Source:** https://img.chrono24.com/images/uhren/47860918-zj36kqxix5uhk3r7z1znmj1j-Square480.jpg
**Upload to:** `public/products/omega-seamaster-300m.jpg`

### Product 9: IWC Portugieser
**Source:** https://img.chrono24.com/images/uhren/46270614-zk54euzce84ia49h2xpko5k6-Square480.jpg
**Upload to:** `public/products/iwc-portugieser.jpg`

### Product 10: Rolex GMT-Master II
**Source:** https://img.chrono24.com/images/uhren/46686035-tnqiahb2lroirs3jult5zwgy-Square480.jpg
**Upload to:** `public/products/rolex-gmt-master-ii.jpg`

### Logo
**Source:** https://maisoncalder.com/assets/logo.svg
**Upload to:** `public/logo.svg`

## UPLOAD PROCESS

1. Download each image from the source URL by opening it in your browser
2. Save it with the exact filename specified above
3. Upload to the `public/products/` directory in your project
4. The website will automatically display the uploaded images

## VERIFICATION

After uploading, check:
- Shop page (`/shop`) - all product cards should display images
- Product detail pages - main image and gallery should work
- Cart and checkout - product thumbnails should appear
- Navigation and footer - Maison Caldor logo should display

## TECHNICAL NOTES

- Local paths use `/products/filename.jpg` (Next.js serves from `public/` automatically)
- No external URL configuration needed for local images
- Images load instantly without 403 errors
- Full control over image optimization and caching