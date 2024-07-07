function addItem() {
    var itemInput = document.getElementById("itemInput");
    var shoppingList = document.getElementById("shoppingList");
    var item = itemInput.value.trim();

    if (item !== "") {
        var listItem = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                listItem.classList.add("purchased");
            } else {
                listItem.classList.remove("purchased");
            }
        });
        var label = document.createElement("label");
        label.textContent = item;
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        shoppingList.appendChild(listItem);
        itemInput.value = "";
    }
}

function clearList() {
    var shoppingList = document.getElementById("shoppingList");
    shoppingList.innerHTML = "";
}