<template>
    <div class="start-drone">

        <!--Avance {{this.posY}} <br>-->
        <!--Normal {{this.normalise}} <br>-->
        <transition-group name="fade" mode="out-in">
            <div key="1" v-if="!droneBack">
                <div class="drag-left">
                    <svg version="1.1" id="drag-vol" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 91.3 405" style="enable-background:new 0 0 91.3 405;" xml:space="preserve">
                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="860.15" y1="-5614.0601" x2="860.15" y2="-5253.0601" gradientTransform="matrix(1 0 0 -1 -799 -5214.0601)">
                    <stop  offset="0" style="stop-color:#FF7F81;stop-opacity:0"/>
                    <stop  offset="0.5" style="stop-color:#FF7F81"/>
                    <stop  offset="1" style="stop-color:#FF7F81;stop-opacity:0"/>
                </linearGradient>
                <path class="drag-vol-trait" d="M31,39h15.9c0,0,44.4,89.9,44.4,180c0,90.4-44.4,181-44.4,181H31c0,0,44.4-90.4,44.4-180.9
                    C75.4,129.1,31,39,31,39z"/>
                <g id="circle-vol">
                    <circle class="st1" cx="39" cy="39" r="39"/>
                    <path class="st2" d="M39.1,15.5c0.3,0,0.6,0.1,0.9,0.4l14.5,14.5c0.4,0.5,0.4,1.3-0.1,1.7s-1.1,0.4-1.6,0L39.1,18.4L25.4,32.1
                        c-0.5,0.5-1.2,0.5-1.7,0s-0.5-1.2,0-1.7l14.6-14.5C38.4,15.6,38.7,15.5,39.1,15.5z"/>
                    <path class="st2" d="M39,62.5c-0.3,0-0.6-0.1-0.9-0.4L23.6,47.6c-0.4-0.5-0.3-1.3,0.2-1.7c0.4-0.3,1-0.3,1.5,0L39,59.6l13.7-13.7
                        c0.5-0.4,1.3-0.4,1.7,0.1c0.4,0.5,0.4,1.1,0,1.6L39.9,62.1C39.6,62.4,39.3,62.5,39,62.5z"/>
                </g>
                </svg>
                </div>
                <div class="stop-drone" @click="backHomeDrone">
                    <svg version="1.1" id="stop-drone-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 76 76" style="enable-background:new 0 0 76 76;" xml:space="preserve">
                <circle class="st00" cx="38" cy="38" r="38"/>
                <path class="st11" d="M41.6,54.3h-5.9c-0.9,0-1.7-0.7-1.7-1.7V40.3c0-0.9,0.7-1.7,1.7-1.7h5.9c0.9,0,1.7,0.7,1.7,1.7v12.4
                    C43.3,53.6,42.5,54.3,41.6,54.3z"/>
                <line class="st22" x1="13.7" y1="57.2" x2="63.6" y2="57.2"/>
                <polygon class="st33" points="38.6,16.1 16.2,34.8 23,34.8 23,53.5 54.1,53.5 54.1,34.8 60.6,34.8 "/>
                </svg>
                    <span>
                    Rentrer
                </span>
                </div>
                <p class="icon-tuto" @click="showTutoFunction" v-if="!this.endDrone">
                    ?
                </p>
                <transition name="fade" mode="out-in">
                    <BackDrone v-show="backHome" @clicked="goHome"></BackDrone>
                </transition>
            </div>
            <ReadTuto key="2" v-else-if="droneBack && !droneBackHome"/>
            <div key="3" v-else-if="droneBack && droneBackHome" class="droneBack">
                <Loader text="Je rentre ..."></Loader>
            </div>
        </transition-group>

        Avance : {{this.posY}} <br>
        Gauche ou droite : {{this.posY}} <br>
        Montrer : {{this.top / 2}} <br>
    </div>

</template>

<script>


    import {Draggable} from 'gsap/Draggable'
    import BackDrone from '@/components/BackDrone'
    import ReadTuto from '@/components/ReadTuto'
    import * as UMath from "../utils/UMath";
    import Loader from '@/components/Loader'

    export default {
        name: 'choose-an-landscape',
        props: ['landscape'],

        components: {
            BackDrone,
            ReadTuto,
            Loader
        },
        data() {
            return {
                show: false,
                backHome: false,
                showTuto: false,
                endDrone: false,
                top: false,
                UMath: UMath,
                droneBack: false,
                droneBackHome: false,
                lastPosX: 0,
                lastPosY: 0,
                posX: 0,
                posY: 0,
                posZ: 0,
                landscapeOrientation: false,
                city: this.landscape
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
            pilotDrone() {
                Draggable.create(".coucou", {type: "rotation", throwProps: true});
                var DEG = 180 / Math.PI;

                var D = document.createElement('div');
                TweenMax.set('svg', {overflow: "visible"})
                var w = document.querySelector("svg").getBoundingClientRect().width;
                var h = document.querySelector("svg").getBoundingClientRect().height;


                var tl = new TimelineMax({paused: true})
                //.from(".path2",1,{drawSVG:"0%",stroke:'orange',ease:Linear.easeNone})
                    .to('#circle-vol', 1, {
                        bezier: {
                            type: "quadratic",
                            values: [
                                {
                                    x: 0,
                                    y: 0,
                                    rotation: 0
                                },
                                {
                                    x: 85,
                                    y: 280,
                                    rotation: 0
                                }, {
                                    x: 0,
                                    y: 320,
                                }]
                        }, ease: Linear.easeNone
                    }, 0);

                let that = this;

                var StartX, StartY;

                this.drag = Draggable.create(D, {
                    trigger: "#circle-vol",
                    type: 'x,y',
                    throwProps: true,
                    onThrowUpdate: true,
                    onRelease: function () {
                        TweenLite.to(this.target, 0, {
                            x: 0, y: 135.0, onComplete: () => {
                                that.top = 0
                                tl.progress(.5)
                            }
                        })
                    },
                    bounds: {minY: 0, maxY: 300},
                    onDrag: function () {
                        Update(this.y, that)
                    },
                });

                function Update(y, that) {
                    let thatDrag = that;
                    let percent = Math.abs(y / 270);
                    tl.progress(percent)
                    if (percent > 0.5 && percent < 1) {
                        // DESCENTE
                        thatDrag.top = thatDrag.UMath.normalize(percent, 0, 0.5)
                    } else if (percent < 0.5) {
                        thatDrag.top = thatDrag.UMath.normalize(percent, 0, 0.5)
                    }
                    // emit
                };

                TweenLite.to(this.drag[0].target, 1, {
                    x: 0, y: 135.0, onComplete: () => {
                        tl.progress(.5)
                    }
                })

            },
            rotationScreen() {
                var supportsOrientationChange = "onorientationchange" in window,
                    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

                window.addEventListener(orientationEvent, () => {
                    if (window.orientation === 90 || window.orientation === -90) {
                        this.landscapeOrientation = true;
                    } else {
                        this.landscapeOrientation = false;
                    }
                }, false);
            },
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
                        if (this.landscapeOrientation) {
                            if (data.do.gamma > -90 && data.do.gamma < 0 && data.do.beta < 100 && data.do.beta > -100) {
                                this.posY = UMath.normalize(data.do.gamma, 0, -90);
                                this.posX = UMath.normalize(data.do.beta, -180, 180);
                            } else if (data.do.gamma < 90 && data.do.gamma > 0 && data.do.beta < 100 && data.do.beta > -100) {
                                this.posY = UMath.normalize(data.do.gamma, 0, 90);
                                this.posX = UMath.normalize(data.do.beta, -180, 180);
                            }



                            let objectRotation = null;

                            if (this.posX > 0.5) {
                                // EMIT GAUCHE
                                this.normalizeX = UMath.normalize(this.posX, 0.5, 1);
                                objectRotation = {
                                    "actionType": ".sparkGimbalEvent",
                                    "actionName": ".clockwise",
                                    "speed": this.normalizeX === this.lastPosX ? 0.0 : this.normalizeX
                                }
                            } else {
                                // EMIT DROITE
                                this.normalizeX = UMath.normalize(this.posX, 0, 0.5);
                                objectRotation = {
                                    "actionType": ".sparkRotation",
                                    "actionName": ".counterClockwise",
                                    "speed": this.normalizeX === this.lastPosX ? 0.0 : this.normalizeX
                                }
                            }

                            this.$socket.emit("sendGyro", {
                                "forward":  this.posY === this.lastPosY ? 0.0 : this.posY,
                                "upOrDown": this.top / 2,
                                "rotation": this.normalizeX
                            })

                            this.lastPosX = this.normalizeX
                            this.lastPosY = this.posY


                        } else {
                            this.posX = data.do.gamma
                        }


                    });
                }).catch(function (e) {
                    console.log("Erreur", e);
                });

            },
            backHomeDrone() {
                // Emit qui stop le drone en vol
                this.droneBackHome = true
                this.backHome = true
                this.$socket.emit("stopWaitDrone", true)
                this.gn.stop()
            },
            goHome(value) {
                if (value) {
                    this.backHome = false
                    this.droneBack = true
                    this.endDrone = true
                    this.$socket.emit("stopByUserDrone", true)
                    this.$emit("backHomeDrone", true)
                    setTimeout(() => {
                        this.$router.push('download')
                    }, 2000)
                    // Emit la personne va rependre le controle + ecran de fin
                }
            },
            showTutoFunction() {
                this.droneBack = true

            }


        },
        mounted() {

            if (window.orientation === 90 || window.orientation === -90) {
                this.landscapeOrientation = true;
            } else {
                this.landscapeOrientation = false;
            }

            this.pilotDrone();
            this.rotationScreen();
            this.initGyroscope();
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../assets/scss/utils/variables';

    .start-drone {
        > div {
            height: 100%;
            width: 100%;
        }
    }

    #circle-vol {
    }

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

    p {
        display: block;
    }

    .draggerBoundsCommand {
        position: absolute;
        left: 30px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 50px;
        height: 250px;
        background: grey;
        margin: 20px;
        box-sizing: content-box;
    }

    .draggerCommand {
        width: 50px;
        height: 50px;
        background: red;
        text-align: center;
        line-height: 50px;
        position: absolute;
        bottom: 0;
    }

    #drag-vol {
        width: 94px;
        max-height: 320px;
        height: 100%;
        position: absolute;
        left: 30px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .drag-vol-trait {
        opacity: 0.8;
        fill: url(#SVGID_1_);
        enable-background: new;
    }

    .st1 {
        fill: #FF767D;
    }

    .st2 {
        fill: #FFFFFF;
    }

    .salut {
        position: absolute;
        top: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        -o-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        width: 300px;
        height: 400px;
        border: 10px solid red;
        border-radius: 300px;
    }

    .coucou {
        position: absolute;
        height: 100%;
        width: 40px;
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 40px;
            height: 40px;

        }
    }

    .st00 {
        fill: #FF7F81;
    }
    .st11 {
        fill: #FFFFFF;
    }
    .st22 {
        fill: none;
        stroke: #FFFFFF;
        stroke-width: 1.2873;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
    }
    .st33 {
        fill: none;
        stroke: #FFFFFF;
        stroke-width: 1.9309;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
    }

    .stop-drone {
        position: absolute;
        right: 30px;
        bottom: 30px;
        display: flex;
        flex-flow: column;

        svg {
            width: 76px;
            height: 76px;
        }
        span {
            margin-top: 10px;
            @include f-muli-bold;
            color: $red;
        }
    }

    .icon-tuto {
        margin: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 30px;
        top: 30px;
        @include f-muli-bold;
        color: $red;
        width: 40px;
        height: 40px;
        border: 1px solid $red;
        border-radius: 40px;
        line-height: 1;
        font-size: 30px;
    }

</style>
