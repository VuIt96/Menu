const c = [{ id: 1, name: 'Foo' }, { id: 2, name: 'Bar' }, { id: 3, name: 'Baz' }]


const myFilter = obj => obj.id !== 2
let filterc = []
for (let i = 0; i < c.length; i++) {
    if (myFilter(c[i])) {
        filterc.push(c[i])
    }
}



const f = c.filter(myFilter)
console.log("filter", f)
console.log(filterc)

const myMap = obj => 1
let mapc = []
for (let i = 0; i < c.length; i++) {
    mapc.push(myMap(c[i]));
}

const d = c.map(myMap)
console.log("d", d)
console.log(mapc)