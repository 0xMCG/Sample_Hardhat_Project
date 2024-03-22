const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('Counter', ()=>{

    it('Store a count', async () => {
        const Counter = await ethers.getContractFactory('Counter')
        const counter = await Counter.deploy('My Contract', 1)
        const count = await counter.count()
        expect(count).to.equal(2)
    })

})