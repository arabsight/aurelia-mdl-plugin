var gulp = require('gulp');
var runSequence = require('run-sequence');
var bump = require('gulp-bump');
var args = require('../args');

// utilizes the bump plugin to bump the
// semver for the repo
gulp.task('bump-version', function() {
  return gulp.src(['./package.json'])
    .pipe(bump({type: args.bump})) //major|minor|patch|prerelease
    .pipe(gulp.dest('./'));
});

// calls the listed sequence of tasks in order
gulp.task('prepare-release', function(callback) {
  return runSequence(
    'build',
    'lint',
    'bump-version',
    callback
  );
});
