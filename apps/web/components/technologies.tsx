import aws from "../images/aws.png";
import laravel from "../images/laravel.png";
import php from "../images/php.png";
import react from "../images/react.png";
import typescript from "../images/typescript.png";

function Technologies() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-white">
                    Experienced with innovative and established technologies
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src={typescript.src}
                        alt="TypeScript"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src={react.src}
                        alt="React"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src={aws.src}
                        alt="AWS"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src={laravel.src}
                        alt="Laravel"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src={php.src}
                        alt="PHP"
                        width={158}
                        height={48}
                    />
                </div>
                <div className="mt-16 flex justify-center">
                    <p className="relative rounded-full bg-gray-800 px-4 py-1.5 text-sm leading-6 text-gray-300">
                        <span className="hidden md:inline">
                            Over 2500 companies use our tools to better their business.
                        </span>
                        <a href="#" className="font-semibold text-white">
                            <span className="absolute inset-0" aria-hidden="true" /> Read our customer stories{" "}
                            <span aria-hidden="true">&rarr;</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Technologies;
