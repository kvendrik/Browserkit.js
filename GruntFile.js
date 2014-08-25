module.exports = function (grunt)
{

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
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
				dest: 'tests/<%= pkg.name %>-<%= pkg.version %>.js'
			},
			filtered: {
				src: '<%= concat.methodsToInc %>',
				dest: 'dist/<%= pkg.name %>-<%= pkg.version %>-temp.custom.js'
			}
		},
		uglify: {
		    all: {
		      files: {
		        'dist/<%= pkg.name %>-<%= pkg.version %>.min.js': 'tests/<%= pkg.name %>-<%= pkg.version %>.js'
		      }
		    },
		    filtered: {
		      files: {
		        'dist/<%= pkg.name %>-<%= pkg.version %>.custom.min.js': 'dist/<%= pkg.name %>-<%= pkg.version %>-temp.custom.js',
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
	grunt.registerTask('mergemin', ['jshint','concat:all','uglify:all']); //generates file in dist/ and then uglifies

	//distribute
	grunt.registerTask('custom', 'Custom build Browserkit by choosing the methods you need like e.g. `grunt custom:ajax,classes,eventslisteners`', function(options){
		var optionsArr = options.split(','),

			//create array to store what files to import
			//along with the files to prepend
			incFilesArr = ['src/polyfills/*.js', 'src/init.js'],

			//All methods and their dependencies
			methodDependencies = {
				'custom-eventlisteners': ['eventlisteners']
			};

		//loop through all specified methods
		for(var i = 0, count = optionsArr.length; i < count; i++){

			var method = optionsArr[i]; //method filename

			//check if method exists
			if(!grunt.file.exists('src/methods/'+method+'.js')) grunt.fail.warn('`'+method+'` method does not exist');

			var dependencies = methodDependencies[method];

			//check if method has dependencies
			if(dependencies !== undefined){

				//loop through dependencies
				for(var j = 0, depCount = dependencies.length; j < depCount; j++){
					var currDep = dependencies[j];

					//push dependency into files to include array
					//if they're not already there
					if(incFilesArr.indexOf('src/methods/'+currDep+'.js') === -1){

						//check if dependency exists
						if( grunt.file.exists('src/methods/'+currDep+'.js') ){

							incFilesArr.push( 'src/methods/'+currDep+'.js' );
							grunt.log.writeln('`'+currDep+'` dependency added');
						} else {
							grunt.fail.warn('`'+currDep+'` dependency does not exist');
						}
					}

				}

			}

			//push method into files to include array
			incFilesArr.push( 'src/methods/'+method+'.js' );
			grunt.log.ok('`'+method+'` method added');

		}

		//append footer
		incFilesArr.push('src/footer.js');

		//set files to include array as variable
		grunt.config.set('concat.methodsToInc', incFilesArr);

		//concat to dist/ then uglify that file and delete to unuglified file
		grunt.task.run(['concat:filtered','uglify:filtered','shell:rmCustomConcat']);

		grunt.log.writeln();
		grunt.log.writeln('temporary file deleted');
		grunt.log.ok('custom build created in dist/');
	});

}