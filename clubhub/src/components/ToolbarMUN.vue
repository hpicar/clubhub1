<template>
  <div>
    <v-toolbar class="mt-1" height="50">
      <v-toolbar-title class="ml-15">Model UN</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text v-for="link in links" :key="link.name" :to="link.route">
        <v-icon left>{{ link.icon }}</v-icon>
        <span>{{ link.name }}</span>
      </v-btn>
    </v-toolbar>
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
        { name: 'Resources', icon: 'mdi-file-document-multiple', route: '/modelunresources' },
        { name: 'About', icon: 'mdi-information', route: '/modelunabout' }
      ],
    }
  }
}
</script>