//This is being directed to the error page I created.

const createProject = document.getElementById('create-project');

createProject.addEventListener('click', () => {
    const projectData = {
        name: document.getElementById('project-name').value,
        projectType: document.getElementById('project-type').value
    }
    fetchData(projectData);
})

createProject.addEventListener('click', () => {
    var newDiv = document.createElement("div");

    // Optionally, set attributes or properties for the div
    newDiv.textContent = `${document.getElementById('project-name').value}`;
    newDiv.style.backgroundColor = "lightblue";
    newDiv.style.padding = "10px";
    
    // Append the new div to the existing container div
    document.getElementById("project-space").appendChild(newDiv);
})

async function fetchData(projectData){
    fetch('/playthink', {
        method: 'POST', 
        body: JSON.stringify(projectData)
    })
    .then(response => {
        console.log('Response recieved');
    })
    .catch(error =>{
        console.error('Error:', error);
    });
}



