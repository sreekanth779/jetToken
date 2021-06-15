const { expect } = require("chai");

describe("JetToken", function () {

  it("Should return the Jets symbol", async function () {

    const JetToken = await ethers.getContractFactory("JetToken");
    const jetToken = await JetToken.deploy("Jets", "JETT", 100000);

    await jetToken.deployed();

    expect(await jetToken.symbol()).to.equal("JETT");

  });

  it("Should return the Jets name", async function () {

    const JetToken = await ethers.getContractFactory("JetToken");
    const jetToken = await JetToken.deploy("Jets", "JETT", 100000);

    await jetToken.deployed();

    expect(await jetToken.name()).to.equal("Jets");

  });

});
