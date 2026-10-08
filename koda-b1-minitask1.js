// nilai mx
let nilai1 = [80,85,70,90,60]
let nilai2 = [60, 99, 55]
const nilai = [...nilai1,...nilai2]

let cekNilaiMax = 0

for(let i=0; i < nilai.length; i++){
    if(nilai[i] > cekNilaiMax){
        cekNilaiMax = nilai[i]
    }
}
console.log(cekNilaiMax)


// nilai min

let nilaiSiswa1 = [80,85,70,90,60]
let nilaiSiswa2 = [20,80,60]
let nilaiSiswa = [...nilaiSiswa1,...nilaiSiswa2]
let cekNilaiMin = 100
for(let j=0; j < nilaiSiswa.length; j++){
    if(nilaiSiswa[j] <= cekNilaiMin){
        cekNilaiMin = nilaiSiswa[j]
    }
}
console.log(cekNilaiMin)


// average

let nilaiSiswaP1 = [90,97,92,34]
let nilaiSiswaP2 = [30, 10]
let nilaiSiswaP = [...nilaiSiswaP1, ...nilaiSiswaP2]
let average = 0
for(let k=0; k < nilaiSiswaP.length; k++){
    average = average + nilaiSiswaP[k]
}
average = average / nilaiSiswaP.length
console.log(average)
