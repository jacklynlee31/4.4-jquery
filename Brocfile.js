var merge = require('broccoli-merge-trees');
var sass = require('broccoli-sass');
var funnel = require('broccoli-funnel');
var injectLivereload = require('broccoli-inject-livereload');

var publicWithReload = injectLivereload('public');

var includePaths = [
    'assets/scss',
    'bower_components/reset-css',
    'bower_components/bourbon/app/assets/stylesheets',
    'bower_components/fontawesome/scss',
    'bower_components/neat/app/assets/stylesheets'
];

var vendor = funnel('bower_components', {
    files: ['handlebars/handlebars.js', 'jquery/dist/jquery.min.js']
});

var compiledCss1 = sass (includePaths, 'accordion.scss', 'accordion.css');
var compiledCss2 = sass (includePaths, 'keyboard.scss', 'keyboard.css');

module.exports = merge([publicWithReload, 'assets/js', compiledCss1, compiledCss2, vendor]);
