import TaskManager from "./taskManager.js";

// form container
const form = document.querySelector("#form-container");
//input field
const inputTasks = document.querySelector("#inputTasks");
//details field
const detailsInput = document.querySelector("#inputDetails");
//
const assignTo = document.querySelector("#assignTo");
//status
const statusInput = document.querySelector("#statusInput");
//calendar

const calendar = document.querySelector("#dueDate");

// ----task manager----

const tasks = new TaskManager();

 


//listen to submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validFormInput();

  try {
    tasks.addTasks(
      inputTasks.value,
      detailsInput.value,
      assignTo.value,
      statusInput.value,
      calendar.value,
      tasks.currentID.id

    );
  } catch (error) {
    console.error(error);
  }
  resetForm();

  console.log(tasks);
});

//validation
const validFormInput = () => {
  const inputTitle = inputTasks.value;
  const details = detailsInput.value;
  const assign = assignTo.value;
  const status = statusInput.value;
  const dueDate = calendar.value;

  if (inputTitle === "") {
    showError(inputTasks, "Task cannot be empty");
  } else {
    showSuccess(inputTasks);
  }

  if (details === "") {
    showError(detailsInput, "Details cannot be empty");
  } else {
    showSuccess(detailsInput);
  }

  if (assign === "") {
    showError(assignTo, "Please assign task");
  } else {
    showSuccess(assignTo);
  }

  if (status === "") {
    showError(statusInput, "Please assign status");
  } else {
    showSuccess(statusInput);
  }

  if (dueDate === "") {
    showError(calendar, "Do not forget due date");
  } else {
    showSuccess(calendar);
  }
 
};

//to reset the form after the input has been submitted

const resetForm = () => {
  inputTasks.value = "";
  detailsInput.value = "";
  assignTo.value = "";
  statusInput.value = "";
  calendar.value = "";

  // inputTasks.classList.remove("success");
  // detailsInput.classList.remove("success");
  // assignTo.classList.remove("success");
  // statusInput.classList.remove("success");
  // calendar.classList.remove("success");
};

const showError = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-field error";
  small.innerText = message;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-field success";
};
