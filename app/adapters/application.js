import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://poligap-api.herokuapp.com/'
});
