import { Outlet } from "react-router-dom"
import Sidebar from "../sidebar/Sidebar"

function Layout() {
    return (
        <>
            <Sidebar />
            <div className="ml-[200px]">
                <Outlet />
            </div>
        </>
    )
}

export default Layout