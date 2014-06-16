'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    haml: {
      compile: {
        files: [{
          expand: true,
          src: ['assets/haml/*.haml'],
          dest: 'templates/',
          ext: '.php'
        }]
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'assets/sass',
          cssDir: 'assets/css',
          environment: 'production'
        }
      },
      debug: {
        options: {
          environment: 'development',
          debugInfo: true,
          noLineComments: false,
          sassDir: 'assets/sass',
          cssDir: 'assets/css',
		  outputStyle: 'expanded',
		  relativeAssets: true
        }
      }
    },
    coffee: {
      compile: {
        options: {
          sourceMap: true,
          join: true
        },
        files: {
          'assets/js/script.js': ['assets/coffee/*.coffee'] // concat then compile into single file
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/*.js',
        '!assets/js/scripts.min.js'
      ]
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
            expand: true,
            cwd: 'assets/img/',
            src: '**/*',
            dest: 'assets/img/'
          }]
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': [
            'assets/js/plugins/bootstrap/transition.js',
            'assets/js/plugins/bootstrap/alert.js',
            'assets/js/plugins/bootstrap/button.js',
            'assets/js/plugins/bootstrap/carousel.js',
            'assets/js/plugins/bootstrap/collapse.js',
            'assets/js/plugins/bootstrap/dropdown.js',
            'assets/js/plugins/bootstrap/modal.js',
            'assets/js/plugins/bootstrap/tooltip.js',
            'assets/js/plugins/bootstrap/popover.js',
            'assets/js/plugins/bootstrap/scrollspy.js',
            'assets/js/plugins/bootstrap/tab.js',
            'assets/js/plugins/bootstrap/affix.js',
            'assets/js/plugins/*.js',
            'assets/js/_*.js'
          ]
        }
      }
    },
    version: {
      options: {
        file: 'lib/scripts.php',
        css: 'assets/css/app.css',
        cssHandle: 'roots_main',
        js: 'assets/js/scripts.min.js',
        jsHandle: 'roots_scripts'
      }
    },
    watch: {
      haml: {
        files: ['assets/haml/*.haml'],
        tasks: ['haml']
      },
      compass: {
        files: [
          'assets/sass/*.scss',
          'assets/sass/bootstrap/*.scss'
        ],
        tasks: ['compass']
      },
      coffee: {
        options: {
          sourceMap: true
		},
        files: 'assets/coffee/*.coffee',
        tasks: ['coffee']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify', 'version']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: true
        },
        files: [
          'assets/css/app.css',
          'assets/js/scripts.js',
          'templates/*.php',
          '*.php'
        ]
      }
    },
    clean: {
      dist: [
        'assets/css/app.css',
        'assets/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-haml-php');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-wp-version');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'compass',
    'coffee',
    'haml',
    'uglify',
    'version'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
