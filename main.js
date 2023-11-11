
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
  } else if (age > 100) {
  alert('НЕ ВЕРЮ!!!!')
  }
}
//своя работа
function prostotak () {
  let a = prompt('введите катет(а)')
  let b = prompt('введите катет(b)')
  let a2 = a*a 
  let b2 = b*b
  if (a2 > 0 && b2 > 0)
  {
    alert(a2+b2)
  }

}