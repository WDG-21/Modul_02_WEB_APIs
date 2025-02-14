// 1 Die setTimeout()-Funktion erlaubt uns, eine bestimmte Funktion nach einer festgelegten Zeit auszuführen.

// Syntax: setTimeout(callbackFunction, delayInMiliSeconds)

// callbackFunction: Die Funktion, die ausgeführt wird.
// delayInMilliseconds: Die Zeit in Millisekunden, nach der die Funktion ausgeführt wird.

setTimeout(() => {
  console.log('you will see this after 3 second');
}, 3000);

const button = document.getElementById('myButton');
button.disabled = true;

setTimeout(() => {
  button.disabled = false;
  console.log('Button is now active');
}, 5000);

button.addEventListener('click', () => alert('I AM FREEEE!'));

// 2 setInterval(): Eine Funktion wiederholt ausführen
// Die setInterval()-Funktion führt eine Funktion immer wieder in bestimmten Zeitabständen aus.

// Syntax : setInterval(callbackFunction, intervalMiliSeconds)

// callbackFunction: Die Funktion, die ausgeführt wird.
// intervalInMilliseconds: Der Abstand in Millisekunden, nach dem die Funktion immer wieder ausgeführt wird.

setInterval(() => {
  console.log('You will see this every second');
}, 1000);

// 3. clearTimeout() & clearInterval()
// Manchmal wollen wir eine geplante oder wiederholte Aktion stoppen.

// clearTimeout(timeoutID) stoppt ein setTimeout():

const timeoutID = setTimeout(() => {
  console.log('you will never see this');
}, 5000);

clearTimeout(timeoutID); // Der Timer wird gestoppt, bevor er ausgeführt wird

// clearInterval(intervalID) stoppt ein setInterval():

const intervalID = setInterval(() => {
  console.log('I will never end');
}, 1000);

setTimeout(() => {
  clearInterval(intervalID); // Stoppt die Wiederholung nach 5 Sekunden
  console.log('Interval was stopped');
}, 5000);

// Zusammenfassung
// setTimeout() führt eine Funktion nach einer Verzögerung einmal aus.
// setInterval() führt eine Funktion wiederholt aus.
// clearTimeout() stoppt eine setTimeout()-Funktion, bevor sie ausgeführt wird.
// clearInterval() stoppt eine setInterval()-Funktion.

function greet() {
  console.log('Hello WDG21');
}

setTimeout(greet, 5000);

function updateClock() {
  let time = new Date();
  document.getElementById('clock').textContent = time.toLocaleTimeString();
}

setInterval(updateClock, 1000);
