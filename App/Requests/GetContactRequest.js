const {check, validationResult} = require('express-validator');

exports.getContactRequest = [
    check('phone')
        .notEmpty()
        .isNumeric()
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        console.log('errors', errors)
        if (!errors.isEmpty())
            return res.status(422).json({errors: errors.array()});
        next();
    },
];