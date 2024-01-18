let username = document.querySelector('.input__username');
let password = document.querySelector('.input__password');
let submit = document.querySelector('.submit');
let box = document.querySelector('.box');
let user_btn = document.querySelector('.user_btn');
let pass_box = document.querySelector('.pass_box');
let pass_btn = document.querySelector('.pass_btn');
let searchBtn = document.querySelector('.input__search');
let dataSearch = document.querySelector('.data_box');


username.addEventListener('keyup', () => {
    if (username.value.length > 10) {
        username.style.borderBottom = "2px solid red";

    } else
        username.style.borderBottom = '2px solid green';
});

password.addEventListener('keyup', () => {
    if (password.value.length > 10) {
        password.style.borderBottom = "2px solid red";
    } else
        password.style.borderBottom = '2px solid green';

});

searchBtn.addEventListener('keydown', () => {
    dataSearch.innerHTML = saveArray
        .filter((item) =>
            item.usename.toLowerCase().includes(searchBtn.value.toLowerCase())
        )
        .map((item) => `
    <p class = "username_text">${item.usename}</p>
    <button class = "delet1" onclick = "delet(${item.id})">Delet</button>
    `);

    dataSearch.style.border = "2px solid #7360ff";

});

let saveArray = [];
let passArray = [];

const render = () => {

    box.innerHTML = saveArray.map((item) => `
    <h2 class="user_desc">Username:</h2>
       <p class = "username_text">${item.usename}</p>   
    `).join("");
    user_btn.innerHTML = saveArray.map((item) => `
   <button class = "delet1" onclick = "delet(${item.id})">Delet</button>
       <button class = "edit1" onclick = "edit(${item.id})">Edit</button>
   `);
    pass_box.innerHTML = passArray.map((item) => `
      <h2 class = "pass_desc">Password:</h2>
      <p class = "password_text">${item.passcode}</p>
   `).join("");
    pass_btn.innerHTML = passArray.map((item) => `
   <button class = "delet1" onclick = "deletPass(${item.id})">Delet</button>
   <button class = "edit1" onclick = "editPass(${item.id})">Edit</button>
   `)

};



submit.addEventListener('click', (e) => {

    e.preventDefault();
    saveArray.push({ id: Date.now(), usename: username.value });
    passArray.push({ id: Date.now() + 1, passcode: password.value });
    username.value = " ";
    password.value = " ";
    render();
});


const delet = (id) => {
    for (let i = 0; i < saveArray.length; i++) {
        if (saveArray[i].id === id) {
            saveArray.splice(i, 1);
            dataSearch.innerHTML = " ";
        }
    }

    render();
};

const edit = (id) => {
    for (let i = 0; i < saveArray.length; i++) {
        if (saveArray[i].id == id) {
            saveArray[i].usename = prompt("soz kiriting: ");
        }
    }
    render();
};

const deletPass = (id) => {
    for (let i = 0; i < passArray.length; i++) {
        if (passArray[i].id === id) {
            passArray.splice(i, 1);
        }
    }

    render();
};

const editPass = (id) => {
    for (let i = 0; i < passArray.length; i++) {
        if (passArray[i].id == id) {
            passArray[i].passcode = prompt("soz kiriting: ");
        }
    }
    render();
};


