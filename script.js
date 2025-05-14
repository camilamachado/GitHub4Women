let questions = [];

fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questions = data;
        renderQuestions();
    });

function renderQuestions() {
    const container = document.getElementById('questions-container');
    questions.forEach(q => {
        const div = document.createElement('div');
        div.classList.add('question');
        div.dataset.question = q.id;

        let html = `<p>${q.text}</p>`;
        for (const [key, value] of Object.entries(q.options)) {
            html += `
        <label>
          <input type="radio" name="${q.id}" value="${key}">
          ${value}
          <span class="feedback-inline" data-feedback="${q.id}-${key}"></span>
        </label>
      `;
        }

        div.innerHTML = html;
        container.appendChild(div);
    });
}

document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let correct = 0;
    let wrong = 0;
    const total = questions.length;

    document.querySelectorAll('.feedback-inline').forEach(el => {
        el.textContent = '';
        el.className = 'feedback-inline';
    });

    questions.forEach(q => {
        const userAnswer = formData.get(q.id);

        ['a', 'b', 'c'].forEach(option => {
            const feedbackSpan = document.querySelector(`[data-feedback="${q.id}-${option}"]`);
            if (option === q.answer && userAnswer === option) {
                feedbackSpan.textContent = '✅ Resposta correta!';
                feedbackSpan.classList.add('correct');
                correct++;
            } else if (option === q.answer) {
                feedbackSpan.textContent = '✅ Resposta correta!';
                feedbackSpan.classList.add('correct');
            } else if (option === userAnswer) {
                feedbackSpan.textContent = '❌ Resposta errada.';
                feedbackSpan.classList.add('wrong');
                wrong++;
            }
        });
    });

    const percentage = Math.round((correct / total) * 100);
    document.getElementById('result').innerHTML = `
    <p>Você acertou <strong>${correct}</strong> e errou <strong>${wrong}</strong>.</p>
    <p class="percentage">🏁 Porcentagem de acerto: ${percentage}%</p>
  `;
});
