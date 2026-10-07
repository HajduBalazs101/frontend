const id = new URLSearchParams(window.location.search).get('id');

fetch("http://localhost:5000/Konyv/" + id)
.then(res => res.json())
.then(data => {
    document.getElementById("nev").value = data.nev;
    document.getElementById("kiadasEve").value = data.kiadasEve;
    document.getElementById("ertekeles").value = data.ertekeles;
    document.getElementById("kepneve").value = data.kepneve;

});

const form = document.getElementById("editKonyvek");
if (form) {
    form.onsubmit = function(event) {
        event.preventDefault();

        let data = {
            id: parseInt(id), 
            nev: document.getElementById("nev").value, 
            kiadasEve: parseInt(document.getElementById("kiadasEve").value),          
            ertekeles: parseFloat(document.getElementById("ertekeles").value),
            kepneve: document.getElementById("kepneve").value
        };


    fetch("http://localhost:5000/Konyv/" + id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type" : "application/json" }
    })
    .then(() => {
        location.href = "index.html";
    });
}};