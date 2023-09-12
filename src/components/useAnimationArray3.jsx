import {useSprings} from '@react-spring/web';
import {useInView} from 'react-intersection-observer';

const useAnimationArray3 = () => {
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

    const refs = [refItem1, refItem2, refItem3];

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
        }
    ]

    const arraySprings = useSprings(arrayAnimation.length, arrayAnimation)

    return {refs, arraySprings}
}
 
export default useAnimationArray3;