function ceckUmur() {
    var tanggalLahir = new Date('2005-02-18');
var tanggalHariIni = new Date();
var umurSekarang = tanggalHariIni.getFullYear() - tanggalLahir.getFullYear();
if (tanggalHariIni.getMonth() < tanggalLahir.getMonth() || (tanggalHariIni.getMonth() === tanggalLahir.getMonth() && tanggalHariIni.getDate() < tanggalLahir.getDate())) {
    umurSekarang--;
}
let umurNow = umurSekarang;
console.log(umurNow)
return umurNow;
}

function umur() {
    var age = ceckUmur();
    var h1 = document.getElementById("umur");
    h1.innerText += " " + age;
}
umur();

function popup() {
    var biodata = document.getElementById("biodata");
    if (biodata.style.display === "none") {
        biodata.style.display = "block";
        biodata.style.animationName = "fade";
    } else {
        biodata.style.animationName = "fadeout";
        setTimeout(function() {
            biodata.style.display = "none";
        }, 300);
    }
}