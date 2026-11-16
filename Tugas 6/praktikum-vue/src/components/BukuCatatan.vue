
<script setup>
import { ref } from "vue";

// Variabel untuk menyimpan input
const judulBuku = ref("");
const kategoriBuku = ref("Novel");
const sudahDibaca = ref(false);

// Menyimpan daftar buku
const daftarBuku = ref([]);

// Fungsi untuk menambahkan buku
const tambahBuku = () => {
    if (judulBuku.value.trim() === "") {
        alert("Judul buku tidak boleh kosong!");
        return;
    }

    const bukuBaru = {
        id: Date.now(),
        judul: judulBuku.value,
        kategori: kategoriBuku.value,
        selesai: sudahDibaca.value
    };

    daftarBuku.value.push(bukuBaru);

    // Mengosongkan form setelah ditambahkan
    judulBuku.value = "";
    kategoriBuku.value = "Novel";
    sudahDibaca.value = false;
};
</script>

<template>
    <div class="buku-container">
        <h1>Aplikasi Buku Catatan</h1>
        <p>Catat dan kelola buku yang sedang kamu baca.</p>

        <form @submit.prevent="tambahBuku">
            <label>Judul Buku</label>
            <input
                type="text"
                v-model="judulBuku"
                placeholder="Masukkan judul buku"
            >

            <label>Kategori Buku</label>
            <select v-model="kategoriBuku">
                <option value="Novel">Novel</option>
                <option value="Komik">Komik</option>
                <option value="Pendidikan">Pendidikan</option>
                <option value="Teknologi">Teknologi</option>
                <option value="Sejarah">Sejarah</option>
                <option value="Biografi">Biografi</option>
            </select>

            <label class="checkbox-label">
                <input type="checkbox" v-model="sudahDibaca">
                Sudah selesai dibaca
            </label>

            <button type="submit">Tambahkan Buku</button>
        </form>
    </div>
</template>

<style scoped>
.buku-container {
    max-width: 500px;
    margin: 40px auto;
    padding: 25px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
}

h1 {
    margin-bottom: 10px;
    color: #2c3e50;
}

p {
    color: #666;
    margin-bottom: 25px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

label {
    font-weight: bold;
}

input[type="text"],
select {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: normal;
}

button {
    padding: 12px;
    background: #42b883;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    background: #369c70;
}
</style>
