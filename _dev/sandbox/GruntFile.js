module.exports = function (grunt)
{

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: "/*\n// @name: Browserkit.js\n// @version: 1.1.1\n// \n// Copyright 2014 Koen Vendrik, http://kvendrik.com\n// Licensed under the MIT license\n*/\n\n"
			},
			build: {
				src: ['<banner>', 'src/polyfills/*.js', 'src/init.js', 'src/methods/*.js', 'src/footer.js'],
				dest: '<%= pkg.name %>-dev.min.js'
			}
		},
		concat: {
			options: {
				separator: "\n\n"
			},
			dist: {
				src: ['src/polyfills/*.js', 'src/init.js', 'src/methods/*.js', 'src/footer.js'],
				dest: '<%= pkg.name %>-dev.js'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	//tasks
	grunt.registerTask('default', ['concat']);

}