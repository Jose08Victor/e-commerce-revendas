import { Logo } from "./style";

export const HeaderLogo = () => {
    return (
        <a href="/">
            <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240">
                <defs>
                    <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop className="stop-1" offset="0%" />
                        <stop className="stop-2" offset="100%" />
                    </linearGradient>

                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow className="shadow" dx="0" dy="4" stdDeviation="4" />
                    </filter>
                </defs>

                <circle className="circle-1" filter="url(#shadow)" cx="100" cy="98" r="90" />

                <text className="text-1" filter="url(#shadow)" x="50%" y="41%" dy=".35em" >MC</text>

                <text className="text-2" x="50%" y="99%" >Marlene Cosméticos</text>
            </Logo>
        </a>
    )
};

export const BagSvg = () => {
    
}