
import Logo from "./Logo";

const Header = () => {
    return (
        <div>
            <header className="bg-slate-800">
                    <div className="flex h-28 shrink-8 items-end md:h-52 p-18 w-4/5 mx-auto">
                     <Logo />
                    </div>
                  </header>
        </div>
    );
};

export default Header;