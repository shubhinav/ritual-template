import './Header.css'

export default function Header(){
    return(
        <header>
            <div className="header-top-border"></div>
            <nav className="nav-bar container">
                <ul className="nav-items-list">
                    <li className="nav-item">
                        <button className="nav-menu-btn">Menu</button>
                    </li>
                    <li className="nav-item nav-item-second">
                        <button className="nav-logo">Ritual</button>
                    </li>
                    <li className="nav-item nav-item-third">
                        <button>Who We Are</button>
                    </li>
                    <li className="nav-item nav-item-fourth">
                        <button>
                            <svg className="path" width={20} height={20} version="1.1" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd" stroke="none" strokeWidth={1}><g><rect width={24} height={24} x={0} y={0} fill="#FFF" fillOpacity={0} /><path stroke="#142B6F" strokeLinejoin="round" strokeWidth={2} d="M20.5,6.5 L20.5,23 L4,23 L4,6.5 L20.5,6.5 Z M12.25,1 C14.5281746,1 16.375,2.84682541 16.375,5.125 C16.375,5.43937389 16.3000569,5.88826911 16.1501708,6.47168566 C11.4355784,6.44324758 8.85377775,6.42767434 8.40476894,6.42496595 L8.33387282,6.42453831 C8.33387282,6.42453831 8.125,5.57904881 8.125,5.125 C8.125,2.84682541 9.97182541,1 12.25,1 Z" /></g></g></svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}