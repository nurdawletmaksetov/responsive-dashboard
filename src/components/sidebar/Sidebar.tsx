import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { useEffect, useRef, type Dispatch, type SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mantine/hooks";

type Props = {
    language: string;
    isMenuToggled: boolean;
    setIsMenuToggled: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ isMenuToggled, setIsMenuToggled }: Props) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const { t } = useTranslation();
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuToggled(false);
            }
        };

        if (isMenuToggled) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuToggled]);

    const links = [
        "dashboard",
        "documents",
        "rag",
        "forecast",
        "complaints",
        "verification",
        "settings"
    ];

    return (
        <>
            {!isMobile && (
                <div className="flex flex-col gap-5 text-sm md:text-xl px-10 py-5 border-r border-text h-screen">
                    {links.map((key) => (
                        <NavLink
                            key={key}
                            // className={({ isActive }) =>
                            //     isActive ? "bg-active-background px-5 py-1 rounded-md" : ""
                            // }
                            to="/"
                        >
                            {t(key)}
                        </NavLink>
                    ))}
                </div>
            )}
            {isMobile && isMenuToggled && (
                <div
                    ref={menuRef}
                    className="fixed shadow-2xl left-0 top-0 bg-background z-40 w-[200px] flex flex-col gap-5 text-sm px-5 py-2.5 border-r border-text h-screen"
                >
                    <div className="flex items-center justify-between">
                        <p>Menu</p>
                        <button onClick={() => setIsMenuToggled(false)}>
                            <X size={18} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-5 text-sm">
                        {links.map((key) => (
                            <NavLink
                                key={key}
                                to="/"
                                onClick={() => setIsMenuToggled(false)}
                            >
                                {t(key)}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Sidebar;
