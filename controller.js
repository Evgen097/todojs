$(document).ready(function(){
//json-server --watch db.json
    db.wokupHerokuDB();


$('#addtodo').on('submit', event =>{
    event.preventDefault();
    var text = $('#addtodo > input').val();
    if(text.length){
        todolist.addTodo(text);
        todolist.draw();
        $('#addtodo > input').val("");
    }


});

$('body').on('click', '.deleteTodo', event =>{
    event.preventDefault();
    var id = $(event.target).parent().attr('id');
    todolist.deleteTodo(id)
    todolist.draw();

});

$('body').on('click', '.editTodo, .cancelChange, .saveShange', event =>{
    event.preventDefault();

    var parent = $(event.target).parent();
    parent.find(".liinput").toggleClass('displaynone');
    parent.find(".liinputfield").focus();

    parent.find(".cancelChange").toggleClass('displaynone');
    parent.find(".saveShange").toggleClass('displaynone');

    parent.find(".deleteTodo").toggleClass('displaynone');
    parent.find(".editTodo").toggleClass('displaynone');

});


$('body').on('click', '.saveShange', event=>{
    event.preventDefault();
    var parent = $(event.target).parent();
    var id = parent.attr('id');
    var text = parent.find(".liinputfield").val()
    todolist.save(id, text)
});


$('body').on('click', '.licheck', event =>{
    var parent = $(event.target).parent();
    var id = parent.attr('id');
    todolist.changeChecked(id)
});


$('#loginform').submit(function(event){
    var formelems = $(this).find(':input');

    var id = formelems[0].value.trim().replace(/>/i, '').replace(/</i, '');
    var password = formelems[1].value.trim().replace(/>/i, '').replace(/</i, '');

    if(id.length && password.length){
        db.login(id, password);
    }

    formelems[0].value = id;
    formelems[1].value = '';
    return false;
});


userLogin = function(id, hash) {
    if (id && hash){
        $("#loginusername").find("span").text(id)

        $("#loginusername").toggleClass('displaynone');
        $("#loginform").toggleClass('displaynone');
        todolist.saveNotSaved();
        todolist.getTodosFromServer();
        $(".loader-container").toggleClass('displaynone');
        localStorage["name"] = id;
        localStorage["password"] = hash;

        return;
    }
};

removeLoader = function() {
        $('.loader-container').toggleClass('displaynone');
    }

isLogin = function() {
    var result = $("#loginusername").find("span").text();
    return result;
}


$("body").on("click", "#userLogout", (event)=>{
    event.preventDefault();
    var parent = $(event.target).parent();
    parent.find("span").text('');
    $("#loginusername").toggleClass('displaynone');
    $("#loginform").toggleClass('displaynone');

    localStorage["name"] = '';
    localStorage["password"] = '';

    todolist.deleteTodos();
})


});

























