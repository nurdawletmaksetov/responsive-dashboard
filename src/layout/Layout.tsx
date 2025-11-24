import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { Container } from "../container/container";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Layout = () => {
    const { i18n } = useTranslation();

    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const [currentLanguage, setCurrentLanguage] = useState<string>(i18n.language);

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
        setCurrentLanguage(lang);
    };

    return (
        <div className="flex flex-col w-full">
            <Header
                onLanguageChange={handleLanguageChange}
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
            />

            <div className="flex">
                <Sidebar
                    language={currentLanguage}
                    isMenuToggled={isMenuToggled}
                    setIsMenuToggled={setIsMenuToggled}
                />

                <Container>
                    <Outlet />
                </Container>
            </div>
        </div>
    );
};

export default Layout;
