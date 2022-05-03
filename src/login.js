//import {} from 'dotenv/config'

document.getElementById('submit').addEventListener('click',async ()=>{
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    
    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            username: username,
            password: password
        }
    }

    fetch("http://localhost:3000/login", options).then(response =>{
        console.log(response)
    })    
})