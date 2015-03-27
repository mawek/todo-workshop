import Ember from 'ember';

export default Ember.Component.extend({
  todos: [],
  newTodoTitle: null,

  actions: {
    addNewTodo: function () {
      var newTodoTitle = this.get('newTodoTitle');

      this.get('todos').insertAt(0,
        Ember.Object.create({
          title: newTodoTitle,
          isCompleted: false
        })
      );

      this.set('newTodoTitle', '');
    },

    removeTodo(todo) {
      this.get('todos').removeObject(todo);
    }
  }
});
