function addItem() {
    const itemInput = document.getElementById("itemInput");
    const shoppingList = document.getElementById("shoppingList");
    
    const item = itemInput.value.trim();

    if (item !== "") {
        let listItem = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                listItem.classList.add("purchased");
            } else {
                listItem.classList.remove("purchased");
            }
        });
        let label = document.createElement("label");
        label.textContent = item;
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        shoppingList.appendChild(listItem);
        itemInput.value = "";
    }
}

function clearList() {
    let shoppingList = document.getElementById("shoppingList");
    shoppingList.innerHTML = "";
}