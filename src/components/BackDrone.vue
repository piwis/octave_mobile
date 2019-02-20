<template>
    <div class="close-drone">
        <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 222.8 131" style="enable-background:new 0 0 222.8 131;" xml:space="preserve">
<linearGradient id="Forme_791_2_" gradientUnits="userSpaceOnUse" x1="1313.3785" y1="5313.522" x2="1112.6957" y2="5378.7275" gradientTransform="matrix(1 0 0 -1 -1088 5412.6758)">
	<stop  offset="0" style="stop-color:#FF7F81;stop-opacity:0"/>
	<stop  offset="0.5" style="stop-color:#FF7F81"/>
</linearGradient>
<path id="Forme_791_1_" class="st0" d="M21,24.1L21,24.1c0,3.3,2.8,5.9,6.1,5.6C177.8,17.2,210.7,131,210.7,131h12.1
	C181.9,9.3,53.2,15.7,26,18.5C23.2,18.8,21,21.2,21,24.1z"/>
<g id="circle">
	<circle class="st1" cx="24.3" cy="24.3" r="24.3"/>
	<path class="st2" d="M29.8,24.4c0,0.2-0.1,0.4-0.2,0.6l-9.3,9.3c-0.3,0.3-0.8,0.2-1.1-0.1c-0.3-0.3-0.3-0.7,0-1l8.8-8.8l-8.8-8.8
		c-0.3-0.3-0.3-0.8,0-1.1c0.3-0.3,0.8-0.3,1.1,0l9.3,9.4C29.7,24,29.8,24.2,29.8,24.4z"/>
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
                            values: [{x: 0, y: 0, rotation: 0}, {x: 170, y: 0, rotation: 0}, {
                                x: 240,
                                y: 110,
                                rotation: 90
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

                    if (percent >= 1.0) {
                        thatDrag.drag[0].disable();
                        thatDrag.goHome()
                    }

                };

            },
            goHome () {
                this.$emit('clicked', true)
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

    .close-drone {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .st0 {
        fill: url(#Forme_791_2_);
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
