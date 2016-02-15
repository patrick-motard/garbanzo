var express 			= require('express'),
	passport			= require('passport'),
	crypto				= require('crypto'),
	redditStrategy		= require('passport-reddit').Strategy,
	port				= process.env.PORT || 8080,
	morgan				= require('morgan'),
	bodyParser			= require('body-parser'),
	session				= require('express-session'),
	handlebars			= require('express-handlebars'),
	app 				= express(),

	consumer_key		= 'WxtRyRiGVbiL8A',
	consumer_secret		= 'xJNj7utuQyRTcGGqH-xQQlqpTGM',
	state = "";


passport.serializeUser(function(user,done){
	done(null, user);
});

passport.deserializeUser(function(obj, done){
	done(null, obj);
});

passport.use(new redditStrategy({
		clientID: consumer_key,
		clientSecret: consumer_secret,
		callbackURL: 'http://localhost:8080/auth/reddit/callback'
	},
	function(accessToken, refreshToken, profile, done){
		console.log(accessToken);
		console.log(profile);
		process.nextTick(function(){
			return done(null, profile);
		});
	}
));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	secret: 'garbanzo_bean',
	resave: false,
	saveUninitialized: false,
	cookie: {domain: 'localhost:8080/'}
}));
app.use(passport.initialize());
app.use(passport.session());
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function(req, res){
	res.render('home', {user: req.user});
});

app.get('/account', ensureAuthenticated, function(req, res){
	res.render('acount', {user: req.user});
});

app.get('/login', function(req, res){
	res.render('login', { user: req.user});
});

app.get('/auth/reddit', function(req, res, next){
	req.session.state = crypto.randomBytes(32).toString('hex');
	console.log(req.session.state);
	state = req.session.state;
	passport.authenticate('reddit', {
		state: req.session.state,
		duration: 'permanent'
	})(req, res, next);
});

app.get('/auth/reddit/callback', function(req, res, next){
	console.log('-----------query state-----------------');
	console.log(req.query.state);
	console.log('-----------session state-----------------');
	console.log(req.session);
	console.log(req.session.state);
	console.log('----------------------------');
	if(state === req.query.state){console.log('CHICKEN SOUP FOR THE ANGRY DEVELOPERS SOUL');}
	if(req.query.state === req.session.state){
		passport.authenticate('reddit', {
			successRedirect: '/',
			failureRedirect: '/login'
		});
	} else {
		next(new Error(403));
	}
});

app.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
});

app.listen(8080);

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){ return next();}
	res.redirect('/login');
}
