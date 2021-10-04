<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="q-pa-xs">
          <q-toolbar inset class ="shadow-2 rounded-borders bg-blue-10 text-white ">
            <div class="mb-3 mb-md-5 mx-auto text-center">
              <h5>{{$t('registerPage')}}</h5>
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
          <q-card class="bg-blue-10 text-white" style="width: 300px">
            <q-card-section>
              <div class="text-h6">{{$t('alertNotice')}}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{$t('alertCard')}}</q-card-section>

            <q-card-actions align="right" class="bg-white text-blue-10">
              <q-btn flat label="OK" @click="startRegister()"/>
            </q-card-actions>
          </q-card>
        </q-dialog>




        <q-stepper
          v-model="step"
          vertical
          color="primary"
          animated
        >

        <q-step
          :name="1"
          :title="$t('basicInfo')"

          icon="none"

          :done="step > 1"
        >

        <p style="color: grey;"> {{$t('basicInfoSub')}}</p>


        <q-space></q-space>
        <div class="row">
              <div class="col-md-2 col-sm-3 col-xs-12" style="margin-top:1%;">
                <q-select outlined :dense="true" v-model="ageModel" :options="ageOptions" :label="$t('age')" />
              </div>
              <div class="col-md-1 col-sm-12 col-xs-12" style="margin-top:1%;">
              </div>
              <div class="col-md-2 col-sm-3 col-xs-12" style="margin-top:1%;">
                <q-select outlined :dense="true" v-model="genderModel" :options="genderOptions" :label="$t('sex')"/>
              </div>
              <div class="col-md-1 col-sm-12 col-xs-12" style="margin-top:1%;">
              </div>
              <div class="col-md-2 col-sm-3 col-xs-12" style="margin-top:1%;">
                <q-select
                  outlined
                  :dense="true"
                  v-model="natModel"
                  :options="natOptions"
                  option-value="id"
                  option-label="name"
                  :label="$t('nat')"
                />
              </div>
              <div class="col-md-1 col-sm-12 col-xs-12" style="margin-top:1%;">
              </div>
              <div class="col-md-2 col-sm-3 col-xs-12" style="margin-top:1%;">
                <q-select
                  outlined
                  :dense="true"
                  v-model="lanModel"
                  :options="lanOptions"
                  option-value="id"
                  option-label="name"
                  :label="$t('lang')"
                />
              </div>
              <div class="col-md-1 col-sm-1 col-xs-12" style="margin-top:1%;">
              </div>
        </div>

        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" :label="$t('continue')" />
        </q-stepper-navigation>
      </q-step>

      <q-step
          :name="2"
          :title="$t('eduTitle')"
          icon="school"
          :done="step > 2"

        >

      <p style="color: grey;"> {{$t('eduDisclaimer')}}</p>

        <div class="row">
          <div class="col-md-1 col-sm-1 col-xs-12">
          </div>
              <div class="col-md-3 col-sm-5 col-xs-12">
                <q-select
                  v-model="eduLevelModel"
                  :options="eduLevelOptions"
                  option-value="id"
                  option-label="name"
                  :label="$t('education_level')"
                />
              </div>
              <div class="col-md-2 col-sm-1 col-xs-12">
          </div>
              <div class="col-md-3 col-sm-3 col-xs-12">
                <q-select
                  v-model="eduFieldModel"
                  :options="eduFieldOptions"
                  option-value="id"
                  option-label="name"
                  :label="$t('eduField')"
                />
              </div>


            </div>

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" :label="$t('continue')" />
          <q-btn flat @click="step = 1" color="primary" :label="$t('go_back')" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
          :name="3"
          :title="$t('workInfo')"
          icon="work"
          :done="step > 3"

        >

      <p style="color: grey;"> {{$t('workSub')}}</p>

        <div class="row">
              <div class="col-md-2 col-sm-3 col-xs-12">
                <q-select
                  v-model="jobFieldModel"
                  :options="jobFieldOptions"
                  option-value="id"
                  option-label="name"
                  :label="$t('jobField')"
                />
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div class="col-md-2 col-sm-3 col-xs-12">
                <q-select
                  v-model="emplTypeModel"
                  :options="emplTypeOptions"
                  option-value="id"
                  option-label="name"
                  :label="$t('employmentType')"
                />
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div class="col-md-3 col-sm-4 col-xs-12">
                <q-select v-model="jobExpYearModel" :options="jobExpYearOptions" :label="$t('yearsofEx')" />
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div class="col-md-3 col-sm-3 col-xs-12">
                <q-select

                  v-model="hobbyModel"
                  multiple
                  :options="hobbyOptions"
                  option-value="id"
                  option-label="name"
                  counter
                  :label="$t('mailboxUsage')"
                />
              </div>
        </div>

        <q-stepper-navigation>
          <q-btn @click="step = 4" color="primary" :label="$t('continue')" />
          <q-btn flat @click="step = 2" color="primary" :label="$t('go_back')" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>







        <q-step
        :name="4"
        :title="$t('skills')"
        icon="public"
        :done="step > 4"

      >


        <div class="row q-mt-lg">
              <div class="col-5 col-md-5 col-sm-12 col-xs-12">
              <q-badge color="blue-10" style="height: 18px;margin-bottom:4%;" >
                {{$t('computerScienceSkill')}} {{ computerScienceknowledgeModel }} (0 to 5)
              </q-badge>
              <div>

              </div>
              <q-slider
                v-model="computerScienceknowledgeModel"
                label
                :step="1"
                :min="0"
                :max="5"
              />
            </div>

            <div class="col-1 col-md-1 col-sm-12 col-xs-12">
            </div>

            <div class="col-5 col-md-5 col-sm-12 col-xs-12">
              <q-badge color="yellow-9"  style="height: 18px;margin-bottom:4%;">
                {{$t('workingHours')}} {{ workHoursPriorTestModel }} (0 to 10 hrs)
              </q-badge>

              <q-slider
                color="yellow-9"
                v-model="workHoursPriorTestModel"
                label
                :step="1"
                :min="0"
                :max="10"
              />
            </div>
        </div>



        <div class="row q-mt-lg">
              <div class="col-5 col-md-5 col-sm-12 col-xs-12">
                <q-badge color="red-10"  style="height: 18px;margin-bottom:4%;">
                  {{$t('timespentonInternet')}} {{ timeModel }} (0 to 15 hrs)
                </q-badge>

                <q-slider
                  v-model="timeModel"
                  color="red-10"
                  :min="0"
                  :max="15"
                  :step="1"
                  label

                />
              </div>

              <div class="col-1 col-md-1 col-sm-12 col-xs-12">
              </div>



              <div class="col-5 col-md-5 col-sm-12 col-xs-12">
                <q-badge color="green-9"  style="height: 18px;margin-bottom:4%;" >
                  {{$t('selfConfidence')}} {{ selfConfidenceModel }} (0 to 5)
                </q-badge>

                <q-slider
                  v-model="selfConfidenceModel"
                  label
                  :step="1"
                  color="green-9"
                  :min="0"
                  :max="5"
                />
              </div>
            </div>

        <q-stepper-navigation>
          <q-btn @click="step = 5" color="primary" :label="$t('continue')" />
          <q-btn flat @click="step = 3" color="primary" :label="$t('go_back')" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>




      <q-step
        :name="5"
        :title="$t('phishingAwareness')"
        icon="workspaces"
        :done="step > 5"

      >

        <div class="row q-mt-lg">
              <div class="col-auto">
                <q-toggle
                  :label="$t('anti_phishing_course')"
                  v-model="antiPhisCourseModel"
                />
              </div>
              <div class="col-auto">
                <q-toggle
                  color="green"
                  :label="$t('previous_victim')"
                  v-model="victimModel"
                />
              </div>
            </div>

        <q-stepper-navigation>
          <q-btn @click="step = 6" color="primary" :label="$t('continue')" />
          <q-btn flat @click="step = 4" color="primary" :label="$t('go_back')" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>



      <q-step
        :name="6"
        :title="$t('pers_Characterization')"
        icon="workspaces"
        :done="step > 6"

      >

      <p style="color: grey;"> {{$t('info_Characterization')}}</p>

        <div class="row q-mt-lg">

              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-yellow-9" style="margin-bottom:4%;">
                    <q-card-section>
                        <div class="text-h6 text-white">
                          {{$t('impulsivity')}} {{ impulsivityModel }} (0 to 5):
                        </div>
                        <div class="text-h8 bg-yellow-9 text-white">
                        {{$t('impulsivityString')}}
                        </div>
                    </q-card-section>
                </q-card>

                <q-slider
                  v-model="impulsivityModel"
                  label

                  :step="1"
                  color="yellow-9"
                  :min="0"
                  :max="5"
                />
              </div>

              <div class="col-1 col-md-1 col-sm-12 col-xs-12 q-mt-md">
              </div>

              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-blue-10" style="margin-bottom:4%;">
                    <q-card-section>
                      <div class="text-h6 text-white">
                        {{$t('curiosity')}}  {{ curiosityModel }} (0 to 5):
                      </div>
                      <div class="text-h8 bg-blue-10 text-white">
                        {{$t('curiosityString')}}
                      </div>
                    </q-card-section>
                </q-card>

                <q-slider
                  v-model="curiosityModel"
                  label

                  :step="1"
                  color="blue-10"
                  :min="0"
                  :max="5"
                />
              </div>

              </div>

              <div class="row q-mt-lg">
              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-orange-10" style="margin-bottom:4%;">
                    <q-card-section>
                        <div class="text-h6 text-white">
                           {{$t('risk_prop')}}  {{ riskPropensityModel }} (0 to 5):
                        </div>
                        <div class="text-h8 bg-orange-10 text-white">
                        {{$t('risk_propensityString')}}
                        </div>
                    </q-card-section>
                </q-card>

                <q-slider
                  v-model="riskPropensityModel"
                  label

                  :step="1"
                  color="orange-10"
                  :min="0"
                  :max="5"
                />
              </div>

              <div class="col-1 col-md-1 col-sm-12 col-xs-12 q-mt-md">
              </div>

              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-red-10" style="margin-bottom:4%;">
                    <q-card-section>
                      <div class="text-h6 text-white">
                        {{$t('risk_perc')}}  {{ riskPerceptionModel }} (0 to 5):
                      </div>
                      <div class="text-h8 bg-red-10 text-white">
                        {{$t('risk_perceptionString')}}
                      </div>
                    </q-card-section>
                </q-card>

                <q-slider
                  v-model="riskPerceptionModel"
                  label

                  :step="1"
                  color="red-10"
                  :min="0"
                  :max="5"
                />
              </div>

              </div>

              <div class="row q-mt-lg">
                <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-green-9" style="margin-bottom:4%;">
                    <q-card-section>
                        <div class="text-h6 text-white">
                          {{$t('privacy_data')}} {{ privacyDataModel }} (0 to 5):
                        </div>
                        <div class="text-h8 bg-green-9 text-white">
                        {{$t('privacy_dataString')}}
                        </div>
                    </q-card-section>
                </q-card>

                <q-slider
                  v-model="privacyDataModel"
                  label

                  :step="1"
                  color="green -9"
                  :min="0"
                  :max="5"
                />
              </div>
              </div>

        <q-stepper-navigation>
          <q-btn @click="step = 7" color="primary" :label="$t('continue')" />
          <q-btn flat @click="step = 5" color="primary" :label="$t('go_back')" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="7"
        :title="$t('big_five')"
        icon="workspaces"

        :done="step > 7"
      >

      <p style="color: grey;"> {{$t('info_Characterization')}} </p>


        <div class="row q-mt-lg">

        <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-green-10" style="margin-bottom:4%;">
                    <q-card-section>
                      <div class="text-h6 text-white">
                        {{$t('openness')}}  {{ opennessModel }} (0 to 5):
                      </div>
                      <div class="text-h8 bg-green-10 text-white">
                        {{$t('opennessString')}}
                      </div>
                    </q-card-section>
                </q-card>
                <q-slider
                  v-model="opennessModel"
                  label

                  :step="1"
                  color="green-10"
                  :min="0"
                  :max="5"
                />
              </div>




              <div class="col-1 col-md-1 col-sm-12 col-xs-12 q-mt-md">
              </div>

              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-blue-10" style="margin-bottom:4%;">
                    <q-card-section>
                      <div class="text-h6 text-white">
                        {{$t('extrav')}}  {{ extraversionModel }} (0 to 5):
                      </div>
                      <div class="text-h8 bg-blue-10 text-white">
                        {{$t('extraversionString')}}
                      </div>
                    </q-card-section>
                </q-card>

                <q-slider
                  v-model="extraversionModel"
                  label
                  :step="1"
                  color="blue-10"
                  :min="0"
                  :max="5"
                />
              </div>

              </div>

              <div class="row q-mt-lg">
              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-orange-10" style="margin-bottom:4%;">
                    <q-card-section>
                        <div class="text-h6 text-white">
                          {{$t('agreableness')}}  {{ agreeablenessModel }} (0 to 5):
                        </div>
                        <div class="text-h8 bg-orange-10 text-white">
                        {{$t('agreeablenessString')}}
                        </div>
                    </q-card-section>
                </q-card>

                <q-slider
                  v-model="agreeablenessModel"
                  label
                  :step="1"
                  color="orange-10"
                  :min="0"
                  :max="5"
                />
              </div>

              <div class="col-1 col-md-1 col-sm-12 col-xs-12 q-mt-md">
              </div>

              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-red-10" style="margin-bottom:4%;">
                    <q-card-section>
                      <div class="text-h6 text-white">
                        {{$t('conscientiousness')}}  {{ conscientiousnessModel }} (0 to 5):
                      </div>
                      <div class="text-h8 bg-red-10 text-white">
                        {{$t('conscientiousnessString')}}
                      </div>
                    </q-card-section>
                </q-card>

                <q-slider
                  v-model="conscientiousnessModel"
                  label

                  :step="1"
                  color="red-10"
                  :min="0"
                  :max="5"
                />
              </div>

              </div>



              <div class="row q-mt-lg">
              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-yellow-10" style="margin-bottom:4%;">
                    <q-card-section>
                      <div class="text-h6 text-white">
                        {{$t('emot_stability')}}  {{ emotionalStabilityModel }} (0 to 5):
                      </div>
                      <div class="text-h8 bg-yellow-10 text-white">
                        {{$t('emotional_stabilityString')}}
                      </div>
                    </q-card-section>
                </q-card>
                <q-slider
                  v-model="emotionalStabilityModel"
                  label

                  :step="1"
                  color="yellow-10"
                  :min="0"
                  :max="5"
                />
              </div>
              </div>


        <q-stepper-navigation>
          <q-btn @click="step = 8" color="primary" :label="$t('continue')" />
          <q-btn flat @click="step = 6" color="primary" :label="$t('go_back')" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="8"
        :title="$t('cognitive_vulnerabilities')"
        icon="workspaces"

        :done="step > 8"
      >

      <p style="color: grey;"> {{$t('info_Characterization')}} </p>
        <div class="row q-mt-lg">
              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-yellow-9" style="margin-bottom:4%;">
                    <q-card-section>
                        <div class="text-h6 text-white">
                          {{$t('scarcity')}}  {{ scarcityModel }} (0 to 5):
                        </div>
                        <div class="text-h8 bg-yellow-9 text-white">
                        {{$t('scarcityString')}}
                        </div>
                    </q-card-section>
                </q-card>

                <q-slider
                  v-model="scarcityModel"
                  label

                  :step="1"
                  color="yellow-9"
                  :min="0"
                  :max="5"
                />
              </div>

              <div class="col-1 col-md-1 col-sm-12 col-xs-12 q-mt-md">
              </div>

              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-green-10" style="margin-bottom:4%;">
                    <q-card-section>
                      <div class="text-h6 text-white">
                        {{$t('consistency')}}  {{ consistencyModel }} (0 to 5):
                      </div>
                      <div class="text-h8 bg-green-10 text-white">
                        {{$t('consistencyString')}}
                      </div>
                    </q-card-section>
                </q-card>

                <q-slider
                  v-model="consistencyModel"
                  label
                  :step="1"
                  color="green-10"
                  :min="0"
                  :max="5"
                />
              </div>

              </div>

              <div class="row q-mt-lg">
              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-orange-10" style="margin-bottom:4%;">
                    <q-card-section>
                        <div class="text-h6 text-white">
                          {{$t('social_proof')}}   {{ socialProofModel }} (0 to 5):
                        </div>
                        <div class="text-h8 bg-orange-10 text-white">
                        {{$t('social_proofString')}}
                        </div>
                    </q-card-section>
                </q-card>

                <q-slider
                  v-model="socialProofModel"
                  label
                  :step="1"
                  color="orange-10"
                  :min="0"
                  :max="5"
                />
              </div>

              <div class="col-1 col-md-1 col-sm-12 col-xs-12 q-mt-md">
              </div>

              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-red-10" style="margin-bottom:4%;">
                    <q-card-section>
                      <div class="text-h6 text-white">
                        {{$t('gratitude')}}  {{ gratitudeModel }} (0 to 5):
                      </div>
                      <div class="text-h8 bg-red-10 text-white">
                        {{$t('gratitudeString')}}
                      </div>
                    </q-card-section>
                </q-card>

                <q-slider
                  v-model="gratitudeModel"
                  label

                  :step="1"
                  color="red-10"
                  :min="0"
                  :max="5"
                />
              </div>

            <div class="row q-mt-lg">
              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-blue-10" style="margin-bottom:4%;">
                    <q-card-section>
                      <div class="text-h6 text-white">
                       {{$t('authority')}}  {{ authorityModel }} (0 to 5):
                      </div>
                      <div class="text-h8 bg-blue-10 text-white">
                        {{$t('authorityString')}}
                      </div>
                    </q-card-section>
                </q-card>

                <q-slider
                  v-model="authorityModel"
                  label

                  :step="1"
                  color="blue-10"
                  :min="0"
                  :max="5"
                />
              </div>
            </div>
              </div>





        <q-stepper-navigation>
          <q-btn color="primary" @click="userRegister()" :label="$t('finish')" />
          <q-btn flat @click="step = 7" color="primary" :label="$t('go_back')" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      </q-stepper>

        <q-card>






        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, reactive, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'

export default defineComponent({
  setup () {
    const $q = useQuasar()
    const store = useStore()
    const step = ref(1)
    const ageModel = ref(null)
    const ageOptions = reactive(Array.from({length: 83}, (_, i) => i + 18))
    const genderModel = ref(null)
    const genderOptions = reactive(['Female', 'Male', 'Other'])
    const eduLevelModel = ref(null)
    const eduLevelOptions = computed(() => store.getters['userCharacteristic/eduLevel'])
    const eduFieldModel = ref(null)
    const eduFieldOptions = computed(() => store.getters['userCharacteristic/eduField'])
    const jobFieldModel = ref(null)
    const jobFieldOptions = computed(() => store.getters['userCharacteristic/jobField'])
    const emplTypeModel = ref(null)
    const emplTypeOptions = computed(() => store.getters['userCharacteristic/emplType'])
    const hobbyModel = ref(null)
    const hobbyOptions = computed(() => store.getters['userCharacteristic/hobby'])
    const impulsivityString = 'Impulsivity is a personality dimension described as \“acting without thinking\". How impulsive are you in your decision?'
    const curiosityString = 'The desire to learn or to know about anything.'+ '\n'+ 'Are you curious ?' +'\n' + 'How curious are you?' + '\n' + 'When you read an email are you curious to know what is behind the link?'
    const emotional_stabilityString ='Emotional stability, which describes a person who is more likely to be calm. How stable do you think you are emotionally?'
    const  conscientiousnessString = 'Conscientiousness describes a person who has the tendency to be responsible, organized, hardworking, goal-oriented and to adhere to norms and rules. It includes self-control, industriousness, responsibility and reliability. How well do you control your impulses which could affect your results?'
    const  agreeablenessString ='Agreeableness describes a person who is usually warm, friendly, and tactful. They generally have an optimistic view of human nature and get along well with others. In this case, how agreeable are you?'
    const  extraversionString ='Extraversion indicates how outgoing and social a person is. How outgoing are you?'
    const  privacy_dataString ='Is defined as an individual\'s concern about possible loss of privacy due to voluntary or surreptitious information disclosure. How concerned are you about your digital privacy?'
    const  risk_perceptionString = 'Risk perception is the subjective judgment that people make about the characteristics and severity of a risk. And you, what perception of risk do you have?'
    const  risk_propensityString ='The degree an entity is prepared to take a chance with the risk of a loss. How much are you willing to risk?'
    const opennessString = 'Openness indicates how open-minded a person is. Individuals with a high level of openness have a general appreciation for unusual ideas and art. They are usually imaginative, rather than practical. How open-minded are you?'
    const scarcityString ='Tendency to assign more value to items and opportunities when their availability is limited, not to waste the opportunity. Are you willing to make the most of the opportunities of this moment?'
    const consistencyString = 'Tendency to behave in a way consistent with past decisions and behaviours. Consistency is an adaptive behavior that has been very beneficial. Doing certain things the same way and making decisions according to the same values helps us survive in a complex world. Do you always behave the same way when you read an email?'
    const  social_proofString = 'Tendency to reference the behaviour of others, by using the majority behaviour to guide their own actions. How much does your actions depend on the behavior of others?'
    const  gratitudeString ='Tendency to feel obliged to repay favours from others.“I do something for you, you do something for me." Reciprocity is the impulse we feel to return the favor after we are helped by someone or given value. Are you grateful to people?'
    const   authorityString ='Tendency to obey people in authoritative positions, following from the possibility of punishment for not complying with the authoritative requests. How do you obey authority?'
    const jobExpYearModel = ref(null)
    const jobExpYearOptions = reactive(Array.from(Array(41).keys()))
    const natModel = ref(null)
    const natOptions = reactive(
      [
        'Italian',
        'German',
        'Spanish',
        'French',
        'English',
        'Turkish',
        'Dutch',
        'Arabic'
      ]
    )
    const lanModel = ref(null)
    const lanOptions = reactive(
      [
        'Italian',
        'English',
        'German',
        'French',
        'Chinese',
        'American',
        'Arabic',
        'Japanese'
      ]
    )

    const computerScienceknowledgeModel = ref(0)
    const antiPhisCourseModel = ref(false)
    const victimModel = ref(false)
    const timeModel = ref(0)
    const selfConfidenceModel = ref(0)
    const impulsivityModel = ref(0)
    const curiosityModel = ref(0)
    const riskPropensityModel = ref(0)
    const riskPerceptionModel = ref(0)
    const privacyDataModel = ref(0)
    const extraversionModel = ref(0)
    const agreeablenessModel = ref(0)
    const conscientiousnessModel = ref(0)
    const emotionalStabilityModel = ref(0)
    const opennessModel = ref(0)
    const scarcityModel = ref(0)
    const consistencyModel = ref(0)
    const socialProofModel = ref(0)
    const gratitudeModel = ref(0)
    const authorityModel = ref(0)
    const workHoursPriorTestModel = ref(0)

    const form = reactive({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    })
    const persistent = ref(true)
    const showImpulsivity = ref (false)
    const showCuriosity = ref(false)
    const showRiskProp = ref(false)
    const showRiskPercept = ref(false)
    const showPrivacydata = ref(false)
    const showExtraversion = ref(false)
    const showAgreeable = ref(false)
    const showConscientious = ref(false)
    const showEmotionalStability = ref(false)
    const showOpenness = ref(false)
    const showScarcity = ref(false)
    const showConsinstency = ref(false)
    const showSocialProof = ref(false)
    const showGratitude = ref(false)
    const router = useRouter()

    const startRegister = async () => {
      persistent.value = false
      showImpulsivity.value = false
      showCuriosity.value  = false
      showRiskProp.value  = false
      showRiskPercept.value  =false
      showPrivacydata.value  = false
      showExtraversion.value  = false
      showAgreeable.value  = false
      showConscientious.value  = false
      showEmotionalStability.value  = false
      showOpenness.value  = false
      showScarcity.value  = false
      showConsinstency.value  = false
      showSocialProof.value  = false
      showGratitude.value  = false
      await store.dispatch('userCharacteristic/get_edu_field')
      await store.dispatch('userCharacteristic/get_edu_level')
      await store.dispatch('userCharacteristic/get_job_field')
      await store.dispatch('userCharacteristic/get_empl_type')
      await store.dispatch('userCharacteristic/get_hobby')
    }
    const userRegister = async () => {

      if(ageModel.value == null || !genderModel.value || !eduLevelModel.value
          || !eduFieldModel.value || !jobFieldModel.value
          || !emplTypeModel.value || jobExpYearModel.value == null || !hobbyModel.value
          || !natModel.value || !lanModel.value){

        $q.notify({
          type: 'negative',
          message: 'Enter all required fields!'
        })
      }
      else{

        const hobbies = []
        for(let i=0; i<hobbyModel.value.length; i++){
          hobbies.push(hobbyModel.value[i].id)
        }

        const userInfo = {
          authenticationModel: {
            age: ageModel.value,
            gender: genderModel.value,
            years_job_experience: jobExpYearModel.value,
            nationality: natModel.value,
            preferred_lang: lanModel.value,
            computer_science_knowledge: computerScienceknowledgeModel.value,
            antiPhishing_course: antiPhisCourseModel.value,
            phishing_attack: victimModel.value,
            time_on_internet: timeModel.value,
            educationLevel_id: eduLevelModel.value.id,
            educationField_id: eduFieldModel.value.id,
            jobField_id: jobFieldModel.value.id,
            employmentType_id: emplTypeModel.value.id,
            work_hours_prior_test: workHoursPriorTestModel.value,
          },
          emailCustomUserModel: {
            time_taken_to_answer: null,
            time_of_day: null,
            day_of_week: null,
            test_location: null
          },
          hobby: hobbies,
          personality: {
            self_confidence: selfConfidenceModel.value,
            impulsivity: impulsivityModel.value,
            curiosity: curiosityModel.value,
            risk_propensity: riskPropensityModel.value,
            risk_perception: riskPerceptionModel.value,
            privacy_data: privacyDataModel.value,
            extraversion: extraversionModel.value,
            agreeableness: agreeablenessModel.value,
            conscientiousness: conscientiousnessModel.value,
            emotional_stability: emotionalStabilityModel.value,
            openness: opennessModel.value,
            scarcity: scarcityModel.value,
            consistency: consistencyModel.value,
            social_proof: socialProofModel.value,
            gratitude: gratitudeModel.value,
            authority: authorityModel.value,
            hash: selfConfidenceModel.value.toString()+impulsivityModel.value.toString()+curiosityModel.value.toString()+riskPropensityModel.value.toString()+riskPerceptionModel.value.toString()+privacyDataModel.value.toString()+extraversionModel.value.toString()+agreeablenessModel.value.toString()+conscientiousnessModel.value.toString()+emotionalStabilityModel.value.toString()+opennessModel.value.toString()+scarcityModel.value.toString()+consistencyModel.value.toString()+socialProofModel.value.toString()+gratitudeModel.value.toString()+authorityModel.value.toString()
          }
        }

        await store.dispatch('userCharacteristic/register', userInfo).then(()=>{
          //console.log("dispatch con SUCCESSO")
          router.push({name : 'infoBeforeStart'})
        })
      }
    }

    return {
      ageModel,
      ageOptions,
      genderModel,
      genderOptions,
      eduLevelModel,
      eduLevelOptions,
      eduFieldModel,
      eduFieldOptions,
      jobFieldModel,
      jobFieldOptions,
      emplTypeModel,
      emplTypeOptions,
      hobbyModel,
      hobbyOptions,
      jobExpYearOptions,
      jobExpYearModel,
      router,
      step,
      natModel,
      natOptions,
      lanModel,
      lanOptions,
      computerScienceknowledgeModel,
      antiPhisCourseModel,
      victimModel,
      timeModel,
      selfConfidenceModel,
      impulsivityModel,
      curiosityModel,
      riskPropensityModel,
      riskPerceptionModel,
      privacyDataModel,
      extraversionModel,
      agreeablenessModel,
      conscientiousnessModel,
      emotionalStabilityModel,
      opennessModel,
      scarcityModel,
      consistencyModel,
      socialProofModel,
      gratitudeModel,
      authorityModel,
      workHoursPriorTestModel,
      form,
      startRegister,
      userRegister,
      impulsivityString,
      curiosityString,
      emotional_stabilityString,
      conscientiousnessString,
      agreeablenessString,
      extraversionString,
      privacy_dataString,
      risk_perceptionString,
      risk_propensityString,
      opennessString,
      scarcityString,
      consistencyString,
      social_proofString,
      gratitudeString,
      authorityString,
      showImpulsivity,
      showCuriosity,
      showRiskProp,
      showRiskPercept,
      showPrivacydata,
      showExtraversion,
      showAgreeable,
      showConscientious,
      showEmotionalStability,
      showOpenness,
      showScarcity,
      showConsinstency,
      showSocialProof,
      showGratitude,
      persistent
    }
  }

})

</script>
