<template>
    <div class="start-drone">
        <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 222.8 131" style="enable-background:new 0 0 222.8 131;" xml:space="preserve">
        <linearGradient id="Forme_791_1_" gradientUnits="userSpaceOnUse" x1="1313.0352" y1="5108.3462" x2="1112.3405" y2="5173.5557" gradientTransform="matrix(1 0 0 1 -1088 -5076.5259)">
            <stop  offset="0" style="stop-color:#FF7F81;stop-opacity:0"/>
            <stop  offset="0.5" style="stop-color:#FF7F81"/>
        </linearGradient>
        <path id="Forme_791" class="st0 path1" d="M25.7,112.5c27.2,2.8,155.8,9.2,196.7-112.5h-12.1c0,0-32.9,113.8-183.6,101.2
            c-3.3-0.3-6.1,2.3-6.1,5.6l0,0C20.6,109.7,22.8,112.1,25.7,112.5z"/>
        <path id="Forme_7912" class="st0 path2" d="M25.7,112.5c27.2,2.8,155.8,9.2,196.7-112.5h-12.1c0,0-32.9,113.8-183.6,101.2
        c-3.3-0.3-6.1,2.3-6.1,5.6l0,0C20.6,109.7,22.8,112.1,25.7,112.5z"/>
        <g id="circle">
            <circle class="st1 knob" cx="24.9" cy="106.2" r="24.3"/>
            <path class="st2" d="M30.4,106.3c0,0.2-0.1,0.4-0.2,0.6l-9.3,9.3c-0.3,0.3-0.8,0.2-1.1-0.1c-0.3-0.3-0.3-0.7,0-1l8.8-8.8l-8.8-8.8
                c-0.3-0.3-0.3-0.8,0-1.1c0.3-0.3,0.8-0.3,1.1,0l9.3,9.4C30.3,105.9,30.4,106.1,30.4,106.3z"/>
        </g>

        </svg>
    </div>

</template>

<script>


    import {Draggable} from 'gsap/Draggable'

    export default {
        name: 'choose-an-landscape',
        props: ['landscape'],
        data() {
            return {
                show: false,
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
            unlockDrone() {
                var DEG = 180 / Math.PI;

                var D = document.createElement('div');
                TweenMax.set('svg', {overflow: "visible"})
                var w = document.querySelector("svg").getBoundingClientRect().width;
                var h = document.querySelector("svg").getBoundingClientRect().height;


                var tl = new TimelineMax({paused: true})
                //.from(".path2",1,{drawSVG:"0%",stroke:'orange',ease:Linear.easeNone})
                    .to('#circle', 1, {
                        bezier: {
                            type: "quadratic",
                            values: [{x: 0, y: 0, rotation: 0}, {x: 140, y: 0, rotation: 0}, {
                                x: 180,
                                y: -40,
                                rotation: -90
                            }]
                        }, ease: Linear.easeNone
                    }, 0);

                let that = this;
                this.drag = Draggable.create(D, {
                    trigger: "#circle",
                    type: 'x,y',
                    throwProps: true,
                    bounds: {minX: 0, maxX: 300},
                    onDrag: function () {
                        Update(this.x, that)
                    },
                });

                function Update(x, that) {
                    let thatDrag = that;
                    let percent = Math.abs(x / 200);
                    tl.progress(percent)

                    if(percent >= 1.0) {
                        thatDrag.drag[0].disable();
                        thatDrag.isUnlock()
                    }

                };

            },
            isUnlock() {
                this.$socket.emit('startDroneView', true)
                this.$router.push("commande")
            }


        },
        mounted() {
            this.unlockDrone();
        },
        beforeDestroy: function () {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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

    .draggerBounds {
        position: absolute;
        left: 30px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 250px;
        height: 50px;
        background: grey;
        margin: 20px;
        box-sizing: content-box;
    }

    .dragger {
        width: 50px;
        height: 50px;
        background: red;
        text-align: center;
        line-height: 50px;
        position: absolute;
    }

    .st0 {
        fill: url(#Forme_791_1_);
    }

    .st1 {
        fill: #FF767D;
    }

    .st2 {
        fill: #FFFFFF;
    }

    #Calque_1 {
        width: 222.8px;
        height: 131px;
    }

    #circle {
        position: relative;
        z-index: 10000;
    }
</style>
