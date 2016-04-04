var express 			= require('express'),
	passport			= require('passport'),
	// crypto				= require('crypto'),
	redditStrategy		= require('passport-reddit').Strategy,
	port				= process.env.PORT || 8080,
	morgan				= require('morgan'),
	bodyParser			= require('body-parser'),
	session				= require('express-session'),
	handlebars			= require('express-handlebars'),
	app 				= express(),
	http				= require('http'),
	https 				= require('https'),
	rawjs				= require('raw.js'),
	reddit 				= new rawjs('rawjs example script'),

	consumer_key		= 'WxtRyRiGVbiL8A',
	consumer_secret		= 'xJNj7utuQyRTcGGqH-xQQlqpTGM',
	redirect			= 'http://localhost:8080',
	request				= require('request'),
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
		callbackURL: 'http://localhost:8080/auth/reddit/callback',
		state: true
	},
	function(accessToken, refreshToken, profile, done){
		// console.log(accessToken);
		// getUserInfo(accessToken);
		console.log(accessToken);
		console.log(profile);
		process.nextTick(function(){
			return done(null, profile);
		});
	}
));

function getUserInfo(token){
	var defaults = {
		"domain": "https://oauth.reddit.com",
		"method": "GET",
		"path": "/api",
		"endpoint": "account"
	};
	var options = {};
	options.domain = defaults.domain;
	options.path = defaults.path;
	options.endpoint = defaults.endpoint;

	var req = {
		"uri": options.domain + options.path + '/' + options.endpoint,
		"method": options.method,
		"form": options.form,
		"qs": options.qs,
		"headers": options.headers,
		"auth": options.auth
	};
}

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	secret: 'garbanzo_bean',
	resave: false,
	saveUninitialized: false,
	// cookie: {domain: 'localhost:8080/'}
}));
app.use(passport.initialize());
app.use(passport.session());
//app.engine('handlebars', handlebars({defaultLayout: 'main'}));
//app.set('view engine', 'handlebars');

app.get('/account', function(req, res){

	if(!req.user){res.redirect('/');return;}
	// console.log(req.user);
	// console.log("profile: " + req.profile);
	// request('https://www.reddit.com/r/videos/comments/4ashfl.json', function(err, res, body){
	// 	if(err){
	// 		console.log(err);
	// 		return;
	// 	}
	// 	console.log(res + body);
	// });
	res.redirect('/#/account');
	// res.render('account', {user: req.user});
});

app.get('/login', passport.authenticate('reddit'));

app.get('/auth/reddit', passport.authenticate('reddit'));

app.get('/auth/reddit/callback', passport.authenticate('reddit',
{
	successRedirect: '/account',
	failureRedirect: '/'
}));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.redirect('/index.html');
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
