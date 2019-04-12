var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// task teste
// gulp.task('default', function(){
// 	console.log('Teste realizado com sucesso!');
// });

// task sass - to compile css
gulp.task('sass', function(){
	return gulp.src('sass/**//*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

// task watch - to see changes
gulp.task('watch', function(){
	gulp.watch('sass/**/*.sass', gulp.series('sass'));
});

// task default gulp
gulp.task('default', gulp.series('sass', 'watch'));