const createAccountButton = document.getElementById('create_accnt');
const signInButton = document.getElementById('sign-in')

createAccountButton.addEventListener('click', () => {
    const creatorData = {
        name: document.getElementById('email').value,
        password: document.getElementById('password').value,
        projects: []
    }
    
   fetchData(creatorData);
})

signInButton.addEventListener('click', () => {
    const creatorData = {
        name: document.getElementById('email').value,
        password: document.getElementById('password').value,
        projects: []
    }
    
   fetchData(creatorData);
})

async function fetchData(creatorData){
    fetch('/userLogin', {
        method: 'POST', 
        body: JSON.stringify(creatorData)
    })
    .then(response => {
        console.log('Response recieved', response);
    })
    .catch(error =>{
        console.error('Error:', error);
    });
}