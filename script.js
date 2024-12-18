// Selecionar elementos importantes
const ratingButtons = document.querySelectorAll('.rating-btn');
const submitButton = document.getElementById('submit-btn');
const ratingState = document.getElementById('rating-state');
const thankYouState = document.getElementById('thank-you-state');
const selectedRatingDisplay = document.getElementById('selected-rating');

let selectedRating = 0; // Armazena a avaliação selecionada

// Adicionar evento de clique em cada botão de avaliação
ratingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remover a classe "active" de todos os botões
    ratingButtons.forEach((btn) => btn.classList.remove('active'));

    // Adicionar a classe "active" ao botão clicado
    button.classList.add('active');

    // Atualizar o valor da avaliação selecionada
    selectedRating = button.getAttribute('data-value');
  });
});

// Adicionar evento de clique no botão de envio
submitButton.addEventListener('click', () => {
  if (selectedRating > 0) {
    // Exibir o estado "Thank You" com a avaliação selecionada
    selectedRatingDisplay.textContent = selectedRating;
    ratingState.style.display = 'none';
    thankYouState.style.display = 'block';
  } else {
    // Alerta caso nenhuma avaliação tenha sido selecionada
    alert('Please select a rating before submitting!');
  }
});
