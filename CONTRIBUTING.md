# Contributing

Want to participate in creating Flywheel Adapt? We love you.

## Submitting Issues

If you encounter any problems using Flywheel Adapt, please [submit an issue](https://github.com/Flywheel-Co/flywheel-adapt/issues). 

When submitting an issue, be sure to include as many details as possible in order to help other contributors better triage the problem. 

## Installation

Fork, then clone the repo:

```sh
git clone git@github.com:your-username/flywheel-adapt.git
```

After making your updates, push to your fork and submit a [pull request](https://github.com/flywheel-co/flywheel-adapt/compare/). We'll take a look at your updates as soon as we can and keep you updated on the status. 

## Testing

The built-in testing sandbox is located at `/test` and can be used to test any new or existing functionality. Using the test environment requires installing some dependencies using [npm](https://www.npmjs.com/):

```sh
npm install
```

Once the dependencies are installed, you can use [Gulp](http://gulpjs.com/) to build the test project:

```sh 
gulp
```

When the test sandbox is built, an `index.html` file is generated in the project root which can be viewed using your favorite web browser.
