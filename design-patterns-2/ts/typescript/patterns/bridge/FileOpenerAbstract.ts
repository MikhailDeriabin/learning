import IMediaPlayer from "./IMediaPlayer";

export default abstract class FileOpenerAbstract{
    constructor(protected readonly player: IMediaPlayer) {}

    abstract openFile(filePath: string): void;
}