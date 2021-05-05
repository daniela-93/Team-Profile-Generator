const generatePage = (data) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
    
    <body>
    <header class="d-flex bg-info row text-light justify-content-center p-5">
      <div class="d-flex justify-content-center">
      <h1>My Team</h1>
      </div>
    </header>
      <div id="card-holder" class="d-flex row justify-content-center m-5">
        <div class='card d-flex m-3' style='width: 18rem;'>
          <div class='card-body bg-primary text-light'>
            <h5 class='card-title'>${data[0].name}</h5>
            <h5 class='card-title'>${data[0].getRole()}</h5>
          </div>
          <ul class='list-group list-group-flush'>
            <li class='list-group-item'>ID: ${data[0].id}</li>
            <li class='list-group-item'>Email: <a href="mailto:${data[0].email}">${data[0].email}</a></li>
            <li class='list-group-item'>Office Number: ${data[0].officeNumber}</li>
          </ul>
        </div>
        <div class='card d-flex m-3' style='width: 18rem;'>
          <div class='card-body bg-primary text-light'>
            <h5 class='card-title'>${data[1].name}</h5>
            <h5 class='card-title'>${data[1].getRole()}</h5>
          </div>
          <ul class='list-group list-group-flush'>
            <li class='list-group-item'>ID: ${data[1].id}</li>
            <li class='list-group-item'>Email: <a href="mailto:${data[1].email}">${data[1].email}</a></li>
            <li class='list-group-item'>School: ${data[1].school}</li>
          </ul>
        </div>  
        <div class='card d-flex m-3' style='width: 18rem;'>
          <div class='card-body bg-primary text-light'>
            <h5 class='card-title'>${data[2].name}</h5>
            <h5 class='card-title'>${data[2].getRole()}</h5>
          </div>
          <ul class='list-group list-group-flush'>
            <li class='list-group-item'>ID: ${data[2].id}</li>
            <li class='list-group-item'>Email: <a href="mailto:${data[2].email}">${data[2].email}</a></li>
            <li class='list-group-item'>GitHub: <a href="https://github.com/${data[2].gitHub}">Github</a></li>
          </ul>
        </div> 
      </div>      
    </body>
    </html>
    `;
  };
  
  module.exports = generatePage;