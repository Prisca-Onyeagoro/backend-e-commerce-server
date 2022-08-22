// module.exports = (func) => (req, res, next) =>
//   Promise.resolve(func(req, res, next)).catch(next);

const CatchAsyncErrors = (func) => (req, res, next) =>
  Promise.resolve(func(req, res, next)).catch(next);

export default CatchAsyncErrors;
