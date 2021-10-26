<template>
  <q-layout>
    <q-page-indexainer>
      <q-page>
        <div class="q-pa-xs">
          <q-toolbar inset class ="shadow-2 rounded-borders bg-blue-10 text-white ">
            <div class="mb-3 mb-md-5 mx-auto text-center">
              <q-toolbar-title>{{$t('test_results')}}</q-toolbar-title>
            </div>

            <q-space />

            <q-btn class="gt-sm" flat round dense icon="kayaking" />
            <q-btn class="gt-sm" flat round dense icon="password" />
            <q-btn class="gt-sm" flat round dense icon="attach_email" />
            <q-btn class="gt-sm" flat round dense icon="sentiment_satisfied_alt" />

          </q-toolbar>
        </div>

    <div class="row">

        <q-card class="col-6 col-md-4 col-xs-11 q-ma-md">
          <q-card-section>
            <h5 class="text-center center">{{$t('score_is')}}</h5>
          </q-card-section>

          <q-separator dark inset />

        <q-card-section>
          <q-linear-progress stripe size="25px" :value="progress" >
            <div class="absolute-full flex flex-center">
              <q-badge color="white" text-color="black" :label="progressLabel" />
            </div>
          </q-linear-progress>
        </q-card-section>
        </q-card>


      <q-card class="col-2 col-md-3 col-xs-11 q-ma-md gt-sm">
          <q-card-section>
            <div class="col-auto q-ma-md">
          <p class="text-center center">{{$t('level_of_awareness')}}</p><br><p style="font-weight: bold;font-size:130%" class="text-color-primary">{{awareness_phihsing}}</p>
          </div>

      </q-card-section>

      <q-card-section>
     </q-card-section>

     <q-card-section>
     </q-card-section>
          <q-separator inset />
     <q-card-section>
      <q-card-actions align="evenly">
        <q-btn flat label="Home page" class="text-white-10" color="orange-10" @click="start()" />
        <q-btn flat :label="$t('repeat_test')" color="blue-10" @click="() => { router.push({ name: 'email' }) }"/>
      </q-card-actions>
    </q-card-section>
  </q-card>




      <q-card class="col-6 col-md-4 col-xs-11 q-ma-md">
          <q-card-section>
            <div class="col-auto">
            <q-knob
            readonly
              :min="0"
              :max="10"
              v-model="n_phishing"
              show-value
              size="90px"
              :thickness="0.22"
              color="orange"
              track-color="orange-3"
              class="text-orange q-ma-md"
            />
            <b>{{$t('number_phishing_email')}}</b>
          </div>
          </q-card-section>
          <q-separator dark inset />
        <q-card-section>
          <div class="col-auto ">
            <q-knob
            readonly
              :min="0"
              :max="100"
              v-model="avg_answer_time"
              show-value
              size="90px"
              :thickness="0.22"
              color="blue"
              track-color="blue-3"
              class="text-blue q-ma-md"
            />
            <b>{{$t('average_response_time')}}</b>
        </div>
        </q-card-section>
      </q-card>


        <q-card class="col-2 col-md-3 col-xs-11 q-ma-md lt-md">
          <q-card-section>
            <div class="row">
            <div class="col-auto q-ma-md">
            <p class="text-center center">{{$t('level_of_awareness')}}</p>
          </div>
            </div>

      </q-card-section>

      <q-card-section>
         <div class="row">
            <div class="col-auto q-ma-xl">
              <p style="font-weight: bold;font-size:140%" class="color-primary">{{awareness_phihsing}}</p>
            </div>
          </div>
      </q-card-section>

     <q-card-section>
      <q-card-actions align="evenly">
        <q-btn flat label="Home page" class="text-white-10" color="orange-10" @click="start()" />
        <q-btn flat :label="$t('repeat_test')" color="blue-10" @click="() => { router.push({ name: 'email' }) }"/>
      </q-card-actions>
    </q-card-section>
  </q-card>

    </div>

      </q-page>
    </q-page-indexainer>
  </q-layout>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup () {
    const store = useStore()
    const router = useRouter()
    const result = computed(() => store.getters['email/result'])
    const { locale } = useI18n({ useScope: 'global' })
    const progress = computed(() => {
      if(result.value[result.value.length - 1]){
        return (result.value[result.value.length - 1].n_correct)/10
      }
      return 0

      }
    )
    const n_phishing = computed(() => {
      if(result.value[result.value.length - 1]){
        return (result.value[result.value.length - 1].n_phishing)
      }
      return 0

      }
    )
    const avg_answer_time = computed(() => {
      if(result.value[result.value.length - 1]){
        return (result.value[result.value.length - 1].avg_answer_time)
      }

      return 0

      }
    )
    const awareness_phihsing = computed(() => {
      if(result.value[result.value.length - 1]){
        if(result.value[result.value.length - 1].n_correct < 5){
            if (locale.value == "en-US"){
              return 'Negative'
            }else if (locale.value == "it"){
              return 'Scarso'
            }



        }else if(result.value[result.value.length - 1].n_correct === 5){
          if (locale.value == "en-US"){
              return 'Basic'
          }else if (locale.value == "it"){
              return 'Sufficiente'
          }


        }else if(result.value[result.value.length - 1].n_correct > 5 && result.value[result.value.length - 1].n_correct < 7){

          if (locale.value == "en-US"){
              return 'Intermediate'
          }else if (locale.value == "it"){
              return 'Buono'
          }

        }else if(result.value[result.value.length - 1].n_correct > 7 ){

          if (locale.value == "en-US"){
              return 'Excellent'
          }else if (locale.value == "it"){
             return 'Eccellente'
        }
      }
    }
      return ''
    })
    const progressLabel = computed(() => (progress.value * 100).toFixed(2) + '%')

    const start = () => {
       store.dispatch('email/get_home')
       router.push({ name: 'landing'})

    }
    return {
      router,
      result,
      progress,
      progressLabel,
      n_phishing,
      avg_answer_time,
      awareness_phihsing,
      start
    }
  }
})

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
</style>
