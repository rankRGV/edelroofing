# Edel: remove aggregateRating from the Duda header schema (2026-10-18)

Why: Google's review snippet rules say a business that shows its own rating is
"ineligible for star review feature", and "Don't aggregate reviews or ratings
from other websites." The 4.8 / 252 block earns no stars and breaks the rule.
The visible "257 reviews" text on the page is fine. Leave it alone.

## Steps in Duda
1. Open edelroofing.com in the Duda editor.
2. Click the **header** and open the HTML widget that holds the schema (the
   `<script type="application/ld+json">` with `"@type": "RoofingContractor"`).
   It is in the header widget, not Head HTML.
3. Find these 7 lines and delete them, including the comma on the last line:

```
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "252",
    "bestRating": "5",
    "worstRating": "1"
  },
```

4. The line before should still end with `},` (the contactPoint block), and the
   next line should be `"sameAs": [`. Nothing else changes.
5. Save, then click **Republish**.

## Check
Run the live page through https://validator.schema.org/ (or ask Claude to recheck).
There should be no aggregateRating and no JSON errors.
