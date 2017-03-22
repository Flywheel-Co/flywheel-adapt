---
title: Media Sizes
type: responsive
order: 10
---

The default media sizes are stored in a sass map in the settings file.
The settings must remain in this order.

```scss
$responsiveMap : (
    mobile : (max : 667px),
    mobile-portrait : (max : 375px),
    mobile-landscape : (min : 375px, max : 667px),
    tablet : (min : 667px, max : 1028px),
    tablet-portrait : (min: 667px, max : 768px),
    tablet-landscape : (min : 768px, max : 1028px),
    desktop : (min : 1028px, max : 2200px),
    large : (min : 2200px)
);
```