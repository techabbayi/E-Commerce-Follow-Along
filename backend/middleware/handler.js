const handler = (err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
  };
  
  module.exports = handler;
  