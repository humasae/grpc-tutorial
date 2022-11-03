/**
 * @fileoverview gRPC-Web generated client stub for tutorial
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.tutorial = require('./tutorial_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.tutorial.SignerClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.tutorial.SignerPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tutorial.PersonRequest,
 *   !proto.tutorial.PersonReply>}
 */
const methodDescriptor_Signer_SignPerson = new grpc.web.MethodDescriptor(
  '/tutorial.Signer/SignPerson',
  grpc.web.MethodType.UNARY,
  proto.tutorial.PersonRequest,
  proto.tutorial.PersonReply,
  /**
   * @param {!proto.tutorial.PersonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tutorial.PersonReply.deserializeBinary
);


/**
 * @param {!proto.tutorial.PersonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.tutorial.PersonReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tutorial.PersonReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tutorial.SignerClient.prototype.signPerson =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tutorial.Signer/SignPerson',
      request,
      metadata || {},
      methodDescriptor_Signer_SignPerson,
      callback);
};


/**
 * @param {!proto.tutorial.PersonRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tutorial.PersonReply>}
 *     Promise that resolves to the response
 */
proto.tutorial.SignerPromiseClient.prototype.signPerson =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tutorial.Signer/SignPerson',
      request,
      metadata || {},
      methodDescriptor_Signer_SignPerson);
};


module.exports = proto.tutorial;

