<template>
  <div>
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
          <h2>Resources for UN Committees</h2>

          <v-list>
            <v-list-group :value="true">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>South Korea</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item-group>
                <v-list-item>
                  <v-list-content>
                    <v-list-item-title class="ml-7">Wars</v-list-item-title>
                  </v-list-content>
                </v-list-item>
                <v-list-item>
                  <v-list-content>
                    <v-list-item-title class="ml-7">Economy</v-list-item-title>
                  </v-list-content>
                </v-list-item>
              </v-list-item-group>
            </v-list-group>

            <v-list-group :value="true">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>North Korea</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item-group>
                <v-list-item>
                  <v-list-content>
                    <v-list-item-title class="ml-7">Wars</v-list-item-title>
                  </v-list-content>
                </v-list-item>
                <v-list-item>
                  <v-list-content>
                    <v-list-item-title class="ml-7">Economy</v-list-item-title>
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
        { name: 'Calendar', icon: 'mdi-calendar-blank', route: '/modeluncalendar' },
        { name: 'Updates', icon: 'mdi-home', route: '/modelun' },
        { name: 'About', icon: 'mdi-information', route: '/modelunabout' }
      ],
      connections: [
        { name: 'GroupMe Group Chat'},
        { name: 'Instagram'},
        { name: 'Google Classroom'}
      ],
      forms: [
        { name: 'Instructions to Turn in Dues'},
        { name: 'Google Form'},
        { name: 'Paper Form'}
      ]
    }
  }
}
</script>