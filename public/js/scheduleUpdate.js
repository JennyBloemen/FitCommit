const deleteBtn = document.querySelectorAll('.delete-btn');
const submitBtn = document.querySelector('#submitButton');
const browseBtn = document.querySelector('#browseButton');
const displayDaySelected = document.querySelector('#dropdownMenuLink');
const dropdownItem = document.querySelector('.dropdown-item');
const muscleGroupInput = document.querySelector('#muscleGroup');

const monDelete = document.querySelector('#first-btn');
const tueDelete = document.querySelector('#second-btn');
const wedDelete = document.querySelector('#third-btn');
const thurDelete = document.querySelector('#fourth-btn');
const friDelete = document.querySelector('#fifth-btn');
const satDelete = document.querySelector('#sixth-btn');
const sunDelete = document.querySelector('#seventh-btn');

const newFormHandler = async (event) => {
    event.preventDefault();
    const area = muscleGroupInput.value.trim();
    const days = document.querySelector('#dropdownMenuLink');
    const day = days.options[days.selectedIndex].value.trim();

// Monday
    if (day === 'monday' && area) {
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

        // Sweetalert2
        Swal.fire({
          title: 'Failed to update Monday!',
          icon: 'error',
          iconColor: '#df2c14',
          confirmButtonColor: 'black',
          confirmButtonText: 'OK'
        });
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
            // Sweetalert2
            Swal.fire({
              title: 'Failed to update Tuesday!',
              icon: 'error',
              iconColor: '#df2c14',
              confirmButtonColor: 'black',
              confirmButtonText: 'OK'
            });
          };
    }
    // Wednesday
    else if (day === 'wednesday' && area) {
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
            // Sweetalert2
            Swal.fire({
              title: 'Failed to update Wednesday!',
              icon: 'error',
              iconColor: '#df2c14',
              confirmButtonColor: 'black',
              confirmButtonText: 'OK'
            });
          };

    }
    // Thursday
    else if (day === 'thursday' && area) {
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
            // Sweetalert2
            Swal.fire({
              title: 'Failed to update Thursday!',
              icon: 'error',
              iconColor: '#df2c14',
              confirmButtonColor: 'black',
              confirmButtonText: 'OK'
            });
          };
    }
    // Friday
    else if (day === 'friday' && area) {
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
            // Sweetalert2
            Swal.fire({
              title: 'Failed to update Friday!',
              icon: 'error',
              iconColor: '#df2c14',
              confirmButtonColor: 'black',
              confirmButtonText: 'OK'
            });
          };

    }
    // Saturday
    else if (day === 'saturday' && area) {
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
            // Sweetalert2
            Swal.fire({
              title: 'Failed to update Saturday!',
              icon: 'error',
              iconColor: '#df2c14',
              confirmButtonColor: 'black',
              confirmButtonText: 'OK'
            });
          };

    }
    // Sunday
    else if (day === 'sunday' && area) {
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
            // Sweetalert2
            Swal.fire({
              title: 'Failed to update Sunday!',
              icon: 'error',
              iconColor: '#df2c14',
              confirmButtonColor: 'black',
              confirmButtonText: 'OK'
            });
          };
    }
  };


// handles the delete requests for all delete buttons
  const deleteButtonHandler = () => {
    
    // update content from monday to empty string if delete button is clicked
    const mondayDelete = async () => {
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
        Swal.fire({
          title: 'Monday will be deleted!',
          icon: 'warning',
          iconColor: '#df2c14',
          confirmButtonColor: 'black',
          preDeny: false,
          confirmButtonText: 'OK'
        }).then((res) => {
          if (res.isConfirmed) {
            document.location.replace('/schedule');
          }
        });
      } else {
        alert('Failed to delete Monday data');
      }
    }

    // tuesday delete button
    const tuesdayDelete = async () => {
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
        Swal.fire({
          title: 'Tuesday will be deleted!',
          icon: 'warning',
          iconColor: '#df2c14',
          confirmButtonColor: 'black',
          preDeny: false,
          confirmButtonText: 'OK'
        }).then((res) => {
          if (res.isConfirmed) {
            document.location.replace('/schedule');
          }
        });
      } else {
        alert('Failed to delete Tuesday data');
      }
    }

    // wednesday delete button
    const wednesdayDelete = async () => {
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
        Swal.fire({
          title: 'Wednesday will be deleted!',
          icon: 'warning',
          iconColor: '#df2c14',
          confirmButtonColor: 'black',
          preDeny: false,
          confirmButtonText: 'OK'
        }).then((res) => {
          if (res.isConfirmed) {
            document.location.replace('/schedule');
          }
        });
      } else {
        alert('Failed to delete Wednesday data');
      }
    }
        
    // thursday delete button
    const thursdayDelete = async () => {
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
        Swal.fire({
          title: 'Thursday will be deleted!',
          icon: 'warning',
          iconColor: '#df2c14',
          confirmButtonColor: 'black',
          preDeny: false,
          confirmButtonText: 'OK'
        }).then((res) => {
          if (res.isConfirmed) {
            document.location.replace('/schedule');
          }
        });
      } else {
        alert('Failed to delete Thursday data');
      }
    }           

// friday delete button
    const fridayDelete = async () => {
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
        Swal.fire({
          title: 'Friday will be deleted!',
          icon: 'warning',
          iconColor: '#df2c14',
          confirmButtonColor: 'black',
          preDeny: false,
          confirmButtonText: 'OK'
        }).then((res) => {
          if (res.isConfirmed) {
            document.location.replace('/schedule');
          }
        });
      } else {
        alert('Failed to delete Friday data');
      }
    }  

 // saturday delete button
    const SaturdayDelete = async () => {
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
        Swal.fire({
          title: 'Saturday will be deleted!',
          icon: 'warning',
          iconColor: '#df2c14',
          confirmButtonColor: 'black',
          preDeny: false,
          confirmButtonText: 'OK'
        }).then((res) => {
          if (res.isConfirmed) {
            document.location.replace('/schedule');
          }
        });
      } else {
        alert('Failed to delete Saturday data');
      }
    }

  // sunday delete button
    const sundayDelete = async () => {
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
        Swal.fire({
          title: 'Sunday will be deleted!',
          icon: 'warning',
          iconColor: '#df2c14',
          confirmButtonColor: 'black',
          preDeny: false,
          confirmButtonText: 'OK'
        }).then((res) => {
          if (res.isConfirmed) {
            document.location.replace('/schedule');
          }
        });
      } else {
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


