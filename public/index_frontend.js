//This is being directed to the error page I created.
console.log("Stuff")
const createProject = document.getElementById('create-project');

// createProject.addEventListener('click', () => {
//     const projectData = {
//         name: document.getElementById('project-name').value,
//         projectType: document.getElementById('project-type').value
//     }
//     fetchData(projectData);
// })

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

async function fetchProject(){
        fetch('/playthink')
        .then(response =>{
            console.log('Response recieved');
            console.log(response);
        })
        .catch(error => {
            console.error('Error:', error);
        })
}


createProject.addEventListener('click', (e) => {
    console.log("Help")
    e.preventDefault();
    console.log(e.target)
    var newDiv = document.createElement("div");


    // Optionally, set attributes or properties for the div
    newDiv.textContent = `${document.getElementById('projectName').value}`;
    newDiv.style.backgroundColor = "lightblue";
    newDiv.style.padding = "10px";
    newDiv.style.height = "25%";
    newDiv.style.width = "25%";
    
    // Append the new div to the existing container div
    document.getElementById("project-space").appendChild(newDiv);
})





