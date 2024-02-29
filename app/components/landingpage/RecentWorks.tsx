import PhotoScroll from "./PhotoScroll";
import Photo1 from "/public/images/site2.jpg";
import Photo2 from "/public/images/site4.jpg";
import Photo3 from "/public/images/site5.jpg";
import Photo4 from "/public/images/site6.jpg";
import Photo5 from "/public/images/site7.jpg";
import Photo6 from "/public/images/site8.jpg";
import Photo7 from "/public/images/site9.jpg";
import Photo8 from "/public/images/site10.jpg";
import Photo9 from "/public/images/site11.jpg";
import Photo10 from "/public/images/site12.jpg";

export default function RecentWorks() {
    const images = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8, Photo9, Photo10];
    const images2 = [Photo6, Photo7, Photo8, Photo9, Photo10, Photo1, Photo2, Photo3, Photo4, Photo5 ];

    return (
        <div className="col-span-8 mb-20">
            <PhotoScroll images={images} direction="left"/>
            <div className="rounded-md  flex justify-center sm:py-[125px] py-20">
                <h1 className="w-[250px] sm:w-[300px] text-center text-3xl sm:text-4xl 
                    font-bold dark:text-white"> Designed by
                    <span className="text-[#470787]"> Focus Creative </span>
                </h1>
            </div>
            <div className="h-[300px]">
            <PhotoScroll images={images2}/>
            </div>
        </div>
    )
}