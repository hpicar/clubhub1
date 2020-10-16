<template>
    <div class="browse">
        <h1 class="d-flex justify-center mt-6">Browse</h1>
        <v-container class="pa-10">

            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="club in myClubs" :key="club.name">
                    <v-card  class="text-center ma-3 pt-3 d-flex flex-column" height="320">
                        <v-card-text>
                            <h2>{{ club.name }}</h2>
                        </v-card-text>

                        <v-responsive class="pt-4">
                            <v-img :aspect-ratio="14/9"  :src="club.picture"></v-img>
                        </v-responsive>

                        <v-card-actions :to="club.route">
                            <v-spacer></v-spacer>
                            <v-btn flat depressed color="white grey--text" :to="club.route">
                                <span>Contact Us</span>
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
        { name: 'AHS Student Board of Directors', picture: require('../../images/ahsmain.png'), route: '/inprogress' },
        { name: 'Academy of Engineering', picture: require('../../images/aoemain.jpg'), route: '/inprogress' },
        { name: 'Art Club', picture: require('../../images/artmain.png'), route: '/inprogress' },
        { name: 'AVID Service Club', picture: require('../../images/avidservicemain.jpg'), route: '/inprogress' },
        { name: 'Black Cultural Club', picture: require('../../images/blackmain.png'), route: '/inprogress' },
        { name: 'Chinese Club', picture: require('../../images/chinesemain.png'), route: '/inprogress' },
        { name: 'CISCO', picture: require('../../images/ciscomain.png'), route: '/inprogress' },
        { name: 'c/o 2021 Student Council', picture: require('../../images/21councilmain.jpg'), route: '/inprogress' },
        { name: 'c/o 2022 Student Council', picture: require('../../images/22councilmain.jpg'), route: '/inprogress' },
        { name: 'c/o 2023 Student Council', picture: require('../../images/23councilmain.jpg'), route: '/inprogress' },
        { name: 'c/o 2024 Student Council', picture: require('../../images/24councilmain.png'), route: '/inprogress' },
        { name: 'Fashion Club', picture: require('../../images/fashionmain.png'), route: '/inprogress' },
        { name: 'FCCLA', picture: require('../../images/fcclamain.png'), route: '/inprogress' },
        { name: 'FCCLA - Food Service', picture: require('../../images/fcclafoodmain.png'), route: '/inprogress' },
        { name: 'Future Farmers of America', picture: require('../../images/farmersmain.gif'), route: '/inprogress' },
        { name: 'Fil-Am Club', picture: require('../../images/filammain.jpg'), route: '/inprogress' },
        { name: 'Gear Up Club', picture: require('../../images/gearupmain.png'), route: '/inprogress' },
        { name: 'GleePAK', picture: require('../../images/gleepak.png'), route: '/inprogress' },
        { name: 'Honor Our History', picture: require('../../images/honorourhistory.jpg'), route: '/inprogress' },
        { name: 'HOSA', picture: require('../../images/hosamain.jpg'), route: '/inprogress' },
        { name: 'Interact Club', picture: require('../../images/interactmain.png'), route: '/inprogress' },
        { name: 'Ivy League Club', picture: require('../../images/ivyleaguemain.png'), route: '/inprogress' },
        { name: 'Japanese Club', picture: require('../../images/japanesemain.jpg'), route: '/inprogress' },
        { name: 'JROTC', picture: require('../../images/jrotcmain.png'), route: '/inprogress' },
        { name: 'Key Club', picture: require('../../images/keymain.png'), route: '/inprogress' },
        { name: 'Korean Club', picture: require('../../images/koreanmain.png'), route: '/inprogress' },
        { name: 'Lei Hali\'a Aloha', picture: require('../../images/leihaliaalohamain.png'), route: '/inprogress' },
        { name: 'Leo Club', picture: require('../../images/leomain.png'), route: '/inprogress' },
        { name: 'LIFE Club', picture: require('../../images/lifemain.png'), route: '/inprogress' },
        { name: 'Marauder eSports', picture: require('../../images/esportsmain.png'), route: '/inprogress' },
        { name: 'Math Team', picture: require('../../images/mathteammain.png'), route: '/inprogress' },
        { name: 'Model UN', picture: require('../../images/modelunmain.jpg'), route: '/inprogress' },
        { name: 'Na Alaka\'i', picture: require('../../images/aoemain.jpg'), route: '/inprogress' },
        { name: 'National Japanese Language', picture: require('../../images/nationalJapanesemain.jpg'), route: '/inprogress' },
        { name: 'National Honor Society', picture: require('../../images/nhsmain.png'), route: '/inprogress' },
        { name: 'NTHS', picture: require('../../images/nthsmain.png'), route: '/inprogress' },
        { name: 'PAAC', picture: require('../../images/paacmain.png'), route: '/inprogress' },
        { name: 'Phi Theta Kappa', picture: require('../../images/PTKmain.jpg'), route: '/inprogress' },
        { name: 'Robotics', picture: require('../../images/roboticsmain.png'), route: '/inprogress' },
        { name: 'Rizalian Youth Council', picture: require('../../images/aoemain.jpg'), route: '/inprogress' },
        { name: 'Science Olympiad', picture: require('../../images/scienceolymain.jpg'), route: '/inprogress' },
        { name: 'Skills USA', picture: require('../../images/skillsusamain.gif'), route: '/inprogress' },
        { name: 'SLAM Poetry', picture: require('../../images/poetrymain.jpg'), route: '/inprogress' },
        { name: 'Student Government', picture: require('../../images/studentgovmain.webp'), route: '/inprogress' },
        { name: 'SOAR Book Club', picture: require('../../images/bookclubmain.png'), route: '/inprogress' },
        { name: 'Sociedad Honoraria Hispánica', picture: require('../../images/spanishsocietymain.webp'), route: '/inprogress' },
        { name: 'Spanish Club', picture: require('../../images/spanishclubmain.jpg'), route: '/inprogress' },
        { name: 'Speech and Debate', picture: require('../../images/speechanddebate.png'), route: '/inprogress' },
        { name: 'We Are Micronesia', picture: require('../../images/micronesiamain.jpg'), route: '/inprogress' },
        { name: 'WHS Band', picture: require('../../images/bandmain.png'), route: '/inprogress' },
      ]
    }
  }
}
</script>
