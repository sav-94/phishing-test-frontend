<template>
  <q-layout>
    <q-page-indexainer>
      <q-page>
        <div class="q-pa-xs">
          <q-toolbar inset class ="shadow-2 rounded-borders bg-blue-10 text-white ">
            <div class="mb-3 mb-md-5 mx-auto text-center">
              <h5>Test Results</h5>
            </div>

            <q-space />

            <q-btn flat round dense icon="kayaking" />
            <q-btn flat round dense icon="password" />
            <q-btn flat round dense icon="attach_email" />
            <q-btn flat round dense icon="sentiment_satisfied_alt" />

          </q-toolbar>
        </div>

        <div v-if="result[result.length - 1]" class="flex flex-center text-blue-grey-9 q-ma-sm">
          <!-- <h5>You got {{result[result.length - 1].n_correct}}/10 right: </h5> -->
          <h5>{{$t('score_is')}}</h5>
        </div>
        <div class="q-ml-xl q-mr-xl">
          <q-linear-progress stripe size="25px" :value="progress" >
            <div class="absolute-full flex flex-center">
              <q-badge color="white" text-color="black" :label="progressLabel" />
            </div>
          </q-linear-progress>
        </div>


        <div class="row q-mt-xl flex flex-center">
          <!-- Number of Phishing Email -->
          <div class="col-auto q-mr-xl">

            <q-knob
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

          <!-- AVG TIME of Answer in second -->
          <div class="col-auto q-mt-md">

            <q-knob
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
        </div>

        <div class="row flex flex-center">
          <h6>{{$t('level_of_awareness')}} {{awareness_phihsing}}</h6>
        </div>

        <div class="row">
          <div class="col-4 q-mt-md">
          </div>
          <div class="col-1 q-mt-md">
          <q-btn label="Home page" class="text-white-10" color="orange-10" @click="start()" />
          </div>
          <div class="col-1 q-mt-md">
          </div>
          <div class="col-2 q-mt-md">
          <q-btn :label="$t('repeat_test')" color="blue-10" @click="() => { router.push({ name: 'email' }) }"/>
          </div>
        </div>
      </q-page>
    </q-page-indexainer>
  </q-layout>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore()
    const router = useRouter()
    const result = computed(() => store.getters['email/result'])
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

          return 'negative'

        } else if(result.value[result.value.length - 1].n_correct === 5){

          return 'basic'
        } else if(result.value[result.value.length - 1].n_correct > 5 && result.value[result.value.length - 1].n_correct < 7){

          return 'intermediate'
        }
        else if(result.value[result.value.length - 1].n_correct > 7 ){

          return 'excellent'
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
