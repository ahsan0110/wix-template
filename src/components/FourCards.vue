<template>
    <div class="cards-main-section">
        <div class="top-black-div">
            <p>Our Service</p>
            <h1>TAILORED MARKETING SOLUTIONS</h1>
        </div>
        <div class="black-div-cards">
            <div class="div-cards">
                <span class="span-line"></span>
                <p>01</p>
                <h2>SEO</h2>
                <p>Search Engine Optimization Strategies</p>
            </div>
            <div class="div-cards">
                <span class="span-line"></span>
                <p>02</p>
                <h2>PPC</h2>
                <p>Pay-Per-Click Management Expertise</p>
            </div>
            <div class="div-cards">
                <span class="span-line"></span>
                <p>03</p>
                <h2>SOCIAL MEDIA</h2>
                <p>Comprehensive Social Media Campaigns</p>
            </div>
            <div class="div-cards">
                <span class="span-line"></span>
                <p>04</p>
                <h2>CONTENT MARKETING</h2>
                <p>Engaging Content Strategies</p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lastScroll: 0,
            rotation: 0
        };
    },

    mounted() {
        this.lastScroll = window.scrollY;

        this._scrollHandler = () => {
            const current = window.scrollY;
            const delta = current - this.lastScroll;

            // Scroll down → positive rotation
            // Scroll up → negative rotation
            this.rotation += delta * 0.5;

            const lines = document.querySelectorAll(".span-line");
            lines.forEach(line => {
                line.style.transform = `rotate(${this.rotation}deg)`;
            });

            this.lastScroll = current;
        };

        window.addEventListener("scroll", this._scrollHandler);
    },

    beforeUnmount() {
        window.removeEventListener("scroll", this._scrollHandler);
    }
};

</script>