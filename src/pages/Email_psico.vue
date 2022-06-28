<template  style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png'">
  <q-layout view="lHh lpr lFf" style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png'">
        <q-page-container style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png'">
      <q-page style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png'">

        <!-- ALERT -->
        <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
          <q-card  style="width: 750px; max-width: 80vw;">
            <q-card-section class="bg-white-10 text-blue-10">
              <div class="text-h6">{{$t('pop_starting1')}}</div>
            </q-card-section>

            <q-card-section>
              <q-form
                @submit="startTest"
                class="q-gutter-md"
              >
                <q-input
                  v-model="form.first_name"
                  :label="$t('pop_starting2')"
                  :hint="$t('pop_starting3')"
                  lazy-rules
                  :rules="[ val =>  val && val.length > 0 || $t('pop_starting3')]"
                />
                <q-input
                  v-model="form.email"
                  :label="$t('pop_starting4')"
                  :hint="$t('pop_starting5')"
                  lazy-rules
                  :rules="[ val => !!val || $t('pop_starting5'), , isValidEmail]"
                />
                <div class="text-right">
                  <q-btn flat :label="$t('pop_starting6')" type="submit" color="blue-10"/>
                </div>
              </q-form>
            </q-card-section>
          </q-card>
        </q-dialog>


        <q-dialog v-if="countTime > 300 && cont < 10" v-model="timeEndPersistent" persistent transition-show="scale" transition-hide="scale">
          <q-card  style="width: 300px">
            <q-card-section class="bg-blue-10 text-white">
              <div class="text-h6">{{$t('time_alert')}}</div>
            </q-card-section>
            <q-card-section class="q-pt-none bg-blue-10 text-white">
              {{$t('time_alert_text')}}
            </q-card-section>
            <q-card-section class="q-pt-none q-mt-md">
                <div class="flex flex-center">
                  <q-btn :label="$t('continue')" @click="timeEnd()" color="blue-10"/>
                </div>
            </q-card-section>
          </q-card>
        </q-dialog>

      <q-dialog persistent v-model="terminate">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-primary">{{$t('nice_job')}}</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn v-model="terminate" @click="() => { router.push({ name: 'result_psico' }) }" color="primary" :label="$t('show_results')" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

        <!-- EMAIL -->
        <transition-group
            appear
            enter-active-class="animated fadeInRight"
          >
        <div class="row" v-if="!persistent && email_info.email[cont] !== undefined">
             <div class="col-md-3">
               <h6 class="q-ml-xl q-mt-xs text-red-10"><b>{{cont+1}}</b>/20</h6>
          </div>
        </div>
        <div v-if="!persistent && email_info.email[cont] !== undefined" class="row flex flex-center">
        <!-- dentro questo div con v-if ora devo usare  -->
            <div v-if="show_contesto" class="col-md-7 col-xs-12">
              <q-card style="margin-top:15%;">
                <q-card-section class="bg-indigo-1 text-black text-center" :class="changeColor" >
                  <div class="text-blue-10 text-center text-justify center">

                   <!-- QUI va il v-if = email_info_backup[cont].context !== undefined && email_info_backup[cont].context !== ''" perchè altrimenti
                  al posto dell h5 va un altro h5 con una croce al centro -->

                    <h5 style="font-size:130%; margin: 20px 10px 20px;">{{email_info.email[cont].contex}} </h5>
                  </div>
                </q-card-section>
                <q-card-actions align="center">
                    <q-btn flat @click="hide_contesto()">Avanti</q-btn>
                </q-card-actions>
                <!-- QUI va una sezione q-action con i tasti che invocano la funzione avanti() che rende falso la q-card e fa diventare true solo la mail -->
              </q-card>
            </div>

            <div class="col-md-1" v-if="show_mail"></div>
            <div class="col-md-9 col-xs-12" v-if="show_mail" style="margin-top:-5%;">
          <q-list dense bordered padding class="rounded-borders q-mt-sm bg-white">
              <q-item>
                <q-item-section>
                <div class="row">
                  <div class="col-auto q-ml-xs">
                    <q-avatar color="white" text-color="primary" font-size="100%" icon="account_circle" />
                  </div>
                  <div class="col q-pl-md">
                    <div>
                      <span><b>{{email_info.email[cont].sender_name}}</b></span>
                    </div>
                    <div class="q-mt-md">
                      <p><b><span style="color:#808080">from:</span></b>{{email_info.email[cont].fromEmail.from_email}}</p>
                    </div>
                    <div class="q-mt-xs">
                      <p><b><span style="color:#808080">to:</span></b> {{form.email}}</p>
                    </div>
                    <div>
                      <p><b><span style="color:#808080">data:</span></b> {{email_info.email[cont].data}}</p>
                    </div>
                    <div>
                      <p><b><span class="color:#808080">subject:</span></b> {{email_info.email[cont].subject.subject_email}}</p>
                    </div>
                    <div>
                      <p v-html="email_info.email[cont].body.body_attachment" />
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
             </q-item-section>
            </q-item>
              <q-separator spaced />
                 <q-item>
                <q-item-section>
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
                  <q-btn class="tooltip" :icon="email_info.email[cont].body.button_icon" :color="email_info.email[cont].body.button_color" :label="email_info.email[cont].body.button_name">
                      <div class="tooltiptext"> {{email_info.email[cont].body.button_link}} </div>
                  </q-btn>
                </div>
                <div v-html="email_info.email[cont].body.body_bottom" />
                <div v-html="email_info.email[cont].body.body_signature" />
                <div v-html="email_info.email[cont].body.body_footer" />
                  </q-item-section>
               </q-item>
          </q-list>
          </div>

          <div class="col-md-1 q-ml-md" v-if="show_mail">
              <q-btn @click="go_on()" outline color="primary" label="Avanti" size="md"/>
          </div>

          <div class="q-mt-lg col-xs-12 flex flex-center" v-if="show_legittimate_phishing" style="margin-top:15%;" >
            <div class="col-auto q-pr-xl">
              <q-btn @click="next(true)"  outline color="primary" label="Phishing" size="xl"/>
            </div>
            <div class="col-auto">
              <q-btn @click="next(false)" outline :disable="reported_as_spam" color="primary" :label="$t('legitimate')" size="xl"/>
            </div>
          </div>
          <div class="q-mt-lg col-xs-12 flex flex-center">

            <!--<div class="col-medium-3 col-xs-12 q-ma-md" v-if="show_legittimate_phishing">
                <div class="q-gutter-sm">
                  <q-checkbox class="disabled" left-label v-model="reported_as_spam" :label="$t('label_suspicious')" />
                </div>
            </div>
            -->
        </div>
        </div>

        </transition-group>
      </q-page>
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
    const email_info = computed(() => store.state.email)
    const { locale } = useI18n({ useScope: 'global' })


    const show_contesto = ref(true)
    const show_mail = ref(false)
    const show_legittimate_phishing = ref(false)

    const form = reactive({
      first_name: '',
      email: ''
    })
    const terminate = ref(false)
    const reported_as_spam = ref(false)
    const countTime = ref(-1)
    const userEmail = reactive([])
    const cont = ref(0)
    const persistent = ref(true)
    const timeEndPersistent = ref(true)
    const timer_mail = ref(null)
    const startTest = async () => {
      persistent.value = false
      if(countTime.value === -1){
        countTime.value = 0
        await store.dispatch('email/get_email', form)
      }
      setTimeout(() => {
                  countTime.value += 1
      }, 900)
    }
    const hide_contesto = async () => {
      show_contesto.value = false
      show_mail.value = true
      timer_mail.value = setTimeout(() => {
          show_mail.value= false
          show_legittimate_phishing.value = true
       }, 20000)
   }



  const go_on = async ()=>{
    show_mail.value = false
    show_legittimate_phishing.value = true
    clearTimeout(timer_mail.value)
  }

    const next = async (answer) => {
      const time_taken_to_answer = countTime.value
      const temp_spam = false
      reported_as_spam.value = false
      countTime.value = 0

      if(cont.value < 20){
	      show_contesto.value = true
        show_legittimate_phishing.value = false
        show_mail.value = false
        const userEma= {
          emailId: email_info.value.email[cont.value].id,
          answer: answer,
          time_taken_to_answer: time_taken_to_answer,
          reported_as_spam: temp_spam
        }

        userEmail.push(userEma)

        cont.value = cont.value + 1
        countTime.value = 0
        window.scrollTo(0, 0);

      }
      if(cont.value === 20){
        terminate.value = true
        show_contesto.value = false
        persistent.value = false
        countTime.value = -1
        testDelivery()
      }
    }

    const testDelivery = async () => {
      //console.log('delivery')
      const generalInfo = {
        userId: localStorage.getItem('userId'),
        name: form.first_name,
        email: form.email,
        platform: window.navigator.platform
      }

      userEmail.push(generalInfo)
      await store.dispatch('email/test_delivery', userEmail)
      //router.push({ name: 'result' })
    }

    const isValidEmail = async (val) => {
        const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || 'Invalid email';
    }



    const timeEnd = () => {
      const time_taken_to_answer = 300
      const temp_spam = false
      reported_as_spam.value = false
      if(cont.value < 20){
        const userEma= {
          emailId: email_info.value.email[cont.value].id,
          answer: !email_info.value.email[cont.value].phishing_email,
          time_taken_to_answer: time_taken_to_answer,
          reported_as_spam: temp_spam
        }

        userEmail.push(userEma)

        cont.value += 1
        countTime.value = 0

        if(cont.value === 19){
          countTime.value = -1
          //  timeEndPersistent.value = false
        }

      }

    }

    return {
	    hide_contesto,
	    show_contesto,
      timer_mail,
      go_on,
      show_mail,
      show_legittimate_phishing,
      form,
      startTest,
      persistent,
      email_info,
      testDelivery,
      cont,
      reported_as_spam,
      next,
      countTime,
      timeEndPersistent,
      isValidEmail,
      terminate,
      router,
      timeEnd
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
  background-color: rgba(16, 57, 191, 0.907);
  color: #fff;
  text-align: center;
  border-radius: 1%;
  padding: 0;
  border: none;
  position: fixed;
  bottom: 0;
  left: 0;
  margin-right: 2px;
  margin-bottom: 10px;
  font-size: 15px;
  text-transform: lowercase;

  /* Position the tooltip */

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
