// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_calc_pb = require('../protos/calc_pb.js');

function serialize_calc_SumRequest(arg) {
  if (!(arg instanceof protos_calc_pb.SumRequest)) {
    throw new Error('Expected argument of type calc.SumRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calc_SumRequest(buffer_arg) {
  return protos_calc_pb.SumRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calc_SumResponse(arg) {
  if (!(arg instanceof protos_calc_pb.SumResponse)) {
    throw new Error('Expected argument of type calc.SumResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calc_SumResponse(buffer_arg) {
  return protos_calc_pb.SumResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalcServiceService = exports.CalcServiceService = {
  sum: {
    path: '/calc.CalcService/Sum',
    requestStream: false,
    responseStream: false,
    requestType: protos_calc_pb.SumRequest,
    responseType: protos_calc_pb.SumResponse,
    requestSerialize: serialize_calc_SumRequest,
    requestDeserialize: deserialize_calc_SumRequest,
    responseSerialize: serialize_calc_SumResponse,
    responseDeserialize: deserialize_calc_SumResponse,
  },
};

exports.CalcServiceClient = grpc.makeGenericClientConstructor(CalcServiceService);
