import { useEffect, useState } from 'react';
import './App.css';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

export default function App() {
	const [todo, setTodo] = useState(() => {
		let localStorageValue = sessionStorage.getItem('Items');
		if (localStorageValue === null) return [];

		return JSON.parse(localStorageValue);
	});

	useEffect(() => {
		sessionStorage.setItem('Items', JSON.stringify(todo));
	}, [todo]);

	function addTodo(title) {
		setTodo((currentTodos) => {
			return [
				...currentTodos,
				{
					id: crypto.randomUUID(),
					title,
					completed: false,
				},
			];
		});
	}

	function toggleTodo(id, completed) {
		setTodo((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed };
				}
				return todo;
			});
		});
	}

	function deleteTodo(id) {
		setTodo((currentTodos) => {
			return currentTodos.filter((todo) => todo.id !== id);
		});
	}

	return (
		<>
			<h1 className='header'>Todo List</h1>
			<NewTodoForm addTodo={addTodo} />
			<h2 className='subHeader'>Lists</h2>
			<TodoList todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</>
	);
}
