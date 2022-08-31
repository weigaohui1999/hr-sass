<template>
  <div>
    <svg-icon style="color:#fff; width: 20px; height: 20px" icon-class="fullscreen"  @click="changeScreen"/>
  </div>
</template>

<script>
import ScreenFull from 'screenfull'
export default {
  name: 'index',
  methods: {
    changeScreen() {
      // document.documentElement.requestFullscreen() 原生
      if(!ScreenFull.isEnabled) {
        return this.$message.warning('全屏不可用！！！')
      }
      ScreenFull.toggle() // 切换全屏
    }
  }
}
</script>

<style scoped>

</style>
