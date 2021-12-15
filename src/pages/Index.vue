<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div>
          <div class="row">
          <q-toolbar class ="shadow-2 bg-blue-10 text-white">
            <q-toolbar-title class="q-ml-xl" >Spamley</q-toolbar-title>
            <div class="customTextColor">
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
              />
            </div>
            <q-btn class="gt-sm" flat round dense icon="kayaking"/>
            <q-btn class="gt-sm" flat round dense icon="password"/>
            <q-btn class="gt-sm" flat round dense icon="attach_email"/>
            <q-btn class="gt-sm" flat round dense icon="sentiment_satisfied_alt"/>
          </q-toolbar>
        </div>
        </div>

        <div class="row">

          <div class="col-md-5 col-xs-12 q-pt-lg q-pl-xl q-pr-xl gt-sm">
            <q-card>
              <q-card-section>
                <q-carousel
                  v-model="slide"
                  transition-prev="scale"
                  transition-next="scale"
                  swipeable
                  animate
                  control-color="blue-10"
                  navigation
                  padding
                  arrows
                  :autoplay="autoplay"
                  infinite
                  @mouseenter="autoplay = false"
                  @mouseleave="autoplay = true"
                  height="300px"
                  class="text-blue-10 rounded-borders"
                >
                  <q-carousel-slide name="style" class="column no-wrap flex-center">
                    <q-icon name="attach_email" size="56px" />
                    <div class="q-mt-md text-center">
                      {{$t('carousel1')}}
                    </div>
                  </q-carousel-slide>
                  <q-carousel-slide name="tv" class="column no-wrap flex-center">
                    <q-icon name="security" size="56px" />
                    <div class="q-mt-md text-center">
                      {{$t('carousel2')}}
                    </div>
                  </q-carousel-slide>
                  <q-carousel-slide name="layers" class="column no-wrap flex-center">
                    <q-icon name="sentiment_satisfied_alt" size="56px" />
                    <div class="q-mt-md text-center">
                      {{$t('carousel3')}}
                    </div>
                  </q-carousel-slide>
                </q-carousel>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-md-7 col-xs-12 q-pt-md q-pl-md q-pr-md">
            <div class="text-blue-grey-9 text-center text-justify q-ma-sm">
              <p style="font-size: 125%;">{{$t('intro1')}}</p><p style="font-size: 125%;">{{$t('intro2')}}</p><p style="font-size: 125%;">{{$t('intro3')}}</p><p style="font-size: 125%;">{{$t('intro4')}}</p><p style="font-size: 125%;">{{$t('intro5')}}</p><p style="font-size: 125%;">{{$t('intro6')}}</p>
            </div>
            <div class="q-pt-xl text-center">
              <q-btn @click="start()" style="margin-bottom:25%;" color="blue-10" :label="$t('btn1')"/>
            </div>
          </div>
        </div>


          <q-card div class="row bg-white-3 q-pa-xs shadows">
          <div class="col col-md-1 col-sm-4 col-xs-3 q-ml-md q-mt-lg">
            <q-img class="q-mb-sm"
            src="http://areacomunicazione.policlinico.unina.it/wp-content/uploads/2014/02/logo-federico-II-blu.png"
            spinner-color="white"
            size="100px"
            style="height: 70px; max-width: 70px"
          />
          </div>

          <div class="col col-md-3 col-sm-8 col-xs-8 ">
            <div class="text-blue-10 q-mt-lg q-ml-lg" style="font-size:85%;">
            Università degli Studi di Napoli "Federico II" <br> Dipartimento di Ingegneria Elettrica e delle Tecnologie dell'Informazione
          </div>
          </div>
          <div class="col-md-2 q-mr-sm"></div>
          <q-separator class="gt-xs" vertical inset />

          <div class="col-md-5 col-xs-12 q-pt-md q-pl-md q-pr-md">

            <div class="text-blue-grey-9 text-center text-justify q-ml-xs" style="font-size:90%;margin-top:-1.5%;">
              <div class="text-blue-10">{{$t('contacts')}}</div>
              <span style="font-weight: bold;">Alessio Botta</span> a.botta@unina.it  <br><span style="font-weight: bold;">Luigi Gallo</span> luigi.gallo3@unina.it<br><span style="font-weight: bold;">Saverio Ruggiero</span> sav.ruggiero@studenti.unina.it<br><span style="font-weight: bold;">Ilaria Panaro</span> il.panaro@studenti.unina.it
            </div>
          </div>
          </q-card>

      </q-page>
    </q-page-container>



  </q-layout>
</template>

<script>
import { defineComponent, ref,watch } from 'vue'
import { useRouter } from 'vue-router'
import {i18n } from 'boot/i18n.js'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
export default defineComponent({
  setup () {
    const slide = ref('style')
    const router = useRouter()
    const autoplay = ref(2500)
    const store = useStore()

    const { locale } = useI18n({ useScope: 'global' })


    const start = () => {
       store.dispatch('email/get_home')
       router.push({ name: 'register'})

    }

    return {
      slide,
      router,
      start,
      autoplay,
      locale,
      localeOptions: [
        { value: 'en-US', label: 'English' },
        { value: 'it', label: 'Italiano' }
      ]

    }
  }
})

</script>

<style>
.customTextColor .q-field__native{
  color: white;
}

</style>
