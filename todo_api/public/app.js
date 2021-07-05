$('document').ready(function () {
    $.getJSON("/api/todo")
    .then(addTodo);

    $('#todoInput').keypress(function (e) { 
        if(e.which == 13) {
            // if enter key is pressed send request to insert new todo
            createTodo();
        }
    });

    $('.list').on('click', 'li', function (e) { 
        updateTodo($(this));
    });

    $('.list').on('click', 'span', function (e) { 
        e.stopPropagation();
        deleteTodo($(this).parent());
    });
})

function deleteTodo(parent) {
    var id = parent.data('id');        
    var deleteUrl = "/api/todo/" + id;
    $.ajax({
        method: "DELETE",
        url: deleteUrl,
    })
    .then(function(data){
        parent.remove();
        console.log(data);
    })
    .catch(function(err) {
        console.log(err); 
    })
}

function addTodo(todos) {
    todos.forEach(function(data) {
        addItem(data);
    });
}   

function addItem(data) {
    var appendTodo = $(`<li class="task">${data.name}<span>X</span></li>`);
    appendTodo.data('id',data._id);
    appendTodo.data('completed', data.complete);
    if(data.complete) {
        appendTodo.addClass("done");
    }
    $('.list').append(appendTodo);
}

function createTodo() {
    // send post request to api to insert new todo
    var inputData = $('#todoInput').val();
    $.post("/api/todo", {
        name:inputData
    })
    .then(function(newTodo) {
        $('#todoInput').val('')
        addItem(newTodo)
    })
    .catch(function(err) {
        console.log(err);
    })
}

function updateTodo(parent) {
    var updateURL = "/api/todo/" + parent.data('id');
    var isDone = !parent.data('completed');
    var putData = { complete : isDone };
    console.log(putData);
    $.ajax({
        method: "PUT",
        url: updateURL,
        data: putData,
    })
    .then(function(data) {
        parent.toggleClass("done");
        parent.data('completed', isDone);
    })
    .catch(function(err) {
        console.log(err);
    })
}