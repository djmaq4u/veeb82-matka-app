const teadeKasutajale = document.getElementById("teadeKasutajale")

var n = document.getElementById("naasmiseLyliti")
n.style.display = "none"


function registreeru(matkaIndeks) {
    var s = document.getElementById("saatmiseLyliti")
    s.style.display = "none"
    n.style.display = "block"

    //console.log("Func saatis selle teate!")
    teadeKasutajale.innerHTML = ""

    const nimeVali = document.getElementById("nimi")
    const teateVali = document.getElementById("teade")
    const nimi = nimeVali.value
    const teade =  teateVali.value

    const aadress = `/api/registreeru?matk=${matkaIndeks}&nimi=${nimi}`

    // settings on objekt
    const settings = {
        url: aadress,
        method: 'GET',
        headers: {}
    }

    $.ajax(settings).done(function (response) {
        console.log("Registreerimine õnnestus")
        teadeKasutajale.innerHTML = "Registreerumine õnnestus!"
    })

    // KODUS: kui registreerumise tulemus õnnestub, näita tulemust ekraanil. Praegu on see konsoolis nähtav
    // SAADA nuppu asenda näiteks tekstina "Õnnestus saatmine" ja lisa link esilehele tagasiminekuks
    // tee nii, et registreerumise vormil oleks juba näha, palju on sellele matkale juba registreerunuid, näita numbrina
    
    // ???? vana teade kasutajale konktakti lehe alt
    //teadeKasutajale.innerHTML = "Aitäh! Teie teade on saadetud! Võtame vajadusel ühendust :)"
    
    
    nimeVali.value =""
    teateVali.value =""
}

function pealehele()
{
  window.location = '/';   
}