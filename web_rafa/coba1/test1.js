function hitungDiskon() {
    const jumlahBarang = parseInt(document.getElementById('jumlah_barang').value);
    const hargaPerBarang = parseInt(document.getElementById('harga_per_barang').value);
    
    let diskon = 0;

    if (jumlahBarang >= 100) {
        diskon = 0.10;
    } else if (jumlahBarang > 50) {
        diskon = 0.05;
    } else if (jumlahBarang >= 5) {
        diskon = 0.01;
    }

    const totalHarga = jumlahBarang * hargaPerBarang;
    const jumlahDiskon = totalHarga * diskon;
    const totalHargaSetelahDiskon = totalHarga - jumlahDiskon;

    const hasil = `
        <p>Total Harga: Rp ${totalHarga.toFixed(2)}</p>
        <p>Jumlah Diskon: Rp ${jumlahDiskon.toFixed(2)}</p>
        <p>Total Harga Setelah Diskon: Rp ${totalHargaSetelahDiskon.toFixed(2)}</p>
    `;

    document.getElementById('hasil').innerHTML = hasil;
}
