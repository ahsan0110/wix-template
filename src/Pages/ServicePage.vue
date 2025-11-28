<template>
    <NavBar />
    <div class="service-hero reveal">
        <p>Our Approach</p>
        <h1>TAILORED MARKETING <br>SOLUTIONS</h1>
        <p>Empower your brand with our strategic expertise.</p>
    </div>

    <ServiceFlex />
    <Footer />

</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue'
import ServiceFlex from '../components/ServiceFlex.vue';



export default {
    name: 'ServicePage',
    components: {
        NavBar, Footer, ServiceFlex,
    },
    mounted() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.2 }
        );

        document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }

}
</script>