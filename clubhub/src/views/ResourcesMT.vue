<template>
  <div>
    <v-toolbar class="mt-1" height="50">
      <v-toolbar-title class="ml-15">Math Team</v-toolbar-title>
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
          <h2>Stay Connected!</h2>
          <v-btn 
            text class="ma-5"
            v-for="connection in connections" :key="connection.name"
            href="https://w3schools.com" target="_blank">
            <span>{{ connection.name }}</span>
          </v-btn>
        </v-card>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Membership Forms</h2>
          <v-btn 
            text class="ma-5"
            v-for="form in forms" :key="form.name"
            href="https://w3schools.com" target="_blank">
            <span>{{ form.name }}</span>
          </v-btn>
        </v-card>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Sources for Meets</h2>

          <v-list>
            <v-list-group :value="true">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Meet 2</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item-group>
                <v-list-item>
                  <v-list-content>
                    <v-list-item-title class="ml-7">Event 1</v-list-item-title>
                  </v-list-content>
                </v-list-item>
                <v-list-item>
                  <v-list-content>
                    <v-list-item-title class="ml-7">Event 2</v-list-item-title>
                  </v-list-content>
                </v-list-item>
              </v-list-item-group>
            </v-list-group>

            <v-list-group :value="true">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Meet 1</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item-group>
                <v-list-item>
                  <v-list-content>
                    <v-list-item-title class="ml-7">Event 1</v-list-item-title>
                  </v-list-content>
                </v-list-item>
                <v-list-item>
                  <v-list-content>
                    <v-list-item-title class="ml-7">Event 2</v-list-item-title>
                  </v-list-content>
                </v-list-item>
              </v-list-item-group>
            </v-list-group>
          </v-list>
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
        { name: 'Updates', icon: 'mdi-home', route: '/mathteam' },
        { name: 'About', icon: 'mdi-information', route: '/mathteam' }
      ],
      connections: [
        { name: 'GroupMe'},
        { name: 'Google Classroom'}
      ],
      forms: [
        { name: 'Google Form'}
      ]
    }
  }
}
</script>