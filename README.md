# Flywheel Adapt 

This is a SASS based foundation of commonly used mixins, classes and a default reset.  It can be pulled into your project via Composer, Bower or download and import.

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

***

##### Bower

This is currently a private package and can only be included by permitted projects.

```json
{
    "dependencies": {
        "flywheel-adapt": "git@github.com:Flywheel-Co/flywheel-adapt.git"
    }
}
```
```sass
// import the _adapt.scss via the bower vendor folder defined in your `.bowerrc` file.
@import "../vendor/flywheel-adapt/adapt";
```

##### Via Download

```
@import 'flywheel-adapt/adapt';
```


## Mixins

##### accel()
It should be noted that Matt spelled this `excel` for a while.  Obviously he was not winning any spelling bees
```sass
@include accel;
```

***

##### animation( `delay, duration, animation [repeat, direction]` )

```sass
@include animation(0s, 1s, my-animation-name, inifit, forward);
```

***

##### background-gradient( `startColor, endColor, [type]` )
```sass
@include background-gradient(#fff, #000);
```

***

##### bgimg( `width, height, bgoptions, [cover : bool]` ) 
```sass
@include bgimg(100px, 200px, left center no-repeat, true);
```

***

##### blur( `value` )
```sass
@include blur(5px);
```

***

##### border-radius( `value` )
```sass
@include border-radius(3px);
@include br(3px);
```

***

##### border-top-radius( `value` )
```sass
@include border-top-radius(10px);
```

***

##### border-bottom-radius( `value` )
```sass
@include border-bottom-radius(10px);
```

***

##### box-shadow( `x, y, blur, color` )
```sass
@include box-shadow(1px, 1px, 3px, #333333);
```

***

##### box-shadow-inset( `x, y, blur, color` )
```sass
@include box-shadow-inset(1px, 1px, 3px, #333333);
```

***

##### box-sizing( `[value : border-box]` )
```sass
@include box-sizing;
@include bs;
```

***

##### break-word

***

##### clearfix
Clear fix implementation   
```sass
@include clearfix;
@include cf;
```

***

##### font-face( `fontFamily, fontFilename` )
```sass
@include font-face('Lato', 'lato.otf');
```

***

##### placeholder @content
```sass
@include placeholder {
    color: #86b648;
    font-weight: bold;
}
```

***

##### keyframes @content

***

##### perspective( `value` )
The distance between the z-plane and the user for 3d elements
```sass
@include perspective(20px);
```

***

##### rotate ( `degrees` )
```sass
@include rotate(45);
```

***

##### size( `width, height, (display:false)` )
This is a helper to write out the width and height in a more concise syntax
```sass
@include size(23px, 24px, block);
```

***

##### transition( `transitionProperty, transitionTime, method` )
```sass
@include transition(all, .4s, ease-in-out);
```

***

##### transition-delay( `value` )
Delay a transition from starting until the time increment has passed
```sass
@include transition-delay(2s);
```

***

##### transform( `property` )
Open ended transform property
```sass
@include transform(rotate(45deg))
```

***

##### translate3d( `x, y, z` )
Translate an elements position in 3d space
```sass
@include translate3d(20px, 30px, 10px);
```

***

##### transform-origin( `value` )
Change the origin of a transformations for an element
**value** : x-offset y-offset z-offset
```sass
@include transform-origin(2px);
@include transform-origin(20% 30%);
@include transform-origin(20% 30% 10px);
```

***

##### hamburger `color, width, height, barSize` 
_note_ : this HTML element must include a span.buns element
```html
<div id="menu"><span class="buns">Menu</span></div>
```
```sass
#menu {
    @include hamburger(#333, 22px, 22px, 3px);
}
```

***

##### setBoxRatio( `width, height, (ratio)` )
** This needs to be reviewed.

***

## Media Sizes

These are the default media break points shipped with Adapt.  These can be modified in your own settings.

##### $mobilePortraitSize : `320px`
##### $mobileLandscapeSize : `480px`
##### $tabletPortraitSize : `768px`
##### $tabletLandscapeSize : `1028px`
##### $desktopSize : `1224px`

## Media Queries

##### device( `media` ) { @content }
```sass
@include device(mobile) {
    width : 100%
}
@include device(tablet-portrait) {
    width : 100%
    height : auto;
}
```
> You can also include the media query using the device name as the function

```sass
@include mobile {
    width : 100%;
}
@include tablet-portrait {
    width : 100%;
    height : auto;
}
```

## Browser Prefixes
##### $browserPrefixes `webkit moz ms o`

Browser prefixes are used in the `prefix` mixin.  Any number of prefixes can be defined.  Defaults above.

## CSS Classes

* **clearfix** - Clear floated child elements
* **floatleft** - Float an element to the left
* **floatright** - Float an element to the right
* **preload** - Add class to body element and remove with JS on page load
* **showOnlyMobile** - Show this element only to mobile resolutions
* **hideOnlyMobile** - Hide this element only from mobile resolutions
* **showMobile** - Show this element to mobile resolutions
* **hideMobile** - Hide this element from mobile resolutions
* **showOnlyTablet** - Show this element only to tablet resolutions
* **hideOnlyTablet** - Hide this element only from tablet resolutions
* **showTablet** - Show this element to tablet resolutions
* **hideTablet** - Show this element from tablet resolutions
* **showOnlyTabletPortrait** - Show this element only to tablet-portrait resolutions
* **hideOnlyTabletPortrait** - Hide this element only from tablet-portrait resolutions
* **showTabletPortrait** - Show this element to tablet-portrait resolutions
* **hideTabletPortrait** - Hide this element from tablet-portrait resolutions
* **showOnlyDesktop** - Show this element only to desktop resolutions
* **hideOnlyDesktop** - Hide this element only from desktop resolutions
* **showDesktop** - Show this element to desktop resolutions
* **hideDesktop** - Hide this element from desktop resolutions
