
document.addEventListener("DOMContentLoaded", function () {
  
  // 1. Seleciona todos os elementos que vamos usar
  const modal = document.getElementById("modal-termos");
  const btnAbrirModal = document.getElementById("btnAbrirTermos");
  const btnCancelar = document.getElementById("btnCancelarTermos");
  const btnConfirmar = document.getElementById("btnConfirmarTermos");
  const checkboxTermos = document.getElementById("aceito-termos");

  // 2. Quando o usuário clicar em "Enviar Reserva"
  btnAbrirModal.addEventListener("click", function (event) {
    // Impede que o formulário seja enviado (comportamento padrão)
    event.preventDefault(); 
    
    // Mostra o modal removendo a classe ".hidden"
    modal.classList.remove("hidden"); 
  });

  // 3. Quando o usuário clicar em "Cancelar" dentro do modal
  btnCancelar.addEventListener("click", function () {
    // Esconde o modal adicionando a classe ".hidden" de volta
    modal.classList.add("hidden"); 
  });

  // 4. Quando o usuário marcar ou desmarcar o checkbox
  checkboxTermos.addEventListener("change", function () {
    // Se o checkbox estiver MARCADO
    if (checkboxTermos.checked) {
      // Habilita o botão de confirmar
      btnConfirmar.disabled = false;
    } else {
      // Se não, desabilita o botão
      btnConfirmar.disabled = true;
    }
  });

  // 5. Quando o usuário clicar em "Confirmar Reserva"
  btnConfirmar.addEventListener("click", function () {
    // Esconde o modal
    modal.classList.add("hidden");

  
    
    // Desmarca o checkbox
    checkboxTermos.checked = false; 
    // Desabilita o botão de confirmar novamente
    btnConfirmar.disabled = true; 

    // Avisa o usuário (só para teste)
    alert("Reserva enviada para análise! (Simulação)");
  });

});