fetch("http://localhost:5000/Konyv")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        data.map(function (konyv) {
            document.getElementById("kartyak").innerHTML += `
                <article class="card book-card">
                    <img src="${konyv.kepneve}" class="card-img-top" alt="${konyv.nev}">
                    <div class="card-body">
                        <h5 class="card-title">${konyv.nev}</h5>
                        <p class="card-text">Könyv azonosító: ${konyv.id}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Kiadás éve: ${konyv.kiadasEve}</li>
                        <li class="list-group-item">Értékelés: ${konyv.ertekeles}</li>
                    </ul>
                    <div class="card-actions">
                        <button class="btn btn-outline-info btn-sm">Részletek</button>
                        <button class="btn btn-outline-warning btn-sm" onclick="location.href='edit.html?id=${konyv.id}'">Módosítás</button>
                        <button class="btn btn-outline-danger btn-sm" onclick="torles(${konyv.id})">Törlés</button>
                    </div>
                </article>`;
        });
    })

function torles(id) {
    if (confirm("Biztosan törölni szeretnéd?")) {
        fetch("http://localhost:5000/Konyv/" + id, {
            method: "DELETE"
        })
        .then(function () {
            location.reload();
        });
    }
}
