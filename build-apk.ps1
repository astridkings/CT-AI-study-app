param(
    [string]$AppName = "CT-AI Study",
    [string]$PackageName = "com.astridkings.ctaistudy",
    [string]$WebsiteUrl = "https://astridkings.github.io/CT-AI-study-app",
    [string]$OutputDir = "apk-output"
)

Write-Host "1) Verificando pasta de saída..."
if (-Not (Test-Path $OutputDir)) { New-Item -ItemType Directory -Path $OutputDir | Out-Null }

Write-Host "2) Gerando APK via pwa2apk..."

# Verifica se pwa2apk está instalado
if (-not (Get-Command pwa2apk -ErrorAction SilentlyContinue)) {
    Write-Host "pwa2apk não encontrado. Instalando global..."
    npm install -g pwa2apk
}

pwa2apk --url $WebsiteUrl --name $AppName --package $PackageName --output $OutputDir --icon "icon-192.png"

Write-Host "3) APK gerado em $OutputDir (se a ferramenta suportar a conversão)."