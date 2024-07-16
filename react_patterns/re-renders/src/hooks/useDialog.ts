import { useState } from "react";

export default function useDialog() {
    const [visible, setVisible] = useState<boolean>(false);

    return {
        isVisible: visible,
        show: () => setVisible(true),
        hide: () => setVisible(false)
    }
}