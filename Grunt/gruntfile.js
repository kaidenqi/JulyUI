var sass = require('node-sass');
// const mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt){
    //Congiguration
    grunt.initConfig({
        //options for plugins
        concat:{
            js:{
                //src:['/src/js/jQuery','','']
                src: 'src/js/*.js',
                dest:'build/script.js'
            },
            css:{
                src:'src/css/*.css',
                dest:'build/style.css'
            }
        },
        sass:{
            options:{
                implementation:sass,
                sourceMaps:true
            },
            build:{
                files:[{
                    src:'src/css/sass/styles.scss',
                    dest:'src/css/styles.css'
                }]
            }
        },
        uglify:{
            build:{
                files:[{
                    src:'build/script.js',
                    dest:'build/scripts.min.js'
                }]
            }
        },
        cssmin:{
            target:{
                files:[{
                    expand:true,
                    cwd:'build',
                    src:['*.css', '!*.min.css'],
                    dest:'build',
                    ext:'.min.css'
                }]
            }
        },
        imagemin: {
            dynamic: {
              files: [{
                cwd: 'src',
                expand:true,
                src: ['**/*.{png,jpg}'],
                dest:'build/'
              }]
            }
          }

    });

    //Load Plugins
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-imagemin');


    //Register the tasks
    // grunt.registerTask('run', function(){
    //     console.log('Task is running')
    // });

    // grunt.registerTask('eat', function(){
    //     console.log('Task is eating')
    // });

    // grunt.registerTask('all',['run', 'eat']);

    grunt.registerTask('concat-js',['concat:js']);
    grunt.registerTask('concat-css',['concat:css']);
    grunt.registerTask('sass', ['sass']);
    grunt.registerTask('imagemin', ['imagemin']);
    grunt.registerTask('uglify', ['uglify']);
    grunt.registerTask('cssmin', ['cssmin']);
    

    grunt.registerTask('all',['concat-js', 'concat-css','cssmin','sass','imagemin','uglify']);
}