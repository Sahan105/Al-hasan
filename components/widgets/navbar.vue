<template>
  <div>
    <!-- Sample menu definition -->
    <div class="main-navbar">
      <div id="mainnav">
        <div class="toggle-nav" :class="leftSidebarVal ? 'toggle-button' : ''" @click="openmobilenav=true">
          <i class="fa fa-bars sidebar-bar"></i>
        </div>
        <ul class="nav-menu" :class="{ opennav: openmobilenav }" >
          <li class="back-btn">
            <div class="mobile-back text-right">
              <span @click="openmobilenav=false">Back</span>
              <i class="fa fa-angle-right pl-2" aria-hidden="true"></i>
            </div> 
          </li>
          <li v-for="(menuItem, index) in menulist" :key="index"  :class="menuItem.megamenu ? 'mega-menu' : 'dropdown'">
            <a href="#"  class="nav-link" @click="setActive(menuItem.title)">
                <nuxt-link :to="{path: menuItem.path}" style="color: #000000; font-size: 16px;">
                      {{menuItem.title}}
                </nuxt-link>
              <span class="sub-arrow" v-if="menuItem.children || menuItem.megamenu"></span>
            </a>

            <ul class="nav-submenu" :class="{ opensubmenu: isActive(menuItem.name) }" v-if="menuItem.children">

              <li v-for="(childrenItem, index) in menuItem.children" :key="index">
                <a href="javascript:void(0)" @click="setActiveChild(childrenItem.title)" v-if="childrenItem.children">
                  <nuxt-link :to="{ name: 'products-id', params: {id: childrenItem.id}}" style="color: #000000;">
                    {{childrenItem.name}}     
                  </nuxt-link> 
              
                  <span class="sub-arrow" v-if="childrenItem.children"></span>
                </a>
                <nuxt-link v-else :to="{ name: 'products-id', params: {id: childrenItem.id}}"  @click="setActiveChild(childrenItem.name)" style="color: #000000;" >
                  {{childrenItem.name}}
                </nuxt-link>
                <ul class="nav-sub-childmenu" :class="{ opensubchild: isActiveChild(childrenItem.name) }" v-if="childrenItem.children">
                  <li v-for="(childrenSubItem, index) in childrenItem.children" :key="index">
                    <nuxt-link :to="{ name: 'products-id', params: {id: childrenSubItem.id}}">
                      {{childrenSubItem.name}}
                    </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
            
            <div class="mega-menu-container" :class="{ opensubmenu: isActive('portfolio') }" v-if="menuItem.megamenu">
              <div class="container">
                <div class="row">
                  <div class="col mega-box"  v-for="(childrenItem, index) in menuItem.children" :key="index">
                    <div class="link-section">
                      <div class="menu-title" @click="setActivesubmega('portfolio')">
                        <h5>{{childrenItem.title}}
                          <span class="sub-arrow"></span>
                        </h5>
                      </div>
                      <div class="menu-content" :class="{ opensubmegamenu: isActivesubmega('portfolio') }">
                        <ul>
                          <li v-for="(childrenSubItem, index) in childrenItem.children" :key="index">
                            <nuxt-link :to="{ path: childrenSubItem.path}">
                              {{childrenSubItem.title}}
                            </nuxt-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    props: ['leftSidebarVal'],
  data() {
    return {
      openmobilenav: false,
      subnav: false,
      activeItem: 'home',
      activeChildItem: 'fashion 1',
      activemegaChild: 'portfolio'
    }
  },
  computed: {
    ...mapState({
      menulist: state => state.menu.data
    })
  },
  created(){
    this.$store.dispatch('menu/getCategories')
  },
  methods: {
    mobilenav: function () {
      this.openmobilenav = !this.openmobilenav
    },
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      if (this.activeItem === menuItem) {
        this.activeItem = ''
      } else {
        this.activeItem = menuItem
      }
    },
    isActiveChild: function (menuChildItem) {
      return this.activeChildItem === menuChildItem
    },
    setActiveChild: function (menuChildItem) {
      console.log(menuChildItem)
      if (this.activeChildItem === menuChildItem) {
        this.activeChildItem = ''
      } else {
        this.activeChildItem = menuChildItem
      }
    },
    isActivesubmega: function (megaChildItem) {
      return this.activemegaChild === megaChildItem
    },
    setActivesubmega: function (megaChildItem) {
      if (this.activemegaChild === megaChildItem) {
        this.activemegaChild = ''
      } else {
        this.activemegaChild = megaChildItem
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.toggle-nav {
  &.toggle-button {
    z-index: 1;
  }
}
</style>