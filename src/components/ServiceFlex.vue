<template>
    <section class="service-section">
        <div class="service-column">
            <div v-for="(item, i) in services" :key="i" class="column" :class="[
                i % 2 === 0 ? 'from-left' : 'from-right',
                visibleColumns[i] ? 'visible' : ''
            ]" :ref="el => columns[i] = el">
                <div class="x-img">
                    <img class="x" src="/close.png" width="70px" alt=""
                        :style="{ transform: `rotate(${rotation[i]}deg)` }">
                </div>
                <h1>{{ item.title }}</h1>
                <p>{{ item.text }}</p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "ServiceSection",

    data() {
        return {
            services: [
                { title: "SEO SERVICES", text: "Enhance your online presence and reach with our advanced SEO solutions." },
                { title: "PPC MANAGEMENT", text: "Drive instant traffic and conversions through targeted PPC campaigns." },
                { title: "SOCIAL MEDIA CAMPAIGNS", text: "Engage your audience with captivating social media strategies designed." },
                { title: "CONTENT MARKETING", text: "Tell your brand story effectively with expert content marketing." },
            ],
            visibleColumns: [],
            columns: [], // Vue will populate this AFTER render
            rotation: [0, 0, 0, 0] // store rotation for each X image
        };
    },

    mounted() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = this.columns.indexOf(entry.target);
                        if (index !== -1) this.visibleColumns[index] = true;
                    }
                });
            },
            { threshold: 0.3 }
        );

        // Wait until DOM refs are assigned
        this.$nextTick(() => {
            this.columns.forEach((el) => observer.observe(el));
        });
        let lastScroll = window.scrollY;

        this._scrollHandler = () => {
            const currentScroll = window.scrollY;
            const delta = currentScroll - lastScroll; // positive if scrolling down
            lastScroll = currentScroll;

            this.rotation = this.rotation.map((r, i) => {
                // Alternate direction
                const direction = i % 2 === 0 ? 1 : -1; // 1 = clockwise, -1 = counterclockwise
                return r + delta * 0.5 * direction;
            });
        };

        window.addEventListener("scroll", this._scrollHandler);
    }
};
</script>

<style>
.service-column {
    display: grid;
    gap: 32px;
}

.column {
    opacity: 0;
    transform: translateX(0px);
    transition: all .8s ease;
}

/* LEFT SLIDE */
.from-left {
    transform: translateX(-80px);
}

/* RIGHT SLIDE */
.from-right {
    transform: translateX(80px);
}

/* When visible */
.column.visible {
    opacity: 1;
    transform: translateX(0);
}
</style>