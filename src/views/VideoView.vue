<template>
    <div class="choose-landscape">
        <video></video>
    </div>
</template>

<script>

    import {TweenMax} from "gsap"
    export default {
        name: 'understand-introduction-view',

        data() {
            return {
                video: null,
                ms: null,
            }
        },
        sockets: {
            video: function (data) {
                console.log(data);
                // var sourceBuffer = ms.addSourceBuffer('video/webm; codecs="vorbis,vp8"');
                // sourceBuffer.appendBuffer(oneVideoWebMChunk);
            }
        },

        methods: {
        },

        mounted() {
            this.ms = new MediaSource();
            this.video = document.querySelector('video');
            this.video.src = window.URL.createObjectURL(this.ms);
        }

    };
</script>


<style lang="scss" scoped>
    .bloc-landscape {
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        height: 100vh;
        max-height: 500px;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        max-width: 800px;
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
        box-sizing: border-box;
    }

    .bloc-landscape--item {
        width: 48%;
        height: 50%;
        position: relative;
        .btn {
            width: 100%;
            max-width: 200px;
            padding: 15px 15px 15px 15px !important;
            height: 52px;
            box-sizing: border-box;
        }

        &:nth-of-type(1) {
            .bloc-landscape--item-square {
                background-position: top left;
                top: -20px;
                background-image: url(../assets/img/territoires/oisans.png);
            }
            .bloc-landscape--item-text {
                position: absolute;
                right: 20px;
                bottom: 40px;
            }
        }
        &:nth-of-type(2) {
            .bloc-landscape--item-square {
                background-position: top right;
                top: -20px;
                background-image: url(../assets/img/territoires/grésivaudan.png);
            }
            .bloc-landscape--item-text {
                position: absolute;
                left: 20px;
                bottom: 20%;
            }

        }
        &:nth-of-type(3) {
            .bloc-landscape--item-square {
                background-position: bottom left;
                top: 20px;
                background-image: url(../assets/img/territoires/vercors.png);
            }
            .bloc-landscape--item-text {
                position: absolute;
                right: 20px;
                top: 40px;
            }

        }
        &:nth-of-type(4) {
            .bloc-landscape--item-square {
                background-position: bottom right;
                top: 20px;
                background-image: url(../assets/img/territoires/porte-des-alpes.png);
            }
            .bloc-landscape--item-text {
                position: absolute;
                left: 20px;
                top: 40px;
            }

        }
        &-square {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            -webkit-background-size: cover;
            background-size: cover;
            background-repeat: no-repeat;
            margin-bottom: 10px;

        }
        &-text {
            display: block;
            margin: 0 auto;

        }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }

</style>
