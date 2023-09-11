let students1 = [
  'Abbas',
  'Amira',
  'Bashayer',
  'Hasan',
  'Husain',
  'Kawthar',
  'Majid',
  'Dawood',
  'Noor'
]

let students2 = [
  'Raja',
  'Roaa',
  'Sami',
  'Saud',
  'S.Ali',
  'S.Ebrahim',
  'Zahra',
  'Zainab A',
  'Zainab S'
]

let s1 = ''
let s2 = ''

const randm = () => {
  let index = Math.floor(Math.random() * students1.length)
  s1 = students1[index]
  console.log(s1)
  students1.splice(index, 1)
  console.log(students1.length)
  x.innerHTML = s1
  randm2()
  return s1
}
const randm2 = () => {
  let index = Math.floor(Math.random() * students2.length)
  s2 = students2[index]
  console.log(s2)
  students2.splice(index, 1)
  console.log(students2.length)
  y.innerHTML = s2
  return s2
}

// document.querySelector('button').addEventListener(clic, randm())

const x = document.querySelector('.s1')
const y = document.querySelector('.s2')




// randm()
// console.log(randm());
// console.log(randm());
