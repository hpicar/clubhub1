<template>
    <div>
      <ToolbarMUN/>

      <h1 class="d-flex justify-center mt-6">Updates</h1>

      <v-container>
        <v-layout>
          <v-card class="pa-5" min-width="100%">
            <h2>Jomari Tugade - Senior Historian</h2>
            <p>Please follow us on Instagram! The links can be found in the About tab or search up "waipahumun" in the Instagram search bar.</p>
            <v-img
              max-height="150"
              max-width="250"
              src="https://viettimarketing.com/wp-content/uploads/2016/07/Follow-Us.png"
            ></v-img>
          </v-card>
        </v-layout>
      </v-container>

      <v-container>
        <v-layout>
          <v-card class="pa-5" min-width="100%">
            <h2>Harvey Picar - Senior President</h2>
            <p>Hey everyone! We will be having a meeting on Tuesday, September 29th from 3:00 pm — 4:30 pm! If you can't make it, please attend the one on Sunday, October 4th from 5:00 pm — 6:30 pm! Let me know if you have any questions.</p>
            <v-img
              max-height="150"
              max-width="250"
              src="https://st.depositphotos.com/1054979/2298/v/450/depositphotos_22989012-stock-illustration-see-you-soon-stamp.jpg"
            ></v-img>
          </v-card>
        </v-layout>
      </v-container>

      <v-container>
        <v-layout>
          <v-card class="pa-5" min-width="100%">
            <h2>Mrs. Carli Doi - Advisor</h2>
            <p>Just a reminder that membership forms are due on Sunday, September 27 by 11:59 pm.</p>
            <v-img
              max-height="150"
              max-width="250"
              src="https://www.mpsadvantage.education/storage/2018/02/just-a-reminder.png"
            ></v-img>
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
    data () {
      return {
        items: [
          { title: 'Membership Forms', icon: 'mdi-view-dashboard' },
          { title: 'Field Trip Forms', icon: 'mdi-forum' },
        ],
      }
    },
  }
</script>
