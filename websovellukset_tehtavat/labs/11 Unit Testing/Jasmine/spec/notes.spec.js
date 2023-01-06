describe('notes module', function () {
    beforeEach(function() {
        notes.clear();
        notes.add('first note');
        notes.add('second note');
        notes.add('third note');
        notes.add('fourth note');
        notes.add('fifth note');
    });

    it("should be able to add a new note", function () {
        expect(notes.add('sixth note')).toBe(true);
        expect(notes.count()).toBe(6);
    });
    it("should ignore blank notes", function () {
        expect(notes.add('')).toBe(false);
        expect(notes.count()).toBe(5);
    });
    it('should ignore notes containing only whitespace', function() {
        expect(notes.add('   ')).toBe(false);
        expect(notes.count()).toBe(5);
    });
    it('should require a string parameter', function() {
        expect(notes.add()).toBe(false);
        expect(notes.count()).toBe(5);
    });

    describe('deleting a note', function() {
        it('should be able to delete the first index', function (){
            expect(notes.remove(0)).toBe(true);
            expect(notes.count()).toBe(4);
        });
        it('should be able to delete the last index', function () {
            const lastElemIndex = notes.count()-1;
            expect(notes.remove(lastElemIndex)).toBe(true);
            expect(notes.count()).toBe(lastElemIndex);
        });
        it('should return false if index is out of range', function () {
            const listLength = notes.count();
            expect(notes.remove(listLength)).toBe(false);
            expect(notes.count()).toBe(listLength);
        });
        it('should return false if the parameter is missing', function () {
            const listLength = notes.count();
            expect(notes.remove()).toBe(false);
            expect(notes.count()).toBe(listLength);
        });
    });
    
    describe("finding a note", function () {
        it("should be able to find first note", function () {
            expect(notes.find("first").length).toBe(1);
        });
        it("should return false if nothing found", function () {
            expect(notes.find("3454667")).toBe(false);
        });
    });

    describe("clearing all notes", function () {
        it("should be able to delete all notes", function () {
            notes.clear();
            expect(notes.count()).toBe(0);
        });
    });
});

