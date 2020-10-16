<template>
  <div>
    <ToolbarMUN/>

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
          <h2>Conferences</h2>

          <v-list>
            <v-list-group :value="true">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>PACMUN</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item-group>
                <v-list-item href="https://www.pacmun.org/" target="_blank">
                  <v-list-content>
                    <v-list-item-title class="ml-7">Website</v-list-item-title>
                  </v-list-content>
                </v-list-item>
                <v-list-item href="https://forms.gle/efHg6fEXrdsJHDh1A" target="_blank">
                  <v-list-content>
                    <v-list-item-title class="ml-7">Registration</v-list-item-title>
                  </v-list-content>
                </v-list-item>
              </v-list-item-group>
            </v-list-group>

            <v-list-group :value="true">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>'Iolani MUNC</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item-group>
                <v-list-item href="https://sites.google.com/a/iolani.org/iolani-mun/conferences/iomunc" target="_blank">
                  <v-list-content>
                    <v-list-item-title class="ml-7">Website</v-list-item-title>
                  </v-list-content>
                </v-list-item>
                <v-list-item href="https://docs.google.com/forms/d/e/1FAIpQLScmYNEVl9CKjO1vhhBV8B-BFpQS09emhjLsn7VbeYepTxw0Pw/viewform?vc=0&c=0&w=1&flr=0" target="_blank">
                  <v-list-content>
                    <v-list-item-title class="ml-7">Registration</v-list-item-title>
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
import ToolbarMUN from '../components/ToolbarMUN.vue'

export default {
  name: 'MyClubs',
  components: {
    ToolbarMUN
  },
  data() {
    return {
      connections: [
        { name: 'GroupMe'},
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