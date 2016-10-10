import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr(),
  description: DS.attr(),
  image_path: DS.attr('string'),
  description_header: DS.attr(),
  tag_list: DS.attr()
});
