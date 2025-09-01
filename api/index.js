export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  
  // Check if request is from Roblox HttpService
  if (userAgent.includes('Roblox') || userAgent.includes('HttpService')) {
    // Return script that points to your Render app
    res.setHeader('Content-Type', 'text/plain');
    return res.status(200).send('loadstring(game:HttpGet("https://aux-hub.onrender.com"))()');
  } else {
    // Return HTML page with exact design from image
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Script Loader</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            background-image: url('https://raw.githubusercontent.com/dark-Age3/ZyXn/main/file_000000007ed8622f85bb72f7397748bd.png');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            position: relative;
        }
        
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(10px);
            z-index: -1;
        }
        
        .container {
            background: rgba(30, 30, 30, 0.95);
            border-radius: 20px;
            padding: 40px;
            max-width: 600px;
            width: 100%;
            text-align: center;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
        }
        
        .title {
            font-size: 2.5em;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 30px;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        
        .code-container {
            background: rgba(20, 20, 20, 0.9);
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 25px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            overflow-x: auto;
            overflow-y: hidden;
        }
        
        .code-line {
            font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
            font-size: 16px;
            line-height: 1.6;
            text-align: left;
            user-select: all;
            white-space: nowrap;
            min-width: max-content;
        }
        
        .loadstring { color: #ff6b9d; }
        .parenthesis { color: #c792ea; }
        .game { color: #82aaff; }
        .colon { color: #ffffff; }
        .method { color: #82aaff; }
        .string { color: #c3e88d; }
        
        .copy-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        
        .copy-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
        }
        
        .copy-btn:active {
            transform: translateY(0);
        }
        
        .copied {
            background: linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%) !important;
            box-shadow: 0 4px 15px rgba(86, 171, 47, 0.4) !important;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 30px 20px;
            }
            
            .title {
                font-size: 2em;
            }
            
            .code-line {
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="title">Script Loader</h1>
        
        <div class="code-container">
            <div class="code-line">
                <span class="loadstring">loadstring</span><span class="parenthesis">(</span><span class="game">game</span><span class="colon">:</span><span class="method">HttpGet</span><span class="parenthesis">(</span><span class="string">"https://404-hub.vercel.app/api/script"</span><span class="parenthesis">))()</span>
            </div>
        </div>
        
        <button class="copy-btn" onclick="copyScript()">Copy</button>
    </div>
    
    <script>
        function copyScript() {
            const script = 'loadstring(game:HttpGet("https://404-hub.vercel.app/api/script"))()';
            const btn = document.querySelector('.copy-btn');
            
            navigator.clipboard.writeText(script).then(() => {
                btn.textContent = 'Copied!';
                btn.classList.add('copied');
                
                setTimeout(() => {
                    btn.textContent = 'Copy';
                    btn.classList.remove('copied');
                }, 2000);
            }).catch(() => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = script;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                btn.textContent = 'Copied!';
                btn.classList.add('copied');
                
                setTimeout(() => {
                    btn.textContent = 'Copy';
                    btn.classList.remove('copied');
                }, 2000);
            });
        }
        
        // Add some interactive effects
        document.addEventListener('DOMContentLoaded', () => {
            const container = document.querySelector('.container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                container.style.transition = 'all 0.8s ease';
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 100);
        });
    </script>
</body>
</html>`);
  }
}
