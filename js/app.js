'use strict';

var app = app || {};
var ENTER_KEY = 13;

app.todoList = new app.TodoList();
app.router = new app.Router();
Backbone.history.start();
app.appView = new app.AppView();
