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
const populateWeeklyLayout = () => {
    let userInput = muscleGroupInput.value.trim();
    console.log(`Muscle Group: ${userInput}!`)

    const days = document.querySelector('#dropdownMenuLink');

    let selectedValue = days.options[days.selectedIndex].value;

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
};


// if the submit button is clicked, add content to weekly layout
submitBtn.addEventListener('click', populateWeeklyLayout);


// if browse exercises button is clicked, will populate next page
// browseBtn.addEventListener('click', )

