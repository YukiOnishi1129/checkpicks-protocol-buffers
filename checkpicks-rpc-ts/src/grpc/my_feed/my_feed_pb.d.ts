// package: checkpicks.my_feed.v1
// file: my_feed/my_feed.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_common_pb from "../common/common_pb";
import * as content_content_pb from "../content/content_pb";

export class GetMyFeedFoldersResponse extends jspb.Message { 
    clearMyFeedFolderEdgesList(): void;
    getMyFeedFolderEdgesList(): Array<MyFeedFolderEdge>;
    setMyFeedFolderEdgesList(value: Array<MyFeedFolderEdge>): GetMyFeedFoldersResponse;
    addMyFeedFolderEdges(value?: MyFeedFolderEdge, index?: number): MyFeedFolderEdge;

    hasPageInfo(): boolean;
    clearPageInfo(): void;
    getPageInfo(): common_common_pb.PageInfo | undefined;
    setPageInfo(value?: common_common_pb.PageInfo): GetMyFeedFoldersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMyFeedFoldersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMyFeedFoldersResponse): GetMyFeedFoldersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMyFeedFoldersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMyFeedFoldersResponse;
    static deserializeBinaryFromReader(message: GetMyFeedFoldersResponse, reader: jspb.BinaryReader): GetMyFeedFoldersResponse;
}

export namespace GetMyFeedFoldersResponse {
    export type AsObject = {
        myFeedFolderEdgesList: Array<MyFeedFolderEdge.AsObject>,
        pageInfo?: common_common_pb.PageInfo.AsObject,
    }
}

export class GetMyFeedFoldersRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetMyFeedFoldersRequest;

    hasKeyword(): boolean;
    clearKeyword(): void;
    getKeyword(): google_protobuf_wrappers_pb.StringValue | undefined;
    setKeyword(value?: google_protobuf_wrappers_pb.StringValue): GetMyFeedFoldersRequest;

    hasIsAllFetch(): boolean;
    clearIsAllFetch(): void;
    getIsAllFetch(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIsAllFetch(value?: google_protobuf_wrappers_pb.BoolValue): GetMyFeedFoldersRequest;
    getCursor(): string;
    setCursor(value: string): GetMyFeedFoldersRequest;
    getLimit(): number;
    setLimit(value: number): GetMyFeedFoldersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMyFeedFoldersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMyFeedFoldersRequest): GetMyFeedFoldersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMyFeedFoldersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMyFeedFoldersRequest;
    static deserializeBinaryFromReader(message: GetMyFeedFoldersRequest, reader: jspb.BinaryReader): GetMyFeedFoldersRequest;
}

export namespace GetMyFeedFoldersRequest {
    export type AsObject = {
        userId: string,
        keyword?: google_protobuf_wrappers_pb.StringValue.AsObject,
        isAllFetch?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        cursor: string,
        limit: number,
    }
}

export class GetMyFeedFolderResponse extends jspb.Message { 

    hasMyFeedFolder(): boolean;
    clearMyFeedFolder(): void;
    getMyFeedFolder(): MyFeedFolder | undefined;
    setMyFeedFolder(value?: MyFeedFolder): GetMyFeedFolderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMyFeedFolderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMyFeedFolderResponse): GetMyFeedFolderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMyFeedFolderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMyFeedFolderResponse;
    static deserializeBinaryFromReader(message: GetMyFeedFolderResponse, reader: jspb.BinaryReader): GetMyFeedFolderResponse;
}

export namespace GetMyFeedFolderResponse {
    export type AsObject = {
        myFeedFolder?: MyFeedFolder.AsObject,
    }
}

export class GetMyFeedFolderRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetMyFeedFolderRequest;
    getMyFeedFolderId(): string;
    setMyFeedFolderId(value: string): GetMyFeedFolderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMyFeedFolderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMyFeedFolderRequest): GetMyFeedFolderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMyFeedFolderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMyFeedFolderRequest;
    static deserializeBinaryFromReader(message: GetMyFeedFolderRequest, reader: jspb.BinaryReader): GetMyFeedFolderRequest;
}

export namespace GetMyFeedFolderRequest {
    export type AsObject = {
        userId: string,
        myFeedFolderId: string,
    }
}

export class CreateMyFeedFolderResponse extends jspb.Message { 

    hasMyFeedFolder(): boolean;
    clearMyFeedFolder(): void;
    getMyFeedFolder(): MyFeedFolder | undefined;
    setMyFeedFolder(value?: MyFeedFolder): CreateMyFeedFolderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateMyFeedFolderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateMyFeedFolderResponse): CreateMyFeedFolderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateMyFeedFolderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateMyFeedFolderResponse;
    static deserializeBinaryFromReader(message: CreateMyFeedFolderResponse, reader: jspb.BinaryReader): CreateMyFeedFolderResponse;
}

export namespace CreateMyFeedFolderResponse {
    export type AsObject = {
        myFeedFolder?: MyFeedFolder.AsObject,
    }
}

export class CreateMyFeedFolderRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): CreateMyFeedFolderRequest;
    getTitle(): string;
    setTitle(value: string): CreateMyFeedFolderRequest;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDescription(value?: google_protobuf_wrappers_pb.StringValue): CreateMyFeedFolderRequest;
    clearFeedIdListList(): void;
    getFeedIdListList(): Array<string>;
    setFeedIdListList(value: Array<string>): CreateMyFeedFolderRequest;
    addFeedIdList(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateMyFeedFolderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateMyFeedFolderRequest): CreateMyFeedFolderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateMyFeedFolderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateMyFeedFolderRequest;
    static deserializeBinaryFromReader(message: CreateMyFeedFolderRequest, reader: jspb.BinaryReader): CreateMyFeedFolderRequest;
}

export namespace CreateMyFeedFolderRequest {
    export type AsObject = {
        userId: string,
        title: string,
        description?: google_protobuf_wrappers_pb.StringValue.AsObject,
        feedIdListList: Array<string>,
    }
}

export class UpdateMyFeedFolderResponse extends jspb.Message { 

    hasMyFeedFolder(): boolean;
    clearMyFeedFolder(): void;
    getMyFeedFolder(): MyFeedFolder | undefined;
    setMyFeedFolder(value?: MyFeedFolder): UpdateMyFeedFolderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateMyFeedFolderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateMyFeedFolderResponse): UpdateMyFeedFolderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateMyFeedFolderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateMyFeedFolderResponse;
    static deserializeBinaryFromReader(message: UpdateMyFeedFolderResponse, reader: jspb.BinaryReader): UpdateMyFeedFolderResponse;
}

export namespace UpdateMyFeedFolderResponse {
    export type AsObject = {
        myFeedFolder?: MyFeedFolder.AsObject,
    }
}

export class UpdateMyFeedFolderRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): UpdateMyFeedFolderRequest;
    getMyFeedFolderId(): string;
    setMyFeedFolderId(value: string): UpdateMyFeedFolderRequest;
    getTitle(): string;
    setTitle(value: string): UpdateMyFeedFolderRequest;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDescription(value?: google_protobuf_wrappers_pb.StringValue): UpdateMyFeedFolderRequest;
    clearFeedIdListList(): void;
    getFeedIdListList(): Array<string>;
    setFeedIdListList(value: Array<string>): UpdateMyFeedFolderRequest;
    addFeedIdList(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateMyFeedFolderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateMyFeedFolderRequest): UpdateMyFeedFolderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateMyFeedFolderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateMyFeedFolderRequest;
    static deserializeBinaryFromReader(message: UpdateMyFeedFolderRequest, reader: jspb.BinaryReader): UpdateMyFeedFolderRequest;
}

export namespace UpdateMyFeedFolderRequest {
    export type AsObject = {
        userId: string,
        myFeedFolderId: string,
        title: string,
        description?: google_protobuf_wrappers_pb.StringValue.AsObject,
        feedIdListList: Array<string>,
    }
}

export class UpsertMyFeedListResponse extends jspb.Message { 
    clearMyFeedListList(): void;
    getMyFeedListList(): Array<MyFeed>;
    setMyFeedListList(value: Array<MyFeed>): UpsertMyFeedListResponse;
    addMyFeedList(value?: MyFeed, index?: number): MyFeed;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpsertMyFeedListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpsertMyFeedListResponse): UpsertMyFeedListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpsertMyFeedListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpsertMyFeedListResponse;
    static deserializeBinaryFromReader(message: UpsertMyFeedListResponse, reader: jspb.BinaryReader): UpsertMyFeedListResponse;
}

export namespace UpsertMyFeedListResponse {
    export type AsObject = {
        myFeedListList: Array<MyFeed.AsObject>,
    }
}

export class DeleteMyFeedFolderRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): DeleteMyFeedFolderRequest;
    getMyFeedFolderId(): string;
    setMyFeedFolderId(value: string): DeleteMyFeedFolderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteMyFeedFolderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteMyFeedFolderRequest): DeleteMyFeedFolderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteMyFeedFolderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteMyFeedFolderRequest;
    static deserializeBinaryFromReader(message: DeleteMyFeedFolderRequest, reader: jspb.BinaryReader): DeleteMyFeedFolderRequest;
}

export namespace DeleteMyFeedFolderRequest {
    export type AsObject = {
        userId: string,
        myFeedFolderId: string,
    }
}

export class UpsertMyFeedListRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): UpsertMyFeedListRequest;
    getMyFeedFolderId(): string;
    setMyFeedFolderId(value: string): UpsertMyFeedListRequest;
    clearFeedIdListList(): void;
    getFeedIdListList(): Array<string>;
    setFeedIdListList(value: Array<string>): UpsertMyFeedListRequest;
    addFeedIdList(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpsertMyFeedListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpsertMyFeedListRequest): UpsertMyFeedListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpsertMyFeedListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpsertMyFeedListRequest;
    static deserializeBinaryFromReader(message: UpsertMyFeedListRequest, reader: jspb.BinaryReader): UpsertMyFeedListRequest;
}

export namespace UpsertMyFeedListRequest {
    export type AsObject = {
        userId: string,
        myFeedFolderId: string,
        feedIdListList: Array<string>,
    }
}

export class DeleteMyFeedListRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): DeleteMyFeedListRequest;
    getMyFeedFolderId(): string;
    setMyFeedFolderId(value: string): DeleteMyFeedListRequest;
    getFeedId(): string;
    setFeedId(value: string): DeleteMyFeedListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteMyFeedListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteMyFeedListRequest): DeleteMyFeedListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteMyFeedListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteMyFeedListRequest;
    static deserializeBinaryFromReader(message: DeleteMyFeedListRequest, reader: jspb.BinaryReader): DeleteMyFeedListRequest;
}

export namespace DeleteMyFeedListRequest {
    export type AsObject = {
        userId: string,
        myFeedFolderId: string,
        feedId: string,
    }
}

export class MyFeedFolderEdge extends jspb.Message { 

    hasNode(): boolean;
    clearNode(): void;
    getNode(): MyFeedFolder | undefined;
    setNode(value?: MyFeedFolder): MyFeedFolderEdge;
    getCursor(): string;
    setCursor(value: string): MyFeedFolderEdge;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MyFeedFolderEdge.AsObject;
    static toObject(includeInstance: boolean, msg: MyFeedFolderEdge): MyFeedFolderEdge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MyFeedFolderEdge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MyFeedFolderEdge;
    static deserializeBinaryFromReader(message: MyFeedFolderEdge, reader: jspb.BinaryReader): MyFeedFolderEdge;
}

export namespace MyFeedFolderEdge {
    export type AsObject = {
        node?: MyFeedFolder.AsObject,
        cursor: string,
    }
}

export class MyFeedFolder extends jspb.Message { 
    getId(): string;
    setId(value: string): MyFeedFolder;
    getUserId(): string;
    setUserId(value: string): MyFeedFolder;
    getTitle(): string;
    setTitle(value: string): MyFeedFolder;
    clearFeedsList(): void;
    getFeedsList(): Array<content_content_pb.Feed>;
    setFeedsList(value: Array<content_content_pb.Feed>): MyFeedFolder;
    addFeeds(value?: content_content_pb.Feed, index?: number): content_content_pb.Feed;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDescription(value?: google_protobuf_wrappers_pb.StringValue): MyFeedFolder;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): MyFeedFolder;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): MyFeedFolder;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MyFeedFolder.AsObject;
    static toObject(includeInstance: boolean, msg: MyFeedFolder): MyFeedFolder.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MyFeedFolder, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MyFeedFolder;
    static deserializeBinaryFromReader(message: MyFeedFolder, reader: jspb.BinaryReader): MyFeedFolder;
}

export namespace MyFeedFolder {
    export type AsObject = {
        id: string,
        userId: string,
        title: string,
        feedsList: Array<content_content_pb.Feed.AsObject>,
        description?: google_protobuf_wrappers_pb.StringValue.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class MyFeed extends jspb.Message { 
    getId(): string;
    setId(value: string): MyFeed;
    getUserId(): string;
    setUserId(value: string): MyFeed;
    getMyFeedFolderId(): string;
    setMyFeedFolderId(value: string): MyFeed;
    getFeedId(): string;
    setFeedId(value: string): MyFeed;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): MyFeed;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): MyFeed;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MyFeed.AsObject;
    static toObject(includeInstance: boolean, msg: MyFeed): MyFeed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MyFeed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MyFeed;
    static deserializeBinaryFromReader(message: MyFeed, reader: jspb.BinaryReader): MyFeed;
}

export namespace MyFeed {
    export type AsObject = {
        id: string,
        userId: string,
        myFeedFolderId: string,
        feedId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
