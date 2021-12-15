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

    <div v-if="showCards" class="row">

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




      <q-card v-if="showCards" class="col-6 col-md-4 col-xs-11 q-ma-md">
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
    <div  v-if="showCards == false" class="row justify-center q-mt-md">
        <div class="col-auto"></div>

      <div class="col-md-1"></div>
      <div class="col-auto q-mt-xs">
        <q-btn-toggle
        @click="resetSelectValue()"
        v-model="slide"
        :options="[
          { label: 'E-mail', value: 'style' },
          { label: 'Features', value: 'layers' }
        ]"
      />
      </div>
      <div class="col-md-1"></div>
    </div>
    <div class="row fit">
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
        <q-carousel-slide name="style" class="q-carousel--padding fit">

          <div v-if="email_info.email[cont] !== undefined" class="q-carousel--padding">
            <div style="margin-top:-3%;" class="row justify-center">
              <h6 style="font-size:40px; margin: 20px 10px 20px;" :class="Response_phrases[cont][4]">{{esito}} </h6>
            </div>

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
                      <span class="q-ml-md"><b>{{email_info.email[cont].sender_name}}</b></span>
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
        <!--Start second page card - feedback email-->
        <q-carousel-slide name="layers" class="col-md-8 col-xs-12 no-wrap flex-center">
        <!--Start Card2-->
           <q-card class="my-card">
             <q-card-section>
               <div class="row justify-center">
                 <img v-if="Response_phrases[cont][4]=='text-green'" src="https://i.postimg.cc/Prdnm0cK/check-ok-72x.png" alt="">
                 <img v-if="Response_phrases[cont][4]=='text-red'" src="https://i.postimg.cc/PxbFJ5tH/check-not-72x.png" alt="">
               </div>
               <h5 style="font-size:20px;" class="text-justify q-ml-md q-mr-md">{{motivation}}</h5>
             </q-card-section>

         <!--Start select-->
            <q-card-section>
              <div class="row">
                <div class="col-6">
                  <div class="text-bold text-black q-mb-xl q-ml-md" style="font-size:18px">{{$t('subtitle_string')}}</div>
                  <div class="q-gutter-md q-ml-xs" style="max-width: 350px">
                      <q-select  outlined
                        v-model="featuresResult"
                        :options="featuresResultOptions"
                        option-value="featuresResultOptions.value"
                        /></div>
                </div>
                  <div class="col-6 q-mt-md">
                  <q-card class ="col-6 q-mt-lg no-shadow">
                    <q-card-section>
                      ciao
                    </q-card-section>
                  </q-card>
                  </div>
            <!--End select-->
                <q-card-section>
                  <div v-if="featuresResult.value !=null" class="text-bold text-grey q-ml-sm" style="font-size:17px">{{$t('value_string')}} {{featuresResult.value}}</div>
                </q-card-section>
              </div>
      </q-card-section>
      <!--Start checkbox-->
      <q-card-section>
        <div class="">
          <div class="text-bold text-black q-mb-xl q-ml-md" style="font-size:18px">{{$t('cognitive_triggers_string')}}</div>
          <div class="q-gutter-sm gt-sm row">
            <q-checkbox disable class="disabled " v-model="group1" :label="$t('consistency')" :color="cognitive_value[cont][0]"></q-checkbox>
            <q-checkbox disable class="disabled " v-model="group1" :label="$t('reciprocity')"  :color="cognitive_value[cont][1]"></q-checkbox>
            <q-checkbox disable class="disabled " v-model="group1" :label="$t('scarcity')" :color="cognitive_value[cont][2]"></q-checkbox>
            <q-checkbox disable class="disabled " v-model="group1" :label="$t('liking')"  :color="cognitive_value[cont][3]"></q-checkbox>
            <q-checkbox disable class="disabled " v-model="group1" :label="$t('social_proof')" :color="cognitive_value[cont][4]"></q-checkbox>
            <q-checkbox disable class="disabled " v-model="group1" :label="$t('authority')" :color="cognitive_value[cont][5]"></q-checkbox>
            <q-checkbox disable class="disabled " v-model="group1" :label="$t('sense_of_urgency')"  :color="cognitive_value[cont][6]"></q-checkbox>
         </div>


         <div class="q-gutter-sm ">
           <div class="row lt-sm">
            <q-checkbox disable class="disabled col-6" v-model="group1" label="Consistency" :color="cognitive_value[cont][0]"></q-checkbox>
            <q-checkbox disable class="disabled col-6" v-model="group1" label="Reciprocity" :color="cognitive_value[cont][1]"></q-checkbox>
           </div>
           <div class="row lt-sm">
             <q-checkbox disable class="disabled col-6" v-model="group1" label="Scarcity" :color="cognitive_value[cont][2]"></q-checkbox>
             <q-checkbox disable class="disabled col-6" v-model="group1" label="Liking" :color="cognitive_value[cont][3]"></q-checkbox>
           </div>
           <div class="row lt-sm">
            <q-checkbox disable class="disabled col-6" v-model="group1" label="Social Proof" :color="cognitive_value[cont][4]"></q-checkbox>
            <q-checkbox disable class="disabled col-6" v-model="group1" label="Authority" :color="cognitive_value[cont][5]"></q-checkbox>

           </div>
            <div class="row lt-sm">
              <q-checkbox disable class="disabled col-6" v-model="group1" label="Sense of Urgency" :color="cognitive_value[cont][6]"></q-checkbox>
            </div>
         </div>


       </div>
      </q-card-section>
      <!--End checkbox-->
    </q-card>
      </q-carousel-slide>
        <!--end second page card - feedback email-->
      </q-carousel>
    </div>
      </div>

      <div  v-if="showCards == false" class="row justify-center q-mb-md gt-sm">
        <div class="col-auto"></div>
        <div class="col-auto">
          <q-btn @click="back()" color="primary" :label="$t('previous_results')" />
      </div>

      <div class="col-md-1"></div>

      <div class="col-md-1"></div>
      <div class="col-auto">
        <q-btn @click="next()" color="primary" :label="$t('next_results')" />
        </div>

    </div>

    <div  v-if="showCards == false" class="row q-mt-xs q-mb-md lt-sm">
        <div class="col-1"></div>
        <div class="col-2">
          <q-btn @click="back()" color="primary" :label="$t('previous_results')" />
      </div>

      <div class="col-6"></div>

      <div class="col-2 q-mr-xs">
        <q-btn @click="next()" color="primary" :label="$t('next_results')" />
        </div>
      <div class="col-1"></div>

    </div>


        </transition-group>
      </q-page>
      <q-card class="row bg-grey-3 q-pa-xs">
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
              <span style="font-weight: bold;">Alessio Botta</span> a.botta[at]unina.it  <br><span style="font-weight: bold;">Luigi Gallo</span> luigi.gallo3[at]unina.it<br><span style="font-weight: bold;">Saverio Ruggiero</span> sav.ruggiero[at]studenti.unina.it<br><span style="font-weight: bold;">Ilaria Panaro</span> il.panaro[at]studenti.unina.it
            </div>
          </div>
      </q-card>
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

    const showCards = ref(false)
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
    const cont = ref(0)
    ///////
    const cognitive_value= email_info.value.result[0].list_cognitive


    const title1 = "Email 1"
    const text2 = "Il valore assoluto è "
    const featuresResult = ref({label:'Seleziona', value:0})
  ///////
    const esito = ref(null)
    const motivation = ref(null)

    const featuresResultOptions = ref(null)
    const featuresResultOptions1= [
        {label:'Numero parole nell\'oggetto', value: email_info.value.email[cont.value].subject.subject_n_word}, {label:'Numero caratteri nell\'oggetto', value: email_info.value.email[cont.value].subject.subject_n_chars},
        {label:'Numero parole nel body', value: email_info.value.email[cont.value].body.body_n_words}, {label:'Numero caratteri nel body', value: email_info.value.email[cont.value].body.body_n_chars,},
        {label:'Numero parole di scam nell\'oggetto', value:email_info.value.email[cont.value].subject.subject_n_scammy_words}, {label:'Numero parole di phishing nell\'oggetto', value:email_info.value.email[cont.value].subject.subject_n_phishy_words},
        {label:'Numero parole di scam nel body', value:email_info.value.email[cont.value].body.body_n_scammy_words}, {label:'Numero parole di phishing nel body', value:email_info.value.email[cont.value].body.body_n_phishy_words},

        {label:'Leggibilità', value:email_info.value.email[cont.value].body.body_readability}, {label:'Tipo Contesto', value:email_info.value.email[cont.value].context_result},
        {label:'Numero immagini', value:email_info.value.email[cont.value].body.body_n_pictures}, {label:'Personalizzazione della mail', value:email_info.value.email[cont.value].body.body_greetings_custom},
        {label:'Percentuale caratteri speciali', value:email_info.value.email[cont.value].subject.subject_ratio_special_chars}, {label:'Percentuale numeri', value:email_info.value.email[cont.value].subject.subject_ration_num}
      ]

    const featuresResultOptions2 = [{label:'Number of words in the subject', value: email_info.value.email[cont.value].subject.subject_n_word}, {label:'Number of characters in the subject', value: email_info.value.email[cont.value].subject.subject_n_chars},
        {label:'Number of words in body', value: email_info.value.email[cont.value].body.body_n_words}, {label:'Number of characters in body', value: email_info.value.email[cont.value].body.body_n_chars,},
        {label:'Number of scam words in the subject', value:email_info.value.email[cont.value].subject.subject_n_scammy_words}, {label:'Number of phishing words in subject', value:email_info.value.email[cont.value].subject.subject_n_phishy_words},
        {label:'Number of scam words in the body', value:email_info.value.email[cont.value].body.body_n_scammy_words}, {label:'Number of phishing words in the body', value:email_info.value.email[cont.value].body.body_n_phishy_words},

        {label:'Readability', value:email_info.value.email[cont.value].body.body_readability}, {label:'Context type', value:email_info.value.email[cont.value].context_result},
        {label:'Number of images', value:email_info.value.email[cont.value].body.body_n_pictures}, {label:'Mail personalization', value:email_info.value.email[cont.value].body.body_greetings_custom},
        {label:'Percentage of special characters', value:email_info.value.email[cont.value].subject.subject_ratio_special_chars}, {label:'Percentage of numbers', value:email_info.value.email[cont.value].subject.subject_ration_num}
      ]


    if (locale.value == "en-US"){
              lingua = 'English'
              esito.value = Response_phrases[cont.value][3]
              motivation.value = Response_phrases[cont.value][1]
              featuresResultOptions.value = featuresResultOptions2
          }else if (locale.value == "it"){
              lingua = 'Italian'
              esito.value= Response_phrases[cont.value][2]
              motivation.value = Response_phrases[cont.value][0]
              featuresResultOptions.value = featuresResultOptions1
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

    const resetSelectValue = () => {
       if (locale.value == "en-US"){
            featuresResult.value = "Select a value"
          }else if (locale.value == "it"){
            featuresResult.value = "Seleziona un valore"

          }



    }



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
        showCards.value = true
        cont.value = -1
      }
      featuresResult.value = "Seleziona un valore"
        featuresResultOptions.value[0].value = email_info.value.email[cont.value].subject.subject_n_word
        featuresResultOptions.value[1].value = email_info.value.email[cont.value].subject.subject_n_chars
        featuresResultOptions.value[2].value = email_info.value.email[cont.value].body.body_n_words

        featuresResultOptions.value[3].value = email_info.value.email[cont.value].body.body_n_chars
        featuresResultOptions.value[4].value = email_info.value.email[cont.value].subject.subject_n_scammy_words
        featuresResultOptions.value[5].value = email_info.value.email[cont.value].subject.subject_n_phishy_words

        featuresResultOptions.value[6].value = email_info.value.email[cont.value].body.body_n_scammy_words
        featuresResultOptions.value[7].value = email_info.value.email[cont.value].body.body_n_phishy_words
        featuresResultOptions.value[8].value = email_info.value.email[cont.value].body.body_readability

        featuresResultOptions.value[9].value = email_info.value.email[cont.value].context_result
        featuresResultOptions.value[10].value = email_info.value.email[cont.value].body.body_n_pictures
        featuresResultOptions.value[11].value = email_info.value.email[cont.value].body.body_greetings_custom

        featuresResultOptions.value[12].value = email_info.value.email[cont.value].subject.subject_ration_num
        featuresResultOptions.value[13].value = email_info.value.email[cont.value].subject.subject_ratio_special_chars

        if (locale.value == "en-US"){
              lingua = 'English'
              esito.value = Response_phrases[cont.value][3]
              motivation.value = Response_phrases[cont.value][1]
              featuresResultOptions.value = featuresResultOptions2
          }else if (locale.value == "it"){
              lingua = 'Italian'
              esito.value= Response_phrases[cont.value][2]
              motivation.value = Response_phrases[cont.value][0]
              featuresResultOptions.value = featuresResultOptions1
          }

    }

    const back = async () => {
      if(cont.value < 10){
        cont.value = cont.value - 1

      }
      if(cont.value === 0){
      }
      featuresResult.value = "Seleziona un valore"
        featuresResultOptions.value[0].value = email_info.value.email[cont.value].subject.subject_n_word
        featuresResultOptions.value[1].value = email_info.value.email[cont.value].subject.subject_n_chars
        featuresResultOptions.value[2].value = email_info.value.email[cont.value].body.body_n_words

        featuresResultOptions.value[3].value = email_info.value.email[cont.value].body.body_n_chars
        featuresResultOptions.value[4].value = email_info.value.email[cont.value].subject.subject_n_scammy_words
        featuresResultOptions.value[5].value = email_info.value.email[cont.value].subject.subject_n_phishy_words

        featuresResultOptions.value[6].value = email_info.value.email[cont.value].body.body_n_scammy_words
        featuresResultOptions.value[7].value = email_info.value.email[cont.value].body.body_n_phishy_words
        featuresResultOptions.value[8].value = email_info.value.email[cont.value].body.body_readability

        featuresResultOptions.value[9].value = email_info.value.email[cont.value].context_result
        featuresResultOptions.value[10].value = email_info.value.email[cont.value].body.body_n_pictures
        featuresResultOptions.value[11].value = email_info.value.email[cont.value].body.body_greetings_custom

        featuresResultOptions.value[12].value = email_info.value.email[cont.value].subject.subject_ration_num
        featuresResultOptions.value[13].value = email_info.value.email[cont.value].subject.subject_ratio_special_chars

        if (locale.value == "en-US"){
              lingua = 'English'
              esito.value = Response_phrases[cont.value][3]
              motivation.value = Response_phrases[cont.value][1]
              featuresResultOptions.value = featuresResultOptions2
          }else if (locale.value == "it"){
              lingua = 'Italian'
              esito.value= Response_phrases[cont.value][2]
              motivation.value = Response_phrases[cont.value][0]
              featuresResultOptions.value = featuresResultOptions1
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
      esito,
      motivation,
      showCards,
      slide,
      router,
      //////
      featuresResultOptions,
    featuresResult,
    group1: ref(null),
    cognitive_value,
    title1,
    text2,
    resetSelectValue


    }
  }

})

</script>

<style>
.disabled, .disabled *{
cursor: auto !important;
}
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
