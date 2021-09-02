const calc = require('../server/protos/calc_pb');
const service = require('../server/protos/calc_grpc_pb');
const grpc = require('@grpc/grpc-js');

function main() {
    const client = new service.CalcServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    )
    const sumRequest = new calc.SumRequest();
    const numbers = new calc.Numbers();
    numbers.setANumber("1");
    numbers.setBNumber("2");
    sumRequest.setNumbers(numbers);

    client.sum(sumRequest, (error, response) => {
        if(!error) {
            console.log(response.getResult());
        } else {
            console.log(error)
        }
    })
}

main();