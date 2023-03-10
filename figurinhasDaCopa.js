function iniciar() {
    //variaveis
    const MIN_NUMERO_FIGURINHAS = 1, MAX_NUMERO_FIGURINHAS = 100, MAX_NUMERO_FIGURINHAS_COMPRADAS = 300;
    let numeroTotalFigurinhas, totalFigurinhasCarimbadas, totalFigurinhasCompradas;
    let figurinhasCarimbadas = [];
    let figurinhasCompradas = [];
    let figCarimbadasFaltantes = [];
    let carimbadasFaltam;
    //Total de figurinhas do album
    numeroTotalFigurinhas = Number(prompt("Qual é o numero total de figurinhas do album?"));
    while (numeroTotalFigurinhas < MIN_NUMERO_FIGURINHAS || numeroTotalFigurinhas > MAX_NUMERO_FIGURINHAS) {
        numeroTotalFigurinhas = Number(prompt(`O número total: ${numeroTotalFigurinhas} é invalido.\nDigite um total valido entre 1 e 100:`));
    }
    //Total figuras carimbadas
    totalFigurinhasCarimbadas = Number(prompt("Qual é o número de figurinhas carimbadas do álbum?"));
    while (totalFigurinhasCarimbadas < MIN_NUMERO_FIGURINHAS || totalFigurinhasCarimbadas > numeroTotalFigurinhas / 2) {
        totalFigurinhasCarimbadas = Number(prompt(`O número total de figurinhas carimbadas: ${totalFigurinhasCarimbadas} é invalido.\nDigite um valor valido:`));
    }
    //Total figurinhas compradas
    totalFigurinhasCompradas = Number(prompt("Quantas figurinhas foram compradas?"));
    while (totalFigurinhasCompradas < MIN_NUMERO_FIGURINHAS || totalFigurinhasCompradas > MAX_NUMERO_FIGURINHAS_COMPRADAS) {
        totalFigurinhasCompradas = Number(prompt(`O número total de figurinhas compradas: ${totalFigurinhasCompradas} é invalido.\nDigite um valor valido:`));
    }

    //Explicita quais figurinhas carimbadas a pessoa possui.
    for (let i = 0; i < totalFigurinhasCarimbadas; i++) {
        let figurinhaCarimbada = parseInt(prompt(`Digite o numero da ${i + 1}º figurinha carimbada:`));
        figurinhasCarimbadas.push(figurinhaCarimbada);
    }
    //Explicita quais figurinhas a pessoa possui.
    for (let i = 0; i < totalFigurinhasCompradas; i++) {
        let figurinhaComprada = parseInt(prompt(`Digite o numero da ${i + 1}º figurinha figurinha comprada:`));
        figurinhasCompradas.push(figurinhaComprada);
    }
    
    figurinhasCompradas.filter(function (element) {
        if (figurinhasCarimbadas.includes(element)) { // se for encontrado um valor nos dois arrays
            figCarimbadasFaltantes.push(element);// adicionando a figurinha carimbada
        }
    });
    //Especifica quantas carimbadas faltam
    carimbadasFaltam = totalFigurinhasCarimbadas - figCarimbadasFaltantes.length;
    alert(`Faltam ${carimbadasFaltam}.`);
}






