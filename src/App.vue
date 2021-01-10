<template lang="pug">
  #app
    pmHeader

    router-view

    pmFooter
</template>

<script>

import PmFooter from '@/components/layout/Footer'
import PmHeader from '@/components/layout/Header'

export default {
  name: 'app',
  components: { PmFooter, PmHeader }
}
</script>

<style lang="scss">
@import './scss/main.scss';

.results {
  margin-top: 50px;
}

.is-active {
  border: 3px solid #48c775;
}
</style>
