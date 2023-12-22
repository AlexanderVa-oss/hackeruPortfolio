const usersTable = document.querySelector(".users-table");
const submitBtn = document.querySelector("#submitBtn");

for (let user of users) {
    let row = usersTable.insertRow();
    for (let key in user) {
        let cell = row.insertCell();
        cell.textContent = user[key];
    }
    let cell = row.insertCell();
    document.createElement('btn');
}

submitBtn.addEventListener('click', (event) => {
    console.log(event);
    event.preventDefault();

    const user = {
        fname: event.target.form["fname"].value,
        lname: event.target.form['lname'].value,
        email: event.target.form['email'].value,
        password: event.target.form['password'].value,
        isLogedIn: false
    }

    let row = usersTable.insertRow();
    for (let key in user) {
        let cell = row.insertCell();
        cell.textContent = user[key];
    }

    // clean fields
    for (let input of event.target.form) {
        if (input.id != 'submitBtn') {
            input.value = ""
        };
    }

});
