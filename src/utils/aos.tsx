// 'use client'
// import { useEffect } from "react";
// import AOS from "aos"
// import 'aos/dist/aos.css';

// const Aoscompo = ({children}:any) => {
//     useEffect(() => {
//         AOS.init({
//             duration: 800,
//             once: false,
//         })
//     }, [])
//   return (
//     <div>
//       {children}
//     </div>
//   )
// }

// export default Aoscompo

'use client'
import { useEffect, ReactNode } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

interface AoscompoProps {
  children: ReactNode;
}

const Aoscompo = ({ children }: AoscompoProps) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return <div>{children}</div>;
};

export default Aoscompo;
