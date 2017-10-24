/**
 * Required functionality
 *
 * @since 1.0.0
 */
var gulp = require( 'gulp' ),
	sass = require( 'gulp-sass' ),
	notify = require( 'gulp-notify' ),
	fileInclude = require( 'gulp-file-include' ),
	del = require( 'del' );

/**
 * Assets directory
 *
 * @since 1.0.0
 * @type  {String}
 */
var assets = './test/assets';


/**
 * Clean build directory
 *
 * @since 1.0.0
 */
gulp.task( 'clean', function() {
	return del( ['build'] );
});

/**
 * Compile Sass
 *
 * @since 1.0.0
 */
gulp.task( 'compileSass', ['clean'], function() {
	return gulp.src( assets + '/sass/**/*.scss' )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( gulp.dest( assets + '/css/' ) )
		.pipe( notify( 'adapt compiled' ) );
});

/**
 * Build HTML file and output to root directory
 *
 * @see   gulp-file-include
 * @since 1.0.0
 */
gulp.task( 'buildHtml', function() {
	return gulp.src( './test/index.html' )
		.pipe( fileInclude({
			basepath: './test/partials'
		}))
		.pipe( gulp.dest( './' ) );
})

/**
 * Watch files for changes
 *
 * @since 1.0.0
 */
gulp.task('watch', function(){
	gulp.watch( assets + '/sass/**/*.scss', ['compileSass'] );
	gulp.watch( './src/**/*.scss', ['compileSass'] );
	// gulp.watch( './library/**/*.scss', ['compileSass'] );
	// gulp.watch( './utils/**/*.scss', ['compileSass'] );
	gulp.watch( './_adapt.scss', ['compileSass'] );

	gulp.watch( './test/**/*.html', ['buildHtml'] );
	gulp.watch( './test/partials/**/*.html', ['buildHtml'] );
});


/**
 * Define the default task
 *
 * @since 1.0.0
 */
gulp.task( 'default', ['watch', 'compileSass', 'buildHtml'] );