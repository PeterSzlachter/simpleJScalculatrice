let numberOne
let numberTwo
let result = 0
let play = true

function askNumber() {
   do {
    numberOne = Number(prompt('Choisir un premier nombre'))
    console.log(typeof(numberOne))
   }
   while (isNaN(numberOne))
   do {
    numberTwo = Number(prompt('Choisir un deuxieme nombre'))
    console.log(typeof(numberTwo))
   }
   while (isNaN(numberTwo))
}

function askCalcul() {
  do {
  var choice = Number(prompt("Que souhaitez-vous faire ?\n\n1 - Addition\n2 - Multiplication\n3 - Soustraction\n4 - Division\n"))
   console.log(result)
  } while(choice != 1 && choice != 2 && choice != 3 && choice != 4)
  console.log(choice)
  askNumber()
  console.log(numberOne)
  console.log(numberTwo)
  console.log(typeof(choice))
  switch (choice)
  {
    case 1:
       result = numberOne + numberTwo
    break
    case 2:
       result = numberOne * numberTwo
    break
    case 3:
       result = numberOne - numberTwo
    break
    case 4:
      if(nombreB == 0) {
        throw new Error("Impossible de diviser par 0 !")
      }
       result = numberOne / numberTwo
    break
    default: 
        throw new Error("Une erreur est survenue.")
  }
  alert(`Le résultat de votre calcul est ${result}`)
}

do {
  askCalcul()
  play = confirm("Recommencer ?")
}
while(play)