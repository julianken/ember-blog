import Ember from 'ember';

export default Ember.Controller.extend({
  blogsSortingDesc: ['id:desc'],
  sortedBlogsDesc: Ember.computed.sort('model.blogs', 'blogsSortingDesc')
});
