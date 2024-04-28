var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/google',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    }
));

router.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
    }
));

router.get('/google/success', (req, res, next) => {
    console.log(req?.session?.passport?.user?.name)
    res.send('Welcome ' + req?.session?.passport?.user?.name + '!');
});

router.get('/google/failure', (req, res, next) => {
    res.send('You have failed to log in');
}
);




module.exports = router;