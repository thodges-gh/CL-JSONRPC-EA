const assert = require("chai").assert;
const createRequest = require("../index.js").createRequest;

/**
 * Running these tests requires a connection to a Zilliqa client.
 * Not all supported methods have a test case, just enough to display capability.
 */

describe("Zilliqa client", () => {
  const jobID = "278c97ffadb54a5bbb93cfec5f7b5503";

  context("Unrecognized method", () => {
    const req = {
      id: jobID,
      data: {
        method: "no_op"
      }
    };

    it("returns error to the node", done => {
      createRequest(req, (statusCode, data) => {
        assert.equal(data.jobRunID, jobID);
        assert.equal(data.status, "errored");
        done();
      });
    });
  });

  context("GetNetworkId", () => {
    const req = {
      id: jobID,
      data: {
        method: "GetNetworkId",
        params: [""]
      }
    };

    it("returns data to the node", done => {
      createRequest(req, (statusCode, data) => {
        assert.equal(statusCode, 200);
        assert.equal(data.jobRunID, jobID);
        assert.isNotEmpty(data.data);
        done();
      });
    });
  });

  context("GetBalance", () => {
    const req = {
      id: jobID,
      data: {
        method: "GetBalance",
        params: ["05fE66887AC5B6465f5aEda85E0557A29Ab11936"]
      }
    };

    it("Get balance should return some address balance", done => {
      createRequest(req, (statusCode, data) => {
        assert.equal(statusCode, 200);
        assert.equal(data.jobRunID, jobID);
        assert.isNotEmpty(data.data);
        done();
      });
    });
  });

  context("GetBalance", () => {
    const req = {
      id: jobID,
      data: {
        method: "GetBalance",
        params: ["05fE66887AC5B6465f5aEda85E0557A29Ab11937"]
      }
    };

    it("Get balance should return error as address is not created.", done => {
      createRequest(req, (statusCode, data) => {
        assert.equal(data.status, "errored");
        assert.equal(data.jobRunID, jobID);
        done();
      });
    });
  });

  context("GetSmartContractState", () => {
    const req = {
      id: jobID,
      data: {
        method: "GetSmartContractState",
        params: ["5865337a32F48a04F5B52507442f47FC558d9C2b"]
      }
    };

    it("returns data to the node", done => {
      createRequest(req, (statusCode, data) => {
        assert.equal(statusCode, 200);
        assert.equal(data.jobRunID, jobID);
        assert.isNotEmpty(data.data);
        done();
      });
    });
  });
});
