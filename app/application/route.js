import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return [
      Ember.Object.create({
        title: 'first todo',
        isCompleted: false
      }),
      Ember.Object.create({
        title: 'second todo',
        isCompleted: false
      }),
      Ember.Object.create({
          title: 'third todo',
          isCompleted: false
        }
      ),
      Ember.Object.create({
          title: 'fourth todo',
          isCompleted: true
        }
      )
    ];
  }
});
