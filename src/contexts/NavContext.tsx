// import { createContext } from "vm";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface Nav {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const NavContext = createContext<Nav>({} as Nav);

export const NavContextProvider = ({ children } : {children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <NavContext.Provider
            value={{
                isOpen,
                setIsOpen
            }}
        >
            {children}
        </NavContext.Provider>
    )
}