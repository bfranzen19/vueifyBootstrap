console.log('shiz be linked')

Vue.component('my-jumbotron', {
  template: `
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-3"> {{h1text}} </h1>
      <p class="lead"> {{ptext}} </p>
    </div>
  </div>
  `,
  props: ['h1text', 'ptext'],

})


var mainVM = new Vue ({
  el: '#app',
  data: {},
})  // end of vue mainVM
