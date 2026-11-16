# Aslam Studioz

Responsive photography portfolio with a protected studio dashboard, durable albums and photo storage, and booking enquiries.

## Owner

The dashboard at `/admin` uses platform-managed ChatGPT sign-in and authorizes only `aslamstudioz01@gmail.com` on every protected request. No password is stored in source. Public gallery and booking access do not require sign-in when Site access is public.

## Studio workflow

Create an album, select its category, then upload JPG, PNG or WebP photos. The browser resizes images to a maximum of 2200 pixels and encodes WebP before uploading. Up to 12 photos per request, 8 MB per processed photo. Album details and cover can be changed; deleting is permanent. Upload only photographs approved for public display. The first published album replaces the clearly marked stock layout examples.

Set the WhatsApp number in the dashboard using the country code. Until configured, booking enquiries are saved in the dashboard without displaying a WhatsApp link. Email notifications are not implemented; the owner checks the dashboard. Booking requests require a manual availability check and confirmation.

## Storage

D1 (`DB`) stores album metadata, photo records, settings and enquiries. R2 (`BUCKET`) stores photos. Database schema lives in `db/schema.ts`; schema migrations live in `drizzle/`. No cloud records are stored only in localStorage. Hosted migrations apply during publication. Local preview records are separate.

## Development

Use the provided Sites install and build helpers. `npm run db:generate` generates new schema migrations. `node node_modules/typescript/bin/tsc --noEmit` checks types. The hosting manifest records the existing Site identity; reuse it on future edits.

## Remaining personalisation

Replace stock sample photographs with the owner's approved photography. Configure the booking WhatsApp number in the dashboard. Stock layout samples downloaded from Unsplash (photo IDs 1519741497674-611481863552, 1511285560929-80b456fea0bc, 1524504388940-b1c1722653e1). No fabricated reviews or client statistics are used. This project does not purchase a domain or activate a paid third-party service. Platform usage and availability remain subject to the hosting account's limits.

## Design edition 02

Uses the supplied horizontal logo for desktop navigation/footer, the camera symbol on mobile and the hero stamp, and the full brand lockup in the about section. Original logo JPGs are preserved and framed with CSS. Slate/silver colour palette, editorial hero, light gallery, scroll reveals, slow image movement, category marquee, hover transitions, sticky navigation, reading progress, and animated viewer are included. Reduced-motion preferences disable animation. The photo viewer traps keyboard focus and restores focus to the opening album.

This design revision is saved without redeploying the private Site. GitHub migration remains pending; the existing server-backed upload and booking APIs are not directly deployable to static GitHub Pages.

## Reference-led black/red redesign

Rebuilt the presentation around the supplied dark photography reference: bold typography, Sony Alpha 7 V hero, compact six-tile sample gallery, three quote-based service cards, brand/about section and enquiry form. Uses the newly supplied transparent PNG logos in `public/brand/`. No package prices, client counts, awards or testimonials have been invented. Sample photographs remain clearly marked until approved original work is supplied.

The camera source is the product image surfaced for Sony's ILCE-7M5 page, downloaded from https://cdn.shopify.com/s/files/1/0397/7166/8635/files/CX76800_VX8051_front-Mid_15bd966d-f7b2-4f81-8d93-cdc4ecc0daf3.png?v=1769664296 . The built-in image tool removed its white background for the hero; prompt: 'Remove only the plain white background; preserve exact camera, lens, lettering, controls, geometry, texture, angle and lighting; real transparent background, no added text or objects.' Original remains in `public/images/sony-a7v.png`; the extracted project asset is `public/images/sony-a7v-cutout.png`. Additional sample photographs are from Unsplash IDs 1523580494863-6f3031224c94 and 1492684223066-81342ee5ff30.

User review is required before GitHub upload or public publication. Private review only.

## Camera lighting refinement

Replaced the floating cutout treatment with a grounded studio photograph on near-black: soft red light from the right, neutral detail light, contact shadow and restrained tabletop reflection. The camera stage now fades in once without bobbing or rotation. The built-in image tool edits the existing camera reference; the original product image and cutout remain intact. New project asset: `public/images/sony-a7v-red-studio.png`. Prompt intent: preserve the exact product and markings, relight with subtle red rim light, rest on a dark surface, natural contact shadow, minimal reflection, black edges, no extra objects or text.
