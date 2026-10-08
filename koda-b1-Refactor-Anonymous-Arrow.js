const profile = function(nama,umur=18){
    return{
        namaLengkap: nama,
        umur: umur,
        kategori: umur >= 18 ? "Dewasa" : "remaja"
    }
}
console.log(profile('budi',20))

// arrow
const buatProfile = (nama, umur=18) => {
    return{
        nama: nama,
        umur: umur,
        kategori: umur >= 18 ? 'Dewasa' : 'anak-anak'
    }
}
console.log(buatProfile('Ayam', 16))