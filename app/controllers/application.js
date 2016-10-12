import Ember from 'ember';

export default Ember.Controller.extend({
  currentPathDidChange: function() {
    Ember.$(window).scrollTop(0);
  }.observes('currentPath')
});
