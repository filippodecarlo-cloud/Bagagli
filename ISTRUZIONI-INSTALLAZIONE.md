# 🚀 Come installare la PWA - Guida Completa

## ⚠️ IMPORTANTE: La PWA richiede un server web!

Non puoi semplicemente aprire `index.html` con doppio click. Devi usare un server locale.

---

## 📋 Passo 1: Genera le Icone

1. **Apri `genera-icone.html`** nel browser (doppio click va bene per questo)
2. **Clicca sui due pulsanti** per scaricare:
   - `icon-192.png`
   - `icon-512.png`
3. **Salva entrambe le icone** nella stessa cartella di `index.html`

---

## 🌐 Passo 2: Avvia il Server Locale

Scegli il metodo più adatto al tuo sistema:

### 🪟 Su Windows:

#### Metodo automatico:
1. **Doppio click su `AVVIA-SERVER.bat`**
2. Si apre una finestra nera (prompt dei comandi)
3. Apri il browser e vai su: **http://localhost:8000**

#### Metodo manuale:
1. Apri **Prompt dei comandi** nella cartella del progetto
2. Digita: `python -m http.server 8000`
3. Apri il browser e vai su: **http://localhost:8000**

### 🍎 Su Mac/Linux:

#### Metodo automatico:
1. Apri **Terminale** nella cartella del progetto
2. Digita: `chmod +x AVVIA-SERVER.sh` (solo la prima volta)
3. Digita: `./AVVIA-SERVER.sh`
4. Apri il browser e vai su: **http://localhost:8000**

#### Metodo manuale:
1. Apri **Terminale** nella cartella del progetto
2. Digita: `python3 -m http.server 8000`
3. Apri il browser e vai su: **http://localhost:8000**

---

## 📱 Passo 3: Installa l'App

Una volta aperto http://localhost:8000 nel browser:

1. **Aspetta qualche secondo**
2. **Vedrai apparire un banner colorato** in basso con scritto:
   > 📱 Installa l'app sul tuo dispositivo!
3. **Clicca "Installa"**
4. L'app si aprirà come applicazione standalone!

### Se il banner non appare:

#### Chrome/Edge Desktop:
- Guarda nella **barra degli indirizzi** (in alto a destra)
- C'è un'**icona di installazione** ⊕ o un simbolo del computer
- Cliccala e seleziona "Installa"

#### Chrome Android:
- Vai su **Menu** (⋮) → **Installa app**

#### Safari iPhone/iPad:
- Tocca **Condividi** → **Aggiungi a Home**

---

## 🔍 Risoluzione Problemi

### ❌ "Python non è riconosciuto come comando"
**Soluzione:** Installa Python da [python.org](https://www.python.org/downloads/)

### ❌ Il banner non appare
**Controlla:**
1. Stai usando `http://localhost:8000` (NON file:///)
2. Le icone sono nella cartella (icon-192.png e icon-512.png)
3. Apri la **Console** del browser (F12) e cerca errori

### ❌ "Impossibile connettersi"
- Il server è in esecuzione?
- Prova un'altra porta: `python -m http.server 8080`

---

## 🎯 Alternative al Server Python

### Opzione 1: Live Server (VS Code)
1. Installa Visual Studio Code
2. Installa l'estensione "Live Server"
3. Click destro su `index.html` → "Open with Live Server"

### Opzione 2: Node.js http-server
```bash
npm install -g http-server
cd /percorso/cartella/Bagagli
http-server
```

### Opzione 3: Hostare su GitHub Pages
1. Vai su GitHub → Impostazioni repository
2. Abilita GitHub Pages
3. L'app sarà accessibile su: `https://tuousername.github.io/Bagagli`

---

## ✅ Verifica Installazione Riuscita

Dopo l'installazione:
- ✅ Icona dell'app nella home screen / menu Start
- ✅ Si apre in finestra separata (senza barra browser)
- ✅ Funziona anche offline (chiudi il server e riapri l'app)

---

## 🆘 Serve aiuto?

Se hai problemi:
1. Apri la Console del browser (premi F12)
2. Cerca messaggi di errore rossi
3. Controlla che tutti i file siano nella stessa cartella
4. Assicurati di usare un browser moderno (Chrome, Edge, Safari)

---

Buon viaggio! ✈️
