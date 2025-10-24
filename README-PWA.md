# 📱 Gestione Bagagli - PWA

L'app è stata trasformata in una **Progressive Web App (PWA)**!

## ✨ Cosa significa?

Ora puoi:
- ✅ **Installare l'app** come se fosse nativa sul tuo telefono o computer
- ✅ **Usarla offline** senza connessione internet
- ✅ **Accesso rapido** dalla home screen con icona dedicata
- ✅ **Esperienza full-screen** senza barra del browser

## 🚀 Come installare

### Su Android (Chrome/Edge):
1. Apri il sito nel browser
2. Apparirà un banner con "Installa l'app sul tuo dispositivo!"
3. Clicca su "Installa"
4. L'icona apparirà nella home screen

### Su iPhone/iPad (Safari):
1. Apri il sito in Safari
2. Tocca il pulsante "Condividi" (quadrato con freccia)
3. Scorri e seleziona "Aggiungi a Home"
4. Conferma

### Su Desktop (Chrome/Edge):
1. Apri il sito nel browser
2. Clicca sull'icona di installazione nella barra degli indirizzi (⊕)
3. Oppure vai su Menu → "Installa Gestione Bagagli"

## 🎨 Generare le Icone

**IMPORTANTE:** Prima di usare la PWA, devi generare le icone:

1. Apri il file `genera-icone.html` nel browser
2. Scarica entrambe le icone (192x192 e 512x512)
3. Salva i file nella stessa cartella di `index.html`
4. I nomi devono essere esattamente: `icon-192.png` e `icon-512.png`

Puoi sostituire queste icone con immagini personalizzate, basta che abbiano le dimensioni corrette.

## 🔧 File Aggiunti

- `manifest.json` - Configurazione della PWA (nome, icone, colori)
- `service-worker.js` - Gestisce la cache per l'uso offline
- `genera-icone.html` - Utility per generare le icone
- `README-PWA.md` - Questa guida

## 💾 Funzionamento Offline

Tutti i tuoi dati sono salvati nel browser (localStorage), quindi:
- ✅ Funziona offline
- ✅ I dati persistono anche chiudendo l'app
- ✅ Export/import per backup o condivisione

## 🐛 Risoluzione Problemi

**L'installazione non appare?**
- Assicurati di usare HTTPS (o localhost per test)
- Verifica che le icone siano state generate e salvate
- Ricarica la pagina (Ctrl+F5)

**Non funziona offline?**
- Apri la pagina almeno una volta con internet
- Il service worker deve essere registrato (controlla la console)

**Come disinstallare?**
- Android: Tieni premuta l'icona → "Disinstalla"
- iPhone: Tieni premuta l'icona → "Rimuovi app"
- Desktop: Vai nelle impostazioni dell'app → "Disinstalla"

## 📝 Note Tecniche

- Cache version: `bagagli-v1`
- Service Worker registrato in: `./service-worker.js`
- Manifest: `./manifest.json`
- Supporto: Tutti i browser moderni (Chrome, Edge, Safari, Firefox)

---

Buon viaggio con la tua lista bagagli! ✈️
