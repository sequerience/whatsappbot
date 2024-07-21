const {check, validationResult} = require('express-validator');

exports.sendMessageRequest = [
    check('phone')
        .notEmpty()
        .isNumeric()
        .bail(),
    check('code')
        .notEmpty()
        .isLength({min: 4, max: 10})
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        console.log('errors', errors)
        if (!errors.isEmpty())
            return res.status(422).json({errors: errors.array()});
        next();
    },
];
