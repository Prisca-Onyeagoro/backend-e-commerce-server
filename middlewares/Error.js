import ErrorHandler from '../utils/ErrorHandlers.js';

const Error = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  //   err.message = err.message || 'Internal server error';
  if (process.env.NODE_ENV === 'DEVELOPMENT') {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      errormessage: err.message,
      stack: err.stack,
    });
  }
  if (process.env.NODE_ENV === 'PRODUCTION') {
    let error = { ...err };

    error.message = err.message;
    //wrong mongoose objectid error
    if (err.name === 'castError') {
      const message = `Resource not found. Invalid: ${err.path}`;
      error = new ErrorHandler(message, 400);
    }

    // Handling mongoose validation error
    if (err.name === 'validationError') {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new ErrorHandler(message, 400);
    }

    res.status(error.statusCode).json({
      success: false,
      message: error.message || 'Internal server error',
    });
  }
};

export default Error;
