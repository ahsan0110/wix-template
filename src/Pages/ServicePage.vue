<template>
    <NavBar />
    <div class="service-hero">
        <p>Our Approach</p>
        <h1>TAILORED MARKETING <br>SOLUTIONS</h1>
        <p>Empower your brand with our strategic expertise.</p>
    </div>
    <Footer />

</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue'


export default {
    name: 'ServicePage',
    components: {
        NavBar, Footer
    }
}
</script>