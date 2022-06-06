import { Fragment } from "react";

import Header from "components/Common/Header";
import Footer from "components/Common/Footer";
import Topbar from "components/Common/Topbar";
import Container from "components/Common/Container";

interface LayoutProps{
    children: React.ReactNode
}

export default function MainLayout( {children}: LayoutProps ) {

    return (
        <Fragment>
            <Topbar />
            <Header />
                {children}
            <Container />
            <Footer />
        </Fragment>
    )
}