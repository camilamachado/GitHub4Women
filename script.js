const answers = {
    q1: 'b',
    q2: 'b'
};

document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let correct = 0;
    let wrong = 0;
    const total = Object.keys(answers).length;

    // Limpa feedbacks anteriores
    document.querySelectorAll('.feedback-inline').forEach(el => {
        el.textContent = '';
        el.className = 'feedback-inline';
    });

    for (const [question, correctAnswer] of Object.entries(answers)) {
        const userAnswer = formData.get(question);

        ['a', 'b', 'c'].forEach(option => {
            const feedbackSpan = document.querySelector(`[data-feedback="${question}-${option}"]`);
            if (option === correctAnswer && userAnswer === option) {
                feedbackSpan.textContent = '✅ Resposta correta!';
                feedbackSpan.classList.add('correct');
                correct++;
            } else if (option === correctAnswer) {
                feedbackSpan.textContent = '✅ Resposta correta!';
                feedbackSpan.classList.add('correct');
            } else if (option === userAnswer) {
                feedbackSpan.textContent = '❌ Resposta errada.';
                feedbackSpan.classList.add('wrong');
                wrong++;
            }
        });
    }

    const percentage = Math.round((correct / total) * 100);

    document.getElementById('result').innerHTML = `
      <p>Você acertou <strong>${correct}</strong> e errou <strong>${wrong}</strong>.</p>
      <p class="percentage">🏁 Porcentagem de acerto: ${percentage}%</p>
    `;
});
