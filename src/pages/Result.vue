<template>
  <q-layout>
    <q-page-indexainer>
      <q-page>
        <div class="row">
          <q-toolbar inset class ="shadow-2 bg-blue-10 text-white">
            <div class="q-ml-sm">
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
          <p class="text-center center">{{$t('level_of_awareness')}}</p><br><div class="col-auto q-mt-md">
                <div class="q-ma-md">
                  <p style="font-weight: bold;font-size:130%" class="text-center">{{awareness_phihsing}}</p>
              </div>
            </div>
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
            <div class="row">
            <div class="col-6 col-md-6">
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
          </div>
            <div class="col-6 col-md-6 q-mt-xl"><b style="overflow-wrap:break-word;">{{$t('number_phishing_email')}}</b></div>
            </div>
          </q-card-section>
          <q-separator dark inset />
        <q-card-section>
          <div class="row">
          <div class="col-6 col-md-6">
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
        </div>
        <div class="col-6 col-md-6 q-mt-xl"><b style="overflow-wrap:break-word;">{{$t('average_response_time')}}</b></div>
          </div>
        </q-card-section>
      </q-card>




        <q-card class="col-2 col-md-3 col-xs-11 q-ma-md lt-md">
          <q-card-section>
               <div class="col-auto q-ma-md">
          <p class="text-center center">{{$t('level_of_awareness')}}</p><br><div class="col-auto q-mt-md">
                <div class="q-ma-md">
                  <p style="font-weight: bold;font-size:130%" class="text-center">{{awareness_phihsing}}</p>
              </div>
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
      <div class="row bg-grey-3 q-pa-xs">
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
              <div class="text-blue-10">Contacts</div>
              <span style="font-weight: bold;">Alessio Botta</span> a.botta@unina.it  <br><span style="font-weight: bold;">Luigi Gallo</span> luigi.gallo3@unina.it<br><span style="font-weight: bold;">Saverio Ruggiero</span> sav.ruggiero@studenti.unina.it<br><span style="font-weight: bold;">Ilaria Panaro</span> il.panaro@studenti.unina.it
            </div>
          </div>
          </div>
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
