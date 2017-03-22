---
title: Media Queries
type: responsive
order: 20
---

##### For a specific device

```scss
// target all mobile devices
@include device(mobile) {
  width: 100%
}

// target portrait-oriented tablets
@include device(tablet-portrait) {
  width: 100%
  height: auto;
}
```

##### For devices larger or smaller than a specific device

You can target all devices larger or smaller than a given device by prefixing the device using
either `lt-` or `gt-`.

```scss
// all devices less than tablet-portrait
@include d(lt-tablet-portrait) {
    width: 100%
}

// all devices greater than mobile
@include d( gt-mobile) {
    width: 100%
    height: auto;
}
```