describe("Todo", function() {
    var todo;


    beforeEach(function() {
        todo = new Todo('some text', 1, 1 );
    });

    it("todo should set properties: text, id, index, checked", function() {
        expect(todo.text).toEqual('some text');
        expect(todo.id).toEqual("id_1");
        expect(todo.index).toEqual(1);
        expect(todo.checked).toEqual(false);
    });

    it("todo 'create' should return an html element with: 'some text', class='todo',  id='id_1'" , function() {
        var elem = todo.create();

        var createdString = "<li class='todo table-active' id='id_1' ><div class='linumber'>1</div><input class='licheck' type='checkbox'><div class='liinput displaynone'><input class='liinputfield' value='some text' type='text'  size='40px'></div><div class='litext'>some text</div><p> </p><button class='editTodo btn btn-info btn-sm btn-button'>Edit</button><button class='deleteTodo  btn btn-danger btn-sm btn-button'>Delete</button> <button class='saveShange displaynone btn btn-success btn-sm btn-button'>Save</button><button class='cancelChange displaynone btn btn-warning btn-sm btn-button'>Cancel</button> </li>"

        expect(elem).toEqual(createdString);

        expect(elem.search("some text")).not.toBe(-1);
        expect(elem.search("class='todo")).not.toBe(-1);
        expect(elem.search("id='id_1")).not.toBe(-1);
    });

    it("getID should return todo 'id' ", function() {
        expect(todo.getID).toEqual('id_1');
    });

    it("setChecked should togle todo 'checked' field", function() {
        expect(todo.checked).toEqual(false);
        todo.setChecked()
        expect(todo.checked).toEqual(true);
        todo.setChecked()
        expect(todo.checked).toEqual(false);
    });

    it("setIndex should change todo 'index' ", function() {
        todo.setIndex(2)
        expect(todo.index).toEqual(2);
    });
});





















