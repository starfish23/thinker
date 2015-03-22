Router.route('/', function () {
  this.render('home');
});
Router.route('/doc', function(){
	this.render('textmain');
});
	Router.route('/playground', function(){
	this.render('playground');
	
	
});