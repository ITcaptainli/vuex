<template>
  <div>
    <div class="homeDiv">
      <div class="homeName">{{this.$store.state.homeList.name}}</div>
      <div class="homeImage">
        <img :src="this.$store.state.homeList.imgSrc" />
      </div>
      <router-link tag="div" to="/active" class="active">换人</router-link>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>
  .homeName
    font-size: 0.18rem
    margin: 0.2rem 0
    text-align: center
  .homeImage
    width: 1.75rem
    margin: 0 auto
    img
      width: 1.75rem
      height: 1.75rem
  .active
    font-size: 0.14rem
    width: 1rem
    height: 0.3rem
    line-height: 0.3rem
    background: #666
    color: #fff
    text-align: center
    border-radius: 0.05rem
    margin: 0 auto
</style>
