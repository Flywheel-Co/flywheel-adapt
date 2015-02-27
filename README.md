# Flywheel Co. Sass Tools

This is a group of frequently used and re-used Sass mixins, and other helpers to assist in rapid development.

## Usage

#### Composer

Example Usage:

    {
        "repositories": [
            {
                "type": "git",
                "url":  "git@github.com:Flywheel-Co/sass-tools.git"
            }
        ],
        "require": {
            "flywheel/sass-tools": "~1.0",
        },
        "extra": {
            "installer-paths": {
                "assets/sass/{$name}": ["flywheel/sass-tools"]
            }
        }
    }



#### Other

To include Flywheel's Sass tools in a project, simply import the sucker:
`@import 'sass-tools/sass-tools';`

## Functionality

#### CSS Mixins

* **animation** - `delay, duration, animation, (repeat), (direction)`
* **background-gradient** - (startColor), (endColor), (type)
* **border-radius** - `value`
 * **border-top-radius** - `value`
 * **border-bottom-radius** - `value`
* **box-shadow** - `top, left, blur, color`
 * **box-shadow-inset** - `top, left, blur, color`
* **box-sizing** - `(value)`
 * **boxSize** - _deprecated._ aliases to box-sizing
 * **bs** - aliases to box-sizing
* **font-face** - `fontFamily, fontFilename`
* **placeholder** - @content
* **keyframes** - @content
* **transition** - `transitionProperty, transitionTime, method`
* **transform** - `value`
 * **rotate** - `degrees`
 * **transform-origin** - `value`
 * **perspective** - `value`
 * **translate3d** - `x, y, z`
 * **accel**
 * **excel** - _deprecated._ aliases to accel

#### Helpers

* **bgimg** - `width, height, bgoptions, (cover)`
* **blur** - `value`
* **clearfix**
* **hamburger** - `(color), (width), (height), (barSize)`
* **size** - `width, height, (display)`
* **setBoxRatio** - `width, height, (ratio)`
* **break-word**

#### Media Sizes

* **$mediaMobilePortrait**
* **$mediaMobileLandscape**
* **$mediaTabletPortrait**
* **$mediaTabletLandscape**
* **$mediaDesktop**

#### Media Queries

* **device** - `media`
* **mobile-portrait**
* **mobile**
* **tablet-portrait**
* **tablet**
* **desktop**

#### CSS Classes

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
