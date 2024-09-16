import IRunner from "../IRunner";
import CrappyFileOpenerer from "./CrappyFileOpener";
import FancyFileOpenerer from "./FancyFileOpener";
import MacOSMediaPlayer from "./MacOSMediaPlayer";
import WindowsMediaPlayer from "./WindowsMediaPlayer";

export default class Runner implements IRunner{
    run(exampleNumber: number=1){
        //User has choosen a nice file opener on Windows
        if(exampleNumber === 1){
            const opener = new FancyFileOpenerer(new WindowsMediaPlayer());

            opener.openFile('music.mp3');
        }

        //User has choosen a bad file opener on Mac
        if(exampleNumber === 2){
            const opener = new CrappyFileOpenerer(new MacOSMediaPlayer());

            opener.openFile('video.mp4');
        }
    }
}