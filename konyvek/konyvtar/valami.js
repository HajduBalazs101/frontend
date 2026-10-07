fetch("http://localhost:5000/Konvy").then(function(response) {
    return response.json();
}).then(function (data) {
    data.map((konyv => {
        console.log(konyv.nev);
    }))
})