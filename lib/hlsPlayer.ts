/**
 * HLS Player Helper
 * Provides HLS.js support for streaming OnlineRadioBox HLS streams
 */

import Hls from 'hls.js';

export interface HLSPlayerConfig {
  audioElement: HTMLAudioElement;
  streamUrl: string;
  onError?: (error: any) => void;
  onLoaded?: () => void;
}

export class HLSPlayer {
  private hls: Hls | null = null;
  private audioElement: HTMLAudioElement;
  private streamUrl: string;

  constructor(config: HLSPlayerConfig) {
    this.audioElement = config.audioElement;
    this.streamUrl = config.streamUrl;

    if (this.isHLSStream(config.streamUrl)) {
      this.initHLS(config);
    } else {
      // Regular MP3/AAC stream
      this.audioElement.src = config.streamUrl;
    }
  }

  private isHLSStream(url: string): boolean {
    return url.includes('.m3u8') || url.includes('listen.m3u8');
  }

  private initHLS(config: HLSPlayerConfig): void {
    // Check if HLS is supported
    if (Hls.isSupported()) {
      this.hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 90,
      });

      this.hls.loadSource(this.streamUrl);
      this.hls.attachMedia(this.audioElement);

      this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log('HLS manifest loaded successfully');
        config.onLoaded?.();
      });

      this.hls.on(Hls.Events.ERROR, (event, data) => {
        console.error('HLS error:', data);
        if (data.fatal) {
          config.onError?.(data);
        }
      });
    } else if (this.audioElement.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari)
      console.log('Using native HLS support');
      this.audioElement.src = this.streamUrl;
      config.onLoaded?.();
    } else {
      console.error('HLS not supported in this browser');
      config.onError?.({ type: 'HLS_NOT_SUPPORTED' });
    }
  }

  updateSource(streamUrl: string): void {
    this.streamUrl = streamUrl;

    if (this.isHLSStream(streamUrl)) {
      if (this.hls) {
        this.hls.loadSource(streamUrl);
      } else {
        this.audioElement.src = streamUrl;
      }
    } else {
      // Regular stream
      if (this.hls) {
        this.hls.destroy();
        this.hls = null;
      }
      this.audioElement.src = streamUrl;
    }
  }

  destroy(): void {
    if (this.hls) {
      this.hls.destroy();
      this.hls = null;
    }
  }
}

export function createHLSPlayer(config: HLSPlayerConfig): HLSPlayer {
  return new HLSPlayer(config);
}
