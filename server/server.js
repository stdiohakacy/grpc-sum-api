const grpc = require('@grpc/grpc-js');
const calc = require('../server/protos/calc_pb');
const service = require('../server/protos/calc_grpc_pb');

function sum(input, callback) {
    const aNum = input.request.getNumbers().getANumber();
    const bNum = input.request.getNumbers().getBNumber();
    const sumResponse = new calc.SumResponse();
    sumResponse.setResult(String(aNum + bNum));
    callback(null, sumResponse);
}

function primeNumberDecomposition(call, callback) {
    let number = call.request.getNumber();
    let divisor = 2;
    while(number > 1) {
        if(number % divisor === 0) {
            let primeNumberDecompositionResponse = new calc.PrimeNumberDecompositionResponse();
            primeNumberDecompositionResponse.setPrimeFactor(divisor);
            number = number / divisor;
            call.write(primeNumberDecompositionResponse);
        } else {
            divisor++;
            console.log(`Divisor has increased to ${divisor}`);
        }
    }

    call.end();
}

function main() {
    const server = new grpc.Server();
    server.addService(service.CalcServiceService, { 
        sum,
        primeNumberDecomposition
    });
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        console.log(`Server running on port localhost:50051`)
        server.start();
    });
}

main();