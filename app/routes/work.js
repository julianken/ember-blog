import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      works: this.store.findAll('work'),
      header_text: 'Here are some projects and prototypes I\'ve been working on. Most of the agency projects I\'ve done have yet to ship, but I\'m happy to walk you through my code for them. <i class="em em-running"></i>'
    });
  }
});
