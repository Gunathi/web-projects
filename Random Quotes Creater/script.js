
const btn = document.querySelector('#btn');
const quote = document.querySelector('.quote');
const autor = document.querySelector('.person');

const quotes = [{
    quote: `"You know, Hobbes, some days even my lucky rocketship underpants don't help."`,
    author: `Bill Watterson`
},{
    quote: `"Even if we don't have the power to choose where we come from, we can still choose where we go from there."`,
    author: `Stephen Chbosky`
},{
    quote: `"And now that you don't have to be perfect, you can be good."`,
    author: `John Steinbeck`
},{
    quote: `"Outside the windows the day was bright: golden sunshine, blue sky, pleasant wind... I wanted to punch the happy day in the face, grab it by the hair, and beat it until it told me what the hell it was so happy about."`,
    author: `Ilona Andrews`
},{
    quote: `"I haven't had a very good day. I think I might still be hungover and everyone's dead and my root beer's gone."`,
    author: `Holly Black`
},{
    quote: `"It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default."`,
    author: `J.K. Rowling`
},{
    quote: `"But I am very poorly today & very stupid & I hate everybody & everything. One lives only to make blunders."`,
    author: `Charle Darwin`
},{
    quote: `"We are cups, constantly and quietly being filled. The trick is knowing how to tip ourselves over and let the beautiful stuff out."`,
    author: `Ray Bradbury`
},{
    quote: `"You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it."`,
    author: `Maya Angelou`
},{
    quote: `“Life is never fair, and perhaps it is a good thing for most of us that it is not.”`,
    author: `Oscar Wilde`
}]

btn.addEventListener('click', function (){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    autor.innerText = quotes[random].author;

});