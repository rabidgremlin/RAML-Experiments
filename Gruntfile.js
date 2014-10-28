var formats = require('tv4-formats');

module.exports = function(grunt) {
  
  grunt.loadNpmTasks('grunt-tv4');
  
  grunt.initConfig({
    tv4:{
        todo:{
				options: {            
					root:grunt.file.readJSON('apidef/todo.json'),
					formats:formats,
				},				
				src: ['apidef/todo_example.json']
		},
		todos:{
				options: {            
					root:grunt.file.readJSON('apidef/todos.json'),
					formats:formats,
				},				
				src: ['apidef/todos_example.json']
		},
	}	
  });
  
  grunt.registerTask('default', ['tv4']);
};