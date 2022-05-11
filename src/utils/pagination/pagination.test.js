import  { expect } from 'chai'
import pagination from './index'


test('pagination shoul be a function', () => {
    expect(pagination).to.be.a('function')
})

test('pagination ({ total:1, activePage:1}) should return [1]', () => {
    const param = { total:1, activePage:1 }
    const result = [1]
    expect(pagination(param)).to.be.deep.equal(result)
})

test('pagination ({ total: 2, activePage: 1}) should return [1,2]', () => {
    const param = { total: 2, activePage: 1 }
    const result = [1,2]
    expect(pagination(param)).to.be.deep.equal(result)
})

test('pagination ({ total: 5, activePage: 2}) should return [1,2,3,4,5]', () => {
    const param = { total: 5, activePage: 2 }
    const result = [1,2,3,4,5]
    expect(pagination(param)).to.be.deep.equal(result)
})

test('pagination ({ total: 6, activePage: 1}) should return [1, 2, "..." , 6]', () => {
    const param = { total: 6, activePage: 1 }
    const result = [1, 2, "..." , 6]
    expect(pagination(param)).to.be.deep.equal(result)
})

test('pagination ({ total: 6, activePage: 4}) should return [1, ..., 4, 5, 6]', () => {
    const param = { total: 6, activePage: 4 }
    const result = [1, '...', 3, 4, 5, 6]
    expect(pagination(param)).to.be.deep.equal(result)
})
test('pagination ({ total: 10, activePage: 5}) should return [1, ..., 4, 5, 6, ..., 10]', () => {
    const param = { total: 10, activePage: 5 }
    const result = [1, '...', 4, 5, 6, '...', 10]
    expect(pagination(param)).to.be.deep.equal(result)
})
test('pagination ({ total: 6, activePage: 6}) should return [1, ..., 6]', () => {
    const param = { total: 6, activePage: 6 }
    const result = [1, '...', 5, 6]
    expect(pagination(param)).to.be.deep.equal(result)
})

test('pagination ({ total: 15 }) should return [1, 2, 3,..., 15]', () => {
    const param = { total: 15 }
    const result = [1, 2, '...', 15]
    expect(pagination(param)).to.be.deep.equal(result)
})

test('pagination ({}) should return [1]', () => {
    const param = { }
    const result = [1]
    expect(pagination(param)).to.be.deep.equal(result)
})

test('pagination ({total: 1bc, activePage: 1}) should throw an error', () => {
    const param = { total: 'bb', activePage: 1 }
    const result = 'Total and activePage should be a number'
    try {
        pagination(param)
    } catch (e) {
        expect(e.message).to.be.equal(result)
    }
})
