<template>
  <div>

    <div class="row p-4">
      <div class="col-md-12">
        <h1 class="d-inline">Items</h1>
        <router-link :to="{ name: 'CreateItem' }" class="btn btn-primary float-right mt-2">
          Create Item
        </router-link>
      </div>
    </div><br />

    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <td>ID</td>
          <td>Item Name</td>
          <td>Item Price</td>
          <td>Actions</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items">
          <td>{{ item._id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <router-link :to="{ name: 'EditItem', params: {id: item._id} }" class="btn btn-primary">
              Edit
            </router-link>

            <button class="btn btn-danger" v-on:click="deleteItem(item._id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MovieService from './MoveService'
import Constant from '../../config/Constant';
export default {
  data(){
    return{
      items: []
    }
  },

  created: function()
  {
    this.getMovies();
  },

  methods: {
    getMovies()
    {
      let uri = `${Constant.entryPoint}list_movies.json?page=1&limit=1`;
      this.axios.get(uri).then((response) => {
        let result = response.data.data.movies
        for (let i = 0; i < result.length; i++) {
          let temp = result[i]
          MovieService.create(temp).then((response) => {
            console.log(response)
          })
        }
      });
    },
    deleteItem(id)
    {
      const response = confirm('are you sure you want to delete?');
      if (response) {
        let uri = 'http://localhost:4000/items/delete/'+id;
        this.items.splice(id, 1);
        this.axios.get(uri);
      }
    }
  }
}
</script>
