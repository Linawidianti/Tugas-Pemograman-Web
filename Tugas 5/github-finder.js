
const searchForm = document.getElementById("searchForm");
const usernameInput = document.getElementById("usernameInput");
const message = document.getElementById("message");
const profileResult = document.getElementById("profileResult");

const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const username = document.getElementById("username");
const bio = document.getElementById("bio");
const repos = document.getElementById("repos");
const profileLink = document.getElementById("profileLink");

const searchButton = searchForm.querySelector("button");

const searchGithubUser = async (githubUsername) => {
    try {
        
        message.textContent = "Sedang mencari profil...";
        message.style.color = "#0969da";

        profileResult.hidden = true;
        searchButton.disabled = true;

        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(githubUsername)}`
        );

        if (response.status === 404) {
            throw new Error("User tidak ditemukan");
        }

        if (!response.ok) {
            throw new Error("Terjadi kesalahan saat mengambil data");
        }

        const data = await response.json();

        avatar.src = data.avatar_url;
        name.textContent = data.name || "Nama tidak tersedia";
        username.textContent = `@${data.login}`;
        bio.textContent = data.bio || "Bio tidak tersedia";
        repos.textContent = data.public_repos;
        profileLink.href = data.html_url;

        profileResult.hidden = false;

        message.textContent = "";

    } catch (error) {

        message.textContent = error.message;
        message.style.color = "#d1242f";

        profileResult.hidden = true;

    } finally {

        searchButton.disabled = false;
    }
};

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const githubUsername = usernameInput.value.trim();

    if (githubUsername === "") {
        message.textContent = "Silakan masukkan username GitHub";
        message.style.color = "#d1242f";
        profileResult.hidden = true;
        return;
    }

    searchGithubUser(githubUsername);
});
