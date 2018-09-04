

class Todo{
    constructor(text, id, index, checked='false'){
        this.text = text;
        this.id = "id_"+id;
        this.index  = index;
        this.checked = checked === 'false' ? false : true;
        this.init();
    }

    init(){}

    create(){

        var elem =
            "<li class='todo table-active' id='"+ this.id+"' >"+
            "<div class='linumber'>" + this.index + "</div>";

            if (this.checked){
                elem += "<input class='licheck' type='checkbox' checked>";
            }else {
                elem += "<input class='licheck' type='checkbox'>";
            };

            elem +="<div class='liinput displaynone'><input class='liinputfield' value='" + this.text + "' type='text'  size='40px'></div>";

            if (this.checked){
                elem += "<div class='litext' style='text-decoration: line-through'>" + this.text + "</div>"
            }else {
                elem += "<div class='litext'>" + this.text + "</div>"
            }

            elem += "<p> </p>"+
            "<button class='editTodo btn btn-info btn-sm btn-button'>Edit</button>"+
            "<button class='deleteTodo  btn btn-danger btn-sm btn-button'>Delete</button> "+
            "<button class='saveShange displaynone btn btn-success btn-sm btn-button'>Save</button>"+
            "<button class='cancelChange displaynone btn btn-warning btn-sm btn-button'>Cancel</button> "+
            "</li>"
        ;

        $(".todo-list").append(elem);
        return elem;
    }

    edit(text){
        this.text = text;
    }

    get getID(){
        return this.id
    }

    setChecked(){
        this.checked = !this.checked
    }

    setIndex(index){
        this.index  = index;
    }

}



















