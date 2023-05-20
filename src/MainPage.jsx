import { Outlet } from "react-router-dom";
export function MainPage() {
    return (
        <div>
            <h1>MainPage</h1>
            <Outlet></Outlet>
        </div>
    )
}