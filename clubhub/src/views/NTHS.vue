<template>
    <div>
        <ToolbarNTHS/>

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
import ToolbarNTHS from '../components/ToolbarNTHS.vue'

export default {
  components: {
    ToolbarNTHS
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
