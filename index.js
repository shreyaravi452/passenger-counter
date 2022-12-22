// document.getElementById("count-el").innerText = 5
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let count = 0
function increment() {
    count+=1
    countEl.textContent=count
}

function save() {
    let storenums = count + " - "
    saveEl.textContent += storenums
    count = 0
    countEl.textContent=count
    console.log(count)
}