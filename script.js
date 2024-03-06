const url = "https://jsonplaceholder.typicode.com/users";

// creating a XMLHttpRequest Object 
const xhr = new XMLHttpRequest();
xhr.open("GET",url);

// set a event listener for when the request is loaded
xhr.onload = function(){
    const users = JSON.parse(xhr.responseText);
    // display user Data in cards;
    displayUsersData(users);
}
// send the request
xhr.send();

// create a function for displayUserData--
function displayUsersData(users){
    let container = document.querySelector("#container");
    // we use for loop here for display data inside the card
    for(let i = 0 ; i< users.length; i++){
        let div = document.createElement("div");
        div.classList = "card";
        div.innerHTML = `<h2>User Name: ${users[i]?.name}</h2> 
                          <h3>User ID: ${users[i]?.id}</h3>
                          <p>User Email: ${users[i]?.email}</p>
                          <p>User Address: ${users[i]?.address?.city}</p>` //This is Optional Chaining for avoid showing Error---

                        container.appendChild(div);            
    }
};
