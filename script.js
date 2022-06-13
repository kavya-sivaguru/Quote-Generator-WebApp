fetch("https://api.adviceslip.com/advice")
.then((response) => response.json())
.then((data)=> loadAdvice(data))
.catch((error)=> console.log(error))

function loadAdvice(data){
    const container = document.querySelector(".container")
    container.innerHTML =
     `<h4 class="advice">${data.slip.advice}</h4>
     <button class="next" onclick="window.location.reload(true)">Next</button>
     `
}