<template>
    <div>
        <v-toolbar class="mt-1" height="50">
            <v-toolbar-title class="ml-15">Model UN</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text>
                <v-icon>mdi-calendar-blank</v-icon>
                <span>Events</span>
            </v-btn>
            <v-btn text>
                <span>About</span>
            </v-btn>
        </v-toolbar>

        <h1 class="d-flex justify-center mb-6">Updates</h1>
        <h2>John Doe</h2>
        <p>Hey everyone! We will be holding a meeting on October 7th at 3:30 pm. Please click on this link below to join!</p>
        <h1>Membership Forms</h1>
         <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="150"
            max-width="250"
            src="https://picsum.photos/id/11/500/300"
        ></v-img>

    </div>
</template>

<script>
export default {
    components: {
    }
}
</script>

