<template>
    <v-app-bar app color="blue darken-3" height="100" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>
            <span class="">ClubHub</span>
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

        <v-navigation-drawer v-model="drawer" app color="blue lighten-4">
            
        </v-navigation-drawer>
    
    </v-app-bar>
</template>

<script>
export default {
    data(){
        return {
            drawer: false
        }
    }
}
</script>