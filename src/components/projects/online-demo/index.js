import YoutubeEmbed from "../../core/youtube"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../github-project/github-project.scss'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

export function OnlineDemo() {
    return (
        <div className='project-container'>
            <div>
                <div className='card-header'>
                    <div className='project-icon'>
                        <div className='btn' onClick={() => { window.open("https://www.youtube.com/watch?v=Y4YbVcsGGQk", "_blank") }}>
                            <FontAwesomeIcon icon={faLaptopCode} />
                        </div>
                    </div>
                    <YoutubeEmbed embedId="Y4YbVcsGGQk" ></YoutubeEmbed>
                    <div>

                        Cooperation with Cisco Systems,
                        Many secure systems use flash memory, based on the SPI-flash standard, to store their code. During the boot sequence, the code in the flash memory will first be verified to be cryptographically signed, and then be executed in place. If the code is replaced with malicious code immediately after it is verified, there is potential for a Time of Check/Time of Use attack on the system.
                        we build a prototype of the “Malicious SPI” that exploiting this weakness on BeagalBoard-X15 And beagle bone black
                    </div>
                </div>
            </div>
        </div>
    )
}
