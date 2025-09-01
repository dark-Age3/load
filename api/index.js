export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  const acceptHeader = req.headers['accept'] || '';
  
  // Check if request is from Roblox HttpService AND is being executed (not just fetched)
  if (userAgent.includes('Roblox') || userAgent.includes('HttpService')) {
    
    // Additional check: if someone is trying to inspect the response
    // by using setclipboard() or print(), they usually don't set proper headers
    if (acceptHeader.includes('text/plain') || req.headers['content-type']) {
      // Likely someone trying to inspect the response
      res.setHeader('Content-Type', 'text/plain');
      return res.status(403).send('FORBIDDEN');
    }
    
    // Return the real script with auth token for legitimate Roblox execution
    res.setHeader('Content-Type', 'text/plain');
    return res.status(200).send('loadstring(game:HttpGet("https://404-hub.vercel.app/api/script?auth=zRkaP4c15osmNs27us"))()');
  } else {
    // Return HTML page showing fake script for browsers
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(`<!DOCTYPE html>
<html>
<head>
    <title>Script Loader</title>
</head>
<body>
    <pre>loadstring(game:HttpGet("https://404-hub.vercel.app/api/script"))()</pre>
</body>
</html>`);
  }
}
