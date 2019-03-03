<template>
    <div class="background-vue">
        <!--<div v-if="transitionBg" class="start-animation">-->
        <!--<span :class="{ 'class-a': transitionBg, 'bg-transition blue' : true } "></span>-->
        <!--<span class="bg-transition red transition-blue"></span>-->
        <!--</div>-->
        <!--<div v-else class="add-class">-->
        <!--<span :class="{ 'class-a': transitionBg, 'bg-transition red' : true } "></span>-->
        <!--<span class="bg-transition blue transition-red"></span>-->
        <!--</div>-->
    </div>
</template>

<script>

    import * as THREE from 'three';
    import {TweenMax} from "gsap"
    import imgSmoke from "../assets/img/smoke.png"

    export default {
        name: 'background-vue',
        data() {
            return {
                transitionBg: true,
                img: null,
                mask: null,
                canvasTransition: null,
                imgTransition: null,
                maskTransition: null,
                iTransition: 0,
                i: 0,
                camera: null,
                scene: null,
                renderer: null,
                geometry: null,
                material: null,
                mesh: null,
                cubeSineDriver: null,
                delta: null,
                clock: null,
                smokeParticles: [],
                oldColor: null,
            }
        },
        methods: {
            init() {
                this.clock = new THREE.Clock();
                this.renderer = new THREE.WebGLRenderer({alpha: true, antialias: false});
                this.renderer.setClearColor(0xFFFFFF, 1.0);
                this.oldColor = 0xFEF4EB;
                // this.renderer.setClearColor(0xb9e3c3, 1);
                this.renderer.setSize(window.innerWidth, window.innerHeight);

                this.scene = new THREE.Scene();

                this.ambientLight = new THREE.AmbientLight(0xB8B0FD);
                this.scene.add(this.ambientLight);

                this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
                this.camera.position.z = 1000;
                this.scene.add(this.camera);

                //scene.add( mesh );
                this.cubeSineDriver = 0;

                THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS

                var smokeTexture = THREE.ImageUtils.loadTexture(imgSmoke);
                this.smokeMaterial = new THREE.MeshLambertMaterial({
                    color: 0xB8B0FD,
                    opacity: 1.0,
                    map: smokeTexture,
                    side: THREE.FrontSide,
                    transparent: true,
                });
                this.smokeLigthMaterial = new THREE.MeshLambertMaterial({
                    color: 0xCEDDFE,
                    opacity: .70,
                    side: THREE.FrontSide,
                    map: smokeTexture,
                    transparent: true
                });

                var smokeGeo = new THREE.PlaneGeometry(600, 600);

                this.smokeParticles = [];
                this.smokeParticlesLigth = [];

                for (var p = 0; p < 10; p++) {
                    var particle = new THREE.Mesh(smokeGeo, this.smokeMaterial);
                    particle.scale.x = 600;
                    particle.scale.y = 600

                    particle.scale.set(1, 1, 1);

                    let posX = 0;
                    let posY = 0;
                    let posZ = 0;

                    let w = window.innerWidth
                    let h = window.innerHeight

                    // BON POUR LES PLACEMENT
                    if (p === 0 || p === 1 || p === 2) {
                        if (p === 0) {
                            posX = -(w / 2) - 600
                            posY = h / 2 - 100
                            posZ = 600
                        } else if (p === 1) {
                            posX = -(w / 2) * 1.5
                            posY = 30
                            posZ = 600
                        } else {
                            posX = -(w / 2) - 100
                            posY = (h / 2)
                            posZ = 600
                        }
                    }
                    if (p === 3 || p === 4 || p === 5) {
                        if (p === 3) {
                            posX = (w / 2) + 250
                            posY = h / 2 - 100
                            posZ = 600
                        } else if (p === 4) {
                            posX = (w / 2) + 100
                            posY = h / 2 + 100
                            posZ = 600
                        } else {
                            posX = (w / 2) + 100
                            posY = h / 2 + 100
                            posZ = 600
                        }
                    }
                    if (p === 6 || p === 7 || p === 8 || p === 9 || p === 10) {
                        if (p === 6) {
                            posX = -(w / 2) - 200
                            posY = -(h / 2) - 200
                            posZ = 600
                        } else if (p === 7) {
                            posX = 0
                            posY = -(h / 2) - 120
                            // center bottom
                            posZ = 800
                        } else if (p === 8) {
                            posX = (w / 2) - 50
                            posY = -(h / 2) - 50
                            posZ = 800
                        } else if (p === 9) {
                            posX = -(w / 2) + 100
                            posY = -(h / 2) - 250
                            posZ = 600
                        } else if (p === 10) {
                            posX = (w / 2) - 100
                            posY = -(h / 2) - 200
                            posZ = 600
                        }
                    }

                    // X Va vers la droite en positif
                    // Y Va vers la haut en positif
                    // Z Profondeur
                    particle.position.set(posX, posY, posZ);
                    particle.rotation.z = 600;
                    // particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
                    // particle.rotation.z = Math.random() * 360;
                    this.scene.add(particle);
                    this.smokeParticles.push(particle);
                }

                // MILIEUX
                // for (var p = 0; p < 3; p++) {
                //     var particle = new THREE.Mesh(smokeGeo, this.smokeLigthMaterial);
                //     particle.scale.x = 600;
                //     particle.scale.y = 600
                //
                //     particle.scale.set(1, 1, 1);
                //
                //     let posX = 0;
                //     let posY = 0;
                //     let posZ = 0;
                //
                //     let w = window.innerWidth
                //     let h = window.innerHeight
                //
                //     // BON POUR LES PLACEMENT
                //     if (p === 0) {
                //         posX = 0
                //         posY = -100
                //     } else if (p === 1) {
                //         posX = 200
                //         posY = -100
                //
                //     } else if (p === 2) {
                //         posX = -200
                //         posY = -100
                //     }
                //
                //     // X Va vers la droite en positif
                //     // Y Va vers la haut en positif
                //     // Z Profondeur
                //     particle.position.set(posX, posY, 800);
                //     particle.rotation.z = 600;
                //     // particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
                //     // particle.rotation.z = Math.random() * 360;
                //     this.scene.add(particle);
                //     this.smokeParticlesLigth.push(particle);
                // }


                document.querySelector(".background-vue").appendChild(this.renderer.domElement);

                var supportsOrientationChange = "onorientationchange" in window,
                    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
                window.addEventListener(orientationEvent, this.onWindowResize.bind(this), false);
                this.animate()
            },
            animate() {
                this.delta = this.clock.getDelta();
                requestAnimationFrame(this.animate.bind(this));
                this.evolveSmoke();
                this.render();

            },
            evolveSmoke() {
                var sp = this.smokeParticles.length;
                while (sp--) {
                    this.smokeParticles[sp].rotation.z += Math.random() * (this.delta * 0.06);
                }
                var sp = this.smokeParticlesLigth.length;
                while (sp--) {
                    this.smokeParticlesLigth[sp].rotation.z += Math.random() * (this.delta * 0.06);
                }
            },
            render() {
                this.renderer.render(this.scene, this.camera);
            },
            onWindowResize() {
                this.renderer.setSize(window.innerWidth, window.innerHeight);
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();
            },

            changeColorOfMaterial(color) {
                TweenMax.to([this.smokeMaterial.color, this.ambientLight.color], 1, {
                    r: color.r,
                    g: color.g,
                    b: color.b,
                })
            },
            changeOpacityOfMaterial(value) {
                TweenMax.to(this.smokeLigthMaterial, 1, {
                    opacity: 0,
                })
            }
        },
        mounted() {

            this.init();

            this.$root.$on('transitionBackground', (data) => {
                this.changeColorOfMaterial(data);
            })
            this.$root.$on('opacityBackground', (data) => {
                this.changeOpacityOfMaterial(data);
            })


        }
        ,
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .background-vue {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        width: 100%;
        overflow: hidden;
        height: 100%;
    }

    #canvasTransition {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1000;
    }

    .CSScanvas {
        position: relative;
        width: 800px;
        height: 600px;
    }

    .img {
        width: 800px;
        height: 600px;
        position: absolute;
        top: 0;
        left: 0;
    }

    .start-animation {
        .transition-red, .transition-blue {
            -webkit-mask: url("../assets/img/rend.png");
            mask: url("../assets/img/rend.png");
            -webkit-mask-size: 2300% 100%;
            mask-size: 2300% 100%;
            -webkit-animation: mask-play 1.4s steps(22) forwards;
            animation: mask-play 1.4s steps(22) forwards;

        }
    }

    .bg-transition {
        z-index: 1;
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        &.blue {
            background-image: url("../assets/img/bg-blue.jpg");
        }
        &.red {
            background-image: url("../assets/img/bg-red.jpg");
        }
        @keyframes mask-play {
            from {
                -webkit-mask-position: 0% 0;
                mask-position: 0% 0;
            }
            to {
                -webkit-mask-position: 100% 0;
                mask-position: 100% 0;
            }
        }
    }

</style>
