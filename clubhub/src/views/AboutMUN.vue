<template>
  <div class="about">
    <ToolbarMUN/>

    <h1 class="d-flex justify-center mt-6">About</h1>
    <v-container>
    <v-layout>
    <v-card class="pa-5" min-width="100%">
    <v-carousel>
      <v-carousel-item v-for="(pic, i) in pics" :key="i" :src="pic.src"
        reverse-transition="fade-transition" transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    </v-card>
    </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Description</h2>
          <p>Model United Nations, also known as Model UN and MUN, is a club offered at Waipahu High School 
            that allows students to be delegates of countries apart of the United Nations. As a delegate 
            of a country, the student will work with other delegates of other countries to simulate UN committees.</p>
        </v-card>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Main Events</h2>
          <ul>
            <li>Attend Model UN conventions to partcipate with delegates from different schools/states/countries</li>
            <li>Social events to bond with other members of the club</li>
          </ul>
        </v-card>
      </v-layout>
    </v-container>
    
    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Meetings</h2>
          <p>Every Mondays and Wednesdays from 2:30-3:30 PM</p>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ToolbarMUN from '../components/ToolbarMUN.vue'

export default {
  name: 'MyClubs',
  components: {
    ToolbarMUN
  },
  data() {
    return {
      pics: [
        { src: require('../../images/munCapital.jpg') },
        { src: require('../../images/munChristmas.jpg') },
        { src: require('../../images/munGroup.jpg') },
      ]
    }
  }
}
</script>
