import { IN_DEVELOPMENT } from "../constants";

export const devConsole = {
    log: (...args: any) => {
        if (IN_DEVELOPMENT) {
            console.log(...args);
        }
    },
    info: (...args: any) => {
        if (IN_DEVELOPMENT) {
            console.info(...args);
        }
    },
    warn: (...args: any) => {
        if (IN_DEVELOPMENT) {
            console.warn(...args);
        }
    },
    error: (...args: any) => {
        if (IN_DEVELOPMENT) {
            console.error(...args);
        }
    }
}
