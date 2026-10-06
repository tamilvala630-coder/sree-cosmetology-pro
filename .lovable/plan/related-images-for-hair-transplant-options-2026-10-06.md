# Related images for hair transplant options

## What will change
- Keep the current Hair Transplant page and its five cards unchanged in structure.
- Make each “Learn more” action open its own detail page: FUE, Hairline Restoration, Crown Restoration, Beard & Moustache Transplant, and Corrective Hair Transplant.
- Give every detail page a matching, clearly labelled illustrative image and medically responsible explanatory content.
- Add related-option links and the existing consultation/WhatsApp actions to each detail page.

## Technical details
- Add slugs and image references to the shared hair-transplant treatment data.
- Add one dynamic Hair Transplant detail route and reuse a focused detail-page component.
- Extend the treatment grid so this group links to `/hair-transplant/$slug` without changing other card destinations.
- Use generated images only as illustrations, never as patient results, and show the existing illustration disclaimer.
- Verify all five links and images on desktop and mobile, then check the latest build and browser errors.
