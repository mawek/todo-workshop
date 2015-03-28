import Ember from 'ember';

export default Ember.Controller.extend({

  filter: null,

  filteredModel: function () {
    var model = this.get('model');

    if (!Ember.isEmpty(this.get('filter'))) {
      switch (this.get('filter')) {
        case 'all':
          return model;
        case 'completed':
          return model.filterBy('isCompleted', true);
        case 'not-completed':
          return model.filterBy('isCompleted', false);
        default:
          return model;
      }
    }

    return model;
  }.property('filter')
});
