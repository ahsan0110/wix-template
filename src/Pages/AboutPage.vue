<template>
    <NavBar />
    <HeroComponent bgImage="/headphone.jpg" title="LOCAL <br>THRIVE <br>SUCCESS" subtitle="Standout Projects"
        :showButton="false" :showPara="true"
        para="T. Kensington is a dynamic digital agency known for its innovative marketing strategies and impactful solutions. With a dedicated team of creative thinkers and data analysts, we specialize in SEO, PPC, social media, and content marketing to enhance brand visibility and drive conversions." />
    <Footer />

</template>

<script>
import HeroComponent from '../components/HeroComponent.vue';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue'

export default {
    name: 'AboutPage',
    components: { NavBar, HeroComponent, Footer }
}
</script>