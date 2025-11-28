<template>

    <div class="parent">
        <div class="div1 ">
            <div class="reveal">

                <h1>Our Story</h1>
                <p>T. Kensington is a top-tier digital marketing agency dedicated to providing specialized online branding
                    solutions and cutting-edge marketing strategies for small and mid-sized enterprises. With a team of
                    innovative thinkers and analytical experts, we excel in SEO, PPC, social media campaigns, and content
                    marketing, ensuring impactful outcomes for our clients.
                </p>
            </div>
        </div>
        <div class="div2 ">
            <div class="reveal">

                <h1>Our Mission</h1>
                <p>At T. Kensington, we strive to transform businesses by crafting unique and data-centric marketing
                    campaigns. Our project, 'Local Thrive,' exemplifies our commitment to driving engagement and
                    boosting
                    online visibility for our clients, resulting in remarkable growth and success. We take pride in our
                    ability to create compelling brand narratives that resonate with audiences, driving enhanced reach
                    and
                    conversions.

                </p>
            </div>
        </div>
        <div class="div3 ">
            <div class="reveal">

                <button id="learn-more-btn" class="btn">Learn More</button>
            </div>
        </div>
        <div class="div4">
            <img src="/purple_ni66a.png" alt="">
        </div>
        <div class="div5 ">
            <div class="reveal">

                <p>Client Testimonials</p>
                <h1>CLIENTS'<br>SUCCESS<br>STORIES</h1>
            </div>
        </div>
        <div class="div6 ">
            <div class="reveal stars">
                <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>

                <q>T. KENSINGTON'S EXPERTISE IN DIGITAL MARKETING IS UNMATCHED. THEIR STRATEGIES HAVE SIGNIFICANTLY
                    BOOSTED
                    OUR ONLINE PRESENCE AND CUSTOMER ENGAGEMENT.</q>
                <p>Maria Lopez</p>
            </div>

        </div>
    </div>

</template>

<script>
export default {
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