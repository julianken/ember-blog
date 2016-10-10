import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr(),
  description: DS.attr(),
  created_at: DS.attr('date')
});
