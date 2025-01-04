"use client"
import { useEffect } from 'react';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */

const TelegramLogin = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://telegram.org/js/telegram-widget.js?19";
        script.async = true;
        script.setAttribute("data-telegram-login", "your_bot_username");
        script.setAttribute("data-size", "large");
        script.setAttribute("data-auth-url", "/api/auth");
        script.setAttribute("data-request-access", "write");
        document.getElementById('telegram-login').appendChild(script);
    }, []);

    return <div id="telegram-login"></div>;
};

export default TelegramLogin;
