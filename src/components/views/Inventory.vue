  
<template>
  <div class="row">
    
    
    <div v-for="(item, index) in items" :key="index" class="card" style="width: 13rem;">
      <img  class="card-img-top" :src="item.photo" alt="Card image Cap">
      <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text" >${{item.price}}</p>
        <a @click="addCart(item)" class="btn btn-primary">+add</a>
      </div>
    </div>
   
    
  </div>
</template>



<script>
export default {
data(){
  return{
    items:[]
  }
},


 methods:{
     addCart(item){
         this.$emit('newItemAdded', item)   
     }
 }
};
</script>

<style>
</style>
