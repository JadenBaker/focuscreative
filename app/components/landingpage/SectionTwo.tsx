'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoScroll from "./AutoScroll";
import Image from "next/image";

export default function SectionTwo() {
    return ( 
        <div className="col-span-8 grid grid-cols-8
            dark:bg-black flex flex-col overflow-x-hidden relative ">
            <h1 className="text-4xl font-bold max-w-[400px] 2xl:text-black
                my-20 text-white absolute top-[150px] px-5 2xl:col-start-2 dark:text-white">
                Unlock your creative side & build the site you&apos;ve always wanted
            </h1>
            <Link href={'/portfolio'} className="dark:text-white group transition duration-200 
                w-[200px] absolute top-[500px] ml-5 2xl:col-start-2 ">
                <button className="flex text-white items-center space-x-10">
                    <p className="text-xl ">Veiw Designs</p>
                    <ArrowForwardIcon  className="min-h-[30px] min-w-[30px]"/>
               </button>
               <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-[3px] dark:bg-[#47078 bg-white rounded-[1.5px]'></span>
            </Link>
            <Link href={'/contact'} 
                className="
                mt-20 dark:hover:bg-[#8E29EE] shadow-sm hover:shadow-md
                top-[600px] absolute ml-5 2xl:col-start-2 text-center rounded-md">
                <motion.button
                    whileHover={{ scale : 1.05 }}
                    whileTap={{ scale : .95 }}
                    transition={{ duration : .5, ease : 'easeInOut'}}
                    className="py-3 w-[250px] rounded-md border-2 border-[#8E29EE]
                    rounded-md bg-white text-black font-medium hover:bg-[#8E29EE]
                    dark:bg-black dark:text-white hover:text-white dark:hover:bg-[#8E29EE]
                    "
                    
                >
                    Start Now
                </motion.button>            
            </Link>
            <AutoScroll />
            <div className="rounded-[25px] hidden sm:inline h-[300px] dark:bg-black
                absolute w-[300px] bg-white right-5 top-[340px] md:w-[410px] md:h-[410px]
                lg:w-[600px] lg:right-20 xl:w-[700px] xl:top-[400px] lg:top-[370px] 2xl:col-end-8
                2xl:w-[600px] xl:h-[500px] p-5 2xl:mr-20">
                <Image  
                    src='https://t4.ftcdn.net/jpg/02/16/47/67/240_F_216476729_aEhzQNxGj2bc7fQUslTgKysobSOhswxI.jpg'
                    alt="Image"
                    className="object-cover w-full h-full rounded-[25px]"
                    width={4000}
                    height={300}
                />
            </div>
            <svg width="650" height="941" className="sm:hidden" viewBox="0 0 650 941" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_165_781)">
                <rect width="650" height="941" fill="white" className="dark:fill-black"/>
                <rect width="650" height="100" fill="white" className="dark:fill-black"/>
                <rect y="791" width="650" height="150" fill="white" className="dark:fill-black"/>
                <path d="M-373.288 545.026C-392.814 525.5 -392.814 493.842 -373.288 474.315L85.3153 15.7119C104.841 -3.81427 136.5 -3.81431 156.026 15.7119L466.675 326.361C486.201 345.887 486.201 377.545 466.675 397.072L8.07155 855.675C-11.4547 875.201 -43.113 875.201 -62.6392 855.675L-373.288 545.026Z" fill="#470487"/>
                <line x1="84" y1="705.5" x2="74" y2="705.5" stroke="#8E29EE"/>
                <line x1="102" y1="705.5" x2="92" y2="705.5" stroke="#8E29EE"/>
                <line x1="179" y1="705.5" x2="169" y2="705.5" stroke="#8E29EE"/>
                <line x1="160" y1="705.5" x2="150" y2="705.5" stroke="#8E29EE"/>
                <line x1="197" y1="705.5" x2="187" y2="705.5" stroke="#8E29EE"/>
                <line x1="217.05" y1="704.498" x2="207.05" y2="705.497" stroke="#8E29EE"/>
                <line x1="237.186" y1="698.464" x2="227.186" y2="702.464" stroke="#8E29EE"/>
                <line x1="288.277" y1="671.416" x2="279.277" y2="677.416" stroke="#8E29EE"/>
                <line x1="302.243" y1="663.437" x2="293.243" y2="668.437" stroke="#8E29EE"/>
                <line x1="316.186" y1="657.464" x2="306.186" y2="661.464" stroke="#8E29EE"/>
                <line x1="330.186" y1="652.464" x2="320.186" y2="656.464" stroke="#8E29EE"/>
                <line x1="344.243" y1="645.437" x2="335.243" y2="650.437" stroke="#8E29EE"/>
                <line x1="358.257" y1="638.429" x2="348.257" y2="644.429" stroke="#8E29EE"/>
                <line x1="368.354" y1="629.354" x2="361.354" y2="636.354" stroke="#8E29EE"/>
                <line x1="378.4" y1="616.3" x2="372.4" y2="624.3" stroke="#8E29EE"/>
                <line x1="29" y1="705.5" x2="19" y2="705.5" stroke="#8E29EE"/>
                <line x1="10" y1="705.5" y2="705.5" stroke="#8E29EE"/>
                <line x1="47" y1="705.5" x2="37" y2="705.5" stroke="#8E29EE"/>
                <line x1="66" y1="705.5" x2="56" y2="705.5" stroke="#8E29EE"/>
                <line x1="122" y1="705.5" x2="112" y2="705.5" stroke="#8E29EE"/>
                <line x1="141" y1="705.5" x2="131" y2="705.5" stroke="#8E29EE"/>
                <path d="M241.5 696.651L263.151 659.151L284.801 696.651L241.5 696.651Z" fill="#8E29EE"/>
                <path d="M246.696 693.651L263.151 665.151L279.605 693.651L246.696 693.651Z" fill="white" className="dark:fill-black"/>
                <path d="M376.479 567.339L415.723 585.639L380.253 610.476L376.479 567.339Z" fill="#8E29EE"/>
                <path d="M379.268 570.978L410.812 585.945L382.544 605.738L379.268 570.978Z" fill="white" className="dark:fill-black"/>
                <line x1="419.498" y1="469.045" x2="418.498" y2="480.045" stroke="#8E29EE"/>
                <circle cx="557.5" cy="223.5" r="36.5" fill="white" className="dark:fill-black" stroke="#8E29EE" strokeWidth="2"/>
                <line x1="614" y1="223.5" x2="602" y2="223.5" stroke="#8E29EE"/>
                <line x1="648" y1="223.5" x2="636" y2="223.5" stroke="#8E29EE"/>
                <line x1="631" y1="223.5" x2="619" y2="223.5" stroke="#8E29EE"/>
                <path d="M392.961 349.053L436.097 345.279L417.798 384.523L392.961 349.053Z" fill="#8E29EE"/>
                <path d="M397.336 350.803L432.137 347.993L417.553 379.268L397.336 350.803Z" fill="#470487"/>
                <line x1="412.441" y1="336.155" x2="411.605" y2="326.19" stroke="#8E29EE"/>
                <line x1="410.502" y1="318.042" x2="409.671" y2="308.076" stroke="#8E29EE"/>
                <line x1="409.502" y1="302.924" x2="410.332" y2="292.958" stroke="#8E29EE"/>
                <line x1="411.536" y1="287.814" x2="415.25" y2="278.53" stroke="#8E29EE"/>
                <line x1="417.62" y1="274.267" x2="424.128" y2="266.675" stroke="#8E29EE"/>
                <line x1="426.646" y1="264.646" x2="433.646" y2="257.646" stroke="#8E29EE"/>
                <line x1="438.776" y1="254.553" x2="446.776" y2="250.553" stroke="#8E29EE"/>
                <line x1="452.794" y1="247.544" x2="461.372" y2="243.671" stroke="#8E29EE"/>
                <line x1="466.814" y1="241.536" x2="476.099" y2="237.822" stroke="#8E29EE"/>
                <line x1="482.829" y1="235.53" x2="493.829" y2="231.53" stroke="#8E29EE"/>
                <line x1="501.911" y1="229.508" x2="512.911" y2="227.508" stroke="#8E29EE"/>
                <line x1="419.498" y1="394.95" x2="420.498" y2="404.95" stroke="#8E29EE"/>
                <line x1="421.5" y1="414" x2="421.5" y2="425" stroke="#8E29EE"/>
                <line x1="421.5" y1="432" x2="421.5" y2="442" stroke="#8E29EE"/>
                <line x1="421.266" y1="450.038" x2="420.499" y2="460.009" stroke="#8E29EE"/>
                <line x1="417.498" y1="486.045" x2="416.498" y2="497.045" stroke="#8E29EE"/>
                <line x1="415.49" y1="503.098" x2="413.49" y2="513.098" stroke="#8E29EE"/>
                <line x1="412.485" y1="520.121" x2="409.485" y2="532.121" stroke="#8E29EE"/>
                <line x1="408.482" y1="537.132" x2="405.482" y2="548.132" stroke="#8E29EE"/>
                <line x1="403.474" y1="554.158" x2="399.474" y2="566.158" stroke="#8E29EE"/>
                </g>
                <rect x="0.5" y="0.5" width="649" height="940"/>
                <defs>
                <clipPath id="clip0_165_781">
                <rect width="650" height="941" fill="white" className="dark:fill-black"/>
                </clipPath>
                </defs>
            </svg>
            <svg width="768" height="941" className="hidden sm:inline md:hidden" viewBox="0 0 768 941" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_169_998)">
                <rect width="768" height="941" fill="white" className="dark:fill-black"/>
                <rect width="768" height="100" fill="white" className="dark:fill-black"/>
                <rect y="791" width="768" height="150" fill="white" className="dark:fill-black"/>
                <path d="M-380.645 546.67C-400.171 527.143 -400.171 495.485 -380.645 475.959L77.9588 17.3554C97.485 -2.17084 129.143 -2.17088 148.67 17.3553L459.63 328.316C479.156 347.842 479.156 379.5 459.63 399.026L1.02653 857.63C-18.4997 877.156 -50.158 877.156 -69.6842 857.63L-380.645 546.67Z" fill="#470487"/>
                <line x1="84" y1="705.5" x2="74" y2="705.5" stroke="#8E29EE"/>
                <line x1="102" y1="705.5" x2="92" y2="705.5" stroke="#8E29EE"/>
                <line x1="179" y1="705.5" x2="169" y2="705.5" stroke="#8E29EE"/>
                <line x1="160" y1="705.5" x2="150" y2="705.5" stroke="#8E29EE"/>
                <line x1="197" y1="705.5" x2="187" y2="705.5" stroke="#8E29EE"/>
                <line x1="217.05" y1="704.498" x2="207.05" y2="705.497" stroke="#8E29EE"/>
                <line x1="237.132" y1="699.482" x2="226.132" y2="702.482" stroke="#8E29EE"/>
                <line x1="252.186" y1="693.464" x2="242.186" y2="697.464" stroke="#8E29EE"/>
                <line x1="267.224" y1="686.447" x2="257.224" y2="691.447" stroke="#8E29EE"/>
                <line x1="282.186" y1="680.464" x2="272.186" y2="684.464" stroke="#8E29EE"/>
                <line x1="298.186" y1="673.464" x2="288.186" y2="677.464" stroke="#8E29EE"/>
                <line x1="313.186" y1="667.464" x2="303.186" y2="671.464" stroke="#8E29EE"/>
                <line x1="328.186" y1="661.464" x2="318.186" y2="665.464" stroke="#8E29EE"/>
                <line x1="342.243" y1="654.437" x2="333.243" y2="659.437" stroke="#8E29EE"/>
                <line x1="342.243" y1="654.437" x2="333.243" y2="659.437" stroke="#8E29EE"/>
                <line x1="356.243" y1="646.437" x2="347.243" y2="651.437" stroke="#8E29EE"/>
                <line x1="370.243" y1="638.437" x2="361.243" y2="643.437" stroke="#8E29EE"/>
                <line x1="370.243" y1="638.437" x2="361.243" y2="643.437" stroke="#8E29EE"/>
                <line x1="384.243" y1="630.437" x2="375.243" y2="635.437" stroke="#8E29EE"/>
                <line x1="430.277" y1="602.416" x2="421.277" y2="608.416" stroke="#8E29EE"/>
                <line x1="444.203" y1="596.457" x2="435.203" y2="600.457" stroke="#8E29EE"/>
                <line x1="459.144" y1="591.479" x2="449.144" y2="594.479" stroke="#8E29EE"/>
                <line x1="474.203" y1="585.457" x2="465.203" y2="589.457" stroke="#8E29EE"/>
                <line x1="488.203" y1="579.457" x2="479.203" y2="583.457" stroke="#8E29EE"/>
                <line x1="501.243" y1="572.437" x2="492.243" y2="577.437" stroke="#8E29EE"/>
                <line x1="512.354" y1="563.354" x2="505.354" y2="570.354" stroke="#8E29EE"/>
                <line x1="521.407" y1="552.291" x2="516.407" y2="559.291" stroke="#8E29EE"/>
                <line x1="534.447" y1="531.224" x2="530.447" y2="539.224" stroke="#8E29EE"/>
                <line x1="528.434" y1="542.248" x2="524.434" y2="549.248" stroke="#8E29EE"/>
                <line x1="29" y1="705.5" x2="19" y2="705.5" stroke="#8E29EE"/>
                <line x1="10" y1="705.5" y2="705.5" stroke="#8E29EE"/>
                <line x1="47" y1="705.5" x2="37" y2="705.5" stroke="#8E29EE"/>
                <line x1="66" y1="705.5" x2="56" y2="705.5" stroke="#8E29EE"/>
                <line x1="122" y1="705.5" x2="112" y2="705.5" stroke="#8E29EE"/>
                <line x1="141" y1="705.5" x2="131" y2="705.5" stroke="#8E29EE"/>
                <path d="M385.5 629.651L407.151 592.151L428.801 629.651L385.5 629.651Z" fill="#8E29EE"/>
                <path d="M390.696 626.651L407.151 598.151L423.605 626.651L390.696 626.651Z" fill="white" className="dark:fill-black"/>
                <line x1="544.474" y1="505.158" x2="541.474" y2="514.158" stroke="#8E29EE"/>
                <circle cx="676.5" cy="242.5" r="36.5" fill="white" className="dark:fill-black" stroke="#8E29EE" strokeWidth="2"/>
                <line x1="733" y1="242.5" x2="721" y2="242.5" stroke="#8E29EE"/>
                <line x1="767" y1="242.5" x2="755" y2="242.5" stroke="#8E29EE"/>
                <line x1="750" y1="242.5" x2="738" y2="242.5" stroke="#8E29EE"/>
                <path d="M517.5 377.651L560.801 377.651L539.151 415.151L517.5 377.651Z" fill="#8E29EE"/>
                <path d="M521.682 379.769L556.596 380.003L539.342 409.888L521.682 379.769Z" fill="white" className="dark:fill-black"/>
                <line x1="538.5" y1="366" x2="538.5" y2="356" stroke="#8E29EE"/>
                <line x1="538.5" y1="347.957" x2="538.67" y2="337.991" stroke="#8E29EE"/>
                <line x1="538.5" y1="331" x2="538.5" y2="321" stroke="#8E29EE"/>
                <line x1="538.5" y1="314" x2="538.5" y2="304" stroke="#8E29EE"/>
                <line x1="538.5" y1="297" x2="538.5" y2="287" stroke="#8E29EE"/>
                <line x1="543.102" y1="427.555" x2="544.102" y2="437.555" stroke="#8E29EE"/>
                <line x1="544.5" y1="443" x2="544.5" y2="454" stroke="#8E29EE"/>
                <line x1="544.5" y1="461" x2="544.5" y2="470" stroke="#8E29EE"/>
                <line x1="544.5" y1="474" x2="544.5" y2="483" stroke="#8E29EE"/>
                <line x1="544.5" y1="489" x2="544.5" y2="499" stroke="#8E29EE"/>
                <line x1="539.474" y1="519.158" x2="536.474" y2="528.158" stroke="#8E29EE"/>
                <line x1="538.504" y1="279.938" x2="539.504" y2="271.938" stroke="#8E29EE"/>
                <line x1="541.646" y1="267.646" x2="548.646" y2="260.646" stroke="#8E29EE"/>
                <line x1="552.735" y1="256.576" x2="560.735" y2="251.576" stroke="#8E29EE"/>
                <line x1="566.831" y1="248.403" x2="574.831" y2="245.529" stroke="#8E29EE"/>
                <line x1="582.895" y1="243.511" x2="592.18" y2="241.511" stroke="#8E29EE"/>
                <line x1="601" y1="241.5" x2="611" y2="241.5" stroke="#8E29EE"/>
                <line x1="620" y1="241.5" x2="630" y2="241.5" stroke="#8E29EE"/>
                </g>
                <rect x="0.5" y="0.5" width="767" height="940"/>
                <defs>
                <clipPath id="clip0_169_998">
                <rect width="768" height="941" fill="white" className="dark:fill-black"/>
                </clipPath>
                </defs>
            </svg>
            <svg width="1024" height="941" className="hidden md:inline lg:hidden" viewBox="0 0 1024 941" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_169_1068)">
                <rect width="1024" height="941" fill="white" className="dark:fill-black"/>
                <rect width="1024" height="100" fill="white" className="dark:fill-black"/>
                <rect y="791" width="1024" height="150" fill="white" className="dark:fill-black"/>
                <path d="M-415.743 586.768C-435.269 567.242 -435.27 535.584 -415.743 516.058L84.959 15.3552C104.485 -4.17102 136.143 -4.17104 155.67 15.3552L504.979 364.665C524.505 384.191 524.506 415.849 504.979 435.375L4.27698 936.078C-15.2492 955.604 -46.9075 955.604 -66.4337 936.078L-415.743 586.768Z" fill="#470487"/>
                <path d="M260 705L297.5 683.349V726.651L260 705Z" fill="#8E29EE"/>
                <path d="M266 705L294.5 688.546V721.455L266 705Z" fill="white" className="dark:fill-black"/>
                <line x1="84" y1="705.5" x2="74" y2="705.5" stroke="#8E29EE"/>
                <line x1="376" y1="705.5" x2="366" y2="705.5" stroke="#8E29EE"/>
                <line x1="357" y1="705.5" x2="347" y2="705.5" stroke="#8E29EE"/>
                <line x1="394" y1="705.5" x2="384" y2="705.5" stroke="#8E29EE"/>
                <line x1="414" y1="705.5" x2="404" y2="705.5" stroke="#8E29EE"/>
                <line x1="476.098" y1="703.49" x2="466.098" y2="705.49" stroke="#8E29EE"/>
                <line x1="490.108" y1="700.488" x2="481.108" y2="702.488" stroke="#8E29EE"/>
                <line x1="504.186" y1="695.464" x2="494.186" y2="699.464" stroke="#8E29EE"/>
                <line x1="516.265" y1="688.424" x2="508.265" y2="693.424" stroke="#8E29EE"/>
                <line x1="527.3" y1="680.4" x2="519.3" y2="686.4" stroke="#8E29EE"/>
                <line x1="539.3" y1="671.4" x2="531.3" y2="677.4" stroke="#8E29EE"/>
                <line x1="554.186" y1="665.464" x2="544.186" y2="669.464" stroke="#8E29EE"/>
                <line x1="569.186" y1="659.464" x2="559.186" y2="663.464" stroke="#8E29EE"/>
                <line x1="584.186" y1="653.464" x2="574.186" y2="657.464" stroke="#8E29EE"/>
                <line x1="598.243" y1="646.437" x2="589.243" y2="651.437" stroke="#8E29EE"/>
                <line x1="598.243" y1="646.437" x2="589.243" y2="651.437" stroke="#8E29EE"/>
                <line x1="612.243" y1="638.437" x2="603.243" y2="643.437" stroke="#8E29EE"/>
                <line x1="626.243" y1="630.437" x2="617.243" y2="635.437" stroke="#8E29EE"/>
                <line x1="626.243" y1="630.437" x2="617.243" y2="635.437" stroke="#8E29EE"/>
                <line x1="640.243" y1="622.437" x2="631.243" y2="627.437" stroke="#8E29EE"/>
                <line x1="686.277" y1="594.416" x2="677.277" y2="600.416" stroke="#8E29EE"/>
                <line x1="700.203" y1="588.457" x2="691.203" y2="592.457" stroke="#8E29EE"/>
                <line x1="715.144" y1="583.479" x2="705.144" y2="586.479" stroke="#8E29EE"/>
                <line x1="730.203" y1="577.457" x2="721.203" y2="581.457" stroke="#8E29EE"/>
                <line x1="744.203" y1="571.457" x2="735.203" y2="575.457" stroke="#8E29EE"/>
                <line x1="757.243" y1="564.437" x2="748.243" y2="569.437" stroke="#8E29EE"/>
                <line x1="768.354" y1="554.354" x2="761.354" y2="561.354" stroke="#8E29EE"/>
                <line x1="777.424" y1="541.265" x2="772.424" y2="549.265" stroke="#8E29EE"/>
                <line x1="782.447" y1="531.224" x2="778.447" y2="539.224" stroke="#8E29EE"/>
                <line x1="29" y1="705.5" x2="19" y2="705.5" stroke="#8E29EE"/>
                <line x1="10" y1="705.5" y2="705.5" stroke="#8E29EE"/>
                <line x1="47" y1="705.5" x2="37" y2="705.5" stroke="#8E29EE"/>
                <line x1="66" y1="705.5" x2="56" y2="705.5" stroke="#8E29EE"/>
                <line x1="224" y1="705.5" x2="214" y2="705.5" stroke="#8E29EE"/>
                <line x1="201" y1="705.5" x2="191" y2="705.5" stroke="#8E29EE"/>
                <line x1="248" y1="705.5" x2="238" y2="705.5" stroke="#8E29EE"/>
                <line x1="179" y1="705.5" x2="169" y2="705.5" stroke="#8E29EE"/>
                <line x1="124" y1="705.5" x2="114" y2="705.5" stroke="#8E29EE"/>
                <line x1="105" y1="705.5" x2="95" y2="705.5" stroke="#8E29EE"/>
                <line x1="142" y1="705.5" x2="132" y2="705.5" stroke="#8E29EE"/>
                <line x1="161" y1="705.5" x2="151" y2="705.5" stroke="#8E29EE"/>
                <line x1="319" y1="705.5" x2="309" y2="705.5" stroke="#8E29EE"/>
                <line x1="338" y1="705.5" x2="328" y2="705.5" stroke="#8E29EE"/>
                <path d="M641.5 621.651L663.151 584.151L684.801 621.651L641.5 621.651Z" fill="#8E29EE"/>
                <path d="M646.696 618.651L663.151 590.151L679.605 618.651L646.696 618.651Z" fill="white" className="dark:fill-black"/>
                <path d="M424 705L461.5 683.349V726.651L424 705Z" fill="#8E29EE"/>
                <path d="M430 705L458.5 688.546V721.455L430 705Z" fill="white" className="dark:fill-black"/>
                <circle cx="932.5" cy="242.5" r="36.5" fill="white" className="dark:fill-black" stroke="#8E29EE" strokeWidth="2"/>
                <line x1="989" y1="242.5" x2="977" y2="242.5" stroke="#8E29EE"/>
                <line x1="1023" y1="242.5" x2="1011" y2="242.5" stroke="#8E29EE"/>
                <line x1="1006" y1="242.5" x2="994" y2="242.5" stroke="#8E29EE"/>
                <path d="M773.5 377.651L816.801 377.651L795.151 415.151L773.5 377.651Z" fill="#8E29EE"/>
                <path d="M777.682 379.769L812.596 380.003L795.342 409.888L777.682 379.769Z" fill="white" className="dark:fill-black"/>
                <line x1="794.5" y1="366" x2="794.5" y2="356" stroke="#8E29EE"/>
                <line x1="794.5" y1="347.957" x2="794.67" y2="337.991" stroke="#8E29EE"/>
                <line x1="794.5" y1="331" x2="794.5" y2="321" stroke="#8E29EE"/>
                <line x1="794.5" y1="314" x2="794.5" y2="304" stroke="#8E29EE"/>
                <line x1="795.5" y1="424" x2="795.5" y2="434" stroke="#8E29EE"/>
                <line x1="795.5" y1="442" x2="795.5" y2="452" stroke="#8E29EE"/>
                <line x1="795.5" y1="459" x2="795.5" y2="468" stroke="#8E29EE"/>
                <line x1="790.482" y1="504.132" x2="787.482" y2="515.132" stroke="#8E29EE"/>
                <line x1="786.474" y1="519.158" x2="783.474" y2="528.158" stroke="#8E29EE"/>
                <line x1="795.859" y1="474.706" x2="794.357" y2="486.008" stroke="#8E29EE"/>
                <line x1="793.897" y1="490.133" x2="792.128" y2="499.454" stroke="#8E29EE"/>
                <line x1="794.5" y1="312" x2="794.5" y2="302" stroke="#8E29EE"/>
                <line x1="794.503" y1="293.945" x2="795.503" y2="284.945" stroke="#8E29EE"/>
                <line x1="796.515" y1="279.879" x2="798.515" y2="271.879" stroke="#8E29EE"/>
                <line x1="800.646" y1="267.646" x2="807.646" y2="260.646" stroke="#8E29EE"/>
                <line x1="811.735" y1="256.576" x2="819.735" y2="251.576" stroke="#8E29EE"/>
                <line x1="825.831" y1="248.403" x2="833.831" y2="245.529" stroke="#8E29EE"/>
                <line x1="841.895" y1="243.511" x2="851.18" y2="241.511" stroke="#8E29EE"/>
                <line x1="860" y1="241.5" x2="870" y2="241.5" stroke="#8E29EE"/>
                <line x1="879" y1="241.5" x2="889" y2="241.5" stroke="#8E29EE"/>
                </g>
                <defs>
                <clipPath id="clip0_169_1068">
                <rect width="1024" height="941" fill="white" className="dark:fill-black"/>
                </clipPath>
                </defs>
            </svg>
            <svg width="1280" height="941" className="hidden lg:inline xl:hidden" viewBox="0 0 1280 941" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_169_1150)">
                <rect width="1280" height="941" fill="white" className="dark:fill-black"/>
                <rect width="1280" height="100" fill="white" className="dark:fill-black"/>
                <rect y="791" width="1280" height="150" fill="white" className="dark:fill-black"/>
                <path d="M-416.103 587.127C-435.629 567.601 -435.629 535.943 -416.103 516.417L84.9588 15.3552C104.485 -4.17101 136.143 -4.17103 155.669 15.3552L505.032 364.717C524.558 384.244 524.558 415.902 505.032 435.428L3.97034 936.49C-15.5559 956.016 -47.2141 956.016 -66.7404 936.49L-416.103 587.127Z" fill="#470487"/>
                <line x1="84" y1="705.5" x2="74" y2="705.5" stroke="#8E29EE"/>
                <line x1="376" y1="705.5" x2="366" y2="705.5" stroke="#8E29EE"/>
                <line x1="357" y1="705.5" x2="347" y2="705.5" stroke="#8E29EE"/>
                <line x1="394" y1="705.5" x2="384" y2="705.5" stroke="#8E29EE"/>
                <line x1="414" y1="705.5" x2="404" y2="705.5" stroke="#8E29EE"/>
                <line x1="476.098" y1="703.49" x2="466.098" y2="705.49" stroke="#8E29EE"/>
                <line x1="490.108" y1="700.488" x2="481.108" y2="702.488" stroke="#8E29EE"/>
                <line x1="504.186" y1="695.464" x2="494.186" y2="699.464" stroke="#8E29EE"/>
                <line x1="516.265" y1="688.424" x2="508.265" y2="693.424" stroke="#8E29EE"/>
                <line x1="527.3" y1="680.4" x2="519.3" y2="686.4" stroke="#8E29EE"/>
                <line x1="539.3" y1="671.4" x2="531.3" y2="677.4" stroke="#8E29EE"/>
                <line x1="554.186" y1="665.464" x2="544.186" y2="669.464" stroke="#8E29EE"/>
                <line x1="569.186" y1="659.464" x2="559.186" y2="663.464" stroke="#8E29EE"/>
                <line x1="584.186" y1="653.464" x2="574.186" y2="657.464" stroke="#8E29EE"/>
                <line x1="598.243" y1="646.437" x2="589.243" y2="651.437" stroke="#8E29EE"/>
                <line x1="598.243" y1="646.437" x2="589.243" y2="651.437" stroke="#8E29EE"/>
                <line x1="612.243" y1="638.437" x2="603.243" y2="643.437" stroke="#8E29EE"/>
                <line x1="626.243" y1="630.437" x2="617.243" y2="635.437" stroke="#8E29EE"/>
                <line x1="626.243" y1="630.437" x2="617.243" y2="635.437" stroke="#8E29EE"/>
                <line x1="640.243" y1="622.437" x2="631.243" y2="627.437" stroke="#8E29EE"/>
                <line x1="686.277" y1="594.416" x2="677.277" y2="600.416" stroke="#8E29EE"/>
                <line x1="700.203" y1="588.457" x2="691.203" y2="592.457" stroke="#8E29EE"/>
                <line x1="715.144" y1="583.479" x2="705.144" y2="586.479" stroke="#8E29EE"/>
                <line x1="730.203" y1="577.457" x2="721.203" y2="581.457" stroke="#8E29EE"/>
                <line x1="744.203" y1="571.457" x2="735.203" y2="575.457" stroke="#8E29EE"/>
                <line x1="757.243" y1="564.437" x2="748.243" y2="569.437" stroke="#8E29EE"/>
                <line x1="770.3" y1="556.4" x2="762.3" y2="562.4" stroke="#8E29EE"/>
                <line x1="29" y1="705.5" x2="19" y2="705.5" stroke="#8E29EE"/>
                <line x1="10" y1="705.5" y2="705.5" stroke="#8E29EE"/>
                <line x1="47" y1="705.5" x2="37" y2="705.5" stroke="#8E29EE"/>
                <line x1="66" y1="705.5" x2="56" y2="705.5" stroke="#8E29EE"/>
                <line x1="220" y1="705.5" x2="210" y2="705.5" stroke="#8E29EE"/>
                <line x1="179" y1="705.5" x2="169" y2="705.5" stroke="#8E29EE"/>
                <line x1="124" y1="705.5" x2="114" y2="705.5" stroke="#8E29EE"/>
                <line x1="105" y1="705.5" x2="95" y2="705.5" stroke="#8E29EE"/>
                <line x1="142" y1="705.5" x2="132" y2="705.5" stroke="#8E29EE"/>
                <line x1="161" y1="705.5" x2="151" y2="705.5" stroke="#8E29EE"/>
                <line x1="338" y1="705.5" x2="328" y2="705.5" stroke="#8E29EE"/>
                <path d="M641.5 621.651L663.151 584.151L684.801 621.651L641.5 621.651Z" fill="#8E29EE"/>
                <path d="M646.696 618.651L663.151 590.151L679.605 618.651L646.696 618.651Z" fill="white" className="dark:fill-black"/>
                <path d="M424 705L461.5 683.349V726.651L424 705Z" fill="#8E29EE"/>
                <path d="M430 705L458.5 688.546V721.454L430 705Z" fill="white" className="dark:fill-black"/>
                <line x1="799.492" y1="505.089" x2="797.492" y2="516.089" stroke="#8E29EE"/>
                <circle cx="931.5" cy="243.5" r="36.5" fill="white" className="dark:fill-black" stroke="#8E29EE" strokeWidth="2"/>
                <circle cx="1285.5" cy="242.5" r="36.5" fill="white" className="dark:fill-black" stroke="#8E29EE" strokeWidth="2"/>
                <line x1="988" y1="243.5" x2="976" y2="243.5" stroke="#8E29EE"/>
                <line x1="1022" y1="243.5" x2="1010" y2="243.5" stroke="#8E29EE"/>
                <line x1="1005" y1="243.5" x2="993" y2="243.5" stroke="#8E29EE"/>
                <line x1="1042" y1="243.5" x2="1030" y2="243.5" stroke="#8E29EE"/>
                <line x1="1076" y1="243.5" x2="1064" y2="243.5" stroke="#8E29EE"/>
                <line x1="1059" y1="243.5" x2="1047" y2="243.5" stroke="#8E29EE"/>
                <line x1="1096" y1="243.5" x2="1084" y2="243.5" stroke="#8E29EE"/>
                <line x1="1130" y1="243.5" x2="1118" y2="243.5" stroke="#8E29EE"/>
                <line x1="1113" y1="243.5" x2="1101" y2="243.5" stroke="#8E29EE"/>
                <line x1="1150" y1="243.5" x2="1138" y2="243.5" stroke="#8E29EE"/>
                <line x1="1184" y1="243.5" x2="1172" y2="243.5" stroke="#8E29EE"/>
                <line x1="1167" y1="243.5" x2="1155" y2="243.5" stroke="#8E29EE"/>
                <line x1="1204" y1="243.5" x2="1192" y2="243.5" stroke="#8E29EE"/>
                <line x1="1238" y1="243.5" x2="1226" y2="243.5" stroke="#8E29EE"/>
                <line x1="1221" y1="243.5" x2="1209" y2="243.5" stroke="#8E29EE"/>
                <path d="M772.5 378.651L815.801 378.651L794.151 416.151L772.5 378.651Z" fill="#8E29EE"/>
                <path d="M776.682 380.769L811.596 381.003L794.342 410.888L776.682 380.769Z" fill="white" className="dark:fill-black"/>
                <line x1="793.5" y1="367" x2="793.5" y2="357" stroke="#8E29EE"/>
                <line x1="793.5" y1="348.957" x2="793.67" y2="338.991" stroke="#8E29EE"/>
                <line x1="793.5" y1="332" x2="793.5" y2="322" stroke="#8E29EE"/>
                <line x1="793.5" y1="315" x2="793.5" y2="305" stroke="#8E29EE"/>
                <line x1="793.503" y1="296.945" x2="794.503" y2="287.945" stroke="#8E29EE"/>
                <line x1="795.515" y1="282.879" x2="797.515" y2="274.879" stroke="#8E29EE"/>
                <line x1="799.646" y1="270.646" x2="806.646" y2="263.646" stroke="#8E29EE"/>
                <line x1="810.735" y1="259.576" x2="818.735" y2="254.576" stroke="#8E29EE"/>
                <line x1="824.831" y1="251.403" x2="832.831" y2="248.529" stroke="#8E29EE"/>
                <line x1="840.895" y1="246.511" x2="850.18" y2="244.511" stroke="#8E29EE"/>
                <line x1="859" y1="244.5" x2="869" y2="244.5" stroke="#8E29EE"/>
                <line x1="878" y1="244.5" x2="888" y2="244.5" stroke="#8E29EE"/>
                <line x1="798.102" y1="428.555" x2="799.102" y2="438.555" stroke="#8E29EE"/>
                <line x1="799.5" y1="444" x2="799.5" y2="455" stroke="#8E29EE"/>
                <line x1="799.5" y1="462" x2="799.5" y2="471" stroke="#8E29EE"/>
                <line x1="799.5" y1="475" x2="799.5" y2="484" stroke="#8E29EE"/>
                <line x1="799.5" y1="489" x2="799.5" y2="499" stroke="#8E29EE"/>
                <line x1="794.011" y1="522.148" x2="790.743" y2="532.699" stroke="#8E29EE"/>
                <line x1="788.458" y1="538.483" x2="783.42" y2="546.272" stroke="#8E29EE"/>
                <line x1="780.32" y1="549.384" x2="774.32" y2="554.384" stroke="#8E29EE"/>
                <path d="M256 705L293.5 683.349V726.651L256 705Z" fill="#8E29EE"/>
                <path d="M262 705L290.5 688.546V721.454L262 705Z" fill="white" className="dark:fill-black"/>
                <line x1="220" y1="705.5" x2="210" y2="705.5" stroke="#8E29EE"/>
                <line x1="197" y1="705.5" x2="187" y2="705.5" stroke="#8E29EE"/>
                <line x1="244" y1="705.5" x2="234" y2="705.5" stroke="#8E29EE"/>
                <line x1="315" y1="705.5" x2="305" y2="705.5" stroke="#8E29EE"/>
                </g>
                <defs>
                <clipPath id="clip0_169_1150">
                <rect width="1280" height="941" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <svg width="1536" height="1030" className="hidden xl:inline" viewBox="0 0 1536 1030" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_173_1286)">
                <rect width="1536" height="1030" fill="white" className="dark:fill-black"/>
                <rect width="1534" height="100" fill="white" className="dark:fill-black"/>
                <rect y="880" width="1536" height="150" fill="white" className="dark:fill-black"/>
                <path d="M-464.525 635.731C-484.052 616.205 -484.052 584.547 -464.526 565.021L83.0206 17.4745C102.547 -2.05169 134.205 -2.05166 153.731 17.4746L548.112 411.856C567.639 431.382 567.639 463.04 548.112 482.566L0.56624 1030.11C-18.96 1049.64 -50.6182 1049.64 -70.1444 1030.11L-464.525 635.731Z" fill="#470487"/>
                <line x1="84" y1="705.5" x2="74" y2="705.5" stroke="#8E29EE"/>
                <line x1="376" y1="705.5" x2="366" y2="705.5" stroke="#8E29EE"/>
                <line x1="357" y1="705.5" x2="347" y2="705.5" stroke="#8E29EE"/>
                <line x1="394" y1="705.5" x2="384" y2="705.5" stroke="#8E29EE"/>
                <line x1="414" y1="705.5" x2="404" y2="705.5" stroke="#8E29EE"/>
                <line x1="687.098" y1="697.49" x2="677.098" y2="699.49" stroke="#8E29EE"/>
                <line x1="701.108" y1="694.488" x2="692.108" y2="696.488" stroke="#8E29EE"/>
                <line x1="715.186" y1="689.464" x2="705.186" y2="693.464" stroke="#8E29EE"/>
                <line x1="727.265" y1="682.424" x2="719.265" y2="687.424" stroke="#8E29EE"/>
                <line x1="738.3" y1="674.4" x2="730.3" y2="680.4" stroke="#8E29EE"/>
                <line x1="750.3" y1="665.4" x2="742.3" y2="671.4" stroke="#8E29EE"/>
                <line x1="765.186" y1="659.464" x2="755.186" y2="663.464" stroke="#8E29EE"/>
                <line x1="780.186" y1="653.464" x2="770.186" y2="657.464" stroke="#8E29EE"/>
                <line x1="795.186" y1="647.464" x2="785.186" y2="651.464" stroke="#8E29EE"/>
                <line x1="809.243" y1="640.437" x2="800.243" y2="645.437" stroke="#8E29EE"/>
                <line x1="809.243" y1="640.437" x2="800.243" y2="645.437" stroke="#8E29EE"/>
                <line x1="823.243" y1="632.437" x2="814.243" y2="637.437" stroke="#8E29EE"/>
                <line x1="837.243" y1="624.437" x2="828.243" y2="629.437" stroke="#8E29EE"/>
                <line x1="837.243" y1="624.437" x2="828.243" y2="629.437" stroke="#8E29EE"/>
                <line x1="851.243" y1="616.437" x2="842.243" y2="621.437" stroke="#8E29EE"/>
                <line x1="897.277" y1="588.416" x2="888.277" y2="594.416" stroke="#8E29EE"/>
                <line x1="911.203" y1="582.457" x2="902.203" y2="586.457" stroke="#8E29EE"/>
                <line x1="926.144" y1="577.479" x2="916.144" y2="580.479" stroke="#8E29EE"/>
                <line x1="941.203" y1="571.457" x2="932.203" y2="575.457" stroke="#8E29EE"/>
                <line x1="955.203" y1="565.457" x2="946.203" y2="569.457" stroke="#8E29EE"/>
                <line x1="968.243" y1="558.437" x2="959.243" y2="563.437" stroke="#8E29EE"/>
                <line x1="981.3" y1="550.4" x2="973.3" y2="556.4" stroke="#8E29EE"/>
                <line x1="29" y1="705.5" x2="19" y2="705.5" stroke="#8E29EE"/>
                <line x1="10" y1="705.5" y2="705.5" stroke="#8E29EE"/>
                <line x1="47" y1="705.5" x2="37" y2="705.5" stroke="#8E29EE"/>
                <line x1="66" y1="705.5" x2="56" y2="705.5" stroke="#8E29EE"/>
                <line x1="220" y1="705.5" x2="210" y2="705.5" stroke="#8E29EE"/>
                <line x1="179" y1="705.5" x2="169" y2="705.5" stroke="#8E29EE"/>
                <line x1="124" y1="705.5" x2="114" y2="705.5" stroke="#8E29EE"/>
                <line x1="105" y1="705.5" x2="95" y2="705.5" stroke="#8E29EE"/>
                <line x1="142" y1="705.5" x2="132" y2="705.5" stroke="#8E29EE"/>
                <line x1="161" y1="705.5" x2="151" y2="705.5" stroke="#8E29EE"/>
                <line x1="338" y1="705.5" x2="328" y2="705.5" stroke="#8E29EE"/>
                <path d="M852.5 615.651L874.151 578.151L895.801 615.651L852.5 615.651Z" fill="#8E29EE"/>
                <path d="M857.696 612.651L874.151 584.151L890.605 612.651L857.696 612.651Z" fill="white" className="dark:fill-black"/>
                <path d="M632 705L669.5 683.349V726.651L632 705Z" fill="#8E29EE"/>
                <path d="M638 705L666.5 688.546V721.454L638 705Z" fill="white" className="dark:fill-black"/>
                <line x1="1010.49" y1="499.089" x2="1008.49" y2="510.089" stroke="#8E29EE"/>
                <circle cx="1142.5" cy="237.5" r="36.5" fill="white" className="dark:fill-black" stroke="#8E29EE" strokeWidth="2"/>
                <circle cx="1496.5" cy="236.5" r="36.5" fill="white" className="dark:fill-black" stroke="#8E29EE" strokeWidth="2"/>
                <line x1="1199" y1="237.5" x2="1187" y2="237.5" stroke="#8E29EE"/>
                <line x1="1233" y1="237.5" x2="1221" y2="237.5" stroke="#8E29EE"/>
                <line x1="1216" y1="237.5" x2="1204" y2="237.5" stroke="#8E29EE"/>
                <line x1="1253" y1="237.5" x2="1241" y2="237.5" stroke="#8E29EE"/>
                <line x1="1287" y1="237.5" x2="1275" y2="237.5" stroke="#8E29EE"/>
                <line x1="1270" y1="237.5" x2="1258" y2="237.5" stroke="#8E29EE"/>
                <line x1="1307" y1="237.5" x2="1295" y2="237.5" stroke="#8E29EE"/>
                <line x1="1341" y1="237.5" x2="1329" y2="237.5" stroke="#8E29EE"/>
                <line x1="1324" y1="237.5" x2="1312" y2="237.5" stroke="#8E29EE"/>
                <line x1="1361" y1="237.5" x2="1349" y2="237.5" stroke="#8E29EE"/>
                <line x1="1395" y1="237.5" x2="1383" y2="237.5" stroke="#8E29EE"/>
                <line x1="1378" y1="237.5" x2="1366" y2="237.5" stroke="#8E29EE"/>
                <line x1="1415" y1="237.5" x2="1403" y2="237.5" stroke="#8E29EE"/>
                <line x1="1449" y1="237.5" x2="1437" y2="237.5" stroke="#8E29EE"/>
                <line x1="1432" y1="237.5" x2="1420" y2="237.5" stroke="#8E29EE"/>
                <path d="M983.5 372.651L1026.8 372.651L1005.15 410.151L983.5 372.651Z" fill="#8E29EE"/>
                <path d="M987.682 374.769L1022.6 375.003L1005.34 404.888L987.682 374.769Z" fill="white" className="dark:fill-black"/>
                <line x1="1004.5" y1="361" x2="1004.5" y2="351" stroke="#8E29EE"/>
                <line x1="1004.5" y1="342.957" x2="1004.67" y2="332.991" stroke="#8E29EE"/>
                <line x1="1004.5" y1="326" x2="1004.5" y2="316" stroke="#8E29EE"/>
                <line x1="1004.5" y1="309" x2="1004.5" y2="299" stroke="#8E29EE"/>
                <line x1="1004.5" y1="290.945" x2="1005.5" y2="281.945" stroke="#8E29EE"/>
                <line x1="1006.51" y1="276.879" x2="1008.51" y2="268.879" stroke="#8E29EE"/>
                <line x1="1010.65" y1="264.646" x2="1017.65" y2="257.646" stroke="#8E29EE"/>
                <line x1="1021.74" y1="253.576" x2="1029.73" y2="248.576" stroke="#8E29EE"/>
                <line x1="1035.83" y1="245.403" x2="1043.83" y2="242.529" stroke="#8E29EE"/>
                <line x1="1051.89" y1="240.511" x2="1061.18" y2="238.511" stroke="#8E29EE"/>
                <line x1="1070" y1="238.5" x2="1080" y2="238.5" stroke="#8E29EE"/>
                <line x1="1089" y1="238.5" x2="1099" y2="238.5" stroke="#8E29EE"/>
                <line x1="1009.1" y1="422.555" x2="1010.1" y2="432.555" stroke="#8E29EE"/>
                <line x1="1010.5" y1="438" x2="1010.5" y2="449" stroke="#8E29EE"/>
                <line x1="1010.5" y1="456" x2="1010.5" y2="465" stroke="#8E29EE"/>
                <line x1="1010.5" y1="469" x2="1010.5" y2="478" stroke="#8E29EE"/>
                <line x1="1010.5" y1="483" x2="1010.5" y2="493" stroke="#8E29EE"/>
                <line x1="1005.01" y1="516.148" x2="1001.74" y2="526.699" stroke="#8E29EE"/>
                <line x1="999.458" y1="532.482" x2="994.42" y2="540.271" stroke="#8E29EE"/>
                <line x1="991.32" y1="543.384" x2="985.32" y2="548.384" stroke="#8E29EE"/>
                <path d="M256 705L293.5 683.349V726.651L256 705Z" fill="#8E29EE"/>
                <path d="M262 705L290.5 688.546V721.454L262 705Z" fill="#470487"/>
                <line x1="220" y1="705.5" x2="210" y2="705.5" stroke="#8E29EE"/>
                <line x1="197" y1="705.5" x2="187" y2="705.5" stroke="#8E29EE"/>
                <line x1="244" y1="705.5" x2="234" y2="705.5" stroke="#8E29EE"/>
                <line x1="315" y1="705.5" x2="305" y2="705.5" stroke="#8E29EE"/>
                <line x1="499" y1="705.5" x2="489" y2="705.5" stroke="#8E29EE"/>
                <line x1="480" y1="705.5" x2="470" y2="705.5" stroke="#8E29EE"/>
                <line x1="517" y1="705.5" x2="507" y2="705.5" stroke="#8E29EE"/>
                <line x1="537" y1="705.5" x2="527" y2="705.5" stroke="#8E29EE"/>
                <line x1="578" y1="705.5" x2="568" y2="705.5" stroke="#8E29EE"/>
                <line x1="559" y1="705.5" x2="549" y2="705.5" stroke="#8E29EE"/>
                <line x1="596" y1="705.5" x2="586" y2="705.5" stroke="#8E29EE"/>
                <line x1="616" y1="705.5" x2="606" y2="705.5" stroke="#8E29EE"/>
                <line x1="461" y1="705.5" x2="451" y2="705.5" stroke="#8E29EE"/>
                <line x1="438" y1="705.5" x2="428" y2="705.5" stroke="#8E29EE"/>
                </g>
                <defs>
                <clipPath id="clip0_173_1286">
                <rect width="1536" height="1030" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    )
}