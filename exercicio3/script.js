// Originais
let arrayNumeros = [3,1,5,6]
let arrayStrings = ["bolo","pizza","cafe"]
let arrayAleatoria = [2,7,"uva","morango",true ,false]

// Crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`
arrayNumerosCopia = arrayNumeros.slice()
arrayStringsCopia = arrayStrings.slice()
arrayAleatoriaCopia = arrayAleatoria.slice()

// Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayNumerosCopia.push("number")
console.log("Copia", arrayNumerosCopia)
console.log("Original",arrayNumeros)

// Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
arrayStringsCopia.pop()
console.log("Copia",arrayStringsCopia)
console.log("Original",arrayStrings)

// Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayAleatoriaCopia.splice(1,1)
console.log("Copia",arrayAleatoriaCopia)
console.log("Original",arrayAleatoria)
