<template>
  <div id="app">
    <main class="app-main">
      <transition name="fade"
                  mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <Background />
  </div>
</template>

<script>
    import courseData from "./assets/datas/courseData";
    import Background from '@/components/Background'
    import imgMontange from "./assets/img/isere.png"

    export default {
        name: 'app',
        components: {
            'Background': Background,
        },
        data() {
            return {
                transitionBg: true,
                index: 0,
                images: [
                    'https://68.media.tumblr.com/ba9e2dcf1289131bfae913ff85cc8e46/tumblr_omrhdiHNlD1u8in0ho1_1280.jpg',
                    'https://jp.vuejs.org/images/logo.png',
                    'https://jsfiddle.net/img/logo@2x.png'
                ],
                isLoad: false
            }
        },
        created() {
            this.loadImg()
            setTimeout(() => {
                // screen.orientation.lock();
                // screen.lockOrientation("orientation");
                // screen.lockOrientation("landscape-primary")

            })
        },
        methods: {
            loadImg() {
                this.isLoad = false
                this.$nextTick(() => {
                    this.url = this.images[this.index];
                    this.index = (this.index < this.images.length - 1) ? this.index + 1 : 0
                    console.log("Salut");
                })
            },
            loaded() {
                this.isLoad = true
            }
        },
        mounted() {
            this.$socket.emit("userPhone", true)

            this.queue = new createjs.LoadQueue();
            this.queue.installPlugin(createjs.Sound);
            this.queue.on('progress', onLoaderProgress, this);
            this.queue.on("complete", handleComplete, this);
            // this.queue.loadManifest()
            this.queue.loadFile({id:"image", src:imgMontange});

            function handleComplete() {
            }

            function onLoaderProgress(e) {
                console.log(e.progress * 100);
            }
        }
    }
</script>

<style lang="scss">
  @import './assets/scss/utils/variables';

  body, main, #app {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    &.green {
      background: #EEF9F3;
    }
  }
  main {
    position: relative;
    z-index: 100;
    text-align: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    -webkit-transition: background 500ms ease;
    -moz-transition: background 500ms ease;
    -ms-transition: background 500ms ease;
    -o-transition: background 500ms ease;
    transition: background 500ms ease;
  }
  main > div {
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-flow: column;
  }
  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
  }
  header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
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

  .light {
    @include f-muli-light;
  }
  .uppercase {
    text-transform: uppercase;
  }

  .extra-light {
    @include f-muli-extra-light;
  }

  .bold {
    @include f-muli-bold;
  }
  .dots-item {
    &.pulse {
      box-shadow: 0px 0px 50.6px 4.4px rgba(36, 27, 214, 0.65);
    }
  }
  path {
    -webkit-transition: opacity 300ms ease;
    -moz-transition: opacity 300ms ease;
    -ms-transition: opacity 300ms ease;
    -o-transition: opacity 300ms ease;
    transition: opacity 300ms ease;
    &.haut, &.bas {
      opacity: 0;
    }
    &.remove {
      opacity: 0;
    }
    &.opacity {
      opacity: 1;
    }
  }

</style>
