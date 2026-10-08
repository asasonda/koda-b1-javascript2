function luasLingkaran(r) {
  console.log(r * r * 3.14)
}
function kelilingLingkaran(r) {
  console.log(2 * r * 3.14);
}

function lingkaran(r, cb) {
  return cb(r);
}

lingkaran(8, luasLingkaran);
lingkaran(8, kelilingLingkaran);
