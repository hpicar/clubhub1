<template>
    <div>
        <v-toolbar class="mt-1" height="50">
            <v-toolbar-title class="ml-15">National Technical Honor Society</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text>
                <v-icon left>mdi-calendar-blank</v-icon>
                <span>Events</span>
            </v-btn>
            <v-btn text>
                <v-icon left>mdi-file-document-multiple</v-icon>
                <span>Resources</span>
            </v-btn>
            <v-btn text>
                <span>About</span>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer
            floating
            permanent
            class = "pt-15"
        >
            <v-list
            dense
            rounded
            >
            <v-list-item
                v-for="item in items"
                :key="item.title"
                link
            >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
</template>

<script>
export default {
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
