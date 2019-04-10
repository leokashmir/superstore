  
<template>
  <ul class="list-group">
    <li class="list-group-item">
    <span class="item-name">Name</span>
    <span class="item-price float-right">Price</span>
    </li>
    <hr>
        <li class="list-group-item" v-for="(item, index) in items" :key="index">
          
            <button class="btn btn-sm btn-danger" @click="removeItem(index)">Del</button>
            <span class="item-name">{{item.title}}</span>
            <span class="item-price float-right">${{item.price}}</span>
             
           
    </li> 
   <hr>
   
   <li class="list-group-item">
        <span class="item-name">Total</span>
        <span class="item-price float-right">${{totalPrice}}</span>
   </li>
    <li v-if="items.length > 0" class="list-group-item">
         <button class="btn btn-block btn-success" @click="checkout">Checkout</button>
   </li>
  </ul>
</template>



<script>
export default {

  computed:{

    items(){
        return this.$store.getters.getCart
    },
     totalPrice(){
            var total = 0
            this.items.forEach(item => {
                total += parseFloat(item.price)
                
            })
            return total.toFixed(2); // Para duas casas decimais
        }
  },
  methods:{
      removeItem(index){
           this.$store.commit('removeItem' , index)
          //this.$emit('itemRemoved', index)
      },
      checkout(){
          if(confirm('Tem certeza que você quer fazer o Checkout?')){
              this.$store.commit('clearCart')
          }
      }
  }
};
</script>

<style>
</style>
