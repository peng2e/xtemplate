modulex.add(function(require,exports,module){
module.exports = function b(scope,buffer,undefined){
var tpl = this;
var t;
var root = tpl.root;
var directAccess = tpl.directAccess;
var pos = tpl.pos = {line:1, col:1};
var nativeCommands = root.nativeCommands;
var utils = root.utils;
var callFnUtil = utils["callFn"];
var callCommandUtil = utils["callCommand"];
var rangeCommand = nativeCommands["range"];
var foreachCommand = nativeCommands["foreach"];
var forinCommand = nativeCommands["forin"];
var eachCommand = nativeCommands["each"];
var withCommand = nativeCommands["with"];
var ifCommand = nativeCommands["if"];
var setCommand = nativeCommands["set"];
var includeCommand = nativeCommands["include"];
var parseCommand = nativeCommands["parse"];
var extendCommand = nativeCommands["extend"];
var blockCommand = nativeCommands["block"];
var macroCommand = nativeCommands["macro"];
var debuggerCommand = nativeCommands["debugger"];

buffer.append('');
var id0 = directAccess ? ((t=(scope.data && scope.data.y))!==undefined?t:(scope.affix && scope.affix.y)): scope.resolve(["y"]);
buffer.writeEscaped(id0);
return buffer;
};
module.exports.TPL_NAME = module.id || module.name;
});