function validateDto(ajvValidate) {
    return (req, res, next) => {
        const valid = ajvValidate(req.body);
        if (!valid) {
            const errors = ajvValidate.errors;
            return res.status(400).send(errors);
        }
        next();
    }
}

module.exports = validateDto;