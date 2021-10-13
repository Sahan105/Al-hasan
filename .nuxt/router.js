import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _23641e75 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _4f250427 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _3f1bbea3 = () => interopDefault(import('..\\pages\\store-locator.vue' /* webpackChunkName: "pages/store-locator" */))
const _5ddfdd7d = () => interopDefault(import('..\\pages\\collection\\full-width.vue' /* webpackChunkName: "pages/collection/full-width" */))
const _0058d4e2 = () => interopDefault(import('..\\pages\\collection\\list-view.vue' /* webpackChunkName: "pages/collection/list-view" */))
const _154e7998 = () => interopDefault(import('..\\pages\\collection\\metro.vue' /* webpackChunkName: "pages/collection/metro" */))
const _1a3727c5 = () => interopDefault(import('..\\pages\\collection\\no-sidebar.vue' /* webpackChunkName: "pages/collection/no-sidebar" */))
const _5625c274 = () => interopDefault(import('..\\pages\\collection\\right-sidebar.vue' /* webpackChunkName: "pages/collection/right-sidebar" */))
const _6fcc3d16 = () => interopDefault(import('..\\pages\\collection\\sidebar-popup.vue' /* webpackChunkName: "pages/collection/sidebar-popup" */))
const _57bd1486 = () => interopDefault(import('..\\pages\\collection\\six-grid.vue' /* webpackChunkName: "pages/collection/six-grid" */))
const _4d626c0a = () => interopDefault(import('..\\pages\\collection\\three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
const _ca9496fc = () => interopDefault(import('..\\pages\\page\\404.vue' /* webpackChunkName: "pages/page/404" */))
const _6fcf1052 = () => interopDefault(import('..\\pages\\page\\about.vue' /* webpackChunkName: "pages/page/about" */))
const _7b75fd78 = () => interopDefault(import('..\\pages\\page\\collection.vue' /* webpackChunkName: "pages/page/collection" */))
const _5fe44691 = () => interopDefault(import('..\\pages\\page\\coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
const _46a65760 = () => interopDefault(import('..\\pages\\page\\faq.vue' /* webpackChunkName: "pages/page/faq" */))
const _f602d9a4 = () => interopDefault(import('..\\pages\\page\\lookbook.vue' /* webpackChunkName: "pages/page/lookbook" */))
const _16ec2b4e = () => interopDefault(import('..\\pages\\page\\order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _774d13fe = () => interopDefault(import('..\\pages\\page\\review.vue' /* webpackChunkName: "pages/page/review" */))
const _840e4b64 = () => interopDefault(import('..\\pages\\page\\search.vue' /* webpackChunkName: "pages/page/search" */))
const _3a661755 = () => interopDefault(import('..\\pages\\page\\typography.vue' /* webpackChunkName: "pages/page/typography" */))
const _2e536368 = () => interopDefault(import('..\\pages\\product\\bundle-product.vue' /* webpackChunkName: "pages/product/bundle-product" */))
const _1e6474c8 = () => interopDefault(import('..\\pages\\product\\four-image.vue' /* webpackChunkName: "pages/product/four-image" */))
const _818b5708 = () => interopDefault(import('..\\pages\\shop\\jewellery\\index.vue' /* webpackChunkName: "pages/shop/jewellery/index" */))
const _f5bb0552 = () => interopDefault(import('..\\pages\\page\\account\\cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _2ba6e4fd = () => interopDefault(import('..\\pages\\page\\account\\checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _7cd6ceb9 = () => interopDefault(import('..\\pages\\page\\account\\contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _da4f8226 = () => interopDefault(import('..\\pages\\page\\account\\dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _20fcaad8 = () => interopDefault(import('..\\pages\\page\\account\\forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _a2be4c7c = () => interopDefault(import('..\\pages\\page\\account\\login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _41a2b5e2 = () => interopDefault(import('..\\pages\\page\\account\\login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
const _f603707c = () => interopDefault(import('..\\pages\\page\\account\\profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
const _6eadcfda = () => interopDefault(import('..\\pages\\page\\account\\register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _7a4e1408 = () => interopDefault(import('..\\pages\\page\\account\\wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _6150156a = () => interopDefault(import('..\\pages\\page\\compare\\compare-1.vue' /* webpackChunkName: "pages/page/compare/compare-1" */))
const _615e2ceb = () => interopDefault(import('..\\pages\\page\\compare\\compare-2.vue' /* webpackChunkName: "pages/page/compare/compare-2" */))
const _99e9f41c = () => interopDefault(import('..\\pages\\page\\element\\banner.vue' /* webpackChunkName: "pages/page/element/banner" */))
const _4c873744 = () => interopDefault(import('..\\pages\\page\\element\\category.vue' /* webpackChunkName: "pages/page/element/category" */))
const _5838f765 = () => interopDefault(import('..\\pages\\page\\element\\collection-banner.vue' /* webpackChunkName: "pages/page/element/collection-banner" */))
const _6a01bb39 = () => interopDefault(import('..\\pages\\page\\element\\home-slider.vue' /* webpackChunkName: "pages/page/element/home-slider" */))
const _f1649a26 = () => interopDefault(import('..\\pages\\page\\element\\logo-slider.vue' /* webpackChunkName: "pages/page/element/logo-slider" */))
const _9a4ae88a = () => interopDefault(import('..\\pages\\page\\element\\multi-slider.vue' /* webpackChunkName: "pages/page/element/multi-slider" */))
const _580192c5 = () => interopDefault(import('..\\pages\\page\\element\\product-slider.vue' /* webpackChunkName: "pages/page/element/product-slider" */))
const _165439e2 = () => interopDefault(import('..\\pages\\page\\element\\product-tabs.vue' /* webpackChunkName: "pages/page/element/product-tabs" */))
const _a0a5db42 = () => interopDefault(import('..\\pages\\page\\element\\service.vue' /* webpackChunkName: "pages/page/element/service" */))
const _4b1d1846 = () => interopDefault(import('..\\pages\\page\\portfolio\\masonary-fullwidth.vue' /* webpackChunkName: "pages/page/portfolio/masonary-fullwidth" */))
const _070d47c8 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-2.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-2" */))
const _071b5f49 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-3.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-3" */))
const _072976ca = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-4.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-4" */))
const _e539db04 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-2-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-2-col" */))
const _21a7817f = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-3-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-3-col" */))
const _94281f00 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-4-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-4-col" */))
const _dc7ce098 = () => interopDefault(import('..\\pages\\product\\sidebar\\no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
const _2f3c0712 = () => interopDefault(import('..\\pages\\product\\sidebar\\right-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/right-sidebar" */))
const _47ce2c0e = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
const _33f25156 = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
const _18192d3e = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
const _27ff1f3e = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
const _46092bd7 = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
const _10854d98 = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))
const _a7f03ab2 = () => interopDefault(import('..\\pages\\products\\details\\no-sidebar.vue' /* webpackChunkName: "pages/products/details/no-sidebar" */))
const _f3de3eb8 = () => interopDefault(import('..\\pages\\products\\details\\right-sidebar.vue' /* webpackChunkName: "pages/products/details/right-sidebar" */))
const _6645aa30 = () => interopDefault(import('..\\pages\\page\\account\\auth\\auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _013a185a = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\category.vue' /* webpackChunkName: "pages/shop/jewellery/components/category" */))
const _036f9bf4 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\instagram.vue' /* webpackChunkName: "pages/shop/jewellery/components/instagram" */))
const _06cf8976 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\parallax-banner.vue' /* webpackChunkName: "pages/shop/jewellery/components/parallax-banner" */))
const _2510cb5b = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-slider" */))
const _081d5aea = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\product-tab.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-tab" */))
const _0358888c = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\services.vue' /* webpackChunkName: "pages/shop/jewellery/components/services" */))
const _177c4bbd = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/slider" */))
const _247cc21a = () => interopDefault(import('..\\pages\\collection\\leftsidebar\\_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
const _9ce4e9f4 = () => interopDefault(import('..\\pages\\product\\sidebar\\_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))
const _70365373 = () => interopDefault(import('..\\pages\\products\\details\\_id.vue' /* webpackChunkName: "pages/products/details/_id" */))
const _8eb83762 = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _00c4bccb = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _23641e75,
    name: "about-us"
  }, {
    path: "/products",
    component: _4f250427,
    name: "products"
  }, {
    path: "/store-locator",
    component: _3f1bbea3,
    name: "store-locator"
  }, {
    path: "/collection/full-width",
    component: _5ddfdd7d,
    name: "collection-full-width"
  }, {
    path: "/collection/list-view",
    component: _0058d4e2,
    name: "collection-list-view"
  }, {
    path: "/collection/metro",
    component: _154e7998,
    name: "collection-metro"
  }, {
    path: "/collection/no-sidebar",
    component: _1a3727c5,
    name: "collection-no-sidebar"
  }, {
    path: "/collection/right-sidebar",
    component: _5625c274,
    name: "collection-right-sidebar"
  }, {
    path: "/collection/sidebar-popup",
    component: _6fcc3d16,
    name: "collection-sidebar-popup"
  }, {
    path: "/collection/six-grid",
    component: _57bd1486,
    name: "collection-six-grid"
  }, {
    path: "/collection/three-grid",
    component: _4d626c0a,
    name: "collection-three-grid"
  }, {
    path: "/page/404",
    component: _ca9496fc,
    name: "page-404"
  }, {
    path: "/page/about",
    component: _6fcf1052,
    name: "page-about"
  }, {
    path: "/page/collection",
    component: _7b75fd78,
    name: "page-collection"
  }, {
    path: "/page/coming-soon",
    component: _5fe44691,
    name: "page-coming-soon"
  }, {
    path: "/page/faq",
    component: _46a65760,
    name: "page-faq"
  }, {
    path: "/page/lookbook",
    component: _f602d9a4,
    name: "page-lookbook"
  }, {
    path: "/page/order-success",
    component: _16ec2b4e,
    name: "page-order-success"
  }, {
    path: "/page/review",
    component: _774d13fe,
    name: "page-review"
  }, {
    path: "/page/search",
    component: _840e4b64,
    name: "page-search"
  }, {
    path: "/page/typography",
    component: _3a661755,
    name: "page-typography"
  }, {
    path: "/product/bundle-product",
    component: _2e536368,
    name: "product-bundle-product"
  }, {
    path: "/product/four-image",
    component: _1e6474c8,
    name: "product-four-image"
  }, {
    path: "/shop/jewellery",
    component: _818b5708,
    name: "shop-jewellery"
  }, {
    path: "/page/account/cart",
    component: _f5bb0552,
    name: "page-account-cart"
  }, {
    path: "/page/account/checkout",
    component: _2ba6e4fd,
    name: "page-account-checkout"
  }, {
    path: "/page/account/contact",
    component: _7cd6ceb9,
    name: "page-account-contact"
  }, {
    path: "/page/account/dashboard",
    component: _da4f8226,
    name: "page-account-dashboard"
  }, {
    path: "/page/account/forget-password",
    component: _20fcaad8,
    name: "page-account-forget-password"
  }, {
    path: "/page/account/login",
    component: _a2be4c7c,
    name: "page-account-login"
  }, {
    path: "/page/account/login-firebase",
    component: _41a2b5e2,
    name: "page-account-login-firebase"
  }, {
    path: "/page/account/profile",
    component: _f603707c,
    name: "page-account-profile"
  }, {
    path: "/page/account/register",
    component: _6eadcfda,
    name: "page-account-register"
  }, {
    path: "/page/account/wishlist",
    component: _7a4e1408,
    name: "page-account-wishlist"
  }, {
    path: "/page/compare/compare-1",
    component: _6150156a,
    name: "page-compare-compare-1"
  }, {
    path: "/page/compare/compare-2",
    component: _615e2ceb,
    name: "page-compare-compare-2"
  }, {
    path: "/page/element/banner",
    component: _99e9f41c,
    name: "page-element-banner"
  }, {
    path: "/page/element/category",
    component: _4c873744,
    name: "page-element-category"
  }, {
    path: "/page/element/collection-banner",
    component: _5838f765,
    name: "page-element-collection-banner"
  }, {
    path: "/page/element/home-slider",
    component: _6a01bb39,
    name: "page-element-home-slider"
  }, {
    path: "/page/element/logo-slider",
    component: _f1649a26,
    name: "page-element-logo-slider"
  }, {
    path: "/page/element/multi-slider",
    component: _9a4ae88a,
    name: "page-element-multi-slider"
  }, {
    path: "/page/element/product-slider",
    component: _580192c5,
    name: "page-element-product-slider"
  }, {
    path: "/page/element/product-tabs",
    component: _165439e2,
    name: "page-element-product-tabs"
  }, {
    path: "/page/element/service",
    component: _a0a5db42,
    name: "page-element-service"
  }, {
    path: "/page/portfolio/masonary-fullwidth",
    component: _4b1d1846,
    name: "page-portfolio-masonary-fullwidth"
  }, {
    path: "/page/portfolio/mesonary-grid-2",
    component: _070d47c8,
    name: "page-portfolio-mesonary-grid-2"
  }, {
    path: "/page/portfolio/mesonary-grid-3",
    component: _071b5f49,
    name: "page-portfolio-mesonary-grid-3"
  }, {
    path: "/page/portfolio/mesonary-grid-4",
    component: _072976ca,
    name: "page-portfolio-mesonary-grid-4"
  }, {
    path: "/page/portfolio/portfolio-2-col",
    component: _e539db04,
    name: "page-portfolio-portfolio-2-col"
  }, {
    path: "/page/portfolio/portfolio-3-col",
    component: _21a7817f,
    name: "page-portfolio-portfolio-3-col"
  }, {
    path: "/page/portfolio/portfolio-4-col",
    component: _94281f00,
    name: "page-portfolio-portfolio-4-col"
  }, {
    path: "/product/sidebar/no-sidebar",
    component: _dc7ce098,
    name: "product-sidebar-no-sidebar"
  }, {
    path: "/product/sidebar/right-sidebar",
    component: _2f3c0712,
    name: "product-sidebar-right-sidebar"
  }, {
    path: "/product/three-column/thumbnail-bottom",
    component: _47ce2c0e,
    name: "product-three-column-thumbnail-bottom"
  }, {
    path: "/product/three-column/thumbnail-left",
    component: _33f25156,
    name: "product-three-column-thumbnail-left"
  }, {
    path: "/product/three-column/thumbnail-right",
    component: _18192d3e,
    name: "product-three-column-thumbnail-right"
  }, {
    path: "/product/thumbnail-image/image-outside",
    component: _27ff1f3e,
    name: "product-thumbnail-image-image-outside"
  }, {
    path: "/product/thumbnail-image/left-image",
    component: _46092bd7,
    name: "product-thumbnail-image-left-image"
  }, {
    path: "/product/thumbnail-image/right-image",
    component: _10854d98,
    name: "product-thumbnail-image-right-image"
  }, {
    path: "/products/details/no-sidebar",
    component: _a7f03ab2,
    name: "products-details-no-sidebar"
  }, {
    path: "/products/details/right-sidebar",
    component: _f3de3eb8,
    name: "products-details-right-sidebar"
  }, {
    path: "/page/account/auth/auth",
    component: _6645aa30,
    name: "page-account-auth-auth"
  }, {
    path: "/shop/jewellery/components/category",
    component: _013a185a,
    name: "shop-jewellery-components-category"
  }, {
    path: "/shop/jewellery/components/instagram",
    component: _036f9bf4,
    name: "shop-jewellery-components-instagram"
  }, {
    path: "/shop/jewellery/components/parallax-banner",
    component: _06cf8976,
    name: "shop-jewellery-components-parallax-banner"
  }, {
    path: "/shop/jewellery/components/product-slider",
    component: _2510cb5b,
    name: "shop-jewellery-components-product-slider"
  }, {
    path: "/shop/jewellery/components/product-tab",
    component: _081d5aea,
    name: "shop-jewellery-components-product-tab"
  }, {
    path: "/shop/jewellery/components/services",
    component: _0358888c,
    name: "shop-jewellery-components-services"
  }, {
    path: "/shop/jewellery/components/slider",
    component: _177c4bbd,
    name: "shop-jewellery-components-slider"
  }, {
    path: "/collection/leftsidebar/:id?",
    component: _247cc21a,
    name: "collection-leftsidebar-id"
  }, {
    path: "/product/sidebar/:id?",
    component: _9ce4e9f4,
    name: "product-sidebar-id"
  }, {
    path: "/products/details/:id?",
    component: _70365373,
    name: "products-details-id"
  }, {
    path: "/products/:id",
    component: _8eb83762,
    name: "products-id"
  }, {
    path: "/",
    component: _00c4bccb,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
