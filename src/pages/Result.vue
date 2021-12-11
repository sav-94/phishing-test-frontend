<template>
  <q-layout>
    <q-page-container>
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

        <!-- ALERT -->


        <!-- COUNT TIME
        <div v-if="countTime != -1 && cont < 10" class="q-mr-xl q-ma-sm text-right">
          <q-circular-progress
            class="text-red q-ma-md"
            :value="countTime"
            max="300"
            size="50px"
            color="red"

          />
        </div>
        -->
        <!-- EMAIL -->
        <transition-group
            appear
            enter-active-class="animated fadeInRight"
          >

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
              v-model="email_info.result[0].n_phishing"
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
    <div class="row justify-center q-mt-md">
        <div class="col-auto"></div>
        <div class="col-auto">
          <q-btn @click="back()" color="primary" label="Back" />
      </div>

      <div class="col-md-1"></div>
      <div class="col-auto q-mt-xs">
        <q-btn-toggle
        v-model="slide"
        :options="[
          { label: 'mail', value: 'style' },
          { label: 'Scheda 1', value: 'tv' },
          { label: 'Scheda 2', value: 'layers' },
           { label: 'Scheda 3', value: 'map' }
        ]"
      />
      </div>
      <div class="col-md-1"></div>
      <div class="col-auto">
        <q-btn @click="next()" color="primary" label="Next" />
        </div>

    </div>
    <div class="row q-mt-md fit">
    <div class="col-md-2 col-sm-2"></div>
    <div class="col-md-8 col-sm-12 col-xs-12">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="red"
        class="fit"


      >
        <q-carousel-slide name="style" class="q-pa-none">

          <div v-if="email_info.email[cont] !== undefined" class="q-carousel--padding">

          <div v-if="email_info.email[cont].contex !== undefined" class="col-md-8 col-xs-12">
              <div class="text-blue-10 text-center text-justify center">
                <h5 style="font-size:130%; margin: 20px 10px 20px;">{{email_info.email[cont].contex}} </h5>
              </div>
          </div>
          <q-card>
              <q-card-section>
                <div class="row">

                  <div class="col-auto">
                    <q-avatar  color="white" text-color="primary" font-size="100%" icon="account_circle" />
                  </div>

                  <div class="col q-pl-xs">
                    <div>
                      <span class="q-ml-md"><b>{{email_info.email[cont].sender_name}}</b></span><h5 style="font-size:130%; margin: 20px 10px 20px;" :class="Response_phrases[cont][4]">{{Response_phrases[cont][0]}} </h5>
                    </div>
                    <div>
                      <q-btn no-caps size="xs" flat text-color="grey-8" label="to me" style="font-size:80%;"  icon-right="arrow_drop_down">
                        <q-menu>

                          <q-list dense padding class="rounded-borders q-mt-md q-ml-md q-mr-lg q-mb-md">
                            <q-item>
                              <q-item-section><p><span style="color:#808080">{{$t('from')}} </span> {{email_info.email[cont].fromEmail.from_email}}</p></q-item-section>
                            </q-item>

                            <q-item>
                              <q-item-section><p><span style="color:#808080">{{$t('to')}} </span> {{form.email}}</p></q-item-section>
                            </q-item>

                            <q-item>
                              <q-item-section><p><span style="color:#808080">data:</span> {{email_info.email[cont].data}}</p></q-item-section>
                            </q-item>
                          </q-list>

                        </q-menu>

                      </q-btn>
                    </div>
                  </div>

                  <!-- <div class="col-auto q-pr-lg">{{email_info[cont].time}}</div> -->
                  <div class="col-auto q-mr-lg"><q-icon name="alternate_email" size="md" /></div>

                  <div class="col-12 q-mt-xl q-ml-xl">
                    <p><span class="label bg-white text-primary" style="font-size:110%">{{$t('subject')}}</span> {{email_info.email[cont].subject.subject_email}}</p>
                  </div>
                  <div class="q-ml-lg" v-html="email_info.email[cont].body.body_attachment" />
                </div>

              </q-card-section>

              <q-separator color="grey" inset />

              <q-card-section>

                <div v-html="email_info.email[cont].body.body_header_img" />
                <div v-html="email_info.email[cont].body.body_header_text" />
                <div v-html="email_info.email[cont].body.body_header_title" />
                <div v-html="email_info.email[cont].body.body_center_img" />
                <div v-html="email_info.email[cont].body.body_greetings" />

                <div v-html="email_info.email[cont].body.body_center1" />
                <div v-html="email_info.email[cont].body.body_center2" />
                <div v-html="email_info.email[cont].body.body_center3" />
                <div v-html="email_info.email[cont].body.body_table" />

                <div v-if="email_info.email[cont].body.button_name" :class="email_info.email[cont].body.button_class">
                  <q-btn :color="email_info.email[cont].body.button_color" :label="email_info.email[cont].body.button_name">
                    <q-tooltip>
                      <div style="font-size: 14px;"> {{email_info.email[cont].body.button_link}} </div>
                    </q-tooltip>
                  </q-btn>
                </div>

                <div v-html="email_info.email[cont].body.body_bottom" />
                <div v-html="email_info.email[cont].body.body_signature" />
                <div v-html="email_info.email[cont].body.body_footer" />

              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            Scheda 1
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            Scheda 2
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center ">
            Scheda 3
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
      </div>


        </transition-group>
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
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, reactive, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import {date} from 'quasar'

export default defineComponent({
  setup () {
    const router = useRouter()
    const store = useStore()
    const slide = ref('style')
    const result =  computed(() => store.getters['email/result'])
    console.log(result.value)
    const email_info = computed(() => store.state.email)
    console.log(email_info)
    const { locale } = useI18n({ useScope: 'global' })
    let lingua = ""
    const Response_phrases = email_info.value.result[0].Response_phrases


    if (locale.value == "en-US"){
              lingua = 'English'
          }else if (locale.value == "it"){
              lingua = 'Italian'
          }
    const form = reactive({
      first_name: '',
      email: '',
      lang: lingua

    })

    const start = () => {
       store.dispatch('email/get_home')
       router.push({ name: 'landing'})

    }

    const cont = ref(0)

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


    const next = async () => {

      if(cont.value < 10){
        cont.value = cont.value + 1
      }
      if(cont.value === 10){
        cont.value = 1
      }
    }

    const back = async () => {

      if(cont.value < 10){
        cont.value = cont.value - 1
      }
      if(cont.value === 0){
        cont.value = 9
      }
    }





    return {
      form,
      email_info,
      progress,
      progressLabel,
      n_phishing,
      avg_answer_time,
      awareness_phihsing,
      Response_phrases,
      cont,
      result,
      start,
      next,
      back,
      slide,
      router,

    }
  }

})

</script>

<style>
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px  black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: max-content;
  background-color: rgb(109, 109, 109);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  border: 5px solid rgb(109, 109, 109);


  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
