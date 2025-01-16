// package: checkpicks.content.v1
// file: content/content.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_common_pb from "../common/common_pb";

export class ListArticleRequest extends jspb.Message { 

    hasUserId(): boolean;
    clearUserId(): void;
    getUserId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUserId(value?: google_protobuf_wrappers_pb.StringValue): ListArticleRequest;

    hasLanguageStatus(): boolean;
    clearLanguageStatus(): void;
    getLanguageStatus(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLanguageStatus(value?: google_protobuf_wrappers_pb.Int64Value): ListArticleRequest;

    hasTag(): boolean;
    clearTag(): void;
    getTag(): google_protobuf_wrappers_pb.StringValue | undefined;
    setTag(value?: google_protobuf_wrappers_pb.StringValue): ListArticleRequest;
    clearFeedIdsList(): void;
    getFeedIdsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setFeedIdsList(value: Array<google_protobuf_wrappers_pb.StringValue>): ListArticleRequest;
    addFeedIds(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearKeywordsList(): void;
    getKeywordsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setKeywordsList(value: Array<google_protobuf_wrappers_pb.StringValue>): ListArticleRequest;
    addKeywords(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    getCursor(): string;
    setCursor(value: string): ListArticleRequest;
    getLimit(): number;
    setLimit(value: number): ListArticleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListArticleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListArticleRequest): ListArticleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListArticleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListArticleRequest;
    static deserializeBinaryFromReader(message: ListArticleRequest, reader: jspb.BinaryReader): ListArticleRequest;
}

export namespace ListArticleRequest {
    export type AsObject = {
        userId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        languageStatus?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        tag?: google_protobuf_wrappers_pb.StringValue.AsObject,
        feedIdsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        keywordsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        cursor: string,
        limit: number,
    }
}

export class ListArticleResponse extends jspb.Message { 
    clearArticlesedgeList(): void;
    getArticlesedgeList(): Array<ArticleEdge>;
    setArticlesedgeList(value: Array<ArticleEdge>): ListArticleResponse;
    addArticlesedge(value?: ArticleEdge, index?: number): ArticleEdge;

    hasPageInfo(): boolean;
    clearPageInfo(): void;
    getPageInfo(): common_common_pb.PageInfo | undefined;
    setPageInfo(value?: common_common_pb.PageInfo): ListArticleResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListArticleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListArticleResponse): ListArticleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListArticleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListArticleResponse;
    static deserializeBinaryFromReader(message: ListArticleResponse, reader: jspb.BinaryReader): ListArticleResponse;
}

export namespace ListArticleResponse {
    export type AsObject = {
        articlesedgeList: Array<ArticleEdge.AsObject>,
        pageInfo?: common_common_pb.PageInfo.AsObject,
    }
}

export class ListArticleByArticleURLRequest extends jspb.Message { 
    getArticleUrl(): string;
    setArticleUrl(value: string): ListArticleByArticleURLRequest;
    getCursor(): string;
    setCursor(value: string): ListArticleByArticleURLRequest;
    getLimit(): number;
    setLimit(value: number): ListArticleByArticleURLRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListArticleByArticleURLRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListArticleByArticleURLRequest): ListArticleByArticleURLRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListArticleByArticleURLRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListArticleByArticleURLRequest;
    static deserializeBinaryFromReader(message: ListArticleByArticleURLRequest, reader: jspb.BinaryReader): ListArticleByArticleURLRequest;
}

export namespace ListArticleByArticleURLRequest {
    export type AsObject = {
        articleUrl: string,
        cursor: string,
        limit: number,
    }
}

export class ListArticleByArticleURLResponse extends jspb.Message { 
    clearArticlesedgeList(): void;
    getArticlesedgeList(): Array<TemporaryArticleEdge>;
    setArticlesedgeList(value: Array<TemporaryArticleEdge>): ListArticleByArticleURLResponse;
    addArticlesedge(value?: TemporaryArticleEdge, index?: number): TemporaryArticleEdge;

    hasPageInfo(): boolean;
    clearPageInfo(): void;
    getPageInfo(): common_common_pb.PageInfo | undefined;
    setPageInfo(value?: common_common_pb.PageInfo): ListArticleByArticleURLResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListArticleByArticleURLResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListArticleByArticleURLResponse): ListArticleByArticleURLResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListArticleByArticleURLResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListArticleByArticleURLResponse;
    static deserializeBinaryFromReader(message: ListArticleByArticleURLResponse, reader: jspb.BinaryReader): ListArticleByArticleURLResponse;
}

export namespace ListArticleByArticleURLResponse {
    export type AsObject = {
        articlesedgeList: Array<TemporaryArticleEdge.AsObject>,
        pageInfo?: common_common_pb.PageInfo.AsObject,
    }
}

export class CreateArticleResponse extends jspb.Message { 

    hasArticle(): boolean;
    clearArticle(): void;
    getArticle(): Article | undefined;
    setArticle(value?: Article): CreateArticleResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateArticleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateArticleResponse): CreateArticleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateArticleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateArticleResponse;
    static deserializeBinaryFromReader(message: CreateArticleResponse, reader: jspb.BinaryReader): CreateArticleResponse;
}

export namespace CreateArticleResponse {
    export type AsObject = {
        article?: Article.AsObject,
    }
}

export class CreateUploadArticleRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): CreateUploadArticleRequest;
    getTitle(): string;
    setTitle(value: string): CreateUploadArticleRequest;
    getDescription(): string;
    setDescription(value: string): CreateUploadArticleRequest;
    getArticleUrl(): string;
    setArticleUrl(value: string): CreateUploadArticleRequest;
    getThumbnailUrl(): string;
    setThumbnailUrl(value: string): CreateUploadArticleRequest;
    getPlatformName(): string;
    setPlatformName(value: string): CreateUploadArticleRequest;
    getPlatformUrl(): string;
    setPlatformUrl(value: string): CreateUploadArticleRequest;
    getPlatformFaviconUrl(): string;
    setPlatformFaviconUrl(value: string): CreateUploadArticleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUploadArticleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUploadArticleRequest): CreateUploadArticleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUploadArticleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUploadArticleRequest;
    static deserializeBinaryFromReader(message: CreateUploadArticleRequest, reader: jspb.BinaryReader): CreateUploadArticleRequest;
}

export namespace CreateUploadArticleRequest {
    export type AsObject = {
        userId: string,
        title: string,
        description: string,
        articleUrl: string,
        thumbnailUrl: string,
        platformName: string,
        platformUrl: string,
        platformFaviconUrl: string,
    }
}

export class GetArticleOGPResponse extends jspb.Message { 

    hasOgp(): boolean;
    clearOgp(): void;
    getOgp(): OGP | undefined;
    setOgp(value?: OGP): GetArticleOGPResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetArticleOGPResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetArticleOGPResponse): GetArticleOGPResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetArticleOGPResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetArticleOGPResponse;
    static deserializeBinaryFromReader(message: GetArticleOGPResponse, reader: jspb.BinaryReader): GetArticleOGPResponse;
}

export namespace GetArticleOGPResponse {
    export type AsObject = {
        ogp?: OGP.AsObject,
    }
}

export class GetArticleOGPRequest extends jspb.Message { 
    getArticleUrl(): string;
    setArticleUrl(value: string): GetArticleOGPRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetArticleOGPRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetArticleOGPRequest): GetArticleOGPRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetArticleOGPRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetArticleOGPRequest;
    static deserializeBinaryFromReader(message: GetArticleOGPRequest, reader: jspb.BinaryReader): GetArticleOGPRequest;
}

export namespace GetArticleOGPRequest {
    export type AsObject = {
        articleUrl: string,
    }
}

export class GetFeedsResponse extends jspb.Message { 
    clearFeedEdgeList(): void;
    getFeedEdgeList(): Array<FeedEdge>;
    setFeedEdgeList(value: Array<FeedEdge>): GetFeedsResponse;
    addFeedEdge(value?: FeedEdge, index?: number): FeedEdge;

    hasPageInfo(): boolean;
    clearPageInfo(): void;
    getPageInfo(): common_common_pb.PageInfo | undefined;
    setPageInfo(value?: common_common_pb.PageInfo): GetFeedsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFeedsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetFeedsResponse): GetFeedsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFeedsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFeedsResponse;
    static deserializeBinaryFromReader(message: GetFeedsResponse, reader: jspb.BinaryReader): GetFeedsResponse;
}

export namespace GetFeedsResponse {
    export type AsObject = {
        feedEdgeList: Array<FeedEdge.AsObject>,
        pageInfo?: common_common_pb.PageInfo.AsObject,
    }
}

export class GetFeedsRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetFeedsRequest;

    hasPlatformSiteType(): boolean;
    clearPlatformSiteType(): void;
    getPlatformSiteType(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setPlatformSiteType(value?: google_protobuf_wrappers_pb.Int64Value): GetFeedsRequest;

    hasPlatformId(): boolean;
    clearPlatformId(): void;
    getPlatformId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPlatformId(value?: google_protobuf_wrappers_pb.StringValue): GetFeedsRequest;
    clearKeywordsList(): void;
    getKeywordsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setKeywordsList(value: Array<google_protobuf_wrappers_pb.StringValue>): GetFeedsRequest;
    addKeywords(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearFeedIdsList(): void;
    getFeedIdsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setFeedIdsList(value: Array<google_protobuf_wrappers_pb.StringValue>): GetFeedsRequest;
    addFeedIds(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasIsAllFetch(): boolean;
    clearIsAllFetch(): void;
    getIsAllFetch(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIsAllFetch(value?: google_protobuf_wrappers_pb.BoolValue): GetFeedsRequest;
    getCursor(): string;
    setCursor(value: string): GetFeedsRequest;
    getLimit(): number;
    setLimit(value: number): GetFeedsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFeedsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFeedsRequest): GetFeedsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFeedsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFeedsRequest;
    static deserializeBinaryFromReader(message: GetFeedsRequest, reader: jspb.BinaryReader): GetFeedsRequest;
}

export namespace GetFeedsRequest {
    export type AsObject = {
        userId: string,
        platformSiteType?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        platformId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        keywordsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        feedIdsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        isAllFetch?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        cursor: string,
        limit: number,
    }
}

export class GetFeedResponse extends jspb.Message { 

    hasFeed(): boolean;
    clearFeed(): void;
    getFeed(): Feed | undefined;
    setFeed(value?: Feed): GetFeedResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFeedResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetFeedResponse): GetFeedResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFeedResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFeedResponse;
    static deserializeBinaryFromReader(message: GetFeedResponse, reader: jspb.BinaryReader): GetFeedResponse;
}

export namespace GetFeedResponse {
    export type AsObject = {
        feed?: Feed.AsObject,
    }
}

export class GetFeedRequest extends jspb.Message { 
    getFeedId(): string;
    setFeedId(value: string): GetFeedRequest;
    getUserId(): string;
    setUserId(value: string): GetFeedRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFeedRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFeedRequest): GetFeedRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFeedRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFeedRequest;
    static deserializeBinaryFromReader(message: GetFeedRequest, reader: jspb.BinaryReader): GetFeedRequest;
}

export namespace GetFeedRequest {
    export type AsObject = {
        feedId: string,
        userId: string,
    }
}

export class UpsertArticleCommentResponse extends jspb.Message { 

    hasComment(): boolean;
    clearComment(): void;
    getComment(): ArticleComment | undefined;
    setComment(value?: ArticleComment): UpsertArticleCommentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpsertArticleCommentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpsertArticleCommentResponse): UpsertArticleCommentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpsertArticleCommentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpsertArticleCommentResponse;
    static deserializeBinaryFromReader(message: UpsertArticleCommentResponse, reader: jspb.BinaryReader): UpsertArticleCommentResponse;
}

export namespace UpsertArticleCommentResponse {
    export type AsObject = {
        comment?: ArticleComment.AsObject,
    }
}

export class UpsertArticleCommentRequest extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): UpsertArticleCommentRequest;
    getUserId(): string;
    setUserId(value: string): UpsertArticleCommentRequest;
    getArticleId(): string;
    setArticleId(value: string): UpsertArticleCommentRequest;
    getComment(): string;
    setComment(value: string): UpsertArticleCommentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpsertArticleCommentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpsertArticleCommentRequest): UpsertArticleCommentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpsertArticleCommentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpsertArticleCommentRequest;
    static deserializeBinaryFromReader(message: UpsertArticleCommentRequest, reader: jspb.BinaryReader): UpsertArticleCommentRequest;
}

export namespace UpsertArticleCommentRequest {
    export type AsObject = {
        id?: google_protobuf_wrappers_pb.StringValue.AsObject,
        userId: string,
        articleId: string,
        comment: string,
    }
}

export class Feed extends jspb.Message { 
    getId(): string;
    setId(value: string): Feed;

    hasPlatform(): boolean;
    clearPlatform(): void;
    getPlatform(): Platform | undefined;
    setPlatform(value?: Platform): Feed;

    hasCategory(): boolean;
    clearCategory(): void;
    getCategory(): Category | undefined;
    setCategory(value?: Category): Feed;
    clearMyFeedIdsList(): void;
    getMyFeedIdsList(): Array<string>;
    setMyFeedIdsList(value: Array<string>): Feed;
    addMyFeedIds(value: string, index?: number): string;
    getName(): string;
    setName(value: string): Feed;
    getDescription(): string;
    setDescription(value: string): Feed;
    getRssUrl(): string;
    setRssUrl(value: string): Feed;
    getSiteUrl(): string;
    setSiteUrl(value: string): Feed;
    getThumbnailUrl(): string;
    setThumbnailUrl(value: string): Feed;
    getTrendPlatformType(): number;
    setTrendPlatformType(value: number): Feed;

    hasApiQueryParam(): boolean;
    clearApiQueryParam(): void;
    getApiQueryParam(): google_protobuf_wrappers_pb.StringValue | undefined;
    setApiQueryParam(value?: google_protobuf_wrappers_pb.StringValue): Feed;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Feed;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Feed;

    hasDeletedAt(): boolean;
    clearDeletedAt(): void;
    getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Feed;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Feed.AsObject;
    static toObject(includeInstance: boolean, msg: Feed): Feed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Feed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Feed;
    static deserializeBinaryFromReader(message: Feed, reader: jspb.BinaryReader): Feed;
}

export namespace Feed {
    export type AsObject = {
        id: string,
        platform?: Platform.AsObject,
        category?: Category.AsObject,
        myFeedIdsList: Array<string>,
        name: string,
        description: string,
        rssUrl: string,
        siteUrl: string,
        thumbnailUrl: string,
        trendPlatformType: number,
        apiQueryParam?: google_protobuf_wrappers_pb.StringValue.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Category extends jspb.Message { 
    getId(): string;
    setId(value: string): Category;
    getName(): string;
    setName(value: string): Category;
    getType(): number;
    setType(value: number): Category;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Category;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Category;

    hasDeletedAt(): boolean;
    clearDeletedAt(): void;
    getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Category;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category.AsObject;
    static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category;
    static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
    export type AsObject = {
        id: string,
        name: string,
        type: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Platform extends jspb.Message { 
    getId(): string;
    setId(value: string): Platform;
    getName(): string;
    setName(value: string): Platform;
    getSiteUrl(): string;
    setSiteUrl(value: string): Platform;
    getPlatformSiteType(): number;
    setPlatformSiteType(value: number): Platform;
    getFaviconUrl(): string;
    setFaviconUrl(value: string): Platform;
    getIsEng(): boolean;
    setIsEng(value: boolean): Platform;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Platform;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Platform;

    hasDeletedAt(): boolean;
    clearDeletedAt(): void;
    getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Platform;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Platform.AsObject;
    static toObject(includeInstance: boolean, msg: Platform): Platform.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Platform, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Platform;
    static deserializeBinaryFromReader(message: Platform, reader: jspb.BinaryReader): Platform;
}

export namespace Platform {
    export type AsObject = {
        id: string,
        name: string,
        siteUrl: string,
        platformSiteType: number,
        faviconUrl: string,
        isEng: boolean,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class TemporaryArticle extends jspb.Message { 
    getId(): string;
    setId(value: string): TemporaryArticle;
    getTitle(): string;
    setTitle(value: string): TemporaryArticle;
    getDescription(): string;
    setDescription(value: string): TemporaryArticle;
    getArticleUrl(): string;
    setArticleUrl(value: string): TemporaryArticle;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): TemporaryArticle;

    hasAuthorName(): boolean;
    clearAuthorName(): void;
    getAuthorName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAuthorName(value?: google_protobuf_wrappers_pb.StringValue): TemporaryArticle;

    hasTags(): boolean;
    clearTags(): void;
    getTags(): google_protobuf_wrappers_pb.StringValue | undefined;
    setTags(value?: google_protobuf_wrappers_pb.StringValue): TemporaryArticle;
    getThumbnailUrl(): string;
    setThumbnailUrl(value: string): TemporaryArticle;
    getIsEng(): boolean;
    setIsEng(value: boolean): TemporaryArticle;
    getIsPrivate(): boolean;
    setIsPrivate(value: boolean): TemporaryArticle;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): TemporaryArticle;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): TemporaryArticle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TemporaryArticle.AsObject;
    static toObject(includeInstance: boolean, msg: TemporaryArticle): TemporaryArticle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TemporaryArticle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TemporaryArticle;
    static deserializeBinaryFromReader(message: TemporaryArticle, reader: jspb.BinaryReader): TemporaryArticle;
}

export namespace TemporaryArticle {
    export type AsObject = {
        id: string,
        title: string,
        description: string,
        articleUrl: string,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        authorName?: google_protobuf_wrappers_pb.StringValue.AsObject,
        tags?: google_protobuf_wrappers_pb.StringValue.AsObject,
        thumbnailUrl: string,
        isEng: boolean,
        isPrivate: boolean,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class TemporaryArticleEdge extends jspb.Message { 

    hasArticle(): boolean;
    clearArticle(): void;
    getArticle(): TemporaryArticle | undefined;
    setArticle(value?: TemporaryArticle): TemporaryArticleEdge;

    hasPlatform(): boolean;
    clearPlatform(): void;
    getPlatform(): Platform | undefined;
    setPlatform(value?: Platform): TemporaryArticleEdge;
    getCursor(): string;
    setCursor(value: string): TemporaryArticleEdge;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TemporaryArticleEdge.AsObject;
    static toObject(includeInstance: boolean, msg: TemporaryArticleEdge): TemporaryArticleEdge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TemporaryArticleEdge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TemporaryArticleEdge;
    static deserializeBinaryFromReader(message: TemporaryArticleEdge, reader: jspb.BinaryReader): TemporaryArticleEdge;
}

export namespace TemporaryArticleEdge {
    export type AsObject = {
        article?: TemporaryArticle.AsObject,
        platform?: Platform.AsObject,
        cursor: string,
    }
}

export class Article extends jspb.Message { 
    getId(): string;
    setId(value: string): Article;

    hasPlatform(): boolean;
    clearPlatform(): void;
    getPlatform(): Platform | undefined;
    setPlatform(value?: Platform): Article;
    clearFeedsList(): void;
    getFeedsList(): Array<Feed>;
    setFeedsList(value: Array<Feed>): Article;
    addFeeds(value?: Feed, index?: number): Feed;

    hasComment(): boolean;
    clearComment(): void;
    getComment(): ArticleComment | undefined;
    setComment(value?: ArticleComment): Article;
    getTitle(): string;
    setTitle(value: string): Article;
    getDescription(): string;
    setDescription(value: string): Article;
    getArticleUrl(): string;
    setArticleUrl(value: string): Article;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): Article;

    hasAuthorName(): boolean;
    clearAuthorName(): void;
    getAuthorName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAuthorName(value?: google_protobuf_wrappers_pb.StringValue): Article;

    hasTags(): boolean;
    clearTags(): void;
    getTags(): google_protobuf_wrappers_pb.StringValue | undefined;
    setTags(value?: google_protobuf_wrappers_pb.StringValue): Article;
    getThumbnailUrl(): string;
    setThumbnailUrl(value: string): Article;
    getIsEng(): boolean;
    setIsEng(value: boolean): Article;
    getIsPrivate(): boolean;
    setIsPrivate(value: boolean): Article;

    hasBookmarkId(): boolean;
    clearBookmarkId(): void;
    getBookmarkId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setBookmarkId(value?: google_protobuf_wrappers_pb.StringValue): Article;
    getIsBookmarked(): boolean;
    setIsBookmarked(value: boolean): Article;
    getIsFollowing(): boolean;
    setIsFollowing(value: boolean): Article;
    clearFavoriteArticleFolderIdsList(): void;
    getFavoriteArticleFolderIdsList(): Array<string>;
    setFavoriteArticleFolderIdsList(value: Array<string>): Article;
    addFavoriteArticleFolderIds(value: string, index?: number): string;
    getLikeCount(): number;
    setLikeCount(value: number): Article;
    getIsTrend(): boolean;
    setIsTrend(value: boolean): Article;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Article;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Article;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Article.AsObject;
    static toObject(includeInstance: boolean, msg: Article): Article.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Article, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Article;
    static deserializeBinaryFromReader(message: Article, reader: jspb.BinaryReader): Article;
}

export namespace Article {
    export type AsObject = {
        id: string,
        platform?: Platform.AsObject,
        feedsList: Array<Feed.AsObject>,
        comment?: ArticleComment.AsObject,
        title: string,
        description: string,
        articleUrl: string,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        authorName?: google_protobuf_wrappers_pb.StringValue.AsObject,
        tags?: google_protobuf_wrappers_pb.StringValue.AsObject,
        thumbnailUrl: string,
        isEng: boolean,
        isPrivate: boolean,
        bookmarkId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        isBookmarked: boolean,
        isFollowing: boolean,
        favoriteArticleFolderIdsList: Array<string>,
        likeCount: number,
        isTrend: boolean,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ArticleComment extends jspb.Message { 
    getId(): string;
    setId(value: string): ArticleComment;
    getUserId(): string;
    setUserId(value: string): ArticleComment;
    getArticleId(): string;
    setArticleId(value: string): ArticleComment;
    getComment(): string;
    setComment(value: string): ArticleComment;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ArticleComment;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ArticleComment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleComment.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleComment): ArticleComment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleComment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleComment;
    static deserializeBinaryFromReader(message: ArticleComment, reader: jspb.BinaryReader): ArticleComment;
}

export namespace ArticleComment {
    export type AsObject = {
        id: string,
        userId: string,
        articleId: string,
        comment: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ArticleEdge extends jspb.Message { 

    hasArticle(): boolean;
    clearArticle(): void;
    getArticle(): Article | undefined;
    setArticle(value?: Article): ArticleEdge;
    getCursor(): string;
    setCursor(value: string): ArticleEdge;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleEdge.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleEdge): ArticleEdge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleEdge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleEdge;
    static deserializeBinaryFromReader(message: ArticleEdge, reader: jspb.BinaryReader): ArticleEdge;
}

export namespace ArticleEdge {
    export type AsObject = {
        article?: Article.AsObject,
        cursor: string,
    }
}

export class FeedEdge extends jspb.Message { 

    hasFeed(): boolean;
    clearFeed(): void;
    getFeed(): Feed | undefined;
    setFeed(value?: Feed): FeedEdge;
    getCursor(): string;
    setCursor(value: string): FeedEdge;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeedEdge.AsObject;
    static toObject(includeInstance: boolean, msg: FeedEdge): FeedEdge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeedEdge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeedEdge;
    static deserializeBinaryFromReader(message: FeedEdge, reader: jspb.BinaryReader): FeedEdge;
}

export namespace FeedEdge {
    export type AsObject = {
        feed?: Feed.AsObject,
        cursor: string,
    }
}

export class OGP extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): OGP;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDescription(value?: google_protobuf_wrappers_pb.StringValue): OGP;
    getArticleUrl(): string;
    setArticleUrl(value: string): OGP;
    getSiteUrl(): string;
    setSiteUrl(value: string): OGP;
    getSiteName(): string;
    setSiteName(value: string): OGP;
    getThumbnailUrl(): string;
    setThumbnailUrl(value: string): OGP;
    getFaviconUrl(): string;
    setFaviconUrl(value: string): OGP;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OGP.AsObject;
    static toObject(includeInstance: boolean, msg: OGP): OGP.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OGP, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OGP;
    static deserializeBinaryFromReader(message: OGP, reader: jspb.BinaryReader): OGP;
}

export namespace OGP {
    export type AsObject = {
        title: string,
        description?: google_protobuf_wrappers_pb.StringValue.AsObject,
        articleUrl: string,
        siteUrl: string,
        siteName: string,
        thumbnailUrl: string,
        faviconUrl: string,
    }
}
