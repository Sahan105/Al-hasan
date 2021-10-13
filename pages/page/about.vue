<template>
  <div>
    <Header />
    <Breadcrumbs title="About" />
    <!-- about section start -->
    <section class="about-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner-section">
              <img :src="aboutbanner" class="img-fluid" alt />
            </div>
          </div>
          <div class="col-sm-12">
            <h4>{{aboutTitle}}</h4>
            <p>{{aboutText}}</p>
          </div>
        </div>
      </div>
    </section>
<!--<div>
      <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zBQ2u5lTnuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </center>
    </div> -->
    <!-- about section end -->
    <!--Testimonial start-->
    <!--<section class="testimonial small-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper testimonial-slider">
                <div class="swiper-slide" v-for="(item, index) in items" :key="index">
                  <div class="media">
                    <div class="text-center">
                      <img :src="item.imagepath" alt="#" />
                      <h5>{{item.name}}</h5>
                      <h6>{{item.role}}</h6>
                    </div>
                    <div class="media-body">
                      <p>{{item.decs}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!--Testimonial ends-->
    <!--Team start-->
    <section id="team" class="team section-b-space ratio_asos">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h2>Our Team</h2>
            <div v-swiper:mySwiper2="swiperOption2">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(team, index) in teams" :key="index">
                  <div>
                    <div>
                      <img :src="team.imagepath" class="img-fluid" style="height: 377px; width: 494px" alt />
                    </div>
                    <h4>{{team.name}}</h4>
                    <h6>{{team.post}}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Team ends-->
    <Footer />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Header from '../../components/header/header6'
import Footer from '../../components/footer/footer1'
import Breadcrumbs from '../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 20,
        breakpoints: {
          991: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      },
      swiperOption2: {
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
          1199: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          420: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    
    }
  },
  computed: {
    ...mapState({
      aboutbanner: state => state.about.aboutbanner,
      aboutTitle: state => state.about.aboutTitle,
      aboutText: state => state.about.aboutText,
      items: state => state.about.items,
      teams: state => state.about.teams
    })
  }
}
</script>
