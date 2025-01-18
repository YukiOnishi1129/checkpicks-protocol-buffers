// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var content_content_pb = require('../content/content_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_common_pb = require('../common/common_pb.js');

function serialize_checkpicks_content_v1_CreateArticleResponse(arg) {
  if (!(arg instanceof content_content_pb.CreateArticleResponse)) {
    throw new Error('Expected argument of type checkpicks.content.v1.CreateArticleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_CreateArticleResponse(buffer_arg) {
  return content_content_pb.CreateArticleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_content_v1_CreateUploadArticleRequest(arg) {
  if (!(arg instanceof content_content_pb.CreateUploadArticleRequest)) {
    throw new Error('Expected argument of type checkpicks.content.v1.CreateUploadArticleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_CreateUploadArticleRequest(buffer_arg) {
  return content_content_pb.CreateUploadArticleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_content_v1_DeleteArticleCommentRequest(arg) {
  if (!(arg instanceof content_content_pb.DeleteArticleCommentRequest)) {
    throw new Error('Expected argument of type checkpicks.content.v1.DeleteArticleCommentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_DeleteArticleCommentRequest(buffer_arg) {
  return content_content_pb.DeleteArticleCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_content_v1_GetArticleOGPRequest(arg) {
  if (!(arg instanceof content_content_pb.GetArticleOGPRequest)) {
    throw new Error('Expected argument of type checkpicks.content.v1.GetArticleOGPRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_GetArticleOGPRequest(buffer_arg) {
  return content_content_pb.GetArticleOGPRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_content_v1_GetArticleOGPResponse(arg) {
  if (!(arg instanceof content_content_pb.GetArticleOGPResponse)) {
    throw new Error('Expected argument of type checkpicks.content.v1.GetArticleOGPResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_GetArticleOGPResponse(buffer_arg) {
  return content_content_pb.GetArticleOGPResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_content_v1_GetArticleRequest(arg) {
  if (!(arg instanceof content_content_pb.GetArticleRequest)) {
    throw new Error('Expected argument of type checkpicks.content.v1.GetArticleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_GetArticleRequest(buffer_arg) {
  return content_content_pb.GetArticleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_content_v1_GetArticleResponse(arg) {
  if (!(arg instanceof content_content_pb.GetArticleResponse)) {
    throw new Error('Expected argument of type checkpicks.content.v1.GetArticleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_GetArticleResponse(buffer_arg) {
  return content_content_pb.GetArticleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_content_v1_GetFeedRequest(arg) {
  if (!(arg instanceof content_content_pb.GetFeedRequest)) {
    throw new Error('Expected argument of type checkpicks.content.v1.GetFeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_GetFeedRequest(buffer_arg) {
  return content_content_pb.GetFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_content_v1_GetFeedResponse(arg) {
  if (!(arg instanceof content_content_pb.GetFeedResponse)) {
    throw new Error('Expected argument of type checkpicks.content.v1.GetFeedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_GetFeedResponse(buffer_arg) {
  return content_content_pb.GetFeedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_content_v1_GetFeedsRequest(arg) {
  if (!(arg instanceof content_content_pb.GetFeedsRequest)) {
    throw new Error('Expected argument of type checkpicks.content.v1.GetFeedsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_GetFeedsRequest(buffer_arg) {
  return content_content_pb.GetFeedsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_content_v1_GetFeedsResponse(arg) {
  if (!(arg instanceof content_content_pb.GetFeedsResponse)) {
    throw new Error('Expected argument of type checkpicks.content.v1.GetFeedsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_GetFeedsResponse(buffer_arg) {
  return content_content_pb.GetFeedsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_content_v1_GetUserSavedArticleRequest(arg) {
  if (!(arg instanceof content_content_pb.GetUserSavedArticleRequest)) {
    throw new Error('Expected argument of type checkpicks.content.v1.GetUserSavedArticleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_GetUserSavedArticleRequest(buffer_arg) {
  return content_content_pb.GetUserSavedArticleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_content_v1_GetUserSavedArticleResponse(arg) {
  if (!(arg instanceof content_content_pb.GetUserSavedArticleResponse)) {
    throw new Error('Expected argument of type checkpicks.content.v1.GetUserSavedArticleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_GetUserSavedArticleResponse(buffer_arg) {
  return content_content_pb.GetUserSavedArticleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_content_v1_ListArticleByArticleURLRequest(arg) {
  if (!(arg instanceof content_content_pb.ListArticleByArticleURLRequest)) {
    throw new Error('Expected argument of type checkpicks.content.v1.ListArticleByArticleURLRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_ListArticleByArticleURLRequest(buffer_arg) {
  return content_content_pb.ListArticleByArticleURLRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_content_v1_ListArticleByArticleURLResponse(arg) {
  if (!(arg instanceof content_content_pb.ListArticleByArticleURLResponse)) {
    throw new Error('Expected argument of type checkpicks.content.v1.ListArticleByArticleURLResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_ListArticleByArticleURLResponse(buffer_arg) {
  return content_content_pb.ListArticleByArticleURLResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_content_v1_ListArticleRequest(arg) {
  if (!(arg instanceof content_content_pb.ListArticleRequest)) {
    throw new Error('Expected argument of type checkpicks.content.v1.ListArticleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_ListArticleRequest(buffer_arg) {
  return content_content_pb.ListArticleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_content_v1_ListArticleResponse(arg) {
  if (!(arg instanceof content_content_pb.ListArticleResponse)) {
    throw new Error('Expected argument of type checkpicks.content.v1.ListArticleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_ListArticleResponse(buffer_arg) {
  return content_content_pb.ListArticleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_content_v1_UpsertArticleCommentRequest(arg) {
  if (!(arg instanceof content_content_pb.UpsertArticleCommentRequest)) {
    throw new Error('Expected argument of type checkpicks.content.v1.UpsertArticleCommentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_UpsertArticleCommentRequest(buffer_arg) {
  return content_content_pb.UpsertArticleCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_checkpicks_content_v1_UpsertArticleCommentResponse(arg) {
  if (!(arg instanceof content_content_pb.UpsertArticleCommentResponse)) {
    throw new Error('Expected argument of type checkpicks.content.v1.UpsertArticleCommentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_checkpicks_content_v1_UpsertArticleCommentResponse(buffer_arg) {
  return content_content_pb.UpsertArticleCommentResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


var ContentServiceService = exports.ContentServiceService = {
  listArticle: {
    path: '/checkpicks.content.v1.ContentService/ListArticle',
    requestStream: false,
    responseStream: false,
    requestType: content_content_pb.ListArticleRequest,
    responseType: content_content_pb.ListArticleResponse,
    requestSerialize: serialize_checkpicks_content_v1_ListArticleRequest,
    requestDeserialize: deserialize_checkpicks_content_v1_ListArticleRequest,
    responseSerialize: serialize_checkpicks_content_v1_ListArticleResponse,
    responseDeserialize: deserialize_checkpicks_content_v1_ListArticleResponse,
  },
  listArticleByArticleURL: {
    path: '/checkpicks.content.v1.ContentService/ListArticleByArticleURL',
    requestStream: false,
    responseStream: false,
    requestType: content_content_pb.ListArticleByArticleURLRequest,
    responseType: content_content_pb.ListArticleByArticleURLResponse,
    requestSerialize: serialize_checkpicks_content_v1_ListArticleByArticleURLRequest,
    requestDeserialize: deserialize_checkpicks_content_v1_ListArticleByArticleURLRequest,
    responseSerialize: serialize_checkpicks_content_v1_ListArticleByArticleURLResponse,
    responseDeserialize: deserialize_checkpicks_content_v1_ListArticleByArticleURLResponse,
  },
  getArticle: {
    path: '/checkpicks.content.v1.ContentService/GetArticle',
    requestStream: false,
    responseStream: false,
    requestType: content_content_pb.GetArticleRequest,
    responseType: content_content_pb.GetArticleResponse,
    requestSerialize: serialize_checkpicks_content_v1_GetArticleRequest,
    requestDeserialize: deserialize_checkpicks_content_v1_GetArticleRequest,
    responseSerialize: serialize_checkpicks_content_v1_GetArticleResponse,
    responseDeserialize: deserialize_checkpicks_content_v1_GetArticleResponse,
  },
  getUserSavedArticles: {
    path: '/checkpicks.content.v1.ContentService/GetUserSavedArticles',
    requestStream: false,
    responseStream: false,
    requestType: content_content_pb.GetUserSavedArticleRequest,
    responseType: content_content_pb.GetUserSavedArticleResponse,
    requestSerialize: serialize_checkpicks_content_v1_GetUserSavedArticleRequest,
    requestDeserialize: deserialize_checkpicks_content_v1_GetUserSavedArticleRequest,
    responseSerialize: serialize_checkpicks_content_v1_GetUserSavedArticleResponse,
    responseDeserialize: deserialize_checkpicks_content_v1_GetUserSavedArticleResponse,
  },
  createUploadArticle: {
    path: '/checkpicks.content.v1.ContentService/CreateUploadArticle',
    requestStream: false,
    responseStream: false,
    requestType: content_content_pb.CreateUploadArticleRequest,
    responseType: content_content_pb.CreateArticleResponse,
    requestSerialize: serialize_checkpicks_content_v1_CreateUploadArticleRequest,
    requestDeserialize: deserialize_checkpicks_content_v1_CreateUploadArticleRequest,
    responseSerialize: serialize_checkpicks_content_v1_CreateArticleResponse,
    responseDeserialize: deserialize_checkpicks_content_v1_CreateArticleResponse,
  },
  getArticleOGP: {
    path: '/checkpicks.content.v1.ContentService/GetArticleOGP',
    requestStream: false,
    responseStream: false,
    requestType: content_content_pb.GetArticleOGPRequest,
    responseType: content_content_pb.GetArticleOGPResponse,
    requestSerialize: serialize_checkpicks_content_v1_GetArticleOGPRequest,
    requestDeserialize: deserialize_checkpicks_content_v1_GetArticleOGPRequest,
    responseSerialize: serialize_checkpicks_content_v1_GetArticleOGPResponse,
    responseDeserialize: deserialize_checkpicks_content_v1_GetArticleOGPResponse,
  },
  getFeeds: {
    path: '/checkpicks.content.v1.ContentService/GetFeeds',
    requestStream: false,
    responseStream: false,
    requestType: content_content_pb.GetFeedsRequest,
    responseType: content_content_pb.GetFeedsResponse,
    requestSerialize: serialize_checkpicks_content_v1_GetFeedsRequest,
    requestDeserialize: deserialize_checkpicks_content_v1_GetFeedsRequest,
    responseSerialize: serialize_checkpicks_content_v1_GetFeedsResponse,
    responseDeserialize: deserialize_checkpicks_content_v1_GetFeedsResponse,
  },
  getFeed: {
    path: '/checkpicks.content.v1.ContentService/GetFeed',
    requestStream: false,
    responseStream: false,
    requestType: content_content_pb.GetFeedRequest,
    responseType: content_content_pb.GetFeedResponse,
    requestSerialize: serialize_checkpicks_content_v1_GetFeedRequest,
    requestDeserialize: deserialize_checkpicks_content_v1_GetFeedRequest,
    responseSerialize: serialize_checkpicks_content_v1_GetFeedResponse,
    responseDeserialize: deserialize_checkpicks_content_v1_GetFeedResponse,
  },
  upsertArticleComment: {
    path: '/checkpicks.content.v1.ContentService/UpsertArticleComment',
    requestStream: false,
    responseStream: false,
    requestType: content_content_pb.UpsertArticleCommentRequest,
    responseType: content_content_pb.UpsertArticleCommentResponse,
    requestSerialize: serialize_checkpicks_content_v1_UpsertArticleCommentRequest,
    requestDeserialize: deserialize_checkpicks_content_v1_UpsertArticleCommentRequest,
    responseSerialize: serialize_checkpicks_content_v1_UpsertArticleCommentResponse,
    responseDeserialize: deserialize_checkpicks_content_v1_UpsertArticleCommentResponse,
  },
  deleteArticleComment: {
    path: '/checkpicks.content.v1.ContentService/DeleteArticleComment',
    requestStream: false,
    responseStream: false,
    requestType: content_content_pb.DeleteArticleCommentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_checkpicks_content_v1_DeleteArticleCommentRequest,
    requestDeserialize: deserialize_checkpicks_content_v1_DeleteArticleCommentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ContentServiceClient = grpc.makeGenericClientConstructor(ContentServiceService);
