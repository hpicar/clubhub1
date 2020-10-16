<template>
    <div>
        <h1 class="d-flex justify-center mt-6">Welcome, Harvey!</h1>
        <v-container>
            <v-layout>
                <v-card  class="mx-auto px-15 py-5" min-width="70%">
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text>
                            <span>EDIT</span>
                            <v-icon small right>mdi-pencil</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-row class="ma-5">
                        <v-col>
                            <v-avatar class="rounded-circle" size="250">
                                <v-img :src="require('../../images/harvey.jpg')"></v-img>
                            </v-avatar>
                        </v-col>
                        <v-col>
                            <h3 class="d-flex justify-center mt-6">Senior, IET</h3>
                            <v-btn text>
                                <span class="mt-3">Email: 21harcar@waipahuh.k12.hi.us</span>
                            </v-btn>
                            <v-btn text>
                                <span class="mt-3">Password: ****************</span>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text>
                            <span>LOGOUT</span>
                            <v-icon small right>mdi-exit-to-app</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-layout>
        </v-container>
    </div>
</template>