let Lakers = ['Ball', 'LeBron', 'Kuzma', 'Ingram']

console.log(Lakers.pop());
console.log(Lakers);

console.log(Lakers.push('Davis'));
console.log(Lakers);

console.log(Lakers.shift());
console.log(Lakers.unshift('Klay', 'Kemba'));
console.log(Lakers);

let LAL = Lakers

console.log(LAL == Lakers);
console.log(LAL.push('Magic'));
console.log(Lakers);

for (LAL of Lakers) {
    console.log(LAL);
}

for (LAL in Lakers) {
    console.log(Lakers[LAL]);
}

const HOU = new Array('Paul', 'Harden')
console.log(HOU);
console.log(HOU[1]);

const data = new Array(2)
console.log(data[0])
console.log(data.length)

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(matrix);
console.log(matrix[2][1])

const newMatrix = [
    [[11, 12, 13], [21, 22, 23], [31, 32, 33]],
    [[41, 42, 43], [51, 52, 53], [61, 62, 63]],
    [[71, 72, 73], [81, 82, 83], [91, 92, 93]]
]
console.log(newMatrix);
console.log(newMatrix[2][0][2])

const newData = [1, 2, 3]

console.log(newData)
console.log(String(newData) === '1,2,3')
console.log([] + 1)
console.log([1] + 1)
console.log([1, 2] + 1)

const removed = Lakers.splice(5, 1)
console.log(Lakers);
console.log(removed);

Lakers.splice(1, 1, 'Russell')
console.log(Lakers);

Lakers.splice(6, 0, 'Rondo', 'McGee')
console.log(Lakers);

console.log(Lakers.slice(2, 5));
let newLakers = Lakers.concat(['Kawhi', 'Lin'], ['Lance', 'Kyrie'])
console.log(newLakers);
console.log(Lakers);

console.log(Lakers.sort());

console.log(Lakers.reverse());

console.log(newLakers.sort());

console.log(newLakers.reverse());

let LAC = 'Los ,Angeles ,Clippers'

let Staples = LAC.split(',')

console.log(Staples);

for (let char of Staples) {
    console.log(`Welcome ${char}`);
}

let newnewLakers = newLakers.join('; ')
console.log(newnewLakers);

Lakers.forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);

})

let LakersMap = Lakers.map(item => {
    return `${item} is a Laker!`
})
console.log(LakersMap);


let LakersLength = Lakers.map(item => item.length)
console.log(LakersLength);

console.log(Lakers.indexOf('Rondo'));
console.log(Lakers.includes('LeBron'));

const users = [
    { id: 1, name: 'Alpha' },
    { id: 2, name: 'Betty' },
    { id: 3, name: 'Gamma' }
]

const user = users.find(item => item.id === 1)

console.log(user)
console.log(user.name)

const newuser = users.findIndex(item => item.id === 2)

console.log(newuser)

const newUsers = users.filter(item => item.id < 3)

console.log(newUsers) 
console.log(newUsers.length)


const numbers = [1, 2, 3, 4, 5]


const result = numbers.reduce((sum, current) => sum + current) 

console.log(result) 

