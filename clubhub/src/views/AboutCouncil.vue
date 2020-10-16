<template>
  <div class="about">

    <h1 class="d-flex justify-center mt-6">About Us</h1>
    <v-container>
    <v-layout>
    <v-card class="pa-5" min-width="100%">
    <v-carousel>
      <v-carousel-item v-for="(pic, i) in pics" :key="i" :src="pic.src"
        reverse-transition="fade-transition" transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    </v-card>
    </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Requirements & Admissions Process</h2>
          <p>You must be a part of Royal Rebels, c/o 2021. We open up admissions at the end of every school year, where you must fill out a membership form and answer questions. Then, we pick a handful amount of students from our sea of applicants and you will recieve an email if you have or have not made it to round 2 of the admissions process, the interview. After the interview, you will then be notified whether or not you have been accepted into the c/o 2021 Student Council!</p>
        </v-card>
      </v-layout>
    </v-container>
    
    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Description</h2>
          <p>c/o 2021 Student Council helps plan the big school events at Waipahu High School! By being in student council, you become a part of developing and executing the unforgettable moments of high school for your class. Student council is not just a club, it's almost like a second family. While we do hard work, we don't forget to have fun and build these strong bonds and relationships with each other, our fellow councils, and student government.</p>
        </v-card>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Main Events</h2>
          <ul>
            <li>Plan huge events like Senior Prom and Arthur Awards for the c/o 2021</li>
            <li>Social events and field trips to bond with other councils, student government, and members of the club</li>
            <li>"Monthly Social Thing" (MST) during lunch and/or advisory every month</li>
          </ul>
        </v-card>
      </v-layout>
    </v-container>
    
    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Meetings</h2>
          <p>During the summer, advisory, and varies after school.</p>
        </v-card>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Officers & Advisor</h2>
          <ul>
            <li>Advisor: Ms. Lindsay Kosasa</li>
            <li>President: Grace Chinen</li>
            <li>Vice President: Harvey Picar</li>
            <li>Secretary: Ashley Valois</li>
            <li>Treasurer: Kristine Orpilla</li>
            <li>Co-Treasurer: Alyssa Buccat</li>
          </ul>
        </v-card>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-card class="pa-5" min-width="100%">
          <h2>Contact Us!</h2>
          <v-btn 
            text class="ma-5"
            href="https://www.instagram.com/royalrebels2021/" target="_blank">
            <span>Instagram</span>
          </v-btn>
          <v-btn 
            text class="ma-5"
            href="https://www.twitter.com/royalrebels2021/" target="_blank">
            <span>Twitter</span>
          </v-btn>
          <v-btn 
            text class="ma-5"
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrdlQqthgXGSVngWxVkhKTMqJrVBkXJkmwbBVLDmbpQtGfQxDvbprZTmFxWvwttfsqVrnV" target="_blank">
            <span>Email</span>
          </v-btn>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'MyClubs',
  components: {
  },
  data() {
    return {
      pics: [
        { src: require('../../images/co21scArthurAwards.jpg') },
        { src: require('../../images/co21scLegacyCamp.jpg') },
        { src: require('../../images/co21scPajamaDay.jpg') },
        { src: require('../../images/co21scWinterSocial.jpg') },
        { src: require('../../images/co21scJuniorProm.jpg') },
      ],
    }
  }
}
</script>
