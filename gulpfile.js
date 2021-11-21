const {src, dest, series} = require('gulp')

const static = function(cb){
    // task
   return src('src/static/**')
    .pipe(dest('dist/static'))

    // temporial dead zone
    cb()

}

function redirect(){
    return(src('./_redirects').pipe(dest('./dist')))
}

exports.default = series(static, redirect);