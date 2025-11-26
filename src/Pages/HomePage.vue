<template>
    <NavBar />
    <HeroComponent />
    <Information />
    <HomeGrid />
    <Information topText="Our Process" heading="EFFICIENT WORKFLOW" 
    bottomText="Our process involves a strategic blend of creativity and analytics to deliver tailored marketing solutions that drive results." />

</template>
<script>
import HeroComponent from '../components/HeroComponent.vue';
import HomeGrid from '../components/HomeGrid.vue';
import Information from '../components/Information.vue';
import NavBar from '../components/NavBar.vue';

export default {
    name: 'HomePage',
    components: { NavBar, HeroComponent, Information, HomeGrid },
}

</script>