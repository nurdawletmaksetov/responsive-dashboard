import { BellRing, Languages, MenuIcon } from "lucide-react"
import { Button, Menu } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mantine/hooks";

type Props = {
    isMenuToggled: boolean;
    setIsMenuToggled: React.Dispatch<React.SetStateAction<boolean>>;
    onLanguageChange: (lang: string) => void;
};

const languages = [
    { value: "kk", label: "QARAQALPAQ" },
    { value: "ru", label: "РУССКИЙ" },
    { value: "en", label: "ENGLISH" },
    { value: "uz", label: "UZBEK" },
];

const Header = ({ isMenuToggled, setIsMenuToggled, onLanguageChange }: Props) => {
    const { t, i18n } = useTranslation();
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div className="px-5 md:px-10 flex justify-between items-center py-2.5 md:py-5 border-b border-text">
            {isMobile && (
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <MenuIcon className="text-text" size={18} />
                </button>
            )}

            <h1 className="text-sm xs:text-2xl md:text-3xl">ASQOT AI</h1>

            <div className="flex items-center gap-2.5 sm:gap-5">
                <Menu shadow="md" width={140}>
                    <Menu.Target>
                        <Button variant="transparent" p={4}>
                            <Languages color="#000" size={20} />
                        </Button>
                    </Menu.Target>

                    <Menu.Dropdown>
                        {languages.map((lang) => (
                            <Menu.Item
                                key={lang.value}
                                onClick={() => {
                                    i18n.changeLanguage(lang.value);
                                    onLanguageChange(lang.value);
                                }}
                            >
                                {lang.label}
                            </Menu.Item>
                        ))}
                    </Menu.Dropdown>
                </Menu>

                <p className="text-sm md:text-xl text-text">{t("profile")}</p>

                <div className="flex items-center gap-5">
                    {isMobile ? (
                        <BellRing className="text-text" size={18} />
                    ) : (
                        <p className="text-sm md:text-xl text-text">{t("notification")}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
