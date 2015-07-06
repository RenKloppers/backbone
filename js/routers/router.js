'use strict';

var app = app || {};

app.Router = Backbone.Router.extend({
    routes: {
        '*filter': 'setFilter'
    },
    setFilter: function (params) {
        if(params === null) params = '#new-todo';
        //console.log('app.router.params = ' + params);
        window.filter = params.trim() || '';
        app.todoList.trigger('reset');
    }
});