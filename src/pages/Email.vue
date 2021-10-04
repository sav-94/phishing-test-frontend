<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="q-pa-xs">
          <q-toolbar v-if="!persistent" inset class ="shadow-2 rounded-borders bg-blue-10 text-white ">
            <div v-if="cont < 10" class="mb-3 mb-md-5 mx-auto text-center">
              <h5 >Email {{cont+1}}/10</h5>
            </div>
            <div v-if="cont === 10" class="mb-3 mb-md-5 mx-auto text-center">
              <h5>Test Completed</h5>
            </div>

            <q-space />

            <q-btn flat round dense icon="kayaking" />
            <q-btn flat round dense icon="password" />
            <q-btn flat round dense icon="attach_email" />
            <q-btn flat round dense icon="sentiment_satisfied_alt" />

          </q-toolbar>
        </div>

        <!-- ALERT -->

        <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
          <q-card  style="width: 750px; max-width: 80vw;">
            <q-card-section class="bg-blue-10 text-white">
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
                  :rules="[ val => val && val.length > 0 || $t('pop_starting3')]"
                />
                <q-input
                  v-model="form.email"
                  :label="$t('pop_starting4')"
                  :hint="$t('pop_starting5')"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || $t('pop_starting5')]"
                />

                <div class="text-right">
                  <q-btn :label="$t('pop_starting6')" type="submit" color="blue-10"/>
                </div>

              </q-form>

            </q-card-section>

          </q-card>
        </q-dialog>


        <q-dialog v-if="countTime > 100 && cont < 10" v-model="timeEndPersistent" persistent transition-show="scale" transition-hide="scale">
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

        <div v-if="cont === 10" class="row">
          <div class="col-auto q-ml-xl q-mt-lg">
            <q-btn @click="testDelivery()" outline color="gray" :label="$t('finish')" />
          </div>
        </div>

        <!-- COUNT TIME -->
        <div v-if="countTime != -1 && cont < 10" class="q-mr-xl q-ma-sm text-right">
          <q-circular-progress
            class="text-red q-ma-md"
            :value="countTime"
            size="50px"
            color="red"
            track-color="grey-4"
          />
        </div>
        <!-- EMAIL -->
        <transition-group
            appear
            enter-active-class="animated fadeInRight"
          >
        <div v-if="!persistent && email_info.email[cont] !== undefined" class="row q-ma-xl flex flex-center">

          <div class="col-md-9 col-xs-12">
              <div class="text-black-9 text-center text-justify" style="margin-bottom:3%;">
                <div>{{email_info.email[cont].contex}} </div>
              </div>

            <q-card>
              <q-card-section>
                <div class="row">

                  <div class="col-auto">
                    <q-avatar  color="white" text-color="primary" font-size="100%" icon="account_circle" />
                  </div>

                  <div class="col q-pl-md">
                    <div>
                      <span><b>{{email_info.email[cont].sender_name}}</b> {{email_info.email[cont].fromEmail.from_email}}</span>
                    </div>
                    <div>
                      <q-btn size="s"  flat label="to me" style="font-size:90%;" icon-right="arrow_drop_down">
                        <q-menu>

                          <q-list dense padding class="rounded-borders q-mt-md q-ml-lg q-mr-lg q-mb-md">
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
                  <q-btn :icon="email_info.email[cont].body.button_icon" :color="email_info.email[cont].body.button_color" :label="email_info.email[cont].body.button_name">
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


          <div class="q-mt-lg col-xs-12 flex flex-center">
            <div class="col-auto q-pr-xl">
              <q-btn @click="next(true)"  color="negative" label="PHISHING" />
            </div>
            <div class="col-auto">
              <q-btn @click="next(false)" :disable="reported_as_spam" color="positive" label="LEGITIMATE" />
            </div>
          </div>
          <div class="q-mt-lg col-xs-12 flex flex-center">

            <div class="col-medium-3 col-xs-12 q-pr-xl">
                <div class="q-gutter-sm">
                  <q-checkbox left-label v-model="reported_as_spam" :label="$t('label_suspicious')" />
                </div>
            </div>
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

export default defineComponent({
  setup () {
    const router = useRouter()
    const store = useStore()
    const email_info = computed(() => store.state.email)
    const form = reactive({
      first_name: '',
      email: ''
    })
    const reported_as_spam = ref(false)
    const countTime = ref(-1)
    const userEmail = reactive([])
    const cont = ref(0)
    const persistent = ref(true)
    const timeEndPersistent = ref(true)
    if (localStorage.getItem('access_token')) {
    console.log("user already did the test")
      const persistent = ref(false)
    }else{
      const persistent = ref(true)
    }
    console.log("email")
    console.log( store.getters['auth/isLoggedin'])



  const startTest = async () => {
      persistent.value = false

      if(countTime.value === -1){
        countTime.value = 0
        await store.dispatch('email/get_email', form)
      }
      setTimeout(() => {
                  countTime.value += 1
                  startTest()
      }, 900)
    }

    const next = async (answer) => {
      const time_taken_to_answer = countTime.value
      const temp_spam = reported_as_spam.value
      reported_as_spam.value = false
      countTime.value = 0
      console.log(temp_spam)

      if(cont.value < 10){
        const userEma= {
          emailId: email_info.value.email[cont.value].id,
          answer: answer,
          time_taken_to_answer: time_taken_to_answer,
          reported_as_spam: temp_spam
        }

        userEmail.push(userEma)

        cont.value = cont.value + 1
        countTime.value = 0

      }
      if(cont.value === 10){
        countTime.value = -1
      }
    }

    const testDelivery = async () => {
      console.log('delivery')
      const generalInfo = {
        userId: localStorage.getItem('userId'),
        name: form.first_name,
        email: form.email,
        platform: window.navigator.platform
      }

      userEmail.push(generalInfo)
      await store.dispatch('email/test_delivery', userEmail)
      router.push({ name: 'result' })
    }

    const timeEnd = () => {
      const time_taken_to_answer = 100
      const temp_spam = reported_as_spam
      reported_as_spam = false
      if(cont.value < 10){
        const userEma= {
          emailId: email_info.value.email[cont.value].id,
          answer: !email_info.value.email[cont.value].phishing_email,
          time_taken_to_answer: time_taken_to_answer,
          reported_as_spam: temp_spam
        }

        userEmail.push(userEma)

        cont.value += 1
        countTime.value = 0

        if(cont.value === 9){
          countTime.value = -1
          //  timeEndPersistent.value = false
        }

      }

    }

    return {
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
      timeEnd
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
