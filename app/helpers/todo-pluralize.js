import Ember from 'ember';

export function todoPluralize(params, hash) {
  var label = hash.label,
    suffix = hash.suffix || 's',
    count = hash.count,
    text = (count === 1 ? label : (label + suffix));

  return count + ' ' + text;
}

export default Ember.HTMLBars.makeBoundHelper(todoPluralize);
