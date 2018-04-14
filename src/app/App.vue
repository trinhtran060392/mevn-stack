<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <router-link :to="{ name: 'DisplayItem' }" class="navbar-brand">
        VuejsNode
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link :to="{ name: 'CreateItem' }" class="nav-link">
              Create
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- CONTENT -->
    <div class="container">
      <div>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<style>
  .fade-enter-active .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter .fade-leave-active {
    transition: 0;
  }
</style>

<script>
  
  import Vue from 'vue'
  import Vuetify from 'vuetify'
  Vue.use(Vuetify, {
    theme: {
      primary: '#ffcc05',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c'
    }
  })
  export default {

  }
</script>
