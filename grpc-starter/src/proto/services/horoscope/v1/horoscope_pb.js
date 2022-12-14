// source: services/horoscope/v1/horoscope.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.services.horoscope.v1.HoroscopeRequest', null, global);
goog.exportSymbol('proto.services.horoscope.v1.HoroscopeResponse', null, global);
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
proto.services.horoscope.v1.HoroscopeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.horoscope.v1.HoroscopeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.horoscope.v1.HoroscopeRequest.displayName = 'proto.services.horoscope.v1.HoroscopeRequest';
}
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
proto.services.horoscope.v1.HoroscopeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.horoscope.v1.HoroscopeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.horoscope.v1.HoroscopeResponse.displayName = 'proto.services.horoscope.v1.HoroscopeResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.services.horoscope.v1.HoroscopeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.horoscope.v1.HoroscopeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.horoscope.v1.HoroscopeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.horoscope.v1.HoroscopeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    horoscopeSign: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.services.horoscope.v1.HoroscopeRequest}
 */
proto.services.horoscope.v1.HoroscopeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.horoscope.v1.HoroscopeRequest;
  return proto.services.horoscope.v1.HoroscopeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.horoscope.v1.HoroscopeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.horoscope.v1.HoroscopeRequest}
 */
proto.services.horoscope.v1.HoroscopeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHoroscopeSign(value);
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
proto.services.horoscope.v1.HoroscopeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.horoscope.v1.HoroscopeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.horoscope.v1.HoroscopeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.horoscope.v1.HoroscopeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHoroscopeSign();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.services.horoscope.v1.HoroscopeRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.horoscope.v1.HoroscopeRequest} returns this
 */
proto.services.horoscope.v1.HoroscopeRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string horoscope_sign = 2;
 * @return {string}
 */
proto.services.horoscope.v1.HoroscopeRequest.prototype.getHoroscopeSign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.horoscope.v1.HoroscopeRequest} returns this
 */
proto.services.horoscope.v1.HoroscopeRequest.prototype.setHoroscopeSign = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.horoscope.v1.HoroscopeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.horoscope.v1.HoroscopeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.horoscope.v1.HoroscopeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dateRange: jspb.Message.getFieldWithDefault(msg, 2, ""),
    currentDate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    compatibility: jspb.Message.getFieldWithDefault(msg, 5, ""),
    mood: jspb.Message.getFieldWithDefault(msg, 6, ""),
    color: jspb.Message.getFieldWithDefault(msg, 7, ""),
    luckyNumber: jspb.Message.getFieldWithDefault(msg, 8, 0),
    luckyTime: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.services.horoscope.v1.HoroscopeResponse}
 */
proto.services.horoscope.v1.HoroscopeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.horoscope.v1.HoroscopeResponse;
  return proto.services.horoscope.v1.HoroscopeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.horoscope.v1.HoroscopeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.horoscope.v1.HoroscopeResponse}
 */
proto.services.horoscope.v1.HoroscopeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDateRange(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentDate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompatibility(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMood(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLuckyNumber(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setLuckyTime(value);
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
proto.services.horoscope.v1.HoroscopeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.horoscope.v1.HoroscopeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.horoscope.v1.HoroscopeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.horoscope.v1.HoroscopeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDateRange();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCurrentDate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCompatibility();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMood();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLuckyNumber();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getLuckyTime();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.horoscope.v1.HoroscopeResponse} returns this
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string date_range = 2;
 * @return {string}
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.getDateRange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.horoscope.v1.HoroscopeResponse} returns this
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.setDateRange = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string current_date = 3;
 * @return {string}
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.getCurrentDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.horoscope.v1.HoroscopeResponse} returns this
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.setCurrentDate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.horoscope.v1.HoroscopeResponse} returns this
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string compatibility = 5;
 * @return {string}
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.getCompatibility = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.horoscope.v1.HoroscopeResponse} returns this
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.setCompatibility = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string mood = 6;
 * @return {string}
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.getMood = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.horoscope.v1.HoroscopeResponse} returns this
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.setMood = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string color = 7;
 * @return {string}
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.horoscope.v1.HoroscopeResponse} returns this
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.setColor = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 lucky_number = 8;
 * @return {number}
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.getLuckyNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.horoscope.v1.HoroscopeResponse} returns this
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.setLuckyNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string lucky_time = 9;
 * @return {string}
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.getLuckyTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.horoscope.v1.HoroscopeResponse} returns this
 */
proto.services.horoscope.v1.HoroscopeResponse.prototype.setLuckyTime = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


goog.object.extend(exports, proto.services.horoscope.v1);
