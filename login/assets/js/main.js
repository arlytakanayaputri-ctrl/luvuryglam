/*===== FOCUS =====*/
const inputs = document.querySelectorAll(".form__input")

/*=== Add focus ===*/
function addfocus(){
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}

/*=== Remove focus ===*/
function remfocus(){
    let parent = this.parentNode.parentNode
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

/*=== To call function===*/
inputs.forEach(input=>{
    input.addEventListener("focus",addfocus)
    input.addEventListener("blur",remfocus)
})

document.addEventListener("DOMContentLoaded", function () {
    // 1. Mengambil elemen form berdasarkan ID yang ada di HTML
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        // 2. Mendeteksi ketika user menekan tombol submit/login
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Menahan halaman agar tidak otomatis refresh

            // 3. Mengambil teks yang diketik user di input username & password
            const usernameInput = document.getElementById("username").value;
            const passwordInput = document.getElementById("password").value;

            // 4. Memeriksa apakah username dan password-nya cocok
            if (usernameInput === "admin" && passwordInput === "12345") {
                
                // Jika benar, simpan nama ke dalam browser (localStorage)
                localStorage.setItem("username", usernameInput);
                
                alert("Login Berhasil!");
                
                // Berjalan mundur keluar dari folder login menuju index.html utama
                window.location.href = "../index.html"; 
                
            } else {
                // Jika salah, tampilkan pesan peringatan
                alert("Username atau password salah! (Gunakan: admin & 12345)");
            }
        });
    }
});


