var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    Task = elixir.Task;

elixir.config.assetsPath = 'test/';
elixir.config.css.outputFolder = 'test/';
elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.sass('testing.scss', 'test/testing.css');
});