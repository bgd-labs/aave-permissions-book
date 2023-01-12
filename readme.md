# Aave permissions list

This repo is containing scripts for calculating and shownig addresses which hold permissions inside all contracts of Aave protocol. Tables with permissions are shown in the [out](./out/) folder.

## Scripts

Repo contains multiple scripts for fetching the permissions and for writing output tables.

Fatching:
- [Fatching modifiers on V2 contracts](scripts/modifiersCalculator.ts)
- [Fatching ARC modifiers](./scripts/ARC/modifiersArcCalculator.ts)
- [Fatching modifiers on V3 contracts](./scripts/V3/modifierCalculatorScript.ts)
- [Fatching roles on V3 contracts](./scripts/V3/roleCalculatorScript.ts)
- [Fatching proxy admins on V2 contracts](./scripts/proxyAdmins/calculateProxyAdminsV2.ts)
- [Fatching proxy admins on V3 contracts](./scripts/proxyAdmins/calculateProxyAdminsV3.ts)

Creating tables:
- [Creating V2 permissions table](./scripts/V2/createV2PermissionTable.ts)
- [Creating ARC permissions table](./scripts/ARC/createArcPermissionsTable.ts)
- [Creating V3 permissions table](./scripts/V3/createV3PermissionsTable.ts)
- [Creating V3 roles table](./scripts/V3/createRolesV3Table.ts)
- [Creating proxy admins table](./scripts/proxyAdmins/createProxyAdminsTable.ts)
