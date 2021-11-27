<template>
<q-layout>
<q-page-container>
<q-page>
  <div class="row">
    <q-toolbar inset class ="shadow-2 bg-blue-10 text-white ">

        <q-toolbar-title class="q-ml-sm">{{$t('registerPage')}}</q-toolbar-title>


      <q-space />

      <q-btn class="gt-sm" flat round dense icon="kayaking" />
      <q-btn class="gt-sm" flat round dense icon="password" />
      <q-btn class="gt-sm" flat round dense icon="attach_email" />
      <q-btn class="gt-sm" flat round dense icon="sentiment_satisfied_alt" />

    </q-toolbar>
  </div>

  <!-- ALERT -->
  <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
    <q-card class="bg-white-10 text-primary text-center text-justify " style="width: 200%">
      <q-card-section>
        <div class="text-h6 q-ml-sm">{{$t('alertNotice')}}</div>
      </q-card-section>

      <q-card-section class="q-mr-md q-ml-sm">
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
    @before-transition="checkEmptyFields"
    color="primary"
    animated
    class="no-shadow"
  >

  <q-step
    :name="1"
    :title="$t('basicInfo')"
    :error="testEmpty1"
    icon="none"

    :done="step > 1"
  >

  <p style="color: grey;"> {{$t('basicInfoSub')}}</p>


  <q-space></q-space>
  <div class="row">
        <div class="col-md-2 col-sm-3 col-xs-12" style="margin-top:1%;">
          <q-select  :dense="true" v-model="ageModel" :options="ageOptions" :label="$t('age')" lazy-rules="ondemand" :rules="[val => !!val || 'Field is required']" />
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
            :options="languages"
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
    :error="testEmpty2"
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
    :error="testEmpty3"
    icon="work"
    :done="step > 3"

  >

<p style="color: grey;"> {{$t('workSub')}}</p>

  <div class="row">

        <div class="col-md-3 col-sm-3 col-xs-12 q-ma-sm">
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

        <div class="col-md-3 col-sm-3 col-xs-12 q-ma-sm">
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


    <div class="col-md-3 col-sm-3 col-xs-12 q-ma-sm">

        <div style="overflow-wrap:break-word;" color="yellow-9" >
          {{$t('workingHours')}}
        </div>
        <q-slider class="q-mt-lg"
          color="yellow-9"
          v-model="workHoursPriorTestModel"
          label-always
          :min="0"
          :max="10"
        />
        <p class="text-caption text-grey" > {{$t('value10')}}</p>
    </div>


    <div class="col-1 col-md-1 col-sm-1 col-gt-xs">
    </div>

        <div class="col-md-3 col-sm-3 col-xs-12 q-ma-sm">
          <q-select
            behaviour="menu"
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
  :error="testEmpty4"
  icon="public"
  :done="step > 4"

>




  <div class="row q-mt-lg">

    <div class="col-md-3 col-sm-3 col-xs-12 q-mr-sm">

        <div color="blue-9" >
          {{$t('computerScienceSkill')}}
        </div>
        <q-slider class="q-mt-lg"
          color="yellow-9"
          v-model="computerScienceknowledgeModel"
          label-always
          :min="0"
          :max="5"
        />
        <p class="text-caption text-grey" > {{$t('value5')}}</p>
        </div>



      <div class="col-md-1 col-sm-1 q-ma-sm"></div>

        <div class="col-md-3 col-sm-3 col-xs-12 q-ma-sm">

        <div style="overflow-wrap:break-word;" color="green-9" >
          {{$t('timespentonInternet')}}
        </div>
        <q-slider class="q-mt-lg"
          color="yellow-9"
          v-model="timeModel"
          label-always
          :min="0"
          :max="10"
        />
        <p class="text-caption text-grey" > {{$t('value10')}}</p>

        </div>

        <div class="col-md-1 col-sm-1 q-ma-sm"></div>

          <div class="col-md-3 col-sm-3 col-xs-12 q-ma-sm">

        <div style="overflow-wrap:break-word;" color="text-orange-9" >
          {{$t('selfConfidence')}}
        </div>
        <q-slider class="q-mt-lg"
          color="yellow-9"
          v-model="selfConfidenceModel"
          label-always
          :min="0"
          :max="5"
        />
        <p class="text-caption text-grey" > {{$t('value5')}}</p>

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

  <div class="row ">

        <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
          <q-card class="bg-white-9" bordered flat style="margin-bottom:2%;">
              <q-card-section>
                  <div class="text-h6 text-black" style="margin-top:-2%;">
                    {{$t('impulsivity')}}

              <q-btn
                color="yellow-9"
                round
                flat
                dense
                :icon="expanded1 ? 'keyboard_arrow_up' : 'help'"
                @click="expanded1 = !expanded1"
              />
                  </div>
              <p style="color: grey;font-size:90%;"> {{$t('impulsivityString1')}}</p>
              </q-card-section>
              <q-separator inset style="margin-top:-3%;"/>


              <q-slide-transition>
                <div v-show="expanded1">

                <q-card-section  class="text-subitle2">
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
                      <p class="text-caption text-grey" > {{$t('value5')}}</p>
              </q-card-section>
          </q-card>


        </div>

        <div class="col-1 col-md-1 col-sm-12 col-xs-12 q-mt-md">
        </div>


        <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
          <q-card class="bg-white-9" flat bordered style="margin-bottom:4%;">
              <q-card-section>
                  <div class="text-h6 text-black" style="margin-top:-2%;">
                    {{$t('curiosity')}}

              <q-btn
                color="blue-10"
                round
                flat
                dense
                :icon="expanded2 ? 'keyboard_arrow_up' : 'help'"
                @click="expanded2 = !expanded2"
              />
                  </div>

              <p style="color: grey;font-size:90%;"> {{$t('curiosityString1')}}</p>
              </q-card-section>
              <q-separator inset style="margin-top:-3%;" />

              <q-slide-transition>
                <div v-show="expanded2">

                <q-card-section class="text-subitle2">
                      {{$t('curiosityString')}}
                </q-card-section>
              </div>
            </q-slide-transition>


              <q-card-section>
                    <q-slider class="q-mt-md"
                      v-model="curiosityModel"
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="blue-10"
                      :min="0"
                      :max="5"
                      />
                      <p class="q-mt-sm text-caption text-grey" > {{$t('value5')}}</p>
              </q-card-section>
          </q-card>


        </div>



        </div>
      <div class="row">

        <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
          <q-card class="bg-white-9" flat bordered style="margin-bottom:4%;">
              <q-card-section>
                  <div class="text-h6 text-black" style="margin-top:-2%;">
                    {{$t('risk_prop')}}

              <q-btn
                color="orange-10"
                round
                flat
                dense
                :icon="expanded3 ? 'keyboard_arrow_up' : 'help'"
                @click="expanded3 = !expanded3"
              />
                  </div>
              <p style="color: grey;font-size:90%;"> {{$t('risk_propensityString1')}}</p>
              </q-card-section>
              <q-separator inset style="margin-top:-3%;"/>

              <q-slide-transition>
                <div v-show="expanded3">

                <q-card-section class="text-subitle2">
                      {{$t('risk_propensityString')}}
                </q-card-section>
              </div>
            </q-slide-transition>


              <q-card-section>
                    <q-slider class="q-mt-md"
                      v-model="riskPropensityModel"
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="orange-10"
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
          <q-card class="bg-white-9" flat bordered style="margin-bottom:4%;">
              <q-card-section>
                  <div class="text-h6 text-black" style="margin-top:-2%;">
                    {{$t('risk_perc')}}

              <q-btn
                color="red-10"
                round
                flat
                dense
                :icon="expanded4 ? 'keyboard_arrow_up' : 'help'"
                @click="expanded4 = !expanded4"
              />
                  </div>
              <p style="color: grey;font-size:90%;"> {{$t('risk_perceptionString1')}}</p>
              </q-card-section>
              <q-separator inset style="margin-top:-3%;" />

              <q-slide-transition>
                <div v-show="expanded4">

                <q-card-section class="text-subitle2">
                      {{$t('risk_perceptionString')}}
                </q-card-section>
              </div>
            </q-slide-transition>


              <q-card-section>
                    <q-slider class="q-mt-md"
                      v-model="riskPerceptionModel"
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="red-10"
                      :min="0"
                      :max="5"
                      />
                      <p class="q-mt-sm text-caption text-grey" > {{$t('value5')}}</p>
              </q-card-section>
          </q-card>
        </div>

        </div>



        <div class="row">

          <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
          <q-card class="bg-white-9" flat bordered style="margin-bottom:4%;">
              <q-card-section>
                  <div class="text-h6 text-black" style="margin-top:-2%;">
                    {{$t('privacy_data')}}

              <q-btn
                color="green-9"
                round
                flat
                dense
                :icon="expanded5 ? 'keyboard_arrow_up' : 'help'"
                @click="expanded5 = !expanded5"
              />
                  </div>
              <p style="color: grey;font-size:90%;"> {{$t('privacy_dataString1')}}</p>
              </q-card-section>
              <q-separator inset style="margin-top:-3%;" />

              <q-slide-transition>
                <div v-show="expanded5">

                <q-card-section class="text-subitle2">
                      {{$t('privacy_dataString')}}
                </q-card-section>
              </div>
            </q-slide-transition>


              <q-card-section>
                    <q-slider class="q-mt-md"
                      v-model="privacyDataModel"
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="green-9"
                      :min="0"
                      :max="5"
                      />
                      <p class="q-mt-sm text-caption text-grey" > {{$t('value5')}}</p>
              </q-card-section>
          </q-card>
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
          <q-card class="bg-white-9" flat bordered style="margin-bottom:4%;">
              <q-card-section>
                  <div class="text-h6 text-black" style="margin-top:-2%;">
                    {{$t('openness')}}

              <q-btn
                color="green-10"
                round
                flat
                dense
                :icon="expanded6 ? 'keyboard_arrow_up' : 'help'"
                @click="expanded6= !expanded6"
              />
                  </div>
                <p style="color: grey;font-size:90%;"> {{$t('opennessString1')}}</p>
              </q-card-section>
              <q-separator inset style="margin-top:-3%;"/>

              <q-slide-transition>
                <div v-show="expanded6">

                <q-card-section class="text-subitle2">
                      {{$t('opennessString')}}
                </q-card-section>
              </div>
            </q-slide-transition>


              <q-card-section>
                    <q-slider class="q-mt-md"
                      v-model="opennessModel"
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="green-10"
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
          <q-card class="bg-white-9" flat bordered style="margin-bottom:4%;">
              <q-card-section>
                  <div class="text-h6 text-black" style="margin-top:-2%;">
                    {{$t('extrav')}}

              <q-btn
                color="blue-10"
                round
                flat
                dense
                :icon="expanded7 ? 'keyboard_arrow_up' : 'help'"
                @click="expanded7 = !expanded7"
              />
                  </div>
              <p style="color: grey;font-size:90%;"> {{$t('extraversionString1')}}</p>
              </q-card-section>
              <q-separator inset style="margin-top:-3%;"/>

              <q-slide-transition>
                <div v-show="expanded7">

                <q-card-section class="text-subitle2">
                      {{$t('extraversionString')}}
                </q-card-section>
              </div>
            </q-slide-transition>


              <q-card-section>
                    <q-slider class="q-mt-md"
                      v-model="extraversionModel"
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="blue-10"
                      :min="0"
                      :max="5"
                      />
                      <p class="q-mt-sm text-caption text-grey" > {{$t('value5')}}</p>
              </q-card-section>
          </q-card>
        </div>


        </div>


        <div class="row q-mt-lg">

        <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
          <q-card class=" bg-white-9" flat bordered style="margin-bottom:4%;">
              <q-card-section>
                  <div class="text-h6 text-black" style="margin-top:-2%;">
                    {{$t('agreableness')}}

              <q-btn
                color="orange-10"
                round
                flat
                dense
                :icon="expanded8 ? 'keyboard_arrow_up' : 'help'"
                @click="expanded8 = !expanded8"
              />
                  </div>
                <p style="color: grey;font-size:90%;"> {{$t('agreeablenessString1')}}</p>
                </q-card-section>
              <q-separator inset style="margin-top:-3%;"/>

              <q-slide-transition>
                <div v-show="expanded8">

                <q-card-section class="text-subitle2">
                      {{$t('agreeablenessString')}}
                </q-card-section>
              </div>
            </q-slide-transition>


              <q-card-section>
                    <q-slider class="q-mt-md"
                      v-model="agreeablenessModel"
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="orange-10"
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
          <q-card class="bg-white-9" flat bordered style="margin-bottom:4%;">
              <q-card-section>
                  <div class="text-h6 text-black" style="margin-top:-2%;">
                    {{$t('conscientiousness')}}

              <q-btn
                color="red-10"
                round
                flat
                dense
                :icon="expanded9 ? 'keyboard_arrow_up' : 'help'"
                @click="expanded9 = !expanded9"
              />
                  </div>
              <p style="color: grey;font-size:90%;"> {{$t('conscientiousnessString1')}}</p>
              </q-card-section>
              <q-separator inset style="margin-top:-3%;"/>

              <q-slide-transition>
                <div v-show="expanded9">

                <q-card-section class="text-subitle2">
                      {{$t('conscientiousnessString')}}
                </q-card-section>
              </div>
            </q-slide-transition>


              <q-card-section>
                    <q-slider class="q-mt-md"
                      v-model="conscientiousnessModel"
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="red-10"
                      :min="0"
                      :max="5"
                      />
                      <p class="q-mt-sm text-caption text-grey" > {{$t('value5')}}</p>
              </q-card-section>
          </q-card>
        </div>


        </div>



        <div class="row q-mt-lg">

        <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
          <q-card class=" bg-white-9" flat bordered style="margin-bottom:4%;">
              <q-card-section>
                  <div class="text-h6 text-black" style="margin-top:-2%;">
                    {{$t('emot_stability')}}

              <q-btn
                color="yellow-10"
                round
                flat
                dense
                :icon="expanded10 ? 'keyboard_arrow_up' : 'help'"
                @click="expanded10 = !expanded10"
              />
                  </div>
              <p style="color: grey;font-size:90%;"> {{$t('emotional_stabilityString1')}}</p>
              </q-card-section>
              <q-separator inset style="margin-top:-3%;"/>

              <q-slide-transition>
                <div v-show="expanded10">

                <q-card-section class="text-subitle2">
                      {{$t('emotional_stabilityString')}}
                </q-card-section>
              </div>
            </q-slide-transition>


              <q-card-section>
                    <q-slider class="q-mt-md"
                      v-model="emotionalStabilityModel"
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="yellow-10"
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
          <q-card class="bg-white-9" flat bordered style="margin-bottom:4%;">
              <q-card-section>
                  <div class="text-h6 text-black" style="margin-top:-2%;">
                    {{$t('validity')}}
                  </div>
              <p style="color: grey;font-size:90%;"> {{$t('test_validity_substring')}}</p>
              </q-card-section>
              <q-separator inset style="margin-top:-3%;"/>

              <q-card-section>
                    <q-slider class="q-mt-md"
                      v-model="test_validModel"
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="black-10"
                      :min="0"
                      :max="5"
                      />
                      <p class="q-mt-sm text-caption text-grey" > {{$t('value5')}}</p>
              </q-card-section>
          </q-card>
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
          <q-card class=" bg-white-9" flat bordered style="margin-bottom:4%;">
              <q-card-section>
                  <div class="text-h6 text-black" style="margin-top:-2%;">
                    {{$t('scarcity')}}

              <q-btn
                color="yellow-9"
                round
                flat
                dense
                :icon="expanded11 ? 'keyboard_arrow_up' : 'help'"
                @click="expanded11 = !expanded11"
              />
                  </div>
              <p style="color: grey;font-size:90%;"> {{$t('scarcityString1')}}</p>
              </q-card-section>
              <q-separator inset style="margin-top:-3%;"/>

              <q-slide-transition>
                <div v-show="expanded11">

                <q-card-section class="text-subitle2">
                      {{$t('scarcityString')}}
                </q-card-section>
              </div>
            </q-slide-transition>


              <q-card-section>
                    <q-slider class="q-mt-md"
                      v-model="scarcityModel"
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
          <q-card class=" bg-white-9" flat bordered style="margin-bottom:4%;">
              <q-card-section>
                  <div class="text-h6 text-black">
                    {{$t('consistency')}}

              <q-btn
                color="green-10"
                round
                flat
                dense
                :icon="expanded12 ? 'keyboard_arrow_up' : 'help'"
                @click="expanded12 = !expanded12"
              />
                  </div>
              <p style="color: grey;font-size:90%;"> {{$t('consistencyString1')}}</p>
              </q-card-section>
              <q-separator inset style="margin-top:-3%;"/>

              <q-slide-transition>
                <div v-show="expanded12">

                <q-card-section class="text-subitle2">
                      {{$t('consistencyString')}}
                </q-card-section>
              </div>
            </q-slide-transition>


              <q-card-section>
                    <q-slider class="q-mt-md"
                      v-model="consistencyModel"
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="green-10"
                      :min="0"
                      :max="5"
                      />
                      <p class="q-mt-sm text-caption text-grey" > {{$t('value5')}}</p>
              </q-card-section>
          </q-card>
        </div>



        </div>

        <div class="row q-mt-lg">
          <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
          <q-card class="bg-white-9" flat bordered style="margin-bottom:4%;">
              <q-card-section>
                  <div class="text-h6 text-black" style="margin-top:-2%;">
                    {{$t('social_proof')}}

              <q-btn
                color="orange-10"
                round
                flat
                dense
                :icon="expanded13 ? 'keyboard_arrow_up' : 'help'"
                @click="expanded13 = !expanded13"
              />
                  </div>
              <p style="color: grey;font-size:90%;"> {{$t('social_proofString1')}}</p>
              </q-card-section>
              <q-separator inset style="margin-top:-3%;"/>

              <q-slide-transition>
                <div v-show="expanded13">

                <q-card-section class="text-subitle2">
                      {{$t('social_proofString')}}
                </q-card-section>
              </div>
            </q-slide-transition>


              <q-card-section>
                    <q-slider class="q-mt-md"
                      v-model="socialProofModel"
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="orange-10"
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
          <q-card class="bg-white-9" flat bordered style="margin-bottom:4%;">
              <q-card-section>
                  <div class="text-h6 text-black" style="margin-top:-2%;">
                    {{$t('gratitude')}}

              <q-btn
                color="red-10"
                round
                flat
                dense
                :icon="expanded14 ? 'keyboard_arrow_up' : 'help'"
                @click="expanded14 = !expanded14"
              />
                  </div>
              <p style="color: grey;font-size:90%;"> {{$t('gratitudeString1')}}</p>
              </q-card-section>
              <q-separator inset style="margin-top:-3%;"/>

              <q-slide-transition>
                <div v-show="expanded14">

                <q-card-section class="text-subitle2">
                      {{$t('gratitudeString')}}
                </q-card-section>
              </div>
            </q-slide-transition>


              <q-card-section>
                    <q-slider class="q-mt-md"
                      v-model="gratitudeModel"
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="red-10"
                      :min="0"
                      :max="5"
                      />
                      <p class="q-mt-sm text-caption text-grey" > {{$t('value5')}}</p>
              </q-card-section>
          </q-card>
        </div>



      <div class="col-5 col-md-5 col-sm-12 col-xs-12 q-mt-md">
          <q-card class=" bg-white-9" flat bordered style="margin-bottom:4%;">
              <q-card-section>
                  <div class="text-h6 text-black" style="margin-top:-2%;">
                    {{$t('authority')}}

              <q-btn
                color="blue-10"
                round
                flat
                dense
                :icon="expanded15 ? 'keyboard_arrow_up' : 'help'"
                @click="expanded15 = !expanded15"
              />
                  </div>
              <p style="color: grey;font-size:90%;"> {{$t('authorityString1')}}</p>
              </q-card-section>
              <q-separator inset style="margin-top:-3%;"/>

              <q-slide-transition>
                <div v-show="expanded15">

                <q-card-section class="text-subitle2">
                      {{$t('authorityString')}}
                </q-card-section>
              </div>
            </q-slide-transition>


              <q-card-section>
                    <q-slider class="q-mt-md"
                      v-model="authorityModel"
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="blue-10"
                      :min="0"
                      :max="5"
                      />
                      <p class="q-mt-sm text-caption text-grey" > {{$t('value5')}}</p>
              </q-card-section>
          </q-card>
        </div>
      </div>




  <q-stepper-navigation>
    <vue-recaptcha sitekey="6LeyHeIcAAAAAC26XvvL_3dK-58AdRRTrQk_zPJl">
    <q-btn color="primary" @click="userRegister()" :label="$t('finish')" />
    </vue-recaptcha>
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


<script >
import { defineComponent, reactive, ref, computed, createApp } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import App from '../App.vue'
import { VueRecaptcha} from 'vue-recaptcha'



export default defineComponent({


setup () {

const $q = useQuasar()
const { locale } = useI18n({ useScope: 'global' })
const expanded1 = ref(false)
const expanded2 = ref(false)
const expanded3 = ref(false)
const expanded4 = ref(false)
const expanded5 = ref(false)
const expanded6 = ref(false)
const expanded7 = ref(false)
const expanded8 = ref(false)
const expanded9 = ref(false)
const expanded10 = ref(false)
const expanded11 = ref(false)
const expanded12 = ref(false)
const expanded13 = ref(false)
const expanded14 = ref(false)
const expanded15 = ref(false)
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

const natOptions = ref(null)

if (locale.value == "en-US"){
natOptions.value = reactive(['Afghan',
'Albanian',
'Algerian',
'Andorran',
'Angolan',
'Argentinian',
'Armenian',
'Australian',
'Austrian',
'Azerbaijani',
'Bahamian',
'Bahraini',
'Belgian',
'Bengali',
'Belarusian',
'Burmese',
'Bolivian',
'Bosnian',
'Brazilian',
'British',
'Bulgarian',
'Burkinabe',
'Burundi',
'Cambodian',
'Canadian',
'Cape Verdean',
'Czech',
'Central African',
'Chilean',
'Chinese',
'Sinhalese',
'Cypriot',
'Colombian',
'Costa Rican',
'Croatian',
'Cuban',
'Danish',
'Dominican',
'Ecuadorian',
'Egyptian',
'Emiratine',
'Eritrean',
'Estonian',
'Ethiopian',
'Fijian',
'Filipino',
'Finnish',
'French',
'Gabonese',
'Gambian',
'Georgian',
'Ghanaian',
'Jamaican',
'Japanese',
'Jordanian',
'Greek',
'Grenadine',
'Guatemalan',
'Guinean',
'Guyanese',
'Haitian',
'Honduran',
'Indiana',
'Indonesian',
'Iraqi',
'Iranian',
'Irish',
'Icelandic',
'Israeli',
'Italian',
'Ivorian',
'Kazka',
'Keniana',
'Kirghizia',
'Kosovara',
'Laotian',
'Latvian',
'Lebanese',
'Liberian',
'Libyan',
'Liechtensteiniana',
'Lithuanian',
'Luxembourgish',
'Macedonian',
'Malawian',
'Maldivian',
'Malaysian',
'Maltese',
'Moroccan',
'Marshallese',
'Mauritanian',
'Mauritian',
'Mexican',
'Micronesian',
'Moldavian',
'Mongolian',
'Montenegrin',
'Namibian',
'New Zealander',
'Nepalese',
'Nigerian',
'Nigerian',
'North Korean',
'Norwegian',
'Dutch',
'Omani',
'Pakistani',
'Palestinian',
'Panamanian',
'Papuan',
'Paraguayan',
'Peruvian',
'Polish',
'Portuguese',
'Romanian',
'Rwandan',
'Russian',
'Salvadoran',
'Samoan',
'San Marino',
'Saudi',
'Senegalese',
'Serbian',
'Sierraleonese',
'Singaporean',
'Syrian',
'Slovakian',
'Slovenian',
'Somali',
'Spanish',
'American',
'South African',
'Sudanese',
'South Korean',
'Swedish',
'Swiss',
'Thai',
'Taiwanese',
'Tanzanian',
'German',
'Tunisian',
'Turkish',
'Ukraine',
'Ugandan',
'Hungarian',
'Uruguayan',
'Vatican',
'Venezuelan',
'Vietnamese',
'Yemeni',
'Zambezian',
'Zimbabwese'
])

}else if (locale.value == "it"){
natOptions.value = reactive(["Afghana",
"Albanese",
"Algerina",
"Andorrana",
"Angolana",
"Argentina",
"Armena",
"Australiana",
"Austriaca",
"Azera",
"Bahamense",
"Bahreinita",
"Belga",
"Bengalese",
"Bielorussa",
"Birmana",
"Boliviana",
"Bosniaca",
"Brasiliana",
"Britannica",
"Bulgara",
"Burkinabé",
"Burundese",
"Cambogiana",
"Canadese",
"Capoverdiana",
"Ceca",
"Centrafricana",
"Cilena",
"Cinese",
"Cingalese",
"Cipriota",
"Colombiana",
"Costaricana",
"Croata",
"Cubana",
"Danese",
"Dominicana",
"Ecuadoregna",
"Egiziana",
"Emiratina",
"Eritrea",
"Estone",
"Etiope",
"Figiana",
"Filippina",
"Finlandese",
"Francese",
"Gabonese",
"Gambiana",
"Georgiana",
"Ghanese",
"Giamaicana",
"Giapponese",
"Giordana",
"Greca",
"Grenadina",
"Guatemalteca",
"Guineana",
"Guyanese",
"Haitiana",
"Honduregna",
"Indiana",
"Indonesiana",
"Irachena",
"Iraniana",
"Irlandese",
"Islandese",
"Israeliana",
"Italiana",
"Ivoriana",
"Kazka",
"Keniana",
"Kirgisa",
"Kosovara",
"Laotiana",
"Lettone",
"Libanese",
"Liberiana",
"Libica",
"Liechtensteiniana",
"Lituana",
"Lussemburghese",
"Macedone",
"Malawiana",
"Maldiviana",
"Malesiana",
"Maltese",
"Marocchina",
"Marshallese",
"Mauritana",
"Mauriziana",
"Messicana",
"Micronesiana",
"Moldava",
"Mongola",
"Montenegrina",
"Namibiana",
"Neozelandese",
"Nepalese",
"Nigeriana",
"Nigerina",
"Nordcoreana",
"Norvegese",
"Olandese",
"Omanita",
"Pachistana",
"Palestinese",
"Panamense",
"Papuana",
"Paraguaiana",
"Peruviana",
"Polacca",
"Portoghese",
"Romena",
"Ruandese",
"Russa",
"Salvadoregna",
"Samoana",
"Sanmarinese",
"Saudita",
"Senegalese",
"Serba",
"Sierraleonese",
"Singaporiana",
"Siriana",
"Slovacca",
"Slovena",
"Somala",
"Spagnola",
"Statunitense",
"Sudafricana",
"Sudanese",
"Sudcoreana",
"Svedese",
"Svizzera",
"Tailandese",
"Taiwanese",
"Tanzaniana",
"Tedesca",
"Tunisina",
"Turca",
"Ucraina",
"Ugandese",
"Ungherese",
"Uruguaiana",
"Vaticana",
"Venezuelana",
"Vietnamita",
"Yemenita",
"Zambese",
"Zimbabwese"
])
}



const lanModel = ref(null)
let languages = ref(null)

if (locale.value == "en-US"){
  languages = reactive (['Italian',
  'English',
  'German',
  'French',
  'Chinese',
  'American',
  'Arabic',
  'Japanese',
  'Portughese',
  'Espanol',
  'Other'])

}else if(locale.value == "it"){
  languages = reactive(
[
  'Italiano',
  'Inglese',
  'Tedesco',
  'Francese',
  'Cinese',
  'Americano',
  'Arabo',
  'Giapponese',
  'Portoghese',
  'Spagnolo',
  'Altro'
])
  }

const computerScienceknowledgeModel = ref(null)
const antiPhisCourseModel = ref(false)
const antiPhisCourseEverModel = ref(false)
const victimModel = ref(false)
const timeModel = ref(null)
const selfConfidenceModel = ref(null)
const impulsivityModel = ref(0)
const curiosityModel = ref(0)
const riskPropensityModel = ref(0)
const test_validModel = ref(0)
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
const testEmpty1 = ref(false)
const testEmpty2 = ref(false)
const testEmpty3 = ref(false)
const testEmpty4 = ref(false)
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

const checkEmptyFields = async() =>{

if(ageModel.value == null || !genderModel.value || !natModel.value || !lanModel.value ){
    testEmpty1.value = true
} else {
    testEmpty1.value = false
}
if(!eduLevelModel.value || !eduFieldModel.value){
  if (step.value > 2){
        testEmpty2.value = true
  }else{

  }

}else {
    testEmpty2.value = false
}
if(!emplTypeModel.value || !jobFieldModel.value || jobExpYearModel.value == null || workHoursPriorTestModel.value == null || !hobbyModel.value){
  if(step.value >3){
    testEmpty3.value=true
  }

}else{
  testEmpty3.value=false
}
if(computerScienceknowledgeModel.value== null || workHoursPriorTestModel.value == null
    || selfConfidenceModel.value == null){
      if(step.value > 4){
        testEmpty4.value=true
      }

}else{
  testEmpty4.value=false
}
}
const userRegister = async () => {

if(ageModel.value == null || !genderModel.value || !eduLevelModel.value
    || !eduFieldModel.value || !jobFieldModel.value
    || !emplTypeModel.value || jobExpYearModel.value == null || !hobbyModel.value
    || !natModel.value || !lanModel.value || timeModel.value == null || computerScienceknowledgeModel.value== null || workHoursPriorTestModel.value == null
    || selfConfidenceModel.value == null){


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
      test_valid: test_validModel.value,
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
test_validModel,
workHoursOptions,
nat_options,

filterFn (val, update) {
  if ( val == null) {
    update(() => {
      nat_options.value = natOptions

      // here you have access to "ref" which
      // is the Vue reference of the QSelect
    })
    return
  }

  update(() => {
    const needle = val.toLowerCase()
    nat_options.value = natOptions.value.filter(v => v.toLowerCase().indexOf(needle) > -1)
  })
},
components: { VueRecaptcha },
recaptcha,
expanded1,
expanded2,
expanded3,
expanded4,
expanded5,
expanded6,
expanded7,
expanded8,
expanded9,
expanded10,
expanded11,
expanded12,
expanded13,
expanded14,
expanded15,
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
checkEmptyFields,
languages,
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
testEmpty1,
testEmpty2,
testEmpty3,
testEmpty4,
persistent
}
}

})

</script>
