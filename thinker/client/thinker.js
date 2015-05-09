Router.configure({ layoutTemplate: 'layout' });

Router.route('/', function () {
this.render('home');
});


Router.route('/doc', function(){
this.render('textmain');
});


Router.route('/playground', function(){
this.render('playground');
});


Router.route('/logintest', function () {
this.render('logintest');
});


Router.route('/createuser', function () {
this.render('createuser');
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

Router.route('/about', function () {
this.render('about');
});

Router.route('/parchment',function(){
this.render('parch');
});
