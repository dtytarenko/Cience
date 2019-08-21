const	gulp         = require('gulp'),  //основной плагин gulp
		stylus       = require('gulp-stylus'),  //препроцессор stylus
		browserSync  = require('browser-sync'),
		maps		 = require('gulp-sourcemaps'),
		csso		 = require('gulp-csso'), // минификация css
		rename       = require('gulp-rename'), // используется для переименования конечных файлов css и для изменения конечной структуры проекта		
		autoprefixer = require('gulp-autoprefixer'),  //расставление автопрефиксов
		imagemin     = require('gulp-imagemin'),  //минимизация изображений
		fileinclude  = require('gulp-file-include'), // инклюд html
		plumber 	 = require('gulp-plumber'), // отслеживание ошибок
		watch 		 = require('gulp-watch'),
		htmlmin 	 = require('gulp-htmlmin'),
		babel 		 = require('gulp-babel'),
		uglify 		 = require('gulp-uglify');
		del          = require('del'), // очистка сборочной директории	


//////////////////////////--START CSS--//////////////////////

gulp.task('css', () => {
	return gulp
		.src([
			'src/common/stylus/main.styl',
			'src/common/stylus/index.styl',
			'src/pages/**/*.styl',
		]) // массив путей
		.pipe(plumber()) // отслеживание ошибок
		.pipe(maps.init())
		.pipe(stylus({
			'include css': true
		}))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
		{ cascade: true })) // для кроссбраузерности
		.pipe(csso()) // минификация css
		.pipe(rename(
			{suffix:'.min', dirname: ''})) // для переименования конечных файлов css и для изменения конечной структуры проекта
		.pipe(maps.write())
		.pipe(gulp.dest('dist/css/')) // сборка проекта с указанием конечной директории
		.pipe(browserSync.reload({
			stream: true})); // отслеживание ошибок в режиме стрима
});

/////////////////////////////////////////////////////////////
//////////////////////////--END CSS--////////////////////////


gulp.task('js', () =>
	gulp.src('src/**/*.js')
		.pipe(plumber())
		.pipe(maps.init())
        .pipe(babel({
            presets: ['@babel/env']
		}))
		.pipe(rename(
			{suffix:'.min', dirname: ''})) // для переименования конечных файлов css и для изменения конечной структуры проекта
		.pipe(uglify())
		.pipe(maps.write())
		.pipe(gulp.dest('dist'))
);


//////////////////////////--START HTML--/////////////////////

gulp.task('html', () => {
  return gulp
	.src('src/pages/**/*.html')
	.pipe(rename({dirname: ''}))
	.pipe(htmlmin({ removeComments: true }))
	.pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({
			stream: true}));
});

/////////////////////////////////////////////////////////////
//////////////////////////--END HTML--///////////////////////



//////////////////////////--START IMG--//////////////////////

gulp.task('img', () => {
	return gulp.src('src/assets/**/*.*')
	.pipe(imagemin([
		imagemin.gifsicle({interlaced: true}),
		imagemin.jpegtran({progressive: true}),
		imagemin.optipng({optimizationLevel: 5}),
		imagemin.svgo({
		  plugins: [
			  {removeViewBox: true},
			  {cleanupIDs: false}
		  ]
		}) // минификация изображений
	]))
	.pipe(gulp.dest('dist/assets'));
});

/////////////////////////////////////////////////////////////
//////////////////////////--END IMG--////////////////////////



//////////////////////////--START FONTS--////////////////////

gulp.task('fonts',() => {
		return gulp.src('src/fonts/**/*')
	  .pipe(gulp.dest('dist/fonts')); 
  })

/////////////////////////////////////////////////////////////
//////////////////////////--END FONTS--//////////////////////



//////////////////////////--START RELOAD--////////////////////
gulp.task('reload', () => {
  browserSync({
    server: {
      baseDir: 'dist/' // проект просматривается с директории dist
    },
    notify: false,
  });
});

/////////////////////////////////////////////////////////////
//////////////////////////--END RELOAD--//////////////////////



//////////////////////////--START CLEAN--////////////////////

gulp.task('clean', function() {
	return del.sync('dist'); // очистка конечной директории, в данном случае с dist
});

/////////////////////////////////////////////////////////////
//////////////////////////--END CLEAN--//////////////////////


///////////////////////////////////////////////////////////////
//////////////////////////--START GENERAL TASK--//////////////

gulp.task('watch', ['html','css','js', 'reload'], () => {
	watch(['src/common/stylus/**/*.styl', 'src/components/**/*.styl'], ()  => gulp.start('css'));
	watch(['src/js/**/*.js'], ()  => gulp.start('js'));
	watch(['src/pages/**/*.html', 'src/components/**/*.html'], () => gulp.start('html'));
});

/////////////////////////////////////////////////////////////
//////////////////////////--END GENERAL TASK--//////////////