
<script setup>
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();
</script>

<template>
    <div class="cart-container">
        <h1>Keranjang Belanja</h1>

        <div v-if="cartStore.items.length === 0">
            <p>Keranjang belanja masih kosong.</p>
        </div>

        <div v-else>
            <div
                v-for="produk in cartStore.items"
                :key="produk.id"
                class="cart-item"
            >
                <h3>{{ produk.nama }}</h3>

                <p>
                    Harga:
                    Rp {{ produk.harga.toLocaleString("id-ID") }}
                </p>

                <div class="quantity-control">
                    <button
                        class="quantity-button"
                        @click="cartStore.kurangiJumlah(produk.id)"
                    >
                        −
                    </button>

                    <span>{{ produk.jumlah }}</span>

                    <button
                        class="quantity-button"
                        @click="cartStore.tambahJumlah(produk.id)"
                    >
                        +
                    </button>
                </div>

                <p>
                    Subtotal:
                    Rp {{ (produk.harga * produk.jumlah).toLocaleString("id-ID") }}
                </p>

                <button
                    class="delete-button"
                    @click="cartStore.hapusProduk(produk.id)"
                >
                    Hapus Produk
                </button>
            </div>

            <div class="cart-summary">
                <h3>Total Item: {{ cartStore.totalItem }}</h3>

                <h2>
                    Total Harga:
                    Rp {{ cartStore.totalHarga.toLocaleString("id-ID") }}
                </h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cart-container {
    max-width: 900px;
    margin: 30px auto;
    padding: 20px;
}

h1 {
    color: #2c3e50;
    margin-bottom: 25px;
}

.cart-item {
    padding: 20px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: white;
}

.cart-item h3 {
    margin-bottom: 10px;
}

.cart-item p {
    margin-bottom: 12px;
    color: #555;
}

.quantity-control {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin: 15px0;
}

.quantity-control span {
    min-width: 25px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
}

.quantity-button {
    width: 35px;
    height: 35px;
    border: none;
    border-radius: 6px;
    background: #42b883;
    color: white;
    font-size: 20px;
    cursor: pointer;
}

.delete-button {
    padding: 9px 15px;
    border: none;
    border-radius: 6px;
    background: #e74c3c;
    color: white;
    cursor: pointer;
}

.cart-summary {
    margin-top: 25px;
    padding: 20px;
    border-radius: 10px;
    background: #f2f8f5;
}

.cart-summary h2 {
    margin-top: 10px;
    color: #42b883;
}
</style>
