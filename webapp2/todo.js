function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value !== '') {
      const task = document.createElement('li');
      task.innerText = taskInput.value;
      task.addEventListener('click', toggleTask);
      taskList.appendChild(task);
      taskInput.value = '';
    }
  }
  
  function toggleTask() {
    this.classList.toggle('completed');
  }