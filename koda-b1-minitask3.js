const lingkaran = {
    r: 8,
    luas: function(){
        let luas
        luas = this.r * this.r * 3.14 
        return luas
    },
    keliling: function(){
        let keliling
        keliling = 2 * 3.14 * this.r
        return keliling 
    }
}
console.log(lingkaran.luas())
console.log(lingkaran.keliling())