# [Roots Theme](http://roots.io/) modded for Bootstrap SASS, HAML, Compass and Coffeescript

##Difference from original Roots

* grunt-haml-php - Modded for the last version of MTHAML and fix for the compile [#7](https://github.com/alexluke/grunt-haml-php/issues/7) and [#8](https://github.com/alexluke/grunt-haml-php/issues/8) (not in the dependence of packages.json!)
* assetes/sass - SASS folders
* assets/sass/bootstrap - Bootstrap the SASS way (remember to update with the last version (and rename bootstrap.scss in _bootstrap.scss))
* assets/coffee - _main.js file converted in coffeescript
* assets/haml - templates folder files written in HAML
* compass - grunt use compass for compile the SASS files
* Gruntfile.js - modded for the new settings
* lib/scripts.php - added a rule for WP_DEBUG enabled for insert livereload.js in the template
    
##Roots Readme

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Roots is a WordPress starter theme based on [HTML5 Boilerplate](http://html5boilerplate.com/) & [Bootstrap](http://getbootstrap.com/) that will help you make better themes.

* Source: [https://github.com/roots/roots](https://github.com/roots/roots)
* Home Page: [http://roots.io/](http://roots.io/)
* Twitter: [@retlehs](https://twitter.com/retlehs)
* Newsletter: [Subscribe](http://roots.io/subscribe/)
* Forum: [http://discourse.roots.io/](http://discourse.roots.io/)

## Installation

Clone the git repo - `git clone git://github.com/roots/roots.git` - or [download it](https://github.com/roots/roots/zipball/master) and then rename the directory to the name of your theme or website. [Install Grunt](http://gruntjs.com/getting-started), and then install the dependencies for Roots contained in `package.json` by running the following from the Roots theme directory:

```
npm install
```

Reference the [theme activation](http://roots.io/roots-101/#theme-activation) documentation to understand everything that happens once you activate Roots.

## Theme Development

After you've installed Grunt and ran `npm install` from the theme root, use `grunt watch` to watch for updates to your LESS and JS files and Grunt will automatically re-build as you write your code.

## Configuration

Edit `lib/config.php` to enable or disable support for various theme functions and to define constants that are used throughout the theme.

Edit `lib/init.php` to setup custom navigation menus and post thumbnail sizes.

## Documentation

### [Roots Docs](http://roots.io/docs/)

* [Roots 101](http://roots.io/roots-101/) — A guide to installing Roots, the files and theme organization
* [Theme Wrapper](http://roots.io/an-introduction-to-the-roots-theme-wrapper/) — Learn all about the theme wrapper
* [Build Script](http://roots.io/using-grunt-for-wordpress-theme-development/) — A look into the Roots build script powered by Grunt
* [Roots Sidebar](http://roots.io/the-roots-sidebar/) — Understand how to display or hide the sidebar in Roots

## Features

* Organized file and template structure
* HTML5 Boilerplate's markup along with ARIA roles and microformat
* Bootstrap
* [Grunt build script](http://roots.io/using-grunt-for-wordpress-theme-development/)
* [Theme activation](http://roots.io/roots-101/#theme-activation)
* [Theme wrapper](http://roots.io/an-introduction-to-the-roots-theme-wrapper/)
* Root relative URLs
* Cleaner HTML output of navigation menus
* Cleaner output of `wp_head` and enqueued scripts/styles
* Nice search (`/search/query/`)
* Image captions use `<figure>` and `<figcaption>`
* Example vCard widget
* Posts use the [hNews](http://microformats.org/wiki/hnews) microformat
* [Multilingual ready](http://roots.io/wpml/) (Brazilian Portuguese, Bulgarian, Catalan, Danish, Dutch, English, Finnish, French, German, Hungarian, Indonesian, Italian, Korean, Macedonian, Norwegian, Polish, Russian, Simplified Chinese, Spanish, Swedish, Traditional Chinese, Turkish, Vietnamese, Serbian)

