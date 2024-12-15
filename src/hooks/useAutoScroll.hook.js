import { useEffect } from "react"

const useAutoScroll = ({ ref }) => {
    useEffect(() => {
        const currentRef = ref.current;

        if (!currentRef) return;

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                currentRef.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, { threshold: 0.1 });

        observer.observe(currentRef);

        return () => {
            observer.unobserve(currentRef);
        };
    }, [ref.current])

    return null;
}

export default useAutoScroll;