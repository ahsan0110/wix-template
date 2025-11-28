<template>
    <div class="contact-form-section">
        <div class="contact-img">
            <img :src="imgSrc" alt="">
            <div v-if="showOverlay" class="img-overlay reveal">
                <p>{{ overlaySubtitle }}</p>
                <h1>{{ overlayTitle }}</h1>
            </div>
        </div>
        <div class="contact-form">
            <div class="contact-head reveal">
                <p>Get in Touch</p>
                <h1>CONTACT US</h1>
                <p>Have a question or need more information?</p>
                <p>Reach out to us using the form below.</p>
            </div>
            <div class="contact-input">
                <div class="input">
                    <label for="">First Name</label>
                    <input type="text" required>
                </div>
                <div class="input">
                    <label for="">Last Name</label>
                    <input type="text" required>
                </div>
                <div class="input">
                    <label for="">Email</label>
                    <input type="email" required>
                </div>
                <div class="input">
                    <label for="">Message</label>
                    <textarea type="text" required></textarea>
                </div>
                <div class="input">
                    <button class="btn">Submit</button>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ContactForm",
    props: {
        imgSrc: { type: String, default: "/sitting_person.png" },
        showOverlay: { type: Boolean, default: false },
        overlayTitle: { type: String, default: "" },
        overlaySubtitle: { type: String, default: "" }
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

<style>
.contact-img {
    border-radius: 20px;
    position: relative;
}

.img-overlay {
    position: absolute;
    top: 10%;
    left: 10%;
    text-align: left;
    color: white;
    width: 80%;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.img-overlay h1 {
    margin-top: 32px;
    font-size: 62px;
}

.img-overlay p {
    font-size: clamp(14px, 1.4vw, 32px)
}

@media (max-width: 1024px) {
    .img-overlay {
        top: 25%;
        left: 5%;
        width: 70%;
    }

    .img-overlay h1 {
        margin-top: 16px;
        font-size: 62px;
    }

    .img-overlay p {
        font-size: clamp(14px, 1.4vw, 32px);
    }
}

@media (max-width: 768px) {
    .img-overlay {
        top: 10%;
        left: 5%;
        width: 90%;
    }

}

@media (max-width: 480px) {
    .img-overlay {
        top: 15%;
        left: 5%;
        width: 90%;
    }

    .img-overlay h1 {

        font-size: 32px;
    }

}
</style>