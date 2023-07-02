var _classCallCheck = require("@babel/runtime/helpers/classCallCheck").default;
var _createClass = require("@babel/runtime/helpers/createClass").default;
var _inherits = require("@babel/runtime/helpers/inherits").default;
var _createSuper = require("@babel/runtime/helpers/createSuper").default;
var _wrapNativeSuper = require("@babel/runtime/helpers/wrapNativeSuper").default;
var RecorderProcessor = /*#__PURE__*/function (_AudioWorkletProcesso) {
  "use strict";

  _inherits(RecorderProcessor, _AudioWorkletProcesso);
  var _super = _createSuper(RecorderProcessor);
  function RecorderProcessor() {
    _classCallCheck(this, RecorderProcessor);
    return _super.apply(this, arguments);
  }
  _createClass(RecorderProcessor, [{
    key: "process",
    value: function process(inputList, _outputList, _parameters) {
      if (inputList[0].length < 1) {
        return true;
      }
      var float32Data = inputList[0][0];
      var int16Data = new Int16Array(float32Data.length);
      for (var i = 0; i < float32Data.length; i++) {
        var s = Math.max(-1, Math.min(1, float32Data[i]));
        int16Data[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
      }
      this.port.postMessage(int16Data);
      return true;
    }
  }]);
  return RecorderProcessor;
}( /*#__PURE__*/_wrapNativeSuper(AudioWorkletProcessor));
registerProcessor("recorder.worklet", RecorderProcessor);