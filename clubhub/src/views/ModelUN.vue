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

    <h1 class="d-flex justify-center mt-6">Updates</h1>
      <v-container>
        <v-layout>
          <v-card class="pa-5">
            <h2>John Doe</h2>
            <p>Hey everyone! We will be holding a meeting on October 7th at 3:30 pm. Please click on this link below to join!</p>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="150"
              max-width="250"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
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
        { name: 'Resources', icon: 'mdi-file-document-multiple', route: '' },
        { name: 'About', icon: 'mdi-information', route: '/modelunabout' },
      ]
    }
  }
}
</script>
