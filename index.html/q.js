const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result-text');

quizForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Retrieve selected answers
  const q1Answer = quizForm.elements['q1'].value;
  const q2Answer = quizForm.elements['q2'].value;
  const q3Answer = quizForm.elements['q3'].value;
  const q4Answer = quizForm.elements['q4'].value;
  const q5Answer = quizForm.elements['q5'].value;
  const q6Answer = quizForm.elements['q6'].value;
  const q7Answer = quizForm.elements['q7'].value;
  const q8Answer = quizForm.elements['q8'].value;
  const q9Answer = quizForm.elements['q9'].value;
  const q10Answer = quizForm.elements['q10'].value;
  
  // Calculate score
  let score = 0;
  if (q1Answer === 'a') {
    score++;
  }
  if (q2Answer === 'b') {
    score++;
  }
  if (q3Answer === 'a') {
    score++;
  }
  if (q4Answer === 'b') {
    score++;
  }
  if (q5Answer === 'a') {
    score++;
  }
  if (q6Answer === 'b') {
    score++;
  }
  if (q7Answer === 'c') {
    score++;
  }
  if (q8Answer === 'b') {
    score++;
  }
  if (q9Answer === 'a') {
    score++;
  }
  if (q10Answer === 'c') {
    score++;
  }
  
  // Display result
  resultDiv.innerHTML = `You scored ${score}/10`;
});
