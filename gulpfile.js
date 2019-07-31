'use strict';
  // Gulp and plugins
const
  gulp  = require('gulp'),
  gap = require('gulp-append-prepend'),
  product_name = "Vue Material Kit",
  product_version = "1.2.0",
  year = "2019",
  github_MIT_link = "https://github.com/creativetimofficial/vue-material-kit/blob/master/LICENSE.md",
  product_link = "https://www.creative-tim.com/product/vue-material-kit",
  product_free_copyright_template = `/*!
  ​
  =========================================================
  * `+ product_name +` - v`+ product_version +`
  =========================================================

  * Product Page: `+ product_link +`
  * Copyright `+ year +` Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (`+ github_MIT_link +`)

  * Coded by Creative Tim

  =========================================================

  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    ​
  */`

gulp.task("licenses", async function() {
  // this is to add Creative Tim licenses in the production mode for the minified js
  gulp.src(["dist/js/chunk-vendors*.js", "dist/js/app*.js"], { base: "./" })
  .pipe(gap.prependText(product_free_copyright_template))
  .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified html
  gulp.src("dist/index.html", { base: "./" })
  .pipe(gap.prependText(product_free_copyright_template))
  .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified css
  gulp.src(["dist/css/chunk-vendors*.css", "dist/app*.css"], { base: "./" })
  .pipe(gap.prependText(product_free_copyright_template))
  .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
