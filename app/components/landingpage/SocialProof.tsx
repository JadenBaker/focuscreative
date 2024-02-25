'use client'

import { motion } from 'framer-motion';
import ReviewScroll from './ReviewScroll';

export default function SocialProof() {
    return (
        <div className="col-span-8 bg-[#333333] grid grid-cols-8 my-40 overflow-x-hidden relative bg-white dark:bg-black">
            <div className="bg-[#470787] col-span-8 relative h-[280px] grid grid-cols-8">
                <h1 className="text-4xl font-bold w-[300px] text-end text-white
                    absolute right-5 xl:col-end-8 mt-10 2xl:col-end-7">
                    Dont just take our word for it,
                    see what other <span className="text-[#8E28EE]"> Customers </span>
                    are <span className="text-[#8E28EE]"> Saying </span>
                </h1>
            </div>
            <form className="rounded-md left-5 right-5 p-5 bg-white shadow-md hover:shadow-lg
                absolute top-[1040px] border sm:sm:top-[1125px] sm:w-[600px] m-auto lg:top-[1150px]
                lg:w-[700px] lg:left-[230px] xl:left-0 dark:bg-black dark:border-0">
                <textarea 
                    className="w-full h-[200px] border-2 border-gray-200 rounded-md p-5
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
                    whileTap={{ scale : .95 }}
                    transition={{ duration : .3, ease : 'easeInOut'}}
                    className='py-3 px-12 rounded-md border-2 border-[#470787]
                    mt-5 hover:bg-[#470787] hover:text-white
                    dark:text-white dark:bg-[#470787] dark:hover:bg-white
                    dark:hover:text-black dark:hover:border-[#470787] font-medium
                    dark:border-black text-black'
                >
                    Leave a review
                </motion.button>
            </form>
            <ReviewScroll />
            <div className="col-span-8">
                <svg width="650" height="1300" className="sm:hidden" viewBox="0 0 650 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_187_1476)">
                    <rect width="650" height="1300" fill="white" className="dark:fill-black"/>
                    <line y1="1274" x2="10" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="21" y1="1274" x2="31" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="42" y1="1274" x2="52" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="65" y1="1274" x2="75" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="142" y1="1274" x2="152" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="161.826" y1="1273.75" x2="171.674" y2="1272.02" stroke="#470487" strokeWidth="2"/>
                    <line x1="180.741" y1="1269.62" x2="190.4" y2="1267.03" stroke="#470487" strokeWidth="2"/>
                    <line x1="198.658" y1="1264.48" x2="208.055" y2="1261.06" stroke="#470487" strokeWidth="2"/>
                    <line x1="215.577" y1="1258.32" x2="224.64" y2="1254.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="231.577" y1="1251.32" x2="240.64" y2="1247.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="247.577" y1="1244.32" x2="256.64" y2="1240.09" stroke="#470487" strokeWidth="2"/>
                    <path d="M128 1275L90.5 1296.65V1253.35L128 1275Z" fill="#470487"/>
                    <path d="M123 1275L93 1292.32V1257.68L123 1275Z" fill="white" className="dark:fill-black"/>
                    <path d="M1437.5 0C1424.83 18.3333 1389.2 55 1348 55C1306.8 55 1278.17 55 1269 55C1247 53 1202.1 59.5 1198.5 101.5C1194.9 143.5 1197 165 1198.5 170.5C1200.33 190.167 1197.6 231.2 1172 238C1140 246.5 1138 233.5 1136.5 278.5C1135.3 314.5 1136 351.5 1136.5 365.5C1136.67 382 1129.1 415.2 1097.5 416C1058 417 947 410.5 946 557.5C945.2 675.1 945.667 733.833 946 748.5C944.167 797.5 913.4 895.5 805 895.5C696.6 895.5 524.167 895.5 451.5 895.5H265.5C217.667 900.667 122.2 878.5 123 748.5C123.8 618.5 123.333 567 123 557.5C121.5 510.333 94.8 416 0 416" stroke="#470787" strokeWidth="50"/>
                    <path d="M142 0H650V875H152C146.477 875 142 870.523 142 865V0Z" fill="#470787"/>
                    <rect width="182" height="438" fill="#470787"/>
                    <rect x="91" width="91" height="517" fill="#470787"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_187_1476">
                    <rect width="650" height="1300" fill="white" className="dark:fill-black"/>
                    </clipPath>
                    </defs>
                </svg>
                <svg width="768" height="1300" className="hidden sm:inline md:hidden" viewBox="0 0 768 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_187_1493)">
                    <rect width="768" height="1300" fill="white" className="dark:fill-black"/>
                    <path d="M1437.5 0C1424.83 18.3333 1389.2 55 1348 55C1306.8 55 1278.17 55 1269 55C1247 53 1202.1 59.5 1198.5 101.5C1194.9 143.5 1197 165 1198.5 170.5C1200.33 190.167 1197.6 231.2 1172 238C1140 246.5 1138 233.5 1136.5 278.5C1135.3 314.5 1136 351.5 1136.5 365.5C1136.67 382 1129.1 415.2 1097.5 416C1058 417 947 410.5 946 557.5C945.2 675.1 945.667 733.833 946 748.5C944.167 797.5 913.4 895.5 805 895.5C696.6 895.5 524.167 895.5 451.5 895.5H265.5C217.667 900.667 122.2 878.5 123 748.5C123.8 618.5 123.333 567 123 557.5C121.5 510.333 94.8 416 0 416" stroke="#470787" strokeWidth="50"/>
                    <line y1="1274" x2="10" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="21" y1="1274" x2="31" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="42" y1="1274" x2="52" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="65" y1="1274" x2="75" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="142" y1="1274" x2="152" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="161.826" y1="1273.75" x2="171.674" y2="1272.02" stroke="#470487" strokeWidth="2"/>
                    <line x1="180.741" y1="1269.62" x2="190.4" y2="1267.03" stroke="#470487" strokeWidth="2"/>
                    <line x1="198.658" y1="1264.48" x2="208.055" y2="1261.06" stroke="#470487" strokeWidth="2"/>
                    <line x1="215.577" y1="1258.32" x2="224.64" y2="1254.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="231.577" y1="1251.32" x2="240.64" y2="1247.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="247.577" y1="1244.32" x2="256.64" y2="1240.09" stroke="#470487" strokeWidth="2"/>
                    <path d="M128 1275L90.5 1296.65V1253.35L128 1275Z" fill="#470487"/>
                    <path d="M123 1275L93 1292.32V1257.68L123 1275Z" fill="white" className="dark:fill-black"/>
                    <path d="M142 0H768V865C768 870.523 763.523 875 758 875H152C146.477 875 142 870.523 142 865V0Z" fill="#470787"/>
                    <rect width="259" height="438" fill="#470787"/>
                    <rect x="91" width="128" height="517" fill="#470787"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_187_1493">
                    <rect width="768" height="1300" fill="white" className="dark:fill-black"/>
                    </clipPath>
                    </defs>
                </svg>
                <svg width="1024" height="1300" className="hidden md:inline lg:hidden" viewBox="0 0 1024 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_187_1502)">
                    <rect width="1024" height="1300" fill="white" className="dark:fill-black"/>
                    <path d="M1437.5 0C1424.83 18.3333 1389.2 55 1348 55C1306.8 55 1278.17 55 1269 55C1247 53 1202.1 59.5 1198.5 101.5C1194.9 143.5 1197 165 1198.5 170.5C1200.33 190.167 1197.6 231.2 1172 238C1140 246.5 1138 233.5 1136.5 278.5C1135.3 314.5 1136 351.5 1136.5 365.5C1136.67 382 1129.1 415.2 1097.5 416C1058 417 947 410.5 946 557.5C945.2 675.1 945.667 733.833 946 748.5C944.167 797.5 913.4 895.5 805 895.5C696.6 895.5 524.167 895.5 451.5 895.5H265.5C217.667 900.667 122.2 878.5 123 748.5C123.8 618.5 123.333 567 123 557.5C121.5 510.333 94.8 416 0 416" stroke="#470787" strokeWidth="50"/>
                    <line y1="1274" x2="10" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="21" y1="1274" x2="31" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="42" y1="1274" x2="52" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="65" y1="1274" x2="75" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="142" y1="1274" x2="152" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="161.826" y1="1273.75" x2="171.674" y2="1272.02" stroke="#470487" strokeWidth="2"/>
                    <line x1="180.741" y1="1269.62" x2="190.4" y2="1267.03" stroke="#470487" strokeWidth="2"/>
                    <line x1="198.658" y1="1264.48" x2="208.055" y2="1261.06" stroke="#470487" strokeWidth="2"/>
                    <line x1="215.577" y1="1258.32" x2="224.64" y2="1254.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="231.577" y1="1251.32" x2="240.64" y2="1247.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="247.577" y1="1244.32" x2="256.64" y2="1240.09" stroke="#470487" strokeWidth="2"/>
                    <path d="M128 1275L90.5 1296.65V1253.35L128 1275Z" fill="#470487"/>
                    <path d="M123 1275L93 1292.32V1257.68L123 1275Z" fill="white" className="dark:fill-black"/>
                    <path d="M142 0H922V866C922 871.523 917.523 876 912 876H152C146.477 876 142 871.523 142 866V0Z" fill="#470787"/>
                    <rect width="337" height="433" fill="#470787"/>
                    <path d="M88 0H191V519H103C94.7157 519 88 512.284 88 504V0Z" fill="#470787"/>
                    <rect x="964" width="60" height="433" fill="#470787"/>
                    <rect x="922" width="42" height="554" fill="#470787"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_187_1502">
                    <rect width="1024" height="1300" fill="white" className="dark:fill-black"/>
                    </clipPath>
                    </defs>
                </svg>
                <svg width="1280" height="1300" className="hidden lg:inline xl:hidden" viewBox="0 0 1280 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_187_1511)">
                    <rect width="1280" height="1300" fill="white" className="dark:fill-black"/>
                    <path d="M1437 0C1424.34 18.3334 1388.72 55.0003 1347.53 55.0003C1306.35 55.0003 1277.72 55.0003 1268.56 55.0003C1246.57 53.0003 1201.68 59.5003 1198.08 101.5C1194.48 143.501 1196.58 165.001 1198.08 170.501C1199.92 190.168 1197.18 231.201 1171.59 238.001C1139.6 246.501 1137.6 233.501 1136.1 278.501C1134.91 314.501 1135.6 351.502 1136.1 365.502C1136.27 382.002 1128.71 415.202 1097.12 416.002C1057.63 417.002 946.671 410.502 945.671 557.503C944.871 675.103 945.338 733.837 945.671 748.504C943.838 797.504 913.082 895.504 804.72 895.504C696.358 895.504 523.984 895.504 451.343 895.504H265.408C217.591 900.671 122.158 878.504 122.957 748.504C123.757 618.503 123.29 567.003 122.957 557.503C121.458 510.336 94.767 416.002 0 416.002" stroke="#470787" strokeWidth="50"/>
                    <path d="M139 0H927V863C927 868.523 922.523 873 917 873H149C143.477 873 139 868.523 139 863V0Z" fill="#470787"/>
                    <rect width="310" height="437" fill="#470787"/>
                    <rect x="91" width="117" height="504" fill="#470787"/>
                    <rect x="869" width="106" height="504" fill="#470787"/>
                    <rect x="927" width="201" height="424" fill="#470787"/>
                    <rect x="1091" width="113" height="229" fill="#470787"/>
                    <rect x="1166" width="114" height="76" fill="#470787"/>
                    <line x1="1140" y1="769" x2="1140" y2="759" stroke="#470487" strokeWidth="2"/>
                    <line x1="1140" y1="787" x2="1140" y2="777" stroke="#470487" strokeWidth="2"/>
                    <line x1="1140" y1="804" x2="1140" y2="794" stroke="#470487" strokeWidth="2"/>
                    <line x1="1140" y1="821" x2="1140" y2="811" stroke="#470487" strokeWidth="2"/>
                    <line x1="1140" y1="839" x2="1140" y2="829" stroke="#470487" strokeWidth="2"/>
                    <line x1="1140" y1="856" x2="1140" y2="846" stroke="#470487" strokeWidth="2"/>
                    <line x1="1140" y1="873" x2="1140" y2="863" stroke="#470487" strokeWidth="2"/>
                    <path d="M1141 697L1162.65 734.5H1119.35L1141 697Z" fill="#470487"/>
                    <path d="M1141 702L1158.32 732H1123.68L1141 702Z" fill="white" className="dark:fill-black"/>
                    <line x1="1140" y1="752" x2="1140" y2="742" stroke="#470487" strokeWidth="2"/>
                    <line y1="1274" x2="10" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="21" y1="1274" x2="31" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="42" y1="1274" x2="52" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="65" y1="1274" x2="75" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="142" y1="1274" x2="152" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="161.826" y1="1273.75" x2="171.674" y2="1272.02" stroke="#470487" strokeWidth="2"/>
                    <line x1="180.741" y1="1269.62" x2="190.4" y2="1267.03" stroke="#470487" strokeWidth="2"/>
                    <line x1="198.658" y1="1264.48" x2="208.055" y2="1261.06" stroke="#470487" strokeWidth="2"/>
                    <line x1="215.577" y1="1258.32" x2="224.64" y2="1254.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="231.577" y1="1251.32" x2="240.64" y2="1247.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="247.577" y1="1244.32" x2="256.64" y2="1240.09" stroke="#470487" strokeWidth="2"/>
                    <path d="M128 1275L90.5 1296.65V1253.35L128 1275Z" fill="#470487"/>
                    <path d="M123 1275L93 1292.32V1257.68L123 1275Z" fill="white" className="dark:fill-black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_187_1511">
                    <rect width="1280" height="1300" fill="white" className="dark:fill-black"/>
                    </clipPath>
                    </defs>
                </svg>
                <svg width="1536" height="1300" className="hidden xl:inline" viewBox="0 0 1536 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_187_1520)">
                    <rect width="1536" height="1300" fill="white" className="dark:fill-black"/>
                    <path d="M1437 0C1424.34 18.2888 1388.72 54.8665 1347.53 54.8665C1306.35 54.8665 1277.72 54.8665 1268.56 54.8665C1246.57 52.8713 1201.68 59.3555 1198.08 101.254C1194.48 143.152 1196.58 164.599 1198.08 170.086C1199.92 189.705 1197.18 230.639 1171.59 237.422C1139.6 245.902 1137.6 232.933 1136.1 277.824C1134.91 313.736 1135.6 350.647 1136.1 364.613C1136.27 381.073 1128.71 414.192 1097.12 414.99C1057.63 415.988 946.671 409.503 945.671 556.147C944.871 673.461 945.338 732.052 945.671 746.683C943.838 795.564 913.082 893.326 804.72 893.326C696.358 893.326 523.984 893.326 451.343 893.326H265.408C217.591 898.48 122.158 876.367 122.957 746.683C123.757 616.998 123.29 565.623 122.957 556.147C121.458 509.094 94.767 414.99 0 414.99" stroke="#470787" strokeWidth="51"/>
                    <line x1="1344" y1="897" x2="1354" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1324" y1="897" x2="1334" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1304" y1="897" x2="1314" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1283" y1="897" x2="1293" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1363" y1="897" x2="1373" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1437" y1="897" x2="1447" y2="897" stroke="#470487" strokeWidth="2"/>
                    <line x1="1456.83" y1="896.752" x2="1466.67" y2="895.015" stroke="#470487" strokeWidth="2"/>
                    <line x1="1475.74" y1="892.622" x2="1485.4" y2="890.034" stroke="#470487" strokeWidth="2"/>
                    <line x1="1493.66" y1="887.481" x2="1503.05" y2="884.06" stroke="#470487" strokeWidth="2"/>
                    <line x1="1510.58" y1="881.32" x2="1519.64" y2="877.094" stroke="#470487" strokeWidth="2"/>
                    <line x1="1526.58" y1="874.32" x2="1535.64" y2="870.094" stroke="#470487" strokeWidth="2"/>
                    <path d="M1423 898L1385.5 919.651V876.349L1423 898Z" fill="#470487"/>
                    <line x1="1140" y1="767" x2="1140" y2="757" stroke="#470487" strokeWidth="2"/>
                    <line x1="1140" y1="785" x2="1140" y2="775" stroke="#470487" strokeWidth="2"/>
                    <line x1="1140" y1="802" x2="1140" y2="792" stroke="#470487" strokeWidth="2"/>
                    <line x1="1140" y1="819" x2="1140" y2="809" stroke="#470487" strokeWidth="2"/>
                    <line x1="1140" y1="837" x2="1140" y2="827" stroke="#470487" strokeWidth="2"/>
                    <line x1="1140" y1="854" x2="1140" y2="844" stroke="#470487" strokeWidth="2"/>
                    <line x1="1140" y1="871" x2="1140" y2="861" stroke="#470487" strokeWidth="2"/>
                    <path d="M1141 695L1162.65 732.5H1119.35L1141 695Z" fill="#470487"/>
                    <path d="M1141 700L1158.32 730H1123.68L1141 700Z" fill="white" className="dark:fill-black"/>
                    <line x1="1140" y1="750" x2="1140" y2="740" stroke="#470487" strokeWidth="2"/>
                    <line y1="1274" x2="10" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="21" y1="1274" x2="31" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="42" y1="1274" x2="52" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="65" y1="1274" x2="75" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="142" y1="1274" x2="152" y2="1274" stroke="#470487" strokeWidth="2"/>
                    <line x1="161.826" y1="1273.75" x2="171.674" y2="1272.02" stroke="#470487" strokeWidth="2"/>
                    <line x1="180.741" y1="1269.62" x2="190.4" y2="1267.03" stroke="#470487" strokeWidth="2"/>
                    <line x1="198.658" y1="1264.48" x2="208.055" y2="1261.06" stroke="#470487" strokeWidth="2"/>
                    <line x1="215.577" y1="1258.32" x2="224.64" y2="1254.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="231.577" y1="1251.32" x2="240.64" y2="1247.09" stroke="#470487" strokeWidth="2"/>
                    <line x1="247.577" y1="1244.32" x2="256.64" y2="1240.09" stroke="#470487" strokeWidth="2"/>
                    <path d="M128 1275L90.5 1296.65V1253.35L128 1275Z" fill="#470487"/>
                    <path d="M123 1275L93 1292.32V1257.68L123 1275Z" fill="white" className="dark:fill-black"/>
                    <rect x="142" width="779" height="871" fill="#470787"/>
                    <rect x="95" width="96" height="515" fill="#470787"/>
                    <rect width="225" height="432" fill="#470787"/>
                    <rect x="901" width="61" height="561" fill="#470787"/>
                    <rect x="1062" width="117" height="244" fill="#470787"/>
                    <rect x="1141" width="193" height="77" fill="#470787"/>
                    <rect x="1293" width="135" height="41" fill="#470787"/>
                    <rect x="1432.88" y="0.61084" width="29.6003" height="28.4861" transform="rotate(-55 1432.88 0.61084)" fill="#470787"/>
                    <rect x="901" width="218" height="435" fill="#470787"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_187_1520">
                    <rect width="1536" height="1300" fill="white" className="dark:fill-black"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    )
}