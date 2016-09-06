angular.module('quoteBook').service('mainService', function() {


    this.getQuotes = function() {
        return quotes;
    }

    this.addQuote = function(quoteToAdd, author) {
        //validate passed object
        //add quote object to quotes array
        var newQuoteObj = {
            text: quoteToAdd,
            author: author
        };
        if (typeof quoteToAdd === "string" && typeof author === "string") {
            quotes.push(newQuoteObj);
        } else {
            alert("YOU CANTANKEROUS OBSTRUCTIONIST! USE TEXT ONLY! Please.");
        }

    }

    this.removeQuote = function(quoteToDelete) {
        //remove quote object from array, based on text search
        for (var i = 0; i < quotes.length; i++) {
            if (quotes[i].text.toLowerCase() === quoteToDelete.text.toLowerCase()) {
                quotes.splice(i, 1);
            }
        }
    }

    var quotes = [{
        text: 'Life isn\'t about getting and having, it\'s about giving and being.',
        author: 'Kevin Kruse'
    }, {
        text: 'Whatever the mind of man can conceive and believe, it can achieve',
        author: 'Napoleon Hill'
    }, {
        text: 'Strive not to be a success, but rather to be of value.',
        author: 'Albert Einstein'
    }, {
        text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.',
        author: 'Robert Frost'
    }, {
        text: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
        author: 'Amelia Earhart'
    }, {
        text: 'Life is what happens to you while you\'re busy making other plans.',
        author: 'John Lennon'
    }, {
        text: 'What even is a jQuery?',
        author: 'Tyler S. McGinnis'
    }];

});
