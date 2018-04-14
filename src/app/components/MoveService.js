import Vue from 'vue'
import Constant from '../../config/Constant'
export default new Vue({
    methods: {
        create (movie) {
            let uri = `${Constant.api}movies/add`
            console.log(movie, uri)
            return this.axios.post(uri, movie)
        }
    }
})