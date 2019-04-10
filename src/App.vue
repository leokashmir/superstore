<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <router-view></router-view>
        
        </div>

        <div class="col-sm-3">
          <Cart></Cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/NavBar";
import Cart from "./components/Cart";
import Inventory from "./components/views/Inventory";
import data from './data.js'

export default {
  components: {
    Navbar,
    Cart
   
  },
  data(){
      return {
       
      }
  },
  mounted(){
   
  },
  methods:{
   
   }
  
 
  
};
</script>

<style>
.container {
  padding-top: 5px;
}
</style>
