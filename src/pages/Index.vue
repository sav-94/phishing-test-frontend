<template>
  <q-layout view="lHh lpr fff">
    <q-header>
      <div
        class="row"
        style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png')"
      >
        <q-toolbar
          class="text-white bg-blue-10 q-pa-xs"
          style="background-color: rgba(0, 72, 124,0.4)"
        >


          <div class="customTextColor">
            <q-select class="q-mr-xl q-ml-xl gt-xs"
              v-model="locale"
              :options="localeOptions"
              :label="$t('lang')"
              transition-show="scale"
              transition-hide="scale"
              dense
              bg-color="bg-blue-10"
              label-color="white"
              color="white"
              popup-content-class="bg-blue-10"
              use-chips="true"
              borderless
              emit-value
              map-options
              options-dense
              style="min-width: 150px; color: white"
            >
              <q-avatar class="q-mb-sm q-ml-xl" size="24px">
                <img :src="$t('img')" />
              </q-avatar>
            </q-select>

            <q-select class="q-mr-xs lt-sm"
              v-model="locale"
              :options="localeOptions"
              :label="$t('lang')"
              transition-show="scale"
              transition-hide="scale"
              dense
              bg-color="bg-blue-10"
              label-color="white"
              color="white"
              popup-content-class="bg-blue-10"
              use-chips="true"
              borderless
              emit-value
              map-options
              options-dense
              style="min-width: 150px; color: white"
            >
              <q-avatar class="q-mb-sm q-ml-xl" size="24px">
                <img :src="$t('img')" />
              </q-avatar>
            </q-select>
          </div>
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png'">
      <q-page style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png'">
        <div
          class="row"
        >


    <div class="row text-center gt-md">
        <div class="descript col-xs-12 col-sm-12 col-md-12 q-ma-xs">
          <h1 class="text-blue-10" style="font-weight:bold;">{{$t('intro1')}}</h1>
          <p class="q-mr-md q-ml-md">{{$t('intro2')}}{{$t('intro3')}}{{$t('intro4')}}<br>{{$t('intro5')}}{{$t('intro6')}}<br>{{$t('intro7')}}<br>{{$t('intro8')}}<br>{{$t('intro9')}}</p>
          <q-btn outline @click="start()" class="q-pt-xs q-pl-xl q-pr-xl q-pb-xs q-mt-xl" size="lg" color="blue-10" :label="$t('btn1')"/>
        </div>
      </div>


          <div class="row">



          <div class="col-md-1"></div>
          <div class="col-lg-7 col-md-10 col-sm-12 col-xs-12 q-pt-md q-pl-md q-pr-md gt-xs lt-lg">
            <div class="text-blue-grey-9 text-center text-justify gt-xs">
              <p class="text-blue-10" style="font-size: 175%;font-weight:bold;margin:auto;display:flex;justify-content:center;overflow-wrap:break-word;">{{$t('intro1')}}</p><br><p style="font-size: 110%;margin:auto;overflow-wrap:break-word">{{$t('intro2')}}</p><p style="font-size: 110%;margin:auto;">{{$t('intro3')}}</p><p style="font-size: 110%;margin:auto;">{{$t('intro4')}}</p><p style="font-size: 110%;margin:auto;">{{$t('intro5')}}</p><p style="font-size: 110%;margin:auto;">{{$t('intro6')}}</p><p style="font-size: 110%;margin:auto;">{{$t('intro7')}}</p><br><p class="text-blue-10 text-justify text-center" style="font-size: 110%;margin:auto;display:flex;justify-content:center;">{{$t('intro8')}}</p><p style="font-size: 110%;margin:auto;">{{$t('intro9')}}</p>
            </div>
            <div class="q-pt-md text-center">
              <q-btn @click="start()" style="margin-bottom:11%;" color="blue-10" :label="$t('btn1')"/>
            </div>
          </div>

        <div class="col-md-7 col-sm-11 col-xs-11 q-ml-md q-mr-md q-pr-sm lt-sm">
            <div class="text-blue-grey-9 text-center text-justify lt-sm">
              <p class="text-blue-10 q-mt-xs q-mt-md" style="font-size: 175%;font-weight:bold;margin:auto;display:flex;justify-content:center;">{{$t('intro1')}}</p><p style="font-size: 110%;margin:auto;">{{$t('intro2')}}</p><p style="font-size: 110%;margin:auto;">{{$t('intro3')}}</p><p style="font-size: 110%;margin:auto;">{{$t('intro4')}}</p><p style="font-size: 110%;margin:auto;">{{$t('intro5')}}</p><p style="font-size: 110%;margin:auto;">{{$t('intro6')}}</p><p style="font-size: 110%;margin:auto;">{{$t('intro7')}}</p><br><p class="text-blue-10 text-justify text-center" style="font-size: 150%;margin:auto;display:flex;justify-content:center;">{{$t('intro8')}}</p><p style="font-size: 110%;margin:auto;">{{$t('intro9')}}</p>
            </div>
            <div class="q-pt-md text-center">
              <q-btn outline @click="start()" size="md" style="margin-bottom:20%;" color="blue-10" :label="$t('btn1')"/>
            </div>
          </div>
        </div>
          </div>
      </q-page>
    </q-page-container>

    <q-card
          div
          class="row q-pt-md"
          style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png'"
        >

          <div
            class="col col-md-1 col-sm-4 col-xs-3 q-ml-md q-mt-lg"
            style="margin-top: 0.5%"
          >
            <q-img
              class="q-mb-sm"
              src="https://sworld.co.uk/img/img/18/268/originals/0.png"
              spinner-color="white"
              size="100px"
              style="height: 80px; max-width: 110px"
            />
          </div>

          <div class="col col-md-3 col-sm-7 col-xs-8">
            <div class="text-blue-10 q-mt-lg q-ml-lg gt-sm" style="font-size: 85%">
              Università degli Studi di Napoli "Federico II" <br />
              Dipartimento di Ingegneria Elettrica e delle Tecnologie
              dell'Informazione
            </div>

            <div class="text-blue-10 q-mt-xs q-ml-lg lt-md" style="font-size: 85%">
              Università degli Studi di Napoli "Federico II" <br />
              Dipartimento di Ingegneria Elettrica e delle Tecnologie
              dell'Informazione
            </div>
          </div>
          <div class="col-md-2 q-mr-sm"></div>


          <div class="col-md-5 col-xs-12 q-pt-md q-pl-md q-pr-md gt-sm">
            <div
              class="text-blue-grey-9 text-center text-justify q-ml-xs q-mb-xl"
              style="font-size: 90%; margin-top: -1.5%"
            >
              <div style="font-weight:bold;" class="text-blue-10">{{ $t("contacts") }}</div>
              <span style="font-weight: bold">Alessio Botta</span>
              a.botta[at]unina.it <br /><span style="font-weight: bold"
                >Luigi Gallo</span
              >
              luigi.gallo3[at]unina.it<br /><span style="font-weight: bold"
                >Saverio Ruggiero</span
              >
              sav.ruggiero[at]studenti.unina.it<br /><span
                style="font-weight: bold"
                >Danilo Gentile</span
              >
              danil.gentile[at]studenti.unina.it<br>
              <span
                style="font-weight: bold"
                >Ilaria Panaro</span
              >
              il.panaro[at]studenti.unina.it
            </div>
          </div>
        </q-card>
  </q-layout>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { i18n } from "boot/i18n.js";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const slide = ref("style");
    const router = useRouter();
    const autoplay = ref(2500);
    const store = useStore();

    const { locale } = useI18n({ useScope: "global" });
    const start = () => {
      store.dispatch("email/get_home");
      router.push({ name: "register" });
    };

    return {
      slide,
      router,
      start,
      autoplay,
      locale,
      localeOptions: [
        { value: "en-US", label: "English" },
        { value: "it", label: "Italiano" },
      ],
    };
  },
});
</script>

<style>
.customTextColor .q-field__native {
  color: white;
}
</style>
