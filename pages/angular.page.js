'use strict';

var AngularPage = function () {
  browser.get('http://www.angularjs.org');
};

AngularPage.prototype = Object.create({}, {
    todoText: { get: function () { return element(by.model('todoList.todoText')); }},
    addButton: { get: function () { return element(by.css('[value="add"]')); }},
    todoList: { get: function () { return element.all(by.repeater('todo in todoList.todos')); }},
    todoAt: { value: function (idx) { return this.todoList.get(idx).getText(); }},
    addTodo: { value: 
        function (todo) 
        {
            this.todoText.sendKeys(todo);
            this.addButton.click();
        }
    }
});

module.exports = AngularPage;