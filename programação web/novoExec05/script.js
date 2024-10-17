function ResultadoNota(){
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const resultadoM = document.getElementById("resultado");

    resultadoM.value = nota1 * nota2 * nota3 / 3;

    if (resultadoM >= 6){
        resultadoM.value = 'você está APROVADO parabéns'
    } else if (resultadoM >= 3 && resultadoM < 6){
        resultadoM.value = 'Voce terá que fazer um EXAME'
    }else {
        resultadoM.value = 'sinto muito, REPROVADO'
    }
    console.log("olá mundo");
}