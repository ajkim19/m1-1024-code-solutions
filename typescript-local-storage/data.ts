/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = [];

// Stores todos to localStorage
function writeTodos(todos: Todo[]): void {
  // Converts todos into a JSON string
  const todosJSON = JSON.stringify(todos);

  // Transfers data to localStorage
  localStorage.setItem('todos-storage', todosJSON);
}

// Retrieves todos from localStorage
function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem('todos-storage');

  // Throws error if todosJSON returns null
  if (!todosJSON) throw new Error('todosJSON does not exist');

  // Converts JSONstring into a Todo array
  todos = JSON.parse(todosJSON);

  return todos;
}

console.log(writeTodos(todos));
// Replaces todos for persistent data
todos = readTodos();
