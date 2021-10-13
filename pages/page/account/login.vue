<template>
  <div>
    <Header />
    <Breadcrumbs title="Login" />
    <section class="login-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3>{{logintitle}}</h3>
            <div class="theme-card">
              <ValidationObserver v-slot="{ invalid }">
              <form class="theme-form" @submit.prevent="onSubmit">
                <div class="form-group">
                  <label for="email">Email</label>
                  <ValidationProvider rules="required|email" v-slot="{ errors }" name="email">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="input.email"
                    placeholder="Email"
                    name="email"
                  />
                  <span class="validate-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <ValidationProvider rules="required" v-slot="{ errors }" name="password">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="input.password"
                    placeholder="Enter your password"
                  />
                  <span class="validate-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <button
                  type="submit"
                  class="btn btn-solid"
                  :disabled="invalid"
                  @click="signUp"
                >Login</button>
              </form>
              </ValidationObserver>
            </div>
          </div>
          <div class="col-lg-6 right-login">
            <h3>{{registertitle}}</h3>
            <div class="theme-card authentication-right">
              <h6 class="title-font">Create A Account</h6>
              <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
              <nuxt-link
                  :to="{ path: '/page/account/register'}"
                  class="btn btn-solid"
                >Create an Account</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm'
import Header from '../../../components/header/header6'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      logintitle: 'Login',
      registertitle: 'New Customer',
      errors: [],
      input: {
               email: '',
               password: ''
           },
      email: 'test@admin.com',
      password: 'test@123456'
    }
  },
  methods: {
    onSubmit() {
      console.log('Form has been submitted!')
    },
    signUp: function () {
        if(this.input.email == this.email && this.input.password == this.password) {
          this.$router.replace({ path: '/page/account/dashboard' })
        } 
        else {
            alert('The username or password is incorrect')
        }
      }     
    }, 
    /*signUp: function () {
      if (this.email === '' && this.password === '') {
        this.email = 'test@admin.com'
        this.password = 'test@123456'
      } else {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(
            (result) => {
              console.log('Result', result)
              Userauth.localLogin(result)
              this.$router.replace({path: '/page/account/checkout'})
            },
            (err) => {
              this.email = 'test@admin.com'
              this.password = 'test@123456'
              this.$toasted.show('Oops...' + err.message, {
                theme: 'bubble',
                position: 'bottom-right',
                type: 'error',
                duration: 2000
              })
            }
          )
      }
    } 
} */
}
</script>
