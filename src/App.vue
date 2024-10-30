<script>
import Header from './components/Header.vue'
import HomePage from './components/HomePage.vue'
import WorkoutsPage from './components/WorkoutsPage.vue'
import Footer from './components/Footer.vue'

export default { 
  name: "app", 
  components: { 
    Header, 
    
    Footer, 
  },
};
</script>

<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>