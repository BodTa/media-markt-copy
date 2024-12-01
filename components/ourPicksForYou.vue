<template>
    <div class="ourPicksForYou">
        <p 
        style="color: white; 
        font-size: 30px; 
        padding-left: 16px; font-weight: bold;">
        Sizin için Seçtiklerimiz
    </p>
        <div class="ourPicksForYou-container">
            <div class="ourPicksForYou-item">
                <p class="appPoint">App'e Özel 5 Kat Puan</p>
                <img class="appPointimg" src="/public/images/philipsDST7510.png" alt="" />
                <p class="ourPicksForYou-p">PHILIPS DST7510/80 Azur Buharlı Ütü Koyu Lacivert</p>
                <p style="color: white; font-size: 30px; font-weight: bold; height: 6px; padding-left: 13px;">₺2.799-</p>
                <p style="color: white; font-size: 13px; text-decoration: underline; padding-left: 13px;">KDV dahil ücretsiz kargo</p>
            </div>
            <div class="ourPicksForYou-item">
                <img src="/public/images/ourPicksForYouPhoto2.png" alt="" style="padding: 10px;"/>
                <p style="color: white; padding-left: 10px; font-weight: bold; font-size: 13px;">Ürün önerilerine izin verin</p>
                <p style="color: white; padding-left: 10px; font-size: 13px;">İlgi alanlarınıza bağlı olarak, sistemimiz aracılığıyla gerçekten ilginizi çeken ürünleri önerebiliriz. Bunu burada kabul etmelisiniz.</p>
                <button style="width: 200px; height: 50px; font-size: 20px; font-weight: bold; border-radius: 10px; margin-top: 80px; margin-left: 12px;">Etkinleştir</button>
                <p style="color: white; padding-left: 24px; font-weight: bold; font-size: 15px;">Daha fazla bilgi Tıklayın</p>
            </div>
            <div class="ourPicksForYou-item">
                <p class="appPoint">App'e Özel 5 Kat Puan</p>
                <img class="appPointimg" src="/public/images/SamsungGalaxyTabS9.png" alt="" />
                <p class="ourPicksForYou-p">SAMSUNG Galaxy Tab S9 FE+ Wifi 128GB Tablet Gri SM-...</p>
                <p style="color: white; font-size: 30px; font-weight: bold; height: 6px; padding-left: 13px;">₺2.799-</p>
                <p style="color: white; font-size: 13px; text-decoration: underline; padding-left: 13px;">KDV dahil ücretsiz kargo</p>
            </div>
            <div class="ourPicksForYou-item">
                <p class="appPoint">App'e Özel 5 Kat Puan</p>
                <img class="appPointimg" src="/public/images/ALTUSAL101.png" alt="" />
                <p class="ourPicksForYou-p">PHILIPS DST7510/80 Azur Buharlı Ütü Koyu Lacivert</p>
                <p style="color: white; font-size: 30px; font-weight: bold; height: 6px; padding-left: 13px;">₺2.799-</p>
                <p style="color: white; font-size: 13px; text-decoration: underline; padding-left: 13px;">KDV dahil ücretsiz kargo</p>
            </div>
            <div class="ourPicksForYou-item">
                <p class="appPoint">App'e Özel 5 Kat Puan</p>
                <img class="appPointimg" src="/public/images/GRUNDIGGPWM.png" alt="" />
                <p class="ourPicksForYou-p">PHILIPS DST7510/80 Azur Buharlı Ütü Koyu Lacivert</p>
                <p style="color: white; font-size: 30px; font-weight: bold; height: 6px; padding-left: 13px;">₺2.799-</p>
                <p style="color: white; font-size: 13px; text-decoration: underline; padding-left: 13px;">KDV dahil ücretsiz kargo</p>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup></script>

<style>

.ourPicksForYou {
    padding-top: 30px;
}

.ourPicksForYou-p {
    color: white;
    padding-left: 13px;
    font-weight: bold;
}

.appPoint {
    color: rgb(198, 196, 196);
    margin: 10px;
    padding: 3px;
    text-align: center;
    font-size: 9px;
    width: 100px;
    border: 2px solid red;
    border-radius: 20px;

}

.appPointimg {
    width: 220px;
    height: auto;
}

.ourPicksForYou {
background-color: black;
}

.ourPicksForYou-container {
  display: flex;
  flex-wrap: initial;
  justify-content: space-around;
  gap: 5px;
  padding-left: 6px;
}

.ourPicksForYou-item {
    border: 1px solid gray;
    border-radius: 10px;
    width: 230px;
}

</style>
  