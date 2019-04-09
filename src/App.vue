<template>
  <div id="app">
    <Navbar @search="search"></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <Inventory @newItemAdded="addCartItem" :items="items"></Inventory>
        </div>

        <div class="col-sm-3">
          <Cart @itemRemoved="removeItem" :items="cart"></Cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/NavBar";
import Cart from "./components/Cart";
import Inventory from "./components/Inventory";
import data from './data.js'

export default {
  components: {
    Navbar,
    Cart,
    Inventory
  },
  data(){
      return {
        items:[],
        cart:[]
      }
  },
  mounted(){
    this.items = data
  },
  methods:{

     search(keyword){
     this.items =  data.filter(item => {
        return  item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      })
     },
    addCartItem(item){
      this.cart.push(item)
    },
    removeItem(index){
     this.cart.splice(index, 1)
   },
  
   
   }
  
 
  
};
</script>

<style>
.container {
  padding-top: 5px;
}
</style>
