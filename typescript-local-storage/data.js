'use strict';
let todos = [];
// Stores todos to localStorage
function writeTodos(todos) {
  // Converts todos into a JSON string
  const todosJSON = JSON.stringify(todos);
  // Transfers data to localStorage
  localStorage.setItem('todos-storage', todosJSON);
}
// Retrieves todos from localStorage
function readTodos() {
  const todosJSON = localStorage.getItem('todos-storage');
  // Throws error is todosJSON returns null
  if (!todosJSON) throw new Error('todosJSON does not exist');
  // Converts JSONstring into a Todo array
  todos = JSON.parse(todosJSON);
  return todos;
}
// Replaces todos for persistent data
todos = readTodos();
