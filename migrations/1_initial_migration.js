var Migrations = artifacts.require("./Migrations.sol");
var Hello_mshk_top = artifacts.require("./Hello_mshk_top.sol");
// module.exports = function(deployer) {
//   deployer.deploy(Migrations);
// };
module.exports = function(deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(Hello_mshk_top);
};
