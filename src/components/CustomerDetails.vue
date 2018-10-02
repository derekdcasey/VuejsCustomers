<template>
  <div class="about container">
          <router-link to="/">Back</router-link>
  <h1 class="page-header">{{customer.first_name}} {{customer.last_name}}
         
         <span class="pull-right">
                 <router-link class="btn btn-primary" v-bind:to="/edit/+customer.id">Edit</router-link>
                 <button class="btn btn-danger" @click="deleteCustomer(customer.id)">Delete</button>
                 
         </span>
  </h1>
  <p>{{customer.email}}</p>
  </div>
</template>

<script>
export default {
  name: 'customerdetails',
  data () {
    return {
     customer:''
    }
  },
  methods:{
          fetchCustomer(id){
        this.$http.get('http://localhost:8080/customersapi/api/customer/' + id)
        .then(function(response){
        this.customer = JSON.parse(response.body);
      });     
          },
          deleteCustomer(id){
     this.$http.delete('http://localhost:8080/customersapi/api/customer/delete/' + id)
        .then(function(response){
       this.$router.push({path:'/', query: {alert: 'Customer Deleted'}})
      });  
          },
  },
  created: function(){
          this.fetchCustomer(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
