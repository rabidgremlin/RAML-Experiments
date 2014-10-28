var formats = require('tv4-formats');

module.exports = function(grunt) {
  
  grunt.loadNpmTasks('grunt-tv4');
  grunt.loadNpmTasks('grunt-raml2html');
  
  grunt.initConfig({
   /* tv4:{
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
	},*/
	raml2html: {
		options: {},
		api:{
              files:{		
			'dest/api.html': ['apidef/api.raml']}		
			}
	}	
  });
  
  //TODO work this into Grunt to build JAX-RS stubs see https://github.com/mulesoft/raml-for-jax-rs/blob/master/command-line.md
  //java -cp raml-to-jax-rs.jar org.raml.jaxrs.codegen.core.Launcher  -basePackageName com.rabidgremlin.todo  -outputDirectory dest/java -sourceDirectory apidef
  
  grunt.registerTask('default', ['raml2html']);
};