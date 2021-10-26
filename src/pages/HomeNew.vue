<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div >
          <div class="row">
          <q-toolbar class ="bg-white-10 text-blue-10">
            <q-toolbar-title class="q-ma-md">Spamley</q-toolbar-title>
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
        <q-separator inset color="primary" />
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

          <div class="col-md-7 col-xs-12 q-pt-lg q-pl-xl q-pr-xl">
            <q-card>
            <q-card-section>
            <div class="text-blue-grey-9 text-center text-justify q-m-lg">
              <p style="font-size: 125%;">{{$t('intro1')}}</p><p style="font-size: 125%;">{{$t('intro2')}}</p><p style="font-size: 125%;">{{$t('intro3')}}</p><p style="font-size: 125%;">{{$t('intro4')}}</p><p style="font-size: 125%;">{{$t('intro5')}}</p><p style="font-size: 125%;">{{$t('intro6')}}</p>
            </div>
            </q-card-section>
            <q-card-actions>
              <q-btn @click="start()" flat color="blue-10" :label="$t('btn1')"/>
            </q-card-actions>
            </q-card>

          </div>
        </div>






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
