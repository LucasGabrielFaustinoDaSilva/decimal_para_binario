function resultado() {
    const input = document.getElementById('number');
    const resultDiv = document.getElementById('result');
    
    const decimal = parseInt(input.value, 10);

    if (isNaN(decimal)) {
        resultDiv.innerHTML = '<p style="color: red;">Por favor, digite um número válido.</p>';
        return;
    }

    const binario = decimal.toString(2);
    resultDiv.innerHTML = `<p>O número <strong>${decimal}</strong> em binário é <strong>${binario}</strong>.</p>`;
}
