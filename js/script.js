const clickAudio = document.querySelector('.click-audio')
const video = document.querySelector('video')
const startButton = document.querySelector('#startButton')
const remained = document.querySelector('.remain')
const nextButton = document.querySelector('.nextButton')

///////////////////////////////////////////////////////
// MAKE SURE TO KEEP THE NUMBER OF STUDENTS EVEN NUMBER
///////////////////////////////////////////////////////
let students = [
  'Salman',
  'Bashayer',
  'Hasan',
  'Husain',
  'Majid',
  'Dawood',
  'S.Ebrahim',
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

const x = document.querySelector('.s1')
const y = document.querySelector('.s2')

let spinInterval = null

const randm = () => {
  if (students.length === 0) {
    remained.innerHTML = 'Relax bro, the game is over!'
    x.innerHTML = 'GAME'
    y.innerHTML = 'OVER'
    return
  }

  let index1 = Math.floor(Math.random() * students.length)
  s1 = students[index1]
  // console.log(s1)
  students.splice(index1, 1)

  if (students.length > 0) {
    let index2 = Math.floor(Math.random() * students.length)
    s2 = students[index2]
    // console.log(s2)
    students.splice(index2, 1)
  } else {
    s2 = ''
  }
  if (students.length >= 0) {
    remained.innerHTML = students.length + ' Remains'
  } else {
    remained.innerHTML = 'Relax bro, the game is over!'
  }

  clickAudio.play()
  nextButton.disabled = true
  x.innerHTML = ''
  y.innerHTML = ''
  clearInterval(spinInterval)
  spinInterval = setInterval(() => {
    if (students.length === 0) return

    const a = students[Math.floor(Math.random() * students.length)]
    let b = a
    if (students.length > 1) {
      while (b === a) b = students[Math.floor(Math.random() * students.length)]
    }

    x.innerHTML = a
    y.innerHTML = b
  }, 90)

  console.log('Made By Salman Murtaza')

  if (students.length > 0 || s1 || s2) {
    setTimeout(() => {
      clearInterval(spinInterval)
      x.innerHTML = s1
      y.innerHTML = s2

      dance01.setAttribute('src', 'img/dance 1.gif')
      dance02.setAttribute('src', 'img/dance 2.gif')
      dance03.setAttribute('src', 'img/dance 4.gif')
    }, 7700)

    setTimeout(() => {
      nextButton.disabled = false
      dance01.setAttribute('src', '')
      dance02.setAttribute('src', '')
      dance03.setAttribute('src', '')
    }, 36000)

    return s1
  } else {
    x.innerHTML = 'GAME'
    y.innerHTML = 'OVER'
  }
}

// const playVideo = () => {
//   video.play()
//   setTimeout(() => {
//     window.location.href = 'game.html'
//   }, 25000)
// }
