
var userLogin;
var isLogin;
var todolist;
var removeLoader;

var port = 3000;

var host = "http://"+window.location.hostname;
host = "https://gentle-coast-68586.herokuapp.com/";
// console.log('host: ', host)


var db = {
    // domen: host + ":" + port + "/",

    domen: host,

    saveTodo: function(todo){
        var owner = isLogin();
        if (owner) {
            todo.owner = owner;
            $.post(this.domen + "todos", todo)
                .done(function (data) {
                })
                .fail((jqxhr, textStatus, error) => {
                    this.errorMessage("Невозможно сохранить Todo")
                });
        }
    },

    deleteTodo: function(id){

        if(isLogin()){
            var url = this.domen + "todos/"+id;
            $.ajax({
                type: 'delete',
                url: url,
            })
                .done(function( data ) {
                })
                .fail(( jqxhr, textStatus, error )=> {
                    this.errorMessage("Невозможно удалить Todo на сервере")
                });
        }
    },

    updateTodo: function(id, todo){

        if (isLogin()) {
            todo.owner = isLogin();
            var url = this.domen + "todos/" + id;
            $.ajax({
                type: 'PUT',
                url: url,
                data: todo
            })
                .done(function (data) {
                })
                .fail((jqxhr, textStatus, error) => {
                    this.errorMessage("Невозможно сохранить изменения")
                });
        }
    },

    getTodos(){

            var owner = isLogin();
            if (owner){
                $.getJSON( this.domen +"todos" )
                    .done( data => {
                        var result = data.filter(item => item.owner === owner)
                        todolist.addTodosFromServer(result);
                    })
                    .fail(( jqxhr, textStatus, error )=> {
                        this.errorMessage("У вас нет сохраненных Todos")
                        removeLoader()
                    })
                    .always(function() {
                        removeLoader()
                    });
            }

    },

    errorMessage(message=""){

        $('#errormassage').text( 'Ошибка на сервере! ' + message);
        $('.bs-component').css('display', 'block')

         var showEror = setTimeout( ()=>{
            $('.bs-component').css('display', 'none');
            $('#errormassage').text('');
        }, 5000)

    },

    login(id, password){

        $.getJSON( this.domen +"users/" + id )
            .done( data => {
                if(password === data.password){
                    userLogin(data.id, data.password);
                }else {
                    userLogin(data.id, false);
                    this.errorMessage("Извините неверный пароль для пользователя " + id)
                }

            })
            .fail(( jqxhr, textStatus, error )=> {

                var obj = {id, password};

                $.post( this.domen +"users/", obj)
                    .done(function( data ) {
                        userLogin(id, password);
                    })
                    .fail(( jqxhr, textStatus, error )=> {
                        this.errorMessage("Невозможно создать пользователья")
                    });
            });




    },

    wokupHerokuDB(){
        $.getJSON( this.domen +"todos" )
            .done( data => {

            })
            .fail(( jqxhr, textStatus, error )=> {

            })
            .always(function() {

            });


    }


}


























