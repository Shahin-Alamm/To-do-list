
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
  
    addTaskButton.addEventListener("click", function () {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
          ${taskText}
          <button class="delete-button">Delete</button>
        `;
  
        taskItem.querySelector(".delete-button").addEventListener("click", function () {
          taskItem.remove();
        });
  
        taskList.appendChild(taskItem);
  
        taskInput.value = "";
      }
    });
  
    taskInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        addTaskButton.click();
      }
    });
  });
  
