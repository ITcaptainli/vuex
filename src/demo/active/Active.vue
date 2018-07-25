<template>
  <div>
    <div class="activeDiv">
      <div class="activeDivTitle">当前选择：<span>{{this.$store.state.homeList.name}}</span></div>
      <div class="activeDivSel">
        请选择姓名
      </div>
      <ul>
        <li v-for="item in homeList" :key="item.id" @click="activeClick({
          'name': item.name,
          'imgSrc': item.imgSrc
        })">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Active',
  data () {
    return {
      homeList: [
        {
          id: 1,
          name: 'Lee',
          imgSrc: 'http://demo.zmblogs.com/vue/vuexDemo/images/lee.jpg'
        },
        {
          id: 2,
          name: 'Rise',
          imgSrc: 'http://demo.zmblogs.com/vue/vuexDemo/images/rise.jpg'
        },
        {
          id: 3,
          name: 'Ending',
          imgSrc: 'http://demo.zmblogs.com/vue/vuexDemo/images/ending.jpg'
        },
        {
          id: 4,
          name: 'Luoqing',
          imgSrc: 'http://demo.zmblogs.com/vue/vuexDemo/images/luoqing.jpg'
        },
        {
          id: 5,
          name: 'Link',
          imgSrc: 'http://demo.zmblogs.com/vue/vuexDemo/images/link.jpg'
        }
      ]
    }
  },
  methods: {
    activeClick (data) {
      this.$store.dispatch('seleteName', data)
      setTimeout(() => {
        this.$router.push('/')
      }, 300)
    }
  }
}
</script>

<style lang='stylus' scoped>
  .activeDivTitle
    font-size: 0.16rem
    font-weight: bold
    margin: 0.1rem 0 0.1rem 0.1rem
    span
      font-size: 0.14rem
      font-weight: normal
      color: blue
  .activeDivSel
    font-size: 0.14rem
    margin: 0.1rem
  ul
    overflow: hidden
    zoom: 1
    margin: 0.1rem
    li
      font-size: 0.14rem
      float: left
      list-style: none
      padding: 0.05rem 0.2rem
      border: 0.01rem dotted red
      border-radius: 0.05rem
      margin: 0 0.05rem 0.05rem 0
</style>
