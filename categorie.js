// ============================================================
//  LISTA DEI BAGAGLI
// ============================================================
// Questo file contiene tutte le categorie e gli oggetti di default.
// È pensato per essere modificato facilmente: aggiungi, togli o
// rinomina le voci qui sotto senza toccare il resto dell'app.
//
// Come funziona:
//   - Ogni categoria ha un'icona (emoji) e una lista "items".
//   - Per aggiungere un oggetto: scrivi "Nome Oggetto" dentro items,
//     separato da una virgola dagli altri.
//   - Per aggiungere una categoria nuova: copia un blocco esistente
//     (dalla virgola prima del nome fino alla parentesi graffa }).
//
// Attenzione:
//   - Usa le virgolette dritte "  (non "virgolette curve").
//   - Metti la virgola tra una voce e l'altra, ma NON dopo l'ultima
//     voce della lista (quella subito prima della parentesi ]).
// ============================================================

const categories = {
  "Vestiti": {
    icon: "👕",
    items: [
      "Calzini", "Mutande", "Magliette", "Ciabatte Mare/Casa", "Camice",
      "Felpa", "Vestito Completo", "Cappellino", "Canottiera",
      "Scarpe Ginnastica", "Pantaloncini", "Pantaloni", "Scarpe Normali",
      "Pigiama", "Occhiali da vista"
    ]
  },
  "Sport": {
    icon: "⚽",
    items: [
      "Calzini Sport", "Costume", "Cuffia per piscina", "Scarpe trekking",
      "Calzinin lana", "Poncho o k-way", "Palla calcio volley",
      "Bastoni montagna", "Tenda spiaggia", "Tappi orecchie nuoto"
    ]
  },
  "Biancheria": {
    icon: "🛏️",
    items: [
      "Sacco Pelo", "Lenzuoli", "Asciugamano", "Accappatoio", "Canovaccio"
    ]
  },
  "Cibo": {
    icon: "🍽️",
    items: [
      "Cibo Viaggio", "Sale", "Olio", "Aceto", "Cipolla", "Aglio",
      "Detersivo Piatti", "Contenitori merende", "Termos Caffè", "Red Bull"
    ]
  },
  "Beauty": {
    icon: "💄",
    items: [
      "Occhiali Sole", "Spazzolino", "Dentifricio", "Saponetta", "Profumo",
      "Deodorante", "Shampoo", "Cuffia per doccia", "Crema Solare", "Phon",
      "Pomate e medicinali", "Detersivo", "Filo Per Stendere", "Mollette",
      "Forbicine", "Ago/Filo", "Attak", "Collirio", "Cerotti", "Cotone idrofilo",
      "Assorbenti inizio", "Assorbenti fine", "Trusse", "Burro di cacao",
      "Rasoio", "Schiuma da barba", "Pennello da barba", "Cotton Fiok", "Tappi orecchie", "Spazzola",
      "Detergente intimo", "Spugna", "Fazzolettini", "Termometro", "Autan",
      "Salviettine detergenti", "Lenti a contatto", "Caricatore smartwatch",
      "Vitamine", "Reparil"
    ]
  },
  "Utilità": {
    icon: "🔧",
    items: [
      "Scotch", "Adattatore prese estere", "Sveglia", "Accendino",
      "Coltellino multiuso", "Soldi", "Documenti", "Biglietti treno",
      "Kit dormire treno", "Macchina Foto", "Libri", "Agenda Indirizzi",
      "Penna", "Astuccio", "Chitarra", "Spartiti", "Vape", "Chiavi Case",
      "Ombrello", "Marsupio", "Walkman", "Telefonino", "Caricabatterie",
      "Drone", "Torcia", "Guida Turistica", "Borraccia", "Lucchetto Con Chiave",
      "Binocolo", "Zaino", "Carta igienica", "PC Portatile", "Macchina foto digitale",
      "Carte", "Scacchi", "Palloncini (attaccapanni)", "Federa (cuscino aereo)",
      "Sacchetti cuky", "Sacchetty vuoti", "Busta trasparente", "Ipad",
      "Monopiede", "Auricolari", "Caricatore portatile", "Zaino bimbo",
      "Mascherine", "Cuscino Franci", "Passeggino"
    ]
  },
  "Partenza": {
    icon: "🚪",
    items: [
      "Chiudere Acqua Luce Gas", "Frigo Vuoto E Aperto", "Spazzatura",
      "Finestre Chiuse", "Spengere caldaia", "Spengere ADSL", "Acqua tergicristalli auto", "Spostare auto"
    ]
  }
};
