import React from "react";

export const Footer = () => {
    return (
        <div className="footer">
            <h1>Contactanos</h1>
            <ul>
                <li className="link_ig">
                    <box-icon name="instagram" type="logo"></box-icon>
                    <a href="https://www.speedocolombia.com" target="_blank">Speedo Colombia</a></li>
                <li>
                    <box-icon name="mail-send" ></box-icon>
                    <p>ventas@nadar.com.co</p></li>
                <li>
                    <box-icon name="whatsapp" type="logo"></box-icon>
                    <p>+57 4 6049467</p></li>

            </ul>

        </div>
    )
}