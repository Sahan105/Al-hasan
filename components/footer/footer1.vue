<template>
  <div>
    <footer class="footer-light">
      <div class="light-layout">
        <div class="container">
          <!--<section class="small-section border-section border-top-0">
            <div class="row">
              <div class="col-lg-6">
                <div class="subscribe">
                  <div>
                    <h4>KNOW IT ALL FIRST!</h4>
                    <p>Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <form
                  class="form-inline subscribe-form auth-form needs-validation"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                >
                  <div class="form-group mx-sm-3">
                    <input
                      type="text"
                      class="form-control"
                      name="EMAIL"
                      id="mce-EMAIL"
                      placeholder="Enter your email"
                      required="required"
                    />
                  </div>
                  <button type="submit" class="btn btn-solid" id="mc-submit">subscribe</button>
                </form>
              </div>
            </div>
          </section>-->
        </div>
      </div>
      <section class="section-b-space light-layout">
        <div class="container">
          <div class="row footer-theme partition-f">
            <div class="col-lg-4 col-md-6">
              <div class="footer-title footer-mobile-title">
                <h4>about</h4>
              </div>
              <div class="footer-contant">
                <div class="footer-logo">
                  <img :src='"@/assets/images/icon/al-hassan-logo1.png"' alt="logo" />
                </div>
                <div  id="icons">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/AlHassanDiamondGallery" target="_blank">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCfInamoojdC1ANpR3d6E7nw" target="_blank">
                        <i class="fa fa-youtube" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/alhassandiamonds/" target="_blank">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="sub-title">
                <div class="footer-title">
                  <h4>Why choose us?</h4>
                </div>
                <div class="footer-contant">
                  <ul>
                    <li>
                      <a href="#">On time delivery</a>
                    </li>
                    <li>
                      <a href="#">Secure shopping</a>
                    </li>
                    <li>
                      <a href="#">Free delivery</a>
                    </li>
                    <li>
                      <a href="#">Quality assurance</a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="sub-title">
                <div class="footer-title">
                  <h4>store information</h4>
                </div>
                <div class="footer-contant">
                  <ul class="contact-list">
                    <li>
                      <i class="fa fa-map-marker"></i>Al Hassan Diamond Gallery
                    </li>
                    <li>
                      <i class="fa fa-phone"></i>Call Us: 
                      <a href="#">{{ phone }}</a>
                    </li>
                    <li>
                      <i class="fa fa-envelope-o"></i>Email Us:
                      <a href="#">{{ email }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="sub-footer">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-md-6 col-sm-12">
              <div class="footer-end">
                <p>
                  <i class="fa fa-copyright" aria-hidden="true"></i> 2021 Developed by <a href="https://www.facebook.com/catchbitflex" target="_blank" >BitFlex </a>| <a href="https://www.facebook.com/catchbangladesh" target="_blank" >Catch Bangladesh</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      email: state => state.contact.email1,
      phone: state => state.contact.phone1
    })
  }
}
</script>

<style scoped>
#icons {
position: relative;
left: 12%;
}
#icons li{
  padding: 0 5%;
}
#icons a{
  font-size: 1.4rem;
  color: var(--theme-deafult);
}
</style>
