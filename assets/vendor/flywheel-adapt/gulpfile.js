var gulp   = require( 'gulp' ),
	sass   = require( 'gulp-sass' ),
	notify = require( 'gulp-notify' );

var paths  = {
	source: './test/sass',
	dest:   './test'
};

/**
 * Build Sass
 */

gulp.task( 'sass', function() {

	return gulp.src( paths.source + '/**/*.scss' )
			   .pipe( sass().on( 'error', sass.logError ) )
			   .pipe( gulp.dest( paths.dest ) )
			   .pipe( notify( 'sass compiled' ) );
} );

/**
 * Watch for events
 */

gulp.task( 'watch', function() {
	gulp.watch( paths.source + '/**/*.scss', ['sass'] );
} );

/**
 * Run
 */

gulp.task( 'default', ['watch', 'sass'] );