const { src, dest, watch, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const autoprefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean");

function scripts() {
  return src("app/js/main.js")
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"));
}
function styles() {
  return src("app/scss/style.scss")
    .pipe(autoprefixer({ overrideBrowserlist: ["last 10 versions"] }))
    .pipe(concat("style.min.css"))
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(dest("app/css"));
}

function watching() {
  watch(["app/scss/style.scss"], styles);
  watch(["app/js/main.js"], scripts);
}
function cleanDist() {
  return src("dist").pipe(clean());
}
function building() {
  return src(
    [
      "app/css/style.min.css",
      "app/js/main.min.js",
      "app/*.html",
      "app/images/*",
    ],
    {
      base: "app",
    }
  ).pipe(dest("dist"));
}

exports.scripts = scripts;
exports.styles = styles;
exports.watching = watching;
exports.build = series(cleanDist, building);
