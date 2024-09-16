import IMediaPlayer from "./IMediaPlayer";

export default class MacOSMediaPlayer implements IMediaPlayer {
    playAudio(filePath: string): void {
        console.log('playing audio on Mac');
    }
    playVideo(filePath: string): void {
        console.log('showing video on Mac');
    }
}