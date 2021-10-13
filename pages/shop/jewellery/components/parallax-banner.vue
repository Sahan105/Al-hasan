<template>
  <div>
    <section class="p-0">
      <div
        class="full-banner parallax text-center p-left"
        v-bind:style="{ 'background-image': `url(${banner.imagepath})` }"
      >
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="banner-contain" >
                <div class="color">
                  <h2>{{banner.title}}</h2>
                  <h3>{{banner.subtitle}}</h3>
                  <h4>{{banner.text}}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      banner: state => state.home.banner
    })
  }
}
</script>
<style scoped>
.color h2{
  color: rgb(228, 226, 226);
}
.color h3{
  color: rgb(228, 226, 226);
}
.color h4{
  color: rgb(228, 226, 226);
}
</style>