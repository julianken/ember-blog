import Ember from 'ember';
import Prism from 'npm:prismjs';
import 'npm:prismjs/components/prism-ruby.js';

export default Ember.Component.extend({
  didInsertElement(){
    this._super();
    Prism.highlightAll();
    console.log('inserted');
  }
});
