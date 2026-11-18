
<script setup>
defineProps({
    produk: {
        type: Object,
        required: true
    }
});

defineEmits(["beli"]);
</script>

<template>
    <div class="product-card">
        <h3>{{ produk.nama }}</h3>
        <p>{{ produk.deskripsi }}</p>
        <h4>Rp {{ produk.harga.toLocaleString("id-ID") }}</h4>

        <button @click="$emit('beli', produk)">
            Beli Sekarang
        </button>
    </div>
</template>

<style scoped>
.product-card {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: white;
}

.product-card h3 {
    margin-bottom: 10px;
    color: #2c3e50;
}

.product-card p {
    color: #666;
    margin-bottom: 12px;
}

.product-card h4 {
    margin-bottom: 15px;
    color: #42b883;
}

button {
    padding: 10px 15px;
    border: none;
    border-radius: 6px;
    background: #42b883;
    color: white;
    cursor: pointer;
}
</style>
