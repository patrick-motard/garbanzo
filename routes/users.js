var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    console.log(req.app.settings.services);
    var user = req.app.settings.services.user;

    return user.getUsers().then(users => {
        res.json(users);
    })
});


router.post('/create', (req, res, next) => {
    res.send('Sorry, not implemented yet');
})

module.exports = router;
