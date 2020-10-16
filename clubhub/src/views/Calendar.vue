<template>
  <div>
    <h1 class="d-flex justify-center mt-6">My Calendar</h1>  
    <v-row>
    <v-col>
      <v-sheet height="400">
        <v-calendar
          ref="calendar"
          :now="today"
          :value="today"
          :events="events"
          color="primary"
          type="week"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        events: [
          {
            name: 'Math Team Practice',
            start: '2020-10-13 13:30',
            end: '2020-10-13 15:00',
          },
          {
            name: 'Math Team Practice',
            start: '2020-10-15 13:30',
            end: '2020-10-15 15:00',
          },
          {
            name: 'MUN Meeting',
            start: '2020-10-12 14:30',
            end: '2020-10-12 15:30',
          },
        ],
      }
    },
    mounted () {
      this.$refs.calendar.scrollToTime('13:00')
    },
  }
</script>