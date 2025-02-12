export const transparentProxyFactoryABI = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"proxyAdmin","type":"address"},{"indexed":true,"internalType":"address","name":"initialOwner","type":"address"}],"name":"ProxyAdminCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"proxyAdmin","type":"address"},{"indexed":true,"internalType":"address","name":"initialOwner","type":"address"},{"indexed":true,"internalType":"bytes32","name":"salt","type":"bytes32"}],"name":"ProxyAdminDeterministicCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"proxy","type":"address"},{"indexed":true,"internalType":"address","name":"logic","type":"address"},{"indexed":true,"internalType":"address","name":"initialOwner","type":"address"}],"name":"ProxyCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"proxy","type":"address"},{"indexed":true,"internalType":"address","name":"logic","type":"address"},{"indexed":true,"internalType":"address","name":"initialOwner","type":"address"},{"indexed":true,"internalType":"bytes32","name":"salt","type":"bytes32"}],"name":"ProxyDeterministicCreated","type":"event"},{"inputs":[{"internalType":"address","name":"logic","type":"address"},{"internalType":"address","name":"initialOwner","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"create","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"logic","type":"address"},{"internalType":"address","name":"initialOwner","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"bytes32","name":"salt","type":"bytes32"}],"name":"createDeterministic","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"}],"name":"createDeterministicProxyAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"}],"name":"createProxyAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"name":"getProxyAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"logic","type":"address"},{"internalType":"address","name":"initialOwner","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"bytes32","name":"salt","type":"bytes32"}],"name":"predictCreateDeterministic","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"address","name":"initialOwner","type":"address"}],"name":"predictCreateDeterministicProxyAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];