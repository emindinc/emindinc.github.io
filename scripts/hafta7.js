// Hafta 7 - JavaScript Etkileşimleri

// 1) Tema Değiştirme
var temaButonu = document.getElementById("temaButonu");

temaButonu.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        temaButonu.textContent = "Açık Temaya Geç";
    } else {
        temaButonu.textContent = "Koyu Temaya Geç";
    }
});

// 2) Form Submit - Başvuru Özeti Oluşturma
var basvuruFormu = document.getElementById("basvuruFormu");

basvuruFormu.addEventListener("submit", function (e) {
    e.preventDefault();

    // Form alanlarını al
    var ad = document.getElementById("adSoyad").value.trim();
    var eposta = document.getElementById("eposta").value.trim();
    var bolum = document.getElementById("bolum").value.trim();
    var sinif = document.getElementById("sinif").value;
    var oturum = document.getElementById("oturum").value;
    var katilim = document.getElementById("katilim").value;
    var mesaj = document.getElementById("mesaj").value.trim();
    var kvkk = document.getElementById("kvkk").checked;

    // Eksik alan kontrolü
    if (!ad || !eposta || !bolum || !sinif || !oturum || !katilim) {
        var uyariAlani = document.getElementById("uyariAlani");
        uyariAlani.textContent = "Lütfen tüm zorunlu alanları doldurunuz!";
        uyariAlani.style.display = "block";

        // Sonuç alanını gizle
        document.getElementById("ozetIcerik").style.display = "none";
        return;
    }

    if (!kvkk) {
        var uyariAlani = document.getElementById("uyariAlani");
        uyariAlani.textContent = "Lütfen KVKK onay kutucuğunu işaretleyiniz!";
        uyariAlani.style.display = "block";
        document.getElementById("ozetIcerik").style.display = "none";
        return;
    }

    // Uyarıyı gizle
    document.getElementById("uyariAlani").style.display = "none";

    // Sınıf metnini al
    var sinifSelect = document.getElementById("sinif");
    var sinifMetni = sinifSelect.options[sinifSelect.selectedIndex].text;

    // Oturum metnini al
    var oturumSelect = document.getElementById("oturum");
    var oturumMetni = oturumSelect.options[oturumSelect.selectedIndex].text;

    // Katılım metnini al
    var katilimSelect = document.getElementById("katilim");
    var katilimMetni = katilimSelect.options[katilimSelect.selectedIndex].text;

    // Özet kartını oluştur
    var ozetHTML = "";
    ozetHTML += '<div class="ozet-kart">';
    ozetHTML += '<h5 style="margin-bottom: 15px; color: #336699;">Başvuru Özeti</h5>';
    ozetHTML += '<p><strong>Ad Soyad:</strong> ' + ad + '</p>';
    ozetHTML += '<p><strong>E-posta:</strong> ' + eposta + '</p>';
    ozetHTML += '<p><strong>Bölüm:</strong> ' + bolum + '</p>';
    ozetHTML += '<p><strong>Sınıf:</strong> ' + sinifMetni + '</p>';
    ozetHTML += '<p><strong>Oturum:</strong> ' + oturumMetni + '</p>';
    ozetHTML += '<p><strong>Katılım Türü:</strong> ' + katilimMetni + '</p>';

    if (mesaj) {
        ozetHTML += '<p><strong>Mesaj:</strong> ' + mesaj + '</p>';
    }

    ozetHTML += '<hr>';
    ozetHTML += '<small style="color: #888;">Başvurunuz başarıyla oluşturuldu.</small>';
    ozetHTML += '</div>';

    // Sonuç alanına yaz
    var ozetIcerik = document.getElementById("ozetIcerik");
    ozetIcerik.innerHTML = ozetHTML;
    ozetIcerik.style.display = "block";

    // Sonuç alanına kaydır
    ozetIcerik.scrollIntoView({ behavior: "smooth" });
});

// 3) Formu Temizle
var temizleButonu = document.getElementById("temizleButonu");

temizleButonu.addEventListener("click", function () {
    basvuruFormu.reset();
    document.getElementById("uyariAlani").style.display = "none";
    document.getElementById("ozetIcerik").style.display = "none";
});
