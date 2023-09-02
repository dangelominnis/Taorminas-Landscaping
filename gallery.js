// photo gallery
const body = document.body
const photos = document.querySelectorAll('.photo')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activePhoto = 0

rightBtn.addEventListener('click', () => {
  activePhoto++

  if (activePhoto > photos.length - 1) {
    activePhoto = 0
  }

  setBgToBody()
  setActivePhotos()
})


leftBtn.addEventListener('click', () => {
  activePhoto--

  if (activePhoto < 0 ) {
    activePhoto = photos.length - 1
  }

  setBgToBody()
  setActivePhotos()
})

setBgToBody()


function setBgToBody() {
  body.style.backgroundImage = photos[activePhoto].style.backgroundImage
}

function setActivePhotos() {
  photos.forEach((photo) => photo.classList.remove('active'))

  photos[activePhoto].classList.add('active')
}