<template>
    <section class="hero-section">
        <div ref="layer" class="hero-img-layer"></div>
        <div class="section-card">
            <h1>TAILORED <br>MARKETING <br>STRATEGIES</h1>
            <h4>Empowering Businesses Digitally</h4>
            <button id="hero-btn" class="btn">Explore More</button>
        </div>
    </section>
</template>
<script>
export default {
    mounted() {
        const layer = this.$refs.layer;
        let offset = 0;
        const maxShift = 80;
        let ticking = false;

        const update = () => {
            layer.style.transform = `translateX(${offset}px)`;
            ticking = false;
        };

        this._scrollHandler = () => {
            const scroll = window.scrollY;

            // absolute parallax, not delta-based drifting
            offset = scroll * -0.1;

            // clamp
            offset = Math.max(-maxShift, Math.min(maxShift, offset));

            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        };

        window.addEventListener("scroll", this._scrollHandler);
    },

    beforeUnmount() {
        window.removeEventListener("scroll", this._scrollHandler);
    }
};
</script>
