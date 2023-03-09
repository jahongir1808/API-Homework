const postContainer = document.querySelector('.post-cards')

function getCardPost({ title, body, id }) {
	return `
  <div class="post-card">
    <h3>${title}</h3>
    <p>${body}</p>
    <div class='post-btn'>
      <a href='comments.html' onclick='savePostId(${id})'>Comments</a>
    </div>
  </div>
  `
}

async function getUser() {
	let postId = localStorage.getItem('usersId')
	postContainer.innerHTML = '...loading'
	let res = await fetch(
		`https://jsonplaceholder.typicode.com/users/${postId}/posts`
	)
	let post = await res.json()
	postContainer.innerHTML = ''
	post.forEach(element => {
		postContainer.innerHTML += getCardPost(element)
	})
}

getUser()
