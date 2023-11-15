# Repack storage

:::warning

This command is only available on UNIX systems at the moment.

On Debian based distributions, install it with

```bash
sudo apt install hdf5-tools
```

:::

When you overwrite a lot to your storage file, the space that was occupied by
the deleted dataset is not immediately freed. This is due to how the HDF5
technology works.

Repacking allows you to create a new file with your data but with the smallest
possible size.
