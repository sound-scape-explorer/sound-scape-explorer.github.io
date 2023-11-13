# Extracting `.xlsx` from `.h5`

## Context

Use this command to extract the `.xlsx` configuration file from an existing
`.h5` storage file.

The extracted `storage.h5-config-VERSION.xlsx` is the actual configuration used
to create the storage file.

## Run

1. Open a shell window. (Double click `start.bat` on Windows or use `cd` on
   Ubuntu / macOS)
2. Type `sse_config` followed by a `<space>`
3. Drag and drop your `.h5` storage file to the shell window
4. Press `Enter`

Example:

```bash
# Windows
sse_config C:\to\storage.h5

# Ubuntu / macOS
sse_config path/to/storage.h5
```
