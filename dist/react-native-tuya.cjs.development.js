'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactNative = require('react-native');

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function (t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
    return this;
  }), _regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function () {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine = function (e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _regeneratorDefine(e, r, n, t);
}

var GROUPLISTENER = 'groupListener';
var HARDWAREUPGRADELISTENER = 'hardwareUpgradeListener';
var DEVLISTENER = 'devListener';
var SUBDEVLISTENER = 'subDevListener';
var HOMESTATUS = 'homeStatus';
var HOMECHANGE = 'homeChange';
var SINGLETRANSFER = 'SingleTransfer';
var eventEmitter = /*#__PURE__*/new reactNative.NativeEventEmitter(reactNative.NativeModules.TuyaRNEventEmitter);
function addEvent(eventName, callback) {
  return eventEmitter.addListener(eventName, callback);
}
var bridge = function bridge(key, id) {
  return key + "//" + id;
};
/*
 * On iOS home devices list has differences in structure, soo need to make it same as on android
 * */
var prepareDeviceBean = function prepareDeviceBean(device) {
  var schema = JSON.parse(device.schema);
  var schemaMap = {};
  var dpCodeSchemaMap = {};
  schema.forEach(function (item) {
    schemaMap[item.id] = item;
    dpCodeSchemaMap[item.code] = item;
  });
  return _extends({}, device, {
    schemaMap: schemaMap,
    productBean: {
      schemaInfo: {
        dpCodeSchemaMap: dpCodeSchemaMap
      }
    }
  });
};

var tuya = reactNative.NativeModules.TuyaActivatorModule;
var tuyaBLEActivator = reactNative.NativeModules.TuyaBLEActivatorModule;
var tuyaBLEScanner = reactNative.NativeModules.TuyaBLEScannerModule;
function openNetworkSettings() {
  return tuya.openNetworkSettings({});
}
(function (TuyaActivationType) {
  TuyaActivationType["EZ"] = "TY_EZ";
  TuyaActivationType["AP"] = "TY_AP";
  TuyaActivationType["QR"] = "TY_QR";
})(exports.TuyaActivationType || (exports.TuyaActivationType = {}));
function initActivator(_x) {
  return _initActivator.apply(this, arguments);
}
function _initActivator() {
  _initActivator = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(params) {
    var device;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          if (!(reactNative.Platform.OS === 'ios')) {
            _context.n = 2;
            break;
          }
          _context.n = 1;
          return tuya.initActivator(params);
        case 1:
          device = _context.v;
          return _context.a(2, prepareDeviceBean(device));
        case 2:
          return _context.a(2, tuya.initActivator(params));
      }
    }, _callee);
  }));
  return _initActivator.apply(this, arguments);
}
function getActivatorToken(params) {
  return tuya.getActivatorToken(params);
}
function startQRActivator(_x2) {
  return _startQRActivator.apply(this, arguments);
}
function _startQRActivator() {
  _startQRActivator = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(params) {
    var device;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          if (!(reactNative.Platform.OS === 'ios')) {
            _context2.n = 2;
            break;
          }
          _context2.n = 1;
          return tuya.initActivator(_extends({}, params, {
            type: 'TY_QR'
          }));
        case 1:
          device = _context2.v;
          return _context2.a(2, prepareDeviceBean(device));
        case 2:
          return _context2.a(2, tuya.startQRActivator(params));
      }
    }, _callee2);
  }));
  return _startQRActivator.apply(this, arguments);
}
function stopQRActivator() {
  if (reactNative.Platform.OS === 'ios') {
    return stopConfig();
  }
  return tuya.stopQRActivator();
}
function stopConfig() {
  return tuya.stopConfig();
}
function startBluetoothScan(params) {
  if (reactNative.Platform.OS === 'ios') {
    return tuyaBLEScanner.startBluetoothScan();
  }
  return tuya.startBluetoothScan(params);
}
function initBluetoothDualModeActivator(_x3) {
  return _initBluetoothDualModeActivator.apply(this, arguments);
}
function _initBluetoothDualModeActivator() {
  _initBluetoothDualModeActivator = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(params) {
    var device;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          if (!(reactNative.Platform.OS === 'ios')) {
            _context3.n = 2;
            break;
          }
          _context3.n = 1;
          return tuyaBLEActivator.initActivator(params);
        case 1:
          device = _context3.v;
          return _context3.a(2, prepareDeviceBean(device));
        case 2:
          return _context3.a(2, tuya.initBluetoothDualModeActivator(params));
      }
    }, _callee3);
  }));
  return _initBluetoothDualModeActivator.apply(this, arguments);
}
function initBluetoothDualModeActivatorFromScanBean(_x4) {
  return _initBluetoothDualModeActivatorFromScanBean.apply(this, arguments);
}
function _initBluetoothDualModeActivatorFromScanBean() {
  _initBluetoothDualModeActivatorFromScanBean = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(params) {
    var device;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          if (!(reactNative.Platform.OS === 'ios')) {
            _context4.n = 2;
            break;
          }
          _context4.n = 1;
          return tuyaBLEActivator.initActivator(params);
        case 1:
          device = _context4.v;
          return _context4.a(2, prepareDeviceBean(device));
        case 2:
          return _context4.a(2, tuya.initBluetoothDualModeActivatorFromScanBean(params));
      }
    }, _callee4);
  }));
  return _initBluetoothDualModeActivatorFromScanBean.apply(this, arguments);
}
function stopLeScan() {
  if (reactNative.Platform.OS === 'ios') {
    return tuyaBLEScanner.stopBluetoothScan();
  }
  return tuya.stopBluetoothScan();
}
function stopLePairing() {
  if (reactNative.Platform.OS === 'ios') {
    return tuyaBLEActivator.stopLePairing();
  }
  return tuya.stopLeActivation();
}
function getCurrentWifi(success, error) {
  // We need the Allow While Using App location permission to use this.
  return tuya.getCurrentWifi({}, success, error);
}

var tuya$1 = reactNative.NativeModules.TuyaDeviceModule;
var devListenerSubs = {};
function registerDevListener(params, type, callback) {
  tuya$1.registerDevListener(params);
  var sub = addEvent(bridge(DEVLISTENER, params.devId), function (data) {
    if (data.type === type) {
      callback(data);
    }
  });
  devListenerSubs[params.devId] = sub;
}
function unRegisterAllDevListeners() {
  for (var devId in devListenerSubs) {
    var sub = devListenerSubs[devId];
    sub.remove();
    tuya$1.unRegisterDevListener({
      devId: devId
    });
  }
  devListenerSubs = {};
}
function send(params) {
  return tuya$1.send(params);
}
function removeDevice(params) {
  return tuya$1.removeDevice(params);
}
function renameDevice(params) {
  return tuya$1.renameDevice(params);
}
function getDataPointStat(params) {
  return tuya$1.getDataPointStat(params);
}
function getWifiSignalStrength(params) {
  return tuya$1.getWifiSignalStrength(params);
}

var tuya$2 = reactNative.NativeModules.TuyaDeviceModule;
(function (DeviceListenerType) {
  DeviceListenerType["onDpUpdate"] = "onDpUpdate";
  DeviceListenerType["onRemoved"] = "onRemoved";
  DeviceListenerType["onStatusChanged"] = "onStatusChanged";
  DeviceListenerType["onNetworkStatusChanged"] = "onNetworkStatusChanged";
  DeviceListenerType["onDevInfoUpdate"] = "onDevInfoUpdate";
  DeviceListenerType["onFirmwareUpgradeSuccess"] = "onFirmwareUpgradeSuccess";
  DeviceListenerType["onFirmwareUpgradeFailure"] = "onFirmwareUpgradeFailure";
  DeviceListenerType["onFirmwareUpgradeProgress"] = "onFirmwareUpgradeProgress";
  DeviceListenerType["onFirmwareUpgradeStatus"] = "onFirmwareUpgradeStatus";
})(exports.DeviceListenerType || (exports.DeviceListenerType = {}));
var subscriptions = {};
var addDeviceListener = function addDeviceListener(_ref, cb, onError) {
  var devId = _ref.devId,
    type = _ref.type;
  if (!subscriptions[devId]) {
    tuya$2.registerDevListener({
      devId: devId
    })["catch"](function (e) {
      return onError == null ? void 0 : onError(e);
    });
    subscriptions[devId] = 0;
  }
  var sub = addEvent(bridge(DEVLISTENER, devId), function (data) {
    if (data.type === type) {
      cb(data);
    }
  });
  subscriptions[devId]++;
  return {
    remove: function remove() {
      sub.remove();
      if (subscriptions[devId] <= 1) {
        tuya$2.unRegisterDevListener({
          devId: devId
        });
      }
      subscriptions[devId]--;
    }
  };
};
var removeAllDeviceListeners = function removeAllDeviceListeners() {
  Object.keys(subscriptions).forEach(function (devId) {
    tuya$2.unRegisterDevListener({
      devId: devId
    });
    delete subscriptions[devId];
  });
};

var tuya$3 = reactNative.NativeModules.TuyaHomeModule;
function queryRoomList(params) {
  return tuya$3.queryRoomList(params);
}
function getHomeDetail(_x) {
  return _getHomeDetail.apply(this, arguments);
}
function _getHomeDetail() {
  _getHomeDetail = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(params) {
    var homeDetails, _homeDetails$deviceLi, deviceList;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return tuya$3.getHomeDetail(params);
        case 1:
          homeDetails = _context.v;
          if (!(reactNative.Platform.OS === 'ios' && homeDetails.deviceList)) {
            _context.n = 2;
            break;
          }
          deviceList = (_homeDetails$deviceLi = homeDetails.deviceList) == null ? void 0 : _homeDetails$deviceLi.map(function (i) {
            return prepareDeviceBean(i);
          });
          return _context.a(2, _extends({}, homeDetails, {
            deviceList: deviceList
          }));
        case 2:
          return _context.a(2, homeDetails);
      }
    }, _callee);
  }));
  return _getHomeDetail.apply(this, arguments);
}
function updateHome(params) {
  return tuya$3.updateHome(params);
}
function dismissHome(params) {
  return tuya$3.dismissHome(params);
}
function sortRoom(params) {
  return tuya$3.sortRoom(params);
}

var tuya$4 = reactNative.NativeModules.TuyaHomeDataManagerModule;
function getRoomDeviceList(params) {
  return tuya$4.getRoomDeviceList(params);
}

var tuya$5 = reactNative.NativeModules.TuyaHomeManagerModule;
function createHome(params) {
  return tuya$5.createHome(params);
}
function queryHomeList() {
  return _queryHomeList.apply(this, arguments);
}
function _queryHomeList() {
  _queryHomeList = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var homes;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return tuya$5.queryHomeList();
        case 1:
          homes = _context.v;
          // Tuya's Android SDK uses different property names than the iOS SDK...
          if (reactNative.Platform.OS === 'android') {
            homes = homes.map(function (m) {
              return _extends({}, m, {
                dealStatus: m.homeStatus
              });
            });
          }
          return _context.a(2, homes);
      }
    }, _callee);
  }));
  return _queryHomeList.apply(this, arguments);
}
function joinFamily(params) {
  return tuya$5.joinFamily(params);
}

var tuya$6 = reactNative.NativeModules.TuyaHomeMemberModule;
function queryMemberList(_x) {
  return _queryMemberList.apply(this, arguments);
}
function _queryMemberList() {
  _queryMemberList = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(params) {
    var members;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return tuya$6.queryMemberList(params);
        case 1:
          members = _context.v;
          // Tuya's Android SDK uses different property names than the iOS SDK...
          if (reactNative.Platform.OS === 'android') {
            members = members.map(function (m) {
              return {
                admin: m.admin,
                username: m.account,
                id: m.memberId,
                dealStatus: m.memberStatus
              };
            });
          }
          return _context.a(2, members);
      }
    }, _callee);
  }));
  return _queryMemberList.apply(this, arguments);
}
function addMember(params) {
  return tuya$6.addMember(params);
}
function removeMember(params) {
  return tuya$6.removeMember(params);
}

var tuya$7 = reactNative.Platform.OS === 'ios' ? reactNative.NativeModules.TuyaDeviceModule : reactNative.NativeModules.TuyaOTAModule;
function startOta(params, onSuccess, onFailure, onProgress) {
  tuya$7.startOta(params);
  return addEvent(bridge(HARDWAREUPGRADELISTENER, params.devId), function (data) {
    if (data.type === 'onSuccess') {
      onSuccess(data);
    } else if (data.type === 'onFailure') {
      onFailure(data);
    } else if (data.type === 'onProgress') {
      onProgress(data);
    }
  });
}
(function (TuyaUpgradeStatus) {
  TuyaUpgradeStatus[TuyaUpgradeStatus["noUpdate"] = 0] = "noUpdate";
  TuyaUpgradeStatus[TuyaUpgradeStatus["updateAvailable"] = 1] = "updateAvailable";
  TuyaUpgradeStatus[TuyaUpgradeStatus["updating"] = 2] = "updating";
  TuyaUpgradeStatus[TuyaUpgradeStatus["waitForDevice"] = 5] = "waitForDevice";
})(exports.TuyaUpgradeStatus || (exports.TuyaUpgradeStatus = {}));
function getOtaInfo(params) {
  return tuya$7.getOtaInfo(params);
}
function startFirmwareUpgrade(params) {
  return tuya$7.startFirmwareUpgrade(params);
}

var tuya$8 = reactNative.NativeModules.TuyaTimerModule;
function addTimerWithTask(params) {
  return tuya$8.addTimerWithTask(params);
}
function updateTimerWithTask(params) {
  return tuya$8.updateTimerWithTask(params);
}
function getTimerTaskStatusWithDeviceId(params) {
  return tuya$8.getTimerTaskStatusWithDeviceId(params);
}
function getAllTimerWithDeviceId(_x) {
  return _getAllTimerWithDeviceId.apply(this, arguments);
}
function _getAllTimerWithDeviceId() {
  _getAllTimerWithDeviceId = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(params) {
    var timers;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return tuya$8.getAllTimerWithDeviceId(params);
        case 1:
          timers = _context.v;
          timers.forEach(function (t) {
            t.timerTaskStatus.open = !!t.timerTaskStatus.open;
          });
          return _context.a(2, timers);
      }
    }, _callee);
  }));
  return _getAllTimerWithDeviceId.apply(this, arguments);
}
function removeTimerWithTask(params) {
  return tuya$8.removeTimerWithTask(params);
}
function updateTimerStatusWithTask(params) {
  return tuya$8.updateTimerStatusWithTask(params);
}

var tuya$9 = reactNative.NativeModules.TuyaUserModule;
function registerAccountWithEmail(params) {
  return tuya$9.registerAccountWithEmail(params);
}
function getRegisterEmailValidateCode(params) {
  return tuya$9.getRegisterEmailValidateCode(params);
}
function sendVerifyCodeWithUserName(params) {
  return tuya$9.sendVerifyCodeWithUserName(params);
}
function loginWithEmail(params) {
  return tuya$9.loginWithEmail(params);
}
function getEmailValidateCode(params) {
  return tuya$9.getEmailValidateCode(params);
}
function resetEmailPassword(params) {
  return tuya$9.resetEmailPassword(params);
}
function logout() {
  return tuya$9.logout();
}
function getCurrentUser() {
  return tuya$9.getCurrentUser();
}
function getUser() {
  return tuya$9.getUser();
}
function cancelAccount() {
  return tuya$9.cancelAccount();
}
function loginWithUid(_x) {
  return _loginWithUid.apply(this, arguments);
}
function _loginWithUid() {
  _loginWithUid = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(params) {
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          return _context.a(2, tuya$9.loginWithUid(params));
      }
    }, _callee);
  }));
  return _loginWithUid.apply(this, arguments);
}
function loginOrRegisterWithUid(_x2) {
  return _loginOrRegisterWithUid.apply(this, arguments);
}
function _loginOrRegisterWithUid() {
  _loginOrRegisterWithUid = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(params) {
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          return _context2.a(2, tuya$9.loginOrRegisterWithUid(params));
      }
    }, _callee2);
  }));
  return _loginOrRegisterWithUid.apply(this, arguments);
}

exports.DEVLISTENER = DEVLISTENER;
exports.GROUPLISTENER = GROUPLISTENER;
exports.HARDWAREUPGRADELISTENER = HARDWAREUPGRADELISTENER;
exports.HOMECHANGE = HOMECHANGE;
exports.HOMESTATUS = HOMESTATUS;
exports.SINGLETRANSFER = SINGLETRANSFER;
exports.SUBDEVLISTENER = SUBDEVLISTENER;
exports.addDeviceListener = addDeviceListener;
exports.addEvent = addEvent;
exports.addMember = addMember;
exports.addTimerWithTask = addTimerWithTask;
exports.bridge = bridge;
exports.cancelAccount = cancelAccount;
exports.createHome = createHome;
exports.dismissHome = dismissHome;
exports.getActivatorToken = getActivatorToken;
exports.getAllTimerWithDeviceId = getAllTimerWithDeviceId;
exports.getCurrentUser = getCurrentUser;
exports.getCurrentWifi = getCurrentWifi;
exports.getDataPointStat = getDataPointStat;
exports.getEmailValidateCode = getEmailValidateCode;
exports.getHomeDetail = getHomeDetail;
exports.getOtaInfo = getOtaInfo;
exports.getRegisterEmailValidateCode = getRegisterEmailValidateCode;
exports.getRoomDeviceList = getRoomDeviceList;
exports.getTimerTaskStatusWithDeviceId = getTimerTaskStatusWithDeviceId;
exports.getUser = getUser;
exports.getWifiSignalStrength = getWifiSignalStrength;
exports.initActivator = initActivator;
exports.initBluetoothDualModeActivator = initBluetoothDualModeActivator;
exports.initBluetoothDualModeActivatorFromScanBean = initBluetoothDualModeActivatorFromScanBean;
exports.joinFamily = joinFamily;
exports.loginOrRegisterWithUid = loginOrRegisterWithUid;
exports.loginWithEmail = loginWithEmail;
exports.loginWithUid = loginWithUid;
exports.logout = logout;
exports.openNetworkSettings = openNetworkSettings;
exports.prepareDeviceBean = prepareDeviceBean;
exports.queryHomeList = queryHomeList;
exports.queryMemberList = queryMemberList;
exports.queryRoomList = queryRoomList;
exports.registerAccountWithEmail = registerAccountWithEmail;
exports.registerDevListener = registerDevListener;
exports.removeAllDeviceListeners = removeAllDeviceListeners;
exports.removeDevice = removeDevice;
exports.removeMember = removeMember;
exports.removeTimerWithTask = removeTimerWithTask;
exports.renameDevice = renameDevice;
exports.resetEmailPassword = resetEmailPassword;
exports.send = send;
exports.sendVerifyCodeWithUserName = sendVerifyCodeWithUserName;
exports.sortRoom = sortRoom;
exports.startBluetoothScan = startBluetoothScan;
exports.startFirmwareUpgrade = startFirmwareUpgrade;
exports.startOta = startOta;
exports.startQRActivator = startQRActivator;
exports.stopConfig = stopConfig;
exports.stopLePairing = stopLePairing;
exports.stopLeScan = stopLeScan;
exports.stopQRActivator = stopQRActivator;
exports.unRegisterAllDevListeners = unRegisterAllDevListeners;
exports.updateHome = updateHome;
exports.updateTimerStatusWithTask = updateTimerStatusWithTask;
exports.updateTimerWithTask = updateTimerWithTask;
//# sourceMappingURL=react-native-tuya.cjs.development.js.map
