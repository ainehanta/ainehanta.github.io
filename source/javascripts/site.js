// site.js

import Vue from 'vue'

import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/github'
import 'vue-awesome/icons/key'

import { Carousel, Slide } from 'vue-carousel'

Vue.component('icon', Icon)
Vue.component('carousel', Carousel)
Vue.component('slide', Slide)

window.Vue = Vue
