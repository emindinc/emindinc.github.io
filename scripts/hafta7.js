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

// 2) Form Submit - Kayıt Özeti Oluşturma
var basvuruFormu = document.getElementById("basvuruFormu");

basvuruFormu.addEventListener("submit", function (e) {
    e.preventDefault();

    // Form alanlarını al
    var ad = document.getElementById("adSoyad").value.trim();
    var eposta = document.getElementById("eposta").value.trim();
    var takim = document.getElementById("bolum").value.trim();
    var seviye = document.getElementById("sinif").value;
    var senaryo = document.getElementById("oturum").value;
    var ekipman = document.getElementById("katilim").value;
    var mesaj = document.getElementById("mesaj").value.trim();
    var kvkk = document.getElementById("kvkk").checked;

    // Eksik alan kontrolü
    if (!ad || !eposta || !takim || !seviye || !senaryo || !ekipman) {
        var uyariAlani = document.getElementById("uyariAlani");
        uyariAlani.textContent = "Lütfen tüm zorunlu alanları doldurunuz!";
        uyariAlani.style.display = "block";

        // Sonuç alanını gizle
        document.getElementById("ozetIcerik").style.display = "none";
        return;
    }

    if (!kvkk) {
        var uyariAlani = document.getElementById("uyariAlani");
        uyariAlani.textContent = "Lütfen etkinlik kurallarını kabul ediniz!";
        uyariAlani.style.display = "block";
        document.getElementById("ozetIcerik").style.display = "none";
        return;
    }

    // Uyarıyı gizle
    document.getElementById("uyariAlani").style.display = "none";

    // Seviye metnini al
    var seviyeSelect = document.getElementById("sinif");
    var seviyeMetni = seviyeSelect.options[seviyeSelect.selectedIndex].text;

    // Senaryo metnini al
    var senaryoSelect = document.getElementById("oturum");
    var senaryoMetni = senaryoSelect.options[senaryoSelect.selectedIndex].text;

    // Ekipman metnini al
    var ekipmanSelect = document.getElementById("katilim");
    var ekipmanMetni = ekipmanSelect.options[ekipmanSelect.selectedIndex].text;

    // Özet kartını oluştur
    var ozetHTML = "";
    ozetHTML += '<div class="ozet-kart">';
    ozetHTML += '<h5 style="margin-bottom: 15px; color: #8B4513;">Kayıt Özeti</h5>';
    ozetHTML += '<p><strong>Ad Soyad:</strong> ' + ad + '</p>';
    ozetHTML += '<p><strong>E-posta:</strong> ' + eposta + '</p>';
    ozetHTML += '<p><strong>Takım:</strong> ' + takim + '</p>';
    ozetHTML += '<p><strong>Deneyim:</strong> ' + seviyeMetni + '</p>';
    ozetHTML += '<p><strong>Senaryo:</strong> ' + senaryoMetni + '</p>';
    ozetHTML += '<p><strong>Ekipman:</strong> ' + ekipmanMetni + '</p>';

    if (mesaj) {
        ozetHTML += '<p><strong>Not:</strong> ' + mesaj + '</p>';
    }

    ozetHTML += '<hr>';
    ozetHTML += '<small style="color: #888;">Kaydınız başarıyla oluşturuldu. Etkinlik günü görüşmek üzere!</small>';
    ozetHTML += '</div>';

    // Sonuç alanına yaz
    var ozetIcerik = document.getElementById("ozetIcerik");
    ozetIcerik.innerHTML = ozetHTML;
    ozetIcerik.style.display = "block";

    // Boş uyarıyı gizle
    document.getElementById("bosUyari").style.display = "none";

    // Sonuç alanına kaydır
    ozetIcerik.scrollIntoView({ behavior: "smooth" });
});

// 3) Formu Temizle
var temizleButonu = document.getElementById("temizleButonu");

temizleButonu.addEventListener("click", function () {
    basvuruFormu.reset();
    document.getElementById("uyariAlani").style.display = "none";
    document.getElementById("ozetIcerik").style.display = "none";
    document.getElementById("bosUyari").style.display = "block";
});
