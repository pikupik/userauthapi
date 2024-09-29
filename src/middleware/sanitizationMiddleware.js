const sanitize = require('sanitize-html');

const sanitizeInput = (req, res, next) => {
  // Sanitasi body
  if (req.body) {
    req.body = sanitizeObject(req.body);
  }

  // Sanitasi query parameters
  if (req.query) {
    req.query = sanitizeObject(req.query);
  }

  // Sanitasi URL parameters
  if (req.params) {
    req.params = sanitizeObject(req.params);
  }

  next();
};

// Fungsi untuk membersihkan semua string dalam objek
const sanitizeObject = (obj) => {
  const sanitizedObj = {};
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'string') {
      sanitizedObj[key] = sanitize(obj[key], {
        allowedTags: [], // Tidak mengizinkan tag HTML
        allowedAttributes: {}, // Tidak mengizinkan atribut HTML
      });
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      sanitizedObj[key] = sanitizeObject(obj[key]); // Rekursif untuk objek dalam objek
    } else {
      sanitizedObj[key] = obj[key];
    }
  });
  return sanitizedObj;
};

module.exports = sanitizeInput;
