<template>
  <div class="dashboard-container">
    <v-container>
        This is dashboard container
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
          currentPage: undefined
      }
  },
  watch: {
      info (value) {
          console.log(value, 'in dashboard vue file')
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
        let numberOfPage = Math.ceil(result.movie_count/20)
        let pageInfo = {}
        pageInfo.currentPage = 1
        pageInfo.totalPage = numberOfPage
        this.$store.dispatch('setInfo', pageInfo)
        console.log(numberOfPage)
    })
  }
}
</script>
