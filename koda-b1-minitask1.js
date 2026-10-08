## Mencari Nilai Max

```mermaid
flowchart TD
    start((mulai)) --> NilaiArray["Array nilai1"]
    NilaiArray --> array2[Array nilai2]
    array2 --> spread["nilai = [...ArrayNilai1, ArrayNilai2]"]
    spread --> deklarasi[cekNilaiMax = 0]
    deklarasi --> i[i=0]
    i --> cek{"i < nilai.length"}
    cek -- ya --> kondisi{"nilai[i] > cekNilaiMax"}
    cek -- tidak --> selesai(((selesai)))

    kondisi -- ya --> simpan["cekNilaiMax = nilai[i]"]
    simpan --> increament[i++]
    increament --> cek
    kondisi -- tidak --> increament
```

## Nilai Min
```mermaid
flowchart TD
    start((mulai)) --> NilaiArray["ArraynilaiSiswa1"]
    NilaiArray --> array2[ArraynilaiSiswa2]
    array2 --> spread["nilaiSiswa = [...ArraynilaiSiswa1, ...ArraynilaiSiswa2]"]
    spread --> deklarasi[cekNilaiMin = 100]
    deklarasi --> i[j=0]
    i --> cek{"j < nilaiSiswa.length"}
    cek -- ya --> kondisi{"nilaiSiswa[j] <= cekNilaiMin"}
    cek -- tidak --> selesai(((selesai)))

    kondisi -- ya --> simpan["cekNilaiMin = nilaiSiswa[j]"]
    simpan --> increament[i++]
    increament --> cek
    kondisi -- tidak --> increament
```

## Hitung Rata Rata
```mermaid
flowchart TD
    start((mulai)) --> NilaiArray["ArrayNilaiSiswa1"]
    NilaiArray --> array2[ArraynilaiSiswa2]
    array2 --> spread["nilaiSiswa = [...ArraynilaiSiswa1, ...ArraynilaiSiswa2]"]
    spread --> deklarasi[average = 0]
    deklarasi --> i[k=0] 
    i --> cek{k < nilaiSiswa.length}
    cek -- ya --> simpan["average = average + nilaiSiswa[k]"]
    cek -- no --> kalkulasi[average = average / nilaiSiswa.length]
    simpan --> increment[i++]
    increment --> cek
    kalkulasi --> cetak[/cetak average/]
    cetak --> selesai(((selesai)))
```
