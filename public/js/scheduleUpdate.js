const deleteBtn = document.querySelectorAll('.delete-btn');
const submitBtn = document.querySelector('#submitButton');
const browseBtn = document.querySelector('#browseButton');
const displayDaySelected = document.querySelector('#dropdownMenuLink');
const dropdownItem = document.querySelector('.dropdown-item');
const muscleGroupInput = document.querySelector('#muscleGroup');

const mondayContent = document.querySelector('#monday-content').textContent;
const tuesdayContent = document.querySelector('#tuesday-content').textContent;
const wednesdayContent = document.querySelector('#wednesday-content').textContent;
const thursdayContent = document.querySelector('#thursday-content').textContent;
const fridayContent = document.querySelector('#friday-content').textContent;
const saturdayContent = document.querySelector('#saturday-content').textContent;
const sundayContent = document.querySelector('#sunday-content').textContent;

const monDelete = document.querySelector('#first-btn');
const tueDelete = document.querySelector('#second-btn');
const wedDelete = document.querySelector('#third-btn');
const thurDelete = document.querySelector('#fourth-btn');
const friDelete = document.querySelector('#fifth-btn');
const satDelete = document.querySelector('#sixth-btn');
const sunDelete = document.querySelector('#seventh-btn');


// const manageDeleteButtons = () => {
//   if (mondayContent) {
//     monDelete.classList.remove('hide');
//   }

//   if (tuesdayContent) {
//     tueDelete.classList.remove('hide');
//   }

//   if (wednesdayContent) {
//     wedDelete.classList.remove('hide');
//   }

//   if (thursdayContent) {
//     thurDelete.classList.remove('hide');
//   }

//   if (fridayContent) {
//     friDelete.classList.remove('hide');
//   }

//   if (saturdayContent) {
//     satDelete.classList.remove('hide');
//   }

//   if (sundayContent) {
//     sunDelete.classList.remove('hide');
//   }
// }


const newFormHandler = async (event) => {
    event.preventDefault();
    const area = muscleGroupInput.value.trim();
    const days = document.querySelector('#dropdownMenuLink');
    const day = days.options[days.selectedIndex].value.trim();

// Monday
    if (day === 'monday' && area) {
      monDelete.classList.remove('hide');
      muscleGroupInput.value = '';

      // taking input from user and sending to controllers to handle the put request
      const response = await fetch('/api/schedule', {
        method: 'PUT',
        body: JSON.stringify({ day, area }),
        headers: {
          'Content-Type': 'application/json',
        },     
      });
  
      if (response.ok) {
        document.location.replace('/schedule');
        // monDelete.classList.add('hide');
      } else {
        // SWEET ALERT?
        // monDelete.classList.remove('hide');
        alert('Failed to update Monday');
      };
    } 
    // Tuesday
    else if (day === 'tuesday' && area) {
      muscleGroupInput.value = '';

      // put request for tuesday
        const response = await fetch(`/api/schedule`, {
            method: 'PUT',
            body: JSON.stringify({ day, area }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            document.location.replace(`/schedule`);
          } else {
            alert('Failed to update Tuesday');
          };
    }
    // Wednesday
    else if (day === 'wednesday' && area) {
      // wedDelete.classList.remove('hide');
      muscleGroupInput.value = '';

      // put request for wednesday 
        const response = await fetch(`/api/schedule`, {
            method: 'PUT',
            body: JSON.stringify({ day, area }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            document.location.replace(`/schedule`);
          } else {
            alert('Failed to update Wednesday');
          };

    }
    // Thursday
    else if (day === 'thursday' && area) {
      // thurDelete.classList.remove('hide');
      muscleGroupInput.value = '';

      // put request for thursday
        const response = await fetch(`/api/schedule`, {
            method: 'PUT',
            body: JSON.stringify({ day, area }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            document.location.replace(`/schedule`);
          } else {
            alert('Failed to update Thursday');
          };
    }
    // Friday
    else if (day === 'friday' && area) {
      // friDelete.classList.remove('hide');
      muscleGroupInput.value = '';

      // put request for friday
        const response = await fetch(`/api/schedule`, {
            method: 'PUT',
            body: JSON.stringify({ day, area }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            document.location.replace(`/schedule`);
          } else {
            alert('Failed to update Friday');
          };

    }
    // Saturday
    else if (day === 'saturday' && area) {
      // satDelete.classList.remove('hide');
      muscleGroupInput.value = '';

      // put request for saturday
        const response = await fetch(`/api/schedule`, {
            method: 'PUT',
            body: JSON.stringify({ day, area }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            document.location.replace(`/schedule`);
          } else {
            alert('Failed to update Saturday');
          };

    }
    // Sunday
    else if (day === 'sunday' && area) {
      // sunDelete.classList.remove('hide');
      muscleGroupInput.value = '';

      // put request for sunday
        const response = await fetch(`/api/schedule`, {
            method: 'PUT',
            body: JSON.stringify({ day, area }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            document.location.replace(`/schedule`);
          } else {
            alert('Failed to create Sunday');
          };
    }
  };


// handles the delete requests for all delete buttons
  const deleteButtonHandler = () => {
    
    // update content from monday to empty string if delete button is clicked
    const mondayDelete = async () => {
      // monDelete.classList.add('hide');
      const day = 'monday';
      const area = ' ';

      const response = await fetch('/api/schedule', {
        method: 'PUT',
        body: JSON.stringify({ day, area }),
        headers: {
          "Content-Type" : "application/json",
        },
      });

      if (response.ok) {
        document.location.replace('/schedule');
      } else {
        // monDelete.classList.remove('hide');
        alert('Failed to delete Monday data');
      }
    }

    // tuesday delete button
    const tuesdayDelete = async () => {
      // tueDelete.classList.add('hide');
      const day = 'tuesday';
      const area = ' ';

      const response = await fetch('/api/schedule', {
        method: 'PUT',
        body: JSON.stringify({ day, area }),
        headers: {
          "Content-Type" : "application/json",
        },
      });

      if (response.ok) {
        document.location.replace('/schedule');
      } else {
        // tueDelete.classList.remove('hide');
        alert('Failed to delete Tuesday data');
      }
    }

    // wednesday delete button
    const wednesdayDelete = async () => {
      // wedDelete.classList.add('hide');
      const day = 'wednesday';
      const area = ' ';

      const response = await fetch('/api/schedule', {
        method: 'PUT',
        body: JSON.stringify({ day, area }),
        headers: {
          "Content-Type" : "application/json",
        },
      });

      if (response.ok) {
        document.location.replace('/schedule');
      } else {
        // wedDelete.classList.remove('hide');
        alert('Failed to delete Wednesday data');
      }
    }
        
    // thursday delete button
    const thursdayDelete = async () => {
      // thurDelete.classList.add('hide');
      const day = 'thursday';
      const area = ' ';

      const response = await fetch('/api/schedule', {
        method: 'PUT',
        body: JSON.stringify({ day, area }),
        headers: {
          "Content-Type" : "application/json",
        },
      });

      if (response.ok) {
        document.location.replace('/schedule');
      } else {
        // thurDelete.classList.remove('hide');
        alert('Failed to delete Thursday data');
      }
    }           

// friday delete button
    const fridayDelete = async () => {
      // friDelete.classList.add('hide');
      const day = 'friday';
      const area = ' ';

      const response = await fetch('/api/schedule', {
        method: 'PUT',
        body: JSON.stringify({ day, area }),
        headers: {
          "Content-Type" : "application/json",
        },
      });

      if (response.ok) {
        document.location.replace('/schedule');
      } else {
        // friDelete.classList.remove('hide');
        alert('Failed to delete Friday data');
      }
    }  

 // saturday delete button
    const SaturdayDelete = async () => {
      // satDelete.classList.add('hide');
      const day = 'saturday';
      const area = ' ';

      const response = await fetch('/api/schedule', {
        method: 'PUT',
        body: JSON.stringify({ day, area }),
        headers: {
          "Content-Type" : "application/json",
        },
      });
      if (response.ok) {
        document.location.replace('/schedule');
      } else {
        // satDelete.classList.remove('hide');
        alert('Failed to delete Saturday data');
      }
    }

  // sunday delete button
    const sundayDelete = async () => {
      // sunDelete.classList.add('hide');
      const day = 'sunday';
      const area = ' ';

      const response = await fetch('/api/schedule', {
        method: 'PUT',
        body: JSON.stringify({ day, area }),
        headers: {
          "Content-Type" : "application/json",
        },
      });
      if (response.ok) {
        document.location.replace('/schedule');
      } else {
        // sunDelete.classList.remove('hide');
        alert('Failed to delete Sunday data');
      }
    }

    // Delete button event listeners to handle each delete button
    monDelete.addEventListener('click', mondayDelete);
    tueDelete.addEventListener('click', tuesdayDelete);
    wedDelete.addEventListener('click', wednesdayDelete);
    thurDelete.addEventListener('click', thursdayDelete);
    friDelete.addEventListener('click', fridayDelete);
    satDelete.addEventListener('click', SaturdayDelete);
    sunDelete.addEventListener('click', sundayDelete);
  }


// Submit button on form to populate data to a specific day
submitBtn.addEventListener('click', newFormHandler);
// handles the put requests for the delete buttons
deleteButtonHandler();

// manages the hide classes to display delete button properly 
// manageDeleteButtons();


