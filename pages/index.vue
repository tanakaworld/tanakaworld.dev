<template>
  <section class="Container">
    <div>
      <h1>
        TANAKAWORLD.DEV
      </h1>
      <h2>
        NO PIXEL NO LIFE
      </h2>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo
  }
})
class TopPage extends Vue {}

export default TopPage
</script>

<style>
.Container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
