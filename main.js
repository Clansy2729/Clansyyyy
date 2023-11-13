//почему тут ничего не было
// let pass = 'AkV';
// let writePass = prompt('vvedite parol')

// if (pass == writePass) {
//     alert('Верно')
//     } else {
//   alert('неверно')
// }
//задание 2
let c = 13
if( c > 0 && c < 10)
{
console.log('верно')
}
else{
  console.log('неверно')
}
//задание 3
let d = 45
let e = 1078
if( d > 100 || e > 100)
{
console.log('верно')
}
else{
  console.log('неверно')
}
//задание 4
function socopros () {
  let age = prompt('введите возраст')
  if (age == 0 || age < 0) {
    alert('неверное число')
  } else if(age > 0 && age < 12) {
    alert('ты крутыш')
  }else if( age == 18 || age > 18)
  {
    alert('ничего себе')
  } 
}
//своя работа
function gipotenuza () {
  let a = prompt('введите катет(а)')
  let b = prompt('введите катет(b)')
  let a2 = a*a 
  let b2 = b*b
  if (a2 > 0 && b2 > 0)
  {
    alert(a2+b2)
  }
}
function stepen_2_10 () {
let num = prompt('введите основание')
let numstep = prompt('введите показатель от 2 до 10')
if (numstep == 2) {
  alert(num*num)
} else if(numstep == 3){
  alert(num*num*num)
} else if(numstep == 4) {
  alert(num*num*num*num)
} else if(numstep == 5) {
  alert(num*num*num*num*num)
} else if(numstep == 6) {
  alert(num*num*num*num*num*num)
} else if(numstep == 7) {
  alert(num*num*num*num*num*num*num)
} else if(numstep == 8) {
  alert(num*num*num*num*num*num*num*num)
} else if(numstep == 9) {
  alert(num*num*num*num*num*num*num*num*num)
} else if(numstep == 10) {
  alert(num*num*num*num*num*num*num*num*num*num)
} else if(numstep < 2 || numstep > 10) {
  alert('неверное число')
}
}
// домашнее задание 7
function chet_nechet () {
  let num7 = prompt('введите число')
  let chetn = 2
  if (num7 % 2 == 0) {
    alert('Четное число')
  } else {
    alert('нечетное число')
  }
}