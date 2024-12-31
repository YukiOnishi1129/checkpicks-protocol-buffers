// package: checkpicks.my_feed.v1
// file: my_feed/my_feed.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as my_feed_my_feed_pb from "../my_feed/my_feed_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_common_pb from "../common/common_pb";
import * as content_content_pb from "../content/content_pb";

interface IMyFeedServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getMyFeedFolders: IMyFeedServiceService_IGetMyFeedFolders;
    getMyFeedFolder: IMyFeedServiceService_IGetMyFeedFolder;
    createMyFeedFolder: IMyFeedServiceService_ICreateMyFeedFolder;
    updateMyFeedFolder: IMyFeedServiceService_IUpdateMyFeedFolder;
    deleteMyFeedFolder: IMyFeedServiceService_IDeleteMyFeedFolder;
}

interface IMyFeedServiceService_IGetMyFeedFolders extends grpc.MethodDefinition<my_feed_my_feed_pb.GetMyFeedFoldersRequest, my_feed_my_feed_pb.GetMyFeedFoldersResponse> {
    path: "/checkpicks.my_feed.v1.MyFeedService/GetMyFeedFolders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<my_feed_my_feed_pb.GetMyFeedFoldersRequest>;
    requestDeserialize: grpc.deserialize<my_feed_my_feed_pb.GetMyFeedFoldersRequest>;
    responseSerialize: grpc.serialize<my_feed_my_feed_pb.GetMyFeedFoldersResponse>;
    responseDeserialize: grpc.deserialize<my_feed_my_feed_pb.GetMyFeedFoldersResponse>;
}
interface IMyFeedServiceService_IGetMyFeedFolder extends grpc.MethodDefinition<my_feed_my_feed_pb.GetMyFeedFolderRequest, my_feed_my_feed_pb.GetMyFeedFolderResponse> {
    path: "/checkpicks.my_feed.v1.MyFeedService/GetMyFeedFolder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<my_feed_my_feed_pb.GetMyFeedFolderRequest>;
    requestDeserialize: grpc.deserialize<my_feed_my_feed_pb.GetMyFeedFolderRequest>;
    responseSerialize: grpc.serialize<my_feed_my_feed_pb.GetMyFeedFolderResponse>;
    responseDeserialize: grpc.deserialize<my_feed_my_feed_pb.GetMyFeedFolderResponse>;
}
interface IMyFeedServiceService_ICreateMyFeedFolder extends grpc.MethodDefinition<my_feed_my_feed_pb.CreateMyFeedFolderRequest, my_feed_my_feed_pb.CreateMyFeedFolderResponse> {
    path: "/checkpicks.my_feed.v1.MyFeedService/CreateMyFeedFolder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<my_feed_my_feed_pb.CreateMyFeedFolderRequest>;
    requestDeserialize: grpc.deserialize<my_feed_my_feed_pb.CreateMyFeedFolderRequest>;
    responseSerialize: grpc.serialize<my_feed_my_feed_pb.CreateMyFeedFolderResponse>;
    responseDeserialize: grpc.deserialize<my_feed_my_feed_pb.CreateMyFeedFolderResponse>;
}
interface IMyFeedServiceService_IUpdateMyFeedFolder extends grpc.MethodDefinition<my_feed_my_feed_pb.UpdateMyFeedFolderRequest, my_feed_my_feed_pb.UpdateMyFeedFolderResponse> {
    path: "/checkpicks.my_feed.v1.MyFeedService/UpdateMyFeedFolder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<my_feed_my_feed_pb.UpdateMyFeedFolderRequest>;
    requestDeserialize: grpc.deserialize<my_feed_my_feed_pb.UpdateMyFeedFolderRequest>;
    responseSerialize: grpc.serialize<my_feed_my_feed_pb.UpdateMyFeedFolderResponse>;
    responseDeserialize: grpc.deserialize<my_feed_my_feed_pb.UpdateMyFeedFolderResponse>;
}
interface IMyFeedServiceService_IDeleteMyFeedFolder extends grpc.MethodDefinition<my_feed_my_feed_pb.DeleteMyFeedFolderRequest, google_protobuf_empty_pb.Empty> {
    path: "/checkpicks.my_feed.v1.MyFeedService/DeleteMyFeedFolder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<my_feed_my_feed_pb.DeleteMyFeedFolderRequest>;
    requestDeserialize: grpc.deserialize<my_feed_my_feed_pb.DeleteMyFeedFolderRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const MyFeedServiceService: IMyFeedServiceService;

export interface IMyFeedServiceServer extends grpc.UntypedServiceImplementation {
    getMyFeedFolders: grpc.handleUnaryCall<my_feed_my_feed_pb.GetMyFeedFoldersRequest, my_feed_my_feed_pb.GetMyFeedFoldersResponse>;
    getMyFeedFolder: grpc.handleUnaryCall<my_feed_my_feed_pb.GetMyFeedFolderRequest, my_feed_my_feed_pb.GetMyFeedFolderResponse>;
    createMyFeedFolder: grpc.handleUnaryCall<my_feed_my_feed_pb.CreateMyFeedFolderRequest, my_feed_my_feed_pb.CreateMyFeedFolderResponse>;
    updateMyFeedFolder: grpc.handleUnaryCall<my_feed_my_feed_pb.UpdateMyFeedFolderRequest, my_feed_my_feed_pb.UpdateMyFeedFolderResponse>;
    deleteMyFeedFolder: grpc.handleUnaryCall<my_feed_my_feed_pb.DeleteMyFeedFolderRequest, google_protobuf_empty_pb.Empty>;
}

export interface IMyFeedServiceClient {
    getMyFeedFolders(request: my_feed_my_feed_pb.GetMyFeedFoldersRequest, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.GetMyFeedFoldersResponse) => void): grpc.ClientUnaryCall;
    getMyFeedFolders(request: my_feed_my_feed_pb.GetMyFeedFoldersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.GetMyFeedFoldersResponse) => void): grpc.ClientUnaryCall;
    getMyFeedFolders(request: my_feed_my_feed_pb.GetMyFeedFoldersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.GetMyFeedFoldersResponse) => void): grpc.ClientUnaryCall;
    getMyFeedFolder(request: my_feed_my_feed_pb.GetMyFeedFolderRequest, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.GetMyFeedFolderResponse) => void): grpc.ClientUnaryCall;
    getMyFeedFolder(request: my_feed_my_feed_pb.GetMyFeedFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.GetMyFeedFolderResponse) => void): grpc.ClientUnaryCall;
    getMyFeedFolder(request: my_feed_my_feed_pb.GetMyFeedFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.GetMyFeedFolderResponse) => void): grpc.ClientUnaryCall;
    createMyFeedFolder(request: my_feed_my_feed_pb.CreateMyFeedFolderRequest, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.CreateMyFeedFolderResponse) => void): grpc.ClientUnaryCall;
    createMyFeedFolder(request: my_feed_my_feed_pb.CreateMyFeedFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.CreateMyFeedFolderResponse) => void): grpc.ClientUnaryCall;
    createMyFeedFolder(request: my_feed_my_feed_pb.CreateMyFeedFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.CreateMyFeedFolderResponse) => void): grpc.ClientUnaryCall;
    updateMyFeedFolder(request: my_feed_my_feed_pb.UpdateMyFeedFolderRequest, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.UpdateMyFeedFolderResponse) => void): grpc.ClientUnaryCall;
    updateMyFeedFolder(request: my_feed_my_feed_pb.UpdateMyFeedFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.UpdateMyFeedFolderResponse) => void): grpc.ClientUnaryCall;
    updateMyFeedFolder(request: my_feed_my_feed_pb.UpdateMyFeedFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.UpdateMyFeedFolderResponse) => void): grpc.ClientUnaryCall;
    deleteMyFeedFolder(request: my_feed_my_feed_pb.DeleteMyFeedFolderRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteMyFeedFolder(request: my_feed_my_feed_pb.DeleteMyFeedFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteMyFeedFolder(request: my_feed_my_feed_pb.DeleteMyFeedFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class MyFeedServiceClient extends grpc.Client implements IMyFeedServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getMyFeedFolders(request: my_feed_my_feed_pb.GetMyFeedFoldersRequest, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.GetMyFeedFoldersResponse) => void): grpc.ClientUnaryCall;
    public getMyFeedFolders(request: my_feed_my_feed_pb.GetMyFeedFoldersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.GetMyFeedFoldersResponse) => void): grpc.ClientUnaryCall;
    public getMyFeedFolders(request: my_feed_my_feed_pb.GetMyFeedFoldersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.GetMyFeedFoldersResponse) => void): grpc.ClientUnaryCall;
    public getMyFeedFolder(request: my_feed_my_feed_pb.GetMyFeedFolderRequest, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.GetMyFeedFolderResponse) => void): grpc.ClientUnaryCall;
    public getMyFeedFolder(request: my_feed_my_feed_pb.GetMyFeedFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.GetMyFeedFolderResponse) => void): grpc.ClientUnaryCall;
    public getMyFeedFolder(request: my_feed_my_feed_pb.GetMyFeedFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.GetMyFeedFolderResponse) => void): grpc.ClientUnaryCall;
    public createMyFeedFolder(request: my_feed_my_feed_pb.CreateMyFeedFolderRequest, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.CreateMyFeedFolderResponse) => void): grpc.ClientUnaryCall;
    public createMyFeedFolder(request: my_feed_my_feed_pb.CreateMyFeedFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.CreateMyFeedFolderResponse) => void): grpc.ClientUnaryCall;
    public createMyFeedFolder(request: my_feed_my_feed_pb.CreateMyFeedFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.CreateMyFeedFolderResponse) => void): grpc.ClientUnaryCall;
    public updateMyFeedFolder(request: my_feed_my_feed_pb.UpdateMyFeedFolderRequest, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.UpdateMyFeedFolderResponse) => void): grpc.ClientUnaryCall;
    public updateMyFeedFolder(request: my_feed_my_feed_pb.UpdateMyFeedFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.UpdateMyFeedFolderResponse) => void): grpc.ClientUnaryCall;
    public updateMyFeedFolder(request: my_feed_my_feed_pb.UpdateMyFeedFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: my_feed_my_feed_pb.UpdateMyFeedFolderResponse) => void): grpc.ClientUnaryCall;
    public deleteMyFeedFolder(request: my_feed_my_feed_pb.DeleteMyFeedFolderRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteMyFeedFolder(request: my_feed_my_feed_pb.DeleteMyFeedFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteMyFeedFolder(request: my_feed_my_feed_pb.DeleteMyFeedFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
