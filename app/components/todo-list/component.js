import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['todo-list'],
  todos: [],

  actions: {
    removeTodo: function (todo) {
      this.sendAction('removeTodo', todo);
    }
  }
});
