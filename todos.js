const todosContainer = document.querySelector('.todos-cards')

function getCardTodos({ title, completed }) {
	return `
	<div class='todos-card'>
		<h3>${title}</h3>
		<p>${completed}</p>
	</div>
  `
}

async function getUser() {
	let todosId = localStorage.getItem('usersId')
	todosContainer.innerHTML = '...loading'
	let res = await fetch(
		`https://jsonplaceholder.typicode.com/users/${todosId}/todos`
	)
	let todos = await res.json()
	console.log(todos)
	todosContainer.innerHTML = ''
	todos.forEach(element => {
		todosContainer.innerHTML += getCardTodos(element)
	})
  // let todosCheck = todos.filter(el => el.completed === true)
  // let todosFalse = todos.filter(el => el.completed === false)
  
}

getUser()
