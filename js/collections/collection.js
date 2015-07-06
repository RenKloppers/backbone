'use strict';

var app = app || {};

app.TodoList = Backbone.Collection.extend({
    model: app.Todo,
    localStorage: new Store("backbone-todo"),
    completed: function () {
        return this.filter(function (todo) {
            return todo.get('completed');
        })
    },
    remaining: function () {
        return this.without.apply(this, this.completed());
    }
});