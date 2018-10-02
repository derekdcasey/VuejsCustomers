<template>
  <div class="add container">
          <Alert v-if="alert" v-bind:message="alert"/>
  <h1 class="page-header">Add Customer</h1>

<form @submit.prevent="addCustomer">
        <div class="well">
                <h4>Info</h4>
                <div class="form-group">
                        <label for="firstname">First</label>
                        <input type="text" class="form-control" id="firstname" placeholder="First name" v-model="customer.first_name">
                        </div>
                        <div class="form-group">
                        <label for="lastname">Last Name</label>
                        <input type="text" class="form-control" id="lastname" placeholder="last name" v-model="customer.last_name">
                </div>
        </div>
        <div class="well">
                <h4>Contact</h4>
                <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" v-model="customer.email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
        </div>
        <button type="submit" class="btn btn-block btn-primary">Submit</button>
</form>

  </div>
</template>

<script>
import Alert from './Alert';
export default {
  name: 'add',
  data () {
    return {
     customer:{},
     alert:'',
    }
  },
  methods:{
            addCustomer(){
        if(!this.customer.first_name || !this.customer.last_name || !this.customer.email){
                this.alert = "Please Fill in all required fields!";
        }else{
                let newCustomer = {
                      first_name: this.customer.first_name,
                      last_name: this.customer.last_name,
                      email:this.customer.email  
                }

                this.$http.post('http://localhost:8080/customersapi/api/customers/add', newCustomer)
                .then(function(response){
                        this.$router.push({path: '/',query:{alert: 'Customer Added'}});
                })
        }
        }
  },
  components:{
          Alert
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
