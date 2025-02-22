// Holt den Input, den add-Button und die To-Do-Liste
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Holt alle Elemente mit der Klasse 'items'
const byClassName = document.getElementsByClassName('items'); // HTML Collection
console.log(byClassName);

// Holt das erste <li> Element innerhalb des Elements mit der ID 'listItem'
const querySelector = document.querySelector('#listItem li'); // gibt das erste Element zurück ==> <li>Hey</li>
console.log(querySelector);

// Holt alle <li> Elemente innerhalb des Elements mit der ID 'listItem'
const items = document.querySelectorAll('#listItem li'); // NodeList
console.log(items);
items.forEach((item) => console.log(item.textContent));

// Funktion zum Hinzufügen einer nueu Aufgabe zur To-Do-Liste
function addTodo(task) {
  // Erstellt ein neues Listenelement (li)
  const li = document.createElement('li');

  // Setzt den Textinhalt des Listenelements auf die übergebene Aufgabe
  li.textContent = task;

  // Erstellt einen neuen Button zum Löschen der Aufgabe
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  // Fügt den Delete-Button zum Listenelement hinzu
  li.appendChild(deleteBtn);

  // Fügt das Listenelement zur To-Do-Liste hinzu, um es im DOM anzuzeigen
  todoList.appendChild(li);
}

// Event Listener für den 'Add' Button, um eine neue Aufgabe hinzuzufügen
addTodoBtn.addEventListener('click', () => {
  // Holt den Wert aus dem Input und entfernt überflüssige Leerzeichen mit trim Methode
  const task = todoInput.value.trim();

  // Prüft, ob der Wert nicht leer ist
  if (task) {
    addTodo(task); // Fügt die Aufgabe zur To-Do-Liste hinzu
    todoInput.value = ''; // Leert das Input
    todoInput.focus(); // Setzt den Fokus zurück auf das Input
  } else {
    alert('You cannot submit an empty task'); // Warnung bei leerer Eingabe
  }
});

// Event Listener für die To-Do-Liste zum Löschen von Aufgaben
todoList.addEventListener('click', (e) => {
  // Überprüft, ob das Ziel des Klicks ein BUTTON-Element ist => tagName gibt in Großbuchstaben zurück
  if (e.target.tagName === 'BUTTON') {
    // Entfernt das Elternelement (li) des geklickten Buttons aus dem DOM
    e.target.parentElement.remove();
  }
});
