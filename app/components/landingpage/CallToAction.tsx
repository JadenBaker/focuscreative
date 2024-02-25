'use client'

import { motion } from 'framer-motion';

export default function CallToAction() {
    return (
        <div className="col-span-8 overflow-x-hidden relative h-[710px] grid grid-cols-8">
            <h1 className="text-4xl font-bold max-w-[400px] sm:max-w-[500px] absolute right-0
                my-20 px-5 dark:text-white md:max-w-[600px] text-end xl:col-end-8 text-black">
                Spend <span className="text-[#470787]">More Time</span> with your <span className="text-[#470787]">Clients</span>,
                while we handle the back end.
            </h1>
            <svg width="650" height="385" className="lg:hidden absolute bottom-0 left-0" viewBox="0 0 650 385" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="649" height="384" fill="white" className='dark:fill-black'/>
                <rect x="0.5" y="0.5" width="649" height="384"/>
                <line y1="49" x2="10" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="37" y1="49" x2="47" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="18" y1="49" x2="28" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="165" y1="49" x2="175" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="183" y1="49" x2="193" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="220" y1="49" x2="230" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="201" y1="49" x2="211" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="295" y1="49" x2="305" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="313" y1="49" x2="323" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="350" y1="49" x2="360" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="331" y1="49" x2="341" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <path d="M286 50L241 75.9808V24.0192L286 50Z" fill="#470487" className='dark:fill-[#8E29EE]'/>
                <path d="M281 50L243.5 71.6506V28.3494L281 50Z" fill="white" className='dark:fill-black'/>
                <path d="M410 50L365 75.9808V24.0192L410 50Z" fill="#470487" className='dark:fill-[#8E29EE]'/>
                <path d="M425 338L380 363.981V312.019L425 338Z" fill="#470487" className='dark:fill-[#8E29EE]'/>
                <path d="M420 338L382.5 359.651V316.349L420 338Z" fill="white" className='dark:fill-black'/>
                <circle cx="106" cy="50" r="47.5" fill="white" stroke="#470487" className="dark:stroke-[#8E29EE] dark:fill-black" strokeWidth="5"/>
                <line x1="107" y1="114" x2="107" y2="124" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="107" y1="133" x2="107" y2="143" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="107" y1="153" x2="107" y2="163" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="107.251" y1="170.884" x2="108.123" y2="180.845" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="109.985" y1="188.826" x2="111.721" y2="198.674" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="113.966" y1="205.741" x2="116.554" y2="215.4" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="118.94" y1="221.658" x2="122.36" y2="231.055" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="124.906" y1="236.577" x2="129.132" y2="245.64" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="132.819" y1="251.426" x2="138.555" y2="259.618" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="143.766" y1="265.357" x2="150.194" y2="273.018" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="155.707" y1="278.293" x2="162.778" y2="285.364" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="169.643" y1="290.234" x2="177.303" y2="296.662" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="184.574" y1="301.181" x2="192.765" y2="306.917" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="199.5" y1="311.134" x2="208.16" y2="316.134" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="215.423" y1="319.094" x2="224.486" y2="323.32" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="232.342" y1="326.06" x2="241.739" y2="329.48" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="249.259" y1="331.034" x2="258.918" y2="333.622" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="266.079" y1="334.441" x2="275.927" y2="336.177" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="283.087" y1="337.004" x2="293.049" y2="337.875" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="302" y1="338" x2="312" y2="338" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="319" y1="338" x2="329" y2="338" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="338" y1="339" x2="348" y2="339" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="355" y1="339" x2="365" y2="339" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="437" y1="338" x2="447" y2="338" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="459" y1="337" x2="469" y2="337" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="476" y1="337" x2="486" y2="337" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="495" y1="337" x2="505" y2="337" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="512" y1="337" x2="522" y2="337" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="530" y1="337" x2="540" y2="337" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="548.342" y1="339.06" x2="557.739" y2="342.48" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="564.643" y1="347.234" x2="572.303" y2="353.662" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="576.866" y1="360.5" x2="581.866" y2="369.16" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="583.985" y1="374.826" x2="585.721" y2="384.674" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
            </svg>
            <svg width="886" height="396" className="hidden lg:inline absolute bottom-0 left-0" viewBox="0 0 886 396" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_161_534)">
                <rect width="886" height="396" fill="white" className='dark:fill-black'/>
                <line y1="49" x2="10" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="18" y1="49" x2="28" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="55" y1="49" x2="65" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="36" y1="49" x2="46" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="76" y1="49" x2="86" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="94" y1="49" x2="104" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="131" y1="49" x2="141" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="112" y1="49" x2="122" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="268" y1="49" x2="278" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="286" y1="49" x2="296" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="323" y1="49" x2="333" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="304" y1="49" x2="314" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="344" y1="49" x2="354" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="362" y1="49" x2="372" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="399" y1="49" x2="409" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="380" y1="49" x2="390" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="479" y1="49" x2="489" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="497" y1="49" x2="507" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="534" y1="49" x2="544" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="515" y1="49" x2="525" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="555" y1="49" x2="565" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="573" y1="49" x2="583" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="610" y1="49" x2="620" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="591" y1="49" x2="601" y2="49" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <path d="M465 50L420 75.9808V24.0192L465 50Z" fill="#470487" className='dark:fill-[#8E29EE]'/>
                <path d="M460 50L422.5 71.6506V28.3494L460 50Z" fill="white" className='dark:fill-black'/>
                <path d="M670 50L625 75.9808V24.0192L670 50Z" fill="#470487" className='dark:fill-[#8E29EE]'/>
                <path d="M595 337L550 362.981V311.019L595 337Z" fill="#470487" className='dark:fill-[#8E29EE]'/>
                <path d="M590 337L552.5 358.651V315.349L590 337Z" fill="white" className='dark:fill-black'/>
                <circle cx="205" cy="50" r="47.5" fill="white" className='dark:fill-black dark:stroke-[#8E29EE]' stroke="#470487" strokeWidth="5"/>
                <line x1="206" y1="114" x2="206" y2="124" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="206" y1="133" x2="206" y2="143" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="206" y1="153" x2="206" y2="163" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="206.251" y1="170.884" x2="207.123" y2="180.845" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="208.985" y1="188.826" x2="210.721" y2="198.674" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="212.966" y1="205.741" x2="215.554" y2="215.4" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="217.94" y1="221.658" x2="221.36" y2="231.055" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="223.906" y1="236.577" x2="228.132" y2="245.64" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="231.819" y1="251.426" x2="237.555" y2="259.618" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="242.766" y1="265.357" x2="249.194" y2="273.018" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="254.707" y1="278.293" x2="261.778" y2="285.364" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="268.643" y1="290.234" x2="276.303" y2="296.662" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="283.574" y1="301.181" x2="291.765" y2="306.917" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="298.5" y1="311.134" x2="307.16" y2="316.134" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="314.423" y1="319.094" x2="323.486" y2="323.32" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="331.342" y1="326.06" x2="340.739" y2="329.48" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="348.259" y1="331.034" x2="357.918" y2="333.622" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="365.079" y1="334.441" x2="374.927" y2="336.177" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="382.087" y1="337.004" x2="392.049" y2="337.875" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="401" y1="338" x2="411" y2="338" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="418" y1="338" x2="428" y2="338" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="437" y1="338" x2="447" y2="338" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="454" y1="338" x2="464" y2="338" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="472" y1="338" x2="482" y2="338" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="489" y1="338" x2="499" y2="338" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="508" y1="338" x2="518" y2="338" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="525" y1="338" x2="535" y2="338" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="607" y1="337" x2="617" y2="337" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="624" y1="337" x2="634" y2="337" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="643" y1="337" x2="653" y2="337" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="660" y1="337" x2="670" y2="337" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="678" y1="337" x2="688" y2="337" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="695" y1="337" x2="705" y2="337" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="714" y1="337" x2="724" y2="337" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="731" y1="337" x2="741" y2="337" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="750" y1="337" x2="760" y2="337" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="767" y1="337" x2="777" y2="337" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="786" y1="337" x2="796" y2="337" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="803" y1="337" x2="813" y2="337" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="821" y1="337" x2="831" y2="337" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="839.342" y1="339.06" x2="848.739" y2="342.48" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="855.643" y1="347.234" x2="863.303" y2="353.662" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="867.866" y1="360.5" x2="872.866" y2="369.16" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="874.985" y1="374.826" x2="876.721" y2="384.674" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                <line x1="877" y1="389" x2="877" y2="396" stroke="#470487" className="dark:stroke-[#8E29EE]" strokeWidth="2"/>
                </g>
                <rect x="0.5" y="0.5" width="885" height="395"/>
                <defs>
                <clipPath id="clip0_161_534">
                <rect width="886" height="396" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <motion.button 
                whileHover={{ scale : 1.03 }}
                whileTap={{ scale : 0.95 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="border-2 rounded-md py-4 bg-white text-[#470787] dark:border-[#8E29EE]
                dark:text-[#8E29EE] w-[250px] absolute top-[500px] right-10 sm:right-5 dark:bg-black
                dark:hover:bg-[#8E29EE] sm:top-[345px] lg:top-[334px] dark:hover:text-white 
                border-[#470487] hover:bg-[#470787] font-bold hover:text-white xl:col-end-8">
                Get Started
            </motion.button>
        </div>
    )
}