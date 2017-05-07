function fearNotLetter(str) {
    first = str.charCodeAt(0);//gettig the fisrt charcode of the string
    list = str.split("");//spliting string into list
    ln = []; /*list number*/ lc = [];/*list comparison*/

    for (i = 0; i < str.length; i++) { ln.push(str.charCodeAt(i)); }//putting
      //the string charcode into the previous generated array ln
    for (j = 0; j < str.length; j++) { lc.push(first + j); }//putting
      //a whole list of the same size of the string into lc

    for (var i = 0; i < ln.length; i++) {
        if (ln.indexOf(lc[i]) == -1) {//cheking if there is a not found number of the
                                      //lc list into ln list
            var ind = lc[i];          //if there is, asign it to ind variable
            return String.fromCharCode(ind);//convert ind tro charcode and return it
        }
    }
}
fearNotLetter("acdej");
