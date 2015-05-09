
Router.configure({ layoutTemplate: 'layout' });

Router.route('/compiler', function() {
this.render('compiler');
});


Router.route('/', function () {
this.render('home');
});


Router.route('/doc', function(){
this.render('textmain');
});


Router.route('/playground', function(){
this.render('playground');
});


Router.route('/supersecret', function () {
this.render('supersecret');
});


Router.route('/userprofile', function () {
this.render('userprofile');
});


Router.route('/unlogged_home', function () {
this.render('unlogged_home');
});


Router.route('/parchment',function(){
this.render('parch');
});


Router.route('/user',function(){
this.render('user');
});


Router.route('/tutorials',function(){
this.render('tutorials');
});
