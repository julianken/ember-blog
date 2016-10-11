import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  activeClass: '',
  isActive: false,
  uncomputedNavTitle: '',
  mobileNavTitle: Ember.computed('uncomputedNavTitle', function(){
    var title = this.get('uncomputedNavTitle');
    title = title.split('.')[0].toUpperCase();
    return title;
  }),
  mobileNavTitleChanged: Ember.observer('router.currentRouteName', function(){
    this.set('uncomputedNavTitle', this.get('router.currentRouteName'));
  }),
  init: function() {
    this._super();
    Ember.$(window).resize(function(){
      var width = $(window).width();
      if (width > 768 && this.get('isActive') === true) {
        this.set('activeClass', '');
        Ember.$('.app-content').removeClass('active-mobile-body');
        Ember.$('.header').removeClass('active-mobile-header');
        this.set('isActive', false);
      }
    }.bind(this));
    this.set('uncomputedNavTitle', this.get('router.currentRouteName'));
  },
  actions: {
    toggleMobileMenu() {
      if (this.isActive === false) {
        this.set('activeClass', 'active');
        Ember.$('.app-content').addClass('active-mobile-body');
        Ember.$('.header').addClass('active-mobile-header');
        this.set('isActive', true);
      } else {
        this.set('activeClass', '');
        Ember.$('.app-content').removeClass('active-mobile-body');
        Ember.$('.header').removeClass('active-mobile-header');
        this.set('isActive', false);
      }
    },
    closeMobileMenu() {
      this.set('activeClass', '');
      Ember.$('.app-content').removeClass('active-mobile-body');
      Ember.$('.header').removeClass('active-mobile-header');
      Ember.$(window).scrollTop(0);
      this.set('isActive', false);
    },
  }
});
