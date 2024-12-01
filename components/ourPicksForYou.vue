<template>
    <div class="ourPicksForYou">
        <p 
        style="color: white; 
        font-size: 30px; 
        padding-left: 16px;">
        Sizin için Seçtiklerimiz
    </p>
        <div class="ourPicksForYou-container">
            <div class="ourPicksForYou-item">
                <span class="appPoint">App'e Özel 5 Kat Puan</span>
                <img src="/public/images/philipsDST7510.png" alt="" />
                <span>PHILIPS DST7510/80 Azur Buharlı Ütü Koyu Lacivert</span>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup></script>

<style>

.ourPicksForYou {
    padding-top: 30px;
}

.appPoint {
    color: rgb(198, 196, 196);
    margin: 10px;
    padding: 5px;
    text-align: center;
    font-size: 13px;
    border: 2px solid red;
    border-radius: 20px;

}

.ourPicksForYou {
background-color: black;
}

.ourPicksForYou-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 5px;
}

.ourPicksForYou-item {
    border: 2px;
    border-color: gray;
}

</style>
  