
# Path to this plugin 
PROTOC_GEN_TS_PATH=".\node_modules\.bin\protoc-gen-ts.cmd"

# Directory to write generated code to (.js and .d.ts files)  src/app/shared
OUT_DIR="./"
 
protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    src/app/shared/module.proto