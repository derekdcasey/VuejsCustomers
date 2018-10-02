<template>
  <div class="customers container">
    <Alert v-if="alert" v-bind:message="alert" />
  <h1 class="page-header">Manage Customers</h1>
<input class='form-control' placeholder="Enter Last name" v-model="filterInput" type="text">
<br>
<table class="table">
  <thead>
    <tr>
      <th scope="col">First name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="customer in filterBy(customers,filterInput)" v-bind:key="customer.id">
      <td>{{customer.first_name}}</td>
      <td>{{customer.last_name}}</td>
      <td>{{customer.email}}</td>
      <td><router-link class="btn btn-default" v-bind:to="'/customer/add/' + customer.id">View</router-link></td>
    </tr>
  </tbody>
</table>

  </div>
</template>

<script>
import Alert from './Alert';

export default {
  name: 'customers',
  data () {
    return {
     customers:[],
     alert:'',
     filterInput:'',
    }
  },
  methods:{
    fetchCustomers(){
      this.$http.get('http://localhost:8080/customersapi/api/customers')
      .then(function(response){
        this.customers = JSON.parse(response.body);
      })
    },
    filterBy(list,value){
      value = value.charAt(0).toUpperCase() + value.slice(1);
return list.filter(function(customer){
  return customer.last_name.indexOf(value) > -1;
});
    }
  },
  created:function(){
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert;
    }
    this.fetchCustomers();
  },
   updated:function(){
    this.fetchCustomers();
  },
  components:{
    Alert
  },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
