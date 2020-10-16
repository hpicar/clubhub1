<template>
  <div class="about">

    <h1 class="d-flex justify-center mt-6">About Us</h1>
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
          <p>Model United Nations, also known as Model UN or MUN, is a club offered at Waipahu High School where students represent a country or person and discuss a specific topic through attending conferences simulating committee sessions like the ones held in UN assemblies, with regards to pre-established international laws and affairs. The goal is to, hopefully, come up with a resolution all people and countries can agree on.</p>
        </v-card>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Main Events</h2>
          <ul>
            <li>Attend Model UN conferences and partake in committee sessions with delegates from different schools/states/countries</li>
            <li>Social events to bond with other members of the club</li>
            <li>Go on field trips related to law and politics</li>
          </ul>
        </v-card>
      </v-layout>
    </v-container>
    
    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Meetings</h2>
          <p>Every Tuesday from 3:00 pm — 4:30 pm and Sunday from 5:00 pm — 6:30 pm.</p>
        </v-card>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Officers & Advisor</h2>
          <ul>
            <li>Advisor: Mrs. Carli Doi</li>
            <li>Senior President: Harvey Picar</li>
            <li>Senior Vice President: Ashley Valois</li>
            <li>Senior Secretary: Tadashi Enne</li>
            <li>Senior Treasurer: Emylee Kapua</li>
            <li>Senior Historian: Jomari Tugade</li>
            <li>Junior President: Clyds Bautista</li>
            <li>Junior Vice President: Hannah Apostol</li>
            <li>Junior Secretary: Scott Eugenio</li>
            <li>Junior Treasurer: Mary Calamayan</li>
            <li>Junior Historian: Caelin Callejo</li>
          </ul>
        </v-card>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Contact Us!</h2>
          <v-btn 
            text class="ma-5"
            href="https://www.instagram.com/waipahumun/" target="_blank">
            <span>Instagram</span>
          </v-btn>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'MyClubs',
  components: {
  },
  data() {
    return {
      pics: [
        { src: require('../../images/munCapital.jpg') },
        { src: require('../../images/munChristmas.jpg') },
        { src: require('../../images/munGroup.jpg') },
      ],
    }
  }
}
</script>
