"use strict";

const { src, dest, watch } = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const minifyCss = require("gulp-clean-css");
const sourceMaps = require('gulp-sourcemaps')

const buildStyles = () => {
  return src("./src/Scss/**/*.scss").pipe(sourceMaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(minifyCss()).pipe(sourceMaps.write())
    .pipe(concat("bundle.css"))
    .pipe(dest("./public"));
};

exports.buildStyles = buildStyles;
exports.watch = () => {
  watch("./src/Scss/**/*.scss", buildStyles);
};
