function addListItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("addTask").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("list").appendChild(li);
    }
    document.getElementById("addTask").value = "";
}
