import { useState } from "react"

export const useMainLayout = () => {
    const [isClosed, setIsClosed] = useState(true)
    const ToggleMenu = () => {
        setIsClosed(!isClosed)
    }

    return {
        isClosed,
        ToggleMenu
    }
}