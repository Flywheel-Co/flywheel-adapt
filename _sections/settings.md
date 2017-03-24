---
title: Settings
type: getstarted
order: 30
---

Adapt contains a few values for initial configuration to assist streamline and customize the library instance.

| Variable | Default | Description |
| -------- |:-------:| ----------- |
| `$adapt-include-reset` | `true` | Conditionally include the Eric Meyer CSS reset |
| `$adapt-base-styles`   | `true` | Conditionally include the Flywheel Adapt base styles |
| `$adapt-border-radius` | `3px`  | Default border radius for related mixins |
| `$adapt-browser-prefixes` | `webkit moz ms o` | Default browser prefix list for prefixer |
| `$adapt-device-map`       | See [default device map](#default-device-map). | Device map for responsive queries |


#### Default Device Map
```scss
$adapt-device-map: (
    mobile: (max : 667px),
    mobile-portrait: (max : 375px),
    mobile-landscape: (min : 375px, max : 667px),
    tablet: (min : 667px, max : 1028px),
    tablet-portrait: (min: 667px, max : 768px),
    tablet-landscape: (min : 768px, max : 1028px),
    desktop: (min : 1028px, max : 2200px),
    large: (min : 2200px)
);
```