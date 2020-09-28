<template>
  <div class="home">
    <h1 class="ma-4">My Clubs</h1>

    <v-container class="pa-10">

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="club in myClubs" :key="club.name">
          <v-card  class="text-center ma-3 pt-3">
            <v-card-text>
              <h2>{{ club.name }}</h2>
            </v-card-text>

            <v-responsive class="pt-4">
              image goes here
            </v-responsive>

            <v-card-actions>
              <v-btn flat depressed color="white grey--text">
                <v-icon small left>mdi-message</v-icon>
                <span>Contact</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      myClubs: [
        { name: 'Model UN', picture: '' },
        { name: 'Math Team', picture: '' },
        { name: 'NTHS', picture: '' },
      ]
    }
  }
}
</script>
