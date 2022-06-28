<template>
  <q-layout>
        <div>
          <div class="row">
          <q-toolbar class ="shadow-2 bg-blue-10 text-white">
            <div class="customTextColor q-ml-xl q-pb-xs q-pt-xs gt-sm">
            <q-select
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
              style="min-width:150px;color:white;"
            >
              <q-avatar class="q-mb-sm" size="24px">
                <img :src="$t('img')"/>
              </q-avatar>
            </q-select>
            </div>
            <div class="customTextColor q-ml-sm q-pb-xs q-pt-xs lt-md">
            <q-select
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
              style="min-width:150px;color:white;"
            >
              <q-avatar class="q-mb-sm" size="24px">
                <img :src="$t('img')"/>
              </q-avatar>
            </q-select>
            </div>
          </q-toolbar>
		  </div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-3 col-xs-12 q-mt-xl q-mt-xl q-pt-xl q-pl-xl q-pr-xl gt-md">

				<q-img style="height: 230px; width: 300px" src="https://i.ibb.co/1nYJj84/Logo-Spamley-Copia.png" />

          </div>

		  <div class="col-md-1 lt-lg"></div>

          <div class="col-lg-7 col-md-12 col-xs-12 q-pt-md q-pl-xl q-pr-md">
            <div class="text-blue-grey-9 text-center text-justify q-ma-sm gt-sm">
			  <h4 class="text-blue-10 text-center" style="font-weight:bold;">{{$t('intro1')}}</h4>
			  <p class="q-mr-md q-ml-md">{{$t('intro2')}}{{$t('intro3')}}{{$t('intro4')}}<br>{{$t('intro5')}}{{$t('intro6')}}<br>{{$t('intro7')}}<br><br>{{$t('intro8')}}<br>{{$t('intro9')}}</p>
            </div>

			<div class="text-blue-grey-9 text-center text-justify q-ma-sm lt-md">
			  <h4 class="text-blue-10 text-center" style="font-weight:bold;">{{$t('intro1')}}</h4>
			  <p class="q-mr-md q-ml-md">{{$t('intro2')}}{{$t('intro3')}}{{$t('intro4')}}<br>{{$t('intro5')}}{{$t('intro6')}}<br>{{$t('intro7')}}<br><br>{{$t('intro8')}}<br>{{$t('intro9')}}</p>
            </div>

          </div>
        </div>
    <div class="row q-mt-md" style="margin-bottom:10.5%;">
      <div class="col-lg-4 col-md-3 col-sm-1 col-xs-1"></div>

      <q-input class="col-lg-2 col-md-2 col-sm-4 col-xs-5 q-pl-lg"
                  v-if="visible"
                  name="code"
                  outlined
                  v-model="prova"
                  :label="$t('codiceopzionale')"
                  :hint="$t('inserirecodice')"
                />
      <div class="col-lg-1 col-md-2 col-sm-2 col-xs-1"></div>
      <q-btn class="col-lg-2 col-md-2 col-sm-3 col-xs-4 q-mb-lg"  padding="16px" outline @click="start()"  color="blue-10" :label="$t('btn1')"/>
    </div>



        <q-card div class="row bg-white-3 q-pb-sm shadows">
          <div class="col col-md-1 col-sm-4 col-xs-3 q-ml-md q-mt-sm">
            <q-img class="q-mb-sm"
            src="https://sworld.co.uk/img/img/18/268/originals/0.png"
            spinner-color="white"
            size="100px"
            style="height: 80px; max-width: 110px"
          />
          </div>

          <div class="col col-md-3 col-sm-6 col-xs-8 ">
            <div class="text-blue-10 q-mt-lg q-ml-lg" style="font-size:85%;">
            Università degli Studi di Napoli "Federico II" <br> Dipartimento di Ingegneria Elettrica e delle Tecnologie dell'Informazione
          </div>
          </div>

          <div class="col-md-2 q-mr-sm"></div>
		  <q-separator class="gt-xs" vertical inset />
          <div class="col-md-5 col-xs-12 q-pt-md q-pl-md q-pr-md">
            <div class="text-blue-grey-9 text-center text-justify q-ml-xs" style="font-size:90%;margin-top:-1.5%;">
              <div class="text-blue-10">{{$t('contacts')}}</div>
              <span style="font-weight: bold;">Alessio Botta</span> a.botta[at]unina.it  <br><span style="font-weight: bold;">Luigi Gallo</span> luigi.gallo3[at]unina.it<br><span style="font-weight: bold;">Saverio Ruggiero</span> saverio.ruggiero[at]unina.it<br><span style="font-weight: bold;">Danilo Gentile</span> danil.gentile[at]studenti.unina.it
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
import { api } from 'boot/axios';
export default defineComponent({

  created(){
  this.checkLinkCode()

},


  setup() {
    const slide = ref("style");
    const groupCode = ref(false)
    const router = useRouter();
    const autoplay = ref(2500);
    const store = useStore();
    const code = ref("")
    const prova = ref("")
    const visible = ref(true)
    const { locale } = useI18n({ useScope: "global" });
    const start = () => {
       if (prova.value == "ps1ch0"){
        //api.defaults.baseURL = "https://spamley.comics.unina.it/backpsico/"
      }
      store.dispatch('auth/prova',prova);
      store.dispatch("email/get_home");
      router.push({ name: "register" });

    };



    const checkLinkCode = async () => {
          prova.value = router.currentRoute.value.fullPath.substring(2,);
          //console.log(prova.value.length)
          if (prova.value.length != 20){
            prova.value = ""
          }else{
            visible.value = false
          }

          //console.log(visible)


    }



    return {
      checkLinkCode,
      visible,
      slide,
      router,
      groupCode,

      start,
      prova,
      autoplay,
      code,
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
