#!/usr/bin/env bash

# Root directory of app
ROOT_DIR=$(git rev-parse --show-toplevel)

PROTO_FILE_DIR=./proto
API_PROTO_FILES=$(find ${PROTO_FILE_DIR} -type f -name '*.proto')

# ===============================

# generate checkpicks rpc go
OUT_DIR_GO_RPC="${ROOT_DIR}/checkpicks-rpc-go/grpc"
PROTO_OUT_DIR_GO_RPC="./checkpicks-rpc-go/grpc"

## Clean all existing generated files
rm -r "${OUT_DIR_GO_RPC}"
mkdir "${OUT_DIR_GO_RPC}"

## Generate code at checkpicks rpc go
protoc \
  -I=${PROTO_FILE_DIR} \
  --go_out=paths=source_relative:${PROTO_OUT_DIR_GO_RPC} \
  --go-grpc_out=paths=source_relative,require_unimplemented_servers=false:${PROTO_OUT_DIR_GO_RPC} \
  ${API_PROTO_FILES};