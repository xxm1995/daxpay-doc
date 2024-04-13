var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { ref, openBlock, createElementBlock, mergeProps, Fragment, renderList, createBlock, resolveDynamicComponent, normalizeProps, guardReactiveProps, createElementVNode, normalizeClass, toDisplayString, createCommentVNode } from "vue";
const version = "0.0.6";
class MindModel {
  constructor() {
    __publicField(this, "count", 0);
    __publicField(this, "last", 0);
    __publicField(this, "depth", 0);
    __publicField(this, "width", 0);
    __publicField(this, "ui", {
      shape: "path",
      font: 14,
      dotR: 20,
      bgColor: "#9299bb",
      lineColor: "#9299bb",
      line: 2,
      bent: 20,
      padding: 8,
      margin: 8,
      interval: 25,
      width: 100,
      height: 0
    });
    __publicField(this, "data", []);
    this.ui.height = this.ui.font + this.ui.padding * 2 + this.ui.margin * 2;
  }
}
let tree$1 = new MindModel();
const getNodeByKey = (key) => {
  let res = null;
  if (key) {
    for (let i = 0; i < tree$1.data.length; i++) {
      if (tree$1.data[i].key == key) {
        res = tree$1.data[i];
        break;
      }
    }
  }
  return res;
};
function getParentY(nodeY, parentKey, len, i) {
  const parent = getNodeByKey(parentKey);
  if (len === i + 1 && !!parent) {
    const fast = getNodeByKey(parentKey + ".0");
    if (fast) {
      parent.y = fast.y + (nodeY - fast.y) / 2;
    }
  }
}
const getTitleWidth = (str) => {
  str += "";
  if (str) {
    let _len = str.replace(/<[^>]+>/g, "").replace(/[^\x00-\xff]/g, "01").length;
    return _len * tree$1.ui.font * 0.6 + tree$1.ui.padding * 2 + tree$1.ui.dotR / 2;
  } else {
    return tree$1.ui.width;
  }
};
const bind = (data, parent) => {
  parent = parent || {
    key: null,
    depth: 0,
    w: 0,
    x: 0
  };
  let _key = "", interval = 0;
  if (parent.key) {
    _key = parent.key + ".";
    interval = tree$1.ui.interval;
  }
  for (let i = 0; i < data.length; i++) {
    let _item = data[i];
    tree$1.count++;
    let _node = {
      index: tree$1.count - 1,
      key: _key + i,
      depth: parent.depth + 1,
      sort: i,
      w: 0,
      x: 0,
      child: 0
    };
    for (let k in _item) {
      if (k != "children") {
        _node[k] = _item[k];
      }
    }
    _node.w = getTitleWidth(_node.title);
    _node.x = parent.x + parent.w + interval + 6;
    if (_item.children && _item.children.length > 0) {
      _node.child = _item.children.length;
      if (_item.hide) {
        tree$1.last++;
        _node.y = tree$1.last;
        tree$1.data.push(_node);
      } else {
        tree$1.data.push(_node);
        bind(_item.children, _node);
      }
    } else {
      tree$1.last++;
      _node.y = tree$1.last;
      tree$1.data.push(_node);
    }
    if (parent.key) {
      _node.parent = parent;
      getParentY(_node.y, parent.key, data.length, i);
    }
  }
};
const getLineHeight = (_line) => {
  return _line || tree$1.ui.line;
};
const getLineByParent = (node) => {
  const parent = node.parent;
  let _bent = tree$1.ui.bent;
  let _line = {
    PX: parent.x + parent.w + tree$1.ui.margin / 2,
    PY: parent.y * tree$1.ui.height,
    cy: node.y * tree$1.ui.height,
    cx: node.x + tree$1.ui.margin / 2
  };
  let _shape = node.shape || tree$1.ui.shape;
  if (_shape == "path") {
    _line.cy += tree$1.ui.padding * 2 + getLineHeight(node.line);
    _line.cx += getLineHeight(node.line);
  }
  if (parent.y != node.y) {
    return `M${_line.PX} ${_line.PY} C${_line.PX + _bent} ${_line.PY} ${_line.cx - _bent} ${_line.cy} ${_line.cx} ${_line.cy}`;
  } else {
    return `M${_line.PX} ${_line.PY} L${_line.cx} ${_line.cy}`;
  }
};
const getSvgAttr = (w, h) => {
  return {
    class: "qs-mindmap",
    width: w + 50,
    height: h + 50
  };
};
const bindTree = (data, _tree) => {
  tree$1 = _tree;
  bind(data, null);
  return tree$1;
};
let tree = new MindModel();
let useEvent = {
  dotClick: (event) => {
  },
  textClick: (event) => {
  }
};
const drawLine = (node, lineColor, lineWidth) => {
  if (!node.parent) {
    return;
  }
  let _line = {
    d: getLineByParent(node),
    stroke: lineColor,
    "stroke-width": lineWidth,
    fill: "none"
  };
  return _line;
};
const getDrawBorder = (node, lineColor, lineWidth) => {
  let _h = getLineHeight(node.line);
  let _line = {
    x2: -(tree.ui.margin / 2 - _h / 2),
    y: tree.ui.margin + tree.ui.padding - _h,
    with: node.w - tree.ui.margin - _h
  };
  let d = `M${_line.x2} ${_line.y} L${_line.with} ${_line.y}`;
  return {
    d,
    stroke: lineColor,
    "stroke-width": lineWidth,
    fill: "none"
  };
};
const getNodeAttr = (node) => {
  if (node.w + node.x > tree.width) {
    tree.width = node.w + node.x;
  }
  let res = `translate(${node.x + tree.ui.padding},${node.y * tree.ui.height + 18 / 2 - 5})`;
  return {
    transform: res
  };
};
const getDotAttr = (node) => {
  let _r = tree.ui.dotR / 2 + getLineHeight(node.line);
  return {
    onclick: (arg) => {
      useEvent.dotClick(arg, node);
    },
    x: node.w - _r,
    y: -_r,
    width: tree.ui.dotR,
    height: tree.ui.dotR,
    style: `border-radius:50%;background-color:${node.lineColor || tree.ui.lineColor}`
  };
};
const getTextAttr = (node, _shape) => {
  let _line = getLineHeight(node.line);
  _line = _line / 2;
  let _attr = {
    x: -tree.ui.margin / 2,
    y: -((tree.ui.height - tree.ui.margin) / 2 + _line),
    height: tree.ui.height - tree.ui.margin * 2,
    width: node.w,
    style: "",
    onclick: (arg) => {
      useEvent.textClick(arg, node);
    }
  };
  _attr.y += _line;
  if (node.color) {
    _attr.style += ";color:" + node.color;
  }
  if (_shape == "rect") {
    _attr.style += `;border-radius:1rem;background-color:${node.bgColor || tree.ui.bgColor}`;
    console.log(_shape, _attr.style);
  }
  return _attr;
};
const bindNodeByData = (node) => {
  let _shape = node.shape || tree.ui.shape;
  let childs = {
    shape: _shape,
    text: getTextAttr(node, _shape),
    title: node.title
  };
  childs.text.class = _shape;
  if (_shape == "path") {
    childs.shape = "path";
    childs.shapeAttr = getDrawBorder(node, node.lineColor || tree.ui.lineColor, node.line || tree.ui.line);
  }
  if (node.child > 0) {
    childs.dot = {
      text: getDotAttr(node),
      title: node.child
    };
  }
  return __spreadValues({ attr: getNodeAttr(node) }, childs);
};
const bindSvgByData = (data, ui) => {
  let nodes = [];
  let lines = [];
  data.forEach((node) => {
    lines.push(drawLine(node, node.lineColor || ui.lineColor, node.line || ui.line));
    nodes.push(bindNodeByData(node, ui.text));
  });
  return [lines, nodes];
};
var bll = {
  props: {
    named: {
      type: String,
      default: "mindmap"
    },
    data: {
      type: Array,
      required: true
    },
    config: {
      type: Object,
      default: null
    }
  },
  setup(props, { emit }) {
    const mindNodes = ref([]);
    const mindLines = ref([]);
    const mindAttr = ref({});
    useEvent.dotClick = (event, node) => {
      emit("onEvent", {
        cmd: "dot",
        named: props.named,
        node,
        event
      });
    };
    const onNode = {};
    useEvent.textClick = (event, node) => {
      if (onNode.index) {
        mindNodes.value[onNode.index].textCss = "";
      }
      onNode.index = node.index;
      mindNodes.value[node.index].textCss = "active";
      emit("onEvent", {
        cmd: "text",
        named: props.named,
        node,
        event
      });
    };
    const bindEvent = (resp) => {
      if (resp) {
        switch (resp.cmd) {
          case "text":
            for (let k in resp.data) {
              switch (k) {
                case "title":
                  let itme = mindNodes.value[resp.index];
                  if (itme) {
                    itme.title = resp.data[k];
                  }
                  break;
              }
            }
            break;
        }
      } else {
        tree = new MindModel();
        init();
      }
    };
    const init = () => {
      if (props.config) {
        for (let k in props.config) {
          tree.ui[k] = props.config[k];
        }
      }
      tree = bindTree(props.data, tree);
      let res = bindSvgByData(tree.data, tree.ui);
      mindLines.value = res[0];
      mindNodes.value = res[1];
      mindAttr.value = getSvgAttr(tree.width, tree.last * tree.ui.height);
      emit("onEvent", {
        cmd: "init",
        data: tree.data,
        bind: bindEvent
      });
    };
    init();
    return { mindAttr, mindNodes, mindLines };
  }
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = bll;
const _hoisted_1 = ["title", "innerHTML"];
const _hoisted_2 = { class: "dot" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({ class: "qs-mindmap" }, _ctx.mindAttr), [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.mindLines, (item, index) => {
      return openBlock(), createElementBlock("path", mergeProps({ key: index }, item), null, 16);
    }), 128)),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.mindNodes, (node, index) => {
      return openBlock(), createElementBlock("g", mergeProps(node.attr, { key: index }), [
        (openBlock(), createBlock(resolveDynamicComponent(node.shape), normalizeProps(guardReactiveProps(node.shapeAttr)), null, 16)),
        (openBlock(), createElementBlock("foreignObject", normalizeProps(guardReactiveProps(node.text)), [
          createElementVNode("div", {
            class: normalizeClass(["title", node.textCss]),
            title: index + "." + node.title,
            innerHTML: node.title
          }, null, 10, _hoisted_1)
        ], 16)),
        node.dot ? (openBlock(), createElementBlock("foreignObject", normalizeProps(mergeProps({ key: 0 }, node.dot.text)), [
          createElementVNode("div", _hoisted_2, toDisplayString(node.dot.title), 1)
        ], 16)) : createCommentVNode("", true)
      ], 16);
    }), 128))
  ], 16);
}
var Mindmap = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const components = {
  Mindmap
};
const install = function(app, opts) {
  opts = opts || {};
  if (install.installed)
    return;
  let _resp = `version:${version},component:[version`;
  Object.keys(components).forEach((key) => {
    _resp += "," + key;
    app.component(key, components[key]);
  });
  _resp += "]";
  if (typeof opts.log !== "undefined") {
    console.log("quick-svg", _resp);
  }
};
export { Mindmap, components, install as default, install, version };
