document.getElementById('thisbutton').addEventListener('click', apiRequest)

async function apiRequest(){
    
    try{
        const response = await fetch(`https://v2.jokeapi.dev/joke/Programming?safe-mode`)
        const data = await response.json()
        
        if (data.type == 'single') {document.getElementById('joke').innerText = data.joke ; document.getElementById('joke2').innerText = ""}
        if (data.type == 'twopart') {document.getElementById('joke').innerText =  data.setup ; document.getElementById('joke2').innerText = data.delivery}
        
    }catch(error){
        console.log(error)
    }
}