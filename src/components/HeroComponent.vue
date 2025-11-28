<template>
    <section class="hero-section">
        <div ref="layer" class="hero-img-layer" :style="{ backgroundImage: `url(${bgImage})` }"></div>
        <div class="section-card about-section">
            <div class="reveal">

                <h1 v-html="title"></h1>
                <h4>{{ subtitle }}</h4>
                <p v-if="showPara" class="hero-para">{{ para }}</p>
            </div>
            <button v-if="showButton" class="btn" id="hero-btn">
                {{ buttonText }}
            </button>
        </div>
    </section>
</template>
<script>
export default {
    name: "HeroComponent",
    props: {
        bgImage: {
            type: String, default: "/hero.png"
        },
        title: {
            type: String, default: "TAILORED<br>MARKETING <br>STRATEGIES"
        },
        subtitle: {
            type: String,
            default: "Empowering Businesses Digitally"
        },
        buttonText: {
            type: String,
            default: "Learn More"
        },
        showButton: {
            type: Boolean,
            default: true
        },
        showPara: {
            type: Boolean,
            default: false
        },
        para: {
            type: String,
            default: ""
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

};
</script>
