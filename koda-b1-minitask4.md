## Flowchart Callback

### Callback memanggil function luas

```mermaid
flowchart TD
    start((mulai)) --> luas["lingkaran(8,luas)"]
    luas --> utama[r = 8 dan cb = luasLingkaran]
    utama --> return["return cb(8)"]
    return --> menuju["function luas(8)"]
    menuju --> rumus[luas = 3.14 * 8 * 8]
    rumus --> cetak[/cetak:Luas/]

    cetak --> selesai(((selesai)))
```

### Callback memanggil function keliling

```mermaid
flowchart TD
    start((mulai)) --> keliling["lingkaran(8,keliling)"]
    keliling --> utama[r = 8 dan cb = kelilingLingkaran]
    utama --> return["return cb(8)"]
    return --> menuju["function keliling(8)"]
    menuju --> rumus[keliling = 2 x 3.14 * 8]
    rumus --> cetak[/cetak:Keliling/]

    cetak --> selesai(((selesai)))
```
