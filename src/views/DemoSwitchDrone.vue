<template>
    <div class="start-drone">

        <div class="start">
            <a href="#" @click="startDrone">
                Start
            </a>
        </div>
        <div class="start">
            <a href="#" @click="stopDrone">Stop</a>
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
            return {
                start: false,
            }
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
                        if (this.start) {


                            this.posX = UMath.normalize(data.do.beta, -180, 180);

                            if (this.posX > 0.5) {
                                this.normalizeX = -1 * (UMath.normalize(this.posX, 1, 0.5));
                            } else {
                                this.normalizeX = UMath.normalize(this.posX, 0, 0.5);
                            }

                            this.$socket.emit("sendGyro", {
                                "forward": 0,
                                "upOrDown": 0,
                                "rotation": 0,
                                "direction": this.normalizeX
                            })
                        }

                    });
                }).catch(function (e) {
                    console.log("Erreur", e);
                });

            },
            startDrone() {
                this.start = true;
                this.$socket.emit('startDrone', true)
                this.$socket.emit('startDroneView', true)
            },
            stopDrone() {
                this.start = false;
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

    a {
        text-decoration: none;
    }

</style>
