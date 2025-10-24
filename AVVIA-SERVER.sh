#!/bin/bash

echo "========================================"
echo "  Avvio server locale per PWA Bagagli"
echo "========================================"
echo ""
echo "Il server sta partendo..."
echo "Apri il browser e vai su: http://localhost:8000"
echo ""
echo "Per fermare il server premi CTRL+C"
echo "========================================"
echo ""

# Prova con Python 3
python3 -m http.server 8000 2>/dev/null

# Se Python 3 non funziona, prova Python 2
if [ $? -ne 0 ]; then
    python -m SimpleHTTPServer 8000
fi
