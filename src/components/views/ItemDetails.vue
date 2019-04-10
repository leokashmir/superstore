<template>
   <div v-if="item" class="row">
       <div class="col-sm-6">
           <img :src="item.photo" alt="photo">
       </div>
        <div class="col-sm-6">
           <h4>{{item.title}}</h4>
           <p>{{item.description}}</p>
           
          <div class="card-footer">
           <spam>${{item.price}}</spam>
           <a @click="addToCart(item)" class="btn btn-sm  btn-primary float-right">+add</a>
          </div>
       
       </div>

   </div>
</template>
<script>

import axios from 'axios'
export default {
    
        data(){
            return {
                item:null
            }
        },
        mounted(){
           this.fetchItem();
        },
        methods:{

            addToCart(item){
                this.$store.commit('addToCart' , item)
            },
            fetchItem(){
                var self = this;
                    axios.get('http://localhost:3000/item/' + this.$route.params.id).then(response => {
                           self.item = response.data 
                    })
            }
        }
}


</script>

<style>
</style>