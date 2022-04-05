import { datadogLogs } from "@datadog/browser-logs";

export function initializeDataDogLog() {
  datadogLogs.init({
    clientToken: "7d0dd0052d74dcf17acd6ebb3c4d96bb",
    site: "datadoghq.com",
    forwardErrorsToLogs: true,
    sampleRate: 100,
  });
}
