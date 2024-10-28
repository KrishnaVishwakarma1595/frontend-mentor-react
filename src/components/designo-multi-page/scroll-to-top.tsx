import { useEffect } from "react";
import { useNavigation } from 'react-router-dom';

export function ScrollToTop() {
    const navigation = useNavigation();

    useEffect(() => {
        if (navigation.state === 'idle') {
          window.scrollTo(0, 0);
        }
    }, [navigation.location]);
    
    return null;
}
