// Array to store coaches
let coaches = ['Jane Pear', 'Jerry Lee'];
printArrayElements(coaches);

function printArrayElements(array) {
    // Get the <ul> element where we want to display the array elements
    const ul = document.getElementById('outputList');

    // Clear any existing content in the <ul> element
    ul.innerHTML = '';

    // Loop through the array and create a <li> element for each array element
    array.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element;
        ul.appendChild(li);
    });

    // Update the dropdown menu options for removing coaches
    updateRemoveCoachOptions(array);
}

// Function to add a coach
function addCoach(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the value entered in the input field
    const coachName = document.getElementById('addcoach').value;

    // Add the coach to the array if the input is not empty
    if (coachName.trim() !== '') {
        coaches.push(coachName);

        // Update the displayed list of coaches
        printArrayElements(coaches);

        // Clear the input field
        document.getElementById('addcoach').value = '';
    }
}

// Function to remove a coach
function removeCoach() {
    // Get the selected coach from the dropdown menu
    const selectedCoach = document.getElementById('removecoach').value;

    // Remove the selected coach from the array
    const index = coaches.indexOf(selectedCoach);
    if (index !== -1) {
        coaches.splice(index, 1);
    }

    // Update the displayed list of coaches
    printArrayElements(coaches);
}

// Function to update the dropdown menu options for removing coaches
function updateRemoveCoachOptions(array) {
    const dropdown = document.getElementById('removecoach');

    // Clear existing options
    dropdown.innerHTML = '';

    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select a coach to remove';
    dropdown.appendChild(defaultOption);

    // Add options for each coach in the array
    array.forEach(coach => {
        const option = document.createElement('option');
        option.value = coach;
        option.textContent = coach;
        dropdown.appendChild(option);
    });
}

// Add event listener to the form submit event
const form = document.querySelector('form');
form.addEventListener('submit', addCoach);

// Add event listener to the remove button click event
const removeButton = document.getElementById('removeButton');
removeButton.addEventListener('click', removeCoach);
