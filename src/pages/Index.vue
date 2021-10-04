<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="q-pa-xs">
          <q-toolbar inset class ="shadow-2 rounded-borders bg-blue-10 text-white ">
            <div class="mb-3 mb-md-5 mx-auto text-center">
              <h5>Phishing Test</h5>
            </div>

            <q-space />
            <q-select
              v-model="locale"
              :options="localeOptions"
              :label="$t('lang')"
              class="customTextColor"
              options-selected-class="text-white"
              bg-color="bg-blue-10"
              label-color="white"
              color="white"
              popup-content-class="bg-blue-10 customeTextColor"
              dense
              borderless
              emit-value
              map-options
              options-dense
              style="min-width: 150px;color:white;"
              />
            <q-btn flat round dense icon="kayaking" />
            <q-btn flat round dense icon="password" />
            <q-btn flat round dense icon="attach_email" />
            <q-btn flat round dense icon="sentiment_satisfied_alt" />

          </q-toolbar>
        </div>

        <div class="row">

          <div class="col-md-5 col-xs-12 q-pt-lg q-pl-xl q-pr-xl">
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
            <div class="text-blue-grey-9 text-center">
              <h4>{{$t('title1')}}</h4>
              <p>{{$t('text1')}}</p>
            </div>
            <div class="q-pt-xl text-center">
              <q-btn @click="() => { router.push({ name: 'register' }) }" color="blue-10" rounded :label="$t('btn1')"/>
            </div>
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

export default defineComponent({
  setup () {
    const slide = ref('style')
    const router = useRouter()
    const autoplay = ref(2500)

    const { locale } = useI18n({ useScope: 'global' })
    //localeOptions: [
    //    { value: 'en-US', label: 'English' },
    //    { value: 'it', label: 'Italian' }
    //  ]


    return {
      slide,
      router,
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
