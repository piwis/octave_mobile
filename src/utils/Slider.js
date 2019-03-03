import {TweenMax} from 'gsap';
import lottie from 'lottie-web';

import avancer from "../assets/json/avancer.json";
import tourner from "../assets/json/tourner.json";
import rentrer from "../assets/json/rentrer.json";
import energie from "../assets/json/niveau_energie.json";

let jsonLottie = [
    avancer,
    tourner,
    rentrer,
    energie,
]

class Slide {
    constructor(el, settings) {
        this.DOM = {el: el};


        this.settings = {
            detailsEl: null,
            onHideDetails: () => {
                return false;
            }
        }

        Object.assign(this.settings, settings);


        if(this.settings.pos === 3) {
            this.lottie2 = lottie.loadAnimation({
                container: document.querySelector(".lottie-exit"),
                renderer: 'svg',
                autoplay: false,
                loop: true,
                animationData: jsonLottie[2]
            })
            console.log(this.lottie2);
        }
        this.DOM.titleWrap = this.DOM.el.querySelector('.slide-item-number');

        this.DOM.bodyMovin = this.DOM.el.querySelector('.lottie');
        if (this.DOM.bodyMovin) {
            this.lottie = lottie.loadAnimation({
                container: this.DOM.bodyMovin,
                renderer: 'svg',
                autoplay: false,
                loop: this.settings.pos === 3 || this.settings.pos === 2 ? false : true,
                animationData: jsonLottie[settings.pos]
            })
            if (this.settings.pos === 0) {
                this.lottie.play();
            }
        }
        // Some config values.
        this.config = {
            animation: {
                duration: 1,
                ease: Expo.easeInOut
            }
        };
    }

    stopLottie() {
        this.lottie.stop();
    }

    playLottie() {
        this.lottie.play();
    }

    // Sets the current class.
    setCurrent(isCurrent = true) {
        this.DOM.el.classList[isCurrent ? 'add' : 'remove']('slide--current');
    }

    // Hide the slide.
    hide(direction) {
        return this.toggle('hide', direction);
    }

    // Show the slide.
    show(direction) {
        return this.toggle('show', direction);
    }

    // Show/Hide the slide.
    toggle(action, direction) {
        return new Promise((resolve, reject) => {


            let revealerOpts = {
                delay: action === 'hide' ? 0 : this.config.animation.duration / 2,
                ease: this.config.animation.ease,
            };

            TweenMax.to(this.DOM.el, this.config.animation.duration, {
                delay: revealerOpts.delay,
                ease: this.config.animation.ease,
                opacity: action === 'hide' ? 0 : 1,
                onComplete: () => {

                    if (action === "show" && this.DOM.el.querySelector(".lottie") !== null) {
                        if (this.settings.pos === 3) {
                            this.lottie.play();

                            setTimeout(() => {
                                TweenMax.to(['.lottie-battery',".niveau .title"], 0.3, {
                                    autoAlpha: 0,
                                    onComplete: () => {
                                        TweenMax.to('.lottie-exit',0.3,{
                                            autoAlpha: 1,
                                            onComplete: () => {
                                                this.lottie2.play()
                                            },
                                        })
                                    },
                                })
                            }, 6000)
                        } else {
                            this.lottie.play();
                        }
                    } else if (this.DOM.el.querySelector(".lottie") !== null) {
                        this.stopLottie()
                    }

                    resolve();
                }
            });

        });
    }

}

class Navigation {
    constructor(el, settings, slide) {
        this.DOM = {el: el};

        this.slide = slide;
        this.settings = {
            next: () => {
                return false;
            },
            prev: () => {
                return false;
            },
            nextDots: () => {
                return false;
            }
        }
        Object.assign(this.settings, settings);

        // Navigation controls (prev and next)
        this.DOM.prevCtrl = document.querySelector('.boxnav__item--prev');
        this.DOM.nextCtrl = document.querySelector('.boxnav__item--next');
        this.DOM.dots = document.querySelectorAll('.dots-item');

        // The current and total pages elements.
        this.DOM.pagination = {
            current: document.querySelector('.boxnav__label--current'),
            total: document.querySelector('.boxnav__label--total')
        };
        this.initEvents();
    }

    setCurrent(isCurrent = true) {
        this.DOM.el.classList[isCurrent ? 'add' : 'remove']('slide--current');
    }

    setCurrent(val, isCurrent = true) {
        this.DOM.dots[val].classList[isCurrent ? 'add' : 'remove']('pulse');
        this.DOM.dots[val].classList.add('current');
    }


    initEvents() {
        this.DOM.prevCtrl.addEventListener('click', () => this.settings.prev());
        this.DOM.nextCtrl.addEventListener('click', () => this.settings.next());
    }
}

// The Slideshow class.
export default class Slideshow {
    constructor(el) {
        this.DOM = {el: el};
        // Initialize the navigation instance. When clicking the next or prev ctrl buttons, trigger the navigate function.
        this.navigation = new Navigation(document.querySelector('.boxnav'), {
            next: () => this.navigate('right'),
            prev: () => this.navigate('left'),
            nextDots: (index) => this.navigateDots(index)
        }, this);

        // The slides.
        this.slides = [];
        // Initialize/Create the slides instances.
        Array.from(this.DOM.el.querySelectorAll('.slide')).forEach((slideEl, pos) => this.slides.push(new Slide(slideEl, {
            pos,
            // this slide's details element.
            //detailsEl: this.DOM.details[pos],
            // When clicking the close details ctrl button call the closeDetailsBoxes function.
            onHideDetails: () => {
                if (this.isAnimating) return;
                this.isAnimating = true;
                this.closeDetailsBoxes().then(() => this.isAnimating = false);
            }
        })));
        // The total number of slides.
        this.slidesTotal = this.slides.length;

        this.current = 0;
        this.init();
    }

    // Set the current slide and initialize some events.
    init() {
        this.slides[this.current].setCurrent();
        this.initEvents();
    }

    initEvents() {
    }

    openDetailsBoxes() {
        if (this.isAnimating) return;
        this.isAnimating = true;
    }

    navigateDots(index) {
        // If animating return.
        if (this.isAnimating) return;
        if (index === this.current) return;
        this.isAnimating = true;

        // The next/prev slide´s position.
        const nextSlidePos = index
        // Close the details boxes (if open) and then hide the current slide and show the next/previous one.
        this.closeDetailsBoxes().then(() => {
            // Update the current page element.

            this.navigation.setCurrent(this.current, false);
            this.navigation.setCurrent(nextSlidePos, true);
            Promise.all([this.slides[this.current].hide(), this.slides[nextSlidePos].show()])
                .then(() => {
                    // Update current.
                    this.slides[this.current].setCurrent(false);
                    this.current = nextSlidePos;
                    this.slides[this.current].setCurrent();
                    this.isAnimating = false;
                });
        });

    }

    closeDetailsBoxes() {
        return new Promise((resolve, reject) => {
            // Overlay.
            resolve()
        });
    }

    // Navigate the slideshow.
    navigate(direction) {
        // If animating return.
        if (this.isAnimating) return;
        this.isAnimating = true;

        // The next/prev slide´s position.
        const nextSlidePos = direction === 'right' ?
            this.current < this.slidesTotal - 1 ? this.current + 1 : 0 :
            this.current > 0 ? this.current - 1 : this.slidesTotal - 1;

        // Close the details boxes (if open) and then hide the current slide and show the next/previous one.
        this.closeDetailsBoxes().then(() => {
            // Update the current page element.
            this.navigation.setCurrent(this.current, false);
            this.navigation.setCurrent(nextSlidePos, true);

            Promise.all([this.slides[this.current].hide(direction), this.slides[nextSlidePos].show(direction)])
                .then(() => {
                    console.log("Dans la promse");
                    // Update current.
                    this.slides[this.current].setCurrent(false);
                    this.current = nextSlidePos;
                    this.slides[this.current].setCurrent();
                    this.isAnimating = false;
                });
        });
    }
}


