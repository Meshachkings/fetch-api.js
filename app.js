
// GET LOCAL TEXT FILE
document.getElementById('get-text').addEventListener
('click', getText);


function getText(){
    //fetch the file
    fetch('text.txt')
        .then(function(res){
            return res.text();
        })
        .then(function(data){
            console.log(data);
            document.getElementById('output')
            .innerHTML= data;
        })
        .catch(function(err){
            console.log(err)
        })
}

// GET LOCAL JSON FILE
document.getElementById('get-json').addEventListener
('click', getJson);


function getJson(){
    //fetch the file
    fetch('text.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            const jsonfile = data;
            
            let output = '';
            jsonfile.forEach(function(post){
                output += `
                    <h3>${post.title}</h3>
                    <li>${post.body}</li>
                `;
                document.getElementById('output').innerHTML = output;

            })

        })
        .catch(function(err){
            console.log(err)
        })
}


// GET FROM EXTERNAL API

document.getElementById('get-api').addEventListener
('click', getApi);


function getApi(){
    //fetch the file
    fetch('https://api.github.com/users')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            const jsonfile = data;
            
            let output = '';
            jsonfile.forEach(function(user){
                output += `
                    
                    <li>${user.login}</li>
                `;
                document.getElementById('output').innerHTML = output;

            })

        })
        .catch(function(err){
            console.log(err)
        })
}