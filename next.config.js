// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['pbs.twimg.com']
  },
  experimental: {
    outputStandalone: true,
  },
  publicRuntimeConfig: {
    zoomLinks: {
      "main": "https://postech-ac-kr.zoom.us/j/92723072561?pwd=eTlFOWx2YnFpUnozbUlnNHhJQUhaUT09",
      "club": "https://postech-ac-kr.zoom.us/j/99917418141?pwd=MUU5UTU1RnlYejBjM3BDRGlPS2xRZz09",
      "class-1": "https://postech-ac-kr.zoom.us/j/94848361820?pwd=amlsbUg3Q2U2QVFscVFOZ3N1YUdSdz09",
      "class-1-open": "https://postech-ac-kr.zoom.us/j/96640842337?pwd=Z3J1L3hkN0FibkJqdEUwdDVldUZxQT09",
      "class-2": "https://postech-ac-kr.zoom.us/j/96688081235?pwd=RFdiU2dtOVFlTjZsSTFmYUcyS2hDZz09",
      "class-2-open": "https://postech-ac-kr.zoom.us/j/98744223014?pwd=aFVlU1NSb1AwUktsd3JqYXBXcnovZz09",
      "class-3": "https://postech-ac-kr.zoom.us/j/94058943320?pwd=NXFmZW82WUFwTStJUVRIR0ZJZmZkdz09",
      "class-3-open": "https://postech-ac-kr.zoom.us/j/91566227402?pwd=eGpPdlkvNWl6UVhBWE1lRXlyNitrUT09",
      "class-4": "https://postech-ac-kr.zoom.us/j/91250374094?pwd=a08wZUVjemZXaHpnY3M1T3FRQ3ZLQT09",
      "class-4-open": "https://postech-ac-kr.zoom.us/j/98893229831?pwd=THY4VVpsNzY2OVNFR0RnY09zaHFxUT09",
      "class-5": "https://postech-ac-kr.zoom.us/j/95489725763?pwd=c21HaHhqMDA3RytsT0R2bi93eU9Zdz09",
      "class-5-open": "https://postech-ac-kr.zoom.us/j/99787513293?pwd=VWNQWExYSEFmRG5RYVpNZlBXY2x2UT09",
      "class-6": "https://postech-ac-kr.zoom.us/j/91912870942?pwd=UUtPa3V2Vm8wZkNKazFhNHRjL1ZHZz09",
      "class-6-open": "https://postech-ac-kr.zoom.us/j/98948214160?pwd=K3lUNTBNaGZ6UmY4WmxKVDlEcVdPZz09",
      "class-7": "https://postech-ac-kr.zoom.us/j/99577076014?pwd=T09ZQ1dPaUk3bkpoYjh2REp0YVY3QT09",
      "class-7-open": "https://postech-ac-kr.zoom.us/j/4946340544?pwd=dHhYWjdRU01wUkZXYi9vVjEyS2xuUT09",
      "class-8": "https://postech-ac-kr.zoom.us/j/92787139921?pwd=VENabTB3cjEyQjJQRWhnM0pSQXJYdz09",
      "class-8-open": "https://postech-ac-kr.zoom.us/j/91766136251?pwd=S1lJK3IwT1hRYlMvaGl2L05ka3p6Zz09",
      "class-9": "https://postech-ac-kr.zoom.us/j/96093488563?pwd=MVNaS0MzZ2VsdHRQVk1hUGxRRGpMUT09",
      "class-9-open": "https://postech-ac-kr.zoom.us/j/91826565606?pwd=NGJRZjI5cXhxc0R1SldETjJoUCsxZz09",
      "class-10": "https://postech-ac-kr.zoom.us/j/97177490175?pwd=aHNzb2xHSTRDZDdKZ2dhd250bldEdz09",
      "class-10-open": "https://postech-ac-kr.zoom.us/j/97989104667?pwd=QnAwN2xNUkcydUdPQ1h2SThPZDhrQT09",
      "class-11": "https://postech-ac-kr.zoom.us/j/96521790830?pwd=WFBwclZ6T0ZUTVJZa2ZzU0VscnJvZz09",
      "class-11-open": "https://postech-ac-kr.zoom.us/j/98602202611?pwd=QVZFUHdWVU93L0tIL3VRTUVyY1JEdz09",
      "class-12": "https://postech-ac-kr.zoom.us/j/97688357138?pwd=a0tsNkk3SnF0VTVVRHVtKzhHbWdhQT09",
      "class-12-open": "https://postech-ac-kr.zoom.us/j/93300033700?pwd=cTZrdzI3WGF5OFVuUGhzQXhUbEVDdz09",
      "class-13": "https://us02web.zoom.us/j/82221618081?pwd=d2NKMEZJVlF1NkZDSVpHeG1wbldEUT09",
      "class-13-open": "https://us02web.zoom.us/j/89360737148?pwd=TkhBMytGdWY0aTcyaHl4NkI5Nm9lQT09",
      "class-14": "https://postech-ac-kr.zoom.us/j/91602076785?pwd=QUNTR0tHU1I2VmRNMU1Oc2tIMkhhQT09",
      "class-14-open": "https://postech-ac-kr.zoom.us/j/94360973044?pwd=YXJudG9oQ1NtRDYwcTVJZFpiNEFHZz09",
      "class-15": "https://postech-ac-kr.zoom.us/j/93768977884?pwd=R1FmUnc3RUdFVmh4TWJhbHNZeVFOZz09",
      "class-15-open": "https://postech-ac-kr.zoom.us/j/91480393360?pwd=WDh3TkthZkhuQmkzVTd4TktPaHQ2QT09",
    }
  },
  staticPageGenerationTimeout: 60 * 10,
})
