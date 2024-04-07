import { NativeModules } from 'react-native';
import { DeviceDps } from 'device';

const tuya = NativeModules.TuyaHomeModule;

export type QueryRoomListParams = {
  homeId?: number;
};
export type QueryRoomListResponse = {
  name: string;
  displayOrder: number;
  id: number;
  roomId: number;
}[];

export function queryRoomList(
  params: QueryRoomListParams
): Promise<QueryRoomListResponse> {
  return tuya.queryRoomList(params);
}

export type GetHomeDetailParams = {
  homeId: number;
};
export type DeviceSchemaItem = {
  id: number;
  code: string;
  name: string;
  extContent: string;
  type: 'obj' | 'raw';
  schemaType: 'bool' | 'value' | 'enum' | 'string';
  property: string;
  mode: string;
};
export type DeviceDetailResponse = {
  homeId: number;
  isOnline: boolean;
  productId: string;
  devId: string;
  verSw: string;
  name: string;
  dps: DeviceDps;
  homeDisplayOrder: number;
  roomId: number;
  mac: string;
  ip: string;
  uuid: string;
  timezoneId: string;
  schemaMap: Record<number, DeviceSchemaItem>;
};
export type GetHomeDetailResponse = {
  deviceList: DeviceDetailResponse[];
  groupList: any[];
  meshList: any[];
  sharedDeviceList: any[];
  sharedGroupList: any[];
};

export function getHomeDetail(
  params: GetHomeDetailParams
): Promise<GetHomeDetailResponse> {
  return tuya.getHomeDetail(params);
}

export type UpdateHomeParams = {
  homeId: number;
  name: string;
  geoName: string;
  lon: number;
  lat: number;
};

export function updateHome(params: UpdateHomeParams): Promise<string> {
  return tuya.updateHome(params);
}

export type DismissHomeParams = {
  homeId: number;
};

export function dismissHome(params: DismissHomeParams): Promise<string> {
  return tuya.dismissHome(params);
}

export type SortRoomsParams = {
  idList: number[];
  homeId: number;
};

export function sortRoom(params: SortRoomsParams): Promise<string> {
  return tuya.sortRoom(params);
}
