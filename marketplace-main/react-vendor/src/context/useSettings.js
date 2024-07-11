import { useContext } from 'react';
import { SettingsContext } from './ThemeContext';

export const useSettings = () => useContext(SettingsContext);
