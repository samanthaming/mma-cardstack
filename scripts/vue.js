const app = new Vue({
  el: '#app',
  data: {
    athletes:  data
  },
  methods: {
    collapse(id) {
      this.athletes.forEach(athlete => {

        if(athlete.id === id) {
          athlete.open = !athlete.open;
        } else {
          athlete.open = false;
        }
      });
    }
  }
});
