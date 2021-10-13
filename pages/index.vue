<template>
  <div>
    <Jewellery />
  </div>
</template>

<script>
const Jewellery = () => import('./shop/jewellery')
export default {
  components: {
    Jewellery
  }
}
</script>
