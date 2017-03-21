---
title: hamburger
params: $color, $width, $height, $barHeight
alias:
---

Generate a hamburger button.

This mixin also requires you have a `span.buns` element in the DOM.

###### SCSS
```scss
#menu {
    @include hamburger(#333, 22px, 22px, 3px);
}
```

###### HTML
```html
<div id="menu">
    <span class="buns">Menu</span>
</div>
```