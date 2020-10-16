<template>
  <div>
    <h1 class="d-flex justify-center mt-6">My Calendar</h1>  
    <v-row>
    <v-col>
      <v-sheet height="500">
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
            start: '2020-10-13 15:00',
            end: '2020-10-13 16:30',
          },
          {
            name: 'MUN Meeting',
            start: '2020-10-11 17:00',
            end: '2020-10-11 18:30',
          },
          {
            name: 'NTHS Meeting',
            start: '2020-10-16 19:00',
            end: '2020-10-16 19:30',
          },
        ],
      }
    },
    mounted () {
      this.$refs.calendar.scrollToTime('13:00')
    },
  }
</script>