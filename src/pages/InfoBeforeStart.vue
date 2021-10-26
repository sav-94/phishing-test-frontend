<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="q-pa-xs">
          <q-toolbar inset class ="shadow-2 rounded-borders bg-blue-10 text-white ">
            <div class="mb-3 mb-md-5 mx-auto text-center">
              <q-toolbar-title>{{$t('someInfo')}}</q-toolbar-title>

            </div>

            <q-space />

            <q-btn class="gt-sm" flat round dense icon="kayaking" />
            <q-btn class="gt-sm" flat round dense icon="password" />
            <q-btn class="gt-sm" flat round dense icon="attach_email" />
            <q-btn class="gt-sm" flat round dense icon="sentiment_satisfied_alt" />

          </q-toolbar>
        </div>

        <div class="row">

          <div class="col-md-2 col-xs-12 q-pt-lg q-pl-xl q-pr-xl">
          </div>



          <div class="col-md-8 col-xs-12 q-pt-lg q-pl-xl q-pr-xl">
            <div class="text-black-9 text-center text-justify q-m-lg">

              <p>{{$t('before_starting_string1')}}</p>
              <p class="text-center" style="font-weight: bold;">{{$t('before_starting_string2')}}</p>
              <p>{{$t('before_starting_string3')}}<br>{{$t('before_starting_string4')}}<br>{{$t('before_starting_string5')}}</p>
              <p style="font-weight: bold;">{{$t('before_starting_string6')}}</p><p> {{$t('before_starting_string7')}}</p>

            </div>
            <div class="q-pt-xl text-center">
              <q-btn style="margin-bottom:10%;" @click="() => { router.push({ name: 'email' }) }" color="blue-10" rounded :label="$t('pop_starting6')" />
            </div>
          </div>

        <div class="col-md-2 col-xs-12 q-pt-lg q-pl-xl q-pr-xl">
        </div>
        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref,computed} from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  setup () {
    const slide = ref('style')
    const router = useRouter()
    const autoplay = ref(2500)
    const store = useStore()
    //console.log( store.getters['userCharacteristic/isLoggedin'])


    return {
      slide,
      router,
      autoplay

    }
  }
})

</script>
