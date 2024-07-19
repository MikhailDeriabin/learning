import { createContext, ReactNode, useContext, useState } from "react";

type TContext = {
    collapsed: boolean,
    toggle: () => void
}
const Context = createContext<TContext>({
    collapsed: false,
    toggle: () => {}
});

export function useNavContext() {
    return useContext(Context);
}

type Props = {
    children: ReactNode
}
export default function NavController({ children }: Props) {
    const [collapsed, setCollapsed] = useState(false);

    const value: TContext = {
        collapsed,
        toggle: () => setCollapsed(!collapsed)
    }
    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
} 