const clickAudio = document.querySelector('.click-audio')
const video = document.querySelector('video')
const startButton = document.querySelector('#startButton')

let students1 = [
  'Amira',
  'Bashayer',
  'Hasan',
  'Husain',
  'Kawthar',
  'Majid',
  'Dawood',
  'Noor',
  'S.Ebrahim'
]

let students2 = [
  'Raja',
  'Roaa',
  'Sami',
  'Saud',
  'S.Ali',
  'Abbas',
  'Zahra',
  'Zainab A',
  'Zainab S'
]

let s1 = ''
let s2 = ''
let dance01 = document.querySelector('.dance1')
let dance02 = document.querySelector('.dance2')
let dance03 = document.querySelector('.dance3')

// let mainDiv = document.querySelector('.flex-con')

// mainDiv.appendChild(dance01)
// mainDiv.appendChild(dance02)
// mainDiv.appendChild(dance03)

const randm = () => {
  let index = Math.floor(Math.random() * students1.length)
  s1 = students1[index]
  console.log(s1)
  students1.splice(index, 1)
  console.log(students1.length)
  clickAudio.play()
  x.innerHTML = ''
  setTimeout(() => {
    x.innerHTML = s1;
    dance01.setAttribute('src', '../img/dance 1.gif')
    dance02.setAttribute('src', '../img/dance 2.gif')
    dance03.setAttribute('src', '../img/dance 4.gif')
  }, 7700)

  setTimeout(() => {
    dance01.setAttribute('src', '')
    dance02.setAttribute('src', '')
    dance03.setAttribute('src', '')
  }, 36000)
  
  randm2()
  return s1
}
const randm2 = () => {
  let index = Math.floor(Math.random() * students2.length)
  s2 = students2[index]
  console.log(s2)
  students2.splice(index, 1)
  console.log(students2.length)
  y.innerHTML = ''
  setTimeout(() => {y.innerHTML = s2}, 7700)
  
  return s2
}

const playVideo = () => {
  video.play()
  setTimeout(() => {window.location.href = 'game.html'}, 25000)
}

// document.querySelector('button').addEventListener(clic, randm())

const x = document.querySelector('.s1')
const y = document.querySelector('.s2')




// randm()
// console.log(randm());
// console.log(randm());
