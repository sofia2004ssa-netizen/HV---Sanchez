param([int]$Port = 3000)

$dir = Split-Path -Parent $MyInvocation.MyCommand.Path

$mimeTypes = @{
  '.html' = 'text/html; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.js'   = 'text/javascript; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'
  '.ico'  = 'image/x-icon'
  '.png'  = 'image/png'
  '.jpg'  = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.svg'  = 'image/svg+xml'
  '.woff2'= 'font/woff2'
  '.woff' = 'font/woff'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")

try {
  $listener.Start()
} catch {
  Write-Host ""
  Write-Host "  ERROR: Could not start the server on port $Port." -ForegroundColor Red
  Write-Host "  Make sure port $Port is not in use." -ForegroundColor Yellow
  Write-Host ""
  Read-Host "  Press Enter to exit"
  exit 1
}

Write-Host ""
Write-Host "  +------------------------------------------+" -ForegroundColor Cyan
Write-Host "  |   Ana Sofia Sanchez Rojas - Portfolio    |" -ForegroundColor Cyan
Write-Host "  +------------------------------------------+" -ForegroundColor Cyan
Write-Host "  |                                          |" -ForegroundColor Cyan
Write-Host "  |   http://localhost:$Port                    |" -ForegroundColor Green
Write-Host "  |                                          |" -ForegroundColor Cyan
Write-Host "  +------------------------------------------+" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Server running. Press Ctrl+C to stop." -ForegroundColor Gray
Write-Host ""

Start-Process "http://localhost:$Port"

try {
  while ($listener.IsListening) {
    $context  = $listener.GetContext()
    $request  = $context.Request
    $response = $context.Response

    $urlPath = $request.Url.LocalPath
    if ($urlPath -eq '/') { $urlPath = '/index.html' }

    $filePath = Join-Path $dir ($urlPath.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar))

    Write-Host ("  " + $request.HttpMethod + " " + $urlPath) -ForegroundColor DarkGray

    if (Test-Path $filePath -PathType Leaf) {
      $ext     = [System.IO.Path]::GetExtension($filePath).ToLower()
      $mime    = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { 'application/octet-stream' }
      $content = [System.IO.File]::ReadAllBytes($filePath)

      $response.StatusCode      = 200
      $response.ContentType     = $mime
      $response.ContentLength64 = $content.Length
      $response.OutputStream.Write($content, 0, $content.Length)
    } else {
      $body = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $urlPath")
      $response.StatusCode      = 404
      $response.ContentType     = 'text/plain; charset=utf-8'
      $response.ContentLength64 = $body.Length
      $response.OutputStream.Write($body, 0, $body.Length)
    }

    $response.Close()
  }
} finally {
  $listener.Stop()
  $listener.Close()
  Write-Host ""
  Write-Host "  Server stopped." -ForegroundColor Yellow
}
