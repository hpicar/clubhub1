<template>
  <div>
    <ToolbarMUN/>

    <h1 class="d-flex justify-center mt-6">Updates</h1>
      
      <v-container>
        <v-layout>
          <v-card class="pa-5" min-width="100%">
            <h2>Joseph Doe - Historian</h2>
            <p>Please follow us on Instagram and Twitter! The links to the socials can be found in the Resources tab.</p>
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
            <h2>John Doe - President</h2>
            <p>Hey everyone! We will be holding a meeting on October 7th at 3:30 pm. Please go to the Resources tab for the Meet link!</p>
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
            <h2>Jane Doe - Advisor</h2>
            <p>Just a reminder that membership forms are due on October 2nd.</p>
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
  data() {
    return {
    }
  }
}
</script>
