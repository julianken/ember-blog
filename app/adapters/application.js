import DS from 'ember-data';
import ENV from 'ember-blog/config/environment';

export default DS.RESTAdapter.extend({
	host: ENV.APP.API_LOCATION
});
