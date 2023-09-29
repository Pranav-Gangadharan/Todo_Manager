import TodoItem from '../components/TodoItem';

export default function TodoList({ todo, toggleTodo, deleteTodo }) {
	return (
		<ul className='list'>
			{todo.length === 0 && 'No Todos'}
			{todo.map((todo) => {
				return (
					<TodoItem
						{...todo} //!passes id,completed,title
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
						key={todo.id}
					/>
				);
			})}
		</ul>
	);
}
