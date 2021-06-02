const teadeKasutajale = document.getElementById("teadeKasutajale")

function kliendiTagasiside() {
    //console.log("Func saatis selle teate!")
    teadeKasutajale.innerHTML = ""

    const nimeVali = document.getElementById("nimi")
    const teateVali = document.getElementById("teade")
    const nimi = nimeVali.value
    const teade =  teateVali.value

    const valjundObjekt = {
        nimiVoiEmail: nimi,
        teade: teade
    }

    console.log("Toimus sisestus veebilehe kontaktivormi kaudu. Nimi/E-post: " + valjundObjekt.nimiVoiEmail + " TEADE: " + valjundObjekt.teade)
    teadeKasutajale.innerHTML = "Aitäh! Teie teade on saadetud! Võtame vajadusel ühendust :)"
    nimeVali.value =""
    teateVali.value =""
}