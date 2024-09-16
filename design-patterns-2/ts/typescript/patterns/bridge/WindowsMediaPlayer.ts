import IMediaPlayer from "./IMediaPlayer";

export default class WindowsMediaPlayer implements IMediaPlayer {
    playAudio(filePath: string): void {
        console.log('playing audio on HP PC');
    }
    playVideo(filePath: string): void {
        console.log('showing video on HP PC');
    }
}