// ... (código existente acima permanece igual)

document.getElementById("quizForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let score = 0;
    let output = "";
  
    for (let key in correctAnswers) {
      const question = document.querySelector(`input[name="${key}"]:checked`);
      const correct = correctAnswers[key];
  
      if (question) {
        const userAnswer = question.value;
        const label = question.parentElement;
        if (userAnswer === correct) {
          label.classList.add("correct");
          score++;
          output += `Questão ${key.slice(1)}: ✔️ Correta<br>`;
        } else {
          label.classList.add("incorrect");
          const correctLabel = document.querySelector(`input[name="${key}"][value="${correct}"]`).parentElement;
          correctLabel.classList.add("correct");
          output += `Questão ${key.slice(1)}: ❌ Incorreta (Correta: ${correct})<br>`;
        }
      } else {
        output += `Questão ${key.slice(1)}: ❌ Não respondida<br>`;
      }
    }
  
    output += `<br><strong>Você acertou ${score} de 5 perguntas!</strong><br><br>`;
    output += `<button id="resetQuiz" style="margin-top: 15px; background: #c71585;">Refazer Quiz</button>`;
    document.getElementById("result").innerHTML = output;
  
    // Adiciona o listener ao botão de reset
    document.getElementById("resetQuiz").addEventListener("click", function () {
      document.getElementById("quizForm").reset();
      document.getElementById("result").innerHTML = "";
  
      // Remove classes de cor
      document.querySelectorAll(".correct, .incorrect").forEach(el => {
        el.classList.remove("correct", "incorrect");
      });
  
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  