<template>
    <NavBar />
    <HeroComponent />
    <Information />
    <HomeGrid />
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