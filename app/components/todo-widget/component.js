import Ember from 'ember';

export default Ember.Component.extend({
  todos: [],
  newTodoTitle: null,

  actions: {
    addNewTodo: function () {
      var newTodoTitle = this.get('newTodoTitle');

      this.get('todos').pushObject(
        Ember.Object.create({
          title: newTodoTitle,
          isCompleted: false
        })
      );

      this.set('newTodoTitle', '');
    }
  }
});
