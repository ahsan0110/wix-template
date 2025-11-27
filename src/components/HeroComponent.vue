<template>
    <section class="hero-section">
        <div ref="layer" class="hero-img-layer" :style="{ backgroundImage: `url(${bgImage})` }"></div>
        <div class="section-card">
            <h1 v-html="title"></h1>
            <h4>{{ subtitle }}</h4>
            <button class="btn" id="hero-btn">
                {{ buttonText }}
            </button>
        </div>
    </section>
</template>
<script>
export default {

    props: {
        bgImage: {
            type: String, default: "/hero.png"
        },
        title: {
            type: String,  default: "TAILORED<br>MARKETING <br>STRATEGIES"
        },
        subtitle: {
            type: String,
            default: "Empowering Businesses Digitally"
        },
        buttonText: {
            type: String,
            default: "Learn More"
        },

    },

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
