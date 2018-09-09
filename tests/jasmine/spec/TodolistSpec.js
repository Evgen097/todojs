describe("Todolist", function() {
    var todolist;

    beforeEach(function() {
        todolist = new Todolist();
    });

    it("todolist should set properties: todos", function() {
        expect( Array.isArray(todolist.todos) ).toEqual(true);
    });

    it("createId return string with numbers 10 character long", function() {
        var id = todolist.createId;
        expect( id.length ).toBe(10);
        expect( id.match( /^\d+$/) ).not.toBe(null);
    });

    it("addTodo should create new todo", function() {
        todolist.addTodo('some text');
        expect( todolist.todos.length ).toBe(1);
        expect( todolist.todos[0].text ).toBe('some text');

    });

    it("deleteTodo should  delete todo with ID", function() {
        todolist.addTodo('some text');
        var id = todolist.todos[0].id;

        expect( todolist.todos.length ).toBe(1);
        expect( todolist.todos[0].text ).toBe('some text');

        todolist.deleteTodo(id)
        expect( todolist.todos.length ).toBe(0);

    });
    // deleteTodo(id) {
    //     this.todos = this.todos.filter(item => item.id !== id);
    //     db.deleteTodo(id);
    //     this.draw();
    // }




    // describe("when song has been paused", function() {
    //     beforeEach(function() {
    //         player.play(song);
    //         player.pause();
    //     });
    //
    //     it("should indicate that the song is currently paused", function() {
    //         expect(player.isPlaying).toBeFalsy();
    //
    //         // demonstrates use of 'not' with a custom matcher
    //         expect(player).not.toBePlaying(song);
    //     });
    //
    //     it("should be possible to resume", function() {
    //         player.resume();
    //         expect(player.isPlaying).toBeTruthy();
    //         expect(player.currentlyPlayingSong).toEqual(song);
    //     });
    // });
    //
    // // demonstrates use of spies to intercept and test method calls
    // it("tells the current song if the user has made it a favorite", function() {
    //     spyOn(song, 'persistFavoriteStatus');
    //
    //     player.play(song);
    //     player.makeFavorite();
    //
    //     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    // });
    //
    // //demonstrates use of expected exceptions
    // describe("#resume", function() {
    //     it("should throw an exception if song is already playing", function() {
    //         player.play(song);
    //
    //         expect(function() {
    //             player.resume();
    //         }).toThrowError("song is already playing");
    //     });
    // });


});
