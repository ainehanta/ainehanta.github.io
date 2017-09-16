// site.js

import Vue from 'vue'

import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/github'
import 'vue-awesome/icons/key'

import { Carousel, Slide } from 'vue-carousel'
import { MediaQueries, CommonBands } from 'vue-media-queries'

const mediaQueries = new MediaQueries({
  bands: CommonBands.Bulma
})

Vue.use(mediaQueries)

Vue.component('icon', Icon)
Vue.component('carousel', Carousel)
Vue.component('slide', Slide)

window.Vue = Vue

new Vue({
  el: '#content',
  mediaQueries: mediaQueries,
  mixins: [CommonBands.Bulma.mixin]
});
