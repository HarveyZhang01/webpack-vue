var loginUrl = "https://52.83.72.175:3014";
//"https://ivcs-demo.zealcomm.cn";

const maxUploadFileSize = 1024000 * 50;

const defaultMediaOptions = {
  cameraStreamAudioConstraints: {
    deviceId: undefined,
    source: "mic",
  },
  cameraStreamVideoConstraints: {
    deviceId: undefined,
    frameRate: 15,
    resolution: {
      width: 640,
      height: 480,
    },
    source: "camera",
  },
  cameraPublishOptions: {
    audio: [
      {
        codec: {
          name: "opus",
        },
        maxBitrate: 64,
      },
    ],
    video: [
      {
        codec: {
          name: "vp8",
        },
        maxBitrate: 1024,
      },
      {
        codec: {
          name: "h264",
        },
        maxBitrate: 1024,
      },
    ],
  },
  screenStreamAudioConstraints: {
    source: "screen-cast",
  },
  screenStreamVideoConstraints: {
    frameRate: 15,
    resolution: {
      width: 1280,
      height: 720,
    },
    source: "screen-cast",
  },
  screenPublishOptions: {
    audio: [
      {
        codec: {
          name: "opus",
        },
        maxBitrate: 64,
      },
    ],
    video: [
      {
        codec: {
          name: "vp8",
        },
        maxBitrate: 1024,
      },
      {
        codec: {
          name: "h264",
        },
        maxBitrate: 1024,
      },
    ],
  },
};

const defaultLocalStreamParameter = {
  audioConstraints: {
    deviceId: undefined,
    source: "mic",
  },
  videoConstraints: {
    deviceId: undefined,
    frameRate: 15,
    resolution: {
      width: 640,
      height: 480,
    },
    source: "camera",
  },
  publishOptions: {
    audio: [
      {
        codec: {
          name: "opus",
        },
      },
    ],
    video: [
      {
        codec: {
          name: "vp8",
        },
        maxBitrate: 1024,
      },
      {
        codec: {
          name: "h264",
        },
        maxBitrate: 1024,
      },
    ],
  },
};

const defaultScreenStreamParameter = {
  audioConstraints: {
    source: "screen-cast",
  },
  videoConstraints: {
    frameRate: 15,
    resolution: {
      width: 1280,
      height: 720,
    },
    source: "screen-cast",
  },
  publishOptions: {
    audio: [
      {
        codec: {
          name: "opus",
        },
      },
    ],
    video: [
      {
        codec: {
          name: "vp8",
        },
        maxBitrate: 1024,
      },
      {
        codec: {
          name: "h264",
        },
        maxBitrate: 1024,
      },
    ],
  },
};
