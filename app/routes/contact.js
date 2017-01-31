import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      blogs: this.store.findAll('blog'),
      header_text: '<div style="width: 100%; text-align:center"><i class="em em-wave hand-wave"></i></div>'
    });
  }
});
