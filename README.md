# Aave permissions list

This repo is containing scripts for calculating and showing addresses which hold permissions inside all contracts of Aave protocol. Tables with permissions are shown in the [table directory](./out/DIRECTORY.md).

## Scripts

Repo contains multiple scripts for fetching the permissions and for writing output tables.

- to create the json file with all the aggregated data form all networks and pools run:
```
npm run modifiers:generate
```

- to create the tables run:
```
npm run tables:create
```