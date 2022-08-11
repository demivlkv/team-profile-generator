// create manager card
const generateManager = manager => {
    if (!manager) {
        return '';
    }
    return `<div class="card" style="width: 18rem;">
                    <div class="card-header">
                        ${manager.name}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><i class="fa-solid fa-mug-hot"></i> ${manager.role}</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">${manager.id}</li>
                                <li class="list-group-item">${manager.email}</li>
                                <li class="list-group-item">${manager.officeNumber}</li>
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
    return `<div class="card" style="width: 18rem;">
                    <div class="card-header">
                        ${engineer.name}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><i class="fa-solid fa-laptop-code"></i> ${engineer.role}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${engineer.id}</li>
                            <li class="list-group-item">${engineer.email}</li>
                            <li class="list-group-item">${engineer.github}</li>
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
    return `<div class="card" style="width: 18rem;">
                    <div class="card-header">
                        ${intern.name}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><i class="fa-solid fa-graduation-cap"></i> ${intern.role}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${intern.id}</li>
                            <li class="list-group-item">${intern.email}</li>
                            <li class="list-group-item">${intern.school}</li>
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

                ${generateManager(data)}
                ${generateEngineer(data)}
                ${generateIntern(data)}
    
            </div>
        </div>
    </div>
</body>
</html>
    `;
};

module.exports = generatePage;