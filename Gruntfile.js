module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        concat: {
            dist: {
                src: ['js/*.js'],
                dest: 'js/script.js'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/script.min.js': 'js/script.js'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img',
                    src: ['**/*.{png,gif,jpg}'],
                    dest: 'img'
                }]
            }
        },
        watch: {
            scripts: {
                files: 'src/js/**/*.js',
                tasks: ['concat', 'uglify']
            },
            images: {
                files: 'src/img/**/*.{png,gif,jpg}',
                tasks: ['imagemin']
            }
        },
        availabletasks: {
            tasks: {
                options: {
                    filter: 'exclude',
                    tasks: ['availabletasks', 'tasks']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-available-tasks');
    grunt.registerTask('default', ['cssmin', 'concat', 'uglify', 'imagemin', 'watch']);
    grunt.registerTask('tasks', ['availabletasks']);
}