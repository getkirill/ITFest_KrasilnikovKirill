import './Button.css'

export const Button = ({ icon, href = "#", children, color = "default", no_margin_x, full }: { icon?: React.ReactNode, href?: string, children?: React.ReactNode, color?: 'default' | 'vk' | 'discord' | 'telegram', no_margin_x?: boolean, full?: boolean }) => {
    return (
        <a className={`button button-color-${color}${no_margin_x ? " button-no-margin-x" : ''}${full? " button-full" : ""}${icon ? " flex flex-nowrap flex-justify-left flex-items-center button-full-children" : ""}`} href={href}>{icon}{children}</a>
    )
}

export default Button;