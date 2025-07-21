document.getElementById('submit-btn').addEventListener('click', function () {
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    let score = 0;
  
    // Iterate through answers and calculate score
    for (const [key, value] of formData.entries()) {
      score += parseInt(value, 10);
    }
  
    // Show result
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('score').textContent = score;
  });
  