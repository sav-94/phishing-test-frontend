<template>
  <q-layout view="lHh lpr lFf" style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png'">
    <q-header>
        <div class="row" style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png'">
          <q-toolbar inset class ="shadow-2 bg-blue-10 text-white">

            <q-toolbar-title class="q-ml-xl gt-xs q-mb-xs text-justify">{{$t('test_results')}}</q-toolbar-title>
            <q-toolbar-title class="q-ml-xs lt-sm q-mb-xs text-justify">{{$t('test_results')}}</q-toolbar-title>

          </q-toolbar>
        </div>
    </q-header>

    <q-page-container style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png'">
     <q-page style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png'">

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

    <div v-if="showCards" class="gt-xs">
    <div class="row q-mt-xl">
      <div class="col-lg-2 col-md-5 col-sm-1"></div>
        <q-card class="col-8 col-md-7 col-sm-4 q-mr-xs q-ml-xl q-mt-xl q-mb-xs gt-sm">
          <q-card-section>
            <div class="text-h6 center justify-center">{{$t('score_is')}}</div>
          </q-card-section>
          <q-card-section>
          <q-linear-progress color="blue-10" track-color="orange" size="23px" :value="progress" >
            <div class="absolute-full flex flex-center">
              <q-badge color="blue-10" text-color="white" :label="progressLabel" />
            </div>
          </q-linear-progress>
        </q-card-section>
        </q-card>


      <!--<q-card class="col-lg-4 col-sm-4 col-md-4 q-mr-xs  q-ml-xs q-mt-xs q-mb-xs gt-sm">
          <q-card-section>
            <div class="col-auto q-mr-xs  q-ml-xs q-mt-xs q-mb-xs">
          <p class="text-center center">{{$t('level_of_awareness')}}</p><br>
          <div class="justify-center">
                  <p style="font-weight: bold;font-size:130%" class="text-center">{{awareness_phihsing}}</p>
            </div>
          </div>
      </q-card-section>
  </q-card>
 -->
    </div>
  <!--<div v-if="showCards" class="row gt-sm">
    <div class="col-lg-2 col-md-2 col-sm-1"></div>
    <q-card class="col-2 col-md-4 col-xs-12 q-mr-xs  q-ml-xs q-mt-xs q-mb-xs gt-sm">
      <q-card-section>
      </q-card-section>
     <q-card-section>
      <q-card-actions align="evenly">
        <q-btn disable flat :label="$t('showMoreFeatures2')" class="text-white-10" color="orange-10" @click="changeView()" />
      </q-card-actions>
    </q-card-section>
  </q-card>

      <q-card v-if="showCards" class="col-6 col-md-4 gt-sm q-mr-xs  q-ml-xs q-mt-xs q-mb-xs">
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
              class="text-orange q-mr-xs  q-ml-xs q-mt-xs q-mb-xs"
            />
          </div>
            <div class="col-6 col-md-6 q-mt-xl"><b style="overflow-wrap:break-word;">{{$t('number_phishing_email')}}</b></div>
            </div>
          </q-card-section>
          <q-separator dark inset />
      </q-card>

  </div>
  -->
  <div v-if="showCards" class="row gt-sm">
    <!--<div class="col-lg-2 col-md-2 col-sm-1"></div>
    <q-card class="col-6 col-md-5 col-xs-11 q-mr-xs  q-ml-xs q-mt-xs q-mb-xs">
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
              class="text-blue q-mr-xs  q-ml-xs q-mt-xs q-mb-xs"
            />
        </div>
        <div class="col-6 col-md-6 q-mt-xl"><b style="overflow-wrap:break-word;">{{$t('average_response_time')}}</b></div>
          </div>
         </q-card-section>
    </q-card>
   -->
    <div class="col-4 col-md-4 gt-sm  q-ml-xl"></div>
    <div class="col-2 col-md-3 col-xs-11 q-mr-xs  q-ml-xl q-mt-xl q-mb-xs gt-sm">

        <q-btn outline size="xl" label="Home page" class="text-white-10 q-ml-xl" color="orange-10" @click="start()" />
   <!--     <q-btn disable flat :label="$t('repeat_test')" color="blue-10" @click="() => { router.push({ name: 'email' }) }"/> -->

    </div>


  </div>
    </div>



  <div v-if="showCards" class="row lt-md">

    <q-card class="col-xs-11 q-mr-md q-ml-md q-mt-xs q-mb-xs">
          <q-card-section>
            <div class="text-h6 center justify-center">{{$t('score_is')}}</div>
          </q-card-section>
          <q-card-section>
          <q-linear-progress stripe size="23px" :value="progress" >
            <div class="absolute-full flex flex-center">
              <q-badge color="white" text-color="black" :label="progressLabel" />
            </div>
          </q-linear-progress>
        </q-card-section>
        </q-card>

        <q-card class="col-xs-11 q-mr-md q-ml-md q-mt-xs q-mb-xs">
          <q-card-section>
            <div class="col-auto q-ma-md">
          <p class="text-center center">{{$t('level_of_awareness')}}</p><br>
          <div class="justify-center">
                  <p style="font-weight: bold;font-size:130%" class="text-center">{{awareness_phihsing}}</p>
            </div>
          </div>
      </q-card-section>
  </q-card>


  <q-card class="col-xs-11 q-mr-md q-ml-md q-mt-xs q-mb-xs">
    <q-card-section>
        <!--  <div class="row">
          <div class="col-6 col-md-6 ">
            <q-knob
            readonly
              :min="0"
              :max="100"
              v-model="avg_answer_time"
              show-value
              size="80px"
              :thickness="0.22"
              color="blue"
              track-color="blue-3"
              class="text-blue q-ml-md"
            />
        </div>
        <div class="col-xs-5 q-mt-lg"><b style="font-size:80%;overflow-wrap:break-word;">{{$t('average_response_time')}}</b></div>
          </div> -->
        </q-card-section>
    </q-card>

    <q-card class="col-xs-11 q-mr-md q-ml-md q-mt-xs q-mb-xs">
          <q-card-section>
            <div class="row">
            <div class="col-6 col-md-6">
            <q-knob
            readonly
              :min="0"
              :max="10"
              v-model="email_info.result[0].n_phishing"
              show-value
              size="80px"
              :thickness="0.22"
              color="orange"
              track-color="orange-3"
              class="text-orange q-ml-md"
            />
          </div>
            <div class="col-xs-5 q-mt-lg"><b style="font-size:80%;overflow-wrap:break-word;">{{$t('number_phishing_email')}}</b></div>
            </div>
          </q-card-section>
          <q-separator dark inset />
      </q-card>

    <q-card class="col-xs-11 q-mr-md q-ml-md q-mt-xs q-mb-xs bg-blue-10">
     <q-card-section>
      <q-card-actions align="evenly">
        <q-btn flat :label="$t('showMoreFeatures2')" class="text-white-10" color="white" @click="changeView()" />
      </q-card-actions>
    </q-card-section>
  </q-card>



    <q-card class="col-xs-11 q-mr-md q-ml-md q-mt-xs q-mb-xs">
    <q-card-section>
      <q-card-actions align="evenly">
        <q-btn flat label="Home page" class="text-white-10" color="orange-10" @click="start()" />
        <q-btn flat :label="$t('repeat_test')" color="blue-10" @click="() => { router.push({ name: 'email' }) }"/>
      </q-card-actions>
    </q-card-section>
    </q-card>


  </div>


    <div v-if="showCards == false" class="row justify-center q-mt-md">
        <div class="col-auto"></div>

      <div class="col-md-1"></div>
      <div class="col-auto q-mt-xs q-mb-xs">
        <q-btn-toggle
        @click="resetSelectValue()"
        style="background-color:white;"
        v-model="slide"
        :options="[
          { label: 'E-mail', value: 'style' },
          { label: $t('features_string'), value: 'layers' }
        ]"
      />
      </div>
      <div class="col-md-1"></div>
    </div>
    <div v-if="showCards==false" class="row fit">
    <div class="col-md-2 col-sm-2"></div>
    <div class="col-md-8 col-sm-12 col-xs-12" style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png'">
      <q-carousel
        style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png'"
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

                            <q-item v-if="user_email !== undefined">
                              <q-item-section><p><span style="color:#808080">{{$t('to')}} </span>{{user_email}}</p></q-item-section>
                            </q-item>

                            <q-item v-if="user_email == undefined">
                              <q-item-section><p><span style="color:#808080">{{$t('to')}} </span>: me</p></q-item-section>
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
                  <div class="col-auto q-mr-lg"><span>e-mail #</span><b style="font-size:120%;" class="text-primary"> {{cont+1}}</b></div>

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
         <!--Start select-->

              <q-card-section>
            <div class="text-bold text-black q-ml-md" style="margin-top:-2%;">
                    {{$t('showMoreFeatures')}}
              <q-btn
                color="blue-10"
                round
                flat
                dense
                :icon="showFeature ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="showFeature= !showFeature"
              />
            </div>
              </q-card-section>

            <q-separator/>

              <q-slide-transition>
                <div v-show="showFeature">
                <q-card-section class="text-subitle2">
              <q-card-section>
              <div class="row">
                <div class="col-6 col-md-6 col-sm-6 col-xs-12">
                  <div class="text-bold text-blue-10 q-mb-xl" style="font-size:15px">{{$t('subtitle_string')}}</div>
                  <div class="q-gutter-md " style="max-width: 350px">
                      <q-select  outlined
                        v-model="featuresResult"
                        :options="featuresResultOptions"
                        option-value="featuresResultOptions.value"
                        /></div>
                        <q-card-section>
                  <div v-if="featuresResult.value !=null" class="text-grey" style="font-size:13px">{{$t('value_string')}}<span class="text-boldtext-grey q-ml-sm" style="font-size:17px"> {{featuresResult.value}}</span></div>
                </q-card-section>
                </div>
                  <div v-if="featuresResult.explanation!=''" class="col-6 col-xs-12 q-mt-md">
                  <q-card class ="col-6 col-md-6 col-sm-6 col-xs-12 q-mt-lg no-shadow">
                    <q-card-section>
                      {{featuresResult.explanation}}
                    </q-card-section>
                  </q-card>
                  </div>
            <!--End select-->

              </div>
      </q-card-section>
                </q-card-section>
              </div>
            </q-slide-transition>
          </q-card>

        <!--end second page card - feedback email-->
        </q-carousel-slide>
      </q-carousel>
    </div>
      </div>

      <div v-if="showCards == false" class="row justify-center gt-sm">
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

    <div v-if="showCards == false" class="row q-mt-xs lt-md">
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
    </q-page-container>

      <q-card
          div
          class="row q-pt-lg q-mt-md"
          style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png'"
        >

          <div
            class="col col-md-1 col-sm-4 col-xs-3 q-ml-md q-mt-md"
            style="margin-top: 0.5%"
          >
            <q-img
              class="q-mb-sm"
              src="https://sworld.co.uk/img/img/18/268/originals/0.png"
              spinner-color="white"
              size="100px"
              style="height: 80px; max-width: 110px"
            />
          </div>

          <div class="col col-md-3 col-sm-7 col-xs-8">
            <div class="text-blue-10 q-mt-lg q-ml-lg gt-sm" style="font-size: 85%">
              Università degli Studi di Napoli "Federico II" <br />
              Dipartimento di Ingegneria Elettrica e delle Tecnologie
              dell'Informazione
            </div>

            <div class="text-blue-10 q-mt-xs q-ml-lg lt-md" style="font-size: 85%">
              Università degli Studi di Napoli "Federico II" <br />
              Dipartimento di Ingegneria Elettrica e delle Tecnologie
              dell'Informazione
            </div>
          </div>
          <div class="col-md-2 q-mr-sm"></div>
          <q-separator class="gt-sm" vertical inset />

          <div class="col-md-5 col-xs-12 q-pt-md q-pl-md q-pr-md gt-sm">
            <div
              class="text-blue-grey-9 text-center text-justify q-ml-xs q-mb-xl"
              style="font-size: 90%; margin-top: -1.5%"
            >
              <div style="font-weight:bold;" class="text-blue-10">{{ $t("contacts") }}</div>
              <span style="font-weight: bold">Alessio Botta</span>
              a.botta[at]unina.it <br /><span style="font-weight: bold"
                >Luigi Gallo</span
              >
              luigi.gallo3[at]unina.it<br /><span style="font-weight: bold"
                >Saverio Ruggiero</span
              >
              sav.ruggiero[at]studenti.unina.it<br /><span
                style="font-weight: bold"
                >Danilo Gentile</span
              >
              danil.gentile[at]studenti.unina.it<br>
              <span
                style="font-weight: bold"
                >Ilaria Panaro</span
              >
              il.panaro[at]studenti.unina.it
            </div>
          </div>
        </q-card>
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

    const showCards = ref(true)
    const router = useRouter()
    const store = useStore()
    const slide = ref('style')
    const result =  computed(() => store.getters['email/result'])
    //console.log(result.value)
    const email_info = computed(() => store.state.email)
    const user_email = computed(() => store.state.user_email)
    //console.log(user_email)
    //console.log(email_info)
    const { locale } = useI18n({ useScope: 'global' })
    let lingua = ""
    const Response_phrases = email_info.value.result[0].Response_phrases
    const cont = ref(0)
    const cognitive_value= email_info.value.result[0].list_cognitive
    const featuresResult = ref({label:'Seleziona', value:null, explanation:""})
    const esito = ref(null)
    const motivation = ref(null)

    const features_result = email_info.value.result[0].list_features
    const link_result1 = email_info.value.result[0].list_link1
    const link_result2 = email_info.value.result[0].list_link2
    const link_result3 = email_info.value.result[0].list_link3
    const link_result4 = email_info.value.result[0].list_link4

    const showFeature = ref(false)

    const featuresResultOptions = ref(null)
    const featuresResultOptions1= [
        {label:'Numero parole nell\'oggetto', value: email_info.value.email[cont.value].subject.subject_n_word, explanation:""}, {label:'Numero caratteri nell\'oggetto', value: email_info.value.email[cont.value].subject.subject_n_chars, explanation:""},
        {label:'Numero parole nel body', value: email_info.value.email[cont.value].body.body_n_words, explanation:""}, {label:'Numero caratteri nel body', value: email_info.value.email[cont.value].body.body_n_chars, explanation:""},
        {label:'Numero parole di scam nell\'oggetto', value:email_info.value.email[cont.value].subject.subject_n_scammy_words, explanation:""}, {label:'Numero parole di phishing nell\'oggetto', value:email_info.value.email[cont.value].subject.subject_n_phishy_words, explanation:""},
        {label:'Numero parole di scam nel body', value:email_info.value.email[cont.value].body.body_n_scammy_words, explanation:""}, {label:'Numero parole di phishing nel body', value:email_info.value.email[cont.value].body.body_n_phishy_words, explanation:""},
        {label:'Leggibilità', value:email_info.value.email[cont.value].body.body_readability, explanation:features_result[cont.value][7]}, {label:'Tipo Contesto', value: features_result[cont.value][0], explanation: features_result[cont.value][2]},
        {label:'Numero immagini', value:email_info.value.email[cont.value].body.body_n_pictures, explanation:""}, {label:'Personalizzazione della mail', value: features_result[cont.value][4], explanation: features_result[cont.value][5]},
        {label:'Percentuale caratteri speciali', value:email_info.value.email[cont.value].subject.subject_ratio_special_chars, explanation:""}, {label:'Percentuale numeri', value:email_info.value.email[cont.value].subject.subject_ration_num, explanation:""},
        {label:'Link testuali', value: link_result1[cont.value][2], explanation:link_result1[cont.value][0]},
        {label:'Link legittimi', value:link_result2[cont.value][2], explanation:link_result2[cont.value][0]},
        {label:'Link sospetti', value:link_result4[cont.value][2], explanation:link_result4[cont.value][0]},
        {label:'Link di phishing', value:link_result3[cont.value][2], explanation:link_result3[cont.value][0]},

      ]

    const featuresResultOptions2 = [{label:'Number of words in the subject', value: email_info.value.email[cont.value].subject.subject_n_word, explanation:""}, {label:'Number of characters in the subject', value: email_info.value.email[cont.value].subject.subject_n_chars, explanation:""},
        {label:'Number of words in body', value: email_info.value.email[cont.value].body.body_n_words, explanation:""}, {label:'Number of characters in body', value: email_info.value.email[cont.value].body.body_n_chars, explanation:""},
        {label:'Number of scam words in the subject', value:email_info.value.email[cont.value].subject.subject_n_scammy_words, explanation:""}, {label:'Number of phishing words in subject', value:email_info.value.email[cont.value].subject.subject_n_phishy_words, explanation:""},
        {label:'Number of scam words in the body', value:email_info.value.email[cont.value].body.body_n_scammy_words, explanation:""}, {label:'Number of phishing words in the body', value:email_info.value.email[cont.value].body.body_n_phishy_words, explanation:""},
        {label:'Readability', value:email_info.value.email[cont.value].body.body_readability, explanation:features_result[cont.value][8]}, {label:'Context type', value: features_result[cont.value][1], explanation: features_result[cont.value][3]},
        {label:'Number of images', value:email_info.value.email[cont.value].body.body_n_pictures, explanation:""}, {label:'Mail personalization', value:email_info.value.email[cont.value].body.body_greetings_custom, explanation:features_result[cont.value][6]},
        {label:'Percentage of special characters', value:email_info.value.email[cont.value].subject.subject_ratio_special_chars, explanation:""}, {label:'Percentage of numbers', value:email_info.value.email[cont.value].subject.subject_ration_num, explanation:""},
        {label:'Text Links', value:link_result1[cont.value][2], explanation:link_result1[cont.value][1]},
        {label:'Legitimate Links', value:link_result2[cont.value][2], explanation:link_result2[cont.value][1]},
        {label:'Sospicoius Links', value:link_result4[cont.value][2], explanation:link_result4[cont.value][1]},
        {label:'Phishing Links', value:link_result3[cont.value][2], explanation:link_result3[cont.value][1]}
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
        return (result.value[result.value.length - 1].n_correct)/20
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
        if(result.value[result.value.length - 1].n_correct < 6){
            if (locale.value == "en-US"){
              return 'Negative'
            }else if (locale.value == "it"){
              return 'Basso'
            }



        }else if(result.value[result.value.length - 1].n_correct === 6){
          if (locale.value == "en-US"){
              return 'Basic'
          }else if (locale.value == "it"){
              return 'Sufficiente'
          }


        }else if(result.value[result.value.length - 1].n_correct > 6 && result.value[result.value.length - 1].n_correct < 9){

          if (locale.value == "en-US"){
              return 'Good'
          }else if (locale.value == "it"){
              return 'Buono'
          }

        }else if(result.value[result.value.length - 1].n_correct === 9 || result.value[result.value.length - 1].n_correct === 10 ){

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


    const changeView = async () => {
      window.scrollTo(0, 0);
      //console.log(showCards.value)
      showCards.value =false
      cont.value = 0
      //console.log(showCards.value)
    }

    const next = async () => {
      slide.value="style"
      window.scrollTo(0, 0);
      if(cont.value < 10){

        cont.value = cont.value + 1
      }
      if(cont.value === 10){
        showCards.value = true
        cont.value = -1
      }

        featuresResultOptions.value[0].value = email_info.value.email[cont.value].subject.subject_n_word
        featuresResultOptions.value[1].value = email_info.value.email[cont.value].subject.subject_n_chars
        featuresResultOptions.value[2].value = email_info.value.email[cont.value].body.body_n_words

        featuresResultOptions.value[3].value = email_info.value.email[cont.value].body.body_n_chars
        featuresResultOptions.value[4].value = email_info.value.email[cont.value].subject.subject_n_scammy_words
        featuresResultOptions.value[5].value = email_info.value.email[cont.value].subject.subject_n_phishy_words

        featuresResultOptions.value[6].value = email_info.value.email[cont.value].body.body_n_scammy_words
        featuresResultOptions.value[7].value = email_info.value.email[cont.value].body.body_n_phishy_words
        featuresResultOptions.value[8].value = email_info.value.email[cont.value].body.body_readability

        featuresResultOptions.value[9].value = features_result[cont.value][0]
        featuresResultOptions.value[9].explanation = features_result[cont.value][2]

        featuresResultOptions.value[10].value = email_info.value.email[cont.value].body.body_n_pictures

        featuresResultOptions.value[11].value = features_result[cont.value][4]
        featuresResultOptions.value[11].explanation = features_result[cont.value][5]

        featuresResultOptions.value[12].value = email_info.value.email[cont.value].subject.subject_ration_num
        featuresResultOptions.value[13].value = email_info.value.email[cont.value].subject.subject_ratio_special_chars

        featuresResultOptions.value[14].value = link_result1[cont.value][2]
        featuresResultOptions.value[15].value = link_result2[cont.value][2]
        featuresResultOptions.value[16].value = link_result4[cont.value][2]
        featuresResultOptions.value[17].value = link_result3[cont.value][2]


        if (locale.value == "en-US"){
              lingua = 'English'
              featuresResult.value = "Select a feature"
              esito.value = Response_phrases[cont.value][3]
              motivation.value = Response_phrases[cont.value][1]
              featuresResultOptions.value[11].value = email_info.value.email[cont.value].body.body_greetings_custom
              featuresResultOptions.value[11].explanation = features_result[cont.value][6]
              featuresResultOptions.value[8].explanation = features_result[cont.value][8]
               featuresResultOptions.value[9].explanation = features_result[cont.value][3]

              featuresResultOptions.value[14].explanation = link_result1[cont.value][1]
              featuresResultOptions.value[15].explanation = link_result2[cont.value][1]
              featuresResultOptions.value[16].explanation = link_result4[cont.value][1]
              featuresResultOptions.value[17].explanation = link_result3[cont.value][1]
              featuresResultOptions.value = featuresResultOptions2
          }else if (locale.value == "it"){
              lingua = 'Italian'
              featuresResult.value = "Seleziona una feature"
              esito.value= Response_phrases[cont.value][2]
              motivation.value = Response_phrases[cont.value][0]
              featuresResultOptions.value[11].value = features_result[cont.value][4]
              featuresResultOptions.value[11].explanation = features_result[cont.value][5]
              featuresResultOptions.value[8].explanation = features_result[cont.value][7]
               featuresResultOptions.value[9].explanation = features_result[cont.value][2]

              featuresResultOptions.value[14].explanation = link_result1[cont.value][0]
              featuresResultOptions.value[15].explanation = link_result2[cont.value][0]
              featuresResultOptions.value[16].explanation = link_result4[cont.value][0]
              featuresResultOptions.value[17].explanation = link_result3[cont.value][0]


              featuresResultOptions.value = featuresResultOptions1
          }

    }

    const back = async () => {
      window.scrollTo(0, 0);
      slide.value="style"

      if ((cont.value > 1) && (cont.value <10)){
          cont.value = cont.value - 1
      }

        featuresResultOptions.value[0].value = email_info.value.email[cont.value].subject.subject_n_word
        featuresResultOptions.value[1].value = email_info.value.email[cont.value].subject.subject_n_chars
        featuresResultOptions.value[2].value = email_info.value.email[cont.value].body.body_n_words

        featuresResultOptions.value[3].value = email_info.value.email[cont.value].body.body_n_chars
        featuresResultOptions.value[4].value = email_info.value.email[cont.value].subject.subject_n_scammy_words
        featuresResultOptions.value[5].value = email_info.value.email[cont.value].subject.subject_n_phishy_words

        featuresResultOptions.value[6].value = email_info.value.email[cont.value].body.body_n_scammy_words
        featuresResultOptions.value[7].value = email_info.value.email[cont.value].body.body_n_phishy_words
        featuresResultOptions.value[8].value = email_info.value.email[cont.value].body.body_readability

        featuresResultOptions.value[9].value = features_result[cont.value][0]
        featuresResultOptions.value[9].explanation = features_result[cont.value][2]

        featuresResultOptions.value[10].value = email_info.value.email[cont.value].body.body_n_pictures

        featuresResultOptions.value[11].value = features_result[cont.value][4]
        featuresResultOptions.value[11].explanation = features_result[cont.value][5]

        featuresResultOptions.value[12].value = email_info.value.email[cont.value].subject.subject_ration_num
        featuresResultOptions.value[13].value = email_info.value.email[cont.value].subject.subject_ratio_special_chars

        featuresResultOptions.value[14].value = link_result1[cont.value][2]
        featuresResultOptions.value[15].value = link_result2[cont.value][2]
        featuresResultOptions.value[16].value = link_result4[cont.value][2]
        featuresResultOptions.value[17].value = link_result3[cont.value][2]


        if (locale.value == "en-US"){
              lingua = 'English'
              featuresResult.value = "Select a feature"
              esito.value = Response_phrases[cont.value][3]
              motivation.value = Response_phrases[cont.value][1]
              featuresResultOptions.value[11].value = email_info.value.email[cont.value].body.body_greetings_custom
              featuresResultOptions.value[11].explanation = features_result[cont.value][6]
              featuresResultOptions.value[8].explanation = features_result[cont.value][8]
               featuresResultOptions.value[9].explanation = features_result[cont.value][3]

              featuresResultOptions.value[14].explanation = link_result1[cont.value][1]
              featuresResultOptions.value[15].explanation = link_result2[cont.value][1]
              featuresResultOptions.value[16].explanation = link_result4[cont.value][1]
              featuresResultOptions.value[17].explanation = link_result3[cont.value][1]
              featuresResultOptions.value = featuresResultOptions2
          }else if (locale.value == "it"){
              lingua = 'Italian'
              featuresResult.value = "Seleziona una feature"
              esito.value= Response_phrases[cont.value][2]
              motivation.value = Response_phrases[cont.value][0]
              featuresResultOptions.value[11].value = features_result[cont.value][4]
              featuresResultOptions.value[11].explanation = features_result[cont.value][5]
              featuresResultOptions.value[8].explanation = features_result[cont.value][7]
               featuresResultOptions.value[9].explanation = features_result[cont.value][2]

              featuresResultOptions.value[14].explanation = link_result1[cont.value][0]
              featuresResultOptions.value[15].explanation = link_result2[cont.value][0]
              featuresResultOptions.value[16].explanation = link_result4[cont.value][0]
              featuresResultOptions.value[17].explanation = link_result3[cont.value][0]


              featuresResultOptions.value = featuresResultOptions1
          }

    }


    return {
      changeView,
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
      user_email,
      next,
      back,
      esito,
      motivation,
      showCards,
      slide,
      router,
      featuresResultOptions,
      featuresResult,
      group1: ref(null),
      cognitive_value,
      resetSelectValue,
      features_result,
      link_result1,
      link_result2,
      link_result3,
      link_result4,
      showFeature


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
