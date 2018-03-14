import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
  init() {
    this._super();
  },
  currentPathDidChange: function() {
    Ember.$(window).scrollTop(0);
  }.observes('currentPath')
});
