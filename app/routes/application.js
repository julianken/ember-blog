import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      blogs: this.store.findAll('blog'),
      header_text: 'Hi, I\'m Julian Kennon, a web developer currently living in Phoenix, AZ. <i class="em em-sunny"></i><i class="em em-sunglasses"></i> I\'m currently doing client work but looking for full-time opportunities at a startup or software company.'
    });
  }
});
