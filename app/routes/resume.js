import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return 'Hi, I\'m Julian Kennon, a software engineer currently living in Bend, OR. <i class="em em-snowflake"></i> ' +
      'I\'m currently doing client work but looking for full-time opportunities at a startup or software company.';
  }
});
