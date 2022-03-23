
const model;
const segmenterConfig;

const video = document.getElementById('video');
const people = await segmenter.segmentPeople(video);

async function init() {
    model = bodySegmentation.SupportedModels.MediaPipeSelfieSegmentation; // or 'BodyPix'
    segmenterConfig = {
    runtime: 'mediapipe', // or 'tfjs'
    modelType: 'general' // or 'landscape'
};

segmenter = await bodySegmentation.createSegmenter(model, segmenterConfig);
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
    } catch (e) {
        errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
    }
}


init();