function hitungDiskon() {
    const totalPembelianInput = document.getElementById('totalPembelian');
    const hasilDiskonElement = document.getElementById('hasilDiskon');
  
    const totalPembelian = parseFloat(totalPembelianInput.value);
  
    if (isNaN(totalPembelian)) {
      alert('Masukkan total pembelian dengan benar.');
      return;
    }
  
    let diskon = 0;
  
    if (totalPembelian > 1000000) {
      diskon = 0.25;
    } else if (totalPembelian > 500000) {
      diskon = 0.1;
    }
  
    const potonganHarga = totalPembelian * diskon;
    const totalBayar = totalPembelian - potonganHarga;
  
    hasilDiskonElement.innerHTML = `
      <p>Total Pembelian: Rp ${totalPembelian.toLocaleString()}</p>
      <p>Diskon: ${diskon * 100}%</p>
      <p>Potongan Harga: Rp ${potonganHarga.toLocaleString()}</p>
      <p>Total Bayar: Rp ${totalBayar.toLocaleString()}</p>
    `;
  }
  