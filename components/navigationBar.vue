<template>
  <div
    class="w-full h-[15vh] text-white bg-[rgb(223,0,0)] flex flex-col justify-center items-center text-sm pl-8"
  >
    <div class="w-full flex flex-col justify-center items-center gap-3">
      <div class="w-full flex justify-start items-center gap-3">
        <span
          class="cursor-pointer font-semibold text-xs flex justify-center items-center hover:underline"
          >Kampanyalar</span
        >
        <span
          class="flex justify-center items-center gap-0.5 cursor-pointer font-semibold text-xs hover:underline"
          ><svg fill="white" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M2.18 9.86A.49.49 0 0 1 2 9.32l.08-.25a.49.49 0 0 1 .44-.35l6.39-.51 2.45-5.89a.51.51 0 0 1 .51-.32h.26a.49.49 0 0 1 .47.32l2.46 5.89 6.39.51a.49.49 0 0 1 .44.35l.08.25a.49.49 0 0 1-.15.54L17 14l1.48 6.21a.51.51 0 0 1-.19.53l-.29.16a.5.5 0 0 1-.56 0L12 17.6l-5.47 3.33a.5.5 0 0 1-.56 0l-.22-.15a.51.51 0 0 1-.19-.53L7 14Z"
            ></path>
          </svg>
          MediaMarkt CLUB</span
        >
        <span
          class="cursor-pointer font-semibold text-xs flex justify-center items-center hover:underline"
          >Kurumsal Satış</span
        >
        <span
          class="cursor-pointer font-semibold text-xs flex justify-center items-center hover:underline"
          >Müşteri Hizmetleri</span
        >
        <span
          class="cursor-pointer font-semibold text-xs flex justify-center items-center hover:underline"
          >Artı Hizmetler</span
        >
      </div>
      <div class="w-full flex justify-start items-center gap-4">
        <img src="/public/images/logo.svg" alt="" width="200" />
        <button
          class="font-semibold w-[13%] flex justify-center gap-1 place-items-center border-2 border-white rounded-lg bg-transparent p-3 text-white cursor-pointer text-base"
          @click="toggleAllCategories"
        >
          <svg width="18" fill="white" viewBox="0 0 80 80" role="presentation">
            <path
              d="M4.726 9.507c-2.66 0-4.56 2.279-4.56 4.938s2.28 4.56 4.94 4.56h70.283c2.66 0 4.56-1.9 4.56-4.56s-1.9-4.938-4.56-4.938zm0 25.834c-2.66 0-4.56 1.9-4.56 4.559s2.28 4.559 4.94 4.559h70.283c2.66 0 4.56-1.9 4.56-4.56s-1.9-4.558-4.56-4.558zm0 25.454c-2.66 0-4.94 2.28-4.94 4.939s2.28 4.559 4.94 4.559H75.01c2.659 0 4.938-2.28 4.938-4.94s-2.28-4.938-4.938-4.938H4.726z"
            ></path>
          </svg>
          Tüm Kategoriler
        </button>
        <div
          class="w-[45%] relative bg-white flex justify-start items-center p-3 rounded text-[rgb(58,58,58)]"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            role="presentation"
          >
            <path
              fill="#808080"
              fill-rule="evenodd"
              d="M11 3a8 8 0 1 0 4.906 14.32l4.387 4.387 1.414-1.414-4.387-4.387A8 8 0 0 0 11 3m6 8a6 6 0 1 0-12 0 6 6 0 0 0 12 0"
              clip-rule="evenodd"
              data-darkreader-inline-fill=""
              style="--darkreader-inline-fill: #c3beb6"
            ></path>
          </svg>
          <span
            class="absolute left-[8%] z-2 transition-all duration-300 ease-in-out pointer-events-none"
            :style="{
              bottom: isSearching ? '60%' : '25%',
              fontSize: isSearching ? 'smaller' : 'larger',
            }"
            >Ne arıyorsunuz?</span
          >
          <input
            class="bg-white outline-none border-none text-[rgb(58,58,58)] w-full h-full"
            type="text"
            v-on:focus="isSearching = true"
            v-on:focusout="isSearching = false"
          />
        </div>

        <div
          class="cursor-pointer w-[10%] h-full flex flex-row justify-center items-center"
          @click="toggleMarketSearch"
        >
          <div class="flex flex-col justify-center items-center">
            <strong class="text-base">Mağazalarımız</strong>
            <span class="text-xs">Seçilmiş mağazanız yok</span>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            class="rotate-90 fill-white"
          >
            <path
              d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0Z"
            ></path>
          </svg>
        </div>
        <div class="flex w-auto h-full justify-center items-center gap-6">
          <div
            class="rounded-full p-3 flex justify-center items-center bg-white cursor-pointer hover:bg-[rgb(196,195,195)]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2m7.89 12.55L18 14.66A3 3 0 0 0 15.26 13H8.74a3 3 0 0 0-2.69 1.66l-1.94 3.89A1 1 0 0 0 5 20h14a1 1 0 0 0 .89-1.45M6.62 18l1.22-2.45a1 1 0 0 1 .9-.55h6.52a1 1 0 0 1 .9.55L17.38 18Z"
              ></path>
            </svg>
          </div>
          <div
            class="rounded-full p-3 flex justify-center items-center bg-white cursor-pointer hover:bg-[rgb(196,195,195)]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M21.5 4H5.72l-.56-1a2 2 0 0 0-1.74-1H2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.92l4.28 7.49a2.2 2.2 0 0 0 .27.35l-1.86 3.7a.77.77 0 0 0 0 .71l.22.38A.76.76 0 0 0 7 17h12.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H8.62l1-2.09a2.74 2.74 0 0 0 .64.09h6.23A2.94 2.94 0 0 0 19 11.49l2.35-4.13A4.76 4.76 0 0 0 22 5v-.5a.5.5 0 0 0-.5-.5m-4.22 6.5a1 1 0 0 1-.75.5H10.3a1 1 0 0 1-.86-.5L6.87 6h12.92c-.05.12-.09.25-.15.37ZM18 18a2 2 0 1 0 2 2 2 2 0 0 0-2-2M8 18a2 2 0 1 0 2 2 2 2 0 0 0-2-2"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toggleAllCategories: {
      type: Function,
      required: true,
    },
    toggleMarketSearch: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isSearching: false,
    };
  },
};
</script>
