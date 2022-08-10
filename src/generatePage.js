// create manager card
const generateManager = data => {
    return `<div class="card">
    <div class="card-header">
        Name
    </div>
    <div class="card-body">
        <h5 class="card-title">Header</h5>
        <p class="card-text">
            Nam aliquam sem et tortor. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Dui id ornare arcu odio ut sem nulla pharetra diam. Tempus imperdiet nulla malesuada pellentesque. Donec ultrices tincidunt arcu non sodales neque. Adipiscing elit ut aliquam purus sit amet luctus. At risus viverra adipiscing at in. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Et pharetra pharetra massa massa ultricies mi quis.
        </p>
    </div>
</div>
    `;
};

// create engineer card

// create intern card

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

                ${generateManager(data)}
    
            </div>
        </div>
    </div>
</body>
</html>
    `;
};

module.exports = generatePage;