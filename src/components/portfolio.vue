<template>
    <div class="portfolio-container">
        <div v-for="(item, index) in portfolioItems" :key="index" :class="item.class" @click="goToSlider(item, index)">
            <img :src="item.src" :alt="item.alt" />
        </div>
    </div>
</template>

<script>
export default {
    name: "Portfolio",
    data() {
        return {
            portfolioItems: [
                { class: "black-white-1", src: "/blaclwhite.png", alt: "Black & White" },
                { class: "headphone-2", src: "/headphone.jpg", alt: "Headphone" },
                { class: "stains-3", src: "/stains.png", alt: "Stains" },
                { class: "lovely-day-5", src: "/lovely-day.png", alt: "Lovely Day" },
                { class: "bill-board-6", src: "/billboard.png", alt: "Billboard" },
                { class: "metro-4", src: "/metro.png", alt: "Metro" },
                { class: "glasses-7", src: "/glases.png", alt: "Glasses" },
                { class: "watch-8", src: "/watch.png", alt: "Watch" },
            ],
        };
    },
    methods: {
        goToSlider(item, index) {
            this.$router.push({ name: "Slider", query: { startIndex: index } });
        },
    },
};
</script>