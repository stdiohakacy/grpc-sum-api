/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.calc.Numbers', null, global);
goog.exportSymbol('proto.calc.SumRequest', null, global);
goog.exportSymbol('proto.calc.SumResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.calc.Numbers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.calc.Numbers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.calc.Numbers.displayName = 'proto.calc.Numbers';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.calc.Numbers.prototype.toObject = function(opt_includeInstance) {
  return proto.calc.Numbers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.calc.Numbers} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.calc.Numbers.toObject = function(includeInstance, msg) {
  var f, obj = {
    aNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    bNumber: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.calc.Numbers}
 */
proto.calc.Numbers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.calc.Numbers;
  return proto.calc.Numbers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.calc.Numbers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.calc.Numbers}
 */
proto.calc.Numbers.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setANumber(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.calc.Numbers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.calc.Numbers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.calc.Numbers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.calc.Numbers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getANumber();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getBNumber();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 a_number = 1;
 * @return {number}
 */
proto.calc.Numbers.prototype.getANumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.calc.Numbers.prototype.setANumber = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 b_number = 2;
 * @return {number}
 */
proto.calc.Numbers.prototype.getBNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.calc.Numbers.prototype.setBNumber = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.calc.SumRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.calc.SumRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.calc.SumRequest.displayName = 'proto.calc.SumRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.calc.SumRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.calc.SumRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.calc.SumRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.calc.SumRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    numbers: (f = msg.getNumbers()) && proto.calc.Numbers.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.calc.SumRequest}
 */
proto.calc.SumRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.calc.SumRequest;
  return proto.calc.SumRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.calc.SumRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.calc.SumRequest}
 */
proto.calc.SumRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.calc.Numbers;
      reader.readMessage(value,proto.calc.Numbers.deserializeBinaryFromReader);
      msg.setNumbers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.calc.SumRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.calc.SumRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.calc.SumRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.calc.SumRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumbers();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.calc.Numbers.serializeBinaryToWriter
    );
  }
};


/**
 * optional Numbers numbers = 1;
 * @return {?proto.calc.Numbers}
 */
proto.calc.SumRequest.prototype.getNumbers = function() {
  return /** @type{?proto.calc.Numbers} */ (
    jspb.Message.getWrapperField(this, proto.calc.Numbers, 1));
};


/** @param {?proto.calc.Numbers|undefined} value */
proto.calc.SumRequest.prototype.setNumbers = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.calc.SumRequest.prototype.clearNumbers = function() {
  this.setNumbers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.calc.SumRequest.prototype.hasNumbers = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.calc.SumResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.calc.SumResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.calc.SumResponse.displayName = 'proto.calc.SumResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.calc.SumResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.calc.SumResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.calc.SumResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.calc.SumResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.calc.SumResponse}
 */
proto.calc.SumResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.calc.SumResponse;
  return proto.calc.SumResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.calc.SumResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.calc.SumResponse}
 */
proto.calc.SumResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.calc.SumResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.calc.SumResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.calc.SumResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.calc.SumResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 result = 1;
 * @return {number}
 */
proto.calc.SumResponse.prototype.getResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.calc.SumResponse.prototype.setResult = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


goog.object.extend(exports, proto.calc);
