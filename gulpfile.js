const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-dart-sass');
const fileInclude = require('gulp-file-include');
const del = require('del');

const assets = './test/assets';

const clean = cb => {
    return del(['build']);
}

const compileSass = cb => {
    return src(assets + '/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest(assets + '/css/'));
}

const buildHtml = cb => {
    return src('./test/index.html')
        .pipe(fileInclude({ basepath: './test/partials' }))
        .pipe(dest('./'));
}

const watcher = cb => {
    watch(assets + '/sass/**/*.scss', series(compileSass));
    watch('./src/**/*.scss', series(compileSass));
    watch('./_adapt.scss', series(compileSass));
    watch('./test/**/*.html', series(buildHtml));
    watch('./test/partials/**/*.html', series(buildHtml));
}

exports.default = series(clean, compileSass, buildHtml, watcher);
