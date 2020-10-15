<template>
  <div class="about">
    <v-toolbar class="mt-1" height="50">
      <v-toolbar-title class="ml-15">Math Team</v-toolbar-title>
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
export default {
  name: 'MyClubs',
  data() {
    return {
      links: [
        { name: 'Calendar', icon: 'mdi-calendar-blank', route: '/mathteamcalendar' },
        { name: 'Resources', icon: 'mdi-file-document-multiple', route: '/mathteamresources' },
        { name: 'Updates', icon: 'mdi-home', route: '/mathteam' },
      ]
    }
  }
}
</script>
