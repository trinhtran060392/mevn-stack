<template>
  <div class="dashboard-container">
    <v-container>
        <div class="text-xs-center">
            <v-pagination :length="info.totalPage" v-model="currentPage" :total-visible="10"></v-pagination>
        </div>
        <v-layout row wrap>
            <v-flex xs2 v-for="i in data" :key="i.id">
                <div class="vod-content">
                    <img :src="i.medium_cover_image">
                </div>
            </v-flex>
        </v-layout>
        <div class="text-xs-center mt-30">
            <v-pagination :length="info.totalPage" v-model="currentPage" :total-visible="10"></v-pagination>
        </div>
    </v-container>
  </div>
</template>

<script>
import Constant from '../../config/Constant'
import MovieService from '../components/MoveService'
export default {
  computed: {
    info () {
        return this.$store.getters.info
    }  
  },
  data () {
      return {
          currentPage: undefined,
          data: []
      }
  },
  watch: {
      currentPage (value) {
          MovieService.get(value, Constant.numberPerPage).then((response) => {
              console.log(response.data.data, 'into dashboard page')
              let result = response.data.data
              this.data = result.movies
          })
      }
  },
  created () {
    console.log(this.info)
    //   let uri = `${Constant.entryPoint}list_movies.json?page=1&limit=20`;
    //   this.axios.get(uri).then((response) => {
    //     console.log(response.data)
    //     let result = response.data.data.movies
    //     for (let i = 0; i < result.length; i++) {
    //       let temp = result[i]
    //       MovieService.create(temp).then((response) => {
    //         console.log(response)
    //       })
    //     }
    //   });
    MovieService.get(1, 20).then((response) => {
        let result = response.data.data
        let numberOfPage = Math.ceil(result.movie_count / Constant.numberPerPage)
        let pageInfo = {}
        this.currentPage = 1
        pageInfo.totalPage = numberOfPage
        this.$store.dispatch('setInfo', pageInfo)
        console.log(numberOfPage)
    })
  }
}
</script>

<style lang="scss">
$yellow: #ffcc05;
$white: #fff;
$black: #000;
$dark: #0E1623;
$grey: #c8c8c8;
$darken: #0a0e15;
$gray: rgba(255, 255, 255, 0.8);

img {
    max-width: 100%;
}
.vod-content {
    border: 5px solid #b0bec5;
    border-radius: 5px;
    &:hover {
        border: 5px solid #ffcc05;
    }
    margin: 10px;
    cursor: pointer;
}
.pagination {
    margin: 0 0 30px;
}
.mt-30 .pagination {
    margin-top: 30px;
}
body {
    background: $dark !important;
}
.content[data-booted=true] {
    background: transparent !important;
}
.application.theme--dark {
    background: transparent !important;
}
</style>
