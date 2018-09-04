

class Todolist{
    constructor(){
        this.todos = [];
        this.init();
    }

    init(){
        // if ( isLogin() ){
        //     db.getTodos();
        // }
    }

    getTodosFromServer(){
        db.getTodos();
    }

    get createId(){
        var id = '';
        for (var i=0; i<10; i++){id += Math.floor( Math.random() * 10 );}
        return id;
    }

    addTodo(text){
        text = text.replace(/>/i, '').replace(/</i, '');
        var todo = new Todo(text, this.createId, this.todos.length+1 )
        this.todos.push(todo);
        db.saveTodo(todo);
    }


    draw(){
        this.deleteFromDom();
        this.todos.forEach( (item, i) => item.setIndex(i+1))
        this.todos.forEach(item => item.create())
    }

    deleteFromDom(){
        $('.todo').remove();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(item => item.id !== id);
        db.deleteTodo(id);
        this.draw();
    }

    save(id, text){
        this.todos.forEach( item => {
            if(item.getID === id){
                item.edit(text);
                this.draw();
                db.updateTodo(id, item)
                return
            }
        })
    }

    changeChecked(id){
        this.todos.forEach( item => {
            if(item.getID === id){
                item.setChecked();
                this.draw();
                db.updateTodo(id, item)
                return
            }
        })
    }

    deleteTodos(){
        this.todos = [];
        this.draw();
    }

    addTodosFromServer(data){
        data.forEach( (item, i) => {
            this.todos.push( new Todo(item.text.replace(/>/i, '').replace(/</i, ''), item.id.slice(3), i+1, item.checked)  )
        });
        this.draw();
    }

    saveNotSaved(){
        this.deleteFromDom();
        this.todos.forEach(item => db.saveTodo(item));
        this.todos = [];
    }

}
var todolist = new Todolist();































