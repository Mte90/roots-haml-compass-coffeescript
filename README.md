# [Roots Theme](http://roots.io/) modded for Bootstrap SASS, HAML, Compass and Coffeescript

##Difference from original Roots

* grunt-haml-php - Modded for the last version of MTHAML and fix for the compile [#7](https://github.com/alexluke/grunt-haml-php/issues/7) and [#8](https://github.com/alexluke/grunt-haml-php/issues/8) (not in the dependence of packages.json!)
* assetes/sass - SASS folders
* assets/sass/bootstrap - Bootstrap the SASS way (remember to update with the last version (and rename bootstrap.scss in _bootstrap.scss))
* assets/coffee - _main.js file converted in coffeescript
* assets/haml - templates folder files written in HAML
* compass - grunt use compass for compile the SASS files
* Gruntfile.js - modded for the new settings
* lib/scripts.php - added a rule for WP_DEBUG enabled for insert livereload in the template
* Use WP_DEBUG instead WP_ENV
    
##Roots Readme

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Roots is a WordPress starter theme based on [HTML5 Boilerplate](http://html5boilerplate.com/) & [Bootstrap](http://getbootstrap.com/) that will help you make better themes.

* Source: [https://github.com/roots/roots](https://github.com/roots/roots)
* Homepage: [http://roots.io/](http://roots.io/)
* Documentation: [http://roots.io/docs/](http://roots.io/docs/)
* Twitter: [@rootswp](https://twitter.com/rootswp), [@retlehs](https://twitter.com/retlehs), [@swalkinshaw](https://twitter.com/swalkinshaw), [@Foxaii](https://twitter.com/Foxaii), [@c2foryou](https://twitter.com/c2foryou)
* Newsletter: [Subscribe](http://roots.io/subscribe/)
* Forum: [http://discourse.roots.io/](http://discourse.roots.io/)

### Additional features

Install the [Soil](https://github.com/roots/soil) plugin to enable additional features:

* Root relative URLs
* Nice search (`/search/query/`)
* Cleaner output of `wp_head` and enqueued assets markup

## Installation

Clone the git repo - `git clone https://github.com/Mte90/roots-haml-compass-coffeescript` - or [download it](https://github.com/Mte90/roots-haml-compass-coffeescript/zipball/master) and then rename the directory to the name of your theme or website. [Install Grunt](http://gruntjs.com/getting-started), and then install the dependencies for Roots contained in `package.json` by running the following from the Roots theme directory:

```
npm install
```

Reference the [theme activation](http://roots.io/roots-101/#theme-activation) documentation to understand everything that happens once you activate Roots.

PS: in `node_modules` there is  grunt-haml-php modded for the last version of MTHAML and fix for the compile.

## Theme Development

Roots uses [Grunt](http://gruntjs.com/) for compiling SASS to CSS, checking for JS errors, live reloading, concatenating and minifying files, versioning assets, and generating lean Modernizr builds.

## Configuration

Edit `lib/config.php` to enable or disable theme features and to define a Google Analytics ID.

Edit `lib/init.php` to setup navigation menus, post thumbnail sizes, post formats, and sidebars.

## Available Grunt commands

`grunt dev` — Compile assets when file changes are made
`grunt` — Create minified assets that are used on non-development environments

## Documentation

### [Roots Docs](http://roots.io/docs/)

* [Roots 101](http://roots.io/roots-101/) — A guide to installing Roots, the files and theme organization
* [Theme Wrapper](http://roots.io/an-introduction-to-the-roots-theme-wrapper/) — Learn all about the theme wrapper
* [Build Script](http://roots.io/using-grunt-for-wordpress-theme-development/) — A look into the Roots build script powered by Grunt
* [Roots Sidebar](http://roots.io/the-roots-sidebar/) — Understand how to display or hide the sidebar in Roots

## Features


* [Grunt](http://roots.io/using-grunt-for-wordpress-theme-development/) for compiling LESS to CSS, checking for JS errors, live reloading, concatenating and minifying files, versioning assets, and generating lean Modernizr builds
* [Bower](http://bower.io/) for front-end package management
* [HTML5 Boilerplate](http://html5boilerplate.com/)
  * The latest [jQuery](http://jquery.com/) via Google CDN, with a local fallback
  * The latest [Modernizr](http://modernizr.com/) build for feature detection, with lean builds with Grunt
  * An optimized Google Analytics snippet
* [Bootstrap](http://getbootstrap.com/)
* Organized file and template structure
* ARIA roles and microformats
* [Theme activation](http://roots.io/roots-101/#theme-activation)
* [Theme wrapper](http://roots.io/an-introduction-to-the-roots-theme-wrapper/)
* Cleaner HTML output of navigation menus
* Posts use the [hNews](http://microformats.org/wiki/hnews) microformat
* [Multilingual ready](http://roots.io/wpml/) and over 30 available [community translations](https://github.com/roots/roots-translations)

