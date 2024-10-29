/*
1)Imprime los números del 1 al 10
2)Imprime los números pares del 2 al 20
3)Imprime los números impares del 1 al 19
4)Imprime los números del 10 al 1 en orden inverso
5)Imprime los números del 1 al 10, pero se detiene al llegar al 5 BREAK
6)Imprime los números del 1 al 10, pero salta el 5 CONTINUE
*/
/*
console.log("1)Imprime los números del 1 al 10")
for(let i=1; i<11;i++){
    console.log(i)
}
console.log("2)Imprime los números pares del 2 al 20")
for(let i=1; i<11;i++){
    console.log(i*2)
}
console.log("3)Imprime los números impares del 1 al 19")
for(let i=0; i<10;i++){
    console.log(2*i+1)
}

console.log("4)Imprime los números del 10 al 1 en orden inverso")
for(let i = 0; i < 10;i++){
    console.log(10-i)
}
console.log("5)Imprime los números del 1 al 10, pero se detiene al llegar al 5 BREAK")
for(let i = 1; i <= 10; i++){
    if(i===5){
        break
    }
    console.log(i)
}
console.log("6)Imprime los números del 1 al 10, pero salta el 5 CONTINUE")
for(let i = 1; i <= 10; i++){
    if(i === 5){
        continue
    }
    console.log(i)
}
    
    */
   function sayHi () {
    alert("Hi")
   }

   sayHi()
function preguntarNombre () {
    let nombre_de_usuario = prompt("Cual es tu nombre?");
    alert(`Tu nombre es ${nombre_de_usuario}`)
}
preguntarNombre()