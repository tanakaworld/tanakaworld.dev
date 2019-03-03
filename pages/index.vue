<template>
  <section class="Container">
    <div class="Container__Inner">
      <typewriter class="Message" text="Work in Progress.." />
      <img
        v-if="!isHover"
        class="Icon"
        src="~/static/img/me-real-face-secret.png"
        alt="secret face icon of tanakaworld"
        @mouseenter="isHover = true"
      />
      <img
        v-else
        class="Icon"
        src="~/static/img/me-real-face.png"
        alt="secret face icon of tanakaworld"
        @mouseleave="isHover = false"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Typewriter from '~/components/Typewriter.vue'

@Component({
  components: {
    Typewriter
  }
})
class TopPage extends Vue {
  isHover = false
}

export default TopPage
</script>

<style scoped>
.Container {
  margin: 0;
  padding: calc(100vh / 10) 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.Icon {
  width: 160px;
  height: 160px;
  cursor: pointer;
}

.Message {
  margin: 16px 0;
}
</style>
