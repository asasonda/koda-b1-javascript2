// nilai mx
let nilai = [80,85,70,90,60]
let cekNilaiMax = 0

for(let i=0; i < nilai.length; i++){
    if(nilai[i] > cekNilaiMax){
        cekNilaiMax = nilai[i]
    }
}
console.log(cekNilaiMax)


// nilai min
let nilaiSiswa = [80,85,70,90,60]
let cekNilaiMin = 100
for(let j=0; j < nilaiSiswa.length; j++){
    if(nilaiSiswa[j] <= cekNilaiMin){
        cekNilaiMin = nilaiSiswa[j]
    }
}
console.log(cekNilaiMin)


// average
let average = 0
for(let k=0; k < nilaiSiswa.length; k++){
    average = average + nilaiSiswa[k]
}
average = average / nilaiSiswa.length
console.log(average)