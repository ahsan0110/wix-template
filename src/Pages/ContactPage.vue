<template>
    <NavBar />
    <ContactForm img-src="/purple_gradient.png" :show-overlay="true" overlay-title="GET IN TOUCH WITH US TODAY

" overlay-subtitle="Contact us" />


    <Footer />

</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue'
import ContactForm from '../components/ContactForm.vue'


export default {
    name: 'ContactPage',
    components: {
        NavBar, Footer, ContactForm,
    }
}
</script>