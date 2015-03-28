import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('todos', function() {
    this.route('completed');
    this.route('all');
    this.route('notCompleted');
  });
});

export default Router;
