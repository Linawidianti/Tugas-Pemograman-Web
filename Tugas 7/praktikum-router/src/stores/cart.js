
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

        hapusProduk(id) {
            this.items = this.items.filter(
                (produk) => produk.id !== id
            );
        }
    }
});
