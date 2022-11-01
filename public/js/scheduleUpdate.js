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

const area = muscleGroupInput.value.trim();
const days = document.querySelector('#dropdownMenuLink');
const day = days.options[days.selectedIndex].value.trim();


const newFormHandler = async (event) => {
    event.preventDefault();
    const area = muscleGroupInput.value.trim();
    const days = document.querySelector('#dropdownMenuLink');
    const day = days.options[days.selectedIndex].value.trim();

// Monday
    if (day === 'monday' && area) {
      // monDelete.classList.remove('hide');
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
      } else {
        // SWEET ALERT?
        alert('Failed to update Monday');
      };

      // delete content from monday if delete button is clicked
      // const mondayDelete = async () => {
      //   // monDelete.classList.add('hide');
      //   console.log('worked');
      //   const response = await fetch('/api/schedule', {
      //     method: 'DELETE',
      //     body: JSON.stringify({ day, area }),
      //   });

      //   if (response.ok) {
      //     document.location.replace('/schedule');
      //   } else {
      //     alert('Failed to delete Monday data');
      //   }
      // }
    
      // monDelete.addEventListener('click', mondayDelete);

    } 
    // Tuesday
    else if (day === 'tuesday' && area) {
      tueDelete.classList.remove('hide');
      muscleGroupInput.value = '';
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
      wedDelete.classList.remove('hide');
      muscleGroupInput.value = '';
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
      thurDelete.classList.remove('hide');
      muscleGroupInput.value = '';
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
      friDelete.classList.remove('hide');
      muscleGroupInput.value = '';
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
      satDelete.classList.remove('hide');
      muscleGroupInput.value = '';
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
      sunDelete.classList.remove('hide');
      muscleGroupInput.value = '';
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

// DELETE REQUESTS --  FOR ALL THE DELETE BUTTONS 

    // delete content from monday if delete button is clicked
    const mondayDelete = async () => {
      monDelete.classList.add('hide');
      console.log('worked');
      const response = await fetch('/api/schedule', {
        method: 'DELETE',
        body: JSON.stringify({ day, area }),
      });

      if (response.ok) {
        document.location.replace('/schedule');
      } else {
        monDelete.classList.remove('hide');
      monDelete.classList.remove('hide');
        alert('Failed to delete Monday data');
      }
    }

    // tuesday delete button
    const tuesdayDelete = async () => {
      tueDelete.classList.add('hide');
      
      const response = await fetch('/api/schedule', {
        method: 'DELETE',
        body: JSON.stringify({ day, area }),
      });

      if (response.ok) {
        document.location.replace('/schedule');
      } else {
        monDelete.classList.remove('hide');
        alert('Failed to delete Tuesday data');
      }
    }

    // wednesday delete button
    const wednesdayDelete = async () => {
      wedDelete.classList.add('hide');
      
      const response = await fetch('/api/schedule', {
        method: 'DELETE',
        body: JSON.stringify({ day, area }),
      });

      if (response.ok) {
        document.location.replace('/schedule');
      } else {
        monDelete.classList.remove('hide');
        alert('Failed to delete Wednesday data');
      }
    }
        
    // thursday delete button
    const thursdayDelete = async () => {
      thurDelete.classList.add('hide');
      
      const response = await fetch('/api/schedule', {
        method: 'DELETE',
        body: JSON.stringify({ day, area }),
      });

      if (response.ok) {
        document.location.replace('/schedule');
      } else {
        monDelete.classList.remove('hide');
        alert('Failed to delete Thursday data');
      }
    }
                  

// friday delete button
    const fridayDelete = async () => {
      friDelete.classList.add('hide');
      
      const response = await fetch('/api/schedule', {
        method: 'DELETE',
        body: JSON.stringify({ day, area }),
      });

      if (response.ok) {
        document.location.replace('/schedule');
      } else {
        monDelete.classList.remove('hide');
        alert('Failed to delete Friday data');
      }
    }
        

 // saturday delete button
    const SaturdayDelete = async () => {
      satDelete.classList.add('hide');
      
      const response = await fetch('/api/schedule', {
        method: 'DELETE',
        body: JSON.stringify({ day, area }),
      });
      if (response.ok) {
        document.location.replace('/schedule');
      } else {
        monDelete.classList.remove('hide');
        alert('Failed to delete Saturday data');
      }
    }


  // sunday delete button
    const sundayDelete = async () => {
      sunDelete.classList.add('hide');
      
      const response = await fetch('/api/schedule/:id', {
        method: 'DELETE',
        body: JSON.stringify({ day, area }),
      });
      if (response.ok) {
        document.location.replace('/schedule');
      } else {
        monDelete.classList.remove('hide');
        alert('Failed to delete Sunday data');
      }
    }
  
monDelete.addEventListener('click', mondayDelete);
tueDelete.addEventListener('click', tuesdayDelete);
wedDelete.addEventListener('click', wednesdayDelete);
thurDelete.addEventListener('click', thursdayDelete);
friDelete.addEventListener('click', fridayDelete);
satDelete.addEventListener('click', SaturdayDelete);
sunDelete.addEventListener('click', sundayDelete);

submitBtn.addEventListener('click', newFormHandler);
  


