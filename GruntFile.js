module.exports = function (grunt)
{

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		meta: {
			today: grunt.template.today('dd-mm-yyyy')
		},
		connect: {
			server: {
				options: {
					livereload: true,
					hostname: '0.0.0.0',
					port: 9000,
					base: './tests/'
				}
			}
		},
		concat: {
			options: {
				separator: "\n\n"
			},
			all: {
				src: ['src/polyfills/*.js', 'src/init.js', 'src/methods/*.js', 'src/footer.js'],
				dest: 'tests/<%= pkg.name %>-dev.js'
			},
			filtered: {
				src: '<%= concat.methodsToInc %>',
				dest: 'dist/<%= pkg.name %>-temp.custom.js'
			}
		},
		uglify: {
		    alldist: {
		      files: {
		        'dist/<%= pkg.name %>-<%= pkg.version %>.min.js': 'test-area/<%= pkg.name %>-dev.js'
		      }
		    },
		    alldev: {
		      files: {
		        'tests/<%= pkg.name %>-dev.min.js': 'test-area/<%= pkg.name %>-dev.js'
		      }
		    },
		    filtered: {
		      files: {
		        'dist/<%= pkg.name %>-<%= pkg.version %>.custom.min.js': 'dist/<%= pkg.name %>-temp.custom.js',
		      }
		    }
  		},
  		shell: {
	        rmCustomConcat: {
	            command: 'rm dist/<%= pkg.name %>-temp.custom.js'
	        }
    	},
		watch: {
			options: {
			    livereload: true,
			},
		  	js: {
		  		files: ['src/polyfills/*.js', 'src/init.js', 'src/methods/*.js', 'src/footer.js'],
		  		tasks: ['concat:all']
		  	}
		},
		jshint: {
    		all: ['src/polyfills/*.js', 'src/init.js', 'src/methods/*.js', 'src/footer.js']
  		}

	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	//testing
	grunt.registerTask('serve', ['connect', 'watch']);
	grunt.registerTask('merge', ['concat:all']);
	grunt.registerTask('mergemin', ['concat:all','uglify:alldev']); //generates file in tests/ and then uglifies from there to dist/

	//distribute
	grunt.registerTask('deploy', ['concat:all','uglify:alldist']); //generates file in tests/ and then uglifies from there to dist/
	grunt.registerTask('custom', ' Build Browserkit by choosing the methods you need like e.g. `grunt custom:ajax,classes,eventslisteners` ', function(options){
		var optionsArr = options.split(','),
			incFilesArr = ['src/polyfills/*.js', 'src/init.js'];

		for(var i = 0, count = optionsArr.length; i < count; i++){
			incFilesArr.push( 'src/methods/'+optionsArr[i]+'.js' );
		}
		incFilesArr.push('src/footer.js');

		grunt.config.set('concat.methodsToInc', incFilesArr);
		grunt.task.run(['concat:filtered','uglify:filtered','shell:rmCustomConcat']); //generates concat to dist/ then uglifies that file and deletes to unuglified file
	});

}