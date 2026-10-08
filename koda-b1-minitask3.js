const lingkaran = {
    r: 8,
    luas: function(){
        let luas = this.r * this.r * 3.14 
        return luas
    },
    keliling: function(){
        let keliling = 2 * 3.14 * this.r
        return keliling 
    }
}
console.log(lingkaran.luas())
console.log(lingkaran.keliling())

function ringkasan(luas, keliling){
    luas = lingkaran.luas()
    keliling = lingkaran.keliling()
    return `Luas ${luas} dan keliling ${keliling}`
}
console.log(ringkasan())
