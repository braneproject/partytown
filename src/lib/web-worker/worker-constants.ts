import type { InterfaceInfo, RefHandler, WebWorkerContext, WebWorkerEnvironment } from '../types';
import type { Node } from './worker-node';
import type { WorkerProxy } from './worker-proxy-constructor';

export const WinIdKey = /*#__PURE__*/ Symbol();
export const InstanceIdKey = /*#__PURE__*/ Symbol();
export const NodeNameKey = /*#__PURE__*/ Symbol();
export const NamespaceKey = /*#__PURE__*/ Symbol();
export const ApplyPathKey = /*#__PURE__*/ Symbol();
export const InstanceStateKey = /*#__PURE__*/ Symbol();
export const HookContinue = /*#__PURE__*/ Symbol();
export const HookPrevent = /*#__PURE__*/ Symbol();

export const webWorkerInstances = /*#__PURE__*/ new Map<number, Node>();
export const webWorkerRefsByRefId: { [refId: number]: RefHandler } = {};
export const webWorkerRefIdsByRef = /*#__PURE__*/ new WeakMap<RefHandler, number>();
export const nodeConstructors: { [nodeName: string]: typeof Node } = {};
export const envGlobalConstructors: Map<string, typeof WorkerProxy> = /*#__PURE__*/ new Map();

export const webWorkerCtx: WebWorkerContext = {} as any;
export const webWorkerInterfaces: InterfaceInfo[] = [];

export const environments: { [winId: number]: WebWorkerEnvironment } = {};

export const cachedDimensions = /*#__PURE__*/ new Map<string, any>();
export const cachedStructure = /*#__PURE__*/ new Map<string, any>();

export const commaSplit = (str: string) => str.split(',');

/** property getters for dimensions */
export const getterDimensionPropNames = /*#__PURE__*/ commaSplit(
  'clientWidth,clientHeight,clientTop,clientLeft,innerWidth,innerHeight,offsetWidth,offsetHeight,offsetTop,offsetLeft,outerWidth,outerHeight,pageXOffset,pageYOffset,scrollWidth,scrollHeight,scrollTop,scrollLeft'
);

/** node properties in regards to the DOM structure */
export const nodeStructurePropNames = /*#__PURE__*/ commaSplit(
  'childNodes,firstChild,isConnected,lastChild,nextSibling,parentElement,parentNode,previousSibling'
);

/** element properties in regards to the DOM structure */
export const elementStructurePropNames = /*#__PURE__*/ commaSplit(
  'childElementCount,children,firstElementChild,lastElementChild,nextElementSibling,previousElementSibling'
);

/** methods that could change the DOM structure */
export const structureChangingMethodNames = /*#__PURE__*/ commaSplit(
  'insertBefore,remove,removeChild,replaceChild'
);

/** setters that could change dimensions of elements */
export const dimensionChangingSetterNames = /*#__PURE__*/ commaSplit(
  'className,width,height,hidden,innerHTML,innerText,textContent'
);

/** method calls that could change dimensions of elements */
export const dimensionChangingMethodNames = /*#__PURE__*/ commaSplit('setAttribute,setProperty');

/** element methods that only read the DOM */
export const elementGetterDimensionMethodNames = /*#__PURE__*/ commaSplit(
  'getClientRects,getBoundingClientRect'
);

/** window methods that only read the DOM */
export const windowGetterDimensionMethodNames = ['getComputedStyle'];

export const eventTargetMethods = /*#__PURE__*/ commaSplit(
  'addEventListener,dispatchEvent,removeEventListener'
);
