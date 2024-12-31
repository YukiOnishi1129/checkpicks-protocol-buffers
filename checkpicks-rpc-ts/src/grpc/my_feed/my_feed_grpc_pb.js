// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var my_feed_my_feed_pb = require('../my_feed/my_feed_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_common_pb = require('../common/common_pb.js');
var content_content_pb = require('../content/content_pb.js');

function serialize_checkpicks_my_feed_v1_CreateMyFeedFolderRequest(arg) {
  if (!(arg instanceof my_feed_my_feed_pb.CreateMyFeedFolderRequest)) {
    throw new Error('Expected argument of type checkpicks.my_feed.v1.CreateMyFeedFolderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_my_feed_v1_CreateMyFeedFolderRequest(buffer_arg) {
  return my_feed_my_feed_pb.CreateMyFeedFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_my_feed_v1_CreateMyFeedFolderResponse(arg) {
  if (!(arg instanceof my_feed_my_feed_pb.CreateMyFeedFolderResponse)) {
    throw new Error('Expected argument of type checkpicks.my_feed.v1.CreateMyFeedFolderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_my_feed_v1_CreateMyFeedFolderResponse(buffer_arg) {
  return my_feed_my_feed_pb.CreateMyFeedFolderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_my_feed_v1_DeleteMyFeedFolderRequest(arg) {
  if (!(arg instanceof my_feed_my_feed_pb.DeleteMyFeedFolderRequest)) {
    throw new Error('Expected argument of type checkpicks.my_feed.v1.DeleteMyFeedFolderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_my_feed_v1_DeleteMyFeedFolderRequest(buffer_arg) {
  return my_feed_my_feed_pb.DeleteMyFeedFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_my_feed_v1_GetMyFeedFolderRequest(arg) {
  if (!(arg instanceof my_feed_my_feed_pb.GetMyFeedFolderRequest)) {
    throw new Error('Expected argument of type checkpicks.my_feed.v1.GetMyFeedFolderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_my_feed_v1_GetMyFeedFolderRequest(buffer_arg) {
  return my_feed_my_feed_pb.GetMyFeedFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_my_feed_v1_GetMyFeedFolderResponse(arg) {
  if (!(arg instanceof my_feed_my_feed_pb.GetMyFeedFolderResponse)) {
    throw new Error('Expected argument of type checkpicks.my_feed.v1.GetMyFeedFolderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_my_feed_v1_GetMyFeedFolderResponse(buffer_arg) {
  return my_feed_my_feed_pb.GetMyFeedFolderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_my_feed_v1_GetMyFeedFoldersRequest(arg) {
  if (!(arg instanceof my_feed_my_feed_pb.GetMyFeedFoldersRequest)) {
    throw new Error('Expected argument of type checkpicks.my_feed.v1.GetMyFeedFoldersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_my_feed_v1_GetMyFeedFoldersRequest(buffer_arg) {
  return my_feed_my_feed_pb.GetMyFeedFoldersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_my_feed_v1_GetMyFeedFoldersResponse(arg) {
  if (!(arg instanceof my_feed_my_feed_pb.GetMyFeedFoldersResponse)) {
    throw new Error('Expected argument of type checkpicks.my_feed.v1.GetMyFeedFoldersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_my_feed_v1_GetMyFeedFoldersResponse(buffer_arg) {
  return my_feed_my_feed_pb.GetMyFeedFoldersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_my_feed_v1_UpdateMyFeedFolderRequest(arg) {
  if (!(arg instanceof my_feed_my_feed_pb.UpdateMyFeedFolderRequest)) {
    throw new Error('Expected argument of type checkpicks.my_feed.v1.UpdateMyFeedFolderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_my_feed_v1_UpdateMyFeedFolderRequest(buffer_arg) {
  return my_feed_my_feed_pb.UpdateMyFeedFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_my_feed_v1_UpdateMyFeedFolderResponse(arg) {
  if (!(arg instanceof my_feed_my_feed_pb.UpdateMyFeedFolderResponse)) {
    throw new Error('Expected argument of type checkpicks.my_feed.v1.UpdateMyFeedFolderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_my_feed_v1_UpdateMyFeedFolderResponse(buffer_arg) {
  return my_feed_my_feed_pb.UpdateMyFeedFolderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var MyFeedServiceService = exports.MyFeedServiceService = {
  getMyFeedFolders: {
    path: '/checkpicks.my_feed.v1.MyFeedService/GetMyFeedFolders',
    requestStream: false,
    responseStream: false,
    requestType: my_feed_my_feed_pb.GetMyFeedFoldersRequest,
    responseType: my_feed_my_feed_pb.GetMyFeedFoldersResponse,
    requestSerialize: serialize_checkpicks_my_feed_v1_GetMyFeedFoldersRequest,
    requestDeserialize: deserialize_checkpicks_my_feed_v1_GetMyFeedFoldersRequest,
    responseSerialize: serialize_checkpicks_my_feed_v1_GetMyFeedFoldersResponse,
    responseDeserialize: deserialize_checkpicks_my_feed_v1_GetMyFeedFoldersResponse,
  },
  getMyFeedFolder: {
    path: '/checkpicks.my_feed.v1.MyFeedService/GetMyFeedFolder',
    requestStream: false,
    responseStream: false,
    requestType: my_feed_my_feed_pb.GetMyFeedFolderRequest,
    responseType: my_feed_my_feed_pb.GetMyFeedFolderResponse,
    requestSerialize: serialize_checkpicks_my_feed_v1_GetMyFeedFolderRequest,
    requestDeserialize: deserialize_checkpicks_my_feed_v1_GetMyFeedFolderRequest,
    responseSerialize: serialize_checkpicks_my_feed_v1_GetMyFeedFolderResponse,
    responseDeserialize: deserialize_checkpicks_my_feed_v1_GetMyFeedFolderResponse,
  },
  createMyFeedFolder: {
    path: '/checkpicks.my_feed.v1.MyFeedService/CreateMyFeedFolder',
    requestStream: false,
    responseStream: false,
    requestType: my_feed_my_feed_pb.CreateMyFeedFolderRequest,
    responseType: my_feed_my_feed_pb.CreateMyFeedFolderResponse,
    requestSerialize: serialize_checkpicks_my_feed_v1_CreateMyFeedFolderRequest,
    requestDeserialize: deserialize_checkpicks_my_feed_v1_CreateMyFeedFolderRequest,
    responseSerialize: serialize_checkpicks_my_feed_v1_CreateMyFeedFolderResponse,
    responseDeserialize: deserialize_checkpicks_my_feed_v1_CreateMyFeedFolderResponse,
  },
  updateMyFeedFolder: {
    path: '/checkpicks.my_feed.v1.MyFeedService/UpdateMyFeedFolder',
    requestStream: false,
    responseStream: false,
    requestType: my_feed_my_feed_pb.UpdateMyFeedFolderRequest,
    responseType: my_feed_my_feed_pb.UpdateMyFeedFolderResponse,
    requestSerialize: serialize_checkpicks_my_feed_v1_UpdateMyFeedFolderRequest,
    requestDeserialize: deserialize_checkpicks_my_feed_v1_UpdateMyFeedFolderRequest,
    responseSerialize: serialize_checkpicks_my_feed_v1_UpdateMyFeedFolderResponse,
    responseDeserialize: deserialize_checkpicks_my_feed_v1_UpdateMyFeedFolderResponse,
  },
  deleteMyFeedFolder: {
    path: '/checkpicks.my_feed.v1.MyFeedService/DeleteMyFeedFolder',
    requestStream: false,
    responseStream: false,
    requestType: my_feed_my_feed_pb.DeleteMyFeedFolderRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_checkpicks_my_feed_v1_DeleteMyFeedFolderRequest,
    requestDeserialize: deserialize_checkpicks_my_feed_v1_DeleteMyFeedFolderRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.MyFeedServiceClient = grpc.makeGenericClientConstructor(MyFeedServiceService);
