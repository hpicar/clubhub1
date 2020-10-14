<template>
  <div class="about">
    <v-toolbar class="mt-1" height="50">
      <v-toolbar-title class="ml-15">Model United Nations</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text v-for="link in links" :key="link.name" :to="link.route">
        <v-icon left>{{ link.icon }}</v-icon>
        <span>{{ link.name }}</span>
      </v-btn>
    </v-toolbar>

    <h1 class="d-flex justify-center mt-6">About</h1>
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
    
    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Academies</h2>
          <p></p>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'MyClubs',
  data() {
    return {
      links: [
        { name: 'Calendar', icon: 'mdi-calendar-blank', route: '/modeluncalendar' },
        { name: 'Resources', icon: 'mdi-file-document-multiple', route: '/modelunresources' },
        { name: 'Updates', icon: 'mdi-home', route: '/modelun' },
      ]
    }
  }
}
</script>
