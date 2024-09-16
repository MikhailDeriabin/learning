import FileOpenerAbstract from "./FileOpenerAbstract";
import IMediaPlayer from "./IMediaPlayer";

export default class CrappyFileOpenerer extends FileOpenerAbstract {
    constructor(player: IMediaPlayer) {
        super(player);
    }

    openFile(filePath: string): void {
        console.log('Opening a buggy and shitty UI');
        const isAudio = filePath.includes('mp3');

        if(isAudio)
            return super.player.playAudio(filePath);

        super.player.playVideo(filePath);
    }
}