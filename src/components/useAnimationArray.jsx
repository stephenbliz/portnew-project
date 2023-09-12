import {useSprings} from '@react-spring/web';
import {useInView} from 'react-intersection-observer';

const useAnimationArray = () => {
    const [refItem1, inViewItem1] = useInView({
        triggerOnce: true,
        threshold: 0
    })
    const [refItem2, inViewItem2] = useInView({
        triggerOnce: true,
        threshold: 0
    })
    const [refItem3, inViewItem3] = useInView({
        triggerOnce: true,
        threshold: 0
    })
    const [refItem4, inViewItem4] = useInView({
        triggerOnce: true,
        threshold: 0
    })

    const refs = [refItem1, refItem2, refItem3, refItem4];

    const arrayAnimation = [
        {
            from: {opacity: inViewItem1 && '0', translateY: inViewItem1 && '300px'},
            to: {opacity: '1', translateY: '0'},
            config: {duration: 1000}
        },
        {
            from: {opacity: inViewItem2 && '0', translateY: inViewItem2 && '300px'},
            to: {opacity: '1', translateY: '0'},
            config: {duration: 900},
            delay: 600
        },
        {
            from: {opacity: inViewItem3 && '0', translateY: inViewItem3 && '300px'},
            to: {opacity: '1', translateY: '0'},
            config: {duration: 700},
            delay: 700
        },
        {
            from: {opacity: inViewItem4 && '0', translateY: inViewItem4 && '300px'},
            to: {opacity: '1', translateY: '0'},
            config: {duration: 600},
            delay: 1000
        }
    ]

    const arraySprings = useSprings(arrayAnimation.length, arrayAnimation)

    return {refs, arraySprings}
}
 
export default useAnimationArray;