<template>
<q-layout view="lHh lpr fff" style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png'">

    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <div class="row">
     <q-toolbar
          class="text-white bg-blue-10 q-pa-xs"
          style="background-color: rgba(0, 72, 124,0.4)"
        >
        <div class="row">
          <q-toolbar-title class="q-ml-xl gt-xs q-mb-xs text-justify"
            >{{$t('registerPage')}}</q-toolbar-title
          >
          <q-toolbar-title class="q-ml-xs lt-sm q-mb-xs text-justify"
            >{{$t('registerPage')}}</q-toolbar-title
          >
        </div>

    </q-toolbar>
  </div>
  <q-tabs
          v-model="tab"
          dense
          class="text-white bg-blue-10"
          active-color="white"
          indicator-color="yellow"
          align="justify"
        >
          <q-tab name="mails"  style="pointer-events: none;" :label="$t('general')" />
          <q-tab name="alarms" style="pointer-events: none;" :label="$t('pers1')" />

        </q-tabs>
    </q-header>



<q-page-container  style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png'">
  <q-page  style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png'">



      <q-tab-panels v-model="tab" animated style="background-image: url('https://i.ibb.co/KXhNv0W/crossword.png'">
          <q-tab-panel name="mails">


      <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-8 col-xs-12">
                    <p style="font-weight: bold;" > {{$t('alertCard')}} </p>
                </div>
            </div>


      <div class="row q-mb-xs">
        <div class="col-lg-2"></div>
        <q-card class="col-lg-8 col-xs-12">
          <q-card-section class="text-blue-10" style="font-weight:bold;">
             {{$t('basicInfo')}}
          </q-card-section>
          <q-card-section class="row">
        <div class="col-md-3 col-sm-4 col-xs-12 q-mt-md">
          <q-select  outlined :dense="true" v-model="ageModel" :options="ageOptions" :label="$t('age')" />
        </div>
        <div class="col-md-1 col-sm-2">
        </div>
        <div class="col-md-3 col-sm-4 col-xs-12 q-mt-md">
          <q-select outlined  :dense="true" v-model="genderModel" :options="genderOptions" :label="$t('genre')"/>
        </div>
        <div class="col-md-1 col-sm-12 col-xs-12">
        </div>
        <div class="col-md-3 col-sm-4 col-xs-12 q-mt-md">
          <q-select
            :dense="true"
            v-model="natModel"
            outlined
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
  </q-card-section>
        </q-card>
</div>

<div class="row q-mt-xs q-mb-xs">
        <div class="col-lg-2"></div>
        <q-card class="col-lg-8 col-xs-12">
          <q-card-section class="text-blue-10" style="font-weight:bold;">
             {{$t('eduTitle')}}
          </q-card-section>
          <q-card-section  class="row">
        <div class="col-md-3 col-sm-4 col-xs-12 q-mt-md">
          <q-select
            :dense="true"
            outlined
            v-model="eduLevelModel"
            :options="eduLevelOptions"
            option-value="id"
            option-label="name"
            :label="$t('education_level')"
          />
        </div>
        <div class="col-md-1 col-sm-2">
        </div>
        <div class="col-md-3 col-sm-4 col-xs-12 q-mt-md">
          <q-select
            :dense="true"
            outlined
            v-model="eduFieldModel"
            :options="eduFieldOptions"
            option-value="id"
            option-label="name"
            :label="$t('eduField')"
          />
        </div>
          </q-card-section>
        </q-card>
</div>
    <div class="row q-mt-xs">
      <div class="col-lg-2"></div>
        <q-card class="col-lg-8 col-xs-12">
           <q-card-section class="text-blue-10" style="font-weight:bold;">
             {{$t('workInfo')}}
          </q-card-section>
          <q-card-section class="row">
              <div class="col-md-3 col-sm-4 col-xs-12 q-mt-md">
          <q-select
            :dense="true"
            outlined
            v-model="emplTypeModel"
            :options="emplTypeOptions"
            option-value="id"
            option-label="name"
            :label="$t('employmentType')"
          />
        </div>
        <div class="col-md-1 col-sm-2 col-gt-xs">
          </div>
        <div class="col-md-3 col-sm-4 col-xs-12 q-mt-md">
          <q-select
            :dense="true"
            outlined
            v-model="jobFieldModel"
            :options="jobFieldOptions"
            option-value="id"
            option-label="name"
            :label="$t('jobField')"
          />
        </div>
        <div class="col-md-1 col-sm-2 col-gt-xs">
          </div>
        <div class="col-md-3 col-sm-4 col-xs-12 q-mt-md">
          <q-select outlined :dense="true" v-model="jobExpYearModel" :options="jobExpYearOptions" :label="$t('yearsofEx')" />
        </div>

        <div class="col-md-1 col-sm-2 col-gt-xs">
          </div>

        <div class="col-md-3 col-sm-4 col-xs-12 q-mt-md lt-md">
          <q-select
            outlined
            :dense="true"
            behaviour="menu"
            v-model="hobbyModel"
            :options="hobbyOptions"
            option-value="id"
            option-label="name"
            :hint="$t('one_or_more')"
            counter
            after
            v-close-popup
            multiple
            :label="$t('mailboxUsage')"
          />
        </div>








          </q-card-section>


    <q-card-section class="row q-mt-xs q-mb-xs gt-sm">
        <div class="col-md-3 col-sm-4 col-xs-9">
          <q-select
            outlined
            :dense="true"
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
        <div class="col-md-1"></div>



          </q-card-section>
  </q-card>
</div>

    <div class="row q-mt-xs">
      <div class="col-lg-2"></div>
        <q-card class="col-lg-8">
            <q-card-section class="text-blue-10" style="font-weight:bold;">
             {{$t('skills')}}
          </q-card-section>
          <q-card-section>
            <div class="row ">

              <div class="col-md-5 col-sm-5 col-xs-12 q-mt-xs q-mb-xs">


                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                      {{$t('workingHours')}}
                  </q-card-section>
                  <q-card-section class="q-pb-none q-mb-none q-mt-md">
                    <q-slider
                     markers
                      v-model="workHoursPriorTestModel"
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="yellow-9"
                      :min="0"
                      :max="10"
                      />
                      <span class="text-caption text-grey" > {{$t('value10')}}</span>
              </q-card-section>
          </q-card>





    </div>

<div class="col-lg-1 col-md-1 col-sm-2"></div>
<div class="col-md-5 col-sm-5 col-xs-12 q-mt-xs q-mb-xs">


                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                      {{$t('computerScienceSkill')}}
                  </q-card-section>
                  <q-card-section class="q-pb-none q-mb-none  q-mt-md">
                    <q-slider
                     markers
                      v-model="computerScienceknowledgeModel"
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="blue-9"
                      :min="0"
                      :max="5"
                      />
                      <span class="text-caption text-grey" > {{$t('value5')}}</span>
              </q-card-section>
          </q-card>


    </div>



    <div class="col-md-5 col-sm-5 col-xs-12 q-mt-xs q-mb-xs">
                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none" >
                      {{$t('timespentonInternet')}}
                  </q-card-section>
                  <q-card-section class="q-pb-none q-mb-none  q-mt-md">
                    <q-slider
                     markers
                      v-model="timeModel"
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="red-10"
                      :min="0"
                      :max="10"
                      />
                      <span class="text-caption text-grey" > {{$t('value10')}}</span>
              </q-card-section>
          </q-card>


    </div>

    <div class="col-lg-1 col-md-1 col-sm-2"></div>

    <div class="col-md-5 col-sm-5 col-xs-12 q-mt-xs q-mb-xs">


                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                      {{$t('selfConfidence')}}
                  </q-card-section>
                  <q-card-section class="q-pb-none q-mb-none  q-mt-md">
                    <q-slider
                      markers
                      v-model="selfConfidenceModel"
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="orange-9"
                      :min="0"
                      :max="5"
                      />
                      <span class="text-caption text-grey" > {{$t('value5')}}</span>
              </q-card-section>
          </q-card>


    </div>

            </div>
</q-card-section>

        </q-card>
    </div>



    <div class="row q-mt-xs">
      <div class="col-lg-2"></div>
          <q-card class="col-lg-8 col-md-12 col-sm-12">
          <q-card-section class="text-blue-10" style="font-weight:bold;">
             {{$t('phishingAwareness')}}
          </q-card-section>

            <q-card-section class="row">
                <div class="col-auto">
          <q-toggle
            :label="$t('antiphishing_course_ever')"
            v-model="antiPhisCourseEverModel"
          />
        </div>
        <div class="col-auto"></div>

        <div class="col-auto">
          <q-toggle
            color="green"
            :label="$t('previous_victim')"
            v-model="victimModel"

          />
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
          </q-card-section>
          </q-card>
      </div>

      <div class="row q-mt-xs">
        <div class="col-lg-5 col-md-4 gt-sm"></div>
        <q-btn outline class="col-lg-2 col-md-4 q-mt-xs q-pl-lg q-pr-lg q-pt-xs gt-sm text-blue-10" @click="checkField1()" color="white" :label="$t('continue')"/>
        <div class="col-sm-6 col-xs-6"></div>
        <q-btn outline class="col-sm-6 col-xs-6 q-mt-xs q-pl-lg q-pr-lg q-pt-xs lt-md" @click="checkField1()" color="blue-10" :label="$t('continue')"/>
      </div>

          </q-tab-panel>

          <q-tab-panel name="alarms">

            <div class="row q-mb-xs">
        <div class="col-lg-2"></div>
        <q-card class="col-lg-8 col-xs-12">
          <q-card-section class="text-blue-10" style="font-weight:bold;">
             {{$t('pers_Characterization')}}<br>
            <span class="text-caption text-grey">{{$t('info_Characterization')}}</span>
          </q-card-section>
          <q-card-section>

      <div class="row q-mt-xs">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-xs ">
          <q-list  class="rounded-borders" dense>
                <q-expansion-item class="bg-white"
                  expand-icon-class="text-yellow-10"
                  expand-icon="help"
                  expanded-icon="keyboard_arrow_up"
                  :label="$t('impulsivity')"
                  :caption="$t('impulsivityString1')"
      >
                  <q-card>
                  <q-card-section>
                    {{$t('impulsivityString')}}
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                    <q-slider class="q-mt-md"
                      v-model="impulsivityModel"
                      markers
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="yellow-9"
                      :min="0"
                      :max="5"
                      />
                      <span class="q-mt-xs text-caption text-grey" > {{$t('value5')}}</span>
              </q-card-section>
          </q-card>
          </q-list>
        </div>




        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-xs">
            <q-list  class="rounded-borders" dense>
                <q-expansion-item class="bg-white"
                  expand-icon-class="text-green-10"
                  expand-icon="help"
                  expanded-icon="keyboard_arrow_up"
                  :label="$t('curiosity')"
                  :caption="$t('curiosityString1')"
      >
                  <q-card>
                  <q-card-section>
                     {{$t('curiosityString')}}
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                    <q-slider class="q-mt-md"
                      v-model="curiosityModel"
                      markers
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="green-10"
                      :min="0"
                      :max="5"
                      />
                      <span class="q-mt-xs text-caption text-grey" > {{$t('value5')}}</span>
              </q-card-section>
          </q-card>
          </q-list>
        </div>
          </div>


          <div class="row q-mt-xs q-mb-xs">

          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-xs">

              <q-list  class="rounded-borders" dense>
                <q-expansion-item class="bg-white"
                  expand-icon-class="text-orange-10"
                  expand-icon="help"
                  expanded-icon="keyboard_arrow_up"
                  :label="$t('risk_prop')"
                  :caption="$t('risk_propensityString1')"
      >
                  <q-card>
                  <q-card-section>
                    {{$t('risk_propensityString')}}
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                    <q-slider class="q-mt-md"
                      v-model="riskPropensityModel"
                      markers
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="orange-10"
                      :min="0"
                      :max="5"
                      />
                      <span class="q-mt-xs text-caption text-grey" > {{$t('value5')}}</span>
              </q-card-section>
          </q-card>
          </q-list>


        </div>



        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-xs">
            <q-list  class="rounded-borders" dense>
                <q-expansion-item class="bg-white"
                  expand-icon-class="text-red-10"
                  expand-icon="help"
                  expanded-icon="keyboard_arrow_up"
                  :label="$t('risk_perc')"
                  :caption="$t('risk_perceptionString1')"
      >
                  <q-card>
                  <q-card-section>
                    {{$t('risk_perceptionString')}}
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                    <q-slider class="q-mt-md"
                      v-model="riskPerceptionModel"
                      markers
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="red-10"
                      :min="0"
                      :max="5"
                      />
                      <span class="q-mt-xs text-caption text-grey" > {{$t('value5')}}</span>
              </q-card-section>
          </q-card>
          </q-list>
        </div>

        </div>

        <div class="row q-mt-xs">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-xs">

          <q-list  class="rounded-borders">
                <q-expansion-item class="bg-white"
                  expand-icon-class="text-blue-10"
                  expand-icon="help"
                  expanded-icon="keyboard_arrow_up"
                  :label="$t('privacy_data')"
                  :caption="$t('privacy_dataString1')"
      >
                  <q-card>
                  <q-card-section class="text-subitle2">
                    {{$t('privacy_dataString')}}
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                    <q-slider class="q-mt-md"
                      v-model="privacyDataModel"
                      markers
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="blue-10"
                      :min="0"
                      :max="5"
                      />
                      <span class="q-mt-xs text-caption text-grey" > {{$t('value5')}}</span>
              </q-card-section>
          </q-card>
          </q-list>
        </div>

        </div>

  </q-card-section>
        </q-card>

            </div>
        <div class="row q-mb-xs">
        <div class="col-lg-2"></div>
        <q-card class="col-lg-8 col-xs-12">
          <q-card-section class="text-blue-10" style="font-weight:bold;">
             {{$t('big_five')}}<br>
            <span class="text-caption text-grey">{{$t('info_Characterization')}}</span>
          </q-card-section>
          <q-card-section>
            <div class="row q-mt-xs">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-xs">
          <q-list flat class="rounded-borders" dense>
                <q-expansion-item class="bg-white"
                  expand-icon-class="text-yellow-10"
                  expand-icon="help"
                  expanded-icon="keyboard_arrow_up"
                  :label="$t('openness')"
                  :caption="$t('opennessString1')"
      >
                  <q-card>
                  <q-card-section>
                    {{$t('opennessString')}}
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                    <q-slider class="q-mt-md"
                      v-model="opennessModel"
                      markers
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="yellow-9"
                      :min="0"
                      :max="5"
                      />
                      <span class="q-mt-xs text-caption text-grey" > {{$t('value5')}}</span>
              </q-card-section>
          </q-card>
          </q-list>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-xs">
            <q-list flat class="rounded-borders" dense>
                <q-expansion-item class="bg-white"
                  expand-icon-class="text-green-10"
                  expand-icon="help"
                  expanded-icon="keyboard_arrow_up"
                  :label="$t('extrav')"
                  :caption="$t('extraversionString1')"
      >
                  <q-card>
                  <q-card-section>
                     {{$t('extraversionString')}}
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                    <q-slider class="q-mt-md"
                      v-model="extraversionModel"
                      markers
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="green-10"
                      :min="0"
                      :max="5"
                      />
                      <span class="q-mt-xs text-caption text-grey" > {{$t('value5')}}</span>
              </q-card-section>
          </q-card>
          </q-list>
        </div>

            </div>

            <div class="row q-mt-xs">
                 <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-xs">

              <q-list flat class="rounded-borders" dense>
                <q-expansion-item class="bg-white"
                  expand-icon-class="text-orange-10"
                  expand-icon="help"
                  expanded-icon="keyboard_arrow_up"
                  :label="$t('agreableness')"
                  :caption="$t('agreeablenessString1')"
      >
                  <q-card>
                  <q-card-section>
                    {{$t('agreeablenessString')}}
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                    <q-slider class="q-mt-md"
                      v-model="agreeablenessModel"
                      markers
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="orange-10"
                      :min="0"
                      :max="5"
                      />
                      <span class="q-mt-xs text-caption text-grey" > {{$t('value5')}}</span>
              </q-card-section>
          </q-card>
          </q-list>


        </div>





        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-xs ">
            <q-list flat class="rounded-borders" dense>
                <q-expansion-item class="bg-white"
                  expand-icon-class="text-red-10"
                  expand-icon="help"
                  expanded-icon="keyboard_arrow_up"
                  :label="$t('conscientiousness')"
                  :caption="$t('conscientiousnessString1')"
      >
                  <q-card>
                  <q-card-section>
                    {{$t('conscientiousnessString')}}
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                    <q-slider class="q-mt-md"
                      v-model="conscientiousnessModel"
                      markers
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="red-10"
                      :min="0"
                      :max="5"
                      />
                      <span class="q-mt-xs text-caption text-grey" > {{$t('value5')}}</span>
              </q-card-section>
          </q-card>
          </q-list>
        </div>


            </div>

            <div class="row q-mt-xs">

                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-xs">

          <q-list flat class="rounded-borders">
                <q-expansion-item class="bg-white"
                  expand-icon-class="text-blue-10"
                  expand-icon="help"
                  expanded-icon="keyboard_arrow_up"
                  :label="$t('emot_stability')"
                  :caption="$t('emotional_stabilityString1')"
      >
                  <q-card>
                  <q-card-section class="text-subitle2">
                    {{$t('emotional_stabilityString')}}
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                    <q-slider class="q-mt-md"
                      v-model="emotionalStabilityModel"
                      markers
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="blue-10"
                      :min="0"
                      :max="5"
                      />
                      <span class="q-mt-xs text-caption text-grey" > {{$t('value5')}}</span>
              </q-card-section>
          </q-card>
          </q-list>
        </div>


        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-xs">

          <q-list flat class="rounded-borders">
                <q-expansion-item class="bg-white"
                  expand-icon-class="text-pink-10"
                  expand-icon="help"
                  expanded-icon="keyboard_arrow_up"
                  :label="$t('validity')"
                  :caption="$t('test_validity_substring')"
      >
                </q-expansion-item>

                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                    <q-slider class="q-mt-md"
                      v-model="test_validModel"
                      markers
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="pink-10"
                      :min="0"
                      :max="5"
                      />
                      <span class="q-mt-xs text-caption text-grey" > {{$t('value5')}}</span>
              </q-card-section>
          </q-card>
          </q-list>
        </div>

            </div>



          </q-card-section>
        </q-card>

        </div>

        <div class="row q-mb-xs">
        <div class="col-lg-2"></div>
        <q-card class="col-lg-8 col-xs-12">
           <q-card-section class="text-blue-10" style="font-weight:bold;">
             {{$t($t('cognitive_vulnerabilities'))}}<br>
            <span class="text-caption text-grey">{{$t('info_Characterization')}}</span>
          </q-card-section>
          <q-card-section>

              <div class="row q-mt-xs">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-xs ">
          <q-list flat class="rounded-borders" dense>
                <q-expansion-item class="bg-white"
                  expand-icon-class="text-yellow-10"
                  expand-icon="help"
                  expanded-icon="keyboard_arrow_up"
                  :label="$t('scarcity')"
                  :caption="$t('scarcityString1')"
      >
                  <q-card>
                  <q-card-section>
                    {{$t('scarcityString')}}
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                    <q-slider class="q-mt-md"
                      v-model="scarcityModel"
                      markers
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="yellow-9"
                      :min="0"
                      :max="5"
                      />
                      <span class="q-mt-xs text-caption text-grey" > {{$t('value5')}}</span>
              </q-card-section>
          </q-card>
          </q-list>
        </div>




        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-xs">
            <q-list flat class="rounded-borders" dense>
                <q-expansion-item class="bg-white"
                  expand-icon-class="text-green-10"
                  expand-icon="help"
                  expanded-icon="keyboard_arrow_up"
                  :label="$t('consistency')"
                  :caption="$t('consistencyString1')"
      >
                  <q-card>
                  <q-card-section>
                     {{$t('consistencyString')}}
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                    <q-slider class="q-mt-md"
                      v-model="consistencyModel"
                      markers
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="green-10"
                      :min="0"
                      :max="5"
                      />
                      <span class="q-mt-xs text-caption text-grey" > {{$t('value5')}}</span>
              </q-card-section>
          </q-card>
          </q-list>
        </div>
            </div>

            <div class="row q-mt-xs">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-xs">

              <q-list flat class="rounded-borders" dense>
                <q-expansion-item class="bg-white"
                  expand-icon-class="text-orange-10"
                  expand-icon="help"
                  expanded-icon="keyboard_arrow_up"
                  :label="$t('social_proof')"
                  :caption="$t('social_proofString1')"
      >
                  <q-card>
                  <q-card-section>
                    {{$t('social_proofString')}}
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                    <q-slider class="q-mt-md"
                      v-model="socialProofModel"
                      markers
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="orange-10"
                      :min="0"
                      :max="5"
                      />
                      <span class="q-mt-xs text-caption text-grey" > {{$t('value5')}}</span>
              </q-card-section>
          </q-card>
          </q-list>

        </div>



        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-xs ">
            <q-list flat class="rounded-borders" dense>
                <q-expansion-item class="bg-white"
                  expand-icon-class="text-red-10"
                  expand-icon="help"
                  expanded-icon="keyboard_arrow_up"
                  :label="$t('gratitude')"
                  :caption="$t('gratitudeString1')"
      >
                  <q-card>
                  <q-card-section>
                    {{$t('gratitudeString')}}
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                    <q-slider class="q-mt-md"
                      v-model="gratitudeModel"
                      markers
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="red-10"
                      :min="0"
                      :max="5"
                      />
                      <span class="q-mt-xs text-caption text-grey" > {{$t('value5')}}</span>
              </q-card-section>
          </q-card>
          </q-list>
        </div>

            </div>

            <div class="row q-mt-xs">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-xs">

          <q-list flat class="rounded-borders">
                <q-expansion-item class="bg-white"
                  expand-icon-class="text-blue-10"
                  expand-icon="help"
                  expanded-icon="keyboard_arrow_up"
                  :label="$t('authority')"
                  :caption="$t('authorityString1')"
      >
                  <q-card>
                  <q-card-section class="text-subitle2">
                    {{$t('authorityString')}}
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-card class="no-border" flat>
                  <q-card-section class="q-pb-none q-mb-none">
                    <q-slider class="q-mt-md"
                      v-model="authorityModel"
                      markers
                      label-always
                      dense
                      label-text-color="white"
                      :step="1"
                      color="blue-10"
                      :min="0"
                      :max="5"
                      />
                      <span class="q-mt-xs text-caption text-grey" > {{$t('value5')}}</span>
              </q-card-section>
          </q-card>
          </q-list>


        </div>
            </div>
          </q-card-section>
        </q-card>



</div>

<div class="row q-mt-xl">
        <div class="col-lg-3 col-md-3 gt-sm"></div>
        <q-btn outline class="col-2 q-mt-lg q-pl-lg q-pr-lg q-pt-xs gt-sm" @click="tab = 'mails',go_Up()" color="blue-10" :label="$t('go_back')"/>
        <div class="col-1 gt-sm"></div>
        <q-btn class="col-2 q-mt-lg q-pl-lg q-pr-lg q-pt-xs gt-sm" @click="checkField3()" color="blue-10" :label="$t('finish')"/>
         <q-btn outline class="col-sm-5 col-xs-5 q-mt-xs q-pl-lg q-pr-lg q-pt-xs lt-md" @click="tab = 'mails',go_Up()" color="blue-10" :label="$t('go_back')"/>
        <div class="col-xs-2"></div>
        <q-btn class="col-sm-5 col-xs-5 q-mt-xs q-pl-lg q-pr-lg q-pt-xs lt-md" @click="checkField3()" color="blue-10" :label="$t('finish')"/>
          </div>
          </q-tab-panel>


        </q-tab-panels>
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


created(){
  this.startRegister()
},

setup () {
const rightDrawerOpen = ref(false)

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





const computerScienceknowledgeModel = ref(null)
const antiPhisCourseModel = ref(false)
const antiPhisCourseEverModel = ref(false)
const victimModel = ref(false)
const timeModel = ref(null)
const selfConfidenceModel = ref(null)
const impulsivityModel = ref(null)
const curiosityModel = ref(null)
const riskPropensityModel = ref(null)
const test_validModel = ref(null)
const riskPerceptionModel = ref(null)
const privacyDataModel = ref(null)
const extraversionModel = ref(null)
const agreeablenessModel = ref(null)
const conscientiousnessModel = ref(null)
const emotionalStabilityModel = ref(null)
const opennessModel = ref(null)
const scarcityModel = ref(null)
const consistencyModel = ref(null)
const socialProofModel = ref(null)
const gratitudeModel = ref(null)
const authorityModel = ref(null)
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
const testEmpty5 = ref(false)
const testEmpty6 = ref(false)
const testEmpty7 = ref(false)
const router = useRouter()
const tab = ref('mails')




const go_Up = async () => {
  window.scrollTo(0,0)
}

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

const checkField1 = async() =>{
  if(ageModel.value == null || !genderModel.value || !natModel.value || !eduLevelModel.value || !eduFieldModel.value || !jobFieldModel.value
    || !emplTypeModel.value || jobExpYearModel.value == null || !hobbyModel.value
    || !natModel.value || timeModel.value == null || computerScienceknowledgeModel.value== null || workHoursPriorTestModel.value == null
    || selfConfidenceModel.value == null  ){


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
      tab.value = 'alarms'
      go_Up()
    }
    console.log(tab)
}

const checkField2 = async() =>{
  if(impulsivityModel.value == null || curiosityModel.value == null || riskPropensityModel.value == null || riskPerceptionModel.value == null || privacyDataModel.value == null || opennessModel.value  == null || extraversionModel.value  == null || agreeablenessModel.value  == null || conscientiousnessModel.value  == null || emotionalStabilityModel.value == null ){


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
      tab.value = 'movistar'
      go_Up()
    }

}

const checkField3 = async() =>{
  if(ageModel.value == null || !genderModel.value || !eduLevelModel.value
    || !eduFieldModel.value || !jobFieldModel.value
    || !emplTypeModel.value || jobExpYearModel.value == null || !hobbyModel.value
    || !natModel.value || timeModel.value == null || computerScienceknowledgeModel.value== null || workHoursPriorTestModel.value == null
    || selfConfidenceModel.value == null || impulsivityModel.value == null || curiosityModel.value == null || riskPropensityModel.value == null || riskPerceptionModel.value == null || privacyDataModel.value == null || opennessModel.value  == null || extraversionModel.value  == null || agreeablenessModel.value  == null || conscientiousnessModel.value  == null || emotionalStabilityModel.value == null || scarcityModel.value  == null || consistencyModel.value  == null || socialProofModel.value  == null || gratitudeModel.value == null || authorityModel.value  == null ){

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
    router.push({name : 'email'})
  })
    }

}



const checkEmptyFields = async() =>{

if(ageModel.value == null || !genderModel.value || !natModel.value  ){
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

if(impulsivityModel.value == null || curiosityModel.value == null || riskPropensityModel.value == null || riskPerceptionModel.value == null || privacyDataModel.value == null){
    if(step.value > 6){
      testEmpty5.value = true
    }
}else{
  testEmpty5.value = false
}

if(opennessModel.value  == null || extraversionModel.value  == null || agreeablenessModel.value  == null || conscientiousnessModel.value  == null || emotionalStabilityModel.value == null){
  if (step.value > 7){
    testEmpty6.value = true
  }
  }else{
    testEmpty6.value = false
    }

if(scarcityModel.value  == null || consistencyModel.value  == null || socialProofModel.value  == null || gratitudeModel.value == null || authorityModel.value  == null )
{
  testEmpty7.value = true
}else{
  testEmpty7.value = false
  }


}








const userRegister = async () => {




if(ageModel.value == null || !genderModel.value || !eduLevelModel.value
    || !eduFieldModel.value || !jobFieldModel.value
    || !emplTypeModel.value || jobExpYearModel.value == null || !hobbyModel.value
    || !natModel.value || timeModel.value == null || computerScienceknowledgeModel.value== null || workHoursPriorTestModel.value == null
    || selfConfidenceModel.value == null || impulsivityModel.value == null || curiosityModel.value == null || riskPropensityModel.value == null || riskPerceptionModel.value == null || privacyDataModel.value == null || opennessModel.value  == null || extraversionModel.value  == null || agreeablenessModel.value  == null || conscientiousnessModel.value  == null || emotionalStabilityModel.value == null || scarcityModel.value  == null || consistencyModel.value  == null || socialProofModel.value  == null || gratitudeModel.value == null || authorityModel.value  == null ){


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
    router.push({name : 'email'})
  })
}
}

return {
checkField1,
checkField2,
checkField3,
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
go_Up,
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
tab,
zero_to_five,
zero_to_15,
startRegister,
userRegister,
checkEmptyFields,
rightDrawerOpen,
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
testEmpty5,
testEmpty6,
testEmpty7,
persistent
}
}

})

</script>


<style lang="sass">
.my-menu-link
  color: white
  background: #F2C037
</style>
