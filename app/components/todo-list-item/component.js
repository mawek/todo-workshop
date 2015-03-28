import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['todo-list-item'],
  
  actions: {
    removeTodo: function (todo) {
      this.sendAction('removeTodo', todo);
    }
  }
});
