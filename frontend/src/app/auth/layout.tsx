import { Outlet } from "react-router-dom";

import styles from './index.module.css'

export const AuthLayout = () => {
    return (
        <div className={`${"flex min-h-screen w-full"} ${styles.mobileFlex}`}>
            <div className={styles.bannerContainer}>
                <div className="h-full w-full relative overflow-hidden bg-[#132972]">
                    <img src='/images/signin/mu.svg' alt="background pattern" className="place-self-stretch w-full" />
                    <div className="absolute left-1/2 top-36 sm:top-1/2 md:top-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center" >
                        <p className={styles.logoText}>Welcome to</p>
                        <img src='/images/signin/logo.svg' alt="Mu Store" className="w-[35vw] sm:w-[15vw] py-1" />
                    </div>
                    <img src='/images/signin/door.png' alt="door" className={styles.doorImage} />
                </div>
            </div>
            <div className={styles.formContainer}>
                <Outlet />
            </div>
        </div>
    );
}

