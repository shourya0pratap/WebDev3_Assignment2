const logger = (req, _, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}]: ${req.method} ${req.url}`);
  next();
};

module.exports = logger;