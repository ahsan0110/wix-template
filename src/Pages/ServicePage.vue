<template>
    <NavBar/>
    
    <Footer/>
    
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue'


    export default{
        name:'ServicePage',
        components:{
            NavBar, Footer
        }
    }
</script>