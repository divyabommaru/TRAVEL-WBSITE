
const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
    container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
    container.classList.remove("change");
});


function signIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
 
      document.getElementById('sign-in-form').style.display = 'none';
      document.getElementById('welcome-section').style.display = 'block';
      document.getElementById('user-name').innerText = username;
    } else {
      alert('Please enter both username and password');
    }
  }
  
  function signOut() {
    
    document.getElementById('sign-in-form').style.display = 'block';
    document.getElementById('welcome-section').style.display = 'none';
  

  }


Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");
    };
});