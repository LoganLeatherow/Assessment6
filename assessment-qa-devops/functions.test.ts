const {shuffleArray} = require('./utils')
const vehicles = ["bike", 'car', 'bus']
describe('shuffleArray should', () => {
    test('should return array', () => {
            expect(shuffleArray(vehicles)).toEqual(expect.arrayContaining([expect.any(String)]))
    })
    test('array length test', () =>{
        expect(shuffleArray(vehicles)).toHaveLength(3)
    }) 
})