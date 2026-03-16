# Google Analytics & GTM Configuration

## Overview

The site uses both Google Tag Manager (GTM) and Google Analytics 4 (GA4) for tracking.

## Identifiers

| Service           | ID                        |
| ----------------- | ------------------------- |
| GA4 Measurement   | `G-QMX4S3JFBC`            |
| GTM Container     | `GTM-TZQ8CMJ6`            |
| AdSense Publisher | `ca-pub-3451020767524769` |

## Implementation

All scripts are loaded in `src/app/[locale]/layout.js`:

- GTM script (afterInteractive strategy)
- GA4 gtag.js + config
- AdSense script

## Page View Tracking

`src/components/AnalyticsTracker.js` automatically tracks page views on every SPA route change using `usePathname()` and `useSearchParams()`.

## Custom Events

Defined in `src/lib/analytics.js` and used across the app:

| Event             | Location          | Parameters                                       |
| ----------------- | ----------------- | ------------------------------------------------ |
| `blog_post_view`  | BlogPostClient.js | `post_title`, `post_slug`, `post_tags`, `locale` |
| `blog_post_click` | PostCard.js       | `post_title`, `post_slug`                        |
| `blog_filter`     | BlogClient.js     | `tag`                                            |

## Adding New Events

```js
import { event } from "@/lib/analytics";

// Track a custom event
event("event_name", {
  param1: "value1",
  param2: "value2",
});
```

## Viewing Data

1. Go to [Google Analytics](https://analytics.google.com)
2. Select the property for `G-QMX4S3JFBC`
3. **Realtime**: Reports > Realtime (verify tracking is working)
4. **Events**: Reports > Engagement > Events
5. **Pages**: Reports > Engagement > Pages and screens

## GTM Configuration

GTM container `GTM-TZQ8CMJ6` can be configured at [tagmanager.google.com](https://tagmanager.google.com). Use it for:

- Adding marketing tags without code changes
- Setting up conversion tracking
- Managing third-party scripts

## Troubleshooting

- **No data in GA4**: Check browser console for gtag errors. Ad blockers will block analytics.
- **Events not firing**: Verify `window.gtag` exists in browser console
- **Double counting**: Ensure GA4 config has `send_page_view: false` if using manual page tracking (currently relying on both — GTM may duplicate)
