var notes = (function() {
    var list = [];

    return {
        add: function(note) {
            const regex = /[A-Za-z0-9!?+-]/g;
            if (note && note.match(regex)) {
                var item = {timestamp: Date.now(), text: note};
                list.push(item);
                return true;
            }
            return false;
        },
        remove: function(index) {
            if(index>=0 && index!==null && index < list.length){
                list.splice(index, 1);
                return true;
            }
            return false;
        },
        count: function() {
            return list.length;
        },
        list: function() {
            return list;
        },
        find: function(str) {
            const result = [];
            for(let i=0; i<list.length; i++){
                const noteText = list[i].text;
                if(noteText.includes(str))
                    result.push(list[i]);
            }

            if(result.length > 0)
                return result;
            return false;
        },
        clear: function() {
            list = [];
        }
    }
}());