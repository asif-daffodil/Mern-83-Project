import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const MainMenu = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.body.classList.remove("dark");
            sessionStorage.setItem("darkMode", "false");
        } else {
            document.body.classList.add("dark");
            sessionStorage.setItem("darkMode", "true");
        }
    };

    useEffect(() => {
        const darkMode = sessionStorage.getItem("darkMode");
        if (darkMode === "true") {
            setIsDarkMode(true);
            document.body.classList.add("dark");
        }
    }, []);

    return (
        <div className="bg-stone-200 dark:bg-stone-600">
            <div className="container mx-auto navbar text-stone-600 dark:text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-stone-200 dark:bg-neutral rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/sign-in">Sign-in</NavLink>
                            </li>
                            <li>
                                <NavLink to="/sign-up">Sign-up</NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Project-83</a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink to="/" >Home</NavLink></li>
                            <li>
                                <details>
                                    <summary>Parent</summary>
                                    <ul className="p-2 bg-stone-200 dark:bg-neutral rounded-sm w-max">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <NavLink to="/sign-in" >Sign-in</NavLink>
                            </li>
                            <li>
                                <NavLink to="/sign-up" >Sign-up</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <FontAwesomeIcon icon={faCartShopping} />
                                <span className="badge badge-xs indicator-item">8</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-stone-200 dark:bg-neutral z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-stone-200 dark:bg-neutral rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul
                            tabIndex={0}
                            className="menu">
                            {isDarkMode ? (
                                <li>
                                    <a onClick={() => toggleDarkMode()} >
                                        <FontAwesomeIcon icon={faSun} />
                                    </a>
                                </li>
                            ) : (
                                <li>
                                    <a onClick={() => toggleDarkMode()}>
                                        <FontAwesomeIcon icon={faMoon} />
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;