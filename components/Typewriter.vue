<template>
  <div class="Typewriter">
    <p class="Typewriter__Text">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    text: {
      text: String,
      required: true
    }
  }
})
class Typewriter extends Vue {}

export default Typewriter
</script>

<style scoped>
.Typewriter {
  overflow: hidden;
  border-right: 0.1em solid var(--color-yellow);
  white-space: nowrap;
  margin: 0;
  padding: 0;
  letter-spacing: 0.1em;
  animation: typing 1s steps(32, end), blink-caret 0.75s step-end infinite;
}

.Typewriter__Text {
  width: 100%;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: var(--color-yellow);
  }
}
</style>
