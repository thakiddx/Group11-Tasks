const form = document.getElementById('form');
const inputTask = document.getElementById('inputTasks');
const inputDetail = document.getElementById('inputDetails');
const assignment = document.getElementById('assignTo');
const status = document.getElementById('statusId');
const dateDue = document.getElementById('dueDate');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    inputControl.className = 'formField, error';
    errorDisplay.innerText = message;
    //inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const taskValue = inputTasks.value.trim();
    const detailValue = inputDetails.value.trim();
    const assignmentValue = assignTo.value.trim();
    const statusValue = statusId.value.trim();
    const dateValue = dueDate.value.trim();

    if(taskValue === '') {
        setError(inputTask, 'task is required');
    }else{
        setSuccess(inputTask);
    }
    if(detailValue === '') {
        setError(inputDetails, 'Details are required')
    }else{
        setSuccess(inputDetails)
    }
    if(assignmentValue === '') {
        setError(assignTo, 'assignment is required')
    }else{
        setSuccess(assignTo);
    }
    if(statusValue === '') {
        setError(statusId, 'status is required')
    }else{
        setSuccess(statusId);
    }
    if(dateValue === '') {
        setError(dueDate, 'date is required')
    }else{
        setSuccess(dueDate);
    }


};
