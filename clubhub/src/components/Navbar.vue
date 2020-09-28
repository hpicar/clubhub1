<template>
    <v-app-bar app height="100" color="blue darken-3" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>
            <span>ClubHub</span>
        </v-toolbar-title>
    
        <v-spacer></v-spacer>

        <v-btn text>
            <span class="mr-2">Master Calendar</span>
            <v-icon>mdi-open-in-new</v-icon>
        </v-btn>

        <v-btn text>
            <span class="mr-2">About</span> 
        </v-btn>

        <v-btn text>
            <span class="mr-2">My Account</span> 
        </v-btn>

        <v-navigation-drawer app absolute v-model="drawer" color="blue darken-1">
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" :to="link.route">
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                { text: 'Home', route: '/'},
                { text: 'Browse Clubs', route: '/browse'},
            ],
        }
    }
}
</script>