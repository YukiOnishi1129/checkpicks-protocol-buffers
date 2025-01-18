// package: checkpicks.content.v1
// file: content/content.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as content_content_pb from "../content/content_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_common_pb from "../common/common_pb";

interface IContentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listArticle: IContentServiceService_IListArticle;
    listArticleByArticleURL: IContentServiceService_IListArticleByArticleURL;
    getArticle: IContentServiceService_IGetArticle;
    getUserSavedArticles: IContentServiceService_IGetUserSavedArticles;
    createUploadArticle: IContentServiceService_ICreateUploadArticle;
    getArticleOGP: IContentServiceService_IGetArticleOGP;
    getFeeds: IContentServiceService_IGetFeeds;
    getFeed: IContentServiceService_IGetFeed;
    upsertArticleComment: IContentServiceService_IUpsertArticleComment;
    deleteArticleComment: IContentServiceService_IDeleteArticleComment;
}

interface IContentServiceService_IListArticle extends grpc.MethodDefinition<content_content_pb.ListArticleRequest, content_content_pb.ListArticleResponse> {
    path: "/checkpicks.content.v1.ContentService/ListArticle";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<content_content_pb.ListArticleRequest>;
    requestDeserialize: grpc.deserialize<content_content_pb.ListArticleRequest>;
    responseSerialize: grpc.serialize<content_content_pb.ListArticleResponse>;
    responseDeserialize: grpc.deserialize<content_content_pb.ListArticleResponse>;
}
interface IContentServiceService_IListArticleByArticleURL extends grpc.MethodDefinition<content_content_pb.ListArticleByArticleURLRequest, content_content_pb.ListArticleByArticleURLResponse> {
    path: "/checkpicks.content.v1.ContentService/ListArticleByArticleURL";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<content_content_pb.ListArticleByArticleURLRequest>;
    requestDeserialize: grpc.deserialize<content_content_pb.ListArticleByArticleURLRequest>;
    responseSerialize: grpc.serialize<content_content_pb.ListArticleByArticleURLResponse>;
    responseDeserialize: grpc.deserialize<content_content_pb.ListArticleByArticleURLResponse>;
}
interface IContentServiceService_IGetArticle extends grpc.MethodDefinition<content_content_pb.GetArticleRequest, content_content_pb.GetArticleResponse> {
    path: "/checkpicks.content.v1.ContentService/GetArticle";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<content_content_pb.GetArticleRequest>;
    requestDeserialize: grpc.deserialize<content_content_pb.GetArticleRequest>;
    responseSerialize: grpc.serialize<content_content_pb.GetArticleResponse>;
    responseDeserialize: grpc.deserialize<content_content_pb.GetArticleResponse>;
}
interface IContentServiceService_IGetUserSavedArticles extends grpc.MethodDefinition<content_content_pb.GetUserSavedArticleRequest, content_content_pb.GetUserSavedArticleResponse> {
    path: "/checkpicks.content.v1.ContentService/GetUserSavedArticles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<content_content_pb.GetUserSavedArticleRequest>;
    requestDeserialize: grpc.deserialize<content_content_pb.GetUserSavedArticleRequest>;
    responseSerialize: grpc.serialize<content_content_pb.GetUserSavedArticleResponse>;
    responseDeserialize: grpc.deserialize<content_content_pb.GetUserSavedArticleResponse>;
}
interface IContentServiceService_ICreateUploadArticle extends grpc.MethodDefinition<content_content_pb.CreateUploadArticleRequest, content_content_pb.CreateArticleResponse> {
    path: "/checkpicks.content.v1.ContentService/CreateUploadArticle";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<content_content_pb.CreateUploadArticleRequest>;
    requestDeserialize: grpc.deserialize<content_content_pb.CreateUploadArticleRequest>;
    responseSerialize: grpc.serialize<content_content_pb.CreateArticleResponse>;
    responseDeserialize: grpc.deserialize<content_content_pb.CreateArticleResponse>;
}
interface IContentServiceService_IGetArticleOGP extends grpc.MethodDefinition<content_content_pb.GetArticleOGPRequest, content_content_pb.GetArticleOGPResponse> {
    path: "/checkpicks.content.v1.ContentService/GetArticleOGP";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<content_content_pb.GetArticleOGPRequest>;
    requestDeserialize: grpc.deserialize<content_content_pb.GetArticleOGPRequest>;
    responseSerialize: grpc.serialize<content_content_pb.GetArticleOGPResponse>;
    responseDeserialize: grpc.deserialize<content_content_pb.GetArticleOGPResponse>;
}
interface IContentServiceService_IGetFeeds extends grpc.MethodDefinition<content_content_pb.GetFeedsRequest, content_content_pb.GetFeedsResponse> {
    path: "/checkpicks.content.v1.ContentService/GetFeeds";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<content_content_pb.GetFeedsRequest>;
    requestDeserialize: grpc.deserialize<content_content_pb.GetFeedsRequest>;
    responseSerialize: grpc.serialize<content_content_pb.GetFeedsResponse>;
    responseDeserialize: grpc.deserialize<content_content_pb.GetFeedsResponse>;
}
interface IContentServiceService_IGetFeed extends grpc.MethodDefinition<content_content_pb.GetFeedRequest, content_content_pb.GetFeedResponse> {
    path: "/checkpicks.content.v1.ContentService/GetFeed";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<content_content_pb.GetFeedRequest>;
    requestDeserialize: grpc.deserialize<content_content_pb.GetFeedRequest>;
    responseSerialize: grpc.serialize<content_content_pb.GetFeedResponse>;
    responseDeserialize: grpc.deserialize<content_content_pb.GetFeedResponse>;
}
interface IContentServiceService_IUpsertArticleComment extends grpc.MethodDefinition<content_content_pb.UpsertArticleCommentRequest, content_content_pb.UpsertArticleCommentResponse> {
    path: "/checkpicks.content.v1.ContentService/UpsertArticleComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<content_content_pb.UpsertArticleCommentRequest>;
    requestDeserialize: grpc.deserialize<content_content_pb.UpsertArticleCommentRequest>;
    responseSerialize: grpc.serialize<content_content_pb.UpsertArticleCommentResponse>;
    responseDeserialize: grpc.deserialize<content_content_pb.UpsertArticleCommentResponse>;
}
interface IContentServiceService_IDeleteArticleComment extends grpc.MethodDefinition<content_content_pb.DeleteArticleCommentRequest, google_protobuf_empty_pb.Empty> {
    path: "/checkpicks.content.v1.ContentService/DeleteArticleComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<content_content_pb.DeleteArticleCommentRequest>;
    requestDeserialize: grpc.deserialize<content_content_pb.DeleteArticleCommentRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const ContentServiceService: IContentServiceService;

export interface IContentServiceServer extends grpc.UntypedServiceImplementation {
    listArticle: grpc.handleUnaryCall<content_content_pb.ListArticleRequest, content_content_pb.ListArticleResponse>;
    listArticleByArticleURL: grpc.handleUnaryCall<content_content_pb.ListArticleByArticleURLRequest, content_content_pb.ListArticleByArticleURLResponse>;
    getArticle: grpc.handleUnaryCall<content_content_pb.GetArticleRequest, content_content_pb.GetArticleResponse>;
    getUserSavedArticles: grpc.handleUnaryCall<content_content_pb.GetUserSavedArticleRequest, content_content_pb.GetUserSavedArticleResponse>;
    createUploadArticle: grpc.handleUnaryCall<content_content_pb.CreateUploadArticleRequest, content_content_pb.CreateArticleResponse>;
    getArticleOGP: grpc.handleUnaryCall<content_content_pb.GetArticleOGPRequest, content_content_pb.GetArticleOGPResponse>;
    getFeeds: grpc.handleUnaryCall<content_content_pb.GetFeedsRequest, content_content_pb.GetFeedsResponse>;
    getFeed: grpc.handleUnaryCall<content_content_pb.GetFeedRequest, content_content_pb.GetFeedResponse>;
    upsertArticleComment: grpc.handleUnaryCall<content_content_pb.UpsertArticleCommentRequest, content_content_pb.UpsertArticleCommentResponse>;
    deleteArticleComment: grpc.handleUnaryCall<content_content_pb.DeleteArticleCommentRequest, google_protobuf_empty_pb.Empty>;
}

export interface IContentServiceClient {
    listArticle(request: content_content_pb.ListArticleRequest, callback: (error: grpc.ServiceError | null, response: content_content_pb.ListArticleResponse) => void): grpc.ClientUnaryCall;
    listArticle(request: content_content_pb.ListArticleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_content_pb.ListArticleResponse) => void): grpc.ClientUnaryCall;
    listArticle(request: content_content_pb.ListArticleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_content_pb.ListArticleResponse) => void): grpc.ClientUnaryCall;
    listArticleByArticleURL(request: content_content_pb.ListArticleByArticleURLRequest, callback: (error: grpc.ServiceError | null, response: content_content_pb.ListArticleByArticleURLResponse) => void): grpc.ClientUnaryCall;
    listArticleByArticleURL(request: content_content_pb.ListArticleByArticleURLRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_content_pb.ListArticleByArticleURLResponse) => void): grpc.ClientUnaryCall;
    listArticleByArticleURL(request: content_content_pb.ListArticleByArticleURLRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_content_pb.ListArticleByArticleURLResponse) => void): grpc.ClientUnaryCall;
    getArticle(request: content_content_pb.GetArticleRequest, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetArticleResponse) => void): grpc.ClientUnaryCall;
    getArticle(request: content_content_pb.GetArticleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetArticleResponse) => void): grpc.ClientUnaryCall;
    getArticle(request: content_content_pb.GetArticleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetArticleResponse) => void): grpc.ClientUnaryCall;
    getUserSavedArticles(request: content_content_pb.GetUserSavedArticleRequest, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetUserSavedArticleResponse) => void): grpc.ClientUnaryCall;
    getUserSavedArticles(request: content_content_pb.GetUserSavedArticleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetUserSavedArticleResponse) => void): grpc.ClientUnaryCall;
    getUserSavedArticles(request: content_content_pb.GetUserSavedArticleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetUserSavedArticleResponse) => void): grpc.ClientUnaryCall;
    createUploadArticle(request: content_content_pb.CreateUploadArticleRequest, callback: (error: grpc.ServiceError | null, response: content_content_pb.CreateArticleResponse) => void): grpc.ClientUnaryCall;
    createUploadArticle(request: content_content_pb.CreateUploadArticleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_content_pb.CreateArticleResponse) => void): grpc.ClientUnaryCall;
    createUploadArticle(request: content_content_pb.CreateUploadArticleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_content_pb.CreateArticleResponse) => void): grpc.ClientUnaryCall;
    getArticleOGP(request: content_content_pb.GetArticleOGPRequest, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetArticleOGPResponse) => void): grpc.ClientUnaryCall;
    getArticleOGP(request: content_content_pb.GetArticleOGPRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetArticleOGPResponse) => void): grpc.ClientUnaryCall;
    getArticleOGP(request: content_content_pb.GetArticleOGPRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetArticleOGPResponse) => void): grpc.ClientUnaryCall;
    getFeeds(request: content_content_pb.GetFeedsRequest, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetFeedsResponse) => void): grpc.ClientUnaryCall;
    getFeeds(request: content_content_pb.GetFeedsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetFeedsResponse) => void): grpc.ClientUnaryCall;
    getFeeds(request: content_content_pb.GetFeedsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetFeedsResponse) => void): grpc.ClientUnaryCall;
    getFeed(request: content_content_pb.GetFeedRequest, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetFeedResponse) => void): grpc.ClientUnaryCall;
    getFeed(request: content_content_pb.GetFeedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetFeedResponse) => void): grpc.ClientUnaryCall;
    getFeed(request: content_content_pb.GetFeedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetFeedResponse) => void): grpc.ClientUnaryCall;
    upsertArticleComment(request: content_content_pb.UpsertArticleCommentRequest, callback: (error: grpc.ServiceError | null, response: content_content_pb.UpsertArticleCommentResponse) => void): grpc.ClientUnaryCall;
    upsertArticleComment(request: content_content_pb.UpsertArticleCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_content_pb.UpsertArticleCommentResponse) => void): grpc.ClientUnaryCall;
    upsertArticleComment(request: content_content_pb.UpsertArticleCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_content_pb.UpsertArticleCommentResponse) => void): grpc.ClientUnaryCall;
    deleteArticleComment(request: content_content_pb.DeleteArticleCommentRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteArticleComment(request: content_content_pb.DeleteArticleCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteArticleComment(request: content_content_pb.DeleteArticleCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class ContentServiceClient extends grpc.Client implements IContentServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listArticle(request: content_content_pb.ListArticleRequest, callback: (error: grpc.ServiceError | null, response: content_content_pb.ListArticleResponse) => void): grpc.ClientUnaryCall;
    public listArticle(request: content_content_pb.ListArticleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_content_pb.ListArticleResponse) => void): grpc.ClientUnaryCall;
    public listArticle(request: content_content_pb.ListArticleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_content_pb.ListArticleResponse) => void): grpc.ClientUnaryCall;
    public listArticleByArticleURL(request: content_content_pb.ListArticleByArticleURLRequest, callback: (error: grpc.ServiceError | null, response: content_content_pb.ListArticleByArticleURLResponse) => void): grpc.ClientUnaryCall;
    public listArticleByArticleURL(request: content_content_pb.ListArticleByArticleURLRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_content_pb.ListArticleByArticleURLResponse) => void): grpc.ClientUnaryCall;
    public listArticleByArticleURL(request: content_content_pb.ListArticleByArticleURLRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_content_pb.ListArticleByArticleURLResponse) => void): grpc.ClientUnaryCall;
    public getArticle(request: content_content_pb.GetArticleRequest, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetArticleResponse) => void): grpc.ClientUnaryCall;
    public getArticle(request: content_content_pb.GetArticleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetArticleResponse) => void): grpc.ClientUnaryCall;
    public getArticle(request: content_content_pb.GetArticleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetArticleResponse) => void): grpc.ClientUnaryCall;
    public getUserSavedArticles(request: content_content_pb.GetUserSavedArticleRequest, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetUserSavedArticleResponse) => void): grpc.ClientUnaryCall;
    public getUserSavedArticles(request: content_content_pb.GetUserSavedArticleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetUserSavedArticleResponse) => void): grpc.ClientUnaryCall;
    public getUserSavedArticles(request: content_content_pb.GetUserSavedArticleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetUserSavedArticleResponse) => void): grpc.ClientUnaryCall;
    public createUploadArticle(request: content_content_pb.CreateUploadArticleRequest, callback: (error: grpc.ServiceError | null, response: content_content_pb.CreateArticleResponse) => void): grpc.ClientUnaryCall;
    public createUploadArticle(request: content_content_pb.CreateUploadArticleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_content_pb.CreateArticleResponse) => void): grpc.ClientUnaryCall;
    public createUploadArticle(request: content_content_pb.CreateUploadArticleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_content_pb.CreateArticleResponse) => void): grpc.ClientUnaryCall;
    public getArticleOGP(request: content_content_pb.GetArticleOGPRequest, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetArticleOGPResponse) => void): grpc.ClientUnaryCall;
    public getArticleOGP(request: content_content_pb.GetArticleOGPRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetArticleOGPResponse) => void): grpc.ClientUnaryCall;
    public getArticleOGP(request: content_content_pb.GetArticleOGPRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetArticleOGPResponse) => void): grpc.ClientUnaryCall;
    public getFeeds(request: content_content_pb.GetFeedsRequest, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetFeedsResponse) => void): grpc.ClientUnaryCall;
    public getFeeds(request: content_content_pb.GetFeedsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetFeedsResponse) => void): grpc.ClientUnaryCall;
    public getFeeds(request: content_content_pb.GetFeedsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetFeedsResponse) => void): grpc.ClientUnaryCall;
    public getFeed(request: content_content_pb.GetFeedRequest, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetFeedResponse) => void): grpc.ClientUnaryCall;
    public getFeed(request: content_content_pb.GetFeedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetFeedResponse) => void): grpc.ClientUnaryCall;
    public getFeed(request: content_content_pb.GetFeedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_content_pb.GetFeedResponse) => void): grpc.ClientUnaryCall;
    public upsertArticleComment(request: content_content_pb.UpsertArticleCommentRequest, callback: (error: grpc.ServiceError | null, response: content_content_pb.UpsertArticleCommentResponse) => void): grpc.ClientUnaryCall;
    public upsertArticleComment(request: content_content_pb.UpsertArticleCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_content_pb.UpsertArticleCommentResponse) => void): grpc.ClientUnaryCall;
    public upsertArticleComment(request: content_content_pb.UpsertArticleCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_content_pb.UpsertArticleCommentResponse) => void): grpc.ClientUnaryCall;
    public deleteArticleComment(request: content_content_pb.DeleteArticleCommentRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteArticleComment(request: content_content_pb.DeleteArticleCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteArticleComment(request: content_content_pb.DeleteArticleCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
