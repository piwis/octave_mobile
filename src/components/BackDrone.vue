<template>
    <div class="close-drone">

		<transition name="fade" mode="out-in">
			<div class="bloc1" key="1"  v-if="!droneBackHome">
				<span class="close bold" @click="annulerBackHome">
					Annuler
				</span>
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

				<p class="bold">
					Renter ?
				</p>
			</div>
			<div key="2" v-else-if="droneBackHome" class="droneBack">
				<Loader text="Je rentre ..."></Loader>
			</div>
		</transition>
    </div>
</template>

<script>


    import {Draggable} from 'gsap/Draggable'
    import Loader from '@/components/Loader'

    export default {
        name: 'choose-an-landscape',
        props: ['landscape'],

        components: {
            Loader
        },
        data() {
            return {
                droneBackHome: false,
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

                this.droneBackHome = true;
                this.$socket.emit("landingDrone", true)
                this.$emit("backHomeDrone", true)
            },
            annulerBackHome() {
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

	.bold {
		font-size: 20px;
		color: #FF767D;
		margin-bottom: 0;
	}
	#Calque_1 {
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
		width: 100%;
		max-width: 250px;
    }

    #circle {
        position: relative;
        z-index: 10000;
    }
	.close {
		z-index: 1000000;
		font-size: 20px;
		line-height: 1;
		margin: 0;
		color: #FF767D;
		position: absolute;
		right: 30px;
		top: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		&:after {
			content: '';
			margin-left: 14px;
			display: inline-block;
			position: relative;
			width: 20px;
			height: 20px;
			-webkit-background-size: cover;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			background-image: url("data:image/svg+xml,%3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='croix' fill='%23FF7F81' fill-rule='nonzero'%3E%3Cpath d='M19.4384615,0.349019608 C19.1403103,0.0551735798 18.667382,0.0551735798 18.3692308,0.349019608 L9.85769231,9.01960784 L1.32692308,0.349019608 C1.02142183,0.135878385 0.610354477,0.174825021 0.348601047,0.441710871 C0.086847617,0.708596722 0.0486499542,1.12772422 0.257692308,1.43921569 L8.61538462,9.96470588 L0.257692308,18.4901961 C0.0486499542,18.8016875 0.086847617,19.220815 0.348601047,19.4877009 C0.610354477,19.7545867 1.02142183,19.7935334 1.32692308,19.5803922 L9.83846154,10.8941176 L18.3692308,19.5803922 C18.674732,19.7935334 19.0857994,19.7545867 19.3475528,19.4877009 C19.6093062,19.220815 19.6475039,18.8016875 19.4384615,18.4901961 L11.0769231,9.96470588 L19.4384615,1.43921569 C19.7266567,1.13521834 19.7266567,0.653016953 19.4384615,0.349019608 Z' id='Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
		}
	}
</style>
