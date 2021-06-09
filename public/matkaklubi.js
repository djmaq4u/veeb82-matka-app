console.log("test")

const matk1 = {
    nimetus: "Jalgsimatk Kõrvemaal",
    pildiURL: "./pildid/BMW_pealtnagija_foto.jpg",
    kohti: 12,
    kirjeldus: "Kõrvemaal ootavad Sind võrratu loodusmaastik, tähistatud tervise-, matka- ja loodusrajad.",
    registreerunud: ['Mati', 'Kati', 'Rebase-Rein', 'Jänku Juta'],
}

const matk2 = {
    nimetus: "Süstamatk ümber Hiiumaa",
    pildiURL: "./pildid/klassikas.jpg",
    kohti: 6,
    kirjeldus: "Hiiumaa laiud on parimaks süstamatka piirkonnaks Baltimaades.",
    registreerunud: ['Rebase-Rein', 'Jänku Juta'],
}

const matk3 = {
    nimetus: "Jalgrattamatk Virumaal",
    pildiURL: "./pildid/126_2667.JPG",
    kohti: 10,
    kirjeldus: "Ida-Virumaa, mis on tuntud rohkem tööstuslinnade ja tuhamägede poolest, võlub mererandade, pankranniku ning looduslike matkaradadega.",
    registreerunud: ['Rebase-Rein', 'Jänku Juta'],
}

const matk4 = {
    nimetus: "Kepikõnnimatk ümber Tartu",
    pildiURL: "./pildid/Mon_25.bmp",
    kohti: 2,
    kirjeldus: "Emajõe Ateenas on lihtsalt mõnus komberdada!",
    registreerunud: ['Järviste Andres'],
}

const matkad = [matk1, matk2, matk3, matk4]

function naitaMatkaAndmeid(matk, indeks) {
    const valjundElement = document.getElementById("matkade_valjund")
    const vabadKohad = matk.kohti - matk.registreerunud.length
    let valjundHtml = `
        <div class="col-md-4 card">
            <img class="card-img-top" src="${matk.pildiURL}" alt="">
            <div class="card-body">
                <h4 class="card-title">${matk.nimetus}</h4>
                <p class="card-text">
                   ${matk.kirjeldus}
                </p>
                <p class="card-text">
                   Veel on vabu kohti: ${vabadKohad}
                </p>
                <a href="/registreeru/${indeks}" class="btn btn-success">Registreeru</a>
            </div>
        </div>
    `

    valjundElement.innerHTML += valjundHtml
}

/*
let i = 0;
for (const matk of matkad) {
    naitaMatkaAndmeid(matk, i)
    i++
}
*/

//matkad.forEach((matk, indeks) => naitaMatkaAndmeid(matk, i))

matkad.forEach(naitaMatkaAndmeid)

