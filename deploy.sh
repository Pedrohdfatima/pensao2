#!/bin/bash

# Nome do repositório no GitHub
REPO_NAME="pensao"

# Diretório de saída
OUTPUT_DIR="docs"

echo "🔧 Limpando build anterior..."
rm -rf $OUTPUT_DIR

echo "⚙️  Gerando build com baseHref /$REPO_NAME/ ..."
ng build --output-path $OUTPUT_DIR --base-href "/$REPO_NAME/"

echo "✅ Build finalizado. Pronto para GitHub Pages em /$OUTPUT_DIR"

echo "📦 Commitando alterações..."
git add .
git commit -m "Deploy para GitHub Pages"

echo "🚀 Enviando para o GitHub..."
git push origin main

echo "🌐 Acesse seu site em: https://pedrohdfatima.github.io/pensao/"
