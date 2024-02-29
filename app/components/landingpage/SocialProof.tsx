'use client'

import { motion } from 'framer-motion';
import ReviewScroll from './ReviewScroll';

export default function SocialProof() {
    return (
        <div className="col-span-8 bg-[#333333] grid grid-cols-8 my-40 overflow-x-hidden relative bg-white dark:bg-black">
            <div className="bg-[#470787] col-span-8 relative h-[280px] grid grid-cols-8">
                <h1 className="text-4xl font-bold w-[300px] sm:w-[400px] text-end text-white
                    absolute right-5 xl:col-end-8 mt-10 2xl:col-end-7">
                    Dont just take our word for it,
                    see what other <span className="text-[#8E28EE]"> Customers </span>
                    are <span className="text-[#8E28EE]"> Saying </span>
                </h1>
            </div>
            <div className='absolute w-[100%] top-[880px] sm:top-[920px] md:top-[940px] xl:top-[1000px] 2xl:pr-[300px]'>
                <h1 className='text-3xl font-bold text-end px-5 sm:text-center dark:text-white text-black'>
                    Tell us what <span className='text-[#8E29EE] whitespace-nowrap'>you think.</span>
                </h1>
            </div>            
            <form className="rounded-md left-5 right-5 p-5 bg-white shadow-md hover:shadow-lg dark:bg-opacity-60
                absolute top-[1040px] border sm:sm:top-[1125px] sm:w-[600px] m-auto lg:top-[1150px]
                lg:w-[700px] lg:left-[230px] xl:left-[-300px] 2xl:left-0 dark:bg-black dark:border-0">
                <textarea 
                    className="w-full h-[200px] border-2 border-gray-200 rounded-md p-5 min-h-[220px] max-h-[220px]
                    bg-white dark:bg-[#470787] dark:border-black dark:outline-none dark:text-white
                    text-medium dark:placeholder-[#8E28EE] focus:border-[#470787] outline-none"
                    placeholder="Comment here..."
                />
                <div className="flex flex-col sm:items-center sm:flex-row
                    sm:space-x-5 space-y-5 sm:space-y-0 mt-3">
                    <input 
                        type="text"
                        placeholder="First name"
                        maxLength={20}
                        className="rounded-md py-4 rounded-md px-2 bg-white
                        border-2 flex-1 dark:bg-[#470787] dark:border-black
                        focus:border-[#470787] outline-none dark:placeholder-[#8E28EE]
                        dark:text-white"
                    />
                    <input 
                        type="text"
                        placeholder="Last Initial"
                        maxLength={1}
                        className="rounded-md py-4 rounded-md px-2 bg-white
                        border-2 min-w-[50px] dark:bg-[#470787] dark:border-black
                        focus:border-[#470787] outline-none dark:placeholder-[#8E28EE]
                        dark:text-white"
                    />
                </div>
                <motion.button
                    whileHover={{ scale : 1.05 }}
                    whileTap={{ scale : .95 }}
                    transition={{ duration : .5, ease : 'easeInOut'}}
                    className='py-3 px-12 rounded-md border-2 border-[#470787]
                    mt-5 hover:bg-[#470787] hover:text-white dark:text-white
                    dark:bg-[#470787] font-medium dark:bg-black dark:hover:bg-[#470787]'
                >
                    Leave a review
                </motion.button>
            </form>
            <ReviewScroll />
            <div className="col-span-8">
                <svg width="650" height="1300" className='sm:hidden' viewBox="0 0 650 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_187_1476)">
                    <rect width="650" height="1300" fill="white" className='dark:fill-black'/>
                    <path d="M1437.5 0C1424.83 18.3333 1389.2 55 1348 55C1306.8 55 1278.17 55 1269 55C1247 53 1202.1 59.5 1198.5 101.5C1194.9 143.5 1197 165 1198.5 170.5C1200.33 190.167 1197.6 231.2 1172 238C1140 246.5 1138 233.5 1136.5 278.5C1135.3 314.5 1136 351.5 1136.5 365.5C1136.67 382 1129.1 415.2 1097.5 416C1058 417 947 410.5 946 557.5C945.2 675.1 945.667 733.833 946 748.5C944.167 797.5 913.4 895.5 805 895.5C696.6 895.5 524.167 895.5 451.5 895.5H265.5C217.667 900.667 122.2 878.5 123 748.5C123.8 618.5 123.333 567 123 557.5C121.5 510.333 94.8 416 0 416" stroke="#470787" strokeWidth="50"/>
                    <path d="M142 0H650V875H152C146.477 875 142 870.523 142 865V0Z" fill="#470787"/>
                    <rect width="182" height="438" fill="#470787"/>
                    <rect x="91" width="91" height="517" fill="#470787"/>
                    <line y1="1274" x2="10" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="21" y1="1274" x2="31" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="42" y1="1274" x2="52" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="65" y1="1274" x2="75" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="161" y1="1274" x2="171" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="182" y1="1274" x2="192" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="203" y1="1274" x2="213" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="226" y1="1274" x2="236" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="250" y1="1274" x2="260" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="271" y1="1274" x2="281" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="292" y1="1274" x2="302" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="413.795" y1="1236.79" x2="423.708" y2="1233.51" stroke="#470487" strokeWidth="2"/>
                    <line x1="142" y1="1274" x2="152" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="430.647" y1="1231.32" x2="440.409" y2="1228.05" stroke="#470487" strokeWidth="2"/>
                    <line x1="382.083" y1="1247.67" x2="391.996" y2="1244.39" stroke="#470487" strokeWidth="2"/>
                    <line x1="398.934" y1="1242.2" x2="408.696" y2="1238.93" stroke="#470487" strokeWidth="2"/>
                    <line x1="347.399" y1="1259.63" x2="357.313" y2="1256.35" stroke="#470487" strokeWidth="2"/>
                    <line x1="364.251" y1="1254.16" x2="374.012" y2="1250.89" stroke="#470487" strokeWidth="2"/>
                    <line x1="315.686" y1="1270.5" x2="325.6" y2="1267.23" stroke="#470487" strokeWidth="2"/>
                    <line x1="332.538" y1="1265.04" x2="342.299" y2="1261.77" stroke="#470487" strokeWidth="2"/>
                    <line x1="547.71" y1="1188.59" x2="557.521" y2="1185.02" stroke="#470487" strokeWidth="2"/>
                    <line x1="564.39" y1="1182.62" x2="574.049" y2="1179.06" stroke="#470487" strokeWidth="2"/>
                    <line x1="516.338" y1="1200.42" x2="526.149" y2="1196.85" stroke="#470487" strokeWidth="2"/>
                    <line x1="533.018" y1="1194.45" x2="542.677" y2="1190.89" stroke="#470487" strokeWidth="2"/>
                    <line x1="482.03" y1="1213.41" x2="491.84" y2="1209.84" stroke="#470487" strokeWidth="2"/>
                    <line x1="498.71" y1="1207.44" x2="508.369" y2="1203.88" stroke="#470487" strokeWidth="2"/>
                    <line x1="450.658" y1="1225.24" x2="460.469" y2="1221.67" stroke="#470487" strokeWidth="2"/>
                    <line x1="467.338" y1="1219.27" x2="476.997" y2="1215.71" stroke="#470487" strokeWidth="2"/>
                    <path d="M128 1275L90.5 1296.65V1253.35L128 1275Z" fill="#470487"/>
                    <path d="M123 1275L93 1292.32V1257.68L123 1275Z" fill="white" className='dark:fill-black'/>
                    <path d="M616.881 1159.66L592.044 1195.13L573.744 1155.88L616.881 1159.66Z" fill="#470487"/>
                    <path d="M612.35 1161.77L592.481 1190.15L577.841 1158.75L612.35 1161.77Z" fill="white" className='dark:fill-black'/>
                    <line x1="623.577" y1="1157.32" x2="632.64" y2="1153.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="638.577" y1="1150.32" x2="647.64" y2="1146.09" stroke="#470487" strokeWidth="2"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_187_1476">
                    <rect width="650" height="1300" fill="white" className='dark:fill-black'/>
                    </clipPath>
                    </defs>
                </svg>
                <svg width="768" height="1300" className='hidden sm:inline md:hidden' viewBox="0 0 768 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_187_1493)">
                    <rect width="768" height="1300" fill="white" className='dark:fill-black'/>
                    <path d="M1437.5 0C1424.83 18.3333 1389.2 55 1348 55C1306.8 55 1278.17 55 1269 55C1247 53 1202.1 59.5 1198.5 101.5C1194.9 143.5 1197 165 1198.5 170.5C1200.33 190.167 1197.6 231.2 1172 238C1140 246.5 1138 233.5 1136.5 278.5C1135.3 314.5 1136 351.5 1136.5 365.5C1136.67 382 1129.1 415.2 1097.5 416C1058 417 947 410.5 946 557.5C945.2 675.1 945.667 733.833 946 748.5C944.167 797.5 913.4 895.5 805 895.5C696.6 895.5 524.167 895.5 451.5 895.5H265.5C217.667 900.667 122.2 878.5 123 748.5C123.8 618.5 123.333 567 123 557.5C121.5 510.333 94.8 416 0 416" stroke="#470787" strokeWidth="50"/>
                    <path d="M142 0H768V865C768 870.523 763.523 875 758 875H152C146.477 875 142 870.523 142 865V0Z" fill="#470787"/>
                    <rect width="259" height="438" fill="#470787"/>
                    <rect x="91" width="128" height="517" fill="#470787"/>
                    <line y1="1274" x2="10" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="21" y1="1274" x2="31" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="42" y1="1274" x2="52" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="65" y1="1274" x2="75" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="161" y1="1274" x2="171" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="182" y1="1274" x2="192" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="203" y1="1274" x2="213" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="226" y1="1274" x2="236" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="250" y1="1274" x2="260" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="271" y1="1274" x2="281" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="292" y1="1274" x2="302" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="413.795" y1="1236.79" x2="423.708" y2="1233.51" stroke="#470487" strokeWidth="2"/>
                    <line x1="142" y1="1274" x2="152" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="430.647" y1="1231.32" x2="440.408" y2="1228.05" stroke="#470487" strokeWidth="2"/>
                    <line x1="382.082" y1="1247.67" x2="391.996" y2="1244.39" stroke="#470487" strokeWidth="2"/>
                    <line x1="398.934" y1="1242.2" x2="408.696" y2="1238.93" stroke="#470487" strokeWidth="2"/>
                    <line x1="347.399" y1="1259.63" x2="357.312" y2="1256.35" stroke="#470487" strokeWidth="2"/>
                    <line x1="364.251" y1="1254.16" x2="374.012" y2="1250.89" stroke="#470487" strokeWidth="2"/>
                    <line x1="315.686" y1="1270.5" x2="325.6" y2="1267.23" stroke="#470487" strokeWidth="2"/>
                    <line x1="332.538" y1="1265.04" x2="342.299" y2="1261.77" stroke="#470487" strokeWidth="2"/>
                    <line x1="547.71" y1="1188.59" x2="557.521" y2="1185.02" stroke="#470487" strokeWidth="2"/>
                    <line x1="564.39" y1="1182.62" x2="574.049" y2="1179.06" stroke="#470487" strokeWidth="2"/>
                    <line x1="516.338" y1="1200.42" x2="526.149" y2="1196.85" stroke="#470487" strokeWidth="2"/>
                    <line x1="533.018" y1="1194.45" x2="542.677" y2="1190.89" stroke="#470487" strokeWidth="2"/>
                    <line x1="482.03" y1="1213.41" x2="491.84" y2="1209.84" stroke="#470487" strokeWidth="2"/>
                    <line x1="498.71" y1="1207.44" x2="508.369" y2="1203.88" stroke="#470487" strokeWidth="2"/>
                    <line x1="450.658" y1="1225.24" x2="460.469" y2="1221.67" stroke="#470487" strokeWidth="2"/>
                    <line x1="467.338" y1="1219.27" x2="476.997" y2="1215.71" stroke="#470487" strokeWidth="2"/>
                    <path d="M128 1275L90.5 1296.65V1253.35L128 1275Z" fill="#470487"/>
                    <path d="M123 1275L93 1292.32V1257.68L123 1275Z" fill="white" className='dark:fill-black'/>
                    <path d="M616.881 1159.66L592.044 1195.13L573.744 1155.88L616.881 1159.66Z" fill="#470487"/>
                    <path d="M612.35 1161.77L592.481 1190.15L577.841 1158.75L612.35 1161.77Z" fill="white" className='dark:fill-black'/>
                    <line x1="623.577" y1="1157.32" x2="632.64" y2="1153.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="638.577" y1="1150.32" x2="647.64" y2="1146.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="654.577" y1="1143.32" x2="663.64" y2="1139.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="670.577" y1="1136.32" x2="679.64" y2="1132.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="687.577" y1="1129.32" x2="696.64" y2="1125.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="702.577" y1="1122.32" x2="711.64" y2="1118.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="718.577" y1="1115.32" x2="727.64" y2="1111.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="734.577" y1="1108.32" x2="743.64" y2="1104.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="749.577" y1="1101.32" x2="758.64" y2="1097.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="766.577" y1="1094.32" x2="775.64" y2="1090.09" stroke="#470487" strokeWidth="2"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_187_1493">
                    <rect width="768" height="1300" fill="white" className='dark:fill-black'/>
                    </clipPath>
                    </defs>
                </svg>
                <svg width="1024" height="1300" className='hidden md:inline lg:hidden' viewBox="0 0 1024 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_187_1502)">
                    <rect width="1024" height="1300" fill="white" className='dark:fill-black'/>
                    <path d="M1437.5 0C1424.83 18.3333 1389.2 55 1348 55C1306.8 55 1278.17 55 1269 55C1247 53 1202.1 59.5 1198.5 101.5C1194.9 143.5 1197 165 1198.5 170.5C1200.33 190.167 1197.6 231.2 1172 238C1140 246.5 1138 233.5 1136.5 278.5C1135.3 314.5 1136 351.5 1136.5 365.5C1136.67 382 1129.1 415.2 1097.5 416C1058 417 947 410.5 946 557.5C945.2 675.1 945.667 733.833 946 748.5C944.167 797.5 913.4 895.5 805 895.5C696.6 895.5 524.167 895.5 451.5 895.5H265.5C217.667 900.667 122.2 878.5 123 748.5C123.8 618.5 123.333 567 123 557.5C121.5 510.333 94.8 416 0 416" stroke="#470787" strokeWidth="50"/>
                    <path d="M142 0H922V866C922 871.523 917.523 876 912 876H152C146.477 876 142 871.523 142 866V0Z" fill="#470787"/>
                    <rect width="337" height="433" fill="#470787"/>
                    <path d="M88 0H191V519H103C94.7157 519 88 512.284 88 504V0Z" fill="#470787"/>
                    <rect x="964" width="60" height="433" fill="#470787"/>
                    <rect x="922" width="42" height="554" fill="#470787"/>
                    <line y1="1274" x2="10" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="21" y1="1274" x2="31" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="42" y1="1274" x2="52" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="65" y1="1274" x2="75" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="161" y1="1274" x2="171" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="182" y1="1274" x2="192" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="203" y1="1274" x2="213" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="226" y1="1274" x2="236" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="250" y1="1274" x2="260" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="271" y1="1274" x2="281" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="292" y1="1274" x2="302" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="413.795" y1="1236.79" x2="423.708" y2="1233.51" stroke="#470487" strokeWidth="2"/>
                    <line x1="142" y1="1274" x2="152" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="430.647" y1="1231.32" x2="440.408" y2="1228.05" stroke="#470487" strokeWidth="2"/>
                    <line x1="382.082" y1="1247.67" x2="391.996" y2="1244.39" stroke="#470487" strokeWidth="2"/>
                    <line x1="398.934" y1="1242.2" x2="408.696" y2="1238.93" stroke="#470487" strokeWidth="2"/>
                    <line x1="347.399" y1="1259.63" x2="357.313" y2="1256.35" stroke="#470487" strokeWidth="2"/>
                    <line x1="364.251" y1="1254.16" x2="374.012" y2="1250.89" stroke="#470487" strokeWidth="2"/>
                    <line x1="315.686" y1="1270.5" x2="325.6" y2="1267.23" stroke="#470487" strokeWidth="2"/>
                    <line x1="332.538" y1="1265.04" x2="342.299" y2="1261.77" stroke="#470487" strokeWidth="2"/>
                    <line x1="547.71" y1="1188.59" x2="557.521" y2="1185.02" stroke="#470487" strokeWidth="2"/>
                    <line x1="564.39" y1="1182.62" x2="574.049" y2="1179.06" stroke="#470487" strokeWidth="2"/>
                    <line x1="516.338" y1="1200.42" x2="526.149" y2="1196.85" stroke="#470487" strokeWidth="2"/>
                    <line x1="533.018" y1="1194.45" x2="542.677" y2="1190.89" stroke="#470487" strokeWidth="2"/>
                    <line x1="482.03" y1="1213.41" x2="491.84" y2="1209.84" stroke="#470487" strokeWidth="2"/>
                    <line x1="498.71" y1="1207.44" x2="508.369" y2="1203.88" stroke="#470487" strokeWidth="2"/>
                    <line x1="450.658" y1="1225.24" x2="460.469" y2="1221.67" stroke="#470487" strokeWidth="2"/>
                    <line x1="467.338" y1="1219.27" x2="476.997" y2="1215.71" stroke="#470487" strokeWidth="2"/>
                    <path d="M128 1275L90.5 1296.65V1253.35L128 1275Z" fill="#470487"/>
                    <path d="M123 1275L93 1292.32V1257.68L123 1275Z" fill="white" className='dark:fill-black'/>
                    <path d="M616.881 1159.66L592.044 1195.13L573.744 1155.88L616.881 1159.66Z" fill="#470487"/>
                    <path d="M612.35 1161.77L592.481 1190.15L577.841 1158.75L612.35 1161.77Z" fill="white" className='dark:fill-black'/>
                    <line x1="623.577" y1="1157.32" x2="632.64" y2="1153.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="638.577" y1="1150.32" x2="647.64" y2="1146.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="654.577" y1="1143.32" x2="663.64" y2="1139.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="670.577" y1="1136.32" x2="679.64" y2="1132.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="687.577" y1="1129.32" x2="696.64" y2="1125.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="702.577" y1="1122.32" x2="711.64" y2="1118.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="718.577" y1="1115.32" x2="727.64" y2="1111.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="734.577" y1="1108.32" x2="743.64" y2="1104.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="749.577" y1="1101.32" x2="758.64" y2="1097.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="766.577" y1="1094.32" x2="775.64" y2="1090.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="781.577" y1="1087.32" x2="790.64" y2="1083.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="797.577" y1="1080.32" x2="806.64" y2="1076.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="813.577" y1="1073.32" x2="822.64" y2="1069.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="828.577" y1="1066.32" x2="837.64" y2="1062.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="844.577" y1="1059.32" x2="853.64" y2="1055.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="860.577" y1="1052.32" x2="869.64" y2="1048.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="876.577" y1="1044.32" x2="885.64" y2="1040.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="892.577" y1="1037.32" x2="901.64" y2="1033.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="907.577" y1="1030.32" x2="916.64" y2="1026.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="923.577" y1="1023.32" x2="932.64" y2="1019.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="939.577" y1="1016.32" x2="948.64" y2="1012.09" stroke="#470487" strokeWidth="2"/>
                    <circle cx="999" cy="986" r="47.5" fill="white" className='dark:fill-black' stroke="#470787" strokeWidth="5"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_187_1502">
                    <rect width="1024" height="1300" fill="white" className='dark:fill-black'/>
                    </clipPath>
                    </defs>
                </svg>
                <svg width="1280" height="1300" className='hidden lg:inline xl:hidden' viewBox="0 0 1280 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_187_1511)">
                    <rect width="1280" height="1300" fill="white" className='dark:fill-black'/>
                    <path d="M139 0H927V863C927 868.523 922.523 873 917 873H149C143.477 873 139 868.523 139 863V0Z" fill="#470787"/>
                    <rect width="310" height="437" fill="#470787"/>
                    <rect x="91" width="117" height="504" fill="#470787"/>
                    <rect x="869" width="106" height="504" fill="#470787"/>
                    <rect x="927" width="201" height="424" fill="#470787"/>
                    <rect x="1091" width="113" height="229" fill="#470787"/>
                    <rect x="1166" width="114" height="76" fill="#470787"/>
                    <path d="M1437 0C1424.34 18.3297 1388.72 54.9892 1347.53 54.9892C1306.35 54.9892 1277.72 54.9892 1268.56 54.9892C1246.57 52.9896 1201.68 59.4883 1198.08 101.48C1194.48 143.472 1196.58 164.968 1198.08 170.467C1199.92 190.129 1197.18 231.155 1171.59 237.953C1139.6 246.452 1137.6 233.454 1136.1 278.445C1134.91 314.438 1135.6 351.431 1136.1 365.428C1136.27 381.925 1128.71 415.119 1097.12 415.918C1057.63 416.918 946.671 410.42 945.671 557.391C944.871 674.968 945.338 733.689 945.671 748.353C943.838 797.344 913.082 895.324 804.72 895.324C696.358 895.324 523.984 895.324 451.343 895.324H265.408C217.591 900.49 122.158 878.328 122.957 748.353C123.757 618.379 123.29 566.889 122.957 557.391C121.458 510.233 94.767 415.918 0 415.918" stroke="#470787" strokeWidth="51"/>
                    <line x1="1262" y1="897" x2="1272" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1242" y1="897" x2="1252" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1221" y1="897" x2="1231" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1202" y1="897" x2="1212" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1181" y1="897" x2="1191" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="897" x2="1170" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="725" x2="1160" y2="715" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="743" x2="1160" y2="733" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="760" x2="1160" y2="750" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="777" x2="1160" y2="767" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="795" x2="1160" y2="785" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="812" x2="1160" y2="802" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="829" x2="1160" y2="819" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="846" x2="1160" y2="836" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="864" x2="1160" y2="854" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="881" x2="1160" y2="871" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="898" x2="1160" y2="888" stroke="#470487" strokeWidth="2"/>
                    <path d="M1161 653L1182.65 690.5H1139.35L1161 653Z" fill="#470487"/>
                    <path d="M1161 658L1178.32 688H1143.68L1161 658Z" fill="white" className='dark:fill-black'/>
                    <line x1="1160" y1="708" x2="1160" y2="698" stroke="#470487" strokeWidth="2"/>
                    <line x1="1048.58" y1="954.32" x2="1057.64" y2="950.094" stroke="#470487" strokeWidth="2"/>
                    <line x1="1064.58" y1="947.32" x2="1073.64" y2="943.094" stroke="#470487" strokeWidth="2"/>
                    <line x1="1079.58" y1="940.32" x2="1088.64" y2="936.094" stroke="#470487" strokeWidth="2"/>
                    <line x1="1095.58" y1="933.32" x2="1104.64" y2="929.094" stroke="#470487" strokeWidth="2"/>
                    <line x1="1111.58" y1="926.32" x2="1120.64" y2="922.094" stroke="#470487" strokeWidth="2"/>
                    <path d="M1160.8 896.651L1139.15 934.151L1117.5 896.651L1160.8 896.651Z" fill="#470487"/>
                    <path d="M1156.47 899.151L1139.15 929.151L1121.83 899.151L1156.47 899.151Z" fill="white" className='dark:fill-black'/>
                    <path d="M1156.86 898.862L1150.24 910.733L1143.27 898.66L1156.86 898.862Z" fill="#470487"/>
                    <circle cx="999" cy="986" r="47.5" fill="white" className='dark:fill-black' stroke="#470787" strokeWidth="5"/>
                    <line y1="1274" x2="10" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="21" y1="1274" x2="31" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="42" y1="1274" x2="52" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="65" y1="1274" x2="75" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="161" y1="1274" x2="171" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="182" y1="1274" x2="192" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="203" y1="1274" x2="213" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="226" y1="1274" x2="236" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="250" y1="1274" x2="260" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="271" y1="1274" x2="281" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="292" y1="1274" x2="302" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="142" y1="1274" x2="152" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="347.399" y1="1259.63" x2="357.312" y2="1256.35" stroke="#470487" strokeWidth="2"/>
                    <line x1="364.251" y1="1254.16" x2="374.012" y2="1250.89" stroke="#470487" strokeWidth="2"/>
                    <line x1="315.686" y1="1270.5" x2="325.6" y2="1267.23" stroke="#470487" strokeWidth="2"/>
                    <line x1="332.538" y1="1265.04" x2="342.3" y2="1261.77" stroke="#470487" strokeWidth="2"/>
                    <path d="M128 1275L90.5 1296.65V1253.35L128 1275Z" fill="#470487"/>
                    <path d="M123 1275L93 1292.32V1257.68L123 1275Z" fill="white" className='dark:fill-black'/>
                    <line x1="413.795" y1="1236.79" x2="423.708" y2="1233.51" stroke="#470487" strokeWidth="2"/>
                    <line x1="430.647" y1="1231.32" x2="440.408" y2="1228.05" stroke="#470487" strokeWidth="2"/>
                    <line x1="382.082" y1="1247.67" x2="391.996" y2="1244.39" stroke="#470487" strokeWidth="2"/>
                    <line x1="398.934" y1="1242.2" x2="408.696" y2="1238.93" stroke="#470487" strokeWidth="2"/>
                    <line x1="547.71" y1="1188.59" x2="557.521" y2="1185.02" stroke="#470487" strokeWidth="2"/>
                    <line x1="564.39" y1="1182.62" x2="574.049" y2="1179.06" stroke="#470487" strokeWidth="2"/>
                    <line x1="516.338" y1="1200.42" x2="526.149" y2="1196.85" stroke="#470487" strokeWidth="2"/>
                    <line x1="533.018" y1="1194.45" x2="542.677" y2="1190.89" stroke="#470487" strokeWidth="2"/>
                    <line x1="482.03" y1="1213.41" x2="491.84" y2="1209.84" stroke="#470487" strokeWidth="2"/>
                    <line x1="498.71" y1="1207.44" x2="508.369" y2="1203.88" stroke="#470487" strokeWidth="2"/>
                    <line x1="450.658" y1="1225.24" x2="460.469" y2="1221.67" stroke="#470487" strokeWidth="2"/>
                    <line x1="467.338" y1="1219.27" x2="476.997" y2="1215.71" stroke="#470487" strokeWidth="2"/>
                    <path d="M616.881 1159.66L592.044 1195.13L573.744 1155.88L616.881 1159.66Z" fill="#470487"/>
                    <path d="M612.35 1161.77L592.481 1190.15L577.841 1158.75L612.35 1161.77Z" fill="white" className='dark:fill-black'/>
                    <line x1="623.577" y1="1157.32" x2="632.64" y2="1153.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="638.577" y1="1150.32" x2="647.64" y2="1146.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="654.577" y1="1143.32" x2="663.64" y2="1139.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="670.577" y1="1136.32" x2="679.64" y2="1132.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="687.577" y1="1129.32" x2="696.64" y2="1125.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="702.577" y1="1122.32" x2="711.64" y2="1118.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="718.577" y1="1115.32" x2="727.64" y2="1111.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="734.577" y1="1108.32" x2="743.64" y2="1104.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="749.577" y1="1101.32" x2="758.64" y2="1097.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="766.577" y1="1094.32" x2="775.64" y2="1090.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="781.577" y1="1087.32" x2="790.64" y2="1083.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="797.577" y1="1080.32" x2="806.64" y2="1076.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="813.577" y1="1073.32" x2="822.64" y2="1069.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="828.577" y1="1066.32" x2="837.64" y2="1062.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="844.577" y1="1059.32" x2="853.64" y2="1055.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="860.577" y1="1052.32" x2="869.64" y2="1048.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="876.577" y1="1044.32" x2="885.64" y2="1040.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="892.577" y1="1037.32" x2="901.64" y2="1033.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="907.577" y1="1030.32" x2="916.64" y2="1026.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="923.577" y1="1023.32" x2="932.64" y2="1019.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="939.577" y1="1016.32" x2="948.64" y2="1012.09" stroke="#470487" strokeWidth="2"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_187_1511">
                    <rect width="1280" height="1300" fill="white" className='dark:fill-black'/>
                    </clipPath>
                    </defs>
                </svg>
                <svg width="1536" height="1300" className='hidden xl:inline' viewBox="0 0 1536 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_187_1520)">
                    <rect width="1536" height="1300" fill="white" className='dark:fill-black'/>
                    <path d="M1437 -1C1424.34 17.3297 1388.72 53.9892 1347.53 53.9892C1306.35 53.9892 1277.72 53.9892 1268.56 53.9892C1246.57 51.9896 1201.68 58.4883 1198.08 100.48C1194.48 142.472 1196.58 163.968 1198.08 169.467C1199.92 189.129 1197.18 230.155 1171.59 236.953C1139.6 245.452 1137.6 232.454 1136.1 277.445C1134.91 313.438 1135.6 350.431 1136.1 364.428C1136.27 380.925 1128.71 414.119 1097.12 414.918C1057.63 415.918 946.671 409.42 945.671 556.391C944.871 673.968 945.338 732.689 945.671 747.353C943.838 796.344 913.082 894.324 804.72 894.324C696.358 894.324 523.984 894.324 451.343 894.324H265.408C217.591 899.49 122.158 877.328 122.957 747.353C123.757 617.379 123.29 565.889 122.957 556.391C121.458 509.233 94.767 414.918 0 414.918" stroke="#470787" strokeWidth="51"/>
                    <line x1="1344" y1="897" x2="1354" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1324" y1="897" x2="1334" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1304" y1="897" x2="1314" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1283" y1="897" x2="1293" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1262" y1="897" x2="1272" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1242" y1="897" x2="1252" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1221" y1="897" x2="1231" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1202" y1="897" x2="1212" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1181" y1="897" x2="1191" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="897" x2="1170" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1363" y1="897" x2="1373" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1437" y1="897" x2="1447" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1456.83" y1="896.752" x2="1466.67" y2="895.015" stroke="#470487" strokeWidth="2"/>
                    <line x1="1475.74" y1="892.622" x2="1485.4" y2="890.034" stroke="#470487" strokeWidth="2"/>
                    <line x1="1493.66" y1="887.481" x2="1503.05" y2="884.06" stroke="#470487" strokeWidth="2"/>
                    <line x1="1510.58" y1="881.32" x2="1519.64" y2="877.094" stroke="#470487" strokeWidth="2"/>
                    <line x1="1526.58" y1="874.32" x2="1535.64" y2="870.094" stroke="#470487" strokeWidth="2"/>
                    <path d="M1423 898L1385.5 919.651V876.349L1423 898Z" fill="#470487"/>
                    <line x1="1160" y1="725" x2="1160" y2="715" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="743" x2="1160" y2="733" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="760" x2="1160" y2="750" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="777" x2="1160" y2="767" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="795" x2="1160" y2="785" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="812" x2="1160" y2="802" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="829" x2="1160" y2="819" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="846" x2="1160" y2="836" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="864" x2="1160" y2="854" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="881" x2="1160" y2="871" stroke="#470487" strokeWidth="2"/>
                    <line x1="1160" y1="898" x2="1160" y2="888" stroke="#470487" strokeWidth="2"/>
                    <path d="M1161 653L1182.65 690.5H1139.35L1161 653Z" fill="#470487"/>
                    <path d="M1161 658L1178.32 688H1143.68L1161 658Z" fill="white" className='dark:fill-black'/>
                    <line x1="1160" y1="708" x2="1160" y2="698" stroke="#470487" strokeWidth="2"/>
                    <line y1="1274" x2="10" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="21" y1="1274" x2="31" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="42" y1="1274" x2="52" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="65" y1="1274" x2="75" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="161" y1="1274" x2="171" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="182" y1="1274" x2="192" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="203" y1="1274" x2="213" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="226" y1="1274" x2="236" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="250" y1="1274" x2="260" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="271" y1="1274" x2="281" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="292" y1="1274" x2="302" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="413.795" y1="1236.79" x2="423.708" y2="1233.51" stroke="#470487" strokeWidth="2"/>
                    <line x1="142" y1="1274" x2="152" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="430.647" y1="1231.32" x2="440.408" y2="1228.05" stroke="#470487" strokeWidth="2"/>
                    <line x1="382.082" y1="1247.67" x2="391.996" y2="1244.39" stroke="#470487" strokeWidth="2"/>
                    <line x1="398.934" y1="1242.2" x2="408.696" y2="1238.93" stroke="#470487" strokeWidth="2"/>
                    <line x1="347.399" y1="1259.63" x2="357.312" y2="1256.35" stroke="#470487" strokeWidth="2"/>
                    <line x1="364.251" y1="1254.16" x2="374.012" y2="1250.89" stroke="#470487" strokeWidth="2"/>
                    <line x1="315.686" y1="1270.5" x2="325.6" y2="1267.23" stroke="#470487" strokeWidth="2"/>
                    <line x1="332.538" y1="1265.04" x2="342.3" y2="1261.77" stroke="#470487" strokeWidth="2"/>
                    <line x1="547.71" y1="1188.59" x2="557.521" y2="1185.02" stroke="#470487" strokeWidth="2"/>
                    <line x1="564.39" y1="1182.62" x2="574.049" y2="1179.06" stroke="#470487" strokeWidth="2"/>
                    <line x1="516.338" y1="1200.42" x2="526.149" y2="1196.85" stroke="#470487" strokeWidth="2"/>
                    <line x1="533.018" y1="1194.45" x2="542.677" y2="1190.89" stroke="#470487" strokeWidth="2"/>
                    <line x1="482.03" y1="1213.41" x2="491.84" y2="1209.84" stroke="#470487" strokeWidth="2"/>
                    <line x1="498.71" y1="1207.44" x2="508.369" y2="1203.88" stroke="#470487" strokeWidth="2"/>
                    <line x1="450.658" y1="1225.24" x2="460.469" y2="1221.67" stroke="#470487" strokeWidth="2"/>
                    <line x1="467.338" y1="1219.27" x2="476.997" y2="1215.71" stroke="#470487" strokeWidth="2"/>
                    <path d="M128 1275L90.5 1296.65V1253.35L128 1275Z" fill="#470487"/>
                    <path d="M123 1275L93 1292.32V1257.68L123 1275Z" fill="white" className='dark:fill-black'/>
                    <path d="M616.881 1159.66L592.044 1195.13L573.744 1155.88L616.881 1159.66Z" fill="#470487"/>
                    <path d="M612.35 1161.77L592.481 1190.15L577.841 1158.75L612.35 1161.77Z" fill="white" className='dark:fill-black'/>
                    <line x1="623.577" y1="1157.32" x2="632.64" y2="1153.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="638.577" y1="1150.32" x2="647.64" y2="1146.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="654.577" y1="1143.32" x2="663.64" y2="1139.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="670.577" y1="1136.32" x2="679.64" y2="1132.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="687.577" y1="1129.32" x2="696.64" y2="1125.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="702.577" y1="1122.32" x2="711.64" y2="1118.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="718.577" y1="1115.32" x2="727.64" y2="1111.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="734.577" y1="1108.32" x2="743.64" y2="1104.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="749.577" y1="1101.32" x2="758.64" y2="1097.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="766.577" y1="1094.32" x2="775.64" y2="1090.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="781.577" y1="1087.32" x2="790.64" y2="1083.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="797.577" y1="1080.32" x2="806.64" y2="1076.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="813.577" y1="1073.32" x2="822.64" y2="1069.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="828.577" y1="1066.32" x2="837.64" y2="1062.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="844.577" y1="1059.32" x2="853.64" y2="1055.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="860.577" y1="1052.32" x2="869.64" y2="1048.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="1048.58" y1="954.32" x2="1057.64" y2="950.094" stroke="#470487" strokeWidth="2"/>
                    <line x1="1064.58" y1="947.32" x2="1073.64" y2="943.094" stroke="#470487" strokeWidth="2"/>
                    <line x1="1079.58" y1="940.32" x2="1088.64" y2="936.094" stroke="#470487" strokeWidth="2"/>
                    <line x1="1095.58" y1="933.32" x2="1104.64" y2="929.094" stroke="#470487" strokeWidth="2"/>
                    <line x1="1111.58" y1="926.32" x2="1120.64" y2="922.094" stroke="#470487" strokeWidth="2"/>
                    <line x1="876.577" y1="1044.32" x2="885.64" y2="1040.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="892.577" y1="1037.32" x2="901.64" y2="1033.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="907.577" y1="1030.32" x2="916.64" y2="1026.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="923.577" y1="1023.32" x2="932.64" y2="1019.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="939.577" y1="1016.32" x2="948.64" y2="1012.09" stroke="#470487" strokeWidth="2"/>
                    <path d="M1160.8 896.651L1139.15 934.151L1117.5 896.651L1160.8 896.651Z" fill="#470487"/>
                    <path d="M1156.47 899.151L1139.15 929.151L1121.83 899.151L1156.47 899.151Z" fill="white" className='dark:fill-black'/>
                    <path d="M1156.86 898.862L1150.24 910.733L1143.27 898.66L1156.86 898.862Z" fill="#470487"/>
                    <path d="M142 0H924V865C924 870.523 919.523 875 914 875H152C146.477 875 142 870.523 142 865V0Z" fill="#470787"/>
                    <rect x="95" width="96" height="515" fill="#470787"/>
                    <rect width="225" height="432" fill="#470787"/>
                    <rect x="901" width="61" height="561" fill="#470787"/>
                    <rect x="1062" width="117" height="244" fill="#470787"/>
                    <rect x="1141" width="193" height="77" fill="#470787"/>
                    <rect x="1293" width="135" height="41" fill="#470787"/>
                    <rect x="1432.88" y="0.61084" width="29.6003" height="28.4861" transform="rotate(-55 1432.88 0.61084)" fill="#470787"/>
                    <rect x="901" width="218" height="435" fill="#470787"/>
                    <circle cx="999" cy="986" r="47.5" fill="white" className='dark:fill-black' stroke="#470787" strokeWidth="5"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_187_1520">
                    <rect width="1536" height="1300" fill="white" className='dark:fill-black'/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    )
}