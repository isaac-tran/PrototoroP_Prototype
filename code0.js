gdjs.Title_32screenCode = {};
gdjs.Title_32screenCode.GDBackgroundObjects1= [];
gdjs.Title_32screenCode.GDBackgroundObjects2= [];
gdjs.Title_32screenCode.GDGameTitleObjects1= [];
gdjs.Title_32screenCode.GDGameTitleObjects2= [];
gdjs.Title_32screenCode.GDGameHeading1Objects1= [];
gdjs.Title_32screenCode.GDGameHeading1Objects2= [];
gdjs.Title_32screenCode.GDEnterToStartObjects1= [];
gdjs.Title_32screenCode.GDEnterToStartObjects2= [];
gdjs.Title_32screenCode.GDActionsObjects1= [];
gdjs.Title_32screenCode.GDActionsObjects2= [];
gdjs.Title_32screenCode.GDButtonsObjects1= [];
gdjs.Title_32screenCode.GDButtonsObjects2= [];

gdjs.Title_32screenCode.conditionTrue_0 = {val:false};
gdjs.Title_32screenCode.condition0IsTrue_0 = {val:false};
gdjs.Title_32screenCode.condition1IsTrue_0 = {val:false};


gdjs.Title_32screenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Title_32screenCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.Title_32screenCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDBackgroundObjects1[i].addPolarForce(90, 80, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Title_32screenCode.GDBackgroundObjects1);

gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Title_32screenCode.GDBackgroundObjects1.length;i<l;++i) {
    if ( gdjs.Title_32screenCode.GDBackgroundObjects1[i].getY() > 900 ) {
        gdjs.Title_32screenCode.condition0IsTrue_0.val = true;
        gdjs.Title_32screenCode.GDBackgroundObjects1[k] = gdjs.Title_32screenCode.GDBackgroundObjects1[i];
        ++k;
    }
}
gdjs.Title_32screenCode.GDBackgroundObjects1.length = k;}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32screenCode.GDBackgroundObjects1 */
{for(var i = 0, len = gdjs.Title_32screenCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDBackgroundObjects1[i].setY(gdjs.Title_32screenCode.GDBackgroundObjects1[i].getY() - (1800));
}
}}

}


{



}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EnterToStart"), gdjs.Title_32screenCode.GDEnterToStartObjects1);
{for(var i = 0, len = gdjs.Title_32screenCode.GDEnterToStartObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDEnterToStartObjects1[i].resetTimer("EnterToStartBlink");
}
}{for(var i = 0, len = gdjs.Title_32screenCode.GDEnterToStartObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDEnterToStartObjects1[i].unpauseTimer("EnterToStartBlink");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnterToStart"), gdjs.Title_32screenCode.GDEnterToStartObjects1);

gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Title_32screenCode.GDEnterToStartObjects1.length;i<l;++i) {
    if ( gdjs.Title_32screenCode.GDEnterToStartObjects1[i].timerElapsedTime("EnterToStartBlink", 0.75) ) {
        gdjs.Title_32screenCode.condition0IsTrue_0.val = true;
        gdjs.Title_32screenCode.GDEnterToStartObjects1[k] = gdjs.Title_32screenCode.GDEnterToStartObjects1[i];
        ++k;
    }
}
gdjs.Title_32screenCode.GDEnterToStartObjects1.length = k;}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32screenCode.GDEnterToStartObjects1 */
{for(var i = 0, len = gdjs.Title_32screenCode.GDEnterToStartObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDEnterToStartObjects1[i].setString("");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnterToStart"), gdjs.Title_32screenCode.GDEnterToStartObjects1);

gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Title_32screenCode.GDEnterToStartObjects1.length;i<l;++i) {
    if ( gdjs.Title_32screenCode.GDEnterToStartObjects1[i].timerElapsedTime("EnterToStartBlink", 1.5) ) {
        gdjs.Title_32screenCode.condition0IsTrue_0.val = true;
        gdjs.Title_32screenCode.GDEnterToStartObjects1[k] = gdjs.Title_32screenCode.GDEnterToStartObjects1[i];
        ++k;
    }
}
gdjs.Title_32screenCode.GDEnterToStartObjects1.length = k;}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32screenCode.GDEnterToStartObjects1 */
{for(var i = 0, len = gdjs.Title_32screenCode.GDEnterToStartObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDEnterToStartObjects1[i].setString("Press Enter to Start!");
}
}{for(var i = 0, len = gdjs.Title_32screenCode.GDEnterToStartObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDEnterToStartObjects1[i].resetTimer("EnterToStartBlink");
}
}}

}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{



}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Assets\\Music\\Crash Landing.mp3", 3, false, 30, 1);
}}

}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.sound.getMusicOnChannelPlayingOffset(runtimeScene, 3) >= 29;
}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setMusicOnChannelPlayingOffset(runtimeScene, 3, 0);
}}

}


};

gdjs.Title_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32screenCode.GDBackgroundObjects1.length = 0;
gdjs.Title_32screenCode.GDBackgroundObjects2.length = 0;
gdjs.Title_32screenCode.GDGameTitleObjects1.length = 0;
gdjs.Title_32screenCode.GDGameTitleObjects2.length = 0;
gdjs.Title_32screenCode.GDGameHeading1Objects1.length = 0;
gdjs.Title_32screenCode.GDGameHeading1Objects2.length = 0;
gdjs.Title_32screenCode.GDEnterToStartObjects1.length = 0;
gdjs.Title_32screenCode.GDEnterToStartObjects2.length = 0;
gdjs.Title_32screenCode.GDActionsObjects1.length = 0;
gdjs.Title_32screenCode.GDActionsObjects2.length = 0;
gdjs.Title_32screenCode.GDButtonsObjects1.length = 0;
gdjs.Title_32screenCode.GDButtonsObjects2.length = 0;

gdjs.Title_32screenCode.eventsList0(runtimeScene);
return;

}

gdjs['Title_32screenCode'] = gdjs.Title_32screenCode;
