document.querySelector("button").addEventListener("click", fetchFight)

async function fetchFight(){
  let input = document.querySelector("input").value
  let apiFetch = await fetch(`https://daf-savage-api.herokuapp.com/api/${input}`)
  let data = await apiFetch.json()

  console.log(data)

  let list = document.querySelector("ul")
  let raidName = document.querySelector("h2")
  while(list.firstChild){
    list.removeChild(list.firstChild)
  }

  raidName.innerText = data.name
  data.strats.forEach((currStrat,i) =>{
    let li = document.createElement("li")
    li.innerText= `${Object.keys(data.strats[i])}: ${Object.values(data.strats[i])}`
    console.log(li)
    list.appendChild(li)
  })


}
