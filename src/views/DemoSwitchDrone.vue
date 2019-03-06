<template>
    <div class="start-drone">

        <div class="start">
            <p @click="startDrone">Start</p>
        </div>
        <div class="start">
            <p @click="stopDrone">Stop</p>
        </div>
    </div>

</template>

<script>


    import {Draggable} from 'gsap/Draggable'
    import BackDrone from '@/components/BackDrone'
    import ReadTuto from '@/components/ReadTuto'
    import * as UMath from "../utils/UMath";
    import Loader from '@/components/Loader'
    import {ColorData} from "../assets/datas/ColorData";
    import {TweenMax} from "gsap";

    export default {
        name: 'demo',

        data() {
            return {}
        },
        sockets: {},

        methods: {
            initGyroscope() {
                var args = {
                    frequency: 500,
                    gravityNormalized: true,
                    orientationBase: GyroNorm.GAME,
                    decimalCount: 2,
                    logger: null,
                    screenAdjusted: false
                };
                this.gn = new GyroNorm();
                this.gn.init(args).then(() => {
                    this.gn.start((data) => {
                            if (data.do.gamma > -90 && data.do.gamma < 0 && data.do.beta < 100 && data.do.beta > -100) {
                                this.posY = UMath.normalize(data.do.gamma, 0, -90);
                                this.posX = UMath.normalize(data.do.beta, -180, 180);
                                this.posY = UMath.normalize(this.posY, 1, 0.6)
                            } else if (data.do.gamma < 90 && data.do.gamma > 0 && data.do.beta < 100 && data.do.beta > -100) {
                                this.posY = UMath.normalize(data.do.gamma, 0, 90);
                                this.posX = UMath.normalize(data.do.beta, -180, 180);
                                this.posY = UMath.normalize(this.posY, 1, 0.6)
                            }

                            if (this.posY < 0) {
                                this.posY = 0
                            }

                            let objectRotation = null;
                            if (this.posX > 0.5) {
                                // EMIT GAUCHE
                                this.normalizeX = -1 * (UMath.normalize(this.posX, 1, 0.5));
                            } else {
                                // EMIT DROITE
                                this.normalizeX = UMath.normalize(this.posX, 0, 0.5);
                            }
                            this.$socket.emit("sendGyro", {
                                "forward": this.posY === this.lastPosY ? 0.0 : this.normalizeX < -0.08 || this.normalizeX > 0.08 ? 0 : this.posY,
                                "upOrDown": this.top / 2,
                                "rotation": this.normalizeX > 0 ? "right" : "left"
                            })
                            this.lastPosX = this.normalizeX
                            this.lastPosY = this.posY

                    });
                }).catch(function (e) {
                    console.log("Erreur", e);
                });

            },
            startDrone() {
                this.$socket.emit('startDroneView', true)
            },
            stopDrone() {
                this.$socket.emit("landingDrone", true)
            },
        },
        created() {
        },
        mounted() {

            this.initGyroscope()

        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../assets/scss/utils/variables';

    .start-drone {
        height: 100%;
        width: 100%;
        font-size: 20px;
        @include f-muli-bold;
        flex-flow: wrap;
        align-items: center;
        justify-content: space-between;
        display: flex;
        max-width: 400px;
        margin: 0 auto;
        p {
            cursor: pointer;
        }

    }

</style>
