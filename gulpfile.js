"use strict";

const { src, dest, watch } = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const minifyCss = require("gulp-clean-css");
const sourceMaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify");

const buildStyles = () => {
  return src("./src/Scss/**/*.scss")
    .pipe(sourceMaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(browserSync.stream())
    .pipe(minifyCss({ processImport: false }))
    .pipe(sourceMaps.write())
    .pipe(concat("bundle.css"))
    .pipe(dest("./public"));
};

const buildJS = () => {
  return src("./src/JavaScript/*.js")
    .pipe(sourceMaps.init())
    .pipe(uglify())
    .pipe(sourceMaps.write())
    .pipe(concat("bundle.js"))
    .pipe(dest("./public"));
};

exports.buildJS = buildJS;
exports.buildStyles = buildStyles;
exports.watch = () => {
  watch("./src/Scss/**/*.scss", buildStyles);
  watch("./src/JavaScript/*.js", buildJS);
  watch("./*.html").on("change", browserSync.reload);
};
