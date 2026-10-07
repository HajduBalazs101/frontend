document.getElementById("ujKonyv").onsubmit = function(event) {
    event.preventDefault()
    let data = {
        nev : document.getElementById("nev").value,
        kiadasEve : document.getElementById("kiadasEve").value,
        ertekeles : document.getElementById("ertekeles").value,
        kepneve : document.getElementById("kepneve").value
    }
    fetch("http://localhost:5000/Konyv", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type" : "application/json" }
    })
    .then(function() {
        location.href = "index.html"
    })
}