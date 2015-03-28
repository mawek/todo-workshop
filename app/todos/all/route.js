import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function (controller, model) {
    this._super(controller, model);

    var appController = this.controllerFor('application');
    appController.set('filter', 'all');
  }
});
