import { createContext, useContext, useEffect, useState } from 'react';
import { settingsQuery } from '../lib/sanity.queries'
import { getSettings } from 'lib/sanity.client'

const SiteSettingsContext = createContext();

export function SiteSettingsProvider({ children }) {
    const [settings, setSettings] = useState({});
    useEffect(() => {
        getSettings(settingsQuery).then((settings) => {
            setSettings(settings)
        })
    }, [])
    
    const state = {
        settings
    }

    return (
        <SiteSettingsContext.Provider value={state}>
        {children}
        </SiteSettingsContext.Provider>
    );
}

export function useSettingsState() {
    const state = useContext(SiteSettingsContext)
    return state
}
