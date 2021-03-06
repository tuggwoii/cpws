module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
        options: {
            configFile: 'config/eslint.json',
            rulePaths: ['config/rules']
        },
        target: ['src/**/*.js', 'index.js'],
        exclude: ['src/static/js/ui-router.js']
    },
    execute: {
      target: {
          src: ['index.js']
      }
    },
    open: {
        dev: {
            path: 'http://127.0.0.1:8000',
            app: 'Chrome'
        }
    }
  });

  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-execute');
  grunt.registerTask('default', ['eslint', 'open','execute']);
  grunt.registerTask('test', ['eslint']);
  grunt.registerTask('run', ['open','execute']);
  
};
