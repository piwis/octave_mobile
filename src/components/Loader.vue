<template>
    <div class="loader">
        <svg version="1.1" id="load" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	    viewBox="0 0 934.8 429" style="enable-background:new 0 0 934.8 429;" xml:space="preserve">
        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="11.107" y1="212.8624" x2="1287.713" y2="212.8624">
            <stop  offset="0" style="stop-color:#FF7F81"/>
            <stop  offset="0.729" style="stop-color:#FF7F81;stop-opacity:0"/>
            <stop  offset="1" style="stop-color:#FF7F81"/>
        </linearGradient>
        <path class="st0 draw" d="M11,0c84.1,242.7,338.1,419,638.4,419s554.3-176.3,638.4-419"/>
        </svg>

        <p>{{this.texte}}</p>
    </div>

</template>

<script>

    import {TimelineMax} from "gsap"

    export default {

        name: 'choose-an-landscape',
        props: ['text'],
        data() {
            return {
                show: false,
                texte: this.text
            }
        },
        sockets: {
            connect() {
            },
            disconnect() {
            },
            // On attend la connection du drone
        },

        methods: {

            closeDecision() {

            },
            goToConnectDrone() {
                this.show = true
                // Lancer EMIT pour se connecter au drone

                // Réponse du drone en haut dans socket
                // Simulation connexion
                setTimeout(() => {

                })

            }

        },
        mounted() {

            if (this.texte === "Je me prépare ...") {
                var tl = new TimelineMax();
                tl.fromTo(".draw", 10, {drawSVG: 0}, {drawSVG: "40%"}, 0);
                setTimeout(() => {
                    tl.stop();
                    TweenMax.to(".draw", 2, {drawSVG: "100%"}, 0);
                }, 1000)
                // DRONE START
            } else {
                var tl = new TimelineMax();
                tl.fromTo(".draw", 10, {drawSVG: 0}, {drawSVG: "40%"}, 0);
                setTimeout(() => {
                    tl.stop();
                    TweenMax.to(".draw", 2, {drawSVG: "50%"}, 0);

                // DRONE FINISH
                }, 1000)
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../assets/scss/utils/variables';

    .choose-an-landscape {
        background: white;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        &--close {
            background: red;
            width: 20px;
            height: 20px;
            position: absolute;
            left: 0;
            top: 0;
        }
    }

    load {
        position: absolute;
        left: 0;
        top: 0;
        -webkit-transform: scale(0.7);
        -moz-transform: scale(0.7);
        -ms-transform: scale(0.7);
        -o-transform: scale(0.7);
        transform: scale(0.7);
    }

    #load {
        width: 100%;
        max-width: 600px;
        position: absolute;
        left: 0;
        top: 0;
    }

    .st0 {
        fill: none;
        stroke: url(#SVGID_1_);
        stroke-width: 20;
    }

    p {
        @include f-muli-bold;
        color: $red;
        display: block;
        position: absolute;
        font-size: 25px;
        bottom: 40px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
    }
</style>
