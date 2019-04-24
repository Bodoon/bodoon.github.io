
if (localStorage.getItem('myitems') != undefined) {
    document.getElementById('list').insertAdjacentHTML('beforeEnd', localStorage.getItem('myitems'));;
}

var input = document.getElementById("toDoEl");

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("add").click();
  }
});

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
        store();
    } else if (ev.target.tagName === "SPAN") {
        var div = ev.target.parentNode;
        div.remove();
        store();
    }
}, false);


function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue == "") {
        alert("Enter your task");
    } else {
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    store();
};


function store() {
    window.localStorage.myitems = document.getElementById('list').innerHTML;
};

