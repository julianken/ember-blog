import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  activeClass: '',
  isActive: false,
  actions: {
    toggleMobileMenu() {
      if (this.isActive == false) {
        this.set('activeClass', 'active');
        this.set('isActive', true);
      } else {
        this.set('activeClass', '');
        this.set('isActive', false);
      }
    }
  }
});
