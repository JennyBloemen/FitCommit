// might need to be called on schedule page since button is there and then redirect to exercises page
const axios = require('axios');

const getExercises = async (event) => {
    event.preventDefault();
    window.location.assign('/exercises')
    
    // need to make a get request in routes??
    axios.get('api/exercises')
    .then(res => {
        data = res.data;
        data.forEach( e => {
            console.log(${})
        })
    })
    .catch(error => {
        console.log(error)
    });
    
    

}

// when browse exercises is clicked, will display exercises
document.querySelector('browseButton').addEventListener('click', getExercises);