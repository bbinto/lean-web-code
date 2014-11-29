module.exports = function(grunt) {

    grunt.initConfig({
        uncss: {
            dist: {
                files: {
                    'tidy-css.css' : ['index.html']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-uncss');
    grunt.registerTask('default', ['uncss']);
};