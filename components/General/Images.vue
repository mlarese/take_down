<!--eslint-disable-->
<template>
    <v-layout>
        <v-flex xs12>
            <v-card>
                <v-container grid-list-sm fluid>
                    <v-layout row wrap>
                        <v-flex
                                v-for="(img, n) in images"
                                :key="n"
                                xs2
                                d-flex
                        >
                            <v-card flat tile class="d-flex">
                                <v-img
                                        :src="img"
                                        lazy-src="https://via.placeholder.com/150"
                                        aspect-ratio="1"
                                        class="grey lighten-2"
                                >
                                    <template v-slot:placeholder>
                                        <v-layout
                                                fill-height
                                                align-center
                                                justify-center
                                                ma-0
                                        >
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  export default {
    props: {
      images: {type: Array, default: () => []}
    }
  }
</script>
