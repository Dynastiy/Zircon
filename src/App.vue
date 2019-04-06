<template>
  <div id="app">
    <div id="fh5co-page">
      <headNav/>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import headNav from './components/layout/headNav'
import Footer from './components/layout/footer'
export default {
  components: {
    headNav,
    Footer
  }
};
</script>

<style>
</style>

