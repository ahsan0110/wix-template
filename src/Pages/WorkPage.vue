<template>
    <NavBar/>
   <BlackCard
    para="Portfolio"
    title="EXPLORE OUR <br>SUCCESSFUL PROJECTS"
   />
   <Portfolio/>
   <Portfolio2/>
    <Footer/>
    
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import BlackCard from '../components/BlackCard.vue';
import Portfolio from '../components/portfolio.vue';
import Portfolio2 from '../components/Portfolio2.vue';


    export default{
        name:'WorkPage',
        components:{ NavBar, Footer, BlackCard,Portfolio, Portfolio2}
    }
</script>