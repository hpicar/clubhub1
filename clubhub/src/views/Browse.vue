<template>
    <div class="browse">
        <h1 class="d-flex justify-center mt-6">Browse</h1>
        <v-container class="pa-10">

            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="club in myClubs" :key="club.name">
                    <v-card class="text-center ma-3 pt-3 d-flex flex-column" height="200" :color="club.color">
                        <v-card-text>
                            <h2>{{ club.name }}</h2>
                        </v-card-text>

                        <v-responsive class="pt-4">
                            image goes here
                        </v-responsive>

                        <v-card-actions :to="club.route">
                            <v-spacer></v-spacer>
                            <v-btn flat depressed text-color="white grey--text" :to="club.route" :color="club.color">
                                <span> Contact Us</span>
                                <v-icon small right>mdi-email</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>

        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Browse',
    data() {
    return {
      myClubs: [
        { name: 'AHS Student Board of Directors', picture: '', route: '/inprogress', color:'red'},
        { name: 'Academy of Engineering', picture: '', route: '/inprogress', color:'blue'},
        { name: 'Art Club', picture: '', route: '/inprogress', color:'yellow'},
        { name: 'AVID Service Club', picture: '', route: '/inprogress' },
        { name: 'Black Cultural Club', picture: '', route: '/inprogress' },
        { name: 'Chinese Club', picture: '', route: '/inprogress' },
        { name: 'CISCO', picture: '', route: '/inprogress', color:'blue'},
        { name: 'c/o 2021 Student Council', picture: '', route: '/inprogress' },
        { name: 'c/o 2022 Student Council', picture: '', route: '/inprogress' },
        { name: 'c/o 2023 Student Council', picture: '', route: '/inprogress' },
        { name: 'c/o 2024 Student Council', picture: '', route: '/inprogress' },
        { name: 'Fashion Club', picture: '', route: '/inprogress', color:'yellow'},
        { name: 'FCCLA', picture: '', route: '/inprogress', color:'purple'},
        { name: 'FCCLA - Food Service', picture: '', route: '/inprogress', color:'purple'},
        { name: 'Future Farmers of America', picture: '', route: '/inprogress', color:'green'},
        { name: 'Fil-Am Club', picture: '', route: '/inprogress' },
        { name: 'Gear Up Club', picture: '', route: '/inprogress' },
        { name: 'GleePAK', picture: '', route: '/inprogress', color:'yellow'},
        { name: 'Honor Our History', picture: '', route: '/inprogress' },
        { name: 'HOSA', picture: '', route: '/inprogress', color:'red'},
        { name: 'Interact Club', picture: '', route: '/inprogress' },
        { name: 'Ivy League Club', picture: '', route: '/inprogress' },
        { name: 'Japanese Club', picture: '', route: '/inprogress' },
        { name: 'JROTC', picture: '', route: '/inprogress' },
        { name: 'Key Club', picture: '', route: '/inprogress' },
        { name: 'Korean Club', picture: '', route: '/inprogress' },
        { name: 'Lei Hali\'a Aloha', picture: '', route: '/inprogress' },
        { name: 'Leo Club', picture: '', route: '/inprogress' },
        { name: 'LIFE Club', picture: '', route: '/inprogress' },
        { name: 'Marauder eSports', picture: '', route: '/inprogress' },
        { name: 'Math Team', picture: '', route: '/inprogress' },
        { name: 'Model UN', picture: '', route: '/inprogress' },
        { name: 'Na Alaka\'i', picture: '', route: '/inprogress' },
        { name: 'National Japanese Language', picture: '', route: '/inprogress' },
        { name: 'National Honor Society', picture: '', route: '/inprogress' },
        { name: 'NTHS', picture: '', route: '/inprogress' },
        { name: 'PAAC', picture: '', route: '/inprogress' },
        { name: 'Phi Theta Kappa', picture: '', route: '/inprogress' },
        { name: 'Robotics', picture: '', route: '/inprogress', color:'blue'},
        { name: 'Rizalian Youth Council', picture: '', route: '/inprogress' },
        { name: 'Science Olympiad', picture: '', route: '/inprogress' },
        { name: 'Skills USA', picture: '', route: '/inprogress', color:'blue'},
        { name: 'SLAM Poetry', picture: '', route: '/inprogress' },
        { name: 'Student Government', picture: '', route: '/inprogress' },
        { name: 'SOAR Book Club', picture: '', route: '/inprogress' },
        { name: 'Sociedad Honoraria Hispánica', picture: '', route: '/inprogress' },
        { name: 'Spanish Club', picture: '', route: '/inprogress' },
        { name: 'Speech and Debate', picture: '', route: '/inprogress', color:'purple'},
        { name: 'We Are Micronesia', picture: '', route: '/inprogress' },
        { name: 'WHS Band', picture: '', route: '/inprogress' },
      ]
    }
  }
}
</script>

