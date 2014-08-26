module.exports = function (grunt)
{

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		settings: {
			filename: 'browserkit'
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
				src: ['src/init.js', 'src/methods/*.js', 'src/footer.js'],
				dest: 'tests/<%= settings.filename %>-<%= pkg.version %>.js'
			},
			filtered: {
				src: '<%= concat.methodsToInc %>',
				dest: 'dist/<%= settings.filename %>-<%= pkg.version %>-temp.custom.js'
			}
		},
		uglify: {
		    all: {
		      files: {
		        'dist/<%= settings.filename %>-<%= pkg.version %>.min.js': 'tests/<%= settings.filename %>-<%= pkg.version %>.js'
		      }
		    },
		    filtered: {
		      files: {
		        'dist/<%= settings.filename %>-<%= pkg.version %>.custom.min.js': 'dist/<%= settings.filename %>-<%= pkg.version %>-temp.custom.js',
		      }
		    }
  		},
  		shell: {
	        rmCustomConcat: {
	            command: 'rm dist/<%= settings.filename %>-<%= pkg.version %>-temp.custom.js'
	        }
    	},
		watch: {
			options: {
			    livereload: true,
			},
		  	js: {
		  		files: ['src/init.js', 'src/methods/*.js', 'src/footer.js'],
		  		tasks: ['concat:all']
		  	}
		},
		jshint: {
			options: {
				browser: true, //Web Browser (window, document, etc)
    			strict: true, //Requires all functions run in ES5 Strict Mode
    			unused: true, //Require all defined variables be used
    			undef: true, //Require all non-global variables to be declared (prevents global leaks)
    			quotmark: 'single', //Quotation mark consistency
    			camelcase: true, //Identifiers must be in camelCase
    			eqeqeq: true, //Require triple equals (===) for comparison
    			forin: true, //Require filtering for..in loops with obj.hasOwnProperty()
    			immed: true, //Require immediate invocations to be wrapped in parens e.g. `(function () { } ());`
    			indent: 4, //Number of spaces to use for indentation
    			latedef: true, //Require variables/functions to be defined before being used
    			newcap: true, //Require capitalization of all constructor functions e.g. `new F()`
    			noarg: true, //Prohibit use of `arguments.caller` and `arguments.callee`
    			noempty: true, //Prohibit use of empty blocks
    			maxparams: 3, //Max number of formal params allowed per function
    			maxdepth: 4, //Max depth of nested blocks (within functions)
    			predef: ['FastButton']
			},
    		concatenated: 'tests/<%= settings.filename %>-<%= pkg.version %>.js'
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

	//travis
	grunt.registerTask('travis', ['concat:all','jshint','uglify:all']);

	//distribute
	grunt.registerTask('mergemin', ['concat:all','jshint','uglify:all']); //generates file in dist/ and then uglifies
	grunt.registerTask('custom', 'Custom build Browserkit by choosing the methods you need like e.g. `grunt custom:ajax,classes,eventslisteners`', function(options){
		var optionsArr = options.split(','),

			//create array to store what files to import
			//along with the files to prepend
			incFilesArr = ['src/init.js'],

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