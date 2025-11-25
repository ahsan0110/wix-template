<template>
    <div class="navbar">
        <div class="heading" @click="homePage">
            <h1>T. KENSINGTON</h1>
        </div>
        <!-- Hamburger Button -->
        <button class="hamburger" @click="toggleMenu">
            <span :class="{ open: isOpen }"></span>
            <span :class="{ open: isOpen }"></span>
            <span :class="{ open: isOpen }"></span>
        </button>

        <!-- Desktop + Mobile Menu -->
        <div class="pages" :class="{ active: isOpen }">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/about">About</router-link>
            <router-link class="link" to="/services">Services</router-link>
            <router-link class="link" to="/work">Our Work</router-link>
            <router-link class="link" to="/contact">Contact</router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: 'NavBar',

    data() {
        return {
            isOpen: false
        }
    },

    methods: {
        homePage() {
            this.$router.push({ name: 'HomePage' });
        },
        toggleMenu() {
            this.isOpen = !this.isOpen
        },
    }
}
</script>