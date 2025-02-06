const newH1 = document.createElement('h1');
newH1.textContent = 'Hello DOM';
newH1.style.color = 'blue';

document.body.appendChild(newH1);

// Wichtig: Ohne appendChild existiert das h1-Element nur in der JavaScript-Datei und wird nicht im DOM angezeigt.
// Durch appendChild fügen wir es dem DOM hinzu, damit es auf der Webseite sichtbar wird.

// Funktion zum Erstellen eines h1-Elements
function createH1Element() {
  // Erstellt ein neues h1-Element
  const h1 = document.createElement('h1');

  // Setzt den Textinhalt des h1-Elements
  h1.textContent = 'Hello World!';

  // Setzt die Farbe des h1-Elements auf Blau
  h1.style.color = 'red';

  // Fügt das h1-Element zum body-Element hinzu
  document.body.appendChild(h1);
}

// Holt den Button
const createH1Btn = document.getElementById('create-h1-btn');

// Fügt einen Event Listener zum Button hinzu, um auf Click-Ereignisse zu reagieren => wenn gelickt, createH1Element Funktion wird ausgeführt.
createH1Btn.addEventListener('click', createH1Element);
