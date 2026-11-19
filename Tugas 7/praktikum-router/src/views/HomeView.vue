
<script setup>
import ProductCard from "../components/ProductCard.vue";
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();

// Data produk
const daftarProduk = [
    {
        id: 1,
        nama: "Laptop ASUS",
        deskripsi: "Laptop untuk kebutuhan kuliah dan pekerjaan.",
        harga: 7500000
    },
    {
        id: 2,
        nama: "Mouse Wireless",
        deskripsi: "Mouse tanpa kabel untuk laptop dan komputer.",
        harga: 150000
    },
    {
        id: 3,
        nama: "Keyboard Mechanical",
        deskripsi: "Keyboard nyaman untuk mengetik dan coding.",
        harga: 350000
    }
];

// Fungsi sementara untuk menguji tombol beli
const beliProduk = (produk) => {
    cartStore.addToCart(produk);
    alert(produk.nama + " berhasil ditambahkan ke keranjang!");
};
</script>

<template>
    <div class="home-container">
        <h1>Beranda Katalog Produk</h1>
        <p>Silakan pilih produk yang ingin kamu beli.</p>

        <div class="product-list">
            <ProductCard
                v-for="produk in daftarProduk"
                :key="produk.id"
                :produk="produk"
                @beli="beliProduk"
            />
        </div>
    </div>
</template>

<style scoped>
.home-container {
    max-width: 1000px;
    margin: 30px auto;
    padding: 20px;
}

h1 {
    color: #2c3e50;
    margin-bottom: 18px;
}

.home-container p {
    line-height: 1.6;
}

.product-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-top: 25px;
}
</style>
