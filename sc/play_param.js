
const play_param = [
    {
        url: 'https://storage.googleapis.com/wvmedia/2020/cenc/h264/llama/24/llama.mpd',
        license: 'https://proxy.uat.widevine.com/proxy?provider=widevine_test&video_id=GTS_CAN_RENEW',
        result: 'Playback for 60 seconds<br>Continuous Audio/Video Progress<br>No Exceptions<br>No Usage*',
        title: '1. RenewalNoUsage',
        index: 1
    },
        {
        url: 'https://storage.googleapis.com/wvmedia/2020/cenc/h264/llama/24/llama.mpd',
        license: 'https://proxy.uat.widevine.com/proxy?provider=widevine_test&video_id=GTS_HW_SECURE_CRYPTO',
        result: 'Playback successful regardless of HDCP settings.',
        title: '2. L1PlayHDCPNotSpecified',
        index: 2
    },
    {
        url: 'https://storage.googleapis.com/wvmedia/2020/cenc/h264/llama/24/llama.mpd',
        license: 'https://proxy.uat.widevine.com/proxy?provider=widevine_test&video_id=GTS_HW_SECURE_CRYPTO_HDCP_V1',
        result: 'Playback successful if current HDCP connection is V1 or higher.<br>Otherwise, expect:<br>CryptoException.ERROR_INSUFFICIENT_OUTPUT_PROTECTION',
        title: '3. L1PlayHDCPV1Required',
        index: 3
    },
    {
        url: 'https://storage.googleapis.com/wvmedia/2020/cenc/h264/llama/24/llama.mpd',
        license: 'https://proxy.uat.widevine.com/proxy?provider=widevine_test&video_id=GTS_HW_SECURE_CRYPTO_HDCP_V2',
        result: 'Playback successful if current HDCP connection is V2 or higher.<br>Otherwise, expect:<br>CryptoException.ERROR_INSUFFICIENT_OUTPUT_PROTECTION',
        title: '4. L1PlayHDCPV2Required',
        index: 4
    },
    {
        url: 'https://storage.googleapis.com/wvmedia/2020/cenc/h264/llama/24/llama.mpd',
        license: 'https://proxy.uat.widevine.com/proxy?provider=widevine_test&video_id=GTS_HW_SECURE_CRYPTO_HDCP_V2_1',
        result: 'Playback successful if current HDCP connection is V2_1 or higher.<br>Otherwise, expect:<br>CryptoException.ERROR_INSUFFICIENT_OUTPUT_PROTECTION',
        title: '5. L1PlayHDCPV2_1Required',
        index: 5
    },
    {
        url: 'https://storage.googleapis.com/wvmedia/2020/cenc/h264/llama/24/llama.mpd',
        license: 'https://proxy.uat.widevine.com/proxy?provider=widevine_test&video_id=GTS_HW_SECURE_CRYPTO_HDCP_V2_2',
        result: 'Playback successful if current HDCP connection is V2_2 or higher.<br>Otherwise, expect:<br>CryptoException.ERROR_INSUFFICIENT_OUTPUT_PROTECTION',
        title: '6. L1PlayHDCPV2_2Required',
        index: 6
    },
    {
        url: 'https://storage.googleapis.com/wvmedia/2020/cenc/h264/llama/24/llama.mpd',
        license: 'https://proxy.uat.widevine.com/proxy?provider=widevine_test&video_id=GTS_HW_SECURE_CRYPTO_HDCP_V2_3',
        result: 'Playback successful if current HDCP connection is V2_3 or higher.<br>Otherwise, expect:<br>CryptoException.ERROR_INSUFFICIENT_OUTPUT_PROTECTION',
        title: '7. L1PlayHDCPV2_3Required',
        index: 7
    },
    {
        url: 'https://storage.googleapis.com/wvmedia/2020/cenc/h264/llama/24/llama.mpd',
        license: 'https://proxy.uat.widevine.com/proxy?provider=widevine_test&video_id=GTS_HW_SECURE_CRYPTO_HDCP_NONE',
        result: 'Playback successful regardless of HDCP settings.',
        title: '8. L1PlayHDCPNotRequired',
        index: 8
    },
    {
        url: 'https://storage.googleapis.com/wvmedia/2020/cenc/h264/llama/24/llama.mpd',
        license: 'https://proxy.uat.widevine.com/proxy?provider=widevine_test&video_id=GTS_HW_SECURE_CRYPTO_HDCP_NO_DIGITAL_OUTPUT',
        result: 'Playback successful if no HDCP connections (local playback only).<br>Otherwise, expect:<br>CryptoException.ERROR_INSUFFICIENT_OUTPUT_PROTECTION',
        title: '9. L1PlayHDCPNoDigitalOutput',
        index: 9
    },
    {
        url: 'https://storage.googleapis.com/wvmedia/2019/cenc/h264/entitlement/llama.mpd',
        license: 'https://proxy.uat.widevine.com/proxy?provider=widevine_test',
        result: 'Playback for 60 seconds<br>Continuous Audio/Video Progress<br>No Exceptions',
        title: '10. EntitlementLicense',
        index: 10
    }
];
