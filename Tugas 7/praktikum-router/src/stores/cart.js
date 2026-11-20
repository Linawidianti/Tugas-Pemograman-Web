
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        items: []
    }),

    getters: {
        totalItem: (state) => {
            return state.items.reduce(
                (total, produk) => total + produk.jumlah,
                0
            );
        },

        totalHarga: (state) => {
            return state.items.reduce(
                (total, produk) =>
                    total + produk.harga * produk.jumlah,
                0
            );
        }
    },

    
actions: {
    addToCart(produk) {
        const produkAda = this.items.find(
            (item) => item.id === produk.id
        );

        if (produkAda) {
            produkAda.jumlah++;
        } else {
            this.items.push({
                ...produk,
                jumlah: 1
            });
        }
    },

    tambahJumlah(id) {
        const produk = this.items.find(
            (item) => item.id === id
        );

        if (produk) {
            produk.jumlah++;
        }
    },

    kurangiJumlah(id) {
        const produk = this.items.find(
            (item) => item.id === id
        );

        if (produk) {
            produk.jumlah--;

            if (produk.jumlah <= 0) {
                this.hapusProduk(id);
            }
        }
    },

    hapusProduk(id) {
        this.items = this.items.filter(
            (produk) => produk.id !== id
        );
    }
}
});

