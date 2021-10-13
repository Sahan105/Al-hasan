<template>
  <div>
    <Header />
    <Breadcrumbs title="Dashboard" />
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <b-card no-body v-bind:class="'dashboardtab'">
            <b-tabs pills card vertical>
              <b-tab title="Account Info" active>
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>{{ title1 }}</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, {{ name }} !</p>
                        <p>{{ dashboard_details }}</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>{{ title2 }}</h2>
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>{{ subtitle1 }}</h3>
                                <a href="#">Edit</a>
                              </div>
                              <div class="box-content">
                                <h6>{{ name }}</h6>
                                <h6>{{ email }}</h6>
                                <h6>{{ phone }}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title">
                              <h3>{{ subtitle2 }}</h3>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h6>{{ address }}</h6>
                                <h6>
                                  <a href="#">Edit Address</a>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <!--<b-tab title="Address Book">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Address Book</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, MARK JECNO !</p>
                        <p>From your Address book you have the ability to change or edit your shipping and billing address.</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Address Information</h2>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title">
                              <h3>Address Book</h3>
                              <a href="#">Manage Addresses</a>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h6>Default Billing Address</h6>
                                <address>
                                  You have not set a default billing address.
                                  <br />
                                  <a href="#">Edit Address</a>
                                </address>
                              </div>
                              <div class="col-sm-6">
                                <h6>Default Shipping Address</h6>
                                <address>
                                  You have not set a default shipping address.
                                  <br />
                                  <a href="#">Edit Address</a>
                                </address>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>-->
              <b-tab title="My Orders">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>{{ title3 }}</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, {{ name }} !</p>
                        <p>{{ order_details }}</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>{{ title4 }}</h2>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title mb-3">
                              <h3>{{ subtitle3 }}</h3>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <div v-for="(order, index) in orders" :key="index">
                                  <h4>Order No: {{ order.orderNo }}, Product Name: {{ order.productName }}</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <!--<b-tab title="Newsletter">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Newsletter</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, MARK JECNO !</p>
                        <p>you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
                        <p>Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium</p>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>-->
              <b-tab title="Change Password">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Change password</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, {{ name }} !</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-content">
                                <h6>
                                  <a href="#">Change Your Password</a>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab @click="logout" title="Log out">
                <!--<b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Log Out</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, MARK JECNO !</p>
                        <p>Log out From your Account Dashboard. Select a link below to view or edit information.</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Account Information</h2>
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Contact Information</h3>
                                <a href="#">Edit</a>
                              </div>
                              <div class="box-content">
                                <h6>MARK JECNO</h6>
                                <h6>MARk-JECNO@gmail.com</h6>
                                <h6>
                                  <a href="#">Change Password</a>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Newsletters</h3>
                                <a href="#">Edit</a>
                              </div>
                              <div class="box-content">
                                <p>You are currently not subscribed to any newsletter.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title">
                              <h3>Address Book</h3>
                              <a href="#">Manage Addresses</a>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h6>Default Billing Address</h6>
                                <address>
                                  You have not set a default billing address.
                                  <br />
                                  <a href="#">Edit Address</a>
                                </address>
                              </div>
                              <div class="col-sm-6">
                                <h6>Default Shipping Address</h6>
                                <address>
                                  You have not set a default shipping address.
                                  <br />
                                  <a href="#">Edit Address</a>
                                </address>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>-->
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
import Header from '../../../components/header/header6'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
export default {
   /* middleware({ store, redirect }) {
      // If the user is not authenticated
      if (!store.state.authenticated) {
        return redirect('/page/account/login')
      }
    }, */
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  computed: {
    ...mapState({
      title1: state => state.dashboard.title1,
      name: state => state.dashboard.name,
      email: state => state.dashboard.email,
      address: state => state.dashboard.address,
      phone: state => state.dashboard.phone,
      dashboard_details: state => state.dashboard.dashboard_details,
      order_details: state => state.dashboard.order_details,
      title2: state => state.dashboard.title2,
      subtitle1: state => state.dashboard.subtitle1,
      subtitle2: state => state.dashboard.subtitle2,
      subtitle3: state => state.dashboard.subtitle3,
      title3: state => state.dashboard.title3,
      title4: state => state.dashboard.title4,
      orders: state => state.dashboard.orders
      })
  },
  methods: {
    logout(){
      this.$router.push({ path: '/'})
    }
  }
  /* data() {
    return {
      authenticated: false,
    }
  },
  started() {
    if(!this.authenticated) {
       this.$router.replace({ path: '/page/account/login' })
     }
  }, */
  
}
</script>
