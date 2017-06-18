module.exports = function (grunt) {

    grunt.initConfig({
        docco: {
            debug: {
                src: ['src/**/*.js'],
                options: {
                    output: 'docs/'
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dest/textchange.min.js': ['src/textchange.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-docco');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);

};