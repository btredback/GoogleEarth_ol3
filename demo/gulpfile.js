var gulp = require('gulp');
var uglify = require('gulp-uglify');
gulp.task('dist', function() {
    // 1. 找到文件
    gulp.src(['Cesium/*.js', 'Cesium/Workers/*.js'])
    // 2. 压缩文件
        .pipe(uglify({ mangle: false }))
    // 3. 另存压缩后的文件
        .pipe(gulp.dest('dist/Cesium'))
});