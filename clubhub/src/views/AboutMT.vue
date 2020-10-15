<template>
  <div class="about">
    <ToolbarMT/>

    <h1 class="d-flex justify-center mt-6">About</h1>
    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Description</h2>
          <p>Math Team is</p>
        </v-card>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Main Events</h2>
          <ul>
            <li>Competitions</li>
            <li>Social events to bond with other members of the club</li>
          </ul>
        </v-card>
      </v-layout>
    </v-container>
    
    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Meetings</h2>
          <p>Every Tuesdays and Thursdays from 1:30-2:30 PM</p>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ToolbarMT from '../components/ToolbarMT.vue'

export default {
  name: 'MyClubs',
  components: {
    ToolbarMT
  },
  data() {
    return {
      
    }
  }
}
</script>
