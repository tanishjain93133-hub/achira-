const app = require('../admin-backend/src/index.js');

module.exports = (req, res) => {
  // When Vercel executes rewrites, req.url may be rewritten to '/api/index.js' or '/api'
  // Recover original requested path from Vercel headers if available
  let originalPath = req.headers['x-matched-path'] || req.headers['x-forwarded-uri'] || req.headers['x-original-uri'] || req.url || '';
  
  if (originalPath) {
    // Strip query string for prefix comparison
    const [pathname, search] = originalPath.split('?');
    let fixedPath = pathname;
    if (!fixedPath.startsWith('/api')) {
      fixedPath = '/api' + (fixedPath.startsWith('/') ? fixedPath : '/' + fixedPath);
    }
    // If path is just '/api' or '/api/' or '/api/index.js', route to /api/health
    if (fixedPath === '/api' || fixedPath === '/api/' || fixedPath === '/api/index.js' || fixedPath === '/api/index') {
      fixedPath = '/api/health';
    }
    req.url = fixedPath + (search ? '?' + search : '');
  }

  return app(req, res);
};

