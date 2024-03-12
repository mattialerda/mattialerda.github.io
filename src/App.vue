<template>
  <v-app>
    <v-app-bar app color="primary">
      <a class="white--text" style="text-decoration: none;" href="https://mattialerda.github.io">
        <h1>mattialerda</h1>
      </a>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
            <v-img src="https://cdn.cosmicjs.com/c7538ac0-98e0-11ec-8bb7-91577e4f4933-profile.jpeg" class="my-3 mx-auto rounded-circle" width="300" height="300" />
          </v-col>

          <v-col class="mb-4" cols="12">
            <h1 class="display-2 font-weight-bold mb-3">
              Mattia Lerda
            </h1>

            <p class="subheading font-weight-regular text-center">
              <vue-typed-js class="mb-4 d-block" :strings="['Wordpress', 'Django', 'Vuejs', 'Javascript', 'Web', 'Android', 'iOS', 'Python']" :shuffle="true" :backDelay="2000">
                  <p>Sviluppatore { <span class="typing underline "></span> } </p>
              </vue-typed-js>
            </p>

            <h1 class="ml-4 d-inline-block">{{ openTag }}</h1>

            <a class="accent--text ml-4" href="mailto:mattialerda8@gmail.com" target="_blank">
              <i class="fas fa-envelope fa-2x"></i>
            </a>
            <a class="ml-5 d-inline-block" href="https://www.instagram.com/yolo.fiulla/" target="_blank">
              <v-img src="https://cdn.cosmicjs.com/bbc525a0-7164-11eb-87a2-9be5e90cdf74-instagram.svg" contain width="30" height="30" />
            </a>
            <a class="facebook ml-5" href="https://www.facebook.com/mattialerda00/" target="_blank">
              <i class="fab fa-facebook fa-2x my-1"></i>
            </a>
            <a v-bind:class="{'github dark-mode ml-5': darkModeEnabled, 'github ml-5': !darkModeEnabled}" href="https://github.com/mattialerda" target="_blank">
              <i class="fab fa-github fa-2x my-1"></i>
            </a>
            <a class="ml-5 d-inline-block" href="https://stackoverflow.com/users/12287153/mattia-lerda" target="_blank">
              <v-img src="https://cdn.cosmicjs.com/c89e06c0-7164-11eb-87a2-9be5e90cdf74-stack-overflow.svg" contain width="30" height="30" />
            </a>
            <!--<a class="accent--text ml-5" href="https://imgix.cosmicjs.com/0f50b610-7167-11eb-87a2-9be5e90cdf74-curriculum.pdf" target="_blank">
              <i class="fas fa-id-card fa-2x"></i>
            </a>-->

            <h1 class="ml-4 d-inline-block">{{ closeTag }}</h1>
          </v-col>

          <v-col class="mb-4" cols="12">
            <v-row justify="center">
              <v-col class="mb-5" cols="12" md="6">
                <p v-html="description" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { createBucketClient } from '@cosmicjs/sdk'
const cosmic = createBucketClient({
  bucketSlug: 'mattialerda-production',
  readKey: 'JjZLbJqM6B2a9Lq1qnC2bh3fuG1aBu3xyNCxoNeNpLHSateEH4'
})

export default {
  name: 'App',
  data () {
    return {
      description: '',
      openTag: '<',
      closeTag: '/>'
    }
  },
  computed: {
    darkModeEnabled () {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  },
  created () {
    cosmic.objects
      .find({ type: 'home' })
      .props(['content'])
      .limit(1)
      .then(data => {
        this.description = data.objects[0].content
      }).catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>
a {
  color: hsl(141, 71%, 48%) !important;
}
.underline {
  text-decoration:underline;
  text-decoration-color: hsl(141, 71%, 48%);
}
.facebook,
.facebook:hover {
  color: #3b5998 !important;
}
.github,
.github:hover {
  color: black !important;
}
.github.dark-mode,
.github.dark-mode:hover {
  color: white !important;
}
</style>
