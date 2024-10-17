function Calcularparcelas() {
    // obtendo os valores 
    const valortotal = parseFloat(document.getElementById("valor").value);
    const quantidadedeparcelas = parseFloat(document.getElementById("parcelas").value);
    // verificação 
    if (isNaN(valortotal) || isNaN(quantidadedeparcelas) || quantidadedeparcelas <= 0){
        document.getElementById("resultado").innerText = "Porfavor, insira valores validos"
        return;
    }

    // Aqui será a tebala de juros 
    let valorParcela;
    if (quantidadedeparcelas === 1){
        valorParcela = valortotal;
    } else if (quantidadedeparcelas === 2){
        valorParcela = valortotal * 1.03 / quantidadedeparcelas; // 3% de juros 
    } else if (quantidadedeparcelas === 4){
        valorParcela = valortotal * 1.07 / quantidadedeparcelas;
    }else {
        valorParcela = valortotal * 1.07 / quantidadedeparcelas; // para outras parcelas 
    }

    // mostrando resultado
    document.getElementById("resultado").innerText = `Valor de cada parcela: R$ ${valorParcela.toFixed(2)}`;

}