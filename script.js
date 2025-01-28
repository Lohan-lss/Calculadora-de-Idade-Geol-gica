document.getElementById("calculatorForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const years = document.getElementById("years").value;
    
    if (years && !isNaN(years) && years > 0) {
        const result = calculateGeologicalAge(years);
        document.getElementById("result").innerText = `A idade geológica estimada é de ${result} milhões de anos.`;
    } else {
        document.getElementById("result").innerText = "Por favor, insira um número válido de milhões de anos.";
    }
});

function calculateGeologicalAge(years) {
    // Para fins de exemplo, estamos retornando o valor inserido.
    // Você pode modificar esta função para fazer cálculos mais complexos.
    return years;
}
