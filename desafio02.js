
tempoChegada = [1 ,-3 , 4, -2, 0, -4, -10, 5, -7, 15, -20, -15, 7, -8, 9, -5]
limiteAlunos = 10


startClass(tempoChegada, limiteAlunos)


function startClass(tempo, limite) {
   let start = tempo.filter((item) =>{
        return item <= 0
   })
    start.length >= limite? console.log("Aula normal") : console.log("Aula cancelada")   
}

