import { test } from 'qunit';
import moduleForAcceptance from 'ember-blog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | work');

test('visiting /work', function(assert) {
  visit('/work');

  andThen(function() {
    assert.equal(currentURL(), '/work');
  });
});
