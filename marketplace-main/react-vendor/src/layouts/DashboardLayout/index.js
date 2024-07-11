import { useLocation, Outlet } from "react-router-dom";
import { MobileNav, SideNav, TopNav } from "./components"
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { getSections } from "./config";
import { useSettings } from 'context/useSettings';
import styled from "@emotion/styled";

const SIDE_NAV_WIDTH = 280;

const useMobileNav = () => {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const handlePathnameChange = useCallback(() => {
        if (isOpen) {
            setIsOpen(false);
        }
    }, [isOpen]);

    useEffect(() => {
        handlePathnameChange();
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [pathname]);

    const handleOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    return {
        isOpen,
        handleOpen,
        handleClose
    };
};

const VerticalLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    [theme.breakpoints.up('lg')]: {
        paddingLeft: SIDE_NAV_WIDTH
    }
}));

const VerticalLayoutContainer = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    width: '100%',
});

const DashboardLayout = (props) => {
    const { children, navColor } = props;
    const sections = getSections()
    const mobileNav = useMobileNav();
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const settings = useSettings();

    return (
        <>
            <TopNav onMobileNavOpen={mobileNav.handleOpen} />
            {lgUp && (
                <SideNav
                    color={settings.navColor}
                    sections={sections}
                />
            )}
            {!lgUp && (
                <MobileNav
                    color={navColor}
                    onClose={mobileNav.handleClose}
                    open={mobileNav.isOpen}
                    sections={sections}
                />
            )}
            <VerticalLayoutRoot>
                <VerticalLayoutContainer>
                    <Outlet />
                </VerticalLayoutContainer>
            </VerticalLayoutRoot>
        </>
    )
}

export default DashboardLayout