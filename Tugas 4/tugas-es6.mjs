const transaksiBelanja = [
  { id: 1, barang: "Apel Merah", harga: 5000, qty: 4, kategori: "Buah" },
  { id: 2, barang: "Pisang Cavendish", harga: 15000, qty: 1, kategori: "Buah" },
  { id: 3, barang: "Susu UHT Kotak", harga: 6000, qty: 3, kategori: "Minuman" },
  { id: 4, barang: "Air Mineral", harga: 4000, qty: 2, kategori: "Minuman" },
  { id: 5, barang: "Roti Tawar", harga: 12000, qty: 1, kategori: "Makanan" },
  { id: 6, barang: "Biskuit Cokelat", harga: 8000, qty: 2, kategori: "Makanan" }
];

const filterByKategori = (data, targetKategori) =>
  data.filter(({ kategori }) => kategori.toLowerCase() === targetKategori.toLowerCase());

const hitungSubtotal = (data) =>
  data.map(({ id, barang, harga, qty, kategori }) => ({
    id,
    barang,
    harga,
    qty,
    kategori,
    subtotal: harga * qty
  }));

const hitungTotal = (dataDenganSubtotal) =>
  dataDenganSubtotal.reduce((akumulator, { subtotal }) => akumulator + subtotal, 0);

const kategoriPilihan = "Buah";

const hasilFilter = filterByKategori(transaksiBelanja, kategoriPilihan);

const daftarDenganSubtotal = hitungSubtotal(hasilFilter);

const totalBelanja = hitungTotal(daftarDenganSubtotal);

console.log(`=== Daftar Transaksi Kategori: ${kategoriPilihan} ===`);
daftarDenganSubtotal.forEach(({ barang, harga, qty, subtotal }) => {
  console.log(`- ${barang} (${qty} x Rp${harga.toLocaleString("id-ID")}) = Rp${subtotal.toLocaleString("id-ID")}`);
});
console.log("--------------------------------------------------");
console.log(`Total Keseluruhan (${kategoriPilihan}): Rp${totalBelanja.toLocaleString("id-ID")}`);

const semuaDenganSubtotal = hitungSubtotal(transaksiBelanja);
const grandTotal = hitungTotal(semuaDenganSubtotal);
console.log(`Grand Total Semua Kategori: Rp${grandTotal.toLocaleString("id-ID")}`);