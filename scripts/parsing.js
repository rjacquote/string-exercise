let fullName = "Roderick Jacquote";

function parseAndDisplayName(name) {
    let firstName = name.substring(0, name.indexOf(' '));
    let lastName = name.substring(name.indexOf(' ') + 1);

    let spanFull = document.getElementById('full');
    spanFull.innerText = name;

    let spanFirst = document.getElementById('first');
    spanFirst.innerText = firstName;
    
    let spanLast = document.getElementById('last');
    spanLast.innerText = lastName;

}



window.addEventListener('load', parseAndDisplayName(fullName));