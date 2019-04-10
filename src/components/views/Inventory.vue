  
<template>
   <div v-if="!loading" class="row">
    
    
    <div v-for="(item, index) in items" :key="index" class="card" style="width: 13rem;">
      <router-link tag="div" :to="{ path: '/item/' + item.id}">
          <img  class="card-img-top" :src="item.photo" alt="Card image Cap">
      <div class="card-body">
        <h5 class="card-title text-center">{{item.title}}</h5>
      </div>

      </router-link>
      
       <div class="card-footer">
        <p class="card-text" >${{item.price}}</p>
        <a @click="addToCart(item)" class="btn btn-sm  btn-primary float-right">+add</a>
      </div>
    </div>
   
    
  </div> 
<h1 v-else>Loading ...</h1>
</template>



<script>

import axios from 'axios'

export default {
data(){
  return{
    loading: true,
   
  }
},
computed:{
  items() {
      return this.$store.getters.getInventory
  }
},
mounted(){
   
  this.fetchInventory();
},
 methods:{
     addToCart(item){
         this.$store.dispatch('addToCart' , item)
        //  this.$store.commit('addToCart' , item)
        // this.$emit('newItemAdded', item)   
        
     },
     fetchInventory(){
      var self = this
       
       axios.get('http://localhost:3000/items').then(response =>{
           self.$store.commit('setInventory', response.data)
           self.loading = false
        }).catch( () => {alert('erro acessando o Servidor')})
     }
 }
};
</script>

<style>
</style>
