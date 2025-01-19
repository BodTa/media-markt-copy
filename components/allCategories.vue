<template>
  <div class="categories">
    <img src="/public/images/logo.svg" alt="" class="logo" />
    <h2>Tüm Kategoriler</h2>
    <ul>
      <li style="list-style-type: none;" v-for="category in categories" :key="category.id" class="category-item">
        <span v-on:mouseover="toggleCategory(category.id,true)">
          {{ category.name }}
        </span>
        <ul v-if="category.open">
          
          <li v-for="subCategory in category.subCategories" :key="subCategory.id">
            {{ subCategory.name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "Telefon",
          open: false,
          subCategories: [
            { id: 11, name: "Apple Telefonlar" },
            { id: 12, name: "Android Telefonlar" },
            { id: 13, name: "Akıllı Saat" },
            { id: 14, name: "Akıllı Bileklik" },
            { id: 15, name: "Kulaklıklar" },
            { id: 16, name: "Yapay Zeka Destekli Telefonlar" },
            { id: 17, name: "Katlanabilir Telefonlar" },
            { id: 18, name: "Telefon Aksesuarları" },
            { id: 19, name: "Masaüstü Telefonlar" },
            { id: 20, name: "Yenilenmiş Telefonlar" },
          ],
        },
        {
          id: 2,
          name: "Bilgisayar",
          open: false,
          subCategories: [
            { id: 21, name: "Laptoplar" },
            { id: 22, name: "Masaüstü Bilgisayarlar" },
            { id: 23, name: "Tabletler" },
            { id: 24, name: "Monitör" },
            { id: 25, name: "Yazıcı & Tarayıcı" },
            { id: 26, name: "Bilgisayar Bileşenleri" },
            { id: 27, name: "Çevre Birimleri" },
            { id: 28, name: "Ofis Malzemeleri" },
            { id: 29, name: "Hafıza ve Depolama" },
            { id: 30, name: "Bilgisayar & Tablet Aksesuarları" },
            { id: 31, name: "Oyuncu Aksesuarları" },
          ],
        },
        {
          id: 3,
          name: "TV, Görüntü ve Ses",
          open: false,
          subCategories: [
            { id: 32, name: "Televizyon" },
            { id: 33, name: "Media Player" },
            { id: 34, name: "Ses Sistemleri" },
            { id: 35, name: "Soundbar" },
            { id: 36, name: "Bluetooth Hoparlör" },
            { id: 37, name: "Kulaklıklar" },
            { id: 38, name: "Mikrofon" },
            { id: 39, name: "Projeksiyon" },
            { id: 40, name: "Uydu Alıcıları" },
            { id: 41, name: "TV Aksesuarları" },
            { id: 42, name: "Güvenlik Kamerası" },
          ],
        },
        {
          id: 4,
          name: "Aksesuar",
          open: false,
          subCategories: [
            { id: 43, name: "Telefon Aksesuarları" },
            { id: 44, name: "Oyun Konsolu Aksesuarları" },
            { id: 45, name: "Kablolar, Dönüştürücüler ve Prizler" },
            { id: 46, name: "Çanta ve Kılıflar" },
            { id: 47, name: "Network Ürünleri" },
            { id: 48, name: "Bilgisayar ve Tablet Aksesuarları" },
            { id: 49, name: "Foto Kamera Aksesuarları" },
            { id: 50, name: "Pil & Şarj Aleti" },
            { id: 51, name: "Giyilebilir Teknoloji" },
          ],
        },
        {
          id: 5,
          name: "Foto & Kamera & Drone",
          open: false,
          subCategories: [
            { id: 52, name: "Fotoğraf & Video" },
            { id: 53, name: "Aksiyon & Outdoor Kameralar" },
            { id: 54, name: "Yayıncı Ekipmanları" },
            { id: 55, name: "Drone" },
            { id: 56, name: "Aksesuarlar" },
            { id: 57, name: "Fotoğraf Yazıcıları & Kağıt" },
            { id: 58, name: "Ses Kayıt Sistemleri" },
            { id: 59, name: "Lens" },
            { id: 60, name: "Tripod" },
            { id: 61, name: "Gimbal" },
            { id: 62, name: "Dürbün & Teleskop & Mikroskop" },
            { id: 63, name: "Güvenlik Kamerası" },
          ],
        },
        {
          id: 6,
          name: "Beyaz Eşya",
          open: false,
          subCategories: [
            { id: 64, name: "Yuva Kuran Düğün Paketleri" },
            { id: 65, name: "Buzdolabı" },
            { id: 66, name: "Bulaşık Makineleri" },
            { id: 67, name: "Çamaşır & Kurutma Makineleri" },
            { id: 68, name: "Ankastre" },
            { id: 69, name: "Fırınlar" },
            { id: 70, name: "Ocaklar" },
            { id: 71, name: "Derin Dondurucular" },
            { id: 72, name: "Klimalar" },
            { id: 73, name: "Kombiler" },
          ],
        },
        {
          id: 7,
          name: "Ev Aletleri & Yaşam",
          open: false,
          subCategories: [
            { id: 74, name: "Kahve & Çay" },
            { id: 75, name: "Süpürgeler" },
            { id: 76, name: "Mutfak" },
            { id: 77, name: "Akıllı Ev Sistemleri" },
            { id: 78, name: "Evcil Hayvan Ürünleri" },
            { id: 79, name: "Ütüler" },
            { id: 80, name: "Isıtma & Soğutma" },
            { id: 81, name: "Aydınlatma Ürünleri" },
          ],
        },
        {
          id: 8,
          name: "Kişisel Bakım & Sağlık",
          open: false,
          subCategories: [
            { id: 82, name: "Ağız Bakım Ürünleri" },
            { id: 83, name: "Ayak Bakım Ürünleri" },
            { id: 84, name: "Sağlık Ürünleri" },
            { id: 85, name: "Saç Bakım Ürünleri" },
            { id: 86, name: "Erkek Bakım Ürünleri" },
            { id: 87, name: "Kadın Bakım Ürünleri" },
          ],
        },
        {
          id: 9,
          name: "Spor & Oyun & Outdoor",
          open: false,
          subCategories: [
            { id: 88, name: "Oyun Konsolları" },
            { id: 89, name: "Oyun Konsolu Aksesuarları" },
            { id: 90, name: "Oyunlar" },
            { id: 91, name: "Elektrikli Scooter" },
            { id: 92, name: "Elektrikli Bisiklet" },
            { id: 93, name: "Hoverboard" },
            { id: 94, name: "Taşınabilir Güç Kaynağı" },
          ],
        },
        {
          id: 10,
          name: "Markalar",
          open: false,
          subCategories: [
            { id: 95, name: "Altus" },
            { id: 96, name: "Apple" },
            { id: 97, name: "Arzum" },
            { id: 98, name: "Asus" },
            { id: 99, name: "Axen" },
            { id: 100, name: "Bosch" },
            { id: 101, name: "Braun" },
            { id: 102, name: "Canon" },
            { id: 103, name: "Casper" },
            { id: 104, name: "DJI" },
            { id: 105, name: "Dyson" },
            { id: 106, name: "Electrolux" },
            { id: 107, name: "Fakir" },
            { id: 108, name: "Grundig" },
            { id: 109, name: "HP" },
            { id: 110, name: "Huawei" },
            { id: 111, name: "JBL" },
            { id: 112, name: "KOENIC" },
            { id: 113, name: "Lenovo" },
            { id: 114, name: "LG" },
            { id: 115, name: "Logitech" },
            { id: 116, name: "Microsoft" },
            { id: 117, name: "PEAQ" },
            { id: 118, name: "Philips" },
            { id: 119, name: "Profilo" },
          ],
        },
      ],
    };
  },
  methods: {
    toggleCategory(id,open) {
      this.categories = this.categories.map((category) => {
        if (category.id === id) {
          for (let index = 0; index < 10; index++) {
            if (this.categories[index].id != id && this.categories[index].open) this.categories[index].open = false;
            else continue;
          }
          return { ...category, open: !category.open };
        }
        return category;
      });
    },
  },
};
</script>

<style scoped>
.logo {
  background-color: red;
  width: 190px;
  height: auto;
}

.categories {
  padding: 16px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 400px;
}

.category-item {
  margin-bottom: 12px;
  cursor: pointer;
}

.category-item > span {
  font-weight: bold;
  color: #333;
}

.category-item ul {
  margin-top: 8px;
  padding-left: 16px;
}

.category-item li {
  list-style-type: disc;
  color: #555;
}
</style>