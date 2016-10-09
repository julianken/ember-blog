import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      blogs: this.store.findAll('blog'),
      header_text: '<i class="em em-wave"></i><i class="em em-wave"></i><i class="em em-wave"></i>'
    });
  }
});
