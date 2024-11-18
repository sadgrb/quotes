// Local onde as frases serão exibidas
const quoteDisplay = document.getElementById("quote-display");

// Função para buscar e exibir as quotes
async function loadQuotes() {
  try {
    // Buscando o arquivo JSON
    const response = await fetch("quotes.json");
    const quotes = await response.json();

    // Seleciona uma frase aleatória
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex].quote;

    // Exibe a frase
    quoteDisplay.textContent = `"${randomQuote}"`;
  } catch (error) {
    quoteDisplay.textContent = "Erro ao carregar frases.";
  }
}

// Chama a função ao carregar a página
loadQuotes();
