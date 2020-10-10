<template>
    <div class="browse">
        <h1 class="ma-3">Browse</h1>
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

                        <v-card-actions :to="club.route">
                            <v-spacer></v-spacer>
                            <v-btn flat depressed color="white grey--text" :to="club.route">
                                <span>Contact Us</span>
                                <v-icon small right>mdi-email</v-icon>
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
    name: 'Browse',
    data() {
    return {
      myClubs: [
        { name: 'Art Club', picture: '', route: '/inprogress' },
        { name: 'AVID Service Club', picture: '', route: '/inprogress' },
        { name: 'Black Cultural Club', picture: '', route: '/inprogress' },
        { name: 'Chinese Club', picture: '', route: '/inprogress' },
      ]
    }
  }
}
</script>
