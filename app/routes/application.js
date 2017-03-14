import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      blogs: this.store.findAll('blog'),
      header_text: 'Be sure to check back for new technical blogs! Get in contact with me if you have any questions <i class="em em-smile"></i>'
    });
  }
});
