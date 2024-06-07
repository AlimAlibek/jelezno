import { useEffect, useRef } from "react";

export default function useScroll(
    parentRef: React.RefObject<HTMLDivElement>,
    childRef: React.RefObject<HTMLDivElement>,
    callback: () => void
) {

    const observer = useRef<IntersectionObserver>();

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log('intersected')
                callback()
            }
        }, options)

        if (childRef.current) {
           observer.current.observe(childRef.current)
        }


        return function () {
            if (observer.current && childRef.current) {
              observer.current.unobserve(childRef.current)
            }
        };

    }, [callback])
};
