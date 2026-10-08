const apiUrl = "http://localhost:3000/games";

if (document.getElementById("container")) {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            let html = "";
            data.forEach(game => {
                html += `
                <div class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="card h-100 shadow-sm border-0">
                        <img src="${game.imageUrl}" class="card-img-top" style="height: 220px; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-center"><b>${game.title}</b></h5>
                            <p class="card-text text-center text-muted">${game.genre}</p>
                            <p class="card-text text-center font-weight-bold">${game.releaseYear}</p>
                            <div class="mt-auto pt-3">
                                <button onclick="window.location.href='editgame.html?id=${game.id}'" class="btn btn-warning btn-block mb-2">✏️ Módosítás</button>
                                <button onclick="Torol(${game.id})" class="btn btn-outline-danger btn-sm btn-block">Törlés</button>
                            </div>
                        </div>
                    </div>
                </div>`;
            });
            document.getElementById("container").innerHTML = html;
        })
        .catch(err => console.error("Hiba az adatok lekérésekor:", err));
}
const jatekform = document.getElementById("ujjatekform");
if (jatekform) {
    jatekform.addEventListener("submit", function (e) {
        e.preventDefault();
        const ujjatek = {
            title: document.getElementById("gametitle").value,
            genre: document.getElementById("gamegenre").value,
            releaseYear: document.getElementById("gamereleaseyear").value,
            imageUrl: document.getElementById("gameimageurl").value,
        };
        fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(ujjatek)
        })
            .then(res => {
                if (res.ok) {
                    window.location.href = "index.html";
                }
            });
    })
}
function Torol(id) {
    if (confirm("Valóban törlöd?")) {
        fetch(`${apiUrl}/${id}`, { method: "DELETE" })
            .then(() => window.location.reload());
    }
}

const editgameform = document.getElementById("editjatekform");
if (editgameform) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    fetch(apiUrl + "/" + id)
        .then(res => res.json())
        .then(jatek => {
            document.getElementById("gametitle").value = jatek.title;
            document.getElementById("gamegenre").value = jatek.genre;
            document.getElementById("gamereleaseyear").value = jatek.releaseYear;
            document.getElementById("gameimageurl").value = jatek.imageUrl;
        })
        .catch(err => console.error("Hiba az adatok betöltésekor:", err));

    editgameform.addEventListener("submit", function (e) {
        e.preventDefault();
        const modositottjatek = {
            title: document.getElementById("gametitle").value,
            genre: document.getElementById("gamegenre").value,
            releaseYear: document.getElementById("gamereleaseyear").value,
            imageUrl: document.getElementById("gameimageurl").value
        };
        fetch(apiUrl + "/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(modositottjatek)
        })
        .then(res => {
            if (res.ok) {
                window.location.href = "index.html";
            }
        })
        .catch(err => console.error("Hiba a módosításkor:", err));
    });
}