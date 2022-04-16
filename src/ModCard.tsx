import Badge from "./Badge"
import Button from "./Button"
import { Icon } from "./Icon"
import './ModCard.css'

export const ModCard = ({ modName, modImage = `https://via.placeholder.com/640x360.png?text=${modName}`, modDescription, modVersion, mcVersion, downloadLink, guideLink }: { modName: string, modImage?: string, modDescription: string, modVersion: string, mcVersion: string, downloadLink: string, guideLink: string }) => {
    return (
        <div className="mod_card">
            <div className="mod_card_thumb_wrapper">
                <img className="mod_card_thumb" alt={modName} src={modImage} />
                <figcaption className="mod_card_caption">
                    {modName}
                </figcaption>
            </div>
            <div className="mod_card_body">
                <p className="mod_card_description">{modDescription}</p>
                <Button icon={<Icon icon="download" />} href={downloadLink} no_margin_x><p><Badge>{mcVersion}</Badge>Скачать<Badge>{modVersion}</Badge></p></Button>
                <Button icon={<Icon icon="document" />} href={guideLink} no_margin_x><p>Инструкция для установки</p></Button>
            </div>
        </div>
    )
}