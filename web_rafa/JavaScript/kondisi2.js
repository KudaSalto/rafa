let jumlahbeli=parseInt(prompt("Masukan jumlah beli : "))
jumlahbeli = parseFloat(jumlahbeli)
var diskon = 0

if(jumlahbeli>=1000000){
    diskon=0,1*jumlahbeli
}
else if(jumlahbeli>=500000){
    diskon=0.05*jumlahbeli
}

var totalbayar = jumlahbeli - (jumlahbeli * diskon)

document.write("jumlah beli", jumlahbeli +"<br>")
document.write("diskon yang diterima", diskon*100, "%" +"<br>")
document.write("Total yang dibayar setelah diskon", totalbayar +"<br>")