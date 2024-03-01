// Define the request URL
const url = 'https://jsonplaceholder.typicode.com/users';


// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();


// Configure the request
xhr.open('GET', url);

// Set up event listener for when the request is loaded
xhr.onload = function() {
    // Parse the JSON response
    const users = JSON.parse(xhr.responseText);
    
    // Display user data in cards
    displayUserData(users);
};

// Send the request
xhr.send();

function displayUserData(users) {
    for(let i = 0 ; i < users.length; i++){

        const container = document.querySelector(".container"); 
// creating element through the loop
        const user = document.createElement("div");  
        user.id = `user${i}`;
        user.classList = "card";
        user.innerHTML = `<h2>${users[i]?.name}; 
                           <p> User Id : ${users[i]?.id}
                           <p>User gmail : ${users[i]?.email}</p>`
        container.appendChild(user);
                           
  }
}
