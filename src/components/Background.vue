<template>
    <div class="background-vue">
        <div v-if="transitionBg" class="start-animation">
            <span :class="{ 'class-a': transitionBg, 'bg-transition blue' : true } "></span>
            <span class="bg-transition red transition-blue"></span>
        </div>
        <div v-else class="add-class">
            <span :class="{ 'class-a': transitionBg, 'bg-transition red' : true } "></span>
            <span class="bg-transition blue transition-red"></span>
        </div>
    </div>
</template>

<script>

    import * as THREE from 'three';

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
            }
        },
        methods: {
            // init() {
            //     this.clock = new THREE.Clock();
            //     this.renderer = new THREE.WebGLRenderer({ alpha: true,antialias: false });
            //     // this.renderer.setClearColor(0x1d1a19, 1);
            //     this.renderer.setSize(window.innerWidth, window.innerHeight);
            //
            //     this.scene = new THREE.Scene();
            //
            //     var ambientLight = new THREE.AmbientLight(0xccc2ae);
            //     this.scene.add(ambientLight);
            //
            //     this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
            //     this.camera.position.z = 1000;
            //     this.scene.add(this.camera);
            //
            //     this.geometry = new THREE.CubeGeometry(200, 200, 200);
            //     this.material = new THREE.MeshLambertMaterial({
            //         color: 0xaaa466,
            //         wireframe: false
            //     });
            //     this.mesh = new THREE.Mesh(this.geometry, this.material);
            //     //scene.add( mesh );
            //     this.cubeSineDriver = 0;
            //
            //     var textGeo = new THREE.PlaneGeometry(300, 300);
            //     THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
            //     var textTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/quickText.png');
            //     var textMaterial = new THREE.MeshLambertMaterial({
            //         color: 0x00ffff,
            //         opacity: 1,
            //         map: textTexture,
            //         transparent: true,
            //         blending: THREE.AdditiveBlending
            //     })
            //     var text = new THREE.Mesh(textGeo, textMaterial);
            //     text.position.z = 800;
            //     // scene.add(text);
            //
            //     // light = new THREE.DirectionalLight(0xffffff,0.5);
            //     // light.position.set(-1,0,1);
            //     // scene.add(light);
            //
            //     var smokeTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png');
            //     var smokeMaterial = new THREE.MeshLambertMaterial({
            //         color: 0x937268,
            //         opacity: 0.2,
            //         map: smokeTexture,
            //         transparent: true
            //     });
            //     var smokeGeo = new THREE.PlaneGeometry(300, 300);
            //     this.smokeParticles = [];
            //
            //     for (var p = 0; p < 150; p++) {
            //         var particle = new THREE.Mesh(smokeGeo, smokeMaterial);
            //         particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
            //         particle.rotation.z = Math.random() * 360;
            //         this.scene.add(particle);
            //         this.smokeParticles.push(particle);
            //     }
            //
            //     document.querySelector(".background-vue").appendChild(this.renderer.domElement);
            //     this.animate()
            // },
            // animate() {
            //     this.delta = this.clock.getDelta();
            //     requestAnimationFrame(this.animate.bind(this));
            //     this.evolveSmoke();
            //     this.render();
            //
            // },
            // evolveSmoke() {
            //     var sp = this.smokeParticles.length;
            //     while (sp--) {
            //         this.smokeParticles[sp].rotation.z += (this.delta * 0.2);
            //     }
            // },
            // render() {
            //     this.mesh.rotation.x += 0.005;
            //     this.mesh.rotation.y += 0.01;
            //     this.cubeSineDriver += .01;
            //     this.mesh.position.z = 100 + (Math.sin(this.cubeSineDriver) * 500);
            //     this.renderer.render(this.scene, this.camera);
            //
            // }
        },
        mounted() {

            // this.init();

            this.$root.$on('bg', (data) => {
                console.log("Salut");
                this.transitionBg = !this.transitionBg;
                setTimeout(() => {
                    document.querySelector(".add-class").classList.add('start-animation')
                }, 100)
            })

            // this.initCanvas();
            // this.canvasImg(bgBlue);
            // this.draw()

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
