document.addEventListener("DOMContentLoaded", function() {
  const progressBar = document.getElementById('progress');
  const courseContent = document.getElementById('course-content');
  const markCompleteBtn = document.getElementById('markCompleteBtn');
  
  markCompleteBtn.addEventListener('click', markComplete);
  
  function markComplete() {
      const currentModule = courseContent.querySelector('li:not(.completed)');
      if (currentModule) {
          currentModule.classList.add('completed');
          updateProgress();
      } else {
          alert('You have completed the course!');
      }
  }
  
  function updateProgress() {
      const completedModules = courseContent.querySelectorAll('.completed').length;
      const totalModules = courseContent.querySelectorAll('li').length;
      const percentage = (completedModules / totalModules) * 100;
      progressBar.style.width = percentage + '%';
  }
});
