<template>
    <NavBar />
    <BlackCard />
    <HeroComponent bgImage="/headphone.jpg" title="LOCAL <br>THRIVE <br>SUCCESS" subtitle="Standout Projects"
        :showButton="false" :showPara="true"
        para="T. Kensington is a dynamic digital agency known for its innovative marketing strategies and impactful solutions. With a dedicated team of creative thinkers and data analysts, we specialize in SEO, PPC, social media, and content marketing to enhance brand visibility and drive conversions." />

    <CoWorkers />
    <TwoImg />

    <HeroComponent bgImage="/blaclwhite.png" title="DRIVING<br>SUCCESS" subtitle="Our Mission" :showButton="false"
        :showPara="true"
        para="Our mission is to create data-driven marketing campaigns that resonate with audiences, boost online traffic, and elevate brand recognition. We aim to transform businesses with compelling storytelling and outcome-focused strategies." />
    <Footer />

</template>

<script>
import HeroComponent from '../components/HeroComponent.vue';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue'
import BlackCard from '../components/BlackCard.vue';
import CoWorkers from '../components/CoWorkers.vue';
import TwoImg from '../components/TwoImg.vue';

export default {
    name: 'AboutPage',
    components: { NavBar, HeroComponent, Footer, BlackCard, CoWorkers,TwoImg }
}
</script>