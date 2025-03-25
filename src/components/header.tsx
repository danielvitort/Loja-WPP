import { CartSidebar } from "./cart/sidebar"
import { Logo } from "./logo"
import { ThemeToggle } from "./theme-toggle"

export const Header = () => {
    return (
        <div className="flex justify-between items-center my-5 mx-3">
            <div className="flex items-center gap-3">
                <Logo />
            </div>
            <div className="flex items-center gap-3">
                <ThemeToggle />
                <CartSidebar />
            </div>
        </div>
    )
}