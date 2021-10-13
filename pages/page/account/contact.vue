<template>
  <div>
    <Header />
    <Breadcrumbs title="Contact" />
    <section class="contact-page section-b-space">
      <div class="container">
        <div class="row section-b-space">
          <div class="col-lg-7 map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29204.552230583602!2d90.40310552879619!3d23.798356462192377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sall%20hassan%20diamond%20gallery!5e0!3m2!1sen!2sbd!4v1632398249543!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe>
          </div>
          <div class="col-lg-5">
            <div class="contact-right">
              <ul>
                <li>
                  <div class="contact-icon">
                    <img :src="phoneimage" alt="Generic placeholder image" />
                    <h6>Contact Us</h6>
                  </div>
                  <div class="media-body">
                    <p>{{phone1}}</p>
                  </div>
                </li>
                <li>
                  <div class="contact-icon">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <h6>Branch 1</h6>
                  </div>
                  <div class="media-body">
                    <p v-html="address1"></p>
                  </div>
                </li>
                <li>
                  <div class="contact-icon">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <h6>Branch 2</h6>
                  </div>
                  <div class="media-body">
                    <p v-html="address2"></p>
                  </div>
                </li>
                <li>
                  <div class="contact-icon">
                    <img :src="emailimage" alt="Generic placeholder image" />
                    <h6>Email</h6>
                  </div>
                  <div class="media-body">
                    <p>{{email1}}</p>
                    <p>{{email2}}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--<div class="row">
          <div class="col-sm-12">
            <form class="theme-form" @submit="checkForm" method="post">
              <div v-if="errors.length">
                  <ul class="validation-error mb-3">
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                  </ul>
                </div>
              <div class="form-row">
                <div class="col-md-6">
                  <label for="fname">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                      id="fname"
                      v-model="fname"
                      placeholder="First Name"
                      name="fname"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="lname">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lname"
                      v-model="lname"
                      placeholder="Last Name"
                      name="lname"
                      required
                    />
                </div>
                <div class="col-md-6">
                  <label for="phone">Phone number</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="phone"
                    v-model="phone"
                    placeholder="Enter your number"
                    name="phone"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    v-model="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="message">Write Your Message</label>
                  <textarea
                    class="form-control"
                    placeholder="Write Your Message"
                    id="message"
                    v-model="message"
                    name="message"
                    rows="6"
                  ></textarea>
                </div>
                <div class="col-md-12">
                  <input
                  type="submit"
                  class="btn btn-solid"
                  value="Send Your Message"
                >
                </div>
              </div>
            </form>
          </div>
        </div>-->
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Header from '../../../components/header/header6'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  computed: {
    ...mapState({
      phoneimage: state => state.contact.phoneimage,
      emailimage: state => state.contact.emailimage,
      phone1: state => state.contact.phone1,
      phone2: state => state.contact.phone2,
      address1: state => state.contact.address1,
      address2: state => state.contact.address2,
      email1: state => state.contact.email1,
      email2: state => state.contact.email2
    })
  },
  data() {
    return {
      errors: [],
      fname: null,
      lname: null,
      email: null,
      phone: null,
      message: null
    }
  },
  methods: {
    checkForm: function (e) {
      this.errors = []
      if (!this.fname) {
        this.errors.push('First name required.')
      }
      if (!this.lname) {
        this.errors.push('Last name required.')
      }
      if (!this.email) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.')
      }
      if (!this.phone) {
        this.errors.push('Phone Number required.')
      }
      if (!this.message) {
        this.errors.push('Message required.')
      }
      if (!this.errors.length) return true
      e.preventDefault()
    },
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>
