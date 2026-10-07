
fetch("http://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        data.map((item) => {
            document.getElementById("valami").innerHTML += `
            <li>${item.name}</li>
            `
        })
    });

function Delete(id) {
    if(confirm("Biztosan szeretnéd?"))
    { 
        fetch("http://jsonplaceholder.typicode.com/users/" + id, {
            method : "DELETE"
        }).then(location.reload())
    }
};




