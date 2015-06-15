# Flywheel Co. Sass Tools

This is a group of frequently used and re-used Sass mixins, and other helpers to assist in rapid development.

## Usage

##### Composer

Example Usage:

    {
        "repositories": [
            {
                "type": "git",
                "url":  "git@github.com:Flywheel-Co/flywheel-adapt.git"
            }
        ],
        "require": {
            "flywheel/flywheel-adapt": "~1.0",
        },
        "extra": {
            "installer-paths": {
                "assets/sass/{$name}": ["flywheel/flywheel-adapt"]
            }
        }
    }

##### Bower

Example Usage:

    ...

    "dependencies": {
        "flywheel-adapt": "git@github.com:Flywheel-Co/flywheel-adapt.git"
    }

    ...


##### Standard

Example Usage:

    @import 'flywheel-adapt/adapt';

    ...


## Mixins

##### accel
It should be noted that Matt spelled this `excel` for a while.  Obviously he was not winning any spelling bees
```sass
@include accel;
```

##### animation( `delay, duration, animation [repeat, direction]` )

```sass
@include animation(0s, 1s, my-animation-name, inifit, forward);
```

##### background-gradient( `startColor, endColor, [type]` )
```sass
@include background-gradient(#fff, #000);
```
##### bgimg( `width, height, bgoptions, [cover]` )

##### blur( `value` )
```sass
@include blur(5px);
```

##### border-radius( `value` )
```sass
@include border-radius(3px);
@include br(3px);
```

##### border-top-radius( `value` )
```sass
@include border-top-radius(10px);
```

##### border-bottom-radius( `value` )
```sass
@include border-bottom-radius(10px);
```

##### box-shadow( `x, y, blur, color` )
```sass
@include box-shadow(x, y, blur, color);
```

##### box-shadow-inset( `x, y, blur, color` )
```sass
@include box-shadow-inset(x, y, blur, color);
```

##### box-sizing( `[value]` )
**boxSize** _deprecated._ aliases to box-sizing
```sass
@include box-sizing;
@include bs;
```

##### clearfix
##### cf
Clear fix implementation   
```sass
@include cf;
```


##### font-face( `fontFamily, fontFilename` )
```sass
@include font-face('Lato', 'lato.otf');
```

##### placeholder @content

##### keyframes @content

##### rotate `degrees`
```sass
@include rotate(45);
```

##### transition `transitionProperty, transitionTime, method`
```sass
@include transition(all, .4s, ease-in-out);
```
##### transition-delay `value`
##### transform `value`

##### transform-origin `value`
##### perspective `value`
##### translate3d `x, y, z`

##### hamburger `(color), (width), (height), (barSize)` 
_note_ : this HTML element must include a span.buns element
```sass
.menu {
    @include hamburger(#333, 22px, 22px, 3px);
}
```
```html
<div class="menu"><span class="buns">Menu</span></div>
```
##### size `width, height, (display)`
##### setBoxRatio `width, height, (ratio)`
##### break-word

## Media Sizes

##### $mobilePortraitSize `320px`
##### $mobileLandscapeSize `480px`
##### $tabletPortraitSize `768px`
##### $tabletLandscapeSize `1028px`
##### $desktopSize `1224px`

## Media Queries

##### device `media`
```sass
@include device(mobile) {
    width : 100%
}
```
> You can also include the media query using the device name as the function

```sass
@include mobile {
    width : 100%;
}
```

## Browser Prefixes
##### $browserPrefixes `webkit moz ms o`

##### CSS Classes

* **clearfix**
* **floatleft**
* **floatright**
* **preload** - To use, add the class preload to the body and remove once the document is ready via JS
* **showOnlyMobile**
* **hideOnlyMobile**
* **showMobile**
* **hideMobile**
* **showOnlyTablet**
* **hideOnlyTablet**
* **showTablet**
* **hideTablet**
* **showOnlyTabletPortrait**
* **hideOnlyTabletPortrait**
* **showTabletPortrait**
* **hideTabletPortrait**
* **showOnlyDesktop**
* **hideOnlyDesktop**
* **showDesktop**
* **hideDesktop**
