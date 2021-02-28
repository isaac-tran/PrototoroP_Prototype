gdjs.evtsExt__UIDamageText__CreateDamageText = {};
gdjs.evtsExt__UIDamageText__CreateDamageText.GDDamageTextObjects1= [];
gdjs.evtsExt__UIDamageText__CreateDamageText.GDDamageTextObjects2= [];

gdjs.evtsExt__UIDamageText__CreateDamageText.conditionTrue_0 = {val:false};
gdjs.evtsExt__UIDamageText__CreateDamageText.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__UIDamageText__CreateDamageText.mapOfGDgdjs_46evtsExt_95_95UIDamageText_95_95CreateDamageText_46GDDamageTextObjects1Objects = Hashtable.newFrom({"DamageText": gdjs.evtsExt__UIDamageText__CreateDamageText.GDDamageTextObjects1});gdjs.evtsExt__UIDamageText__CreateDamageText.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__UIDamageText__CreateDamageText.GDDamageTextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__UIDamageText__CreateDamageText.mapOfGDgdjs_46evtsExt_95_95UIDamageText_95_95CreateDamageText_46GDDamageTextObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PositionX")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PositionY")) || 0 : 0), "UI");
}{for(var i = 0, len = gdjs.evtsExt__UIDamageText__CreateDamageText.GDDamageTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UIDamageText__CreateDamageText.GDDamageTextObjects1[i].setString("-" + (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__UIDamageText__CreateDamageText.GDDamageTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UIDamageText__CreateDamageText.GDDamageTextObjects1[i].addPolarForce(270, 80, 1);
}
}{for(var i = 0, len = gdjs.evtsExt__UIDamageText__CreateDamageText.GDDamageTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UIDamageText__CreateDamageText.GDDamageTextObjects1[i].resetTimer("DamageTextTimer");
}
}}

}


};

gdjs.evtsExt__UIDamageText__CreateDamageText.func = function(runtimeScene, Value, DamageText, PositionX, PositionY, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"DamageText": DamageText
},
  _objectArraysMap: {
"DamageText": gdjs.objectsListsToArray(DamageText)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__UIDamageText__CreateDamageText.GDDamageTextObjects1.length = 0;
gdjs.evtsExt__UIDamageText__CreateDamageText.GDDamageTextObjects2.length = 0;

gdjs.evtsExt__UIDamageText__CreateDamageText.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

