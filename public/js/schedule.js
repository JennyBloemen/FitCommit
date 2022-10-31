const deleteBtn = document.querySelectorAll('.delete-btn');
const submitBtn = document.querySelector('#submitButton');
const browseBtn = document.querySelector('#browseButton');
const displayDaySelected = document.querySelector('#dropdownMenuLink');
const dropdownItem = document.querySelector('.dropdown-item');
const muscleGroupInput = document.querySelector('#muscleGroup');

const mondayContent = document.querySelector('#monday-content');
const tuesdayContent = document.querySelector('#tuesday-content');
const wednesdayContent = document.querySelector('#wednesday-content');
const thursdayContent = document.querySelector('#thursday-content');
const fridayContent = document.querySelector('#friday-content');
const saturdayContent = document.querySelector('#saturday-content');
const sundayContent = document.querySelector('#sunday-content');

const monDelete = document.querySelector('#first-btn');
const tueDelete = document.querySelector('#second-btn');
const wedDelete = document.querySelector('#third-btn');
const thurDelete = document.querySelector('#fourth-btn');
const friDelete = document.querySelector('#fifth-btn');
const satDelete = document.querySelector('#sixth-btn');
const sunDelete = document.querySelector('#seventh-btn');



// if monday is selected in the dropdown menu, whatever input is submitted, will populate in the monday content section
const populateWeeklyLayout = async (event) => {
    event.preventDefault();
    let userInput = muscleGroupInput.value.trim();
    console.log(`Muscle Group: ${userInput}!`)

    const days = document.querySelector('#dropdownMenuLink');

    let selectedValue = days.options[days.selectedIndex].value;

    // day, area, text, etc. -- make sure it matches with userRoutes EDIT THIS!!
    if (userInput) {
        const response = await fetch (`/api/schedule`, {
            method: 'POST',
            body: JSON.stringify({ userInput }),
            headers: {
                'Content-Type' : 'application/json',
            }
        });

        if (response.ok) {

            if (selectedValue === 'monday') {
                console.log(selectedValue);
                mondayContent.textContent = userInput;
                monDelete.classList.remove('hide');
                muscleGroupInput.value = '';

                const mondayDelete = () => {
                    monDelete.classList.add('hide');
                    mondayContent.textContent = '';
                }
                
                monDelete.addEventListener('click', mondayDelete);
                return;
            } else if (selectedValue === 'tuesday') {
                console.log(selectedValue);
                tuesdayContent.textContent = userInput;
                tueDelete.classList.remove('hide');
                muscleGroupInput.value = '';

                const tuesdayDelete = () => {
                    tueDelete.classList.add('hide');
                    tuesdayContent.textContent = '';
                }
                
                tueDelete.addEventListener('click', tuesdayDelete);
                return;
            } else if (selectedValue === 'wednesday') {
                wednesdayContent.textContent = userInput;
                wedDelete.classList.remove('hide');
                muscleGroupInput.value = '';

                const wednesdayDelete = () => {
                    wedDelete.classList.add('hide');
                    wednesdayContent.textContent = '';
                }
                
                wedDelete.addEventListener('click', wednesdayDelete);

                return;
            } else if (selectedValue === 'thursday') {
                thursdayContent.textContent = userInput;
                thurDelete.classList.remove('hide');
                muscleGroupInput.value = '';

                const thursdayDelete = () => {
                    thurDelete.classList.add('hide');
                    thursdayContent.textContent = '';
                }
                
                thurDelete.addEventListener('click', thursdayDelete);

                return;
            } else if (selectedValue === 'friday') {
                fridayContent.textContent = userInput;
                friDelete.classList.remove('hide');
                muscleGroupInput.value = '';

                const fridayDelete = () => {
                    friDelete.classList.add('hide');
                    fridayContent.textContent = '';
                }
                
                friDelete.addEventListener('click', fridayDelete);

                return;
            } else if (selectedValue === 'saturday') {
                saturdayContent.textContent = userInput;
                satDelete.classList.remove('hide');
                muscleGroupInput.value = '';

                const saturdayDelete = () => {
                    satDelete.classList.add('hide');
                    saturdayContent.textContent = '';
                }
                
                satDelete.addEventListener('click', saturdayDelete);

                return;
            } else if (selectedValue === 'sunday') {
                sundayContent.textContent = userInput;
                sunDelete.classList.remove('hide');
                muscleGroupInput.value = '';

                const sundayDelete = () => {
                    sunDelete.classList.add('hide');
                    sundayContent.textContent = '';
                }
                
                sunDelete.addEventListener('click', sundayDelete);

                return;
            } else {
                console.log('select a day of of the week');
            }
    } else {
        alert('failed to load schedule')
    }
        }
    }

    


// if the submit button is clicked, add content to weekly layout
submitBtn.addEventListener('click', populateWeeklyLayout);

// if browse exercises button is clicked, will populate next page
// browseBtn.addEventListener('click', )

// delete button is clicked, will delete an item
const delButtonHandler = async (event) => {
    
}


monDelete.addEventListener('click', delButtonHandler);
tueDelete.addEventListener('click', delButtonHandler);
wedDelete.addEventListener('click', delButtonHandler);
thurDelete.addEventListener('click', delButtonHandler); 
friDelete.addEventListener('click', delButtonHandler); 
satDelete.addEventListener('click', delButtonHandler); 
sunDelete.addEventListener('click', delButtonHandler); 



const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
