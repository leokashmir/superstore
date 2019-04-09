<template>
   <div class="row">
       <div class="col-sm-6">
           <img :src="item.photo" alt="photo">
       </div>
        <div class="col-sm-6">
           <h4>{{item.title}}</h4>
           <p>{{item.description}}</p>
           <p>{{item.price}}</p>
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
            fetchItem(){
                var self = this;
                    axios.get('http://localhost:3000/item/' + this.$route.params.id).then(response=>{
                           self.item = response.data 
                    })
            }
        }
}


</script>

<style>
</style>