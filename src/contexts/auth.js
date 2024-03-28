import { createContext } from "react"
import { useBroadcast } from "use-broadcast-ts"


export const currentUserContext = createContext(null)

export const CurrentUserProvider = ({ children, initialUser }) => {
    const { send, state } = useBroadcast('currentUser', initialUser)

    return (
        <currentUserContext.Provider value={{
            currentUser: state,
            setCurrentUser: (newUser) => {
                send(newUser)
            }
        }}>
            {children}
        </currentUserContext.Provider>
    )
}
