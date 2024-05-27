function hitung_volume(){
    let panjang=parseInt(document.getElementById("panjang").value);
    let lebar=parseInt(document.getElementById("lebar").value);
    let tinggi=parseInt(document.getElementById("tinggi").value);

    let volume=panjang*lebar*tinggi;
    document.getElementById("volume").value = volume;
}