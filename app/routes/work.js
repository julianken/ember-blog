import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      works: this.store.findAll('work'),
      header_text: 'Here are some projects and prototypes I\'ve been working on! Some are personal projects I\'ve worked on with friends, and others are client works while at agencies.<i class="em em-running"></i>'
    });
  }
});
