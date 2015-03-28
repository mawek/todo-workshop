import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['todo.isCompleted:completed', ':todo-list-item'],

  actions: {
    removeTodo: function (todo) {
      this.sendAction('removeTodo', todo);
    }
  }
});
