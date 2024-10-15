function load_FS10_JSON() {
    const fileInput = document.getElementById("file-input");
    const jsonInput = document.getElementById("jsonInput");

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const content = e.target.result;
        jsonInput.value = content;
    };

    reader.readAsText(file);
}

function update_FS10_report_media(labelReport){
    if(labelReport === "None"){
        return false;
    }
    else {
        return true;
    }
}

function update_FS10_textInputs(inputFromTextbox){
    if(inputFromTextbox === ""){
        return inputFromTextbox;
    }
    else{
        return inputFromTextbox;
    }
}

function generate_FS10_JSON(){
    // DMS
    var DriverAsleep_Activation = document.getElementById("DMS_1x1_select").value; 
    var DriverAsleep_FeedbackAudio = document.getElementById("DMS_2x1_select").value; 
    var DriverAsleep_FeedbackOutput = document.getElementById("DMS_3x1_select").value; 
    var DriverAsleep_FeedbackSpeech = document.getElementById("DMS_4x1_select").value; 
    var DriverAsleep_FeedbackVisual = document.getElementById("DMS_5x1_select").value; 
    var DriverAsleep_ReportEvent = document.getElementById("DMS_6x1_select").value; 
    var DriverAsleep_ReportImage = document.getElementById("DMS_7x1_select").value; 
    var DriverAsleep_ReportFootage = document.getElementById("DMS_8x1_select").value; 
    var Drowsiness_Activation = document.getElementById("DMS_1x2_select").value; 
    var Drowsiness_FeedbackAudio = document.getElementById("DMS_2x2_select").value; 
    var Drowsiness_FeedbackOutput = document.getElementById("DMS_3x2_select").value; 
    var Drowsiness_FeedbackSpeech = document.getElementById("DMS_4x2_select").value; 
    var Drowsiness_FeedbackVisual = document.getElementById("DMS_5x2_select").value; 
    var Drowsiness_ReportEvent = document.getElementById("DMS_6x2_select").value; 
    var Drowsiness_ReportImage = document.getElementById("DMS_7x2_select").value; 
    var Drowsiness_ReportFootage = document.getElementById("DMS_8x2_select").value; 
    var DriverDistracted_Activation = document.getElementById("DMS_1x3_select").value; 
    var DriverDistracted_FeedbackAudio = document.getElementById("DMS_2x3_select").value; 
    var DriverDistracted_FeedbackOutput = document.getElementById("DMS_3x3_select").value; 
    var DriverDistracted_FeedbackSpeech = document.getElementById("DMS_4x3_select").value; 
    var DriverDistracted_FeedbackVisual = document.getElementById("DMS_5x3_select").value; 
    var DriverDistracted_ReportEvent = document.getElementById("DMS_6x3_select").value; 
    var DriverDistracted_ReportImage = document.getElementById("DMS_7x3_select").value; 
    var DriverDistracted_ReportFootage = document.getElementById("DMS_8x3_select").value; 
    var PhoneUse_Activation = document.getElementById("DMS_1x4_select").value; 
    var PhoneUse_FeedbackAudio = document.getElementById("DMS_2x4_select").value; 
    var PhoneUse_FeedbackOutput = document.getElementById("DMS_3x4_select").value; 
    var PhoneUse_FeedbackSpeech = document.getElementById("DMS_4x4_select").value; 
    var PhoneUse_FeedbackVisual = document.getElementById("DMS_5x4_select").value; 
    var PhoneUse_ReportEvent = document.getElementById("DMS_6x4_select").value; 
    var PhoneUse_ReportImage = document.getElementById("DMS_7x4_select").value; 
    var PhoneUse_ReportFootage = document.getElementById("DMS_8x4_select").value; 
    var Seatbelt_Activation = document.getElementById("DMS_1x5_select").value; 
    var Seatbelt_FeedbackAudio = document.getElementById("DMS_2x5_select").value; 
    var Seatbelt_FeedbackOutput = document.getElementById("DMS_3x5_select").value; 
    var Seatbelt_FeedbackSpeech = document.getElementById("DMS_4x5_select").value; 
    var Seatbelt_FeedbackVisual = document.getElementById("DMS_5x5_select").value; 
    var Seatbelt_ReportEvent = document.getElementById("DMS_6x5_select").value; 
    var Seatbelt_ReportImage = document.getElementById("DMS_7x5_select").value; 
    var Seatbelt_ReportFootage = document.getElementById("DMS_8x5_select").value; 
    var Smoking_Activation = document.getElementById("DMS_1x6_select").value; 
    var Smoking_FeedbackAudio = document.getElementById("DMS_2x6_select").value; 
    var Smoking_FeedbackOutput = document.getElementById("DMS_3x6_select").value; 
    var Smoking_FeedbackSpeech = document.getElementById("DMS_4x6_select").value; 
    var Smoking_FeedbackVisual = document.getElementById("DMS_5x6_select").value; 
    var Smoking_ReportEvent = document.getElementById("DMS_6x6_select").value; 
    var Smoking_ReportImage = document.getElementById("DMS_7x6_select").value; 
    var Smoking_ReportFootage = document.getElementById("DMS_8x6_select").value; 
    //var LightDrowsiness_Activation = document.getElementById("DMS_1x7_select").value; 
    //var LightDrowsiness_FeedbackAudio = document.getElementById("DMS_2x7_select").value;
    //var LightDrowsiness_FeedbackOutput = document.getElementById("DMS_3x7_select").value; 
    //var LightDrowsiness_FeedbackSpeech = document.getElementById("DMS_4x7_select").value; 
    //var LightDrowsiness_FeedbackVisual = document.getElementById("DMS_5x7_select").value; 
    //var LightDrowsiness_ReportEvent = document.getElementById("DMS_6x7_select").value; 
    //var LightDrowsiness_ReportImage = document.getElementById("DMS_7x7_select").value; 
    //var LightDrowsiness_ReportFootage = document.getElementById("DMS_8x7_select").value; 
    var TamperingDetection_Activation = document.getElementById("DMS_1x8_select").value; 
    var TamperingDetection_FeedbackAudio = document.getElementById("DMS_2x8_select").value; 
    var TamperingDetection_FeedbackOutput = document.getElementById("DMS_3x8_select").value; 
    var TamperingDetection_FeedbackSpeech = document.getElementById("DMS_4x8_select").value; 
    var TamperingDetection_FeedbackVisual = document.getElementById("DMS_5x8_select").value; 
    var TamperingDetection_ReportEvent = document.getElementById("DMS_6x8_select").value; 
    var TamperingDetection_ReportImage = document.getElementById("DMS_7x8_select").value; 
    var TamperingDetection_ReportFootage = document.getElementById("DMS_8x8_select").value; 
    var DriverIdentified_Activation = document.getElementById("DMS_1x9_select").value; 
    var DriverIdentified_FeedbackAudio = document.getElementById("DMS_2x9_select").value; 
    var DriverIdentified_FeedbackOutput = document.getElementById("DMS_3x9_select").value; 
    var DriverIdentified_FeedbackSpeech = document.getElementById("DMS_4x9_select").value; 
    var DriverIdentified_FeedbackVisual = document.getElementById("DMS_5x9_select").value; 
    var DriverIdentified_ReportEvent = document.getElementById("DMS_6x9_select").value; 
    var DriverIdentified_ReportImage = document.getElementById("DMS_7x9_select").value; 
    var DriverIdentified_ReportFootage = document.getElementById("DMS_8x9_select").value; 
    var UnidentifiedUnauthDriver_Activation = document.getElementById("DMS_1x10_select").value; 
    var UnidentifiedUnauthDriver_FeedbackAudio = document.getElementById("DMS_2x10_select").value; 
    var UnidentifiedUnauthDriver_FeedbackOutput = document.getElementById("DMS_3x10_select").value; 
    var UnidentifiedUnauthDriver_FeedbackSpeech = document.getElementById("DMS_4x10_select").value; 
    var UnidentifiedUnauthDriver_FeedbackVisual = document.getElementById("DMS_5x10_select").value; 
    var UnidentifiedUnauthDriver_ReportEvent = document.getElementById("DMS_6x10_select").value; 
    var UnidentifiedUnauthDriver_ReportImage = document.getElementById("DMS_7x10_select").value; 
    var UnidentifiedUnauthDriver_ReportFootage = document.getElementById("DMS_8x10_select").value; 
    var DriverDisappeared_Activation = document.getElementById("DMS_1x11_select").value; 
    var DriverDisappeared_FeedbackAudio = document.getElementById("DMS_2x11_select").value; 
    var DriverDisappeared_FeedbackOutput = document.getElementById("DMS_3x11_select").value; 
    var DriverDisappeared_FeedbackSpeech = document.getElementById("DMS_4x11_select").value; 
    var DriverDisappeared_FeedbackVisual = document.getElementById("DMS_5x11_select").value; 
    var DriverDisappeared_ReportEvent = document.getElementById("DMS_6x11_select").value; 
    var DriverDisappeared_ReportImage = document.getElementById("DMS_7x11_select").value; 
    var DriverDisappeared_ReportFootage = document.getElementById("DMS_8x11_select").value; 
    var DriverChange_Activation = document.getElementById("DMS_1x12_select").value; 
    var DriverChange_FeedbackAudio = document.getElementById("DMS_2x12_select").value; 
    var DriverChange_FeedbackOutput = document.getElementById("DMS_3x12_select").value; 
    var DriverChange_FeedbackSpeech = document.getElementById("DMS_4x12_select").value; 
    var DriverChange_FeedbackVisual = document.getElementById("DMS_5x12_select").value; 
    var DriverChange_ReportEvent = document.getElementById("DMS_6x12_select").value; 
    var DriverChange_ReportImage = document.getElementById("DMS_7x12_select").value; 
    var DriverChange_ReportFootage = document.getElementById("DMS_8x12_select").value; 
    var DriverIDUpdated_Activation = document.getElementById("DMS_1x13_select").value; 
    var DriverIDUpdated_FeedbackAudio = document.getElementById("DMS_2x13_select").value; 
    var DriverIDUpdated_FeedbackOutput = document.getElementById("DMS_3x13_select").value; 
    var DriverIDUpdated_FeedbackSpeech = document.getElementById("DMS_4x13_select").value; 
    var DriverIDUpdated_FeedbackVisual = document.getElementById("DMS_5x13_select").value; 
    var DriverIDUpdated_ReportEvent = document.getElementById("DMS_6x13_select").value; 
    var DriverIDUpdated_ReportImage = document.getElementById("DMS_7x13_select").value; 
    var DriverIDUpdated_ReportFootage = document.getElementById("DMS_8x13_select").value; 
   
    // ADAS
    var LDW_Activation = document.getElementById("ADAS_1x1_select").value;
    var LDW_FeedbackAudio = document.getElementById("ADAS_2x1_select").value;
    var LDW_FeedbackOutput = document.getElementById("ADAS_3x1_select").value;
    var LDW_FeedbackSpeech = document.getElementById("ADAS_4x1_select").value;
    var LDW_FeedbackVisual = document.getElementById("ADAS_5x1_select").value;
    var LDW_ReportEvent = document.getElementById("ADAS_6x1_select").value;
    var LDW_ReportImage = document.getElementById("ADAS_7x1_select").value;
    var LDW_ReportFootage = document.getElementById("ADAS_8x1_select").value;
    //var RedLight_Activation = document.getElementById("ADAS_1x2_select").value;
    //var RedLight_FeedbackAudio = document.getElementById("ADAS_2x2_select").value;
    //var RedLight_FeedbackOutput = document.getElementById("ADAS_3x2_select").value;
    //var RedLight_FeedbackSpeech = document.getElementById("ADAS_4x2_select").value;
    //var RedLight_FeedbackVisual = document.getElementById("ADAS_5x2_select").value;
    //var RedLight_ReportEvent = document.getElementById("ADAS_6x2_select").value;
    //var RedLight_ReportImage = document.getElementById("ADAS_7x2_select").value;
    //var RedLight_ReportFootage = document.getElementById("ADAS_8x2_select").value;
    //var StopDisobeyed_Activation = document.getElementById("ADAS_1x3_select").value;
    //var StopDisobeyed_FeedbackAudio = document.getElementById("ADAS_2x3_select").value;
    //var StopDisobeyed_FeedbackOutput = document.getElementById("ADAS_3x3_select").value;
    //var StopDisobeyed_FeedbackSpeech = document.getElementById("ADAS_4x3_select").value;
    //var StopDisobeyed_FeedbackVisual = document.getElementById("ADAS_5x3_select").value;
    //var StopDisobeyed_ReportEvent = document.getElementById("ADAS_6x3_select").value;
    //var StopDisobeyed_ReportImage = document.getElementById("ADAS_7x3_select").value;
    //var StopDisobeyed_ReportFootage = document.getElementById("ADAS_8x3_select").value;
    var HMW_Activation = document.getElementById("ADAS_1x4_select").value;
    var HMW_FeedbackAudio = document.getElementById("ADAS_2x4_select").value;
    var HMW_FeedbackOutput = document.getElementById("ADAS_3x4_select").value;
    var HMW_FeedbackSpeech = document.getElementById("ADAS_4x4_select").value;
    var HMW_FeedbackVisual = document.getElementById("ADAS_5x4_select").value;
    var HMW_ReportEvent = document.getElementById("ADAS_6x4_select").value;
    var HMW_ReportImage = document.getElementById("ADAS_7x4_select").value;
    var HMW_ReportFootage = document.getElementById("ADAS_8x4_select").value;
    var UrbanFCW_Activation = document.getElementById("ADAS_1x5_select").value;
    var UrbanFCW_FeedbackAudio = document.getElementById("ADAS_2x5_select").value;
    var UrbanFCW_FeedbackOutput = document.getElementById("ADAS_3x5_select").value;
    var UrbanFCW_FeedbackSpeech = document.getElementById("ADAS_4x5_select").value;
    var UrbanFCW_FeedbackVisual = document.getElementById("ADAS_5x5_select").value;
    var UrbanFCW_ReportEvent = document.getElementById("ADAS_6x5_select").value;
    var UrbanFCW_ReportImage = document.getElementById("ADAS_7x5_select").value;
    var UrbanFCW_ReportFootage = document.getElementById("ADAS_8x5_select").value;
    var FCW_Activation = document.getElementById("ADAS_1x6_select").value;
    var FCW_FeedbackAudio = document.getElementById("ADAS_2x6_select").value;
    var FCW_FeedbackOutput = document.getElementById("ADAS_3x6_select").value;
    var FCW_FeedbackSpeech = document.getElementById("ADAS_4x6_select").value;
    var FCW_FeedbackVisual = document.getElementById("ADAS_5x6_select").value;
    var FCW_ReportEvent = document.getElementById("ADAS_6x6_select").value;
    var FCW_ReportImage = document.getElementById("ADAS_7x6_select").value;
    var FCW_ReportFootage = document.getElementById("ADAS_8x6_select").value;
    //var Overspeeding_Activation = document.getElementById("ADAS_1x7_select").value;
    //var Overspeeding_FeedbackAudio = document.getElementById("ADAS_2x7_select").value;
    //var Overspeeding_FeedbackOutput = document.getElementById("ADAS_3x7_select").value;
    //var Overspeeding_FeedbackSpeech = document.getElementById("ADAS_4x7_select").value;
    //var Overspeeding_FeedbackVisual = document.getElementById("ADAS_5x7_select").value;
    //var Overspeeding_ReportEvent = document.getElementById("ADAS_6x7_select").value;
    //var Overspeeding_ReportImage = document.getElementById("ADAS_7x7_select").value;
    //var Overspeeding_ReportFootage = document.getElementById("ADAS_8x7_select").value;
    var PCW_Activation = document.getElementById("ADAS_1x8_select").value;
    var PCW_FeedbackAudio = document.getElementById("ADAS_2x8_select").value;
    var PCW_FeedbackOutput = document.getElementById("ADAS_3x8_select").value;
    var PCW_FeedbackSpeech = document.getElementById("ADAS_4x8_select").value;
    var PCW_FeedbackVisual = document.getElementById("ADAS_5x8_select").value;
    var PCW_ReportEvent = document.getElementById("ADAS_6x8_select").value;
    var PCW_ReportImage = document.getElementById("ADAS_7x8_select").value;
    var PCW_ReportFootage = document.getElementById("ADAS_8x8_select").value;

    //Tracking Events
    var IgnitionON_Activation = document.getElementById("TrackingEvents_1x1_select").value; 
    var IgnitionON_FeedbackAudio = document.getElementById("TrackingEvents_2x1_select").value; 
    var IgnitionON_FeedbackOutput = document.getElementById("TrackingEvents_3x1_select").value; 
    var IgnitionON_FeedbackSpeech = document.getElementById("TrackingEvents_4x1_select").value; 
    var IgnitionON_FeedbackVisual = document.getElementById("TrackingEvents_5x1_select").value; 
    var IgnitionON_ReportEvent = document.getElementById("TrackingEvents_6x1_select").value; 
    var IgnitionON_ReportImage = document.getElementById("TrackingEvents_7x1_select").value; 
    var IgnitionON_ReportFootage = document.getElementById("TrackingEvents_8x1_select").value; 
    var IgnitionOFF_Activation = document.getElementById("TrackingEvents_1x2_select").value; 
    var IgnitionOFF_FeedbackAudio = document.getElementById("TrackingEvents_2x2_select").value; 
    var IgnitionOFF_FeedbackOutput = document.getElementById("TrackingEvents_3x2_select").value; 
    var IgnitionOFF_FeedbackSpeech = document.getElementById("TrackingEvents_4x2_select").value; 
    var IgnitionOFF_FeedbackVisual = document.getElementById("TrackingEvents_5x2_select").value; 
    var IgnitionOFF_ReportEvent = document.getElementById("TrackingEvents_6x2_select").value; 
    var IgnitionOFF_ReportImage = document.getElementById("TrackingEvents_7x2_select").value; 
    var IgnitionOFF_ReportFootage = document.getElementById("TrackingEvents_8x2_select").value; 
    var MovementStarted_Activation = document.getElementById("TrackingEvents_1x3_select").value; 
    var MovementStarted_FeedbackAudio = document.getElementById("TrackingEvents_2x3_select").value; 
    var MovementStarted_FeedbackOutput = document.getElementById("TrackingEvents_3x3_select").value; 
    var MovementStarted_FeedbackSpeech = document.getElementById("TrackingEvents_4x3_select").value; 
    var MovementStarted_FeedbackVisual = document.getElementById("TrackingEvents_5x3_select").value; 
    var MovementStarted_ReportEvent = document.getElementById("TrackingEvents_6x3_select").value; 
    var MovementStarted_ReportImage = document.getElementById("TrackingEvents_7x3_select").value; 
    var MovementStarted_ReportFootage = document.getElementById("TrackingEvents_8x3_select").value; 
    var MovementStopped_Activation = document.getElementById("TrackingEvents_1x4_select").value; 
    var MovementStopped_FeedbackAudio = document.getElementById("TrackingEvents_2x4_select").value; 
    var MovementStopped_FeedbackOutput = document.getElementById("TrackingEvents_3x4_select").value; 
    var MovementStopped_FeedbackSpeech = document.getElementById("TrackingEvents_4x4_select").value; 
    var MovementStopped_FeedbackVisual = document.getElementById("TrackingEvents_5x4_select").value; 
    var MovementStopped_ReportEvent = document.getElementById("TrackingEvents_6x4_select").value; 
    var MovementStopped_ReportImage = document.getElementById("TrackingEvents_7x4_select").value; 
    var MovementStopped_ReportFootage = document.getElementById("TrackingEvents_8x4_select").value; 
    var Heartbeat_Activation = document.getElementById("TrackingEvents_1x5_select").value; 
    var Heartbeat_FeedbackAudio = document.getElementById("TrackingEvents_2x5_select").value; 
    var Heartbeat_FeedbackOutput = document.getElementById("TrackingEvents_3x5_select").value; 
    var Heartbeat_FeedbackSpeech = document.getElementById("TrackingEvents_4x5_select").value; 
    var Heartbeat_FeedbackVisual = document.getElementById("TrackingEvents_5x5_select").value; 
    var Heartbeat_ReportEvent = document.getElementById("TrackingEvents_6x5_select").value; 
    var Heartbeat_ReportImage = document.getElementById("TrackingEvents_7x5_select").value; 
    var Heartbeat_ReportFootage = document.getElementById("TrackingEvents_8x5_select").value;
    var GPSstatusUpdate_Activation = document.getElementById("TrackingEvents_1x6_select").value; 
    var GPSstatusUpdate_FeedbackAudio = document.getElementById("TrackingEvents_2x6_select").value; 
    var GPSstatusUpdate_FeedbackOutput = document.getElementById("TrackingEvents_3x6_select").value; 
    var GPSstatusUpdate_FeedbackSpeech = document.getElementById("TrackingEvents_4x6_select").value; 
    var GPSstatusUpdate_FeedbackVisual = document.getElementById("TrackingEvents_5x6_select").value; 
    var GPSstatusUpdate_ReportEvent = document.getElementById("TrackingEvents_6x6_select").value; 
    var GPSstatusUpdate_ReportImage = document.getElementById("TrackingEvents_7x6_select").value; 
    var GPSstatusUpdate_ReportFootage = document.getElementById("TrackingEvents_8x6_select").value; 
    var TripPath_Activation = document.getElementById("TrackingEvents_1x7_select").value; 
    var TripPath_FeedbackAudio = document.getElementById("TrackingEvents_2x7_select").value; 
    var TripPath_FeedbackOutput = document.getElementById("TrackingEvents_3x7_select").value; 
    var TripPath_FeedbackSpeech = document.getElementById("TrackingEvents_4x7_select").value; 
    var TripPath_FeedbackVisual = document.getElementById("TrackingEvents_5x7_select").value; 
    var TripPath_ReportEvent = document.getElementById("TrackingEvents_6x7_select").value; 
    var TripPath_ReportImage = document.getElementById("TrackingEvents_7x7_select").value; 
    var TripPath_ReportFootage = document.getElementById("TrackingEvents_8x7_select").value;

    //System
    var CameraCalibrationCompleted_Activation = document.getElementById("System_wo_Event_1x1_select").value; 
    var CameraCalibrationCompleted_FeedbackAudio = document.getElementById("System_wo_Event_2x1_select").value; 
    var CameraCalibrationCompleted_FeedbackOutput = document.getElementById("System_wo_Event_3x1_select").value; 
    var CameraCalibrationCompleted_FeedbackSpeech = document.getElementById("System_wo_Event_4x1_select").value; 
    var CameraCalibrationCompleted_FeedbackVisual = document.getElementById("System_wo_Event_5x1_select").value; 
    var CameraCalibrationCompleted_ReportEvent = document.getElementById("System_wo_Event_6x1_select").value; 
    var CameraCalibrationCompleted_ReportImage = document.getElementById("System_wo_Event_7x1_select").value; 
    var CameraCalibrationCompleted_ReportFootage = document.getElementById("System_wo_Event_8x1_select").value; 
    var CameraCalibrationFailed_Activation = document.getElementById("System_wo_Event_1x2_select").value; 
    var CameraCalibrationFailed_FeedbackAudio = document.getElementById("System_wo_Event_2x2_select").value;
    var CameraCalibrationFailed_FeedbackOutput = document.getElementById("System_wo_Event_3x2_select").value; 
    var CameraCalibrationFailed_FeedbackSpeech = document.getElementById("System_wo_Event_4x2_select").value; 
    var CameraCalibrationFailed_FeedbackVisual = document.getElementById("System_wo_Event_5x2_select").value; 
    var CameraCalibrationFailed_ReportEvent = document.getElementById("System_wo_Event_6x2_select").value; 
    var CameraCalibrationFailed_ReportImage = document.getElementById("System_wo_Event_7x2_select").value; 
    var CameraCalibrationFailed_ReportFootage = document.getElementById("System_wo_Event_8x2_select").value; 
    var AccelerometerCalibrationCompleted_Activation = document.getElementById("System_wo_Event_1x3_select").value; 
    var AccelerometerCalibrationCompleted_FeedbackAudio = document.getElementById("System_wo_Event_2x3_select").value; 
    var AccelerometerCalibrationCompleted_FeedbackOutput = document.getElementById("System_wo_Event_3x3_select").value; 
    var AccelerometerCalibrationCompleted_FeedbackSpeech = document.getElementById("System_wo_Event_4x3_select").value; 
    var AccelerometerCalibrationCompleted_FeedbackVisual = document.getElementById("System_wo_Event_5x3_select").value; 
    var AccelerometerCalibrationCompleted_ReportEvent = document.getElementById("System_wo_Event_6x3_select").value; 
    var AccelerometerCalibrationCompleted_ReportImage = document.getElementById("System_wo_Event_7x3_select").value; 
    var AccelerometerCalibrationCompleted_ReportFootage = document.getElementById("System_wo_Event_8x3_select").value; 
    var EnteredSleepMode_Activation = document.getElementById("System_wo_Event_1x4_select").value; 
    var EnteredSleepMode_FeedbackAudio = document.getElementById("System_wo_Event_2x4_select").value; 
    var EnteredSleepMode_FeedbackOutput = document.getElementById("System_wo_Event_3x4_select").value; 
    var EnteredSleepMode_FeedbackSpeech = document.getElementById("System_wo_Event_4x4_select").value; 
    var EnteredSleepMode_FeedbackVisual = document.getElementById("System_wo_Event_5x4_select").value; 
    var EnteredSleepMode_ReportEvent = document.getElementById("System_wo_Event_6x4_select").value; 
    var EnteredSleepMode_ReportImage = document.getElementById("System_wo_Event_7x4_select").value; 
    var EnteredSleepMode_ReportFootage = document.getElementById("System_wo_Event_8x4_select").value; 
    var FwUpdateStarted_Activation = document.getElementById("System_wo_Event_1x5_select").value; 
    var FwUpdateStarted_FeedbackAudio = document.getElementById("System_wo_Event_2x5_select").value; 
    var FwUpdateStarted_FeedbackOutput = document.getElementById("System_wo_Event_3x5_select").value; 
    var FwUpdateStarted_FeedbackSpeech = document.getElementById("System_wo_Event_4x5_select").value; 
    var FwUpdateStarted_FeedbackVisual = document.getElementById("System_wo_Event_5x5_select").value; 
    var FwUpdateStarted_ReportEvent = document.getElementById("System_wo_Event_6x5_select").value; 
    var FwUpdateStarted_ReportImage = document.getElementById("System_wo_Event_7x5_select").value; 
    var FwUpdateStarted_ReportFootage = document.getElementById("System_wo_Event_8x5_select").value; 
    var FwUpdateCompleted_Activation = document.getElementById("System_wo_Event_1x6_select").value; 
    var FwUpdateCompleted_FeedbackAudio = document.getElementById("System_wo_Event_2x6_select").value; 
    var FwUpdateCompleted_FeedbackOutput = document.getElementById("System_wo_Event_3x6_select").value; 
    var FwUpdateCompleted_FeedbackSpeech = document.getElementById("System_wo_Event_4x6_select").value; 
    var FwUpdateCompleted_FeedbackVisual = document.getElementById("System_wo_Event_5x6_select").value; 
    var FwUpdateCompleted_ReportEvent = document.getElementById("System_wo_Event_6x6_select").value; 
    var FwUpdateCompleted_ReportImage = document.getElementById("System_wo_Event_7x6_select").value; 
    var FwUpdateCompleted_ReportFootage = document.getElementById("System_wo_Event_8x6_select").value;
    var FwUpdateFailed_Activation = document.getElementById("System_wo_Event_1x7_select").value; 
    var FwUpdateFailed_FeedbackAudio = document.getElementById("System_wo_Event_2x7_select").value; 
    var FwUpdateFailed_FeedbackOutput = document.getElementById("System_wo_Event_3x7_select").value; 
    var FwUpdateFailed_FeedbackSpeech = document.getElementById("System_wo_Event_4x7_select").value; 
    var FwUpdateFailed_FeedbackVisual = document.getElementById("System_wo_Event_5x7_select").value; 
    var FwUpdateFailed_ReportEvent = document.getElementById("System_wo_Event_6x7_select").value; 
    var FwUpdateFailed_ReportImage = document.getElementById("System_wo_Event_7x7_select").value; 
    var FwUpdateFailed_ReportFootage = document.getElementById("System_wo_Event_8x7_select").value; 
    var SystemBoot_Activation = document.getElementById("System_wo_Event_1x8_select").value; 
    var SystemBoot_FeedbackAudio = document.getElementById("System_wo_Event_2x8_select").value; 
    var SystemBoot_FeedbackOutput = document.getElementById("System_wo_Event_3x8_select").value; 
    var SystemBoot_FeedbackSpeech = document.getElementById("System_wo_Event_4x8_select").value; 
    var SystemBoot_FeedbackVisual = document.getElementById("System_wo_Event_5x8_select").value; 
    var SystemBoot_ReportEvent = document.getElementById("System_wo_Event_6x8_select").value; 
    var SystemBoot_ReportImage = document.getElementById("System_wo_Event_7x8_select").value; 
    var SystemBoot_ReportFootage = document.getElementById("System_wo_Event_8x8_select").value; 
    var SystemBootFailure_Activation = document.getElementById("System_wo_Event_1x9_select").value; 
    var SystemBootFailure_FeedbackAudio = document.getElementById("System_wo_Event_2x9_select").value; 
    var SystemBootFailure_FeedbackOutput = document.getElementById("System_wo_Event_3x9_select").value; 
    var SystemBootFailure_FeedbackSpeech = document.getElementById("System_wo_Event_4x9_select").value; 
    var SystemBootFailure_FeedbackVisual = document.getElementById("System_wo_Event_5x9_select").value; 
    var SystemBootFailure_ReportEvent = document.getElementById("System_wo_Event_6x9_select").value; 
    var SystemBootFailure_ReportImage = document.getElementById("System_wo_Event_7x9_select").value; 
    var SystemBootFailure_ReportFootage = document.getElementById("System_wo_Event_8x9_select").value; 
    var ExternalEventTriggering_Activation = document.getElementById("System_w_Event_1x1_select").value; 
    var ExternalEventTriggering_FeedbackAudio = document.getElementById("System_w_Event_2x1_select").value; 
    var ExternalEventTriggering_FeedbackOutput = document.getElementById("System_w_Event_3x1_select").value; 
    var ExternalEventTriggering_FeedbackSpeech = document.getElementById("System_w_Event_4x1_select").value; 
    var ExternalEventTriggering_FeedbackVisual = document.getElementById("System_w_Event_5x1_select").value; 
    var ExternalEventTriggering_ReportEvent = document.getElementById("System_w_Event_6x1_select").value; 
    var ExternalEventTriggering_ReportImage = document.getElementById("System_w_Event_7x1_select").value; 
    var ExternalEventTriggering_ReportFootage = document.getElementById("System_w_Event_8x1_select").value; 
    var ApplicationError_Activation = document.getElementById("System_w_Event_1x2_select").value; 
    var ApplicationError_FeedbackAudio = document.getElementById("System_w_Event_2x2_select").value; 
    var ApplicationError_FeedbackOutput = document.getElementById("System_w_Event_3x2_select").value; 
    var ApplicationError_FeedbackSpeech = document.getElementById("System_w_Event_4x2_select").value; 
    var ApplicationError_FeedbackVisual = document.getElementById("System_w_Event_5x2_select").value; 
    var ApplicationError_ReportEvent = document.getElementById("System_w_Event_6x2_select").value; 
    var ApplicationError_ReportImage = document.getElementById("System_w_Event_7x2_select").value; 
    var ApplicationError_ReportFootage = document.getElementById("System_w_Event_8x2_select").value; 
    var CameraError_Activation = document.getElementById("System_w_Event_1x3_select").value; 
    var CameraError_FeedbackAudio = document.getElementById("System_w_Event_2x3_select").value; 
    var CameraError_FeedbackOutput = document.getElementById("System_w_Event_3x3_select").value; 
    var CameraError_FeedbackSpeech = document.getElementById("System_w_Event_4x3_select").value; 
    var CameraError_FeedbackVisual = document.getElementById("System_w_Event_5x3_select").value; 
    var CameraError_ReportEvent = document.getElementById("System_w_Event_6x3_select").value; 
    var CameraError_ReportImage = document.getElementById("System_w_Event_7x3_select").value; 
    var CameraError_ReportFootage = document.getElementById("System_w_Event_8x3_select").value; 
    var SystemOK_Activation = document.getElementById("System_w_Event_1x4_select").value; 
    var SystemOK_FeedbackAudio = document.getElementById("System_w_Event_2x4_select").value; 
    var SystemOK_FeedbackOutput = document.getElementById("System_w_Event_3x4_select").value; 
    var SystemOK_FeedbackSpeech = document.getElementById("System_w_Event_4x4_select").value; 
    var SystemOK_FeedbackVisual = document.getElementById("System_w_Event_5x4_select").value; 
    var SystemOK_ReportEvent = document.getElementById("System_w_Event_6x4_select").value; 
    var SystemOK_ReportImage = document.getElementById("System_w_Event_7x4_select").value; 
    var SystemOK_ReportFootage = document.getElementById("System_w_Event_8x4_select").value; 
    var SystemReset_Activation = document.getElementById("System_w_Event_1x5_select").value; 
    var SystemReset_FeedbackAudio = document.getElementById("System_w_Event_2x5_select").value; 
    var SystemReset_FeedbackOutput = document.getElementById("System_w_Event_3x5_select").value; 
    var SystemReset_FeedbackSpeech = document.getElementById("System_w_Event_4x5_select").value; 
    var SystemReset_FeedbackVisual = document.getElementById("System_w_Event_5x5_select").value; 
    var SystemReset_ReportEvent = document.getElementById("System_w_Event_6x5_select").value; 
    var SystemReset_ReportImage = document.getElementById("System_w_Event_7x5_select").value; 
    var SystemReset_ReportFootage = document.getElementById("System_w_Event_8x5_select").value; 
    var SystemError_Activation = document.getElementById("System_w_Event_1x6_select").value; 
    var SystemError_FeedbackAudio = document.getElementById("System_w_Event_2x6_select").value; 
    var SystemError_FeedbackOutput = document.getElementById("System_w_Event_3x6_select").value; 
    var SystemError_FeedbackSpeech = document.getElementById("System_w_Event_4x6_select").value; 
    var SystemError_FeedbackVisual = document.getElementById("System_w_Event_5x6_select").value; 
    var SystemError_ReportEvent = document.getElementById("System_w_Event_6x6_select").value; 
    var SystemError_ReportImage = document.getElementById("System_w_Event_7x6_select").value; 
    var SystemError_ReportFootage = document.getElementById("System_w_Event_8x6_select").value; 
    var MCULOG_Activation = document.getElementById("System_w_Event_1x7_select").value; 
    var MCULOG_FeedbackAudio = document.getElementById("System_w_Event_2x7_select").value; 
    var MCULOG_FeedbackOutput = document.getElementById("System_w_Event_3x7_select").value; 
    var MCULOG_FeedbackSpeech = document.getElementById("System_w_Event_4x7_select").value; 
    var MCULOG_FeedbackVisual = document.getElementById("System_w_Event_5x7_select").value; 
    var MCULOG_ReportEvent = document.getElementById("System_w_Event_6x7_select").value; 
    var MCULOG_ReportImage = document.getElementById("System_w_Event_7x7_select").value; 
    var MCULOG_ReportFootage = document.getElementById("System_w_Event_8x7_select").value; 

    //Modem
    var KeepAliveInSec = parseInt(document.getElementById("KeepAliveInSec").value);
    var ModemResetHWTimeInMin = parseInt(document.getElementById("ModemResetHWTimeInMin").value);
    var ModemResetSignalTimeInMin = parseInt(document.getElementById("ModemResetSignalTimeInMin").value);
    var RepeatCycleUntilCommRecovery = document.getElementById("RepeatCycleUntilCommRecovery").value;
    var SelfPowerRecycleTimeInMin = parseInt(document.getElementById("SelfPowerRecycleTimeInMin").value);
    var SocketResetTimeInMin = parseInt(document.getElementById("SocketResetTimeInMin").value);
    
    //Hardware
    var Acc3DDriveTimeFilter = parseInt(document.getElementById("Acc3DDriveTimeFilter").value);
    var Acc3DStopTimeFilter = parseInt(document.getElementById("Acc3DStopTimeFilter").value);
    var ContRecording = parseInt(document.getElementById("ContRecording").value);
    var StateGPIO = document.getElementById("StateGPIO").value;
    var GPIO_Field_1 = document.getElementById("Select_GPIO_1").value;
    var GPIO_Field_2 = document.getElementById("Select_GPIO_2").value;
    var GPIO_Field_3 = document.getElementById("Select_GPIO_3").value;
    var GPIO_Field_4 = document.getElementById("Select_GPIO_4").value;

    var GPIO = {};
    var GPIO_temp={};

    if(StateGPIO === "Out"){
        GPIO_Field_1 = parseInt(GPIO_Field_1);
        GPIO_Field_2 = parseFloat(GPIO_Field_2).toFixed(1);
        GPIO_Field_3 = parseInt(GPIO_Field_3);
        var GPIO_temp= {
            "State": StateGPIO,
            "DutyCycle": GPIO_Field_1,
            "Frequency": GPIO_Field_2,
            "Length": GPIO_Field_3,
            "Source": GPIO_Field_4
        };
    GPIO = GPIO_temp;
    }
    else{
        GPIO_Field_3 = parseInt(GPIO_Field_3);
        GPIO_Field_4 = parseFloat(GPIO_Field_4).toFixed(1);
        var GPIO_temp = {
            "State": StateGPIO,
            "ActiveLevel": (GPIO_Field_1 === "true"),
            "SpecialFunction": GPIO_Field_2,
            "StateDuration": GPIO_Field_3,
            "VoltageThreshold": GPIO_Field_4
        }
    };
    GPIO = GPIO_temp;

    var ActiveLevelGPI = document.getElementById("ActiveLevelGPI").value;
    var FunctionGPI = document.getElementById("FunctionGPI").value;
    var StateDurationGPI = parseInt(document.getElementById("StateDurationGPI").value);
    var VoltageThresholdGPI = parseFloat(document.getElementById("VoltageThresholdGPI").value).toFixed(1);
    var DutyCycleGPO = parseInt(document.getElementById("DutyCycleGPO").value);
    var FrequencyGPO = parseFloat(document.getElementById("FrequencyGPO").value).toFixed(1);
    var LengthGPO = parseInt(document.getElementById("LengthGPO").value);
    var SourceGPO = document.getElementById("SourceGPO").value;
    var DeviceTurnOnEnable = document.getElementById("DeviceTurnOnEnable").value;
    var SelfEventTriggerEnable = document.getElementById("SelfEventTriggerEnable").value;
    var micStatus = document.getElementById("micStatus").value;
    var SDcardEncryption = document.getElementById("SDcardEncryption").value;
    
    //Volume
    var VolumeforAsleep = parseInt(document.getElementById("VolumeforAsleep").value);
    var VolumeforAlerts = parseInt(document.getElementById("VolumeforAlerts").value);
    var VolumeControls = document.getElementById("VolumeControls").value;
    var Notificationlanguage = parseInt(document.getElementById("Notificationlanguage").value);
    
    //Driver's Feedback
    var DriverFeedbackBeeps = document.getElementById("beepsActivation").value;
    var DriverFeedbackLED = document.getElementById("LEDActivation").value;
    var DriverFeedbackVoice = document.getElementById("voiceActivation").value;
    var SystemLEDActivation = document.getElementById("SystemLEDActivation").value;

    //Driver
    var LeftHandDrive = document.getElementById("LeftHandDrive").value;
    
    //Communications
    var CommChannelState = document.getElementById("CommChannelState").value;
    var Alerts = document.getElementById("Alerts").value;
    var AlertsCheckBox = document.getElementById("AlertsCheckBox");
    var Debug = document.getElementById("Debug").value;
    var DebugCheckBox = document.getElementById("DebugCheckBox");
    var FOTA = document.getElementById("FOTA").value;
    var FOTACheckBox = document.getElementById("FOTACheckBox");
    var Image_Comm = document.getElementById("Image_Comm").value;
    var ImageCheckBox = document.getElementById("ImageCheckBox");
    var Video_Comm = document.getElementById("Video_Comm").value;
    var VideoCheckBox = document.getElementById("VideoCheckBox");
    var timeBeforeEvent = parseInt(document.getElementById("timeBeforeEvent").value);
    var timeAfterEvent = parseInt(document.getElementById("timeAfterEvent").value);

    var EnableSleepBlockingByDrowsiness = document.getElementById("EnableSleepBlockingByDrowsiness").value;
    
    // FS10-ADAS (Future use)
    //var DashedLineCrossing = document.getElementById("DashedLineCrossing").value;
    //var SolidLineCrossing = document.getElementById("SolidLineCrossing").value;
    //var ActiveLaneSpeedThreshold = parseInt(document.getElementById("ActiveLaneSpeedThreshold").value);
    //var InstallationHeight = parseInt(document.getElementById("InstallationHeight").value);
    //var OffsetFromCenter = parseInt(document.getElementById("OffsetFromCenter").value);
    //var FCWWarningRange = parseInt(document.getElementById("FCWWarningRange").value);
    //var FCWSpeedThreshold = parseInt(document.getElementById("FCWSpeedThreshold").value);
    //var HMWSpeedThreshold = parseInt(document.getElementById("HMWSpeedThreshold").value);
    //var TimeToTriggerTailgating = parseInt(document.getElementById("TimeToTriggerTailgating").value);
    //var TtcEmergencyRange = parseFloat(document.getElementById("TtcEmergencyRange").value).toFixed(1);
    //var TtcWarningRange = parseFloat(document.getElementById("TtcWarningRange").value).toFixed(1);
    
    // Device Type
    var DeviceTypeRadio = document.querySelector('input[name="deviceType"]:checked').value;
    var MinSpeedMonitor = parseInt(document.getElementById('MinSpeedMonitor').value);

    // GPS Loss Speed Persistance Time
    var GPSLossSpeedPersistenceTime = parseInt(document.getElementById('GPSLossSpeedPersistenceTime').value)
    
    // Hybrid Configs
    if (!AlertsCheckBox.checked) {
        Alerts = CommChannelState;
    }
    if (!DebugCheckBox.checked) {
        Debug = CommChannelState;
    }
    if (!ImageCheckBox.checked) {
        Image_Comm = CommChannelState;
    }
    if (!FOTACheckBox.checked) {
        if(CommChannelState === "RS232"){
            FOTA = "WiFi";
        }
        else{
            FOTA_Comm = CommChannelState;
        }
    }
    if (!VideoCheckBox.checked) {
        if(CommChannelState === "RS232"){
            Video_Comm = "WiFi";
        }
        else{
            Video_Comm = CommChannelState;
        }
    }
    
    // Checking if RS232 protocol is used for Mobileye or Hybrid Configuration
    if(DeviceTypeRadio === "Mobileye" || DeviceTypeRadio === "MobileyeRC" ){
        if((DuplicateMsgOverRS232 === 'true') || (CommChannelState === "RS232") || (Alerts === "RS232" && AlertsCheckBox.checked) || (Debug === "RS232" && DebugCheckBox.checked) || (Image_Comm === "RS232" && ImageCheckBox.checked)){
            // Cipia-FS10 Serial RX to Mobileye and Cipia-FS10 Serial TX to 3rd Party RS232 Transparent Mode Device.
            var SerialProtocol_JSON = {
                "SerialProtocolSettings": {
                    "serial_protocol": {
                        "incoming_inter_packet_delay": 20,
                        "incoming_packets": {
                            "mobileye_can_msg": {
                                "active": true,
                                "fields": [
                                {
                                    "data": "4043414e3a3730302c382c",
                                    "type": "fixed"
                                },
                                {
                                    "length": 0,
                                    "type": "data"
                                }
                                ],
                                "id": 1001
                            }
                        },
                        "terminal_type": "mobileye",
                        "little_endian": true,
                        "mtu": 900,
                        "outgoing_inter_packet_delay": 75,
                        "outgoing_packets": {
                            "FleetSenseBinaryData": {
                                "active": true,
                                "fields": [
                                    {
                                        "data": "90A3A3",
                                        "type": "fixed"
                                    },
                                    {
                                        "type": "data"
                                    }
                                ],
                                "id": 1,
                            }
                        }
                    }
                },
            }
            console.log("RS232 + Mobileye");
        } 
        else{
            // Change the Serial Protocol Settings to Mobileye only
            var SerialProtocol_JSON = {
                "SerialProtocolSettings" : {
                    "serial_protocol": {
                        "incoming_inter_packet_delay" : 20,
                        "incoming_packets": {
                            "mobileye_can_msg": {
                                "active": true,
                                "fields": [
                                    {
                                        "data": "4043414e3a3730302c382c",
                                        "type": "fixed"
                                    },
                                    {
                                        "length": 0,
                                        "type": "data"
                                    }
                                ],
                                "id": 1001
                            }
                        },
                        "outgoing_packets": {},
                        "terminal_type": "mobileye"
                    }
                },
            }
            console.log("Mobileye");
        }
    } 
    else {
        if((DuplicateMsgOverRS232 === 'true') || (CommChannelState === "RS232") || (Alerts === "RS232" && AlertsCheckBox.checked) || (Debug === "RS232" && DebugCheckBox.checked) || (Image_Comm === "RS232" && ImageCheckBox.checked)){
            // Change the Serial Protocol Settings to RS232
            var SerialProtocol_JSON = {
                "SerialProtocolSettings": {
                    "serial_protocol": {
                        "little_endian": true,
                        "mtu": 900,
                        "outgoing_inter_packet_delay": 75,
                        "outgoing_packets": {
                            "FleetSenseBinaryData": {
                                "active": true,
                                "fields": [
                                {
                                    "data": "90A3A3",
                                    "type": "fixed"
                                },
                                {
                                    "type": "data"
                                }
                                ],
                                "id": 1
                            }
                        },
                        "incoming_packets": {
                            "ServerSideDataPacket": {
                            "active": true,
                            "fields": [
                                {
                                    "data": "90A3",
                                    "type": "fixed"
                                },
                                {
                                    "type": "length",
                                    "size": 4
                                },
                                {
                                    "type": "data"
                                }
                            ],
                            "id": 2
                            }
                        }
                    }
                },
            }
            console.log("RS232");
        }
        else {
            if((DuplicateMsgOverRS232 === 'true')){
                var SerialProtocol_JSON = {
                    "SerialProtocolSettings": {
                        "serial_protocol": {
                            "little_endian": true,
                            "mtu": 900,
                            "outgoing_inter_packet_delay": 75,
                            "outgoing_packets": {
                                "FleetSenseBinaryData": {
                                    "active": true,
                                    "fields": [
                                    {
                                        "data": "90A3A3",
                                        "type": "fixed"
                                    },
                                    {
                                        "type": "data"
                                    }
                                    ],
                                    "id": 1
                                }
                            },
                            "incoming_packets": {
                                "ServerSideDataPacket": {
                                "active": true,
                                "fields": [
                                    {
                                        "data": "90A3",
                                        "type": "fixed"
                                    },
                                    {
                                        "type": "length",
                                        "size": 4
                                    },
                                    {
                                        "type": "data"
                                    }
                                ],
                                "id": 2
                                }
                            }
                        }
                    },
                }
                console.log("Duplicate RS232");
            }
            else{
                var SerialProtocol_JSON = {
                    "SerialProtocolSettings": {
                        "serial_protocol": {
                            "little_endian": true,
                            "mtu": 900,
                            "outgoing_inter_packet_delay": 75,
                            "outgoing_packets": {
                                "FleetSenseBinaryData": {
                                    "active": true,
                                    "fields": [
                                    {
                                        "data": "90A3A3",
                                        "type": "fixed"
                                    },
                                    {
                                        "type": "data"
                                    }
                                    ],
                                    "id": 1
                                }
                            },
                        }
                    },
                }
                console.log("No RS232");
            }
        }
    }
    
    //Disable outputs for ADAS events
    if(DeviceTypeRadio === "Disabled" || DeviceTypeRadio === "DVR"){
        // No events for ADAS
        // Lane Departure Warning
        LDW_Activation = false;
        LDW_FeedbackAudio = false;
        LDW_FeedbackOutput = "None";
        LDW_FeedbackSpeech = false;
        LDW_FeedbackVisual = false;
        LDW_ReportEvent = false;
        LDW_ReportImage = "None";
        LDW_ReportFootage = "None";
        // Redlight
        /*
        RedLight_Activation = false;
        RedLight_FeedbackAudio = false;
        RedLight_FeedbackOutput = "None";
        RedLight_FeedbackSpeech = false;
        RedLight_FeedbackVisual = false;
        RedLight_ReportEvent = false;
        RedLight_ReportImage = "None";
        RedLight_ReportFootage = "None";
        */
        //Stop disobeyed
        /*
        StopDisobeyed_Activation = false;
        StopDisobeyed_FeedbackAudio = false;
        StopDisobeyed_FeedbackOutput = "None";
        StopDisobeyed_FeedbackSpeech = false;
        StopDisobeyed_FeedbackVisual = false;
        StopDisobeyed_ReportEvent = false;
        StopDisobeyed_ReportImage = "None";
        StopDisobeyed_ReportFootage = "None";
        */
        // Tailgating
        HMW_Activation = false;
        HMW_FeedbackAudio  = false;
        HMW_FeedbackOutput = "None";
        HMW_FeedbackSpeech = false;
        HMW_FeedbackVisual = false;
        HMW_ReportEvent = false;
        HMW_ReportImage = "None";
        HMW_ReportFootage = "None";
        //Urban Forward Collision Warning
        UrbanFCW_Activation = false;
        UrbanFCW_FeedbackAudio  = false;
        UrbanFCW_FeedbackOutput = "None";
        UrbanFCW_FeedbackSpeech = false;
        UrbanFCW_FeedbackVisual = false;
        UrbanFCW_ReportEvent = false;
        UrbanFCW_ReportImage = "None";
        UrbanFCW_ReportFootage = "None";
        //Forward Collision Warning
        FCW_Activation = false;
        FCW_FeedbackAudio  = false;
        FCW_FeedbackOutput = "None";
        FCW_FeedbackSpeech = false;
        FCW_FeedbackVisual = false;
        FCW_ReportEvent = false;
        FCW_ReportImage = "None";
        FCW_ReportFootage = "None";
        //Overspeeding
        /*
        Overspeeding_Activation = false;
        Overspeeding_FeedbackAudio  = false;
        Overspeeding_FeedbackOutput = "None";
        Overspeeding_FeedbackSpeech = false;
        Overspeeding_FeedbackVisual = false;
        Overspeeding_ReportEvent = false;
        Overspeeding_ReportImage = "None";
        Overspeeding_ReportFootage = "None";
        */
        //Pedestrian Collision Warning
        PCW_Activation = false;
        PCW_FeedbackAudio  = false;
        PCW_FeedbackOutput = "None";
        PCW_FeedbackSpeech = false;
        PCW_FeedbackVisual = false;
        PCW_ReportEvent = false;
        PCW_ReportImage = "None";
        PCW_ReportFootage = "None";
    }
    
    //Miscellaneous
    var VehicleCategoryMenu = document.getElementsByName("vehicleType");
    var VehicleCategorySelected;
    for (var i = 0; i < VehicleCategoryMenu.length; i++) {
        if (VehicleCategoryMenu[i].checked) {
            VehicleCategorySelected = VehicleCategoryMenu[i];
            break;
        }
    }
    var VehicleCategory = VehicleCategorySelected.value;
    var VideostoStorage = parseInt(document.getElementById("VideostoStorage").value);
    var videoResolution = parseInt(document.getElementById("videoResolution").value);
    var photoResolution = parseInt(document.getElementById("photoResolution").value);
    
    //APN settings for the user
    var APN_apn = document.getElementById("APN_apn").value;
    var APN_user = document.getElementById("APN_user").value;
    var APN_pass = document.getElementById("APN_pass").value;
    APN_apn = update_FS10_textInputs(APN_apn);
    APN_user = update_FS10_textInputs(APN_user);
    APN_pass = update_FS10_textInputs(APN_pass);
    
    //Events for user
    var EventstoStorage = parseInt(document.getElementById("VideostoStorage").value);
    //var CalibrationReferencePoint_x = parseFloat(document.getElementById("CalibrationReferencePoint_x").value).toFixed(1);
    //var CalibrationReferencePoint_y = parseFloat(document.getElementById("CalibrationReferencePoint_y").value).toFixed(1);
    //var CalibrationReferencePoint_z = parseFloat(document.getElementById("CalibrationReferencePoint_z").value).toFixed(1);
    var CameraStatusBackoffTimer = parseInt(document.getElementById("CameraStatusBackoffTimer").value);
    var DistractionBackoffTimer = parseInt(document.getElementById("DistractionBackoffTimer").value);
    var DistractionSpeedThreshold = parseInt(document.getElementById("DistractionSpeedThreshold").value);
    var DistractionTurnGraceDuration = parseFloat(document.getElementById("DistractionTurnGraceDuration").value).toFixed(1);
    var DriverChangeMinDuration = parseFloat(document.getElementById("DriverChangeMinDuration").value).toFixed(1);
    var DrowsinessBackoffTimer = parseInt(document.getElementById("DrowsinessBackoffTimer").value);
    var DrowsinessSpeedThreshold = parseInt(document.getElementById("DrowsinessSpeedThreshold").value);
    var EnableYawnBasedDrowsiness = document.getElementById("EnableYawnBasedDrowsiness").value;
    var PhoneBackoffTimer = parseInt(document.getElementById("PhoneBackoffTimer").value);
    var PhoneSpeedThreshold = parseInt(document.getElementById("PhoneSpeedThreshold").value);
    var RoadCenterPitchNeg = parseFloat(document.getElementById("RoadCenterPitchNeg").value).toFixed(1);
    var RoadCenterPitchPos = parseFloat(document.getElementById("RoadCenterPitchPos").value).toFixed(1);
    var RoadCenterYawNeg = parseFloat(document.getElementById("RoadCenterYawNeg").value).toFixed(1);
    var RoadCenterYawPos = parseFloat(document.getElementById("RoadCenterYawPos").value).toFixed(1);
    var SeatbeltBackoffTimer = parseInt(document.getElementById("SeatbeltBackoffTimer").value);
    var SeatbeltSpeedThreshold = parseInt(document.getElementById("SeatbeltSpeedThreshold").value);
    var SleepBackoffTimer = parseInt(document.getElementById("SleepBackoffTimer").value);
    var SmokingBackoffTimer = parseInt(document.getElementById("SmokingBackoffTimer").value);
    var SmokingSpeedThreshold = parseInt(document.getElementById("SmokingSpeedThreshold").value);
    var AsleepOTAClosure = document.getElementById("AsleepOTAClosure");
    var DriverDistractedOTAClosure = document.getElementById("DriverDistractedOTAClosure");
    var DrowsinessOTAClosure = document.getElementById("DrowsinessOTAClosure");
    var FCWOTAClosure = document.getElementById("FCWOTAClosure");
    var LDWOTAClosure = document.getElementById("LDWOTAClosure");
    //var LightDrowsinessOTAClosure = document.getElementById("LightDrowsinessOTAClosure");
    var PCWOTAClosure =document.getElementById("PCWOTAClosure");
    var PhoneUseOTAClosure = document.getElementById("PhoneUseOTAClosure");
    var SeatbeltOTAClosure = document.getElementById("SeatbeltOTAClosure");
    var SmokingOTAClosure = document.getElementById("SmokingOTAClosure");
    var TailgatingOTAClosure = document.getElementById("HMWOTAClosure");
    var UFCWOTAClosure = document.getElementById("UFCWOTAClosure");
    var AsleepOTABackOff = parseInt(document.getElementById("AsleepOTABackOff").value);
    var DriverDistractedOTABackOff = parseInt(document.getElementById("DriverDistractedOTABackOff").value);
    var DrowsinessOTABackOff = parseInt(document.getElementById("DrowsinessOTABackOff").value);
    var FCWOTABackOff = parseInt(document.getElementById("FCWOTABackOff").value);
    var LDWOTABackOff = parseInt(document.getElementById("LDWOTABackOff").value);
    //var LightDrowsinessOTABackOff = parseInt(document.getElementById("LightDrowsinessOTABackOff").value);
    var PCWOTABackOff = parseInt(document.getElementById("PCWOTABackOff").value);
    var PhoneUseOTABackOff = parseInt(document.getElementById("PhoneUseOTABackOff").value);
    var SeatbeltOTABackOff = parseInt(document.getElementById("SeatbeltOTABackOff").value);
    var SmokingOTABackOff = parseInt(document.getElementById("SmokingOTABackOff").value);
    var TailgatingOTABackOff = parseInt(document.getElementById("HMWOTABackOff").value);
    var UFCWOTABackOff = parseInt(document.getElementById("UFCWOTABackOff").value);
    var CalibrationTimeout = parseInt(document.getElementById("CalibrationTimeout").value);
    var IGNOffInterval = parseInt(document.getElementById("IGNOffInterval").value);
    var IGNOnInterval = parseInt(document.getElementById("IGNOnInterval").value);
    var TimeToWaitGPSFix = parseInt(document.getElementById("TimeToWaitGPSFix").value);
    var DistractionTurnGraceDuration = parseFloat(document.getElementById("DistractionTurnGraceDuration").value).toFixed(1);
    var TrackingGraceTimer = parseInt(document.getElementById("TrackingGraceTimer").value);
    var DriverChangeMinDuration = parseFloat(document.getElementById("DriverChangeMinDuration").value).toFixed(1);
    var SeatbeltAlertTime = parseFloat(document.getElementById("SeatbeltAlertTime").value).toFixed(1);
    var SleepDuration = parseFloat(document.getElementById("SleepDuration").value).toFixed(1);
    var EnableImagesIdDB = document.getElementById("EnableImagesIdDB").value;
    var videoOverlay = document.getElementById("videoOverlay").value;
    var timeOffset = parseInt(document.getElementById("timeOffset").value);
    var timeSource = document.getElementById("timeSource").value;
    var GSensorWakeThreshold = parseInt(document.getElementById("GsensorWakeThreshold").value);
    var OTAupdateEnable = document.getElementById("OTAUpdateEnable").value;
    var GPSFixLossOrRecoveryTime = parseFloat(document.getElementById("GPSFixLossOrRecovery").value).toFixed(1);
    var MaxHeadingAngleForEvents = parseInt(document.getElementById("MaxHeadingAngleForEvents").value);
    var IGNOffFilter = parseInt(document.getElementById("IGNOffFilter").value);
    var IGNOnFilter = parseInt(document.getElementById("IGNOnFilter").value);
    var TripPathEnable = document.getElementById("TripPathEnable").value;
    var TripPathInhibitHeartbeat = document.getElementById("TripPathInhibitHeartbeat").value;
    var TripPathDistance = parseInt(document.getElementById("TripPathDistance").value);
    var TripPathTime = parseInt(document.getElementById("TripPathTime").value);
    var TripPathHeading = parseInt(document.getElementById("TripPathHeading").value);
    var WiFiTO = parseInt(document.getElementById("WiFiTO").value);
    var SleepModeTO = parseInt(document.getElementById("SleepModeTO").value);
    var DriverDisappearTimeThreshold = parseFloat(document.getElementById("DriverDisappearTimeThreshold").value).toFixed(1);
    var InhibitSeatbeltAlertsOnStop = document.getElementById("InhibitSeatbeltOnStop").value;
    
    //RS232
    var Baudrate = parseInt(document.getElementById("Baudrate").value);
    var Databits = parseInt(document.getElementById("Databits").value);
    var Parity = document.getElementById("Parity").value;
    var Stopbits = parseInt(document.getElementById("Stopbits").value)
    var data2send = document.getElementById("Datatosend").value;

    //RS232 Duplicate Messages
    var DuplicateMsgOverRS232 = document.getElementById("DuplicateMsgOverRS232").value;
    
    //Server
    var ServerAddress = document.getElementById("ServerAddress").value;
    var ServerPassword = document.getElementById("ServerPassword").value;
    var ServerPort = parseInt(document.getElementById("Port").value);
    var Server_check = document.getElementById("MW_check");
    
    // Server value update
    if(!Server_check.checked){
        ServerAddress = "fs10.cipia.cloud";
        ServerPassword = "fs1Manager@2021";
        ServerPort = 1883;
    }

    //WiFi Networks
    var WiFi_Network01_check = document.getElementById("WiFi_Network01_check");
    var WiFi_Network01_SSID = document.getElementById("WiFi_Network01_SSID").value;
    var WiFi_Network01_Password = document.getElementById("WiFi_Network01_Password").value;
    var WiFi_Network02_check = document.getElementById("WiFi_Network02_check");
    var WiFi_Network02_SSID = document.getElementById("WiFi_Network02_SSID").value;
    var WiFi_Network02_Password = document.getElementById("WiFi_Network02_Password").value;
    var WiFi_Network03_check = document.getElementById("WiFi_Network03_check");
    var WiFi_Network03_SSID = document.getElementById("WiFi_Network03_SSID").value;
    var WiFi_Network03_Password = document.getElementById("WiFi_Network03_Password").value;
    var WiFi_Network04_check = document.getElementById("WiFi_Network04_check");
    var WiFi_Network04_SSID = document.getElementById("WiFi_Network04_SSID").value;
    var WiFi_Network04_Password = document.getElementById("WiFi_Network04_Password").value;
    var WiFi_Network05_check = document.getElementById("WiFi_Network05_check");
    var WiFi_Network05_SSID = document.getElementById("WiFi_Network05_SSID").value;
    var WiFi_Network05_Password = document.getElementById("WiFi_Network05_Password").value;
    var WiFi_Network06_check = document.getElementById("WiFi_Network06_check");
    var WiFi_Network06_SSID = document.getElementById("WiFi_Network06_SSID").value;
    var WiFi_Network06_Password = document.getElementById("WiFi_Network06_Password").value;
    var WiFi_Network07_check = document.getElementById("WiFi_Network07_check");
    var WiFi_Network07_SSID = document.getElementById("WiFi_Network07_SSID").value;
    var WiFi_Network07_Password = document.getElementById("WiFi_Network07_Password").value;
    var WiFi_Network08_check = document.getElementById("WiFi_Network08_check");
    var WiFi_Network08_SSID = document.getElementById("WiFi_Network08_SSID").value;
    var WiFi_Network08_Password = document.getElementById("WiFi_Network08_Password").value;
    var WiFi_Network09_check = document.getElementById("WiFi_Network09_check");
    var WiFi_Network09_SSID = document.getElementById("WiFi_Network09_SSID").value;
    var WiFi_Network09_Password = document.getElementById("WiFi_Network09_Password").value;
    var WiFi_Network10_check = document.getElementById("WiFi_Network10_check");
    var WiFi_Network10_SSID = document.getElementById("WiFi_Network10_SSID").value;
    var WiFi_Network10_Password = document.getElementById("WiFi_Network10_Password").value;

    var String_Overlay = document.getElementById("String_Overlay").value;
    var Unit_ID_Overlay = document.getElementById("Unit_ID_Overlay").value;

    var VideoOverlay = [];
    if (String_Overlay.trim() !== '' && Unit_ID_Overlay === "true") {
        VideoOverlay = {
            "Enable": (videoOverlay === "true"),
            "OverlayText": [
                "Unit ID: {unitid}",
                String_Overlay
            ],
            "TimeOffset": timeOffset,
            "TimeSource": timeSource
        }
    }
    else if(String_Overlay.trim() !== '' && Unit_ID_Overlay === "false"){
        VideoOverlay = {
            "Enable": (videoOverlay === "true"),
            "OverlayText": [
                String_Overlay
            ],
            "TimeOffset": timeOffset,
            "TimeSource": timeSource
        }
    } else if(String_Overlay.trim() === '' && Unit_ID_Overlay === "true") {
        VideoOverlay = {
            "Enable": (videoOverlay === "true"),
            "OverlayText": [
                "Unit ID: {unitid}"
            ],
            "TimeOffset": timeOffset,
            "TimeSource": timeSource
        }
    } else {
        VideoOverlay = {
            "Enable": (videoOverlay === "true"),
            "TimeOffset": timeOffset,
            "TimeSource": timeSource
        }
    }


    var JSON_Networks = [];
    if (WiFi_Network01_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network01_SSID,
            "Password": WiFi_Network01_Password
        });
    }
    else{
        JSON_Networks.push({
            "SSID": "",
            "Password": ""
        });
    }
    if (WiFi_Network02_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network02_SSID,
            "Password": WiFi_Network02_Password
        });
    }
    if (WiFi_Network03_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network03_SSID,
            "Password": WiFi_Network03_Password
        });
    }
    if (WiFi_Network04_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network04_SSID,
            "Password": WiFi_Network04_Password
        });
    }
    if (WiFi_Network05_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network05_SSID,
            "Password": WiFi_Network05_Password
        });
    }
    if (WiFi_Network06_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network06_SSID,
            "Password": WiFi_Network06_Password
        });
    }
    if (WiFi_Network07_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network07_SSID,
            "Password": WiFi_Network07_Password
        });
    }
    if (WiFi_Network08_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network08_SSID,
            "Password": WiFi_Network08_Password
        });
    }
    if (WiFi_Network09_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network09_SSID,
            "Password": WiFi_Network09_Password
        });
    }
    if (WiFi_Network10_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network10_SSID,
            "Password": WiFi_Network10_Password
        });
    }
   
    // JSON Generator
    var json_A = {
        "APNSettings": {
            "APN": APN_apn,
            "User": APN_user,
            "Password": APN_pass
        },
        "Acc3DDriveTimeFilter": Acc3DDriveTimeFilter,
        "Acc3DStopTimeFilter": Acc3DStopTimeFilter,
        "AdasConfig": {
            "ActiveLaneDepartureType": {
                /*
                "DashedLaneCrossing": (DashedLineCrossing === "true"),
                "SolidLaneCrossing": (SolidLineCrossing === "true"),
                "SpeedThreshold": ActiveLaneSpeedThreshold
                */
                "DashedLaneCrossing": false,
                "SolidLaneCrossing": false,
                "SpeedThreshold": 20
            },
            "AdasCamera": {
                /*
                "InstallationHeight": InstallationHeight,
                "OffsetFromCenter": OffsetFromCenter
                */
                "InstallationHeight": 150,
                "OffsetFromCenter": 0
            },
            "FCW": {
                /*
                "FCWlevel": FCWWarningRange,
                "SpeedThreshold": FCWSpeedThreshold
                */
                "FCWlevel": 2,
                "SpeedThreshold": 20
            },
            "Tailgating": {
                /*
                "HMWSpeedThreshold": HMWSpeedThreshold,
                "TimeToTriggerTailgating": TimeToTriggerTailgating,
                "TtcWarningRange": TtcWarningRange,
                "TtcEmergencyRange": TtcEmergencyRange
                */
                "HMWSpeedThreshold": 35,
                "TimeToTriggerTailgating": 5,
                "TtcWarningRange": "2.0",
                "TtcEmergencyRange": "0.8"
            },
            "Type": DeviceTypeRadio
        },
        "BLESettings": {
            "Mode": true,
            "PasswordKey": "123456",
            "SelfName": "FS-BLE"
        },   
        "CommChannelState": CommChannelState,
        "CommChannelSettings": {
            "Alert": Alerts,
            "Debug": Debug,
            "FOTA": FOTA,
            "Image": Image_Comm,
            "Video": Video_Comm 
        },
        "DuplicateMsgOverRS232": (DuplicateMsgOverRS232 === "true"),
        "CommunicationWatchdog": {
            "KeepAliveInSec": KeepAliveInSec,
            "ModemResetHWTimeInMin": ModemResetHWTimeInMin,
            "ModemResetSignalTimeInMin": ModemResetSignalTimeInMin,
            "RepeatCycleUntilCommRecovery": (RepeatCycleUntilCommRecovery === "true"),
            "SelfPowerRecycleTimeInMin": SelfPowerRecycleTimeInMin,
            "SocketResetTimeInMin": SocketResetTimeInMin
        },
        "ConfigurationName": "Cipia-FS10-Dummy_Configurator",
        "ContRecording": ContRecording,
        "DriverAsleepEventSpeakerVolume": VolumeforAsleep,
        "DriverDisappearTimeThreshold": DriverDisappearTimeThreshold,
        "DriverFeedbackOptions": {
            "Beeps": (DriverFeedbackBeeps === "true"),
            "LED": (DriverFeedbackLED === "true"),
            "Voice": (DriverFeedbackVoice === "true")
        },
        "EventVideoLen": {
            "After": timeAfterEvent,
            "Before": timeBeforeEvent
        },
        "EventsSettings": {
            "3DAccelerometerCalibrationCompleted": {
                "Activation": (AccelerometerCalibrationCompleted_Activation === "true"),
                "FeedbackAudio": (AccelerometerCalibrationCompleted_FeedbackAudio === "true"),
                "FeedbackOutput": AccelerometerCalibrationCompleted_FeedbackOutput,
                "FeedbackSpeech": (AccelerometerCalibrationCompleted_FeedbackSpeech === "true"),
                "FeedbackVisual": (AccelerometerCalibrationCompleted_FeedbackVisual === "true"),
                "ReportEvent": (AccelerometerCalibrationCompleted_ReportEvent === "true"),
                "ReportImage": AccelerometerCalibrationCompleted_ReportImage,
                "ReportFootage": AccelerometerCalibrationCompleted_ReportFootage
            },
            "ApplicationError": {
                "Activation": (ApplicationError_Activation === "true"),
                "FeedbackAudio": (ApplicationError_FeedbackAudio === "true"),
                "FeedbackOutput": ApplicationError_FeedbackOutput,
                "FeedbackSpeech": (ApplicationError_FeedbackSpeech === "true"),
                "FeedbackVisual": (ApplicationError_FeedbackVisual === "true"),
                "ReportEvent": (ApplicationError_ReportEvent === "true"),
                "ReportImage": ApplicationError_ReportImage,
                "ReportFootage": ApplicationError_ReportFootage
            },
            "CameraCalibrationCompleted": {
                "Activation": (CameraCalibrationCompleted_Activation === "true"),
                "FeedbackAudio": (CameraCalibrationCompleted_FeedbackAudio === "true"),
                "FeedbackOutput": CameraCalibrationCompleted_FeedbackOutput,
                "FeedbackSpeech": (CameraCalibrationCompleted_FeedbackSpeech === "true"),
                "FeedbackVisual": (CameraCalibrationCompleted_FeedbackVisual === "true"),
                "ReportEvent": (CameraCalibrationCompleted_ReportEvent === "true"),
                "ReportImage": CameraCalibrationCompleted_ReportImage,
                "ReportFootage": CameraCalibrationCompleted_ReportFootage
            },
            "CameraCalibrationFailed": {
                "Activation": (CameraCalibrationFailed_Activation === "true"),
                "FeedbackAudio": (CameraCalibrationFailed_FeedbackAudio === "true"),
                "FeedbackOutput": CameraCalibrationFailed_FeedbackOutput,
                "FeedbackSpeech": (CameraCalibrationFailed_FeedbackSpeech === "true"),
                "FeedbackVisual": (CameraCalibrationFailed_FeedbackVisual === "true"),
                "ReportEvent": (CameraCalibrationFailed_ReportEvent === "true"),
                "ReportImage": CameraCalibrationFailed_ReportImage,
                "ReportFootage": CameraCalibrationFailed_ReportFootage
            },
            "CameraError": {
                "Activation": (CameraError_Activation === "true"),
                "FeedbackAudio": (CameraError_FeedbackAudio === "true"),
                "FeedbackOutput": CameraError_FeedbackOutput,
                "FeedbackSpeech": (CameraError_FeedbackSpeech === "true"),
                "FeedbackVisual": (CameraError_FeedbackVisual === "true"),
                "ReportEvent": (CameraError_ReportEvent === "true"),
                "ReportImage": CameraError_ReportImage,
                "ReportFootage": CameraError_ReportFootage
            },
            "TripPath": {
                "Activation": (TripPath_Activation === "true"),
                "FeedbackAudio": false,
                "FeedbackOutput": "None",
                "FeedbackSpeech": false,
                "FeedbackVisual": false,
                "ReportEvent": (TripPath_ReportEvent === "true"),
                "ReportImage": "None",
                "ReportFootage": "None"
            },
            "DriverAsleep": {
                "Activation": (DriverAsleep_Activation === "true"),
                "FeedbackAudio": (DriverAsleep_FeedbackAudio === "true"),
                "FeedbackOutput": DriverAsleep_FeedbackOutput,
                "FeedbackSpeech": (DriverAsleep_FeedbackSpeech === "true"),
                "FeedbackVisual": (DriverAsleep_FeedbackVisual === "true"),
                "ReportEvent": (DriverAsleep_ReportEvent === "true"),
                "ReportImage": DriverAsleep_ReportImage,
                "ReportFootage": DriverAsleep_ReportFootage
            },
            "DriverChange": {
                "Activation": (DriverChange_Activation === "true"),
                "FeedbackAudio": (DriverChange_FeedbackAudio === "true"),
                "FeedbackOutput": DriverChange_FeedbackOutput,
                "FeedbackSpeech": (DriverChange_FeedbackSpeech === "true"),
                "FeedbackVisual": (DriverChange_FeedbackVisual === "true"),
                "ReportEvent": (DriverChange_ReportEvent === "true"),
                "ReportImage": DriverChange_ReportImage,
                "ReportFootage": DriverChange_ReportFootage
            },
            "DriverDisappeared": {
                "Activation": (DriverDisappeared_Activation === "true"),
                "FeedbackAudio": (DriverDisappeared_FeedbackAudio === "true"),
                "FeedbackOutput": DriverDisappeared_FeedbackOutput,
                "FeedbackSpeech": (DriverDisappeared_FeedbackSpeech === "true"),
                "FeedbackVisual": (DriverDisappeared_FeedbackVisual === "true"),
                "ReportEvent": (DriverDisappeared_ReportEvent === "true"),
                "ReportImage": DriverDisappeared_ReportImage,
                "ReportFootage": DriverDisappeared_ReportFootage
            },
            "DriverDistracted": {
                "Activation": (DriverDistracted_Activation === "true"),
                "FeedbackAudio": (DriverDistracted_FeedbackAudio === "true"),
                "FeedbackOutput": DriverDistracted_FeedbackOutput,
                "FeedbackSpeech": (DriverDistracted_FeedbackSpeech === "true"),
                "FeedbackVisual": (DriverDistracted_FeedbackVisual === "true"),
                "ReportEvent": (DriverDistracted_ReportEvent === "true"),
                "ReportImage": DriverDistracted_ReportImage,
                "ReportFootage": DriverDistracted_ReportFootage
            },
            "DriverIDUpdated": {
                "Activation": (DriverIDUpdated_Activation === "true"),
                "FeedbackAudio": (DriverIDUpdated_FeedbackAudio === "true"),
                "FeedbackOutput": DriverIDUpdated_FeedbackOutput,
                "FeedbackSpeech": (DriverIDUpdated_FeedbackSpeech === "true"),
                "FeedbackVisual": (DriverIDUpdated_FeedbackVisual === "true"),
                "ReportEvent": (DriverIDUpdated_ReportEvent === "true"),
                "ReportImage": DriverIDUpdated_ReportImage,
                "ReportFootage": DriverIDUpdated_ReportFootage
            },
            "DriverIdentified": {
                "Activation": (DriverIdentified_Activation === "true"),
                "FeedbackAudio": (DriverIdentified_FeedbackAudio === "true"),
                "FeedbackOutput": DriverIdentified_FeedbackOutput,
                "FeedbackSpeech": (DriverIdentified_FeedbackSpeech === "true"),
                "FeedbackVisual": (DriverIdentified_FeedbackVisual === "true"),
                "ReportEvent": (DriverIdentified_ReportEvent === "true"),
                "ReportImage": DriverIdentified_ReportImage,
                "ReportFootage": DriverIdentified_ReportFootage
            },
            "Drowsiness": {
                "Activation": (Drowsiness_Activation === "true"),
                "FeedbackAudio": (Drowsiness_FeedbackAudio === "true"),
                "FeedbackOutput": Drowsiness_FeedbackOutput,
                "FeedbackSpeech": (Drowsiness_FeedbackSpeech === "true"),
                "FeedbackVisual": (Drowsiness_FeedbackVisual === "true"),
                "ReportEvent": (Drowsiness_ReportEvent === "true"),
                "ReportImage": Drowsiness_ReportImage,
                "ReportFootage": Drowsiness_ReportFootage
            },
            "EnteredSleepMode": {
                "Activation": (EnteredSleepMode_Activation === "true"),
                "FeedbackAudio": (EnteredSleepMode_FeedbackAudio === "true"),
                "FeedbackOutput": EnteredSleepMode_FeedbackOutput,
                "FeedbackSpeech": (EnteredSleepMode_FeedbackSpeech === "true"),
                "FeedbackVisual": (EnteredSleepMode_FeedbackVisual === "true"),
                "ReportEvent": (EnteredSleepMode_ReportEvent === "true"),
                "ReportImage": EnteredSleepMode_ReportImage,
                "ReportFootage": EnteredSleepMode_ReportFootage
            },
            "ExternalEventTriggering": {
                "Activation": (ExternalEventTriggering_Activation === "true"),
                "FeedbackAudio": (ExternalEventTriggering_FeedbackAudio === "true"),
                "FeedbackOutput": ExternalEventTriggering_FeedbackOutput,
                "FeedbackSpeech": (ExternalEventTriggering_FeedbackSpeech === "true"),
                "FeedbackVisual": (ExternalEventTriggering_FeedbackVisual === "true"),
                "ReportEvent": (ExternalEventTriggering_ReportEvent === "true"),
                "ReportImage": ExternalEventTriggering_ReportImage,
                "ReportFootage": ExternalEventTriggering_ReportFootage
            },
            "ForwardCollisionWarning": {
                "Activation": (FCW_Activation === "true"),
                "FeedbackAudio": (FCW_FeedbackAudio === "true"),
                "FeedbackOutput": FCW_FeedbackOutput,
                "FeedbackSpeech": (FCW_FeedbackSpeech === "true"),
                "FeedbackVisual": (FCW_FeedbackVisual === "true"),
                "ReportEvent": (FCW_ReportEvent === "true"),
                "ReportImage": FCW_ReportImage,
                "ReportFootage": FCW_ReportFootage
            },
            "FwUpdateCompleted": {
                "Activation": (FwUpdateCompleted_Activation === "true"),
                "FeedbackAudio": (FwUpdateCompleted_FeedbackAudio === "true"),
                "FeedbackOutput": FwUpdateCompleted_FeedbackOutput,
                "FeedbackSpeech": (FwUpdateCompleted_FeedbackSpeech === "true"),
                "FeedbackVisual": (FwUpdateCompleted_FeedbackVisual === "true"),
                "ReportEvent": (FwUpdateCompleted_ReportEvent === "true"),
                "ReportImage": FwUpdateCompleted_ReportImage,
                "ReportFootage": FwUpdateCompleted_ReportFootage
            }, 
            "FwUpdateFailed": {
                "Activation": (FwUpdateFailed_Activation === "true"),
                "FeedbackAudio": (FwUpdateFailed_FeedbackAudio === "true"),
                "FeedbackOutput": FwUpdateFailed_FeedbackOutput,
                "FeedbackSpeech": (FwUpdateFailed_FeedbackSpeech === "true"),
                "FeedbackVisual": (FwUpdateFailed_FeedbackVisual === "true"),
                "ReportEvent": (FwUpdateFailed_ReportEvent === "true"),
                "ReportImage": FwUpdateFailed_ReportImage,
                "ReportFootage": FwUpdateFailed_ReportFootage
            },
            "FwUpdateStarted": {
                "Activation": (FwUpdateStarted_Activation === "true"),
                "FeedbackAudio": (FwUpdateStarted_FeedbackAudio === "true"),
                "FeedbackOutput": FwUpdateStarted_FeedbackOutput,
                "FeedbackSpeech": (FwUpdateStarted_FeedbackSpeech === "true"),
                "FeedbackVisual": (FwUpdateStarted_FeedbackVisual === "true"),
                "ReportEvent": (FwUpdateStarted_ReportEvent === "true"),
                "ReportImage": FwUpdateStarted_ReportImage,
                "ReportFootage": FwUpdateStarted_ReportFootage
            },
            "GpsStatusUpdate": {
                "Activation": (GPSstatusUpdate_Activation === "true"),
                "FeedbackAudio": (GPSstatusUpdate_FeedbackAudio === "true"),
                "FeedbackOutput": GPSstatusUpdate_FeedbackOutput,
                "FeedbackSpeech": (GPSstatusUpdate_FeedbackSpeech === "true"),
                "FeedbackVisual": (GPSstatusUpdate_FeedbackVisual === "true"),
                "ReportEvent": (GPSstatusUpdate_ReportEvent === "true"),
                "ReportImage": GPSstatusUpdate_ReportImage,
                "ReportFootage": GPSstatusUpdate_ReportFootage
            },
            "Heartbeat": {
                "Activation": (Heartbeat_Activation === "true"),
                "FeedbackAudio": (Heartbeat_FeedbackAudio === "true"),
                "FeedbackOutput": Heartbeat_FeedbackOutput,
                "FeedbackSpeech": (Heartbeat_FeedbackSpeech === "true"),
                "FeedbackVisual": (Heartbeat_FeedbackVisual === "true"),
                "ReportEvent": (Heartbeat_ReportEvent === "true"),
                "ReportImage": Heartbeat_ReportImage,
                "ReportFootage": Heartbeat_ReportFootage
            },
            "IgnitionOff": {
                "Activation": (IgnitionOFF_Activation === "true"),
                "FeedbackAudio": (IgnitionOFF_FeedbackAudio === "true"),
                "FeedbackOutput": IgnitionOFF_FeedbackOutput,
                "FeedbackSpeech": (IgnitionOFF_FeedbackSpeech === "true"),
                "FeedbackVisual": (IgnitionOFF_FeedbackVisual === "true"),
                "ReportEvent": (IgnitionOFF_ReportEvent === "true"),
                "ReportImage": IgnitionOFF_ReportImage,
                "ReportFootage": IgnitionOFF_ReportFootage
            },
            "IgnitionOn": {
                "Activation": (IgnitionON_Activation === "true"),
                "FeedbackAudio": (IgnitionON_FeedbackAudio === "true"),
                "FeedbackOutput": IgnitionON_FeedbackOutput,
                "FeedbackSpeech": (IgnitionON_FeedbackSpeech === "true"),
                "FeedbackVisual": (IgnitionON_FeedbackVisual === "true"),
                "ReportEvent": (IgnitionON_ReportEvent === "true"),
                "ReportImage": IgnitionON_ReportImage,
                "ReportFootage": IgnitionON_ReportFootage
            },
            "LaneDepartureWarning": {
                "Activation": (LDW_Activation === "true"),
                "FeedbackAudio": (LDW_FeedbackAudio === "true"),
                "FeedbackOutput": LDW_FeedbackOutput,
                "FeedbackSpeech": (LDW_FeedbackSpeech === "true"),
                "FeedbackVisual": (LDW_FeedbackVisual === "true"),
                "ReportEvent": (LDW_ReportEvent === "true"),
                "ReportImage": LDW_ReportImage,
                "ReportFootage": LDW_ReportFootage
            },
            "LightDrowsiness": {
                /*
                "Activation": (LightDrowsinessActivation === "true"),
                "FeedbackAudio": (LightDrowsinessFeedbackAudio === "true"),
                "FeedbackOutput": LightDrowsinessFeedbackOutput,
                "FeedbackSpeech": (LightDrowsinessFeedbackSpeech === "true"),
                "FeedbackVisual": (LightDrowsinessFeedbackVisual === "true"),
                "ReportEvent": (LightDrowsinessReportEvent === "true"),
                "ReportImage": LightDrowsinessReportImage,
                "ReportFootage": LightDrowsinessReportFootage
                */
                "Activation": false,
                "FeedbackAudio": false,
                "FeedbackOutput": "None",
                "FeedbackSpeech": false,
                "FeedbackVisual": false,
                "ReportEvent": false,
                "ReportImage": "None",
                "ReportFootage": "None"
            },
            "MCULOG": {
                "Activation": (MCULOG_Activation === "true"),
                "FeedbackAudio": (MCULOG_FeedbackAudio === "true"),
                "FeedbackOutput": MCULOG_FeedbackOutput,
                "FeedbackSpeech": (MCULOG_FeedbackSpeech === "true"),
                "FeedbackVisual": (MCULOG_FeedbackVisual === "true"),
                "ReportEvent": (MCULOG_ReportEvent === "true"),
                "ReportImage": MCULOG_ReportImage,
                "ReportFootage": MCULOG_ReportFootage
            },
            "MovementStarted": {
                "Activation": (MovementStarted_Activation === "true"),
                "FeedbackAudio": (MovementStarted_FeedbackAudio === "true"),
                "FeedbackOutput": MovementStarted_FeedbackOutput,
                "FeedbackSpeech": (MovementStarted_FeedbackSpeech === "true"),
                "FeedbackVisual": (MovementStarted_FeedbackVisual === "true"),
                "ReportEvent": (MovementStarted_ReportEvent === "true"),
                "ReportImage": MovementStarted_ReportImage,
                "ReportFootage": MovementStarted_ReportFootage
            },
            "MovementStop": {
                "Activation": (MovementStopped_Activation === "true"),
                "FeedbackAudio": (MovementStopped_FeedbackAudio === "true"),
                "FeedbackOutput": MovementStopped_FeedbackOutput,
                "FeedbackSpeech": (MovementStopped_FeedbackSpeech === "true"),
                "FeedbackVisual": (MovementStopped_FeedbackVisual === "true"),
                "ReportEvent": (MovementStopped_ReportEvent === "true"),
                "ReportImage": MovementStopped_ReportImage,
                "ReportFootage": MovementStopped_ReportFootage
            },
            "OverSpeeding": {
                /*
                "Activation": (Overspeeding_Activation === "true"),
                "FeedbackAudio": (Overspeeding_FeedbackAudio === "true"),
                "FeedbackOutput": Overspeeding_FeedbackOutput,
                "FeedbackSpeech": (Overspeeding_FeedbackSpeech === "true"),
                "FeedbackVisual": (Overspeeding_FeedbackVisual === "true"),
                "ReportEvent": (Overspeeding_ReportEvent === "true"),
                "ReportImage": Overspeeding_ReportImage,
                "ReportFootage": Overspeeding_ReportFootage
                */
                "Activation": false,
                "FeedbackAudio": false,
                "FeedbackOutput": "None",
                "FeedbackSpeech": false,
                "FeedbackVisual": false,
                "ReportEvent": false,
                "ReportImage": "None",
                "ReportFootage": "None"
            },
            "PedestrianCollisionWarning": {
                "Activation": (PCW_Activation === "true"),
                "FeedbackAudio": (PCW_FeedbackAudio === "true"),
                "FeedbackOutput": PCW_FeedbackOutput,
                "FeedbackSpeech": (PCW_FeedbackSpeech === "true"),
                "FeedbackVisual": (PCW_FeedbackVisual === "true"),
                "ReportEvent": (PCW_ReportEvent === "true"),
                "ReportImage": PCW_ReportImage,
                "ReportFootage": PCW_ReportFootage
            },
            "PhoneUse": {
                "Activation": (PhoneUse_Activation === "true"),
                "FeedbackAudio": (PhoneUse_FeedbackAudio === "true"),
                "FeedbackOutput": PhoneUse_FeedbackOutput,
                "FeedbackSpeech": (PhoneUse_FeedbackSpeech === "true"),
                "FeedbackVisual": (PhoneUse_FeedbackVisual === "true"),
                "ReportEvent": (PhoneUse_ReportEvent === "true"),
                "ReportImage": PhoneUse_ReportImage,
                "ReportFootage": PhoneUse_ReportFootage
            },
            "RunningRedLight": {
                /*
                "Activation": (RedLight_Activation === "true"),
                "FeedbackAudio": (RedLight_FeedbackAudio === "true"),
                "FeedbackOutput": RedLight_FeedbackOutput,
                "FeedbackSpeech": (RedLight_FeedbackSpeech === "true"),
                "FeedbackVisual": (RedLight_FeedbackVisual === "true"),
                "ReportEvent": (RedLight_ReportEvent === "true"),
                "ReportImage": RedLight_ReportImage,
                "ReportFootage": RedLight_ReportFootage
                */
                "Activation": false,
                "FeedbackAudio": false,
                "FeedbackOutput": "None",
                "FeedbackSpeech": false,
                "FeedbackVisual": false,
                "ReportEvent": false,
                "ReportImage": "None",
                "ReportFootage": "None"
            },
            "Seatbelt": {
                "Activation": (Seatbelt_Activation === "true"),
                "FeedbackAudio": (Seatbelt_FeedbackAudio === "true"),
                "FeedbackOutput": Seatbelt_FeedbackOutput,
                "FeedbackSpeech": (Seatbelt_FeedbackSpeech === "true"),
                "FeedbackVisual": (Seatbelt_FeedbackVisual === "true"),
                "ReportEvent": (Seatbelt_ReportEvent === "true"),
                "ReportImage": Seatbelt_ReportImage,
                "ReportFootage": Seatbelt_ReportFootage
            },
            "Smoking": {
                "Activation": (Smoking_Activation === "true"),
                "FeedbackAudio": (Smoking_FeedbackAudio === "true"),
                "FeedbackOutput": Smoking_FeedbackOutput,
                "FeedbackSpeech": (Smoking_FeedbackSpeech === "true"),
                "FeedbackVisual": (Smoking_FeedbackVisual === "true"),
                "ReportEvent": (Smoking_ReportEvent === "true"),
                "ReportImage": Smoking_ReportImage,
                "ReportFootage": Smoking_ReportFootage
            },
            "StopDisobeyed": {
                /*
                "Activation": (StopDisobeyed_Activation === "true"),
                "FeedbackAudio": (StopDisobeyed_FeedbackAudio === "true"),
                "FeedbackOutput": StopDisobeyed_FeedbackOutput,
                "FeedbackSpeech": (StopDisobeyed_FeedbackSpeech === "true"),
                "FeedbackVisual": (StopDisobeyed_FeedbackVisual === "true"),
                "ReportEvent": (StopDisobeyed_ReportEvent === "true"),
                "ReportImage": StopDisobeyed_ReportImage,
                "ReportFootage": StopDisobeyed_ReportFootage
                */
                "Activation": false,
                "FeedbackAudio": false,
                "FeedbackOutput": "None",
                "FeedbackSpeech": false,
                "FeedbackVisual": false,
                "ReportEvent": false,
                "ReportImage": "None",
                "ReportFootage": "None"
            },
            "SystemBoot": {
                "Activation": (SystemBoot_Activation === "true"),
                "FeedbackAudio": (SystemBoot_FeedbackAudio === "true"),
                "FeedbackOutput": SystemBoot_FeedbackOutput,
                "FeedbackSpeech": (SystemBoot_FeedbackSpeech === "true"),
                "FeedbackVisual": (SystemBoot_FeedbackVisual === "true"),
                "ReportEvent": (SystemBoot_ReportEvent === "true"),
                "ReportImage": SystemBoot_ReportImage,
                "ReportFootage": SystemBoot_ReportFootage
            },
            "SystemBootFailure": {
                "Activation": (SystemBootFailure_Activation === "true"),
                "FeedbackAudio": (SystemBootFailure_FeedbackAudio === "true"),
                "FeedbackOutput": SystemBootFailure_FeedbackOutput,
                "FeedbackSpeech": (SystemBootFailure_FeedbackSpeech === "true"),
                "FeedbackVisual": (SystemBootFailure_FeedbackVisual === "true"),
                "ReportEvent": (SystemBootFailure_ReportEvent === "true"),
                "ReportImage": SystemBootFailure_ReportImage,
                "ReportFootage": SystemBootFailure_ReportFootage
            },
            "SystemError": {
                "Activation": (SystemError_Activation === "true"),
                "FeedbackAudio": (SystemError_FeedbackAudio === "true"),
                "FeedbackOutput": SystemError_FeedbackOutput,
                "FeedbackSpeech": (SystemError_FeedbackSpeech === "true"),
                "FeedbackVisual": (SystemError_FeedbackVisual === "true"),
                "ReportEvent": (SystemError_ReportEvent === "true"),
                "ReportImage": SystemError_ReportImage,
                "ReportFootage": SystemError_ReportFootage
            },
            "SystemOk": {
                "Activation": (SystemOK_Activation === "true"),
                "FeedbackAudio": (SystemOK_FeedbackAudio === "true"),
                "FeedbackOutput": SystemOK_FeedbackOutput,
                "FeedbackSpeech": (SystemOK_FeedbackSpeech === "true"),
                "FeedbackVisual": (SystemOK_FeedbackVisual === "true"),
                "ReportEvent": (SystemOK_ReportEvent === "true"),
                "ReportImage": SystemOK_ReportImage,
                "ReportFootage": SystemOK_ReportFootage
            },
            "SystemReset": {
                "Activation": (SystemReset_Activation === "true"),
                "FeedbackAudio": (SystemReset_FeedbackAudio === "true"),
                "FeedbackOutput": SystemReset_FeedbackOutput,
                "FeedbackSpeech": (SystemReset_FeedbackSpeech === "true"),
                "FeedbackVisual": (SystemReset_FeedbackVisual === "true"),
                "ReportEvent": (SystemReset_ReportEvent === "true"),
                "ReportImage": SystemReset_ReportImage,
                "ReportFootage": SystemReset_ReportFootage
            },
            "Tailgating(HMW)": {
                "Activation": (HMW_Activation === "true"),
                "FeedbackAudio": (HMW_FeedbackAudio === "true"),
                "FeedbackOutput": HMW_FeedbackOutput,
                "FeedbackSpeech": (HMW_FeedbackSpeech === "true"),
                "FeedbackVisual": (HMW_FeedbackVisual === "true"),
                "ReportEvent": (HMW_ReportEvent === "true"),
                "ReportImage": HMW_ReportImage,
                "ReportFootage": HMW_ReportFootage
            },
            "TamperingDetection": {
                "Activation": (TamperingDetection_Activation === "true"),
                "FeedbackAudio": (TamperingDetection_FeedbackAudio === "true"),
                "FeedbackOutput": TamperingDetection_FeedbackOutput,
                "FeedbackSpeech": (TamperingDetection_FeedbackSpeech === "true"),
                "FeedbackVisual": (TamperingDetection_FeedbackVisual === "true"),
                "ReportEvent": (TamperingDetection_ReportEvent === "true"),
                "ReportImage": TamperingDetection_ReportImage,
                "ReportFootage": TamperingDetection_ReportFootage
            },
            "UnidentifiedUnauthDriver": {
                "Activation": (UnidentifiedUnauthDriver_Activation === "true"),
                "FeedbackAudio": (UnidentifiedUnauthDriver_FeedbackAudio === "true"),
                "FeedbackOutput": UnidentifiedUnauthDriver_FeedbackOutput,
                "FeedbackSpeech": (UnidentifiedUnauthDriver_FeedbackSpeech === "true"),
                "FeedbackVisual": (UnidentifiedUnauthDriver_FeedbackVisual === "true"),
                "ReportEvent": (UnidentifiedUnauthDriver_ReportEvent === "true"),
                "ReportImage": UnidentifiedUnauthDriver_ReportImage,
                "ReportFootage": UnidentifiedUnauthDriver_ReportFootage
            },
            "UrbanForwardCollisionWarning": {
                "Activation": (UrbanFCW_Activation === "true"),
                "FeedbackAudio": (UrbanFCW_FeedbackAudio === "true"),
                "FeedbackOutput": UrbanFCW_FeedbackOutput,
                "FeedbackSpeech": (UrbanFCW_FeedbackSpeech === "true"),
                "FeedbackVisual": (UrbanFCW_FeedbackVisual === "true"),
                "ReportEvent": (UrbanFCW_ReportEvent === "true"),
                "ReportImage": UrbanFCW_ReportImage,
                "ReportFootage": UrbanFCW_ReportFootage
            }
        },
        "EventsStorageNumber": EventstoStorage,
        "ExtraParameters": {
            "Calibration": {
                "Timeout": CalibrationTimeout
            },
            "CalibrationReferencePoint": {
                "x": 110,
                "y": 0,
                "z": 10
                //"x": CalibrationReferencePoint_x,
                //"y": CalibrationReferencePoint_y,
                //"z": CalibrationReferencePoint_z
            },
            "CipiaLog": true,
            "DeviceTestDefaultResult": true,
            "DsEngineParams": {
                "PostStartSetParams": {
                    "RoadCenterPitchNeg": RoadCenterPitchNeg,
                    "RoadCenterPitchPos": RoadCenterPitchPos,
                    "RoadCenterYawNeg": RoadCenterYawNeg,
                    "RoadCenterYawPos": RoadCenterYawPos,
                    "DistractionSpeedThreshold": DistractionSpeedThreshold,
                    "DrowsinessSpeedThreshold": DrowsinessSpeedThreshold,
                    "PhoneSpeedThreshold": PhoneSpeedThreshold,
                    "SeatbeltSpeedThreshold": SeatbeltSpeedThreshold,
                    "SmokingSpeedThreshold": SmokingSpeedThreshold,
                    "CameraStatusBackoffTimer": CameraStatusBackoffTimer,
                    "DistractionBackoffTimer": DistractionBackoffTimer,
                    "DrowsinessBackoffTimer": DrowsinessBackoffTimer,
                    "PhoneBackoffTimer": PhoneBackoffTimer,
                    "SeatbeltBackoffTimer": SeatbeltBackoffTimer,
                    "SleepBackoffTimer": SleepBackoffTimer,
                    "SmokingBackoffTimer": SmokingBackoffTimer,
                    "DistractionTurnGraceDuration": DistractionTurnGraceDuration,
                    "DriverChangeMinDuration": DriverChangeMinDuration,
                    "EnableYawnBasedDrowsiness": (EnableYawnBasedDrowsiness === "true"),
                    "NoAoiScore": 165,
                    "WheelAngleThreshold": 6
                },
                "PreStartSetParams": {
                    "EnableImagesIdDB": (EnableImagesIdDB === "true"),
                    "EnableSleepBlockingByDrowsiness": (EnableSleepBlockingByDrowsiness === "true"),
                    "InhibitSeatbeltAlertsOnStop": (InhibitSeatbeltAlertsOnStop === "true"),
                    "LeftHandDrive": (LeftHandDrive === "true"),
                    "SeatbeltAlertTime": SeatbeltAlertTime,
                    "SleepDuration": SleepDuration,
                    "TrackingGraceTimer": TrackingGraceTimer
                }
            },
            "GSensorWakeThreshold": GSensorWakeThreshold,
            "HeartbeatConfig": {
                "IGNOffInterval": IGNOffInterval,
                "IGNOnInterval": IGNOnInterval,
                "TimeToWaitGPSFix": TimeToWaitGPSFix
            },
            "TripPathConfig": {
                "Enable": (TripPathEnable === "true"),
                "Distance": TripPathDistance,
                "Time": TripPathTime,
                "Heading": TripPathHeading,
                "InhibitHeartbeat": (TripPathInhibitHeartbeat === "true")
            },
            "MqttClientAuth": false,
            "OTAClosureEvent": {
                "Asleep": AsleepOTAClosure.checked,
                "DriverDistracted": DriverDistractedOTAClosure.checked,
                "Drowsiness": DrowsinessOTAClosure.checked,
                "FCW": FCWOTAClosure.checked,
                "LDW": LDWOTAClosure.checked,
                "LightDrowsiness": false,
                //"LightDrowsiness": LightDrowsinessOTAClosure.checked,
                "PCW": PCWOTAClosure.checked,
                "PhoneUse": PhoneUseOTAClosure.checked,
                "Seatbelt": SeatbeltOTAClosure.checked,
                "Smoking": SmokingOTAClosure.checked,
                "Tailgating": TailgatingOTAClosure.checked,
                "UFCW": UFCWOTAClosure.checked
            },
            "OTAMessageBackOff": {
                "Asleep": AsleepOTABackOff,
                "DriverDistracted": DriverDistractedOTABackOff,
                "Drowsiness": DrowsinessOTABackOff,
                "FCW": FCWOTABackOff,
                "LDW": LDWOTABackOff,
                "LightDrowsiness": 0,
                //"LightDrowsiness": LightDrowsinessOTABackOff,
                "PCW": PCWOTABackOff,
                "PhoneUse": PhoneUseOTABackOff,
                "Seatbelt": SeatbeltOTABackOff,
                "Smoking": SmokingOTABackOff,
                "Tailgating": TailgatingOTABackOff,
                "UFCW": UFCWOTABackOff
            },
            "OTAupdateEnable": (OTAupdateEnable === "true"),
            "RemoteBluetoothMAC": "00:00:00:00:00:00",
            "WifiCountryCode": "US"
        },
        GPIO,
        "GPInputs": {
            "ActiveLevel": (ActiveLevelGPI === "true"),
            "SpecialFunction": FunctionGPI,
            "StateDuration": StateDurationGPI,
            "VoltageThreshold": VoltageThresholdGPI
        },
        "GPOut": {
            "DutyCycle": DutyCycleGPO,
            "Frequency": FrequencyGPO,
            "Length": LengthGPO,
            "Source": SourceGPO
        },
        "GPSFixLossOrRecoveryTime": GPSFixLossOrRecoveryTime,
        "IGNOffFilter": IGNOffFilter,
        "IGNOnFilter": IGNOnFilter,
        "InstallerAccessCode": "Cipia2021$",
        "MainButtonSettings": {
            "DeviceTurnOnEnable": (DeviceTurnOnEnable === "true"),
            "SelfEventTriggerEnable": (SelfEventTriggerEnable === "true")
        },
        "MaxHeadingAngleForEvents": MaxHeadingAngleForEvents,
        "MicStatus": (micStatus === "true"),
        "MinSpeedMonitorThreshold": MinSpeedMonitor,
        "GPSLossSpeedPersistenceTime":GPSLossSpeedPersistenceTime,
        "Port": ServerPort,
        "RS232Settings": {
            "Baud": Baudrate,
            "DataBits": Databits,
            "Parity": (Parity === "true"),
            "StopBit": Stopbits
        },
        "ResolutionOfUploadedImage": photoResolution,
        "ResolutionOfUploadedVideo": videoResolution,
        "SDCardSettings": {
            "EncryptSDCard": (SDcardEncryption === "true")
        },
        "SIMLOCK": {
            "Active": false,
            "AllowedNetworks": []
        },
    };

    var json_B = {
        "ServerAddress": ServerAddress,
        "ServerPassword": ServerPassword,
        "SleepModeTO": SleepModeTO,
        "SpeakerControl": (VolumeControls === "true"),
        "SpeakerVolume": VolumeforAlerts,
        "SystemLEDActivation": (SystemLEDActivation === "true"),
        "TelematicsDataForwardOptions": data2send,
        "VehicleConfig": {
            "VehicleCategory": VehicleCategory
        },
        VideoOverlay,
        "VideosStorageNumber": VideostoStorage,
        "VoiceNotificationsLang": Notificationlanguage,
        "WiFiTO": WiFiTO,
        "WifiSettings": {
            "APModeEnable": true,
            "APPassword": "1234567890",
            "APSSID": "FS-WiFi",
            "Networks":
                JSON_Networks
        },
        "version": "2.0"
    };

    // Define which keys should not be treated as floats in FS10_json
    const nonFloatKeys = [
        "version"
    ];

    FS10_json = {...json_A, ...SerialProtocol_JSON, ...json_B};
    
    //Json = StringifyWithFloats{JSON}[exceptions]
    const jsonString = StringifyWithFloats(FS10_json, nonFloatKeys);
    var jsonOutput = document.getElementById("jsonOutput");
    jsonOutput.value = jsonString;
    update_ADAS_Select();
}

//Generate Stringify JSON with Float numbers
function StringifyWithFloats(objData, exclude) {
    for(let i=0;i<exclude.length;i++){
        getAndModifyValue(objData,exclude[i])
    }
    const jsonResult = JSON.stringify(objData, undefined, 2).replace(/"(-?\d+\.\d+)"/g, (match, capturedValue) => { return `${capturedValue}`; });
    return jsonResult.replace(/\.0\.0\.0\.0\.0/g, "");
}

//Generate with Float numbers
function getAndModifyValue(object, path) {
    var parts = path.split(".");
    var value = object;
    for (var i = 0; i < parts.length - 1; i++) {
        if (value.hasOwnProperty(parts[i])) {
            value = value[parts[i]];
        } else {
            return;
        }
    }
    var lastProperty = parts[parts.length - 1];
    if (value.hasOwnProperty(lastProperty)) {
        value[lastProperty] = `${value[lastProperty]}.0.0.0.0.0`;
    } else {
        return;
    }
}


function download_FS10_JSON(filename) {
    const jsonOutput = document.getElementById("jsonOutput").value;
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/json;charset=utf-8," + encodeURIComponent(jsonOutput));
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function clearJsonInput() {
    var jsonInput = document.getElementById("jsonInput");
    jsonInput.value = "";
}

// Logical values from true/false
function updateSelectValue(selectId, JSONdata, propertyPath) {
    var segments = propertyPath.split('.');
    var value = JSONdata;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (segment in value) {
            value = value[segment];
        }
        else {
            value = "false";
            break;
        }
    }
    var selectElement = document.getElementById(selectId);
    selectElement.value = value;
}

// Values from images including inherit from "true/false"
function update_FS10_imageValue(selectId, JSONdata, propertyPath) {
    var selectValue = "None";
    var segments = propertyPath.split('.');
    var value = JSONdata;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (value && segment in value) {
            value = value[segment];
        } else {
            value = undefined;
            break;
        }
    }
    if (value === true) {
        selectValue = "SingleDMS";
    } else if (value !== undefined && value !== false) {
            var selectElement = document.getElementById(selectId);
            var options = selectElement.options;
            for (var j = 0; j < options.length; j++) {
                if (options[j].value === value) {
                    selectValue = value;
                    break;
                }
            }
    }
    var selectElement = document.getElementById(selectId);
    selectElement.value = selectValue;
}

// Values from videos including inherit from "true/false"
function update_FS10_videoValue(selectId, JSONdata, propertyPath) {
    var selectValue = "None";
    var segments = propertyPath.split('.');
    var value = JSONdata;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (value && segment in value) {
            value = value[segment];
        } else {
            value = undefined;
            break;
        }
    }
    if (value === true) {
        selectValue = "DMS";
    } else if (value !== undefined && value !== false) {
            var selectElement = document.getElementById(selectId);
            var options = selectElement.options;
            for (var j = 0; j < options.length; j++) {
                if (options[j].value === value) {
                    selectValue = value;
                    break;
                }
            }
    }
    var selectElement = document.getElementById(selectId);
    selectElement.value = selectValue;
}

// Values from images including inherit from "true/false"
function update_FS10_OutputValue(selectId, JSONdata, propertyPath) {
    var selectValue = "None";
    var segments = propertyPath.split('.');
    var value = JSONdata;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (value && segment in value) {
            value = value[segment];
        } else {
            value = undefined;
            break;
        }
    }
    if (value === true) {
        selectValue = "GPO";
    } else if (value !== undefined && value !== false) {
            var selectElement = document.getElementById(selectId);
            var options = selectElement.options;
            for (var j = 0; j < options.length; j++) {
                if (options[j].value === value) {
                    selectValue = value;
                    break;
                }
            }
    }
    var selectElement = document.getElementById(selectId);
    selectElement.value = selectValue;
}

// Updating tables from FS10-Events
function DMS_menuToUpdate(JSONdata){
    // DMS
    //    -Driver Asleep
    updateSelectValue("DMS_1x1_select", JSONdata, "EventsSettings.DriverAsleep.Activation");
    updateSelectValue("DMS_2x1_select", JSONdata, "EventsSettings.DriverAsleep.FeedbackAudio");
    update_FS10_OutputValue("DMS_3x1_select", JSONdata, "EventsSettings.DriverAsleep.FeedbackOutput");
    updateSelectValue("DMS_4x1_select", JSONdata, "EventsSettings.DriverAsleep.FeedbackSpeech");
    updateSelectValue("DMS_5x1_select", JSONdata, "EventsSettings.DriverAsleep.FeedbackVisual");
    updateSelectValue("DMS_6x1_select", JSONdata, "EventsSettings.DriverAsleep.ReportEvent");
    update_FS10_imageValue('DMS_7x1_select', JSONdata, "EventsSettings.DriverAsleep.ReportImage");
    update_FS10_videoValue("DMS_8x1_select", JSONdata, "EventsSettings.DriverAsleep.ReportFootage");
    //    -Drowsiness
    updateSelectValue("DMS_1x2_select", JSONdata, "EventsSettings.Drowsiness.Activation");
    updateSelectValue("DMS_2x2_select", JSONdata, "EventsSettings.Drowsiness.FeedbackAudio");
    update_FS10_OutputValue("DMS_3x2_select", JSONdata, "EventsSettings.Drowsiness.FeedbackOutput");
    updateSelectValue("DMS_4x2_select", JSONdata, "EventsSettings.Drowsiness.FeedbackSpeech");
    updateSelectValue("DMS_5x2_select", JSONdata, "EventsSettings.Drowsiness.FeedbackVisual");
    updateSelectValue("DMS_6x2_select", JSONdata, "EventsSettings.Drowsiness.ReportEvent");
    update_FS10_imageValue('DMS_7x2_select', JSONdata, "EventsSettings.Drowsiness.ReportImage");
    update_FS10_videoValue("DMS_8x2_select", JSONdata, "EventsSettings.Drowsiness.ReportFootage");
    //    -Driver Distracted
    updateSelectValue("DMS_1x3_select", JSONdata, "EventsSettings.DriverDistracted.Activation");
    updateSelectValue("DMS_2x3_select", JSONdata, "EventsSettings.DriverDistracted.FeedbackAudio");
    update_FS10_OutputValue("DMS_3x3_select", JSONdata, "EventsSettings.DriverDistracted.FeedbackOutput");
    updateSelectValue("DMS_4x3_select", JSONdata, "EventsSettings.DriverDistracted.FeedbackSpeech");
    updateSelectValue("DMS_5x3_select", JSONdata, "EventsSettings.DriverDistracted.FeedbackVisual");
    updateSelectValue("DMS_6x3_select", JSONdata, "EventsSettings.DriverDistracted.ReportEvent");
    update_FS10_imageValue('DMS_7x3_select', JSONdata, "EventsSettings.DriverDistracted.ReportImage");
    update_FS10_videoValue("DMS_8x3_select", JSONdata, "EventsSettings.DriverDistracted.ReportFootage");
    //    -Phone use
    updateSelectValue("DMS_1x4_select", JSONdata, "EventsSettings.PhoneUse.Activation");
    updateSelectValue("DMS_2x4_select", JSONdata, "EventsSettings.PhoneUse.FeedbackAudio");
    update_FS10_OutputValue("DMS_3x4_select", JSONdata, "EventsSettings.PhoneUse.FeedbackOutput");
    updateSelectValue("DMS_4x4_select", JSONdata, "EventsSettings.PhoneUse.FeedbackSpeech");
    updateSelectValue("DMS_5x4_select", JSONdata, "EventsSettings.PhoneUse.FeedbackVisual");
    updateSelectValue("DMS_6x4_select", JSONdata, "EventsSettings.PhoneUse.ReportEvent");
    update_FS10_imageValue('DMS_7x4_select', JSONdata, "EventsSettings.PhoneUse.ReportImage");
    update_FS10_videoValue("DMS_8x4_select", JSONdata, "EventsSettings.PhoneUse.ReportFootage");
    //    -Seatbelt
    updateSelectValue("DMS_1x5_select", JSONdata, "EventsSettings.Seatbelt.Activation");
    updateSelectValue("DMS_2x5_select", JSONdata, "EventsSettings.Seatbelt.FeedbackAudio");
    update_FS10_OutputValue("DMS_3x5_select", JSONdata, "EventsSettings.Seatbelt.FeedbackOutput");
    updateSelectValue("DMS_4x5_select", JSONdata, "EventsSettings.Seatbelt.FeedbackSpeech");
    updateSelectValue("DMS_5x5_select", JSONdata, "EventsSettings.Seatbelt.FeedbackVisual");
    updateSelectValue("DMS_6x5_select", JSONdata, "EventsSettings.Seatbelt.ReportEvent");
    update_FS10_imageValue('DMS_7x5_select', JSONdata, "EventsSettings.Seatbelt.ReportImage");
    update_FS10_videoValue("DMS_8x5_select", JSONdata, "EventsSettings.Seatbelt.ReportFootage");
    //    -Smoking
    updateSelectValue("DMS_1x6_select", JSONdata, "EventsSettings.Smoking.Activation");
    updateSelectValue("DMS_2x6_select", JSONdata, "EventsSettings.Smoking.FeedbackAudio");
    update_FS10_OutputValue("DMS_3x6_select", JSONdata, "EventsSettings.Smoking.FeedbackOutput");
    updateSelectValue("DMS_4x6_select", JSONdata, "EventsSettings.Smoking.FeedbackSpeech");
    updateSelectValue("DMS_5x6_select", JSONdata, "EventsSettings.Smoking.FeedbackVisual");
    updateSelectValue("DMS_6x6_select", JSONdata, "EventsSettings.Smoking.ReportEvent");
    update_FS10_imageValue('DMS_7x6_select', JSONdata, "EventsSettings.Smoking.ReportImage");
    update_FS10_videoValue("DMS_8x6_select", JSONdata, "EventsSettings.Smoking.ReportFootage");
    //    -Light Drowsiness
    /*
    updateSelectValue("DMS_1x7_select", JSONdata, "EventsSettings.LightDrowsiness.Activation");
    updateSelectValue("DMS_2x7_select", JSONdata, "EventsSettings.LightDrowsiness.FeedbackAudio");
    update_FS10_OutputValue("DMS_3x7_select", JSONdata, "EventsSettings.LightDrowsiness.FeedbackOutput");
    updateSelectValue("DMS_4x7_select", JSONdata, "EventsSettings.LightDrowsiness.FeedbackSpeech");
    updateSelectValue("DMS_5x7_select", JSONdata, "EventsSettings.LightDrowsiness.FeedbackVisual");
    updateSelectValue("DMS_6x7_select", JSONdata, "EventsSettings.LightDrowsiness.ReportEvent");
    update_FS10_imageValue('DMS_7x7_select', JSONdata, "EventsSettings.LightDrowsiness.ReportImage");
    update_FS10_videoValue("DMS_8x7_select", JSONdata, "EventsSettings.LightDrowsiness.ReportFootage");
    */
    //    -Tampering
    updateSelectValue("DMS_1x8_select", JSONdata, "EventsSettings.TamperingDetection.Activation");
    updateSelectValue("DMS_2x8_select", JSONdata, "EventsSettings.TamperingDetection.FeedbackAudio");
    update_FS10_OutputValue("DMS_3x8_select", JSONdata, "EventsSettings.TamperingDetection.FeedbackOutput");
    updateSelectValue("DMS_4x8_select", JSONdata, "EventsSettings.TamperingDetection.FeedbackSpeech");
    updateSelectValue("DMS_5x8_select", JSONdata, "EventsSettings.TamperingDetection.FeedbackVisual");
    updateSelectValue("DMS_6x8_select", JSONdata, "EventsSettings.TamperingDetection.ReportEvent");
    update_FS10_imageValue('DMS_7x8_select', JSONdata, "EventsSettings.TamperingDetection.ReportImage");
    update_FS10_videoValue("DMS_8x8_select", JSONdata, "EventsSettings.TamperingDetection.ReportFootage");
    //    -Driver Identified
    updateSelectValue("DMS_1x9_select", JSONdata, "EventsSettings.DriverIdentified.Activation");
    updateSelectValue("DMS_2x9_select", JSONdata, "EventsSettings.DriverIdentified.FeedbackAudio");
    update_FS10_OutputValue("DMS_3x9_select", JSONdata, "EventsSettings.DriverIdentified.FeedbackOutput");
    updateSelectValue("DMS_4x9_select", JSONdata, "EventsSettings.DriverIdentified.FeedbackSpeech");
    updateSelectValue("DMS_5x9_select", JSONdata, "EventsSettings.DriverIdentified.FeedbackVisual");
    updateSelectValue("DMS_6x9_select", JSONdata, "EventsSettings.DriverIdentified.ReportEvent");
    update_FS10_imageValue('DMS_7x9_select', JSONdata, "EventsSettings.DriverIdentified.ReportImage");
    update_FS10_videoValue("DMS_8x9_select", JSONdata, "EventsSettings.DriverIdentified.ReportFootage");
    //    -Driver Unindentified
    updateSelectValue("DMS_1x10_select", JSONdata, "EventsSettings.UnidentifiedUnauthDriver.Activation");
    updateSelectValue("DMS_2x10_select", JSONdata, "EventsSettings.UnidentifiedUnauthDriver.FeedbackAudio");
    update_FS10_OutputValue("DMS_3x10_select", JSONdata, "EventsSettings.UnidentifiedUnauthDriver.FeedbackOutput");
    updateSelectValue("DMS_4x10_select", JSONdata, "EventsSettings.UnidentifiedUnauthDriver.FeedbackSpeech");
    updateSelectValue("DMS_5x10_select", JSONdata, "EventsSettings.UnidentifiedUnauthDriver.FeedbackVisual");
    updateSelectValue("DMS_6x10_select", JSONdata, "EventsSettings.UnidentifiedUnauthDriver.ReportEvent");
    update_FS10_imageValue('DMS_7x10_select', JSONdata, "EventsSettings.UnidentifiedUnauthDriver.ReportImage");
    update_FS10_videoValue("DMS_8x10_select", JSONdata, "EventsSettings.UnidentifiedUnauthDriver.ReportFootage");
    //    -Driver Disappeared
    updateSelectValue("DMS_1x11_select", JSONdata, "EventsSettings.DriverDisappeared.Activation");
    updateSelectValue("DMS_2x11_select", JSONdata, "EventsSettings.DriverDisappeared.FeedbackAudio");
    update_FS10_OutputValue("DMS_3x11_select", JSONdata, "EventsSettings.DriverDisappeared.FeedbackOutput");
    updateSelectValue("DMS_4x11_select", JSONdata, "EventsSettings.DriverDisappeared.FeedbackSpeech");
    updateSelectValue("DMS_5x11_select", JSONdata, "EventsSettings.DriverDisappeared.FeedbackVisual");
    updateSelectValue("DMS_6x11_select", JSONdata, "EventsSettings.DriverDisappeared.ReportEvent");
    update_FS10_imageValue('DMS_7x11_select', JSONdata, "EventsSettings.DriverDisappeared.ReportImage");
    update_FS10_videoValue("DMS_8x11_select", JSONdata, "EventsSettings.DriverDisappeared.ReportFootage");
    //    -Driver Changed
    updateSelectValue("DMS_1x12_select", JSONdata, "EventsSettings.DriverChange.Activation");
    updateSelectValue("DMS_2x12_select", JSONdata, "EventsSettings.DriverChange.FeedbackAudio");
    update_FS10_OutputValue("DMS_3x12_select", JSONdata, "EventsSettings.DriverChange.FeedbackOutput");
    updateSelectValue("DMS_4x12_select", JSONdata, "EventsSettings.DriverChange.FeedbackSpeech");
    updateSelectValue("DMS_5x12_select", JSONdata, "EventsSettings.DriverChange.FeedbackVisual");
    updateSelectValue("DMS_6x12_select", JSONdata, "EventsSettings.DriverChange.ReportEvent");
    update_FS10_imageValue('DMS_7x12_select', JSONdata, "EventsSettings.DriverChange.ReportImage");
    update_FS10_videoValue("DMS_8x12_select", JSONdata, "EventsSettings.DriverChange.ReportFootage");
    //    -Driver ID Updated
    updateSelectValue("DMS_1x13_select", JSONdata, "EventsSettings.DriverIDUpdated.Activation");
    updateSelectValue("DMS_2x13_select", JSONdata, "EventsSettings.DriverIDUpdated.FeedbackAudio");
    update_FS10_OutputValue("DMS_3x13_select", JSONdata, "EventsSettings.DriverIDUpdated.FeedbackOutput");
    updateSelectValue("DMS_4x13_select", JSONdata, "EventsSettings.DriverIDUpdated.FeedbackSpeech");
    updateSelectValue("DMS_5x13_select", JSONdata, "EventsSettings.DriverIDUpdated.FeedbackVisual");
    updateSelectValue("DMS_6x13_select", JSONdata, "EventsSettings.DriverIDUpdated.ReportEvent");
    update_FS10_imageValue('DMS_7x13_select', JSONdata, "EventsSettings.DriverIDUpdated.ReportImage");
    update_FS10_videoValue("DMS_8x13_select", JSONdata, "EventsSettings.DriverIDUpdated.ReportFootage");
}
function ADAS_menuToUpdate(JSONdata){
    // ADAS
    //    -LDW
    updateSelectValue("ADAS_1x1_select", JSONdata, "EventsSettings.LaneDepartureWarning.Activation");
    updateSelectValue("ADAS_2x1_select", JSONdata, "EventsSettings.LaneDepartureWarning.FeedbackAudio");
    update_FS10_OutputValue("ADAS_3x1_select", JSONdata, "EventsSettings.LaneDepartureWarning.FeedbackOutput");
    updateSelectValue("ADAS_4x1_select", JSONdata, "EventsSettings.LaneDepartureWarning.FeedbackSpeech");
    updateSelectValue("ADAS_5x1_select", JSONdata, "EventsSettings.LaneDepartureWarning.FeedbackVisual");
    updateSelectValue("ADAS_6x1_select", JSONdata, "EventsSettings.LaneDepartureWarning.ReportEvent");
    update_FS10_imageValue('ADAS_7x1_select', JSONdata, "EventsSettings.LaneDepartureWarning.ReportImage");
    update_FS10_videoValue("ADAS_8x1_select", JSONdata, "EventsSettings.LaneDepartureWarning.ReportFootage");
    //    -Running Red Light (FS10)
    /*
    updateSelectValue("ADAS_1x2_select", JSONdata, "EventsSettings.RunningRedLight.Activation");
    updateSelectValue("ADAS_2x2_select", JSONdata, "EventsSettings.RunningRedLight.FeedbackAudio");
    update_FS10_OutputValue("ADAS_3x2_select", JSONdata, "EventsSettings.RunningRedLight.FeedbackOutput");
    updateSelectValue("ADAS_4x2_select", JSONdata, "EventsSettings.RunningRedLight.FeedbackSpeech");
    updateSelectValue("ADAS_5x2_select", JSONdata, "EventsSettings.RunningRedLight.FeedbackVisual");
    updateSelectValue("ADAS_6x2_select", JSONdata, "EventsSettings.RunningRedLight.ReportEvent");
    update_FS10_imageValue('ADAS_7x2_select', JSONdata, "EventsSettings.RunningRedLight.ReportImage");
    update_FS10_videoValue("ADAS_8x2_select", JSONdata, "EventsSettings.RunningRedLight.ReportFootage");
    */
    //    -Stop Disobeyed (FS10)
    /*
    updateSelectValue("ADAS_1x3_select", JSONdata, "EventsSettings.StopDisobeyed.Activation");
    updateSelectValue("ADAS_2x3_select", JSONdata, "EventsSettings.StopDisobeyed.FeedbackAudio");
    update_FS10_OutputValue("ADAS_3x3_select", JSONdata, "EventsSettings.StopDisobeyed.FeedbackOutput");
    updateSelectValue("ADAS_4x3_select", JSONdata, "EventsSettings.StopDisobeyed.FeedbackSpeech");
    updateSelectValue("ADAS_5x3_select", JSONdata, "EventsSettings.StopDisobeyed.FeedbackVisual");
    updateSelectValue("ADAS_6x3_select", JSONdata, "EventsSettings.StopDisobeyed.ReportEvent");
    update_FS10_imageValue('ADAS_7x3_select', JSONdata, "EventsSettings.StopDisobeyed.ReportImage");
    update_FS10_videoValue("ADAS_8x3_select", JSONdata, "EventsSettings.StopDisobeyed.ReportFootage");
    */
    //    -HMW
    updateSelectValue("ADAS_1x4_select", JSONdata, "EventsSettings.Tailgating(HMW).Activation");
    updateSelectValue("ADAS_2x4_select", JSONdata, "EventsSettings.Tailgating(HMW).FeedbackAudio");
    update_FS10_OutputValue("ADAS_3x4_select", JSONdata, "EventsSettings.Tailgating(HMW).FeedbackOutput");
    updateSelectValue("ADAS_4x4_select", JSONdata, "EventsSettings.Tailgating(HMW).FeedbackSpeech");
    updateSelectValue("ADAS_5x4_select", JSONdata, "EventsSettings.Tailgating(HMW).FeedbackVisual");
    updateSelectValue("ADAS_6x4_select", JSONdata, "EventsSettings.Tailgating(HMW).ReportEvent");
    update_FS10_imageValue('ADAS_7x4_select', JSONdata, "EventsSettings.Tailgating(HMW).ReportImage");
    update_FS10_videoValue("ADAS_8x4_select", JSONdata, "EventsSettings.Tailgating(HMW).ReportFootage");
    //    -UFCW
    updateSelectValue("ADAS_1x5_select", JSONdata, "EventsSettings.UrbanForwardCollisionWarning.Activation");
    updateSelectValue("ADAS_2x5_select", JSONdata, "EventsSettings.UrbanForwardCollisionWarning.FeedbackAudio");
    update_FS10_OutputValue("ADAS_3x5_select", JSONdata, "EventsSettings.UrbanForwardCollisionWarning.FeedbackOutput");
    updateSelectValue("ADAS_4x5_select", JSONdata, "EventsSettings.UrbanForwardCollisionWarning.FeedbackSpeech");
    updateSelectValue("ADAS_5x5_select", JSONdata, "EventsSettings.UrbanForwardCollisionWarning.FeedbackVisual");
    updateSelectValue("ADAS_6x5_select", JSONdata, "EventsSettings.UrbanForwardCollisionWarning.ReportEvent");
    update_FS10_imageValue('ADAS_7x5_select', JSONdata, "EventsSettings.UrbanForwardCollisionWarning.ReportImage");
    update_FS10_videoValue("ADAS_8x5_select", JSONdata, "EventsSettings.UrbanForwardCollisionWarning.ReportFootage");
    //    -FCW
    updateSelectValue("ADAS_1x6_select", JSONdata, "EventsSettings.ForwardCollisionWarning.Activation");
    updateSelectValue("ADAS_2x6_select", JSONdata, "EventsSettings.ForwardCollisionWarning.FeedbackAudio");
    update_FS10_OutputValue("ADAS_3x6_select", JSONdata, "EventsSettings.ForwardCollisionWarning.FeedbackOutput");
    updateSelectValue("ADAS_4x6_select", JSONdata, "EventsSettings.ForwardCollisionWarning.FeedbackSpeech");
    updateSelectValue("ADAS_5x6_select", JSONdata, "EventsSettings.ForwardCollisionWarning.FeedbackVisual");
    updateSelectValue("ADAS_6x6_select", JSONdata, "EventsSettings.ForwardCollisionWarning.ReportEvent");
    update_FS10_imageValue('ADAS_7x6_select', JSONdata, "EventsSettings.ForwardCollisionWarning.ReportImage");
    update_FS10_videoValue("ADAS_8x6_select", JSONdata, "EventsSettings.ForwardCollisionWarning.ReportFootage");
    //    -FS10
    /*
    updateSelectValue("ADAS_1x7_select", JSONdata, "EventsSettings.OverSpeeding.Activation");
    updateSelectValue("ADAS_2x7_select", JSONdata, "EventsSettings.OverSpeeding.FeedbackAudio");
    update_FS10_OutputValue("ADAS_3x7_select", JSONdata, "EventsSettings.OverSpeeding.FeedbackOutput");
    updateSelectValue("ADAS_4x7_select", JSONdata, "EventsSettings.OverSpeeding.FeedbackSpeech");
    updateSelectValue("ADAS_5x7_select", JSONdata, "EventsSettings.OverSpeeding.FeedbackVisual");
    updateSelectValue("ADAS_6x7_select", JSONdata, "EventsSettings.OverSpeeding.ReportEvent");
    update_FS10_imageValue('ADAS_7x7_select', JSONdata, "EventsSettings.OverSpeeding.ReportImage");
    update_FS10_videoValue("ADAS_8x7_select", JSONdata, "EventsSettings.OverSpeeding.ReportFootage");
    */
    //    -PCW
    updateSelectValue("ADAS_1x8_select", JSONdata, "EventsSettings.PedestrianCollisionWarning.Activation");
    updateSelectValue("ADAS_2x8_select", JSONdata, "EventsSettings.PedestrianCollisionWarning.FeedbackAudio");
    update_FS10_OutputValue("ADAS_3x8_select", JSONdata, "EventsSettings.PedestrianCollisionWarning.FeedbackOutput");
    updateSelectValue("ADAS_4x8_select", JSONdata, "EventsSettings.PedestrianCollisionWarning.FeedbackSpeech");
    updateSelectValue("ADAS_5x8_select", JSONdata, "EventsSettings.PedestrianCollisionWarning.FeedbackVisual");
    updateSelectValue("ADAS_6x8_select", JSONdata, "EventsSettings.PedestrianCollisionWarning.ReportEvent");
    update_FS10_imageValue('ADAS_7x8_select', JSONdata, "EventsSettings.PedestrianCollisionWarning.ReportImage");
    update_FS10_videoValue("ADAS_8x8_select", JSONdata, "EventsSettings.PedestrianCollisionWarning.ReportFootage");
}
function Tracking_menuToUpdate(JSONdata){
    // Tracking
    //    -Ignition ON
    updateSelectValue("TrackingEvents_1x1_select", JSONdata, "EventsSettings.IgnitionOn.Activation");
    updateSelectValue("TrackingEvents_2x1_select", JSONdata, "EventsSettings.IgnitionOn.FeedbackAudio");
    update_FS10_OutputValue("TrackingEvents_3x1_select", JSONdata, "EventsSettings.IgnitionOn.FeedbackOutput");
    updateSelectValue("TrackingEvents_4x1_select", JSONdata, "EventsSettings.IgnitionOn.FeedbackSpeech");
    updateSelectValue("TrackingEvents_5x1_select", JSONdata, "EventsSettings.IgnitionOn.FeedbackVisual");
    updateSelectValue("TrackingEvents_6x1_select", JSONdata, "EventsSettings.IgnitionOn.ReportEvent");
    update_FS10_imageValue('TrackingEvents_7x1_select', JSONdata, "EventsSettings.IgnitionOn.ReportImage");
    update_FS10_videoValue("TrackingEvents_8x1_select", JSONdata, "EventsSettings.IgnitionOn.ReportFootage");
    //    -Ignition OFF
    updateSelectValue("TrackingEvents_1x2_select", JSONdata, "EventsSettings.IgnitionOff.Activation");
    updateSelectValue("TrackingEvents_2x2_select", JSONdata, "EventsSettings.IgnitionOff.FeedbackAudio");
    update_FS10_OutputValue("TrackingEvents_3x2_select", JSONdata, "EventsSettings.IgnitionOff.FeedbackOutput");
    updateSelectValue("TrackingEvents_4x2_select", JSONdata, "EventsSettings.IgnitionOff.FeedbackSpeech");
    updateSelectValue("TrackingEvents_5x2_select", JSONdata, "EventsSettings.IgnitionOff.FeedbackVisual");
    updateSelectValue("TrackingEvents_6x2_select", JSONdata, "EventsSettings.IgnitionOff.ReportEvent");
    update_FS10_imageValue('TrackingEvents_7x2_select', JSONdata, "EventsSettings.IgnitionOff.ReportImage");
    update_FS10_videoValue("TrackingEvents_8x2_select", JSONdata, "EventsSettings.IgnitionOff.ReportFootage");
    //    -Movement Started
    updateSelectValue("TrackingEvents_1x3_select", JSONdata, "EventsSettings.MovementStarted.Activation");
    updateSelectValue("TrackingEvents_2x3_select", JSONdata, "EventsSettings.MovementStarted.FeedbackAudio");
    update_FS10_OutputValue("TrackingEvents_3x3_select", JSONdata, "EventsSettings.MovementStarted.FeedbackOutput");
    updateSelectValue("TrackingEvents_4x3_select", JSONdata, "EventsSettings.MovementStarted.FeedbackSpeech");
    updateSelectValue("TrackingEvents_5x3_select", JSONdata, "EventsSettings.MovementStarted.FeedbackVisual");
    updateSelectValue("TrackingEvents_6x3_select", JSONdata, "EventsSettings.MovementStarted.ReportEvent");
    update_FS10_imageValue('TrackingEvents_7x3_select', JSONdata, "EventsSettings.MovementStarted.ReportImage");
    update_FS10_videoValue("TrackingEvents_8x3_select", JSONdata, "EventsSettings.MovementStarted.ReportFootage");
    //    -Movement Stopped
    updateSelectValue("TrackingEvents_1x4_select", JSONdata, "EventsSettings.MovementStop.Activation");
    updateSelectValue("TrackingEvents_2x4_select", JSONdata, "EventsSettings.MovementStop.FeedbackAudio");
    update_FS10_OutputValue("TrackingEvents_3x4_select", JSONdata, "EventsSettings.MovementStop.FeedbackOutput");
    updateSelectValue("TrackingEvents_4x4_select", JSONdata, "EventsSettings.MovementStop.FeedbackSpeech");
    updateSelectValue("TrackingEvents_5x4_select", JSONdata, "EventsSettings.MovementStop.FeedbackVisual");
    updateSelectValue("TrackingEvents_6x4_select", JSONdata, "EventsSettings.MovementStop.ReportEvent");
    update_FS10_imageValue('TrackingEvents_7x4_select', JSONdata, "EventsSettings.MovementStop.ReportImage");
    update_FS10_videoValue("TrackingEvents_8x4_select", JSONdata, "EventsSettings.MovementStop.ReportFootage");
    //    -Heartbeat
    updateSelectValue("TrackingEvents_1x5_select", JSONdata, "EventsSettings.Heartbeat.Activation");
    updateSelectValue("TrackingEvents_2x5_select", JSONdata, "EventsSettings.Heartbeat.FeedbackAudio");
    update_FS10_OutputValue("TrackingEvents_3x5_select", JSONdata, "EventsSettings.Heartbeat.FeedbackOutput");
    updateSelectValue("TrackingEvents_4x5_select", JSONdata, "EventsSettings.Heartbeat.FeedbackSpeech");
    updateSelectValue("TrackingEvents_5x5_select", JSONdata, "EventsSettings.Heartbeat.FeedbackVisual");
    updateSelectValue("TrackingEvents_6x5_select", JSONdata, "EventsSettings.Heartbeat.ReportEvent");
    update_FS10_imageValue('TrackingEvents_7x5_select', JSONdata, "EventsSettings.Heartbeat.ReportImage");
    update_FS10_videoValue("TrackingEvents_8x5_select", JSONdata, "EventsSettings.Heartbeat.ReportFootage");
    //    -GPS Status Update
    updateSelectValue("TrackingEvents_1x6_select", JSONdata, "EventsSettings.GpsStatusUpdate.Activation");
    updateSelectValue("TrackingEvents_2x6_select", JSONdata, "EventsSettings.GpsStatusUpdate.FeedbackAudio");
    update_FS10_OutputValue("TrackingEvents_3x6_select", JSONdata, "EventsSettings.GpsStatusUpdate.FeedbackOutput");
    updateSelectValue("TrackingEvents_4x6_select", JSONdata, "EventsSettings.GpsStatusUpdate.FeedbackSpeech");
    updateSelectValue("TrackingEvents_5x6_select", JSONdata, "EventsSettings.GpsStatusUpdate.FeedbackVisual");
    updateSelectValue("TrackingEvents_6x6_select", JSONdata, "EventsSettings.GpsStatusUpdate.ReportEvent");
    update_FS10_imageValue('TrackingEvents_7x6_select', JSONdata, "EventsSettings.GpsStatusUpdate.ReportImage");
    update_FS10_videoValue("TrackingEvents_8x6_select", JSONdata, "EventsSettings.GpsStatusUpdate.ReportFootage");
    //    -TripPath
    updateSelectValue("TrackingEvents_1x7_select", JSONdata, "EventsSettings.TripPath.Activation");
    updateSelectValue("TrackingEvents_2x7_select", JSONdata, "false");
    update_FS10_OutputValue("TrackingEvents_3x7_select", JSONdata, "None");
    updateSelectValue("TrackingEvents_4x7_select", JSONdata, "false");
    updateSelectValue("TrackingEvents_5x7_select", JSONdata, "false");
    updateSelectValue("TrackingEvents_6x7_select", JSONdata, "EventsSettings.TripPath.ReportEvent");
    update_FS10_imageValue('TrackingEvents_7x7_select', JSONdata, "None");
    update_FS10_videoValue("TrackingEvents_8x7_select", JSONdata, "None");

}
function System_wo_event_menuToUpdate(JSONdata){
    //System Events without Reason
    //    -Camera Calibration Completed
    updateSelectValue("System_wo_Event_1x1_select", JSONdata, "EventsSettings.CameraCalibrationCompleted.Activation");
    updateSelectValue("System_wo_Event_2x1_select", JSONdata, "EventsSettings.CameraCalibrationCompleted.FeedbackAudio");
    update_FS10_OutputValue("System_wo_Event_3x1_select", JSONdata, "EventsSettings.CameraCalibrationCompleted.FeedbackOutput");
    updateSelectValue("System_wo_Event_4x1_select", JSONdata, "EventsSettings.CameraCalibrationCompleted.FeedbackSpeech");
    updateSelectValue("System_wo_Event_5x1_select", JSONdata, "EventsSettings.CameraCalibrationCompleted.FeedbackVisual");
    updateSelectValue("System_wo_Event_6x1_select", JSONdata, "EventsSettings.CameraCalibrationCompleted.ReportEvent");
    update_FS10_imageValue('System_wo_Event_7x1_select', JSONdata, "EventsSettings.CameraCalibrationCompleted.ReportImage");
    update_FS10_videoValue("System_wo_Event_8x1_select", JSONdata, "EventsSettings.CameraCalibrationCompleted.ReportFootage");
    //    -Camera Calibration Failed
    updateSelectValue("System_wo_Event_1x2_select", JSONdata, "EventsSettings.CameraCalibrationFailed.Activation");
    updateSelectValue("System_wo_Event_2x2_select", JSONdata, "EventsSettings.CameraCalibrationFailed.FeedbackAudio");
    update_FS10_OutputValue("System_wo_Event_3x2_select", JSONdata, "EventsSettings.CameraCalibrationFailed.FeedbackOutput");
    updateSelectValue("System_wo_Event_4x2_select", JSONdata, "EventsSettings.CameraCalibrationFailed.FeedbackSpeech");
    updateSelectValue("System_wo_Event_5x2_select", JSONdata, "EventsSettings.CameraCalibrationFailed.FeedbackVisual");
    updateSelectValue("System_wo_Event_6x2_select", JSONdata, "EventsSettings.CameraCalibrationFailed.ReportEvent");
    update_FS10_imageValue('System_wo_Event_7x2_select', JSONdata, "EventsSettings.CameraCalibrationFailed.ReportImage");
    update_FS10_videoValue("System_wo_Event_8x2_select", JSONdata, "EventsSettings.CameraCalibrationFailed.ReportFootage");
    //    -Accelerometer Calibration Complete
    updateSelectValue("System_wo_Event_1x3_select", JSONdata, "EventsSettings.3DAccelerometerCalibrationCompleted.Activation");
    updateSelectValue("System_wo_Event_2x3_select", JSONdata, "EventsSettings.3DAccelerometerCalibrationCompleted.FeedbackAudio");
    update_FS10_OutputValue("System_wo_Event_3x3_select", JSONdata, "EventsSettings.3DAccelerometerCalibrationCompleted.FeedbackOutput");
    updateSelectValue("System_wo_Event_4x3_select", JSONdata, "EventsSettings.3DAccelerometerCalibrationCompleted.FeedbackSpeech");
    updateSelectValue("System_wo_Event_5x3_select", JSONdata, "EventsSettings.3DAccelerometerCalibrationCompleted.FeedbackVisual");
    updateSelectValue("System_wo_Event_6x3_select", JSONdata, "EventsSettings.3DAccelerometerCalibrationCompleted.ReportEvent");
    update_FS10_imageValue('System_wo_Event_7x3_select', JSONdata, "EventsSettings.3DAccelerometerCalibrationCompleted.ReportImage");
    update_FS10_videoValue("System_wo_Event_8x3_select", JSONdata, "EventsSettings.3DAccelerometerCalibrationCompleted.ReportFootage");
    //    -Entering Sleep Mode
    updateSelectValue("System_wo_Event_1x4_select", JSONdata, "EventsSettings.EnteredSleepMode.Activation");
    updateSelectValue("System_wo_Event_2x4_select", JSONdata, "EventsSettings.EnteredSleepMode.FeedbackAudio");
    update_FS10_OutputValue("System_wo_Event_3x4_select", JSONdata, "EventsSettings.EnteredSleepMode.FeedbackOutput");
    updateSelectValue("System_wo_Event_4x4_select", JSONdata, "EventsSettings.EnteredSleepMode.FeedbackSpeech");
    updateSelectValue("System_wo_Event_5x4_select", JSONdata, "EventsSettings.EnteredSleepMode.FeedbackVisual");
    updateSelectValue("System_wo_Event_6x4_select", JSONdata, "EventsSettings.EnteredSleepMode.ReportEvent");
    update_FS10_imageValue('System_wo_Event_7x4_select', JSONdata, "EventsSettings.EnteredSleepMode.ReportImage");
    update_FS10_videoValue("System_wo_Event_8x4_select", JSONdata, "EventsSettings.EnteredSleepMode.ReportFootage");
    //    -FW Update Started
    updateSelectValue("System_wo_Event_1x5_select", JSONdata, "EventsSettings.FwUpdateStarted.Activation");
    updateSelectValue("System_wo_Event_2x5_select", JSONdata, "EventsSettings.FwUpdateStarted.FeedbackAudio");
    update_FS10_OutputValue("System_wo_Event_3x5_select", JSONdata, "EventsSettings.FwUpdateStarted.FeedbackOutput");
    updateSelectValue("System_wo_Event_4x5_select", JSONdata, "EventsSettings.FwUpdateStarted.FeedbackSpeech");
    updateSelectValue("System_wo_Event_5x5_select", JSONdata, "EventsSettings.FwUpdateStarted.FeedbackVisual");
    updateSelectValue("System_wo_Event_6x5_select", JSONdata, "EventsSettings.FwUpdateStarted.ReportEvent");
    update_FS10_imageValue('System_wo_Event_7x5_select', JSONdata, "EventsSettings.FwUpdateStarted.ReportImage");
    update_FS10_videoValue("System_wo_Event_8x5_select", JSONdata, "EventsSettings.FwUpdateStarted.ReportFootage");
    //    -FW Update Completed
    updateSelectValue("System_wo_Event_1x6_select", JSONdata, "EventsSettings.FwUpdateCompleted.Activation");
    updateSelectValue("System_wo_Event_2x6_select", JSONdata, "EventsSettings.FwUpdateCompleted.FeedbackAudio");
    update_FS10_OutputValue("System_wo_Event_3x6_select", JSONdata, "EventsSettings.FwUpdateCompleted.FeedbackOutput");
    updateSelectValue("System_wo_Event_4x6_select", JSONdata, "EventsSettings.FwUpdateCompleted.FeedbackSpeech");
    updateSelectValue("System_wo_Event_5x6_select", JSONdata, "EventsSettings.FwUpdateCompleted.FeedbackVisual");
    updateSelectValue("System_wo_Event_6x6_select", JSONdata, "EventsSettings.FwUpdateCompleted.ReportEvent");
    update_FS10_imageValue('System_wo_Event_7x6_select', JSONdata, "EventsSettings.FwUpdateCompleted.ReportImage");
    update_FS10_videoValue("System_wo_Event_8x6_select", JSONdata, "EventsSettings.FwUpdateCompleted.ReportFootage");
    //    -FW Update Failed
    updateSelectValue("System_wo_Event_1x7_select", JSONdata, "EventsSettings.FwUpdateFailed.Activation");
    updateSelectValue("System_wo_Event_2x7_select", JSONdata, "EventsSettings.FwUpdateFailed.FeedbackAudio");
    update_FS10_OutputValue("System_wo_Event_3x7_select", JSONdata, "EventsSettings.FwUpdateFailed.FeedbackOutput");
    updateSelectValue("System_wo_Event_4x7_select", JSONdata, "EventsSettings.FwUpdateFailed.FeedbackSpeech");
    updateSelectValue("System_wo_Event_5x7_select", JSONdata, "EventsSettings.FwUpdateFailed.FeedbackVisual");
    updateSelectValue("System_wo_Event_6x7_select", JSONdata, "EventsSettings.FwUpdateFailed.ReportEvent");
    update_FS10_imageValue('System_wo_Event_7x7_select', JSONdata, "EventsSettings.FwUpdateFailed.ReportImage");
    update_FS10_videoValue("System_wo_Event_8x7_select", JSONdata, "EventsSettings.FwUpdateFailed.ReportFootage");
    //    -System Boot
    updateSelectValue("System_wo_Event_1x8_select", JSONdata, "EventsSettings.SystemBoot.Activation");
    updateSelectValue("System_wo_Event_2x8_select", JSONdata, "EventsSettings.SystemBoot.FeedbackAudio");
    update_FS10_OutputValue("System_wo_Event_3x8_select", JSONdata, "EventsSettings.SystemBoot.FeedbackOutput");
    updateSelectValue("System_wo_Event_4x8_select", JSONdata, "EventsSettings.SystemBoot.FeedbackSpeech");
    updateSelectValue("System_wo_Event_5x8_select", JSONdata, "EventsSettings.SystemBoot.FeedbackVisual");
    updateSelectValue("System_wo_Event_6x8_select", JSONdata, "EventsSettings.SystemBoot.ReportEvent");
    update_FS10_imageValue('System_wo_Event_7x8_select', JSONdata, "EventsSettings.SystemBoot.ReportImage");
    update_FS10_videoValue("System_wo_Event_8x8_select", JSONdata, "EventsSettings.SystemBoot.ReportFootage");
    //    -System Boot Failure
    updateSelectValue("System_wo_Event_1x9_select", JSONdata, "EventsSettings.SystemBootFailure.Activation");
    updateSelectValue("System_wo_Event_2x9_select", JSONdata, "EventsSettings.SystemBootFailure.FeedbackAudio");
    update_FS10_OutputValue("System_wo_Event_3x9_select", JSONdata, "EventsSettings.SystemBootFailure.FeedbackOutput");
    updateSelectValue("System_wo_Event_4x9_select", JSONdata, "EventsSettings.SystemBootFailure.FeedbackSpeech");
    updateSelectValue("System_wo_Event_5x9_select", JSONdata, "EventsSettings.SystemBootFailure.FeedbackVisual");
    updateSelectValue("System_wo_Event_6x9_select", JSONdata, "EventsSettings.SystemBootFailure.ReportEvent");
    update_FS10_imageValue('System_wo_Event_7x9_select', JSONdata, "EventsSettings.SystemBootFailure.ReportImage");
    update_FS10_videoValue("System_wo_Event_8x9_select", JSONdata, "EventsSettings.SystemBootFailure.ReportFootage");
}
function System_w_event_menuToUpdate(JSONdata){
    //System Events with Reason 
    //    -External Event Triggering
    updateSelectValue("System_w_Event_1x1_select", JSONdata, "EventsSettings.ExternalEventTriggering.Activation");
    updateSelectValue("System_w_Event_2x1_select", JSONdata, "EventsSettings.ExternalEventTriggering.FeedbackAudio");
    update_FS10_OutputValue("System_w_Event_3x1_select", JSONdata, "EventsSettings.ExternalEventTriggering.FeedbackOutput");
    updateSelectValue("System_w_Event_4x1_select", JSONdata, "EventsSettings.ExternalEventTriggering.FeedbackSpeech");
    updateSelectValue("System_w_Event_5x1_select", JSONdata, "EventsSettings.ExternalEventTriggering.FeedbackVisual");
    updateSelectValue("System_w_Event_6x1_select", JSONdata, "EventsSettings.ExternalEventTriggering.ReportEvent");
    update_FS10_imageValue('System_w_Event_7x1_select', JSONdata, "EventsSettings.ExternalEventTriggering.ReportImage");
    update_FS10_videoValue("System_w_Event_8x1_select", JSONdata, "EventsSettings.ExternalEventTriggering.ReportFootage");
    //    -Application Error
    updateSelectValue("System_w_Event_1x2_select", JSONdata, "EventsSettings.ApplicationError.Activation");
    updateSelectValue("System_w_Event_2x2_select", JSONdata, "EventsSettings.ApplicationError.FeedbackAudio");
    update_FS10_OutputValue("System_w_Event_3x2_select", JSONdata, "EventsSettings.ApplicationError.FeedbackOutput");
    updateSelectValue("System_w_Event_4x2_select", JSONdata, "EventsSettings.ApplicationError.FeedbackSpeech");
    updateSelectValue("System_w_Event_5x2_select", JSONdata, "EventsSettings.ApplicationError.FeedbackVisual");
    updateSelectValue("System_w_Event_6x2_select", JSONdata, "EventsSettings.ApplicationError.ReportEvent");
    update_FS10_imageValue('System_w_Event_7x2_select', JSONdata, "EventsSettings.ApplicationError.ReportImage");
    update_FS10_videoValue("System_w_Event_8x2_select", JSONdata, "EventsSettings.ApplicationError.ReportFootage");
    //    -Camera Error
    updateSelectValue("System_w_Event_1x3_select", JSONdata, "EventsSettings.CameraError.Activation");
    updateSelectValue("System_w_Event_2x3_select", JSONdata, "EventsSettings.CameraError.FeedbackAudio");
    update_FS10_OutputValue("System_w_Event_3x3_select", JSONdata, "EventsSettings.CameraError.FeedbackOutput");
    updateSelectValue("System_w_Event_4x3_select", JSONdata, "EventsSettings.CameraError.FeedbackSpeech");
    updateSelectValue("System_w_Event_5x3_select", JSONdata, "EventsSettings.CameraError.FeedbackVisual");
    updateSelectValue("System_w_Event_6x3_select", JSONdata, "EventsSettings.CameraError.ReportEvent");
    update_FS10_imageValue('System_w_Event_7x3_select', JSONdata, "EventsSettings.CameraError.ReportImage");
    update_FS10_videoValue("System_w_Event_8x3_select", JSONdata, "EventsSettings.CameraError.ReportFootage");
    //    -System OK
    updateSelectValue("System_w_Event_1x4_select", JSONdata, "EventsSettings.SystemOk.Activation");
    updateSelectValue("System_w_Event_2x4_select", JSONdata, "EventsSettings.SystemOk.FeedbackAudio");
    update_FS10_OutputValue("System_w_Event_3x4_select", JSONdata, "EventsSettings.SystemOk.FeedbackOutput");
    updateSelectValue("System_w_Event_4x4_select", JSONdata, "EventsSettings.SystemOk.FeedbackSpeech");
    updateSelectValue("System_w_Event_5x4_select", JSONdata, "EventsSettings.SystemOk.FeedbackVisual");
    updateSelectValue("System_w_Event_6x4_select", JSONdata, "EventsSettings.SystemOk.ReportEvent");
    update_FS10_imageValue('System_w_Event_7x4_select', JSONdata, "EventsSettings.SystemOk.ReportImage");
    update_FS10_videoValue("System_w_Event_8x4_select", JSONdata, "EventsSettings.SystemOk.ReportFootage");
    //    -System Reset
    updateSelectValue("System_w_Event_1x5_select", JSONdata, "EventsSettings.SystemReset.Activation");
    updateSelectValue("System_w_Event_2x5_select", JSONdata, "EventsSettings.SystemReset.FeedbackAudio");
    update_FS10_OutputValue("System_w_Event_3x5_select", JSONdata, "EventsSettings.SystemReset.FeedbackOutput");
    updateSelectValue("System_w_Event_4x5_select", JSONdata, "EventsSettings.SystemReset.FeedbackSpeech");
    updateSelectValue("System_w_Event_5x5_select", JSONdata, "EventsSettings.SystemReset.FeedbackVisual");
    updateSelectValue("System_w_Event_6x5_select", JSONdata, "EventsSettings.SystemReset.ReportEvent");
    update_FS10_imageValue('System_w_Event_7x5_select', JSONdata, "EventsSettings.SystemReset.ReportImage");
    update_FS10_videoValue("System_w_Event_8x5_select", JSONdata, "EventsSettings.SystemReset.ReportFootage");
    //    -System Error
    updateSelectValue("System_w_Event_1x6_select", JSONdata, "EventsSettings.SystemError.Activation");
    updateSelectValue("System_w_Event_2x6_select", JSONdata, "EventsSettings.SystemError.FeedbackAudio");
    update_FS10_OutputValue("System_w_Event_3x6_select", JSONdata, "EventsSettings.SystemError.FeedbackOutput");
    updateSelectValue("System_w_Event_4x6_select", JSONdata, "EventsSettings.SystemError.FeedbackSpeech");
    updateSelectValue("System_w_Event_5x6_select", JSONdata, "EventsSettings.SystemError.FeedbackVisual");
    updateSelectValue("System_w_Event_6x6_select", JSONdata, "EventsSettings.SystemError.ReportEvent");
    update_FS10_imageValue('System_w_Event_7x6_select', JSONdata, "EventsSettings.SystemError.ReportImage");
    update_FS10_videoValue("System_w_Event_8x6_select", JSONdata, "EventsSettings.SystemError.ReportFootage");
    //    -MCULOG
    updateSelectValue("System_w_Event_1x7_select", JSONdata, "EventsSettings.MCULOG.Activation");
    updateSelectValue("System_w_Event_2x7_select", JSONdata, "EventsSettings.MCULOG.FeedbackAudio");
    update_FS10_OutputValue("System_w_Event_3x7_select", JSONdata, "EventsSettings.MCULOG.FeedbackOutput");
    updateSelectValue("System_w_Event_4x7_select", JSONdata, "EventsSettings.MCULOG.FeedbackSpeech");
    updateSelectValue("System_w_Event_5x7_select", JSONdata, "EventsSettings.MCULOG.FeedbackVisual");
    updateSelectValue("System_w_Event_6x7_select", JSONdata, "EventsSettings.MCULOG.ReportEvent");
    update_FS10_imageValue('System_w_Event_7x7_select', JSONdata, "EventsSettings.MCULOG.ReportImage");
    update_FS10_videoValue("System_w_Event_8x7_select", JSONdata, "EventsSettings.MCULOG.ReportFootage");
}

// Updating ComboBox from Numerical Values
function updateAngleValue(selectId, JSONdata, propertyPath, nominal, min_Lim, max_Lim, arrayValues) {
    var selectValue = nominal;
    var segments = propertyPath.split('.');
    var value = JSONdata;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (value && segment in value) {
            value = value[segment];
        }
        else {
            value = undefined;
            break;
        }
    }
    if (value !== undefined) {
        if (value > max_Lim) {
            selectValue = max_Lim;
        }
        else if (value < min_Lim) {
            selectValue = min_Lim;
        }
        else {
            selectValue = value;
        }
    }
    selectValue = findNearestValue(selectValue, arrayValues);
    //console.log(selectValue);
    var selectElement = document.getElementById(selectId);
    selectElement.value = selectValue;
}

// Updating ComboBox from Numerical Values
function updateNumericValue(selectId, JSONdata, propertyPath, nominal, min_Lim, max_Lim) {
    var selectValue = nominal;
    var segments = propertyPath.split('.');
    var value = JSONdata;

    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (value && segment in value) {
            value = value[segment];
        }
        else {
            value = undefined;
            break;
        }
    }

    if (value !== undefined) {
        if (value > max_Lim) {
            selectValue = max_Lim;
        }
        if (value < min_Lim) {
            selectValue = min_Lim;
        } 
        else {
            selectValue = value;
        }
    }

    var selectElement = document.getElementById(selectId);
    selectElement.value = selectValue;
}

// Updating ComboBox from Numerical Values with 0 as disabled option
function updateNumericValueWithDisabled(selectId, JSONdata, propertyPath, nominal, min_Lim, max_Lim) {
    var selectValue = nominal;
    var segments = propertyPath.split('.');
    var value = JSONdata;

    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (value && segment in value) {
            value = value[segment];
        } else {
            value = undefined;
            break;
        }
    }

    if (value !== undefined) {
        if (value > max_Lim) {
            selectValue = max_Lim;
        } else if (value < min_Lim && value !== 0) {
            selectValue = min_Lim;
        } else {
            selectValue = value;
        }
    }

    var selectElement = document.getElementById(selectId);
    selectElement.value = selectValue;
}

// Updating ComboBox from String Values
function updateListValue(selectId, JSONdata, propertyPath, nominal) {
    var selectElement = document.getElementById(selectId);
    var propertyValue = getProperty(JSONdata, propertyPath);
    if (propertyValue !== undefined && isOptionExist(selectElement, propertyValue)) {
        selectElement.value = propertyValue;
    }
    else {
        selectElement.value = nominal;
    }
}

// Support Function for updateListValues & selectRadioCategory
function getProperty(obj, propertyPath) {
    var properties = propertyPath.split('.');
    var value = obj;
    for (var i = 0; i < properties.length; i++) {
        var property = properties[i];
        if (value && property in value) {
            value = value[property];
        }
        else {
            value = undefined;
            break;
        }
    }
    return value;
}

// Support Function for updateListValues
function isOptionExist(selectElement, value) {
    for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === value) {
            return true;
        }
    }
    return false;
}

// Updating RadioButtons
function selectRadioCategory(radioName, JSONdata, propertyPath, nominal) {
    var radioButtons = document.getElementsByName(radioName);
    var propertyValue = getProperty(JSONdata, propertyPath);

    if (propertyValue !== undefined && isRadioButtonValueExist(radioButtons, propertyValue)) {
        var radioButton = document.getElementById(radioName + "_" + propertyValue);
        radioButton.checked = true;
    } 
    else {
        var nominalRadioButton = document.getElementById(radioName + "_" + nominal);
        nominalRadioButton.checked = true;
    }
}

// Support Function for selectRadioCategory
function isRadioButtonValueExist(radioButtons, value) {
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].value === value) {
            return true;
        }
    }
    return false;
}

//Updating Radio buttons
function updateRadioButton_fromJSON(JSONdata){
    // RadioButtons
    selectRadioCategory("vehicleType", JSONdata, "VehicleConfig.VehicleCategory", "Private");
    selectRadioCategory("deviceType", JSONdata, "AdasConfig.Type", "Disabled");
}

//Updating Text Inputs
function updateTextLabel_fromJSON(JSONdata){
    // APN SETTINGS
    document.getElementById("APN_apn").value = JSONdata.APNSettings.APN;
    document.getElementById("APN_user").value = JSONdata.APNSettings.User;
    document.getElementById("APN_pass").value = JSONdata.APNSettings.Password;
    changeAPNFormat('APN_apn', 'APN');
    changeAPNFormat('APN_user', 'user')
    changeAPNFormat('APN_pass', 'pass')
    // Server Settings
    document.getElementById("MW_check").checked = true;
    document.getElementById("ServerAddress").value = JSONdata.ServerAddress;
    document.getElementById("ServerPassword").value = JSONdata.ServerPassword;
    document.getElementById("Port").value = JSONdata.Port;
    ServerEnableColor('MW_check', 'ServerAddress', 'ServerPassword', 'Port');    
}

//Updating Check Boxes
function updateCheckBoxValue(checkboxId, JSONdata, propertyPath) {
    var checkboxElement = document.getElementById(checkboxId);
    var propertyValue = getProperty(JSONdata, propertyPath);
    if (propertyValue !== undefined) {
        checkboxElement.checked = !!propertyValue;
    } 
    else{
        checkboxElement.checked = false;
    }
}

// Updating Combo boxes based on values and variable limits
function updateComboBox_fromJSON(JSONdata){
    //Driver Position
    updateSelectValue("LeftHandDrive", JSONdata, "ExtraParameters.DsEngineParams.PreStartSetParams.LeftHandDrive");

    // Global Parameters for Driver's Feedback
    updateSelectValue("beepsActivation", JSONdata, "DriverFeedbackOptions.Beeps");
    updateSelectValue("voiceActivation", JSONdata, "DriverFeedbackOptions.Voice");
    updateSelectValue("LEDActivation", JSONdata, "DriverFeedbackOptions.LED");
    updateSelectValue("SystemLEDActivation", JSONdata, "SystemLEDActivation");
    
    // Driver Angles
    updateAngleValue("RoadCenterPitchPos", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.RoadCenterPitchPos", 15, 0, 45, PitchPos);
    updateAngleValue("RoadCenterPitchNeg", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.RoadCenterPitchNeg", -15, -45, 0, PitchNeg);
    updateAngleValue("RoadCenterYawPos", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.RoadCenterYawPos", 20, 0, 90, YawPos);
    updateAngleValue("RoadCenterYawNeg", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.RoadCenterYawNeg", -20, -90, 0, YawNeg);

    // Driver Distraction
    updateNumericValue("MaxHeadingAngleForEvents", JSONdata, "MaxHeadingAngleForEvents", 15, 2, 30);
    updateCmbBox("DriverDisappearTimeThreshold", 5, 60, 1, 1, 1, 0, "sec(s)");
    updateNumericValue("DriverDisappearTimeThreshold", JSONdata, "DriverDisappearTimeThreshold", 30, 5, 60);
    
    // Movement
    updateNumericValue("MinSpeedMonitor", JSONdata, "MinSpeedMonitorThreshold", 10, 10, 30);

    // GPS Loss
    updateNumericValue("GPSLossSpeedPersistenceTime", JSONdata, "GPSLossSpeedPersistenceTime", 10, 0, 300);
    
    // SpeedThresholds
    updateNumericValue("DistractionSpeedThreshold", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.DistractionSpeedThreshold", 30, 0, 50);
    updateNumericValue("DrowsinessSpeedThreshold", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.DrowsinessSpeedThreshold", 5, 0, 50);
    updateNumericValue("PhoneSpeedThreshold", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.PhoneSpeedThreshold", 5, 0, 50);
    updateNumericValue("SeatbeltSpeedThreshold", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.SeatbeltSpeedThreshold", 15, 0, 50);
    updateNumericValue("SmokingSpeedThreshold", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.SmokingSpeedThreshold", 0, 0, 50);
    updateNumericValue("DistractionTurnGraceDuration", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.DistractionTurnGraceDuration", 2.0, 0.0, 5.0);
    updateNumericValue("TrackingGraceTimer", JSONdata, "ExtraParameters.DsEngineParams.PreStartSetParams.TrackingGraceTimer", 150, 30, 1800);
    updateNumericValue("DriverChangeMinDuration", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.DriverChangeMinDuration", 5.0, 0.0, 15.0);
    updateNumericValue("SeatbeltAlertTime", JSONdata, "ExtraParameters.DsEngineParams.PreStartSetParams.SeatbeltAlertTime", 15.0, 5.0, 60.0);
    updateNumericValue("SleepDuration", JSONdata, "ExtraParameters.DsEngineParams.PreStartSetParams.SleepDuration", 4.0, 1.0, 5.0);
    
    //Enables Post and Pre 
    updateSelectValue("EnableSleepBlockingByDrowsiness", JSONdata, "ExtraParameters.DsEngineParams.PreStartSetParams.EnableSleepBlockingByDrowsiness");
    updateSelectValue("InhibitSeatbeltOnStop", JSONdata, "ExtraParameters.DsEngineParams.PreStartSetParams.InhibitSeatbeltAlertsOnStop");
    updateSelectValue("EnableYawnBasedDrowsiness", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.EnableYawnBasedDrowsiness");
    updateSelectValue("EnableImagesIdDB", JSONdata, "ExtraParameters.DsEngineParams.PreStartSetParams.EnableImagesIdDB");
    
    //Messages Backoff
    updateNumericValue("AsleepOTABackOff", JSONdata, "ExtraParameters.OTAMessageBackOff.Asleep", 0, 0, 1);
    updateNumericValue("DriverDistractedOTABackOff", JSONdata, "ExtraParameters.OTAMessageBackOff.DriverDistracted", 0, 0, 30);
    updateNumericValue("DrowsinessOTABackOff", JSONdata, "ExtraParameters.OTAMessageBackOff.Drowsiness", 0, 0, 30);
    updateNumericValue("FCWOTABackOff", JSONdata, "ExtraParameters.OTAMessageBackOff.FCW", 0, 0, 30);
    updateNumericValue("LDWOTABackOff", JSONdata, "ExtraParameters.OTAMessageBackOff.LDW", 0, 0, 30);
    //updateNumericValue("LightDrowsinessOTABackOff", JSONdata, "ExtraParameters.OTAMessageBackOff.LightDrowsiness", 15, 0, 30);
    updateNumericValue("PCWOTABackOff", JSONdata, "ExtraParameters.OTAMessageBackOff.PCW", 0, 0, 30);
    updateNumericValue("PhoneUseOTABackOff", JSONdata, "ExtraParameters.OTAMessageBackOff.PhoneUse", 0, 0, 30);
    updateNumericValue("SeatbeltOTABackOff", JSONdata, "ExtraParameters.OTAMessageBackOff.Seatbelt", 0, 0, 30);
    updateNumericValue("SmokingOTABackOff", JSONdata, "ExtraParameters.OTAMessageBackOff.Smoking", 0, 0, 30);
    updateNumericValue("HMWOTABackOff", JSONdata, "ExtraParameters.OTAMessageBackOff.Tailgating", 0, 0, 30);
    updateNumericValue("UFCWOTABackOff", JSONdata, "ExtraParameters.OTAMessageBackOff.UFCW", 0, 0, 30);

    // Backoff Timers
    updateNumericValue("CameraStatusBackoffTimer", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.CameraStatusBackoffTimer", 60, 30, 1800);
    updateNumericValue("DistractionBackoffTimer", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.DistractionBackoffTimer", 900, 30, 1800);
    updateNumericValue("DrowsinessBackoffTimer", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.DrowsinessBackoffTimer", 300, 30, 1800);
    //updateNumericValue("LightDrowsinessBackoffTimer", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.LightDrowsinessBackoffTimer", 900, 30, 1800);
    updateNumericValue("PhoneBackoffTimer", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.PhoneBackoffTimer", 900, 30, 1800);
    updateNumericValue("SeatbeltBackoffTimer", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.SeatbeltBackoffTimer", 900, 30, 1800);
    updateNumericValue("SleepBackoffTimer", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.SleepBackoffTimer", 300, 30, 1800);
    updateNumericValue("SmokingBackoffTimer", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.SmokingBackoffTimer", 900, 30, 1800);

    //Communication Watchdog
    updateNumericValue("KeepAliveInSec", JSONdata, "CommunicationWatchdog.KeepAliveInSec", 180, 0, 300);
    updateNumericValue("ModemResetHWTimeInMin", JSONdata, "CommunicationWatchdog.ModemResetHWTimeInMin", 5, 0, 30);
    updateNumericValue("ModemResetSignalTimeInMin", JSONdata, "CommunicationWatchdog.ModemResetSignalTimeInMin", 5, 0, 30);
    updateSelectValue("RepeatCycleUntilCommRecovery", JSONdata, "CommunicationWatchdog.RepeatCycleUntilCommRecovery");
    updateNumericValue("SelfPowerRecycleTimeInMin", JSONdata, "CommunicationWatchdog.SelfPowerRecycleTimeInMin", 5, 0, 30);
    updateNumericValue("SocketResetTimeInMin", JSONdata, "CommunicationWatchdog.SocketResetTimeInMin", 15, 0, 30);

    //Heartbeat Configuration
    updateNumericValue("IGNOffInterval", JSONdata, "ExtraParameters.HeartbeatConfig.IGNOffInterval", 30, 15, 1440);
    updateNumericValue("IGNOnInterval", JSONdata, "ExtraParameters.HeartbeatConfig.IGNOnInterval", 60, 5, 600);
    updateNumericValue("TimeToWaitGPSFix", JSONdata, "ExtraParameters.HeartbeatConfig.TimeToWaitGPSFix", 120, 0, 300);
    updateNumericValue("GPSFixLossOrRecovery", JSONdata, "GPSFixLossOrRecoveryTime", 15, 0, 500);
    updateNumericValue("IGNOnFilter", JSONdata, "IGNOnFilter", 15, 0, 255);
    updateNumericValue("IGNOffFilter", JSONdata, "IGNOffFilter", 3, 0, 255);

    //TripPath Configuration
    updateSelectValue("TripPathEnable", JSONdata, "ExtraParameters.TripPathConfig.Enable");
    updateNumericValueWithDisabled("TripPathDistance", JSONdata, "ExtraParameters.TripPathConfig.Distance", 200, 100, 1000);
    updateNumericValueWithDisabled("TripPathTime", JSONdata, "ExtraParameters.TripPathConfig.Time", 60, 30, 3000);
    updateNumericValueWithDisabled("TripPathHeading", JSONdata, "ExtraParameters.TripPathConfig.Heading", 35, 20, 90);
    updateSelectValue("TripPathInhibitHeartbeat", JSONdata, "ExtraParameters.TripPathConfig.InhibitHeartBit");

    //Serial Configuration
    updateNumericValue("Baudrate", JSONdata, "RS232Settings.Baud", 115200, 9600, 115200);
    updateNumericValue("Databits", JSONdata, "RS232Settings.DataBits", 8, 5, 8);
    updateSelectValue("Parity", JSONdata, "RS232Settings.Parity");
    updateNumericValue("Stopbits", JSONdata, "RS232Settings.StopBit", 1, 1, 2);
    updateListValue("Datatosend", JSONdata, "TelematicsDataForwardOptions", "Event");

    //Volume
    updateNumericValue("VolumeforAsleep", JSONdata, "DriverAsleepEventSpeakerVolume", 100, 50, 100);
    updateNumericValue("VolumeforAlerts", JSONdata, "SpeakerVolume", 80, 10, 100);
    updateSelectValue("VolumeControls", JSONdata, "SpeakerControl");
    updateSelectValue("Notificationlanguage", JSONdata, "VoiceNotificationsLang", 0, 0, 255);

    //General Input/Outputs
    //  GPIO
    //updateSelectValue("ActiveLevelGPIO", JSONdata, "GPIO.ActiveLevel");
    //updateListValue("FunctionGPIO", JSONdata, "GPIO.SpecialFunction", "Other");
    //updateListValue("StateGPIO", JSONdata, "GPIO.State", "In");
    //updateNumericValue("StateDurationGPIO", JSONdata, "GPIO.StateDuration", 10, 10, 500);
    //updateNumericValue("VoltageThresholdGPIO", JSONdata, "GPIO.VoltageThreshold", 0.7, 0.0, 24.0);
    //  GPI
    updateSelectValue("ActiveLevelGPI", JSONdata, "GPInputs.ActiveLevel");
    updateListValue("FunctionGPI", JSONdata, "GPInputs.SpecialFunction", "Other");
    updateNumericValue("StateDurationGPI", JSONdata, "GPInputs.StateDuration", 10, 10, 500);
    updateNumericValue("VoltageThresholdGPI", JSONdata, "GPInputs.VoltageThreshold", 0.7, 0.0, 24.0);

    //  GPO
    updateNumericValue("DutyCycleGPO", JSONdata, "GPOut.DutyCycle", 60, 10, 100);
    updateNumericValue("FrequencyGPO", JSONdata, "GPOut.Frequency", 1, 1, 10);
    updateNumericValue("LengthGPO", JSONdata, "GPOut.Length", 1, 1, 60);
    updateListValue("SourceGPO", JSONdata, "GPOut.Source", "LED");
    generateSignal();

    //Accelerometer
    updateNumericValue("Acc3DDriveTimeFilter", JSONdata, "Acc3DDriveTimeFilter", 5, 3, 30);
    updateNumericValue("Acc3DStopTimeFilter", JSONdata, "Acc3DStopTimeFilter", 3, 1, 30);

    //Photo and Video
    updateNumericValue("photoResolution", JSONdata, "ResolutionOfUploadedImage", 1, 1, 4);
    updateNumericValue("videoResolution", JSONdata, "ResolutionOfUploadedVideo", 1, 1, 4);
    updateSelectValue("videoOverlay", JSONdata, "VideoOverlay.Enable");
    updateListValue("timeSource", JSONdata, "VideoOverlay.TimeSource", "UTC");
    updateNumericValue("timeBeforeEvent", JSONdata, "EventVideoLen.Before", 5, 0, 60);
    updateSelectValue("micStatus", JSONdata, "MicStatus");
    updateNumericValue("timeAfterEvent", JSONdata, "EventVideoLen.After", 5, 0, 60);
    updateNumericValue("VideostoStorage", JSONdata, "VideosStorageNumber", 500, 0, 1000);
    updateNumericValue("EventstoStorage", JSONdata, "EventsStorageNumber", 1000, 0, 5000);
    updateSelectValue("SDcardEncryption", JSONdata, "SDCardSettings.EncryptSDCard");
    updateNumericValue("ContRecording", JSONdata, "ContRecording", 8, 0, 512);

    //Main button settings
    updateSelectValue("DeviceTurnOnEnable", JSONdata, "MainButtonSettings.DeviceTurnOnEnable");
    updateSelectValue("SelfEventTriggerEnable", JSONdata, "MainButtonSettings.SelfEventTriggerEnable");

    //Additional Configuration
    updateNumericValue("CalibrationTimeout", JSONdata, "ExtraParameters.Calibration.Timeout", 30, 10, 60);
    updateNumericValue("WiFiTO", JSONdata, "WiFiTO", 5, 5, 300);
    updateNumericValue("SleepModeTO", JSONdata, "SleepModeTO", 5, 0, 255);
    updateNumericValue("GsensorWakeThreshold", JSONdata, "ExtraParameters.GSensorWakeThreshold", 30, 2, 63);
    updateSelectValue("OTAUpdateEnable", JSONdata, "ExtraParameters.OTAupdateEnable");
}

//Updating Check Boxes
function updateCheckBox_fromJSON(JSONdata){
    // CheckBoxes
    updateCheckBoxValue("AsleepOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.Asleep");
    updateCheckBoxValue("DriverDistractedOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.DriverDistracted");
    updateCheckBoxValue("DrowsinessOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.Drowsiness");
    updateCheckBoxValue("FCWOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.FCW");
    updateCheckBoxValue("LDWOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.LDW");
    //updateCheckBoxValue("LightDrowsinessOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.LightDrowsiness");
    updateCheckBoxValue("PCWOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.PCW");
    updateCheckBoxValue("PhoneUseOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.PhoneUse");
    updateCheckBoxValue("SeatbeltOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.Seatbelt");
    updateCheckBoxValue("SmokingOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.Smoking");
    updateCheckBoxValue("HMWOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.Tailgating");
    updateCheckBoxValue("UFCWOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.UFCW");

}

//Checking Hybrid Configs
function updateSelectedValuebasedOnCheckbox(selectId, checkboxId, JSONdata, propertyPath, defaultOption) {
    var selectElement = document.getElementById(selectId);
    var checkboxElement = document.getElementById(checkboxId);

    var propertyValue = getProperty(JSONdata, propertyPath);

    if (propertyValue !== undefined && isOptionExist(selectElement, propertyValue)) {
        selectElement.value = propertyValue;
        checkboxElement.checked = true;
    } 
    else {
        selectElement.value = defaultOption;
        checkboxElement.checked = true;
    }
    updateCommunicationsColor(selectElement, selectId);
}

//Hybrid Communications - Updating Communication Settings based on Checkbox and Values
function updatingfromCheckAndCombo_fromJSON(JSONdata){
    // Communication Settings
    updateListValue("CommChannelState", JSONdata, "CommChannelState", "WiFi");
    updateSelectedValuebasedOnCheckbox("Alerts", "AlertsCheckBox", JSONdata, "CommChannelSettings.Alert", "WiFi");
    updateSelectedValuebasedOnCheckbox("Debug", "DebugCheckBox", JSONdata, "CommChannelSettings.Debug", "WiFi");
    updateSelectedValuebasedOnCheckbox("FOTA", "FOTACheckBox", JSONdata, "CommChannelSettings.FOTA", "WiFi");
    updateSelectedValuebasedOnCheckbox("Image_Comm", "ImageCheckBox", JSONdata, "CommChannelSettings.Image", "WiFi");
    updateSelectedValuebasedOnCheckbox("Video_Comm", "VideoCheckBox", JSONdata, "CommChannelSettings.Video", "WiFi");
    updateSelectValue("DuplicateMsgOverRS232", JSONdata, "DuplicateMsgOverRS232");
}

//Checking WiFi Networks in the device
function updateTextBoxValuebasedOnCheckbox(WiFi_Network_SSID, WiFi_Network_Password, WiFi_Network_check, JSONdata, networksPath, index) {
    // Get the networks array from the JSON data based on the provided networksPath
    var networks = getPropertyValue(JSONdata, networksPath);

    // Function to convert undefined to null
    function undefinedToNull(value) {
        return value === undefined ? null : value;
    }

    // If the index is 0, it means we are updating the first network in the Networks array
    if (index === 0) {
        var ssid = undefinedToNull(getPropertyValue(JSONdata, "WifiSettings.SSID"));
        var password = undefinedToNull(getPropertyValue(JSONdata, "WifiSettings.Password"));

        // Check if the Networks array is empty or the first network doesn't have an SSID
        if (!networks || !networks[index] || networks[index].SSID === undefined) {
        // Update the textboxes and checkbox with values from WifiSettings
        document.getElementById(WiFi_Network_SSID).value = ssid;
        document.getElementById(WiFi_Network_Password).value = password;
        document.getElementById(WiFi_Network_check).checked = true;
        } 
        else {
        // Update the textboxes and checkbox with values from the first network in Networks
        document.getElementById(WiFi_Network_SSID).value = undefinedToNull(networks[index].SSID);
        document.getElementById(WiFi_Network_Password).value = undefinedToNull(networks[index].Password);
        document.getElementById(WiFi_Network_check).checked = true;
        }
    } 
    else {
        // If the index is not 0, we are updating a network other than the first one

        // Check if the Networks array exists and the network at the specified index has an SSID
        if (networks && networks[index] && networks[index].SSID !== undefined) {
        // Update the textboxes and checkbox with values from the specified network
        document.getElementById(WiFi_Network_SSID).value = undefinedToNull(networks[index].SSID);
        document.getElementById(WiFi_Network_Password).value = undefinedToNull(networks[index].Password);
        document.getElementById(WiFi_Network_check).checked = true;
        }
    }

  // Call the WifiNetworkEnableColor function with the checkbox and textboxes as arguments
    WifiNetworkEnableColor(WiFi_Network_check, WiFi_Network_SSID, WiFi_Network_Password);
}

// Function for hierarchic mode
function getPropertyValue(obj, path) {
    var properties = path.split(".");
    var value = obj;
    for (var i = 0; i < properties.length; i++) {
        if (value.hasOwnProperty(properties[i])) {
            value = value[properties[i]];
        }
        else {
            return undefined;
        }
    }
    return value;
}

//Bring data from Server name
function updatingWiFiNetworksfrom_FS10(JSONdata){
    updateTextBoxValuebasedOnCheckbox("WiFi_Network01_SSID", "WiFi_Network01_Password", "WiFi_Network01_check", JSONdata, "WifiSettings.Networks", 0);
    updateTextBoxValuebasedOnCheckbox("WiFi_Network02_SSID", "WiFi_Network02_Password", "WiFi_Network02_check", JSONdata, "WifiSettings.Networks", 1);
    updateTextBoxValuebasedOnCheckbox("WiFi_Network03_SSID", "WiFi_Network03_Password", "WiFi_Network03_check", JSONdata, "WifiSettings.Networks", 2);
    updateTextBoxValuebasedOnCheckbox("WiFi_Network04_SSID", "WiFi_Network04_Password", "WiFi_Network04_check", JSONdata, "WifiSettings.Networks", 3);
    updateTextBoxValuebasedOnCheckbox("WiFi_Network05_SSID", "WiFi_Network05_Password", "WiFi_Network05_check", JSONdata, "WifiSettings.Networks", 4);
    updateTextBoxValuebasedOnCheckbox("WiFi_Network06_SSID", "WiFi_Network06_Password", "WiFi_Network06_check", JSONdata, "WifiSettings.Networks", 5);
    updateTextBoxValuebasedOnCheckbox("WiFi_Network07_SSID", "WiFi_Network07_Password", "WiFi_Network07_check", JSONdata, "WifiSettings.Networks", 6);
    updateTextBoxValuebasedOnCheckbox("WiFi_Network08_SSID", "WiFi_Network08_Password", "WiFi_Network08_check", JSONdata, "WifiSettings.Networks", 7);
    updateTextBoxValuebasedOnCheckbox("WiFi_Network09_SSID", "WiFi_Network09_Password", "WiFi_Network09_check", JSONdata, "WifiSettings.Networks", 8);
    updateTextBoxValuebasedOnCheckbox("WiFi_Network10_SSID", "WiFi_Network10_Password", "WiFi_Network10_check", JSONdata, "WifiSettings.Networks", 9);
}

// Function to extract "OverlayText" properties
function extractOverlayText(jsonData) {
    var unitID_flag = 0;
    // Check if "VideoOverlay" and "OverlayText" properties exist
    if (jsonData.VideoOverlay && jsonData.VideoOverlay.OverlayText) {
        var overlayTextArray = jsonData.VideoOverlay.OverlayText;
        // Check if the element contains {unitid}
        if (overlayTextArray.length > 0 && overlayTextArray[0].indexOf("{unitid}") !== -1) {
            document.getElementById("Unit_ID_Overlay").value = "true";
            unitID_flag = 1;
            if(overlayTextArray.length > 1 && overlayTextArray[1].trim() !== ""){
                document.getElementById("String_Overlay").value = overlayTextArray[1];
                changeAPNFormat('String_Overlay', 'String Overlay');
            }
            else{
                document.getElementById("String_Overlay").value = "";
                changeAPNFormat('String_Overlay', 'String Overlay');
            }
        }
        // Check if the element contains info
        if (overlayTextArray.length > 0 && overlayTextArray[0].trim() !== "" && unitID_flag === 0) {
            document.getElementById("String_Overlay").value = overlayTextArray[0];
            changeAPNFormat('String_Overlay', 'String Overlay');
            if(overlayTextArray.length > 1 && overlayTextArray[1].indexOf("{unitid}") !== -1){
                document.getElementById("Unit_ID_Overlay").value = "true";
            }
            else{
                document.getElementById("Unit_ID_Overlay").value = "false";
            }
        }
    }
    else {
        //console.log("No OverlayText properties found.");
        document.getElementById("String_Overlay").value = "";
        document.getElementById("Unit_ID_Overlay").value = "false";
        changeAPNFormat('String_Overlay', 'String Overlay');
    } 
}

function extractGPIO_from_JSON(jsonData) {
    const StateGPIO = document.getElementById("StateGPIO");

    if (jsonData.GPIO.State === "In") {
        StateGPIO.value = jsonData.GPIO.State;
    }
    else if (jsonData.GPIO.State === "Out") {
        StateGPIO.value = jsonData.GPIO.State;
    }

    updateGPIOparameters(document.getElementById("StateGPIO"));

    const select1 = document.getElementById("Select_GPIO_1");
    const select2 = document.getElementById("Select_GPIO_2");
    const select3 = document.getElementById("Select_GPIO_3");
    const select4 = document.getElementById("Select_GPIO_4");

    if (jsonData.GPIO.State === "In") {
        selectValueFromJSONProperty(select1, jsonData.GPIO.ActiveLevel, "true");
        selectValueFromJSONProperty(select2, jsonData.GPIO.SpecialFunction, "Other");
        selectValueFromJSONProperty(select3, jsonData.GPIO.StateDuration, "10");
        selectValueFromJSONProperty(select4, jsonData.GPIO.VoltageThreshold, "0.7");
        //console.log("GPIO In");
    }
    else if (jsonData.GPIO.State === "Out") {
        selectValueFromJSONProperty(select1, jsonData.GPIO.DutyCycle, "70");
        selectValueFromJSONProperty(select2, jsonData.GPIO.Frequency, "1");
        selectValueFromJSONProperty(select3, jsonData.GPIO.Length, "5");
        selectValueFromJSONProperty(select4, jsonData.GPIO.Source, "Waveform");
        //console.log("GPIO Out");
    }
}

// Helper function to add an option to a select element with a default value
function selectValueFromJSONProperty(selectElement, jsonDataProperty, defaultValue) {
    if (jsonDataProperty !== undefined && jsonDataProperty !== null) {
        // Check if the JSON property exists and is not null or undefined
        selectElement.value = jsonDataProperty;
    } else if (defaultValue !== undefined && defaultValue !== null) {
        // If JSON property is undefined or null, use the defaultValue if provided
        selectElement.value = defaultValue;
    } else {
        // If neither the JSON property nor a defaultValue is provided, you can handle it here
        // For example, you can select the first option as a default option
        selectElement.selectedIndex = 0;
    }
}

function remove_duplicate_from_menus(){
    //removeDuplicateOptionsAndRestoreSelected(ID_element);
    removeDuplicateOptionsAndRestoreSelected('DriverDisappearTimeThreshold');
    removeDuplicateOptionsAndRestoreSelected('Acc3DDriveTimeFilter');
    removeDuplicateOptionsAndRestoreSelected('Acc3DStopTimeFilter');
    //removeDuplicateOptionsAndRestoreSelected('CalibrationReferencePoint_x');
    //removeDuplicateOptionsAndRestoreSelected('CalibrationReferencePoint_y');
    //removeDuplicateOptionsAndRestoreSelected('CalibrationReferencePoint_z');
    removeDuplicateOptionsAndRestoreSelected('CalibrationTimeout');
    removeDuplicateOptionsAndRestoreSelected('MinSpeedMonitor');
    removeDuplicateOptionsAndRestoreSelected('GPSLossSpeedPersistenceTime');
    removeDuplicateOptionsAndRestoreSelected('DistractionSpeedThreshold');
    removeDuplicateOptionsAndRestoreSelected('DrowsinessSpeedThreshold');
    removeDuplicateOptionsAndRestoreSelected('PhoneSpeedThreshold');
    removeDuplicateOptionsAndRestoreSelected('SeatbeltSpeedThreshold');
    removeDuplicateOptionsAndRestoreSelected('SmokingSpeedThreshold');
    //removeDuplicateOptionsAndRestoreSelected('InstallationHeight');
    //removeDuplicateOptionsAndRestoreSelected('OffsetFromCenter');
    //removeDuplicateOptionsAndRestoreSelected('ActiveLaneSpeedThreshold');
    //removeDuplicateOptionsAndRestoreSelected('HMWSpeedThreshold');
    //removeDuplicateOptionsAndRestoreSelected('TimeToTriggerTailgating');
    //removeDuplicateOptionsAndRestoreSelected('TtcWarningRange');
    //removeDuplicateOptionsAndRestoreSelected('TtcEmergencyRange');
    //removeDuplicateOptionsAndRestoreSelected('FCWSpeedThreshold');
    removeDuplicateOptionsAndRestoreSelected('AsleepOTABackOff');
    removeDuplicateOptionsAndRestoreSelected('DriverDistractedOTABackOff');
    removeDuplicateOptionsAndRestoreSelected('DrowsinessOTABackOff');
    removeDuplicateOptionsAndRestoreSelected('FCWOTABackOff');
    removeDuplicateOptionsAndRestoreSelected('LDWOTABackOff');
    //removeDuplicateOptionsAndRestoreSelected('LightDrowsinessOTABackOff');
    removeDuplicateOptionsAndRestoreSelected('PCWOTABackOff');
    removeDuplicateOptionsAndRestoreSelected('PhoneUseOTABackOff');
    removeDuplicateOptionsAndRestoreSelected('SeatbeltOTABackOff');
    removeDuplicateOptionsAndRestoreSelected('SmokingOTABackOff');
    removeDuplicateOptionsAndRestoreSelected('HMWOTABackOff');
    removeDuplicateOptionsAndRestoreSelected('UFCWOTABackOff');
    removeDuplicateOptionsAndRestoreSelected('CameraStatusBackoffTimer');
    removeDuplicateOptionsAndRestoreSelected('DistractionBackoffTimer');
    removeDuplicateOptionsAndRestoreSelected('DrowsinessBackoffTimer');
    removeDuplicateOptionsAndRestoreSelected('PhoneBackoffTimer');
    removeDuplicateOptionsAndRestoreSelected('SeatbeltBackoffTimer');
    removeDuplicateOptionsAndRestoreSelected('SleepBackoffTimer');
    removeDuplicateOptionsAndRestoreSelected('SmokingBackoffTimer');
    removeDuplicateOptionsAndRestoreSelected('KeepAliveInSec');
    removeDuplicateOptionsAndRestoreSelected('ModemResetHWTimeInMin');
    removeDuplicateOptionsAndRestoreSelected('ModemResetSignalTimeInMin');
    removeDuplicateOptionsAndRestoreSelected('SelfPowerRecycleTimeInMin');
    removeDuplicateOptionsAndRestoreSelected('SocketResetTimeInMin');
    removeDuplicateOptionsAndRestoreSelected('IGNOffInterval');
    removeDuplicateOptionsAndRestoreSelected('IGNOnInterval');
    removeDuplicateOptionsAndRestoreSelected('TimeToWaitGPSFix');
    removeDuplicateOptionsAndRestoreSelected('IGNOffFilter');
    removeDuplicateOptionsAndRestoreSelected('IGNOnFilter');
    removeDuplicateOptionsAndRestoreSelected('GPSFixLossOrRecovery');
    removeDuplicateOptionsAndRestoreSelected('TripPathDistance');
    removeDuplicateOptionsAndRestoreSelected('TripPathTime');
    removeDuplicateOptionsAndRestoreSelected('TripPathHeading');
    removeDuplicateOptionsAndRestoreSelected('VoltageThresholdGPI');
    removeDuplicateOptionsAndRestoreSelected('StateDurationGPI');
    removeDuplicateOptionsAndRestoreSelected('DutyCycleGPO');
    removeDuplicateOptionsAndRestoreSelected('FrequencyGPO');
    removeDuplicateOptionsAndRestoreSelected('LengthGPO');
    removeDuplicateOptionsAndRestoreSelected('timeBeforeEvent');
    removeDuplicateOptionsAndRestoreSelected('timeAfterEvent');
    removeDuplicateOptionsAndRestoreSelected('VideostoStorage');
    removeDuplicateOptionsAndRestoreSelected('EventstoStorage');
    removeDuplicateOptionsAndRestoreSelected('DistractionTurnGraceDuration');
    removeDuplicateOptionsAndRestoreSelected('TrackingGraceTimer');
    removeDuplicateOptionsAndRestoreSelected('DriverChangeMinDuration');
    removeDuplicateOptionsAndRestoreSelected('SeatbeltAlertTime');
    removeDuplicateOptionsAndRestoreSelected('SleepDuration');
    removeDuplicateOptionsAndRestoreSelected('MaxHeadingAngleForEvents');
    removeDuplicateOptionsAndRestoreSelected('WiFiTO');
    removeDuplicateOptionsAndRestoreSelected('SleepModeTO');
    removeDuplicateOptionsAndRestoreSelected('SleepModeTO');
    removeDuplicateOptionsAndRestoreSelected('GsensorWakeThreshold');
    removeDuplicateOptionsAndRestoreSelected('RoadCenterYawPos');
    removeDuplicateOptionsAndRestoreSelected('RoadCenterYawNeg');
    removeDuplicateOptionsAndRestoreSelected('RoadCenterPitchPos');
    removeDuplicateOptionsAndRestoreSelected('RoadCenterPitchNeg');
}

function validateJSON(JSON_customer_code) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(JSON_customer_code);
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    fetch("https://api.cipia-fscloud.com/validate-json", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        document.getElementById("jsonValidation").value = result;
        })
      .catch((error) => {
        console.error(error);
        document.getElementById("jsonValidation").value = error.toString();
        });
}

function updateOnBased_FS10_json() {
    try{
        // Reading from the Cipia-FS10 JSON loaded in the console
        var jsonInput = document.getElementById("jsonInput").value;
        var JSONdata = JSON.parse(jsonInput);

        DMS_menuToUpdate(JSONdata);
        ADAS_menuToUpdate(JSONdata);
        Tracking_menuToUpdate(JSONdata);
        System_w_event_menuToUpdate(JSONdata);
        System_wo_event_menuToUpdate(JSONdata);
        updateComboBox_fromJSON(JSONdata);
        updateCheckBox_fromJSON(JSONdata);
        updateRadioButton_fromJSON(JSONdata);
        updateTextLabel_fromJSON(JSONdata);
        updatingfromCheckAndCombo_fromJSON(JSONdata);
        updatingWiFiNetworksfrom_FS10(JSONdata);
		extractOverlayText(JSONdata);
        extractGPIO_from_JSON(JSONdata);
        validateJSON(JSONdata);
		alert("Successful upload! - Please verify parameters");

        setInitialValues();
		
        remove_duplicate_from_menus()
		
    }
    catch (error) {
        // Display the error message on the screen
        alert("ERROR - Please verify the loaded JSON and its properties");
    }
}

function updateOnBased_FS10_json_init() {
    try{
        // Reading from the Cipia-FS10 JSON loaded in the console
        var jsonInput = document.getElementById("jsonInput").value;
        var JSONdata = JSON.parse(jsonInput);

        DMS_menuToUpdate(JSONdata);
        ADAS_menuToUpdate(JSONdata);
        Tracking_menuToUpdate(JSONdata);
        System_w_event_menuToUpdate(JSONdata);
        System_wo_event_menuToUpdate(JSONdata);
        updateComboBox_fromJSON(JSONdata);
        updateCheckBox_fromJSON(JSONdata);
        updateRadioButton_fromJSON(JSONdata);
        updateTextLabel_fromJSON(JSONdata);
        updatingfromCheckAndCombo_fromJSON(JSONdata);
        updatingWiFiNetworksfrom_FS10(JSONdata);
		extractOverlayText(JSONdata);
        extractGPIO_from_JSON(JSONdata);
        validateJSON(JSONdata);
        setInitialValues();
        remove_duplicate_from_menus()
		
    }
    catch (error) {
        // Display the error message on the screen
    }
}
