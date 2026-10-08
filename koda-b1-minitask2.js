const dataPembeli = {
  nama: "Budi",
  email: "budi@gmail.com",
};

const detailPesanan = {
    id: 1,
    pesanan: "Baju",
    harga: 50000,
    jumlah: 2,
}

let fakturPembayaran = { ...dataPembeli, ...detailPesanan };
let statusPembayaran = true;
if (statusPembayaran) {
  fakturPembayaran.status = "Lunas";
  console.log('==== Detail Pembayaran ====')
  console.log(fakturPembayaran);
  console.log('===========================')
} else {
  console.log("Menunggu Pembayaran");
}
console.log(' ')

// ekstrak
let {harga, jumlah, nama, email} = fakturPembayaran
let totalHarga = harga * jumlah
console.log(`nama: ${nama}`)
console.log(`email: ${email}`)
console.log(`totalHarga : Rp${totalHarga}`)

console.log(`Struk dicetak untuk ${nama} ${email} dengan total tagihan Rp${totalHarga}`)
console.log(' ')


