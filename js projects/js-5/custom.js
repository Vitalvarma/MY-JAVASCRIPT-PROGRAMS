let items = [];

const itemsDiv = document.getElementById("items");
const input = document.getElementById("iteminput");
const storageKey = "keys";

function renderItems(){
    itemsDiv.innerHTML = null;

    for(const [idx, item] of Object.entries(items)){

        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.style.dispaly = "inline"
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(idx)

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(text)
    }


}



function loadItems(){
    const oldItems = localStorage.getItem(storageKey)
    if(oldItems) items = JSON.parse(oldItems)
    renderItems()

}


function saveItems(){
    const stringItems  = JSon.stingify(items);
    localStorage.setItem(storageKey, stringItems)

}

function addItem(){

    const value = input.value;
    if(!value){
        alert("You cannot add an empty item")
        return;
    }
    items.push(value)
    renderItems()
    input.value = ""
    saveItems()
}

function removeItem(idx)
{
    items.slice(idx,1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)