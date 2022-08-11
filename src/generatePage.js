// push employee info into array
const generateCards = data => {
    cardArray = [];

    // call for function to respective employee roles
    for (let i = 0; i < data.length; i++) {
        let employee = data[i];
        let role = employee.getRole();

        if (role === 'Manager') {
            const managerInfo = generateManager(employee);
            cardArray.push(managerInfo);
        }
        if (role === 'Engineer') {
            const engineerInfo = generateEngineer(employee);
            cardArray.push(engineerInfo);
        }
        if (role === 'Intern') {
            const internInfo = generateIntern(employee);
            cardArray.push(internInfo);
        }
    }

    // take all employee cards & join into strings
    const employeeInfo = cardArray.join('');

    // display all cards in generatePage()
    const createTeam = generatePage(employeeInfo);
    return createTeam;
};

// create manager card
const generateManager = manager => {
    if (!manager) {
        return '';
    }
    return `<div class="card" style="width: 18rem;">
                    <div class="card-header">
                        <h2>${manager.name}</h2>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${manager.id}</li>
                                <li class="list-group-item">E-mail: <a href="mailto:${manager.email}">${manager.email}</a></li>
                                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                            </ul>
                    </div>
                </div>
    `;
};

// create engineer card
const generateEngineer = engineer => {
    if (!engineer) {
        return '';
    }
    return `
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                        <h2>${engineer.name}</h2>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><i class="fa-solid fa-laptop-code"></i> ${engineer.getRole()}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${engineer.id}</li>
                            <li class="list-group-item">E-mail: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
                        </ul>
                    </div>
                </div>
    `;
};

// create intern card
const generateIntern = intern => {
    if (!intern) {
        return '';
    }
    return `
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                        <h2>${intern.name}</h2>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><i class="fa-solid fa-graduation-cap"></i> ${intern.getRole()}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${intern.id}</li>
                            <li class="list-group-item">E-mail: <a href="mailto:${intern.email}">${intern.email}</a></li>
                            <li class="list-group-item">School: ${intern.school}</li>
                        </ul>
                    </div>
                </div>
    `;
};

// create index.html page
const generatePage = data => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
    <script src="https://kit.fontawesome.com/c5a64ca061.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css" />
    <title>Team Profile</title>
</head>
<body>
    
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
    
                <h1>My Team</h1>

            </div>
        </div>

        <div class="row">
            <div class="col">

                ${data}

            </div>
        </div>
    </div>
</body>
</html>
    `;
};

module.exports = generateCards;