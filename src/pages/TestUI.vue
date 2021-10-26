<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="q-pa-xs">
          <q-toolbar inset class ="shadow-2 rounded-borders bg-blue-10 text-white ">
            <div class="mb-3 mb-md-5 mx-auto text-center">
              <q-toolbar-title>{{$t('registerPage')}}</q-toolbar-title>
            </div>

            <q-space />

            <q-btn class="gt-sm" flat round dense icon="kayaking" />
            <q-btn class="gt-sm" flat round dense icon="password" />
            <q-btn class="gt-sm" flat round dense icon="attach_email" />
            <q-btn class="gt-sm" flat round dense icon="sentiment_satisfied_alt" />

          </q-toolbar>
        </div>

        <!-- ALERT -->
        <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
          <q-card class="bg-white-10 text-primary" style="width: 300px">
            <q-card-section>
              <div class="text-h6">{{$t('alertNotice')}}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{$t('alertCard')}}</q-card-section>

            <q-card-actions align="right" class="bg-white-10">
              <q-btn  flat label="OK" @click="startRegister()"/>
            </q-card-actions>
          </q-card>
        </q-dialog>




        <q-stepper
          v-model="step"
          vertical
          header-nav
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
                <q-select  :dense="true" v-model="ageModel" :options="ageOptions" :label="$t('age')" />
              </div>
              <div class="col-md-1 col-sm-12 col-xs-12" style="margin-top:1%;">
              </div>
              <div class="col-md-2 col-sm-3 col-xs-12" style="margin-top:1%;">
                <q-select  :dense="true" v-model="genderModel" :options="genderOptions" :label="$t('genre')"/>
              </div>
              <div class="col-md-1 col-sm-12 col-xs-12" style="margin-top:1%;">
              </div>
              <div class="col-md-2 col-sm-3 col-xs-12" style="margin-top:1%;">
                <q-select
                  :dense="true"
                  v-model="natModel"
                  use-input
                  input-debounce="0"
                  :options="nat_options"
                  option-value="id"
                  @filter="filterFn"
                  option-label="name"
                  :label="$t('nat')"
                >
                <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>
              </div>
              <div class="col-md-1 col-sm-12 col-gt-xs" style="margin-top:1%;">
              </div>
              <div class="col-md-2 col-sm-3 col-xs-12" style="margin-top:1%;">
                <q-select
                  :dense="true"
                  v-model="lanModel"
                  :options="lanOptions"
                  option-value="id"
                  option-label="name"
                  :label="$t('language')"
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
              <div class="col-md-4 col-sm-4 col-xs-12 q-ma-sm">
                <q-select
                  v-model="eduLevelModel"
                  :options="eduLevelOptions"
                  option-value="id"
                  option-label="name"
                  :label="$t('education_level')"
                />
              </div>
              <div class="col-md-1 col-sm-1 col-gt-xs">
              </div>
              <div class="col-md-4 col-sm-4 col-xs-12 q-ma-sm">
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

              <div class="col-md-4 col-sm-4 col-xs-12 q-ma-sm">
                <q-select
                  v-model="emplTypeModel"
                  :options="emplTypeOptions"
                  option-value="id"
                  option-label="name"
                  :label="$t('employmentType')"
                />
              </div>
              <div class="col-md-1 col-sm-1 col-gt-xs">
                </div>

              <div class="col-md-2 col-sm-3 col-xs-12 q-ma-sm">
                <q-select
                  v-model="jobFieldModel"
                  :options="jobFieldOptions"
                  option-value="id"
                  option-label="name"
                  :label="$t('jobField')"
                />
              </div>
              <div class="col-md-1 col-sm-1 col-gt-xs">
                </div>
              <div class="col-md-3 col-sm-4 col-xs-12 q-ma-sm">
                <q-select v-model="jobExpYearModel" :options="jobExpYearOptions" :label="$t('yearsofEx')" />
              </div>

        </div>

        <div class="row q-mt-lg">


          <div class="col-md-4 col-sm-4 col-xs-12 q-ma-sm">
              <q-select v-model="workHoursPriorTestModel" :options="workHoursOptions" :label="$t('workingHours')" />
          </div>


         <div class="col-1 col-md-1 col-sm-1 col-gt-xs">
         </div>

              <div class="col-md-3 col-sm-3 col-xs-12 q-ma-sm">
                <q-select
                  v-model="hobbyModel"
                  multiple
                  :options="hobbyOptions"
                  option-value="id"
                  option-label="name"
                  :hint="$t('one_or_more')"
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

          <div class="col-md-3 col-sm-3 col-xs-12 q-ma-md">
              <q-select v-model="computerScienceknowledgeModel" :options="zero_to_five" :label="$t('computerScienceSkill')" />
              </div>


              <div class="col-md-3 col-sm-3 col-xs-12 q-ma-md">
              <q-select v-model="timeModel" :options="zero_to_five" :label="$t('timespentonInternet')" />
              </div>



                <div class="col-md-4 col-sm-4 col-xs-12 q-ma-md">
                <q-select v-model="selfConfidenceModel" :options="zero_to_five" :label="$t('selfConfidence')" />
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
                  :label="$t('antiphishing_course_ever')"
                  v-model="antiPhisCourseEverModel"
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
            <div class="row q-mt-lg" v-if="antiPhisCourseEverModel">
              <div class="col-auto">
                <q-toggle
                  :label="$t('anti_phishing_course')"
                  v-model="antiPhisCourseModel"
                  v-if="antiPhisCourseEverModel"
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
                <q-card class="my-card bg-white-9" flat bordered style="margin-bottom:4%;">
                    <q-card-section>
                        <div class="text-h5 text-black">
                          {{$t('impulsivity')}}

                    <q-btn
                      color="yellow-9"
                      round
                      flat
                      dense
                      :icon="expanded ? 'keyboard_arrow_up' : 'help'"
                      @click="expanded = !expanded"
                    />
                        </div>

                    </q-card-section>
                    <q-separator inset />

                    <q-slide-transition>
                      <div v-show="expanded">
                      <q-separator />
                      <q-card-section class="text-subitle2">
                            {{$t('impulsivityString')}}
                      </q-card-section>
                    </div>
                  </q-slide-transition>


                    <q-card-section>

                          <q-slider class="q-mt-md"
                            v-model="impulsivityModel"
                            label-always
                            dense
                            label-text-color="white"
                            :step="1"
                            color="yellow-9"
                            :min="0"
                            :max="5"
                            />
                            <p class="q-mt-sm text-caption text-grey" > {{$t('value5')}}</p>
                    </q-card-section>
                </q-card>


              </div>

              <div class="col-1 col-md-1 col-sm-12 col-xs-12 q-mt-md">
              </div>

              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-blue-10" style="margin-bottom:4%;">
                    <q-card-section>
                      <div class="text-h6 text-white">
                        {{$t('curiosity')}}
                      </div>
                      </q-card-section>
                      <q-separator dark inset />
                      <q-card-section>
                      <div class="text-h8 bg-blue-10 text-white">
                        {{$t('curiosityString')}}
                      </div>
                      <q-slider class="q-mt-xl"
                  v-model="curiosityModel"
                  label-always
                  label-text-color="black"
                  :step="1"
                  color="white"
                  :min="0"
                  :max="5"
                  />
                  <p style="color: white;font-size:75%;"> {{$t('value5')}}</p>
                    </q-card-section>
                </q-card>


              </div>

              </div>

              <div class="row q-mt-lg">
              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-orange-10" style="margin-bottom:4%;">
                    <q-card-section>
                        <div class="text-h6 text-white">
                           {{$t('risk_prop')}}  {{ riskPropensityModel }}
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
                <p style="color: grey;"> {{$t('value5')}}</p>
              </div>

              <div class="col-1 col-md-1 col-sm-12 col-xs-12 q-mt-md">
              </div>

              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-red-10" style="margin-bottom:4%;">
                    <q-card-section>
                      <div class="text-h6 text-white">
                        {{$t('risk_perc')}}  {{ riskPerceptionModel }}
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
                <p style="color: grey;"> {{$t('value5')}}</p>
              </div>

              </div>

              <div class="row q-mt-lg">
                <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-green-9" style="margin-bottom:4%;">
                    <q-card-section>
                        <div class="text-h6 text-white">
                          {{$t('privacy_data')}} {{ privacyDataModel }}
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
                <p style="color: grey;"> {{$t('value5')}}</p>
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
                        {{$t('openness')}}  {{ opennessModel }}
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
                <p style="color: grey;"> {{$t('value5')}}</p>
              </div>




              <div class="col-1 col-md-1 col-sm-12 col-xs-12 q-mt-md">
              </div>

              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-blue-10" style="margin-bottom:4%;">
                    <q-card-section>
                      <div class="text-h6 text-white">
                        {{$t('extrav')}}  {{ extraversionModel }}
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
                <p style="color: grey;"> {{$t('value5')}}</p>
              </div>

              </div>

              <div class="row q-mt-lg">
              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-orange-10" style="margin-bottom:4%;">
                    <q-card-section>
                        <div class="text-h6 text-white">
                          {{$t('agreableness')}}  {{ agreeablenessModel }}
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
                <p style="color: grey;"> {{$t('value5')}}</p>
              </div>

              <div class="col-1 col-md-1 col-sm-12 col-xs-12 q-mt-md">
              </div>

              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-red-10" style="margin-bottom:4%;">
                    <q-card-section>
                      <div class="text-h6 text-white">
                        {{$t('conscientiousness')}}  {{ conscientiousnessModel }}
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
                <p style="color: grey;"> {{$t('value5')}}</p>
              </div>

              </div>



              <div class="row q-mt-lg">
              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-yellow-10" style="margin-bottom:4%;">
                    <q-card-section>
                      <div class="text-h6 text-white">
                        {{$t('emot_stability')}}  {{ emotionalStabilityModel }}
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
                <p style="color: grey;"> {{$t('value5')}}</p>
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
                          {{$t('scarcity')}}  {{ scarcityModel }}
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
                <p style="color: grey;"> {{$t('value5')}}</p>
              </div>

              <div class="col-1 col-md-1 col-sm-12 col-xs-12 q-mt-md">
              </div>

              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-green-10" style="margin-bottom:4%;">
                    <q-card-section>
                      <div class="text-h6 text-white">
                        {{$t('consistency')}}  {{ consistencyModel }}
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
                <p style="color: grey;"> {{$t('value5')}}</p>
              </div>

              </div>

              <div class="row q-mt-lg">
              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-orange-10" style="margin-bottom:4%;">
                    <q-card-section>
                        <div class="text-h6 text-white">
                          {{$t('social_proof')}}   {{ socialProofModel }}
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
                <p style="color: grey;"> {{$t('value5')}}</p>
              </div>

              <div class="col-1 col-md-1 col-sm-12 col-xs-12 q-mt-md">
              </div>

              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-red-10" style="margin-bottom:4%;">
                    <q-card-section>
                      <div class="text-h6 text-white">
                        {{$t('gratitude')}}  {{ gratitudeModel }}
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
                <p style="color: grey;"> {{$t('value5')}}</p>
              </div>

            <div class="row q-mt-lg">
              <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
                <q-card class="my-card bg-blue-10" style="margin-bottom:4%;">
                    <q-card-section>
                      <div class="text-h6 text-white">
                       {{$t('authority')}}  {{ authorityModel }}
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
                <p style="color: grey;"> {{$t('value5')}}</p>
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
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup () {
    const $q = useQuasar()
    const { locale } = useI18n({ useScope: 'global' })
    const expanded = ref(false)
    const store = useStore()
    const step = ref(1)
    const ageModel = ref(null)
    const ageOptions = reactive(Array.from({length: 89}, (_, i) => i + 12))
    const workHoursOptions = reactive(Array.from({length:11},(_, i) => i))
    const zero_to_five = reactive(Array.from({length:6},(_, i) => i))
    const zero_to_15 = reactive(Array.from({length:16},(_, i) => i))
    const genderModel = ref(null)
    let genderOptions = ref(null)
     if (locale.value == "en-US"){
      genderOptions = reactive(['Female', 'Male', 'Other'])


    }else if (locale.value == "it"){
       genderOptions = reactive(['Donna', 'Uomo', 'Altro'])
    }
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
    const jobExpYearModel = ref(null)
    const jobExpYearOptions = reactive(Array.from(Array(41).keys()))
    const natModel = ref(null)
    const natOptions = reactive(
      [
        'Afghan',
'Åland Island',
'Albanian',
'Algerian',
'American',
'American Samoan',
'Andorran',
'Angolan',
'Anguillan',
'Antarctic',
'Antiguan or Barbudan',
'Argentine',
'Armenian',
'Aruban',
'Australian',
'Austrian',
'Azero',
'Bahamian',
'Bahraini',
'Bangladeshi',
'Barbadian',
'Barthélemois',
'Basotho',
'Belarusian',
'Belgian',
'Belizean',
'Beninois',
'Bermudan',
'Bhutanese',
'BIOT',
'Bissau-Guinean',
'Bolivian',
'Bonaire',
'Bosnian or Herzegovinian',
'Bouvet Island',
'Brazilian',
'British',
'British Virgin Island',
'Bruneian',
'Bulgarian',
'Burkinabé',
'Burmese',
'Burundian',
'Cabo Verdean',
'Cambodian',
'Cameroonian',
'Canadian',
'Caymanian',
'Central African',
'Chadian',
'Channel Island',
'Channel Island',
'Chilean',
'Chinese',
'Taiwanese',
'Christmas Island',
'Cocos Island',
'Colombian',
'Comorian',
'Congolese',
'Congolese',
'Cook Island',
'Costa Rican',
'Croatian',
'Cuban',
'Curaçaoan',
'Cypriot',
'Czech',
'Danish',
'Djiboutian',
'Dominican',
'Dominican',
'Netherlandic',
'Ecuadorian',
'Egyptian',
'Emirian',
'Equatoguinean',
'Eritrean',
'Estonian',
'Ethiopian',
'Falkland Island',
'Faroese',
'Fijian',
'Finnish',
'French',
'French Guianese',
'French Polynesian',
'French Southern Territories',
'Gabonese',
'Gambian',
'Georgian',
'German',
'Ghanaian',
'Gibraltar',
'Greek',
'Greenlandic',
'Grenadian',
'Guadeloupe',
'Guamanian',
'Guatemalan',
'Guinean',
'Guyanese',
'Haitian',
'Heard Island or McDonald Islands',
'Honduran',
'Hong Kongese',
'Hungarian',
'Icelandic',
'I-Kiribati',
'Indian',
'Indonesian',
'Iranian',
'Iraqi',
'Irish',
'Israeli',
'Italian',
'Ivorian',
'Jamaican',
'Japanese',
'Jordanian',
'Kazakh',
'Kenyan',
'Kittitian or Nevisian',
'Kuwaiti',
'Kirghiz',
'Laotian',
'Latvian',
'Lebanese',
'Liberian',
'Libyan',
'Liechtenstein',
'Lithuanian',
'Luxembourgish',
'Chinese',
'Macedonian',
'Mahoran',
'Malagasy',
'Malawian',
'Malaysian',
'Maldivian',
'Malian',
'Maltese',
'Manx',
'Marshallese',
'Martinican',
'Mauritanian',
'Mauritian',
'Mexican',
'Micronesian',
'Moldovan',
'Monégasque',
'Mongolian',
'Montenegrin',
'Montserratian',
'Moroccan',
'Botswanan',
'Mozambican',
'Namibian',
'Nauruan',
'Nepalese',
'New Caledonian',
'New Zealand',
'Nicaraguan',
'Nigerian',
'Nigerien',
'Niuean',
'Vanuatuan',
'Norfolk Island',
'North Korean',
'Northern Marianan',
'Norwegian',
'Omani',
'Pakistani',
'Palauan',
'Palestinian',
'Panamanian',
'Papua New Guinean',
'Paraguayan',
'Peruvian',
'Filipino',
'Pitcairn Island',
'Polish',
'Portuguese',
'Puerto Rican',
'Qatari',
'Réunionnais',
'Romanian',
'Russian',
'Rwandan',
'Sahrawian',
'Saint Helenian',
'Saint Lucian',
'Saint Vincentian',
'Saint-Martinoise',
'Saint-Pierrais',
'Sammarinese',
'Samoan',
'São Toméan',
'Saudi',
'Senegalese',
'Serbian',
'Seychellois',
'Sierra Leonean',
'Singaporean',
'Sint Maarten',
'Slovak',
'Slovenian',
'Solomon Island',
'Somali',
'South African',
'South Georgia',
'South Korean',
'South Sudanese',
'Spanish',
'Sri Lankan',
'Sudanese',
'Surinamese',
'Svalbard',
'Swazi',
'Swedish',
'Swiss',
'Syrian',
'Tajikistani',
'Tanzanian',
'Thai',
'Timorese',
'Togolese',
'Tokelauan',
'Tongan',
'Trinidadian',
'Tunisian',
'Turkish',
'Turkmen',
'Turks and Caicos Island',
'Tuvaluan',
'U.S. Virgin Island',
'Ugandan',
'Ukrainian',
'Uruguayan',
'Uzbek',
'Vatican',
'Venezuelan',
'Vietnamese',
'Wallisian or Futunan',
'Yemeni',
'Zambian',
'Zimbabwean',
'Other'
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
        'Japanese',
        'Portughese',
        'Espanol',
        'Other'
      ]
    )

    const computerScienceknowledgeModel = ref(null)
    const antiPhisCourseModel = ref(false)
    const antiPhisCourseEverModel = ref(false)
    const victimModel = ref(false)
    const timeModel = ref(null)
    const selfConfidenceModel = ref(null)
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
    const workHoursPriorTestModel = ref(null)

    const form = reactive({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    })
    const persistent = ref(true)
    const nat_options = ref(null)
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
      await store.dispatch('userCharacteristic/get_edu_field',locale.value)
      await store.dispatch('userCharacteristic/get_edu_level',locale.value)
      await store.dispatch('userCharacteristic/get_job_field',locale.value)
      await store.dispatch('userCharacteristic/get_empl_type',locale.value)
      await store.dispatch('userCharacteristic/get_hobby',locale.value)
    }
    const userRegister = async () => {

      if(ageModel.value == null || !genderModel.value || !eduLevelModel.value
          || !eduFieldModel.value || !jobFieldModel.value
          || !emplTypeModel.value || jobExpYearModel.value == null || !hobbyModel.value
          || !natModel.value || !lanModel.value){


      if (locale.value == "en-US"){

        $q.notify({
          type: 'negative',
          message: "Enter all required fields!"
        })
      }else if(locale.value == "it"){
        $q.notify({
          type: 'negative',
          message: "Compilare tutti i campi obbligatori!"
        })
      }
      }else{

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
            antiPhishing_course_ever: antiPhisCourseEverModel.value,
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
          ////console.log("dispatch con SUCCESSO")
          router.push({name : 'infoBeforeStart'})
        })
      }
    }

    return {
      ageModel,
      ageOptions,
      workHoursOptions,
      nat_options,
      filterFn (val, update) {
        if (val === '') {
          update(() => {
            nat_options.value = natOptions

            // here you have access to "ref" which
            // is the Vue reference of the QSelect
          })
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          nat_options.value = natOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      },
      expanded,
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
      antiPhisCourseEverModel,
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
      zero_to_five,
      zero_to_15,
      startRegister,
      userRegister,
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
