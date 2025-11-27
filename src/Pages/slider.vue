<template>
    <NavBar />
    <div class="slider-container">
        <div class="slider-wrapper">
            <div class="slide" v-for="(img, index) in images" :key="index" :class="{ active: index === currentIndex }">
                <img :src="img" alt="Slide Image" />
            </div>
        </div>

        <!-- Navigation buttons -->
        <button class="prev" @click="prevSlide">&#10094;</button>
        <button class="next" @click="nextSlide">&#10095;</button>

        <!-- Indicators -->
        <div class="dots">
            <span v-for="(img, index) in images" :key="index" class="dot" :class="{ active: index === currentIndex }"
                @click="goToSlide(index)"></span>
        </div>
    </div>

    <Footer />
</template>

<script>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';

export default {
    name: "ImageSlider",
    components: {
        NavBar, Footer
    },
    data() {
        return {
            images: [
                "/stains.png",
                "/metro.png",
                "/lovely-day.png",
                "/cream.png",
                "/billboard.png",
                "/blaclwhite.png",
                "/Earing.png",
                "/flex.png",
                "/glases.png",
                "/guldier.png",
                "/headphone.jpg",
            ],
            currentIndex: 0,
            interval: null,
        };
    },
    mounted() {
        window.scrollTo({ top: 0, behavior: "smooth" });

        const start = parseInt(this.$route.query.startIndex);
        if (!isNaN(start)) {
            this.currentIndex = start;
        }
        
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
    methods: {
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevSlide() {
            this.currentIndex =
                (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        goToSlide(index) {
            this.currentIndex = index;
        },
        
    },
};
</script>

<style scoped>
.slider-container {

    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: auto;
    margin-top: 50px;
    overflow: hidden;
    border-radius: 12px;
    height: clamp(300px, 50vw, 500px);
    /* responsive height */
}

.slider-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.slide.active {
    opacity: 1;
    z-index: 1;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* all images same size */
    display: block;
}

.prev,
.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    color: rgb(0, 0, 0);
    border: none;
    padding: 12px;
    cursor: pointer;
    border-radius: 50%;
    font-size: 32px;
    z-index: 2;
}

.prev {
    left: 16px;
}

.next {
    right: 16px;
}

.dots {
    position: absolute;
    bottom: 12px;
    width: 100%;
    text-align: center;
    z-index: 2;
}

.dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 0 6px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.dot.active {
    background-color: white;
}
</style>
