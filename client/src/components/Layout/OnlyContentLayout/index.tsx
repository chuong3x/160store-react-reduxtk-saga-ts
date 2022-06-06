import { Fragment} from 'react'

interface LayoutProps{
    children: React.ReactNode
}

export default function OnlyContentLayout( {children}: LayoutProps ) {
    return (<Fragment>
        {children}
    </Fragment>)
}