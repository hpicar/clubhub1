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

    <h1 class="d-flex justify-center mt-6">Resources</h1>

    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Membership Forms</h2>
          <a href="https://www.w3schools.com/">Instructions to Turn in Dues<br></a>
          <a href="https://www.w3schools.com/">Google Form<br></a> 
          <a href="https://www.w3schools.com/">Paper Form<br></a>
        </v-card>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Resources for UN Committees</h2>
          <ul>
            <li>South Korea</li>
              <ul>
                <a href="https://www.w3schools.com/">Wars<br></a> 
                <a href="https://www.w3schools.com/">Econonmy<br></a>
              </ul>
            <li>North Korea</li>
              <ul>
                <a href="https://www.w3schools.com/">Wars<br></a> 
                <a href="https://www.w3schools.com/">Econonmy<br></a>
              </ul>
          </ul>

        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'MyCLubs',
  data() {
    return {
      links: [
        { name: 'Calendar', icon: 'mdi-calendar-blank', route: '' },
        { name: 'Updates', icon: 'mdi-home', route: '/modelun' },
        { name: 'About', icon: 'mdi-information', route: '/modelunabout' },      ]
    }
  }
}
</script>