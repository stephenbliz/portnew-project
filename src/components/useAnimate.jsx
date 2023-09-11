import {useSpring} from '@react-spring/web'
import {useInView} from 'react-intersection-observer'
const useAnimate = () => {
    
     

      const [refImage, inViewImage] = useInView({
        triggerOnce: true,
        threshold: 0
      })
      const [refImage1, inViewImage1] = useInView({
        triggerOnce: true,
        threshold: 0
      })
      const [refImage2, inViewImage2] = useInView({
        triggerOnce: true,
        threshold: 0
      })

      const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0
      })
      const [ref1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0
      })
      const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0
      })
      const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0
      })
      const [ref4, inView4] = useInView({
        triggerOnce: true,
        threshold: 0
      })
      const [ref5, inView5] = useInView({
        triggerOnce: true,
        threshold: 0
      })
      const [reff, inVieww] = useInView({
        triggerOnce: true,
        threshold: 0
      })
      const [ref11, inView11] = useInView({
        triggerOnce: true,
        threshold: 0
      })
      const [ref22, inView22] = useInView({
        triggerOnce: true,
        threshold: 0
      })
      const [ref33, inView33] = useInView({
        triggerOnce: true,
        threshold: 0
      })
      const [ref44, inView44] = useInView({
        triggerOnce: true,
        threshold: 0
      })
      const [ref55, inView55] = useInView({
        triggerOnce: true,
        threshold: 0
      })
      const [ref6, inView6] = useInView({
        triggerOnce: true,
        threshold: 0
      })
      const [ref7, inView7] = useInView({
        triggerOnce: true,
        threshold: 0
      })
      const [ref8, inView8] = useInView({
        triggerOnce: true,
        threshold: 0
      })
      const [refSpring, inViewSpring] = useInView({
        triggerOnce: true,
        threshold: 0
      })
      const [refSpring1, inViewSpring1] = useInView({
        triggerOnce: true,
        threshold: 0
      })

      const spring = useSpring({
        from: {opacity: inViewSpring && '0', translateY:inViewSpring && '100px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000}
      })
      const spring1 = useSpring({
        from: {opacity: inViewSpring1 && '0', translateY: inViewSpring1 && '-100px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000},
        delay: 500
      })

      const springImage = useSpring({
        from: {opacity: inViewImage && '0', translateY: inViewImage && '150px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000}
      })
      const springImage1 = useSpring({
        from: {opacity: inViewImage1 && '0', translateY: inViewImage1 && '150px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000}
      })
      const springImage2 = useSpring({
        from: {opacity: inViewImage2 && '0', translateY: inViewImage2 && '150px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000}
      })

      const springAnimated = useSpring({
        from: {opacity: inView && '0', translateY: inView && '100px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000}
      })
      const springAnimatedd = useSpring({
        from: {opacity: inVieww && '0', translateY: inVieww && '100px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000}
      })

      const springAnimated1 = useSpring({
        from: {opacity: inView1  && '0', translateY: inView1  &&'100px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000},
        delay: 300
      })
      const springAnimated11 = useSpring({
        from: {opacity: inView11 && '0', translateY: inView11 &&'100px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000},
        delay: 300
      })

      
      const springAnimated2 = useSpring({
        from: {opacity: inView2 && '0', translateY: inView2 &&'100px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000},
        delay: 600
      })
      const springAnimated22 = useSpring({
        from: {opacity: inView22 && '0', translateY: inView22 &&'100px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000},
        delay: 600
      })

      const springAnimated3 = useSpring({
        from: {opacity: inView3 && '0', translateY: inView3 && '100px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000}
      })
      const springAnimated33 = useSpring({
        from: {opacity: inView33 && '0', translateY: inView33 && '100px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000}
      })
      const springAnimated4 = useSpring({
        from: {opacity: inView4 && '0', translateY: inView4 && '100px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000},
        delay: 300
      })
      const springAnimated44 = useSpring({
        from: {opacity: inView44 && '0', translateY: inView44 && '100px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000},
        delay: 300
      })
      const springAnimated5 = useSpring({
        from: {opacity: inView5 && '0', translateY: inView5 && '100px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000},
        delay: 600
      })
      const springAnimated55 = useSpring({
        from: {opacity: inView55 && '0', translateY: inView55 && '100px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000},
        delay: 600
      })
      const springAnimated6 = useSpring({
        from: {opacity: inView6 && '0', translateY: inView6 && '100px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000}
      })
      const springAnimated7 = useSpring({
        from: {opacity: inView7  && '0', translateY: inView7  &&'100px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000},
        delay: 300
      })
      const springAnimated8 = useSpring({
        from: {opacity: inView8 && '0', translateY: inView8 &&'100px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000},
        delay: 600
      })

    return {
        spring,
        spring1,
        springAnimated,
        springAnimated1,
        springAnimated2,
        springAnimated3,
        springAnimated4,
        springAnimated5,
        springAnimatedd,
        springAnimated11,
        springAnimated22,
        springAnimated33,
        springAnimated44,
        springAnimated55,
        springAnimated6,
        springAnimated7,
        springAnimated8,
        springImage,
        springImage1,
        springImage2,
        refImage,
        refImage1,
        refImage2,
        refSpring,
        refSpring1,
        ref,
        ref1,
        ref2,
        ref3,
        ref4,
        ref5,
        ref6,
        ref7,
        ref8,
        reff,
        ref11,
        ref22,
        ref33,
        ref44,
        ref55,
    };
}
 
export default useAnimate;