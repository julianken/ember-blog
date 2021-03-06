import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('blog', { path: '/' }, function() {
    this.route('show', { path: '/:id' });
  });
  this.route('work', function() {
    this.route('show', { path: '/:id' });
  });
  this.route('contact');
  this.route('resume');
});

export default Router;
