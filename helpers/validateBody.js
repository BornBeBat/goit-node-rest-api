const { HttpError } = require("./HttpError.js");

const validateBody = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      if (error.message === '"value" must have at least 1 key') {
        error.message = "Body must have at least one field";
      }
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = { validateBody };
