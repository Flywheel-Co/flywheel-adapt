---
title: hamburger
params: $color, $width, $height, $barHeight
alias:
---

Generate a hamburger button.

This mixin requires you have a child `span` element in the DOM. Additionally, you can toggle an `.active`
class with javascript to switch the state of the hamburger button.

###### SCSS
```scss
#menu {
    @include hamburger(#333, 22px, 22px, 3px);
}
```

###### HTML
```html
<div id="menu">
    <span>Menu</span>
</div>
```