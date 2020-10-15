<template>
    <v-app-bar app height="100" color="blue darken-3" dark>

        <v-toolbar-title>
            <h1>ClubHub</h1>
        </v-toolbar-title>
    
        <v-spacer></v-spacer>

        <v-btn text v-for="link in links" :key="link.text" :to="link.route">
            <v-icon left>{{ link.icon }}</v-icon>
            <span class="mr-2">{{ link.text }}</span>
        </v-btn>
    
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { text: 'Master Calendar', icon:'mdi-calendar', route: '' },
                { text: 'My Clubs', icon:'mdi-home', route: '/' },
                { text: 'Browse Clubs', icon:'mdi-magnify', route: '/browse' },
                { text: 'My Account', icon:'mdi-account', route: '/' },
            ],
        }
    }
}
</script>