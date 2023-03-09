const photosContainer = document.querySelector('.photos-cards')

function getCardPhotos({ title, url, thumbnailUrl }) {
	return `
  <div class="photos-card">
    <h3>${title}</h3>
    <img src=${url} alt="">
    <img src=${thumbnailUrl} alt="">
  </div>
  `
}

let page = 1
let limit = 30

async function getUser() {
	let photosId = localStorage.getItem('usersId')
	photosContainer.innerHTML = '...loading'
	let res = await fetch(
		`https://jsonplaceholder.typicode.com/users/${photosId}/photos?_page=${page}&_limit=${limit}`
	)
	let photos = await res.json()
	photosContainer.innerHTML = ''
	photos.forEach(element => {
		photosContainer.innerHTML += getCardPhotos(element)
	})
	// let albumCheck = photos.filter(el => el.completed === true)
	// let albumFalse = photos.filter(el => el.completed === false)
}

getUser()
