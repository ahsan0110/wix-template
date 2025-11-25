<template>
    <NavBar />
    <HeroComponent />
</template>
<script>
import HeroComponent from '../components/HeroComponent.vue';
import NavBar from '../components/NavBar.vue';

export default {
    name: 'HomePage',
    components: { NavBar, HeroComponent },
}

</script>