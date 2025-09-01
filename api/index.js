export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  
  // Check if request is from Roblox HttpService
  if (userAgent.includes('Roblox') || userAgent.includes('HttpService')) {
    // Return the real script with auth token for Roblox
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
