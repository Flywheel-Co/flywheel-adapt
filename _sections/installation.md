---
title: Installation
type: getstarted
order: 10
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.

##### Composer
```json
{
    "repositories": [
        {
            "type": "git",
            "url":  "git@github.com:Flywheel-Co/flywheel-adapt.git"
        }
    ],
    "require": {
        "flywheel/flywheel-adapt": "~1.0"
    },
    "extra": {
        "installer-paths": {
            "assets/sass/{$name}": ["flywheel/flywheel-adapt"]
        }
    }
}
```

##### Bower
This is currently a private package and can only be included by permitted projects.

```json
{
    "dependencies": {
        "flywheel-adapt": "git@github.com:Flywheel-Co/flywheel-adapt.git"
    }
}
```

##### Other
You can download Flywheel Adapt directly from the <a href="#">releases page</a>.

