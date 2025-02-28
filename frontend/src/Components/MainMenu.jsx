import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebaseConfig";

const MainMenu = () => {
    const [user] = useAuthState(auth);
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
        if (user && !user.displayName) {
            // Optionally re-fetch the user profile from Firebase if displayName is not set
            auth.currentUser.reload().then(() => {
                console.log("User data reloaded:", auth.currentUser);
            });
        }
    }, [user]);

    return (
        <div className="bg-white dark:bg-neutral">
            <div className="container mx-auto navbar text-black dark:text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content dark:bg-neutral bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/" className={`text-[#121212] dark:text-white`} >Home</NavLink></li>
                            <li className={`text-[#121212] dark:text-white`}>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li className={`text-[#121212] dark:text-white`}><a>Submenu 1</a></li>
                                    <li className={`text-[#121212] dark:text-white`}><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/sign-in" className={`text-[#121212] dark:text-white`}>Sign-in</NavLink>
                            </li>
                            <li>
                                <NavLink to="/sign-up" className={`text-[#121212] dark:text-white`}>Sign-up</NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Project-83</a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 ">
                            <li className={`text-[#121212] dark:text-white`}><NavLink to="/" className={`text-[#121212] dark:text-white`} >Home</NavLink></li>
                            <li>
                                <details>
                                    <summary className={`text-[#121212] dark:text-white`} >Parent</summary>
                                    <ul className="p-2 bg-stone-200 dark:bg-neutral rounded-sm w-max">
                                        <li className={`text-[#121212] dark:text-white`} ><a>Submenu 1</a></li>
                                        <li className={`text-[#121212] dark:text-white`} ><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            {!user && (
                                <>
                                    <li>
                                        <NavLink to="/sign-in" className={`text-[#121212] dark:text-white`} >Sign-in</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/sign-up" className={`text-[#121212] dark:text-white`} >Sign-up</NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator ">
                                <FontAwesomeIcon icon={faCartShopping} className={`text-[#121212] dark:text-white`} />
                                <span className="badge badge-xs indicator-item text-[#FFF] dark:text-white`">8</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-stone-200 dark:bg-neutral z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold text-[#000] dark:text-white">8 Items</span>
                                <span className=" text-[#000] dark:text-white">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {user && (
                        <ul className="menu menu-horizontal">
                            <li>
                                <details>
                                    <summary>{user.displayName || "Profile"}</summary>
                                    <ul className="p-2 bg-stone-200 dark:bg-neutral rounded-sm w-max">
                                        <li>
                                            <a className="justify-between text-[#000] dark:text-white">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li className="text-[#000] dark:text-white"><a>Settings</a></li>
                                        <li className="text-[#000] dark:text-white"><NavLink to='/logout'>Logout</NavLink></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    )}
                    <div>
                        <ul
                            tabIndex={0}
                            className="menu">
                            {isDarkMode ? (
                                <li className="text-[#000] dark:text-white">
                                    <a onClick={() => toggleDarkMode()} >
                                        <FontAwesomeIcon icon={faSun} />
                                    </a>
                                </li>
                            ) : (
                                <li className="text-[#000] dark:text-white">
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