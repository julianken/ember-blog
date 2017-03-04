import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this._super();
  },
  currentPathDidChange: function() {
    Ember.$(window).scrollTop(0);
  }.observes('currentPath')
});
