
<script setup>
import { ref, computed } from "vue";

// Variabel untuk menyimpan input
const judulBuku = ref("");
const kategoriBuku = ref("Novel");
const sudahDibaca = ref(false);

// Menyimpan daftar buku
const daftarBuku = ref([]);

// Menghitung jumlah buku yang sudah selesai dibaca
const jumlahSelesai = computed(() => {
    return daftarBuku.value.filter((buku) => buku.selesai).length;
});

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


<!-- Ringkasan buku -->
<div class="ringkasan">
    <h3>Ringkasan Bacaan</h3>
    <p>
        Buku selesai dibaca:
        <strong>{{ jumlahSelesai }}</strong>
        dari
        <strong>{{ daftarBuku.length }}</strong>
        buku
    </p>
</div>

<!-- Daftar buku -->
<div class="daftar-buku">
    <h2>Daftar Buku</h2>

    <p v-if="daftarBuku.length === 0">
        Belum ada buku yang ditambahkan.
    </p>

    <div
        v-for="buku in daftarBuku"
        :key="buku.id"
        class="buku-item"
    >
        <h3>{{ buku.judul }}</h3>
        <p>Kategori: {{ buku.kategori }}</p>

        <span v-if="buku.selesai" class="status selesai">
            Sudah selesai dibaca
        </span>

        <span v-else class="status belum">
            Belum selesai dibaca
        </span>
    </div>
</div>
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

/* Judul dan subjudul aplikasi */
.buku-container > h1,
.buku-container > p {
    text-align: center;
}

h1 {
    font-size: 30px;
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

.ringkasan {
    margin-top: 25px;
    padding: 15px;
    background: #e8f5ee;
    border-radius: 8px;
}

.ringkasan h3 {
    color: #2c3e50;
    margin-bottom: 8px;
}

.daftar-buku {
    margin-top: 25px;
}

.daftar-buku h2 {
    margin-bottom: 15px;
    color: #2c3e50;
}

.buku-item {
    padding: 15px;
    margin-bottom: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.buku-item h3 {
    margin-bottom: 8px;
}

.status {
    display: inline-block;
    margin-top: 8px;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 12px;
}

.selesai {
    background: #d1fae5;
    color: #065f46;
}

.belum {
    background: #fef3c7;
    color: #92400e;
}

</style>
