const calc = require('../server/protos/calc_pb');
const service = require('../server/protos/calc_grpc_pb');
const grpc = require('@grpc/grpc-js');

function callPrimeNumberDecomposition() {
    const client = new service.CalcServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    );
    const request = new calc.PrimeNumberDecompositionRequest();
    const number = 9876543;
    request.setNumber(number);
    const call = client.primeNumberDecomposition(request, () => {});

    call.on('data', response => { 
        console.log(`Prime factors found ${response.getPrimeFactor()}`);
    });
    call.on('error', error => { console.log(error) });
    call.on('status', status => { console.log(status) });
    call.on('end', () => { console.log('Ended!'); });
}

function main() {
    const client = new service.CalcServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    );
    callPrimeNumberDecomposition();
    // const sumRequest = new calc.SumRequest();
    // const numbers = new calc.Numbers();
    // numbers.setANumber("1");
    // numbers.setBNumber("2");
    // sumRequest.setNumbers(numbers);

    // client.sum(sumRequest, (error, response) => {
    //     if(!error) {
    //         console.log(response.getResult());
    //     } else {
    //         console.log(error)
    //     }
    // })
}

main();